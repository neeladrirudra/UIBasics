<template>
  <v-app>
    <v-system-bar app>
      <h4>G Notes</h4>
    </v-system-bar>

    <v-navigation-drawer app>
      <ListNote />
    </v-navigation-drawer>

    <!-- Sizes your content based upon application components -->
    <v-content>
      <AddNote />
    </v-content>
  </v-app>
</template>

<script>
import AddNote from '../components/notes/AddNote.vue'
import ListNote from '../components/notes/ListNote.vue'

export default {
  name: 'notes',

  components: {
    AddNote,
    ListNote,
  },

  data: () => ({
    //
  }),
};
</script>
