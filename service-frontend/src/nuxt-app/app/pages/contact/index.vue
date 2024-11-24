<script setup lang="ts">
import { ref } from "vue";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const form = ref<ContactForm>({
  name: "",
  email: "",
  message: "",
});

const loading = ref<boolean>(false);
const success = ref<boolean>(false);
const error = ref<boolean>(false);

const mail = useMail();

const submitForm = async (): Promise<void> => {
  loading.value = true;
  error.value = false;

  try {
    await mail.send({
      from: `"${form.value.name}" <webform@filippogelmetti.com>`, // From address with display name
      to: "filippo.gelmetti@gmail.com", // Your email address
      subject: `Contact Form Submission from ${form.value.name}`,
      text: `
        Name: ${form.value.name}
        Email: ${form.value.email}
        Message:${form.value.message}
      `,
    });

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form.value.name,
        email: form.value.email,
        message: form.value.message,
        status: "sent",
        error_message: "",
      }),
    });

    // Show success and hide the form
    success.value = true;
  } catch (e) {
    console.error("Error sending email:", e);
    error.value = true; // Show error feedback
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div>
    <h1>Contact Me</h1>

    <!-- Display success message if successful -->
    <div
      v-if="success"
      style="color: green; text-align: center"
    >
      <p>
        Your message has been sent successfully. Thank you for contacting me!
      </p>
    </div>

    <!-- Show the form if not successful -->
    <form
      v-else
      @submit.prevent="submitForm"
    >
      <div>
        <label for="name">Name</label>
        <input
          id="name"
          v-model="form.name"
          required
        />
      </div>
      <div>
        <label for="email">Email</label>
        <input
          id="email"
          type="email"
          v-model="form.email"
          required
        />
      </div>
      <div>
        <label for="message">Message</label>
        <textarea
          id="message"
          v-model="form.message"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        :disabled="loading"
      >
        {{ loading ? "Sending..." : "Send Message" }}
      </button>
    </form>

    <!-- Error message -->
    <p
      v-if="error"
      style="color: red; text-align: center"
    >
      Failed to send the message. Please try again.
    </p>
  </div>
</template>

<style>
form {
  max-width: 500px;
  margin: auto;
}

form div {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea,
button {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
}

button {
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}

button:disabled {
  background-color: #ccc;
}

p {
  margin-top: 1rem;
  font-size: 1.1rem;
}
</style>
