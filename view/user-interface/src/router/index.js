import Vue from 'vue'
import VueRouter from 'vue-router'
import TrackMapView from '../views/TrackMapView.vue'
import FinderMapView from '../views/BikeFinderView.vue'
import DashBoard from '../views/DashBoard.vue'
import PostureView from '../views/PostureView.vue'
import CameraView from '../views/CameraView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'DashBoard',
    component: DashBoard
  },
  {
    path: '/posture',
    name: 'Posture',
    component: PostureView
  },
  {
    path: '/track',
    name: 'Track',
    component: TrackMapView
  },
  {
    path: '/finder',
    name: 'Finder',
    component: FinderMapView
  },
  {
    path: '/camera',
    name: 'Camera',
    component: CameraView
  }
]

const router = new VueRouter({
  routes
})

export default router
