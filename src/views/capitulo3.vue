<script setup>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
</script>
<template>
  <Header />
  <main class="container mt-4">
    <div class="superior">
      <h1>Capitulo 3</h1>
    </div>
    <div class="introduccion" id="animacion">
      <h1>Introduccion</h1>
      <p style="text-align: justify">
        En este capítulo, se sumerge en un análisis profundo de la
        implementación de la metodología Kanban en el proceso de diseño y
        desarrollo de la plataforma de comercio electrónico previamente
        delineada. La elección de adoptar la metodología Kanban responde al
        firme propósito de perfeccionar la planificación, supervisión y
        ejecución de las tareas involucradas en este proyecto de envergadura.
      </p>

      <h3>Equipo de Desarrollo</h3>
      <br />
      <ul>
        <li>
          <p style="text-align: justify">
            Participante 1: Herlan Eguibar Ballon Turpo
          </p>
        </li>
        <li>
          <p style="text-align: justify">
            Participante 2: Cristian Jose Ingali Laura
          </p>
        </li>
      </ul>
      <p style="text-align: justify">
        El equipo de trabajo desempeña los roles esenciales en la implementación
        exitosa de la metodología Kanban en el desarrollo de la plataforma de
        comercio electrónico.
      </p>
    </div>
    <hr />
    <div class="requerimientos" id="animacion">
      <h1>Requerimientos y Funciones del Sistema</h1>
      <h5>Requerimientos tecnológicos</h5>
      <table class="table table-bordered" id="animacion">
        <thead>
          <th>Requerimientos de Hardware</th>
          <th>Requerimientos de Software</th>
        </thead>
        <tbody>
          <td>
            <ul>
              <li>
                <p style="text-align: justify">
                  Dispositivo Móvil o Tablet: Sistema operativo compatible:
                  Android 5.0 o posterior, iOS 9.0 o posterior.
                </p>
              </li>
              <li>
                <p style="text-align: justify">
                  Procesador: Mínimo de 1 GHz de velocidad.
                </p>
              </li>
              <li>
                <p style="text-align: justify">
                  Memoria RAM: Se recomienda al menos 2 GB para un rendimiento
                  óptimo.
                </p>
              </li>
              <li>
                <p style="text-align: justify">
                  Almacenamiento: Espacio disponible suficiente para la
                  instalación de la aplicación y almacenamiento de datos.
                </p>
              </li>
            </ul>
          </td>
          <td>
            <ul>
              <li>
                <p style="text-align: justify">
                  Sistema Operativo: Para dispositivos Android, la aplicación es
                  compatible con Android 5.0 (Lollipop) y versiones posteriores.
                  En dispositivos iOS, la aplicación es compatible con iOS 9.0 y
                  versiones posteriores.
                </p>
              </li>
              <li>
                <p style="text-align: justify">
                  Almacenamiento de Datos: La aplicación requiere permisos de
                  almacenamiento para guardar datos localmente en el
                  dispositivo, como configuraciones de usuario y datos de
                  productos.
                </p>
              </li>
              <li>
                <p style="text-align: justify">
                  Conexión a Internet: Para aprovechar al máximo todas las
                  características de la aplicación, se necesita una conexión a
                  Internet activa y estable. Sin embargo, la aplicación puede
                  funcionar en modo sin conexión para algunas funciones básicas.
                </p>
              </li>
            </ul>
          </td>
        </tbody>
      </table>
    </div>
    <hr />
    <div class="diagramas mt-5 p-4" id="animacion">
      <h1 class="text-center">
        Aplicando el lenguaje UML para el diseño del modelo del sistema
      </h1>
      <div class="row justify-content-center">
        <hr />
        <div class="col-md-6">
          <h2 class="text-center">Diagrama de Casos de Uso</h2>
          <div class="row justify-content-center" id="animacion">
            <div class="col-md-4 text-center">
              <img
                src="@/assets/img/figura3.1.jpg"
                alt="casos1"
                class="img-fluid"
                width="700px"
                height="500px"
              />
            </div>
            <div class="col-md-4 text-center">
              <img
                src="@/assets/img/figura3.2.jpg"
                alt="casos2"
                class="img-fluid"
                width="700px"
                height="500px"
              />
            </div>
            <div class="col-md-4 text-center">
              <img
                src="@/assets/img/figura3.3.jpg"
                alt="casos3"
                class="img-fluid"
                width="700px"
                height="500px"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-4 justify-content-center" id="animacion">
        <div class="col-md-6">
          <h2 class="text-center">Diagrama de Clases</h2>
          <div class="d-flex justify-content-center">
            <img
              src="@/assets/img/figura3.4.jpg"
              alt="clases"
              class="img-fluid"
              width="650px"
              height="400px"
            />
          </div>
        </div>
      </div>
      <hr />
      <div class="row mt-4 justify-content-center" id="animacion">
        <div class="col-md-6">
          <h2 class="text-center">Diagrama de Actividades</h2>
          <div class="d-flex justify-content-center">
            <img
              src="@/assets/img/figura3.5.jpg"
              alt="actividades"
              width="550px"
              height="300px"
            />
          </div>
        </div>
        <hr />
        <div class="col-md-6">
          <h2 class="text-center" id="animacion">Diagrama de Componentes</h2>
          <div class="d-flex justify-content-center">
            <img
              src="@/assets/img/figura3.6.jpg"
              alt="componentes"
              width="550px"
              height="300px"
            />
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div class="kanban" id="animacion">
      <h1>Diseño del Tablero Kanban</h1>
      <table class="table table-bordered">
        <thead>
          <th>Por Hacer</th>
          <th>En Progreso</th>
          <th>Terminado</th>
        </thead>
        <tbody>
          <td>
            <p style="text-align: justify">
              En esta columna, el equipo de desarrollo se encarga de compilar de
              manera minuciosa todas las tareas pendientes necesarias para
              construir la plataforma. Se capturan aquí las actividades que
              deben abordarse en el futuro.
            </p>
          </td>
          <td>
            <p style="text-align: justify">
              Aquí es donde las tareas avanzan una vez que son seleccionadas
              para su ejecución. Mantenemos una restricción en el número de
              tareas que pueden estar en progreso al mismo tiempo, lo que ayuda
              a prevenir congestiones y a mantener un flujo constante.
              Aseguramos una colaboración activa para garantizar un seguimiento
              continuo de las tareas en desarrollo.
            </p>
          </td>
          <td>
            <p style="text-align: justify">
              Las tareas que han sido satisfactoriamente completadas y evaluadas
              se trasladan a esta columna. Aquí se registra el trabajo que ha
              sido finalizado y se verifica su calidad antes de considerarlo
              como parte integral de la plataforma.
            </p>
          </td>
        </tbody>
      </table>
    </div>
    <hr />

    <div class="tarjetas text-center" id="animacion">
      <h1>Tarjetas Kanban</h1>
      <div class="row">
        <div class="col-md-4">
          <img src="@/assets/img/tarjeta1.jpg" alt="tar1" class="img-fluid" />
        </div>
        <div class="col-md-4">
          <img src="@/assets/img/tarjeta2.jpg" alt="tar2" class="img-fluid" />
        </div>
        <div class="col-md-4">
          <img src="@/assets/img/tarjeta3.jpg" alt="tar3" class="img-fluid" />
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-4">
          <img src="@/assets/img/tarjeta4.jpg" alt="tar4" class="img-fluid" />
        </div>
        <div class="col-md-4">
          <img src="@/assets/img/tarjeta5.jpg" alt="tar5" class="img-fluid" />
        </div>
      </div>
    </div>
    <hr />
    <div class="impletacion text-center">
      <h1>Implementación del Tablero Kanban</h1>
      <img src="@/assets/img/tablero2.jpg" alt="Tablero" />
    </div>
    <hr />
    <div class="container d-flex justify-content-center align-items-center">
      <router-link to="/aplicacion" class="btn btn-primary"
        >PRESENTACIÓN DE LA APLICACIÓN APLICACION</router-link
      >
    </div>
  </main>
  <Footer />
</template>