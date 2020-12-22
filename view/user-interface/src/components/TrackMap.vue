<template>
  <div class="patrol_area">
    <div id="allmap" style="height:600px;margin-top:5px;"></div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      points: null,
      maps: "",
      pl: "",
      timer: null,
      mk: null,
    };
  },
  mounted() {
    this.pathStart();
  },
  methods: {
    async pathStart() {
      this.maps = new BMapGL.Map("allmap");

      this.maps.enableScrollWheelZoom(true);

      await this.$store.dispatch("updateGeo");
      this.pl = new BMapGL.Polyline([
        new BMapGL.Point(this.$store.state.environment.geo.lat,
                this.$store.state.environment.geo.lng),
        new BMapGL.Point(this.$store.state.environment.geo.lat,
                this.$store.state.environment.geo.lng),
      ]);
      this.maps.addOverlay(this.pl);

      let list = this.pl.getPath();
      list.push(new BMapGL.Point(this.$store.state.environment.geo.lat,
                this.$store.state.environment.geo.lng));
      this.pl.setPath(list);

      this.mk = new BMapGL.Marker(new BMapGL.Point(this.$store.state.environment.geo.lat,
                this.$store.state.environment.geo.lng));

      this.maps.addOverlay(this.mk);
      this.timer = setInterval(this.updatePotion, 1000);
    },
    async updatePotion() {
      await this.$store.dispatch("updateGeo");
      let list = this.pl.getPath();
      console.log(this.$store.state.environment.geo)
      const point=new BMapGL.Point(this.$store.state.environment.geo.lat,
                this.$store.state.environment.geo.lng);
      list.push(point);
      this.pl.setPath(list);
      this.maps.panTo(point);

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
</style>
