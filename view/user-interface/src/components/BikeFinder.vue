<template>
  <div class="patrol_area">
    <div id="allmap" style="height:100vh;margin-top:5px;"></div>
    <v-btn fab @click="$router.back()" class="back-btn">Back</v-btn>
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
      map.centerAndZoom(new BMapGL.Point(121.814224, 31.156484), 17);
      map.enableScrollWheelZoom(true);

      this.geolocation = new BMapGL.Geolocation();
      this.timer = setInterval(this.updatePos, 1000);
      this.driving = new BMapGL.WalkingRoute(this.map, {
        renderOptions: { map: this.map, autoViewport: false },
      });
    },
    updatePos() {
      let that = this;
      this.geolocation.getCurrentPosition(
        async function(r) {
          if (this.getStatus() == BMAP_STATUS_SUCCESS) {
            
            that.mk = new BMapGL.Marker(r.point);
            that.map.panTo(r.point);
            that.map.addOverlay(that.mk);
            try {
              await that.$store.dispatch("updateGeo");
              var p1 = r.point;
              var p2 = new BMapGL.Point(
                that.$store.state.environment.geo.lat,
                that.$store.state.environment.geo.lng
              );

              that.driving.search(p1, p2);
            } catch {}
          } else {
            alert("failed" + this.getStatus());
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
#allmap {
  position: absolute;
  height: 100vh;
  width: 100vw;
}
</style>
