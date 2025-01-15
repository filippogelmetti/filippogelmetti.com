<script lang="ts">
import { defineComponent } from "vue";
import { certificatesOnline } from "@@/data/certificates-online";

export default defineComponent({
  name: "CertificatesOnline",
  data() {
    return {
      certificates: certificatesOnline,
    };
  },
});
</script>

<template>
  <div>
    <h1>Online Certificates</h1>
    <ul>
      <li
        v-for="certificate in certificates"
        :key="certificate.url"
      >
        <a
          :href="certificate.url"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            :src="`/certificates/online/${certificate.image}`"
            alt=""
            width="200"
          />
        </a>
        <strong>{{ certificate.name }}</strong> -
        <em>{{ certificate.date }}</em>
      </li>
    </ul>
  </div>
</template>

<style scoped>
h1 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 0.5rem;
}

a {
  text-decoration: none;
  color: #007bff;
}

a:hover {
  text-decoration: underline;
}
</style>
