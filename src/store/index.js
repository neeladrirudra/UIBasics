import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    notes: [{
      title: 'first note',
      body: 'this is my first note'
    }]
  },

  getters: {
    notes (state) {
      return state.notes
    }
  },

  mutations: {
    addNewNote (state, note) {
      state.notes.push(note)
    },

    deleteNote (state, title) {
      state.notes = state.notes.filter(note => note.title !== title);
    }
  },

  actions: {
    // Not required as no service call
  }
});