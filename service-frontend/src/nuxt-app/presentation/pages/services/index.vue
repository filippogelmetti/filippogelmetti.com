<template>
  <section class="services-wrapper">
    <div class="container">
      <h1 class="title">My Services</h1>
      <p class="subtitle">
        From elegant frontend designs to robust backend architectures and
        cutting-edge AI solutions.
      </p>

      <!-- Service Categories -->
      <div class="service-grid">
        <!-- Type of Projects -->
        <div class="service-category">
          <h2 class="category-title">Type of Projects</h2>
          <hr />
          <ul class="service-list">
            <li>Web applications</li>
            <li>B2B platforms</li>
            <li>Ecommerce</li>
            <li>Websites (high standards)</li>
            <li>CMS custom integration</li>
            <li>Headless solutions</li>
            <li>Custom admin panels</li>
          </ul>
        </div>

        <!-- Frontend Services -->
        <div class="service-category">
          <h2 class="category-title">Frontend</h2>
          <hr />
          <ul class="service-list">
            <li>UX focused interfaces</li>
            <li>Email marketing tools</li>
            <li>Computer vision systems</li>
            <li>Modern frameworks</li>
            <li>Pixel perfect design</li>
            <li>Server Side Rendering</li>
            <li>WCAG standards</li>
            <li>CSS Animations</li>
            <li>3D WebGL animations</li>
            <li>Advanced interactive widgets</li>
            <li>Image optimization</li>
            <li>Responsive design</li>
          </ul>
        </div>

        <!-- Backend Services -->
        <div class="service-category">
          <h2 class="category-title">Backend</h2>
          <hr />
          <ul class="service-list">
            <li>API development (RESTful and GraphQL)</li>
            <li>Database integration (MySQL, PostgreSQL)</li>
            <li>Object-relational mapping (Doctrine, TypeORM)</li>
            <li>JWT Authentication & OAuth</li>
            <li>Server-side logic</li>
            <li>Performance optimization</li>
            <li>Microservices architecture</li>
            <li>Cloud services (AWS, Azure)</li>
          </ul>
        </div>

        <!-- Process -->
        <div class="service-category">
          <h2 class="category-title">Process</h2>
          <hr />
          <ul class="service-list">
            <li>Requirement analysis</li>
            <li>Quoting</li>
            <li>Convert old monolithic systems</li>
            <li>Scripting & automation</li>
            <li>Agile methodologies</li>
            <li>Hosting & deployment</li>
            <li>Design patterns</li>
            <li>SOLID principles</li>
          </ul>
        </div>

        <!-- Engineering -->
        <div class="service-category">
          <h2 class="category-title">Engineering</h2>
          <hr />
          <ul class="service-list">
            <li>Clean architecture</li>
            <li>TDD, Unit tests & E2E tests</li>
            <li>Docker containers</li>
            <li>Research & innovation</li>
          </ul>
        </div>

        <!-- AI & Computer Vision -->
        <div class="service-category">
          <h2 class="category-title">AI & Computer Vision</h2>
          <hr />
          <ul class="service-list">
            <li>Classic Image Processing Algorithms</li>
            <li>Deep neural networks, CNN</li>
            <li>Object detection</li>
            <li>Complex image processing pipelines</li>
            <li>Image segmentation & classification</li>
            <li>Real-time video processing</li>
            <li>OCR systems integration</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style>
.services-wrapper {
  background-color: #f9f9f9;
  padding: 40px 20px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.title {
  font-size: 36px;
  text-align: center;
  margin-bottom: 20px;
  color: #333;
  font-weight: bold;
}

.subtitle {
  text-align: center;
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.service-category {
  background: #fff;
  border: 1px solid #ddd;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-category:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.category-title {
  font-size: 20px;
  font-weight: 600;
  color: #444;
  margin-bottom: 15px;
}

.service-list {
  list-style-type: disc;
  padding-left: 20px;
}

.service-list li {
  font-size: 16px;
  color: #555;
  margin-bottom: 8px;
}
</style>
