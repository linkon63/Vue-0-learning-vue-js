<script>
export default {
  data() {
    return {
      userData: {
        email: "",
        password: "",
        age: 0,
        message: "",
        sendMail: [],
        gender: "Male",
      },
      selectedPriority: "Low",
      priorities: ["High", "Medium", "Low"],
      isSubmitted: false,
    };
  },
  methods: {
    submitted() {
      this.isSubmitted = true;
    },
  },
  //   destroyed() {
  //     console.log("✅ destroyed");
  //   },
  //   activated() {
  //     console.log("✅ activated");
  //   },
  //   deactivated() {
  //     console.log("✅ deactivated");
  //   },
};
</script>

<template>
  <div class="">
    <form>
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
        >
          <h1>From Handeling</h1>
          <hr />
          <div class="form-group">
            <label for="email">Mail</label>
            <input
              v-model="userData.email"
              type="text"
              id="email"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>

            <input
              v-model.lazy="userData.password"
              type="password"
              id="password"
              class="form-control"
            />
            <p>{{ password }}</p>
            <!-- lazy will update onBlur -->
          </div>
          <div class="form-group">
            <label for="age">Age</label>
            <input
              v-model="userData.age"
              type="number"
              id="age"
              class="form-control"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group"
        >
          <label for="message">Message</label><br />

          <textarea
            v-model="userData.message"
            id="message"
            rows="5"
            class="form-control"
          >
          </textarea>
        </div>
      </div>
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
        >
          <div class="form-group">
            <label for="sendmail">
              <input
                v-model="userData.sendMail"
                type="checkbox"
                id="sendmail"
                value="SendMail"
              />
              Send Mail
            </label>
            <label for="sendInfomail">
              <input
                v-model="userData.sendMail"
                type="checkbox"
                id="sendInfomail"
                value="SendInfoMail"
              />
              Send Info mail
            </label>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group"
        >
          <label for="male">
            <input
              v-model="userData.gender"
              type="radio"
              id="male"
              value="Male"
            />
            Male
          </label>
          <label for="female">
            <input
              v-model="userData.gender"
              type="radio"
              id="female"
              value="Female"
            />
            Female
          </label>
        </div>
      </div>
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group"
        >
          <label for="priority">Priority</label>
          <select id="priority" class="form-control" v-model="selectedPriority">
            <option v-for="priority in priorities" :key="priority">
              {{ priority }}
            </option>
          </select>
        </div>
      </div>
      <hr />
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
        >
          <button @click.prevent="submitted" class="btn btn-primary">
            Submit!
          </button>
        </div>
      </div>
    </form>
    <hr />
    <!-- Data -->
    <div class="row" v-if="isSubmitted">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Mail: {{ userData.email }}</p>
            <p>Password: {{ userData.password }}</p>
            <p>Age: {{ userData.age }}</p>
            <p style="white-space: pre-line">Message: {{ userData.message }}</p>
            <p><strong>Send Mail?</strong></p>
            <ul>
              <li v-for="mail in userData.sendMail" :key="mail">{{ mail }}</li>
            </ul>
            <p>Gender: {{ userData.gender }}</p>
            <p>Priority: {{ selectedPriority }}</p>
            <p>Switched:</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>
