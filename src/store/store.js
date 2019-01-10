import Vue from 'vue';
import Vuex from 'vuex';

//Instantiate Vuex instance
Vue.use(Vuex);

//Create & Export Store for Global Use
export const store = new Vuex.Store({
  debug: true,
  state: {
    message: 'State/Store initialized'
  },
  setMessageAction(newVal) {
    if (this.debug) {
      console.log('setMessageAction was triggered with ' + newVal);
    }
  },
  clearMessageAction() {
    if (this.debug) {
      console.log('clearMessageAction triggered');
      this.state.message = '';
    }
  }
});
