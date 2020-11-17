<template>
  <div>
    <b-alert show variant="danger" class="text-center" v-show="message.error" >{{
      message.text
    }}</b-alert>
    <b-alert show variant="success" class="text-center" v-show="message.success" >{{
      message.text
    }}</b-alert>
  </div>
</template>
<script>
export default {
  name: "Alert",
  props: {
    message: {
      type: Object,
      required: true,
    },
  },
};
</script>