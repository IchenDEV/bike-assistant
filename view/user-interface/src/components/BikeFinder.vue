<template>
  <div class="patrol_area">
    <div id="allmap" style="height:100vh;margin-top:5px;"></div>
    <v-btn fab @click="$router.back()" class="back-btn">Back</v-btn>
    <v-btn fab @click="switchFrontLight" class="back-btn-2">Light</v-btn>
  </div>
</template>

<script>
export default {
  name: "BikeFinder",
  data() {
    return {
      map: "",
      geolocation: null,
      timer: null,
      mk: null,
      driving: null,
    };
  },
  mounted() {
    this.Start();
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    Start() {
      this.map = new BMapGL.Map("allmap");
      let map = this.map;
      map.centerAndZoom(new BMapGL.Point(121.814224, 31.156484), 10);
      map.enableScrollWheelZoom(true);

      this.geolocation = new BMapGL.Geolocation();
      this.timer = setInterval(this.updatePos, 10000);
      this.driving = new BMapGL.WalkingRoute(this.map, {
        renderOptions: { map: this.map, autoViewport: false },
      });
    },
     async switchFrontLight() {
      this.frontLight = !this.frontLight;
      await this.$store.dispatch("updateLight1", this.frontLight);
    },
    updatePos() {
      let that = this;
      this.geolocation.getCurrentPosition(
        async function(r) {
          if (this.getStatus() == BMAP_STATUS_SUCCESS) {
            that.mk = new BMapGL.Marker(r.point);

            that.map.clearOverlays();
            that.map.addOverlay(that.mk);
            try {
              await that.$store.dispatch("updateGeo");
              let p1 = r.point;

              let p2 = new BMapGL.Point(
                that.$store.state.environment.geo.lng,
                that.$store.state.environment.geo.lat
              );

              let convertor = new BMap.Convertor();
              let pointArr = [];
              pointArr.push(p2);
              convertor.translate(pointArr, 1, 5, (data) => {
                if (data.status === 0) {
                  that.map.panTo(data.points[0]);
                  let p2 = new BMapGL.Point(
                    data.points[0].lng,
                    data.points[0].lat
                  );
                  let mk = new BMapGL.Marker(p2);
                  that.map.addOverlay(p2);
                  that.driving.search(p1, p2);
                }
              });
            } catch {}
          }
        },
        { enableHighAccuracy: true }
      );
    },
  },
};
</script>

<style lang="css" scoped>
.container {
  margin: 30px;
}
.text {
  font-size: 30px;
  line-height: 46px;
}
.back-btn {
  position: absolute;
  bottom: 0;
  z-index: 10;
  left: 1rem;
}
.back-btn-2 {
  position: absolute;
  bottom: 4rem;
  z-index: 10;
  left: 1rem;
}
#allmap {
  position: absolute;
  height: 100vh;
  width: 100vw;
}
</style>
