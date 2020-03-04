<template>
  <div>
    <v-list-item two-line v-for="(note, index) in notes" v-bind:key="index">
      <v-list-item-content>
        <v-layout>
          <v-list-item-title >{{note.title}}</v-list-item-title>
          <v-btn @click="deleteNote(note.title)">Delete</v-btn>
        </v-layout>
        <v-list-item-subtitle>{{note.body}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script>
export default {
  name: 'listNote',

  computed: {
    notes() {
      return this.$store.getters.notes;
    }
  },

  methods: {
    deleteNote (title) {
      this.$store.commit('deleteNote', title);
    },
  }
};
</script>

<style scoped>
</style>
