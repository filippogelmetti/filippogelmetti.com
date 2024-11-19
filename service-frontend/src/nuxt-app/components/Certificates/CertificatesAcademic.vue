<template>
  <div>
    <h1>Academic Certificates</h1>
    <ul>
      <li
        v-for="certificate in academicCertificates"
        :key="certificate.degree"
      >
        <div class="certificate-item">
          <img
            :src="`/certificates/academic/${certificate.image}`"
            alt=""
            width="400"
          />
          <p>
            <strong>{{ certificate.degree }}</strong>
          </p>
          <p>Specialization: {{ certificate.specialization }}</p>
          <p>Institution: {{ certificate.institution }}</p>
          <p>Thesis: {{ certificate.thesis }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { academicCertificates } from "~/data/certificates-academic";

export default defineComponent({
  name: "CertificatesAcademic",
  data() {
    return {
      academicCertificates,
    };
  },
});
</script>

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
  margin-bottom: 1rem;
}

.certificate-item {
  background: #f9f9f9;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

p {
  margin: 0.3rem 0;
}
</style>
