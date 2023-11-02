<template>
    <div>
      <Header />
      <div class="container mt-4">
        <div class="row">
          <div class="col-lg-6 offset-lg-3">
            <div class="card">
              <div class="row g-0">
                <div class="col-md-6">
                  <img :src="`/src/assets/${image.url}`" class="card-img-top" alt="Imagen" />
                </div>
                <div class="col-md-6">
                  <div class="card-body">
                    <h2 class="card-title">{{ image.name }}</h2>
                    <p class="card-text">{{ image.descripcion }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        nombre: this.$route.params.nombre,
        image: null,
      };
    },
    created() {
      // Obtiene los datos de la imagen desde localStorage
      const imageData = localStorage.getItem('imageData');
  
      if (imageData) {
        this.image = JSON.parse(imageData);
      }
    },
  };
  </script>
  
  <script setup>
  import Header from "@/components/head.vue";
  import Footer from "@/components/footer.vue";
  </script>
  