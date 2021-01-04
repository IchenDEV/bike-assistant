import json
import sys
from gps import *
import RPi.GPIO as GPIO
import time
import smbus
from flask import Flask
from flask import jsonify
from flask import request
from flask_cors import *
from bmp_280 import BMP280
import threading
from imutils.video import VideoStream
from flask import Response
from flask import Flask
from flask import render_template
import threading
import argparse
import datetime
import imutils
import time
from motion_detection.motion_detection import SingleMotionDetector
import cv2
from imusensor.MPU9250 import MPU9250

gpsd=None
class GpsPoller(threading.Thread):
  def __init__(self):
    threading.Thread.__init__(self)
    global gpsd #bring it in scope
    gpsd = gps(mode=WATCH_ENABLE) #starting the stream of info
    self.current_value = None
    self.running = True #setting the thread running to true
 
  def run(self):
    global gpsd
    while gpsp.running:
      gpsd.next() #this will continue to loop and grab EACH set of gpsd info to clear the buffer

# initialize the output frame and a lock used to ensure thread-safe
# exchanges of the output frames (useful for multiple browsers/tabs
# are viewing tthe stream)
outputFrame = None
lock = threading.Lock()
gpsp = GpsPoller() # create the thread
gpsp.start() # start it up
from bmp280 import BMP280
try:
    from smbus2 import SMBus
except ImportError:
    from smbus import SMBus
address = 0x68
bus = smbus.SMBus(1)
imu = MPU9250.MPU9250(bus, address)
imu.begin()
vs = VideoStream(src=0).start()
# Initialise the BMP280
bus = SMBus(1)
bmp280 = BMP280(i2c_dev=bus)

GPIO.setmode(GPIO.BOARD)
GPIO.setup(11, GPIO.OUT)
GPIO.setup(12, GPIO.OUT)
app = Flask(__name__,static_url_path='')
CORS(app, supports_credentials=True)  # 设置跨域

@app.route('/')
def index():
    return app.send_static_file('html/index.html')

@app.route('/location')
def location():
    return jsonify({"code":0,"msg":"OK" ,"data":{
        "latitude":gpsd.fix.latitude, 
		"longitude":gpsd.fix.longitude,
		"altitude":gpsd.fix.altitude,"status":gpsd.fix.status,
		"speed":gpsd.fix.speed
    } })

@app.route('/posture')
def posture():
    imu.readSensor()
    imu.computeOrientation()
    print ("roll: {0} ; pitch : {1} ; yaw : {2}".format(imu.roll, imu.pitch, imu.yaw))
    return jsonify({"code":0,"msg":"OK","data":{"roll":imu.roll, "pitch":imu.pitch,"yaw":imu.yaw}})

@app.route('/temperature')
def temperature():
    imu.readSensor()
    return jsonify({"code":0,"msg":"OK","data":imu.Temp})

@app.route('/pressure')
def pressure():
    pressure = bmp280.get_pressure()
    return jsonify({"code":0,"msg":"OK","data":pressure})


@app.route('/sound/play')
def play_sound():
    return jsonify({"code":0,"msg":"OK" })

@app.route('/sound/stop')
def stop_sound():
    return jsonify({"code":0,"msg":"OK" })

@app.route('/light/down')
def get_light():
    GPIO.output(11, GPIO.LOW)
    return jsonify({"code":0,"msg":"OK" })

@app.route('/light/up')
def set_light():
    GPIO.output(11, GPIO.HIGH)
    return jsonify({"code":0,"msg":"OK" })

@app.route('/light2/down')
def get_light2():
    GPIO.output(12, GPIO.LOW)
    return jsonify({"code":0,"msg":"OK" })

@app.route('/light2/up')
def set_light2():
    GPIO.output(12, GPIO.HIGH)
    return jsonify({"code":0,"msg":"OK" })

@app.route("/video_feed")
def video_feed():
	# return the response generated along with the specific media
	# type (mime type)
	return Response(generate(),
		mimetype = "multipart/x-mixed-replace; boundary=frame")

def detect_motion(frameCount):
	# grab global references to the video stream, output frame, and
	# lock variables
	global vs, outputFrame, lock

	# initialize the motion detector and the total number of frames
	# read thus far
	md = SingleMotionDetector(accumWeight=0.1)
	total = 0

	# loop over frames from the video stream
	while True:
		# read the next frame from the video stream, resize it,
		# convert the frame to grayscale, and blur it
		frame = vs.read()
		frame = imutils.resize(frame, width=400)
		gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
		gray = cv2.GaussianBlur(gray, (7, 7), 0)

		# grab the current timestamp and draw it on the frame
		timestamp = datetime.datetime.now()
		cv2.putText(frame, timestamp.strftime(
			"%A %d %B %Y %I:%M:%S%p"), (10, frame.shape[0] - 10),
			cv2.FONT_HERSHEY_SIMPLEX, 0.35, (0, 0, 255), 1)

		# if the total number of frames has reached a sufficient
		# number to construct a reasonable background model, then
		
		# continue to process the frame
		if total > frameCount:
			# detect motion in the image
			motion = md.detect(gray)

			# cehck to see if motion was found in the frame
			if motion is not None:
				# unpack the tuple and draw the box surrounding the
				# "motion area" on the output frame
				(thresh, (minX, minY, maxX, maxY)) = motion
				cv2.rectangle(frame, (minX, minY), (maxX, maxY),
					(0, 0, 255), 2)
		
		# update the background model and increment the total number
		# of frames read thus far
		md.update(gray)
		total += 1

		# acquire the lock, set the output frame, and release the
		# lock
		with lock:
			outputFrame = frame.copy()

def generate():
	# grab global references to the output frame and lock variables
	global outputFrame, lock

	# loop over frames from the output stream
	while True:
		# wait until the lock is acquired
		with lock:
			# check if the output frame is available, otherwise skip
			# the iteration of the loop
			if outputFrame is None:
				continue

			# encode the frame in JPEG format
			(flag, encodedImage) = cv2.imencode(".jpg", outputFrame)

			# ensure the frame was successfully encoded
			if not flag:
				continue

		# yield the output frame in the byte format
		yield(b'--frame\r\n' b'Content-Type: image/jpeg\r\n\r\n' + 
			bytearray(encodedImage) + b'\r\n')

if __name__ == '__main__':
    t = threading.Thread(target=detect_motion, args=(1,))
    t.daemon = True
    t.start()
    app.run(port=8003,threaded=True, use_reloader=False)