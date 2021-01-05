<template>
  <div class="patrol_area">
    <div id="allmap" style="height:100vh;margin-top:5px;"></div>
    <v-btn fab @click="$router.back()" class="back-btn">Back</v-btn>
    <v-btn fab @click="switchFrontLight" class="back-btn-2">Light</v-btn>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      points: null,
      maps: "",
      pl: null,
      timer: null,
      mk: null,
    };
  },
  mounted() {
    this.pathStart();
  },
  methods: {
    async switchFrontLight() {
      this.frontLight = !this.frontLight;
      await this.$store.dispatch("updateLight1", this.frontLight);
    },
    async pathStart() {
      this.maps = new BMapGL.Map("allmap");
      this.maps.enableScrollWheelZoom(true);
      this.maps.centerAndZoom(new BMapGL.Point(121.814224, 31.156484), 10);
      await this.$store.dispatch("updateGeo");
      this.timer = setInterval(this.updatePotion, 1000);
    },
    async updatePotion() {
      await this.$store.dispatch("updateGeo");

      const point = new BMapGL.Point(
        this.$store.state.environment.geo.lng,
        this.$store.state.environment.geo.lat
      );

      if (this.pl == null || this.pl == undefined) {
        let convertor = new BMap.Convertor();
        let pointArr = [];
        pointArr.push(point);
        convertor.translate(pointArr, 1, 5, (data) => {
          this.pl = new BMapGL.Polyline([
            new BMapGL.Point(
              data.points[0].lng,
              data.points[0].lat
            ),
            new BMapGL.Point(
              data.points[0].lng,
              data.points[0].lat
            ),
          ]);
          this.maps.addOverlay(this.pl);
        });
        return
      }

      let list = this.pl.getPath();
      let convertor = new BMap.Convertor();
      let pointArr = [];
      pointArr.push(point);
      convertor.translate(pointArr, 1, 5, (data) => {
        if (data.status === 0) {
          list.push(data.points[0]);
          this.pl.setPath(list);
          this.maps.panTo(data.points[0]);
        }
      });
    },
  },
  beforeDestroy() {
    clearInterval(this.timer);
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
#allmap {
  position: absolute;
  height: 100vh;
  width: 100vw;
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
</style>
