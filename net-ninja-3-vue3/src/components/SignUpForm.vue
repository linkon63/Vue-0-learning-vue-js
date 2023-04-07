<template>
    <form @submit.prevent="submitForm" class="w-50 p-2 border shadow-lg rounded-3">
        <div class="fw-bold text-center bg-info p-4 text-white">
            <h1>Sign up form</h1>
        </div>
        <div class="p-2">
            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" placeholder="name@example.com" v-model="email">
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Password" v-model="password">
            </div>
            <div v-if="passwordError" class="text-danger">You have to give more then 6</div>
            <!-- <div class="mb-3">
                <label for="confirm-password" class="form-label">Confirm Password</label>
                <input type="password" class="form-control" id="confirm-password" placeholder="Confirm Password">
            </div> -->
            <div class="mb-3">
                <label for="role" class="form-label">skills</label>
                <input type="text" class="input" v-model="tempSkill" @keyup="addSkills" />
            </div>
            <div class="pill" v-for="skill in skills" :key="skill">
                <p class="border bg-info p-2" @click="deleteSkill(skill)"> {{ skill }}</p>
            </div>
            <!-- <div class="mb-3">
                <label for="role" class="form-label">Role</label>
                <select class="form-select" aria-label="Select Role" placeholder="select role" v-model="role">
                    <option value="webdesigner">Web Designer</option>
                    <option value="webdeveloper">Developer</option>
                </select>
            </div> -->

            <div class="mb-3">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="terms" v-model="terms">
                    <label class="form-check-label" for="terms">
                        I accept the terms and conditions
                    </label>
                </div>

                <!-- <div class="mb-3">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="linkon" id="terms" v-model="name">
                        <label class="form-check-label" for="terms">
                            Linkon
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="Sahjalal" id="terms" v-model="name">
                        <label class="form-check-label" for="terms">
                            Sahjalal
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="Touhid" id="terms" v-model="name">
                        <label class="form-check-label" for="terms">
                            Touhid
                        </label>
                    </div>
                </div> -->

            </div>



            <div class="text-center">
                <button type="submit" class="btn btn-success text-center">Submit</button>
            </div>

        </div>
        <div class="container w-50 bg-info p-4 text-center">
            <p>V-model Data</p>
            <p>Email :{{ email }}</p>
            <p>Pass :{{ password }}</p>
            <p>role :{{ role }}</p>
            <p>terms : {{ terms }}</p>
            <p>Names : {{ name }}</p>
        </div>
    </form>
</template>

<script>
export default {
    data() {
        return {
            email: "",
            password: "",
            role: "webdeveloper",
            terms: false,
            name: [],
            tempSkill: '',
            skills: [],
            passwordError: false
        }
    },
    methods: {
        addSkills(e) {
            // console.log("AddSkills", e)
            if (e.key == ',' && this.tempSkill) {
                if (!this.skills.includes(this.tempSkill)) {
                    this.skills.push(this.tempSkill)
                    console.log("✌✌ there is data and targeted value", this.tempSkill)
                }
                this.tempSkill = ''
            }
        },
        deleteSkill(e) {
            console.log('Delete skills', e)
            const filterSkills = this.skills.filter(s => s != e)
            this.skills = [...filterSkills]
        },
        submitForm() {
            console.log("✌ Submit form")
            if (this.password.length < 5) {
                this.passwordError = true
                console.log("✌ Submit form password error")
            } else {
                this.passwordError = false
            }

            if (!this.passwordError) {
                console.log("email", this.email)
                console.log("pass", this.password);
                console.log("skills", this.skills);
            }
        }
    }
}
</script>