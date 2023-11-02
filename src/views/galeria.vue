<template>
  <div>
    <Header />
    <div class="container mt-3 text-center">
      <button
        @click="previousImage"
        class="btn btn-primary"
        :disabled="currentIndex === 0"
      >
        <span class="arrow-left"></span> Anterior
      </button>
      <button
        @click="nextImage"
        class="btn btn-primary"
        :disabled="currentIndex === images.length - 1"
      >
        Siguiente <span class="arrow-right"></span>
      </button>
    </div>
    <div class="gallery container mt-4">
      <div class="row" v-if="currentImage">
        <div class="col-md-6">
          <transition name="fade" mode="out-in">
            <div :key="currentImage.id">
              <img
                :src="'src/assets/' + currentImage.url"
                class="img-fluid gallery-image"
                alt="Imagen"
              />
            </div>
          </transition>
        </div>
        <div class="col-md-6">
          <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ currentImage.name }}</h5>
      <p class="card-text">{{ currentImage.description }}</p>
    </div>
  </div>
  <h1 class="card-text text-center d-flex align-items-center">Siguiente Imagen</h1>

  <!-- Sección para previsualizar la siguiente imagen -->
  <div class="next-image-preview" v-if="nextImagePreview">
    <img
      :src="'src/assets/' + nextImagePreview.url"
      class="next-image small-image"
      alt="Siguiente Imagen"
    />
  </div>
</div>

      </div>
    </div>
    <div class="container mt-3 text-center">
      <button @click="downloadApk" class="btn btn-success mx-auto">
        Descargar APK <i class="fas fa-download"></i>
      </button>
    </div>
<br>
    <Footer />
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      images: [
        {
          id: 1,
          url: "img-app/inicio.jpg",
          name: "Inicio",
          description:
            "Pantalla que muestra un menú de botones en la parte superior y una lista de productos en la parte inferior, junto con un menú de navegación.",
        },
        {
          id: 2,
          url: "img-app/carrito.jpg",
          name: "Carrito de Compras",
          description:
            "En esta pantalla, se visualiza el carrito de compras, que puede estar vacío si aún no has agregado productos. Para agregar productos, es necesario iniciar sesión.",
        },
        {
          id: 3,
          url: "img-app/login.jpg",
          name: "Inicio de Sesión",
          description:
            "Pantalla donde puedes iniciar sesión en tu cuenta, recuperar una cuenta existente o crear una nueva cuenta.",
        },
        {
          id: 4,
          url: "img-app/registrarusu.jpg",
          name: "Crear Cuenta",
          description:
            "Esta pantalla te permite crear una nueva cuenta proporcionando información como nombre completo, correo electrónico, teléfono y contraseña.",
        },
        {
          id: 5,
          url: "img-app/recuperarusu.jpg",
          name: "Recuperar Cuenta",
          description:
            "Aquí puedes recuperar tu cuenta ingresando tu nombre completo, correo electrónico y teléfono.",
        },
        {
          id: 6,
          url: "img-app/usuario.jpg",
          name: "Vista de Usuario",
          description:
            "Muestra los detalles de tu cuenta de usuario y una lista de tus compras anteriores.",
        },
        {
          id: 7,
          url: "img-app/lateralusuario.jpg",
          name: "Menú Lateral de Usuario",
          description:
            "Este menú lateral ofrece varias opciones de navegación para acceder a diferentes funciones.",
        },
        {
          id: 8,
          url: "img-app/comprasusu.jpg",
          name: "Compras del Usuario",
          description:
            "Aquí puedes ver un registro de las compras realizadas por el cliente.",
        },
        {
          id: 9,
          url: "img-app/editarusu.jpg",
          name: "Editar Cuenta",
          description:
            "En esta pantalla, puedes modificar la información de tu cuenta de usuario.",
        },
        {
          id: 10,
          url: "img-app/tiendalogin.jpg",
          name: "Inicio de Sesión en la Tienda",
          description:
            "Permite el acceso a la tienda y ofrece opciones para crear una tienda o recuperar una tienda existente.",
        },
        {
          id: 11,
          url: "img-app/creartienda.jpg",
          name: "Crear Tienda",
          description:
            "Esta pantalla te permite crear una nueva tienda, ingresando información como el nombre de la tienda y una imagen representativa.",
        },
        {
          id: 12,
          url: "img-app/recuperartienda.jpg",
          name: "Recuperar Tienda",
          description:
            "Aquí puedes recuperar una tienda existente al completar un formulario.",
        },
        {
          id: 13,
          url: "img-app/tienda.jpg",
          name: "Vista de Tienda",
          description:
            "Muestra los detalles de la tienda y los productos disponibles. Puedes eliminar un producto deslizándolo hacia la izquierda.",
        },
        {
          id: 14,
          url: "img-app/lateraltienda.jpg",
          name: "Menú Lateral de la Tienda",
          description:
            "Este menú proporciona opciones de navegación para acceder a diferentes funciones de la tienda.",
        },
        {
          id: 15,
          url: "img-app/agregarprd.jpg",
          name: "Registrar Producto",
          description:
            "En esta pantalla, puedes agregar nuevos productos a la tienda, proporcionando información como el nombre, la categoría y la imagen del producto, entre otros detalles.",
        },
        {
          id: 16,
          url: "img-app/ventas.jpg",
          name: "Ventas Realizadas",
          description:
            "Muestra un registro de las ventas realizadas, es decir, los productos vendidos por la tienda.",
        },
        {
          id: 17,
          url: "img-app/editartienda.jpg",
          name: "Editar Tienda",
          description:
            "Permite editar la información de la tienda, aunque en este momento solo se permite editar el número de contacto.",
        },
        {
          id: 18,
          url: "img-app/editarprd.jpg",
          name: "Editar Producto",
          description:
            "Esta pantalla te permite modificar detalles de un producto, como la cantidad, el precio y el nombre del producto.",
        },
        {
          id: 19,
          url: "img-app/productos1.jpg",
          name: "Vista de Productos",
          description:
            "Aquí se muestran los productos disponibles. Puedes agregar productos al carrito deslizándolos hacia la izquierda, pero primero debes iniciar sesión.",
        },
        {
          id: 20,
          url: "img-app/detalleproductos.jpg",
          name: "Detalle de Producto",
          description:
            "Muestra información detallada sobre un producto específico.",
        },
        {
          id: 21,
          url: "img-app/carritoconprd.jpg",
          name: "Carrito de Compras con Productos",
          description:
            "En esta pantalla, puedes ver un carrito de compras que contiene productos seleccionados.",
        },
      ],

      currentImage: null,
      currentIndex: 0,
      nextImagePreview: null,
    };
  },
  created() {
    this.calculateNextImagePreview();
    const imageData = localStorage.getItem("imageData");
    if (imageData) {
      this.currentImage = JSON.parse(imageData);
      const currentIndex = this.images.findIndex(
        (img) => img.name === this.currentImage.name
      );
      if (currentIndex !== -1) {
        this.currentIndex = currentIndex;
      }
    }
  },
  methods: {
    previousImage() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
        this.currentImage = this.images[this.currentIndex];
        this.saveImageData();
        this.calculateNextImagePreview(); // Actualiza la imagen siguiente
      }
    },
    nextImage() {
      if (this.currentIndex < this.images.length - 1) {
        this.currentIndex++;
        this.currentImage = this.images[this.currentIndex];
        this.saveImageData();
        this.calculateNextImagePreview(); // Actualiza la imagen siguiente
      }
    },
    saveImageData() {
      localStorage.setItem("imageData", JSON.stringify(this.currentImage));
    },
    calculateNextImagePreview() {
      if (this.currentIndex < this.images.length - 1) {
        this.nextImagePreview = this.images[this.currentIndex + 1];
      } else {
        this.nextImagePreview = null; // No hay siguiente imagen en el último elemento
      }
    },
    downloadApk() {
    // Ruta del archivo APK
    const apkFileURL = "https://drive.google.com/file/d/1LI6v5aQqfW0yMe3koSFBSBSYd8Q0SllS/view?usp=sharing";

    window.open(apkFileURL);
  },
  },
};
</script>
  
  <script setup>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
</script>
  