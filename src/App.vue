
<template>
  <div class="w-5 h-20rem card flex flex-column align-items-center justify-content-center row-gap-5">
    <span class="p-float-label w-12 max-w-30rem">
      <InputText class="w-12 max-w-30rem" :class="{ 'p-invalid': usernameInvalid }" type="text" id="username"
        v-model="username" />
      <label for="username">Username</label>
    </span>
    <span class="p-float-label w-12 max-w-30rem">
      <InputText class="w-12 max-w-30rem" :class="{ 'p-invalid': passwordInvalid }" type="password" id="password"
        v-model="password" />
      <label for="password">Password</label>
    </span>

    <Button @click="submit()" class="w-12 max-w-30rem" label="Submit" />
  </div>

  <Dialog v-model:visible="visible" modal @update:visible="cleanForm()"  header="Login Successful" :draggable="false" :style="{ width: '50vw' }">
    <p>
      Login Successful!
    </p>
  </Dialog>
</template>

<script setup>
import { ref } from 'vue';

const username = ref(null);
const password = ref(null);
const passwordInvalid = ref(false);
const usernameInvalid = ref(false);
const visible = ref(false);

function submit() {
  if (username.value === null || password.value === null) {
    passwordInvalid.value = true
    usernameInvalid.value = true
  } else {
    visible.value = true
  }
}

function cleanForm() {
  username.value = null
  password.value = null
  passwordInvalid.value = false
  usernameInvalid.value = false
  visible.value = false
}

</script>


<style scoped></style>
