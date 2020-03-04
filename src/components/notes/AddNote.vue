<template>
  <v-container fluid>
    <v-form>
      <v-layout row wrap-reverse>
        <v-flex class="align-right">
          <v-btn tile @click="addNote">Add Note</v-btn>
        </v-flex>
      </v-layout>

      <v-layout column class="mt-8">
        <v-text-field
          label="Title"
          outlined
          v-model="form.title"
        ></v-text-field>

        <v-textarea
          class="mt-4"
          label="Body"
          outlined
          v-model="form.body"
        ></v-textarea>
      </v-layout>

      <v-layout row wrap-reverse>
        <v-flex class="align-right">
          <v-btn tile color="primary" @click="addNote">Save</v-btn>
        </v-flex>
      </v-layout>
    </v-form>
  </v-container>
</template>

<script>
const initialForm = {
  title: '',
  body: '',
};

export default {
  name: 'addNote',

  data: () => ({
    form: initialForm,
  }),

  methods: {
    addNote () {
      this.$store.commit('addNewNote',{
        body: this.form.body,
        title: this.form.title,
      });

      this.form.body = '';
      this.form.title = '';
    },
  }
};
</script>

<style scoped>
  .align-right {
    text-align-last: right;
    margin-right: 20px;
  }
</style>
