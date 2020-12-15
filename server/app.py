import json
import sys
from gps import *
import time
import smbus
from flask import Flask
from flask import jsonify
from flask import request
import threading
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

gpsp = GpsPoller() # create the thread
gpsp.start() # start it up

address = 0x68
bus = smbus.SMBus(1)
imu = MPU9250.MPU9250(bus, address)
imu.begin()

app = Flask(__name__)

@app.route('/')
def index():
    return jsonify({"code":0,"msg":"OK" })

@app.route('/location')
def location():
    print ('latitude' , gpsd.fix.latitude)
    print ('longitude' , gpsd.fix.longitude)
    print ('altitude (m)' , gpsd.fix.altitude)
    return jsonify({"code":0,"msg":"OK" ,"data":{
        "latitude":gpsd.fix.latitude, "longitude":gpsd.fix.longitude,"altitude":gpsd.fix.altitude,"status":gpsd.fix.status,"speed":gpsd.fix.speed
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

@app.route('/sound/play')
def play_sound():
    return jsonify({"code":0,"msg":"OK" })

@app.route('/sound/stop')
def stop_sound():
    return jsonify({"code":0,"msg":"OK" })

@app.route('/light/get')
def get_light():
    return jsonify({"code":0,"msg":"OK" })

@app.route('/light/set')
def set_light():
    return jsonify({"code":0,"msg":"OK" })

if __name__ == '__main__':
    app.run(port=8001)