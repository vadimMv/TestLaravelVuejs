<template>
  <b-container class="bv-example-row">
    <h1 class="text-center">Lead Form</h1>
    <b-row align-h="center">
      <b-col cols="6">
        <Alert v-bind:message="message" />
        <Form v-on:server-message="handler" />
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import Form from "./Form";
import Alert from "./Alerts";
export default {
  name: "Layout",
  components: {
    Form,
    Alert,
  },
  data() {
    return {
      message: {
        text: "",
        error: false,
        success: false,
      },
    };
  },
  methods: {
    handler(mess) {
      this.message.text = mess.text;
      this.message.error = mess.error;
      this.message.success = mess.success;
    },
  },
};
</script>
<style scoped>
</style>