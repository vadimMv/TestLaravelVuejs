<template>
  <div>
    <b-form @submit="onSubmit">
      <b-form-group
        id="input-group-full-name"
        label="Full Name:"
        label-for="input-full-name"
      >
        <b-form-input
          id="input-full-name"
          v-model="form.name"
          type="text"
          placeholder="Enter Full Name"
          :state="validationName"
        ></b-form-input>
        <b-form-invalid-feedback :state="validationName">
          Full Name must field , Please enter valid Name ( Only letters and
          spaces ).
        </b-form-invalid-feedback>
        <b-form-valid-feedback :state="validationName">
          Looks Good.
        </b-form-valid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-telephone"
        label="Your Telephone:"
        label-for="input-telephone"
      >
        <b-form-input
          id="input-telephone"
          v-model="form.telephone"
          type="text"
          placeholder="Enter Telephone"
          :state="validationTelephone"
        ></b-form-input>
        <b-form-invalid-feedback :state="validationTelephone">
          Telephone must field , Please enter valid number ( Only 9 digits )
        </b-form-invalid-feedback>
        <b-form-valid-feedback :state="validationTelephone">
          Looks Good.
        </b-form-valid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-email"
        label="Your Email:"
        label-for="input-emal"
      >
        <b-form-input
          id="input-email"
          v-model="form.email"
          type="text"
          placeholder="Enter Email"
          :state="validationEmail"
        ></b-form-input>
        <b-form-invalid-feedback :state="validationEmail">
          Email must field , Please enter valid email.
        </b-form-invalid-feedback>
        <b-form-valid-feedback :state="validationEmail">
          Looks Good.
        </b-form-valid-feedback>
      </b-form-group>

      <b-form-group id="input-group-id" label="Your ID:" label-for="input-id">
        <b-form-input
          id="input-id"
          v-model="form.id"
          type="text"
          placeholder="Enter ID number"
          :state="validationId"
        ></b-form-input>
        <b-form-invalid-feedback :state="validationId">
          ID must field , Please enter valid Israel ID.
        </b-form-invalid-feedback>
        <b-form-valid-feedback :state="validationId">
          Looks Good.
        </b-form-valid-feedback>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      
    </b-form>
  </div>
</template>

<script>
import {
  isValidIsraeliID,
  isValidEmail,
  isValidName,
  isValidTelephone,
} from "../js/helpers";
export default {
  data() {
    return {
      showValidation: false,
      form: {
        email: "",
        name: "",
        telephone: "",
        id: "",
      },
    };
  },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault();
      //validation
      if (true) {
        const data = {
          email: this.form.email,
          id: this.form.id,
          name: this.form.name,
          telephone: this.form.telephone,
        };
        const response = await axios.post(
          "https://ibell.frb.io/api/test/getJson",
          data
        );
        console.log(response);
        const { status, hbJson, errmsg } = response.data;

        if (status === "success") {
          const countPremia = Object.values(hbJson)
            .filter((value) => Array.isArray(value))
            .reduce((res, val) => res.concat(val), [])
            .reduce((acc, val) => acc + Number(val.premia), 0);

          const response2 = await axios.post(
            "https://ibell.frb.io/zapier/add/lead/38754",
            data
          );
          console.log(response2);
        }
      }
    },
  },
  computed: {
    validationId() {
      if (!this.showValidation) return null;
      return isValidIsraeliID(this.form.id);
    },
    validationName() {
      if (!this.showValidation) return null;
      return isValidName(this.form.name);
    },
    validationEmail() {
      if (!this.showValidation) return null;
      return isValidEmail(this.form.email);
    },
    validationTelephone() {
      if (!this.showValidation) return null;
      return isValidTelephone(this.form.telephone);
    },
  },
};
</script>