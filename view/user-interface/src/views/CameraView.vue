<template>
  <div>
    <v-img class="camera" src="http://127.0.0.1:8003/video_feed" />
  </div>
</template>

<script>
export default {
  name: "CameraView",
};
</script>
<style>
.camera {
  width: 100vw;
  height: 100vh;
}
</style>
