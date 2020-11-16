<template>
  <b-container class="bv-example-row">
    <h1 class="text-center">Client Form</h1>
    <Alert />
    <b-row align-h="center">
      <b-col cols="6">
        <Form />
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
    Alert
  },
};
</script>
<style scoped>
</style>