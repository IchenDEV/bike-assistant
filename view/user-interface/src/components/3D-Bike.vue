<template>
  <div>
    <model-obj
      @on-load="onLoad"
      :backgroundAlpha="0"
      :controlsOptions="{
        enablePan,
        enableZoom,
        enableRotate,
      }"
      src="/models/obj/Sepeda Facific Invert.obj"
      mtl="/models/obj/Sepeda Facific Invert.mtl"
      :rotation="rotation"
      :scale="scale"
    ></model-obj>
  </div>
</template>
<script>
import { ModelObj } from "vue-3d-model";
export default {
  components: { ModelObj },
  data() {
    return {
      enablePan: true,
      enableZoom: false,
      enableRotate: false,
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      },
      scale:{
        x: 3, y: 3, z: 3 
      }
    };
  },
  methods: {
    onLoad() {
      this.rotate();
    },
    async rotate() {
      let data = await fetch("/posture");
      data = await data.json();
      this.rotation.x = data.data.pitch / 3.14;
      this.rotation.z = -(data.data.roll - 90) / 2;

      if(this.rotation.z>1||this.rotation.z<-1){
        let audio = document.getElementById("audio");
        audio.play();
        this.$store.state.showWindow=true;
        }
      else {
        let audio = document.getElementById("audio");
        audio.stop();
        this.$store.state.showWindow=false;
      }
      console.log(this.rotation);
      requestAnimationFrame(this.rotate);
    },
  },
};
</script>
