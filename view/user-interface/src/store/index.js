import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    device:{
      light:{
        light1:true,
        light2:true,
      }
    },
    environment:{
        geo:{
          lat:30,
          lng:122,
        },
        temperature:0,
        speed:0,
        altitude:0,
        pressure:0
    }
    
  },
  mutations: {
    setTemperature(state, payload){
      state.environment.temperature=payload;
    },
    setPressure(state, payload){
      state.environment.pressure=payload;
    },
    setSpeed(state, payload){
      state.environment.speed=payload;
    },
    setAltitude(state, payload){
      state.environment.altitude=payload;
    },
    setLight1(state, payload){
      state.device.light.light1=payload;
    },
    setLight2(state, payload){
      state.device.light.light2=payload;
    },
    setGeo(state, payload){
      state.environment.geo=payload
    },
    getGeo(state, payload){
      return state.environment.geo
    }
  },
  actions: {
    async updateTemperature(context) {
      let res = await (await fetch("http://127.0.0.1:8003/temperature")).json();
      context.commit('setTemperature',res.data.toString().substr(0,4));
    },
    async updatePressure(context) {
      let res = await (await fetch("http://127.0.0.1:8003/pressure")).json();
      context.commit('setPressure',res.data.toString().substr(0,4));
    },
    async updateGeo(context) {
      let res = await (await fetch("http://127.0.0.1:8003/location")).json();
      context.commit('setSpeed',res.data.speed);
      context.commit('setAltitude',res.data.altitude);
      context.commit('setGeo',{lat:res.data.latitude,lng:res.data.longitude});
      return {lat:res.data.latitude,lng:res.data.longitude}
    },
    async updateLight1(context,payload) {
      if(!payload)
      await (await fetch("http://127.0.0.1:8003/light/up")).json();
      else
      await (await fetch("http://127.0.0.1:8003/light/down")).json();
      context.commit('setLight1',res.data);
    },
    async updateLight2(context,payload) {
      if(!payload)
      await (await fetch("http://127.0.0.1:8003/light2/up")).json();
      else
      await (await fetch("http://127.0.0.1:8003/light2/down")).json();
      context.commit('setLight2',res.data);
      
    },
  },
  modules: {
  }
})
