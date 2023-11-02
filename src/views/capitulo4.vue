<script setup>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
</script>
<template>
     <Header/>

     <main class="container mt-4">
      <div class="superior">
        <h1>Capitulo 4</h1>
      
      </div>
        <h2 id="animacion" >Conclusiones</h2> <img  id="animacion" src="data:image/jpeg;base64,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" alt="">
        <table  class="table table-bordered table-striped" id="animacion">
          <tr>
            <td colspan="2">
              <p style="text-align: justify">
                Así se logró poner en marcha un sistema eficiente y ágil
                mediante la implementación exitosa de una aplicación
                desarrollada con Flutter. Esta plataforma de desarrollo
                proporcionó una base sólida para nuestra interfaz de usuario,
                permitiéndonos superar las expectativas al ofrecer una
                experiencia visualmente atractiva y altamente intuitiva.
              </p>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <p style="text-align: justify">
                La aplicación, construida con Flutter, no solo cumplió, sino que
                sobrepasó nuestras expectativas en términos de eficiencia y
                flexibilidad. La interfaz de usuario resultante no solo es
                estéticamente agradable, sino que también ofrece una navegación
                fluida y una experiencia de compra altamente intuitiva.
              </p>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <p style="text-align: justify">
                La capacidad multiplataforma de Flutter ha sido esencial para
                garantizar una presencia uniforme en diversas plataformas,
                mejorando así la accesibilidad para nuestros usuarios. La
                ventaja de desarrollar una única base de código para múltiples
                plataformas no solo simplifica el proceso de desarrollo, sino
                que también garantiza una coherencia notable en la experiencia
                del usuario en diferentes dispositivos.
              </p>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <p style="text-align: justify">
                Además, la flexibilidad de personalización proporcionada por
                Flutter ha sido un factor clave para adaptar la aplicación a las
                necesidades específicas de nuestros usuarios. Esta capacidad de
                adaptación asegura que la plataforma no solo sea funcional, sino
                también capaz de ajustarse a las preferencias individuales de
                cada usuario.
              </p>
            </td>
          </tr>
        </table>

        <h2 id="animacion">Recomendaciones</h2> <img  id="animacion" src="data:image/png;base64,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" alt="">

        <table  class="table table-bordered table-striped" id="animacion">
          <tr>
            <td>
              Las recomendaciones que se pueden dar son:
              <ul style="text-align: justify">
                <li>
                  Mantenimiento Regular de Dependencias de Flutter: Realiza
                  actualizaciones periódicas de las dependencias de Flutter y
                  las bibliotecas de terceros utilizadas en la aplicación.
                </li>
                <li>
                  Optimización del Rendimiento: Continúa monitoreando y
                  optimizando el rendimiento de la aplicación. Flutter
                  proporciona herramientas para evaluar y mejorar el
                  rendimiento, como el perfilador incorporado.
                </li>
                <li>
                  Personalización Continua y Feedback del Usuario: Establece
                  canales para recopilar y analizar el feedback de los usuarios.
                  Utiliza esta información para realizar mejoras continuas en la
                  personalización de la aplicación.
                </li>
                <li>
                  Exploración de Nuevas Características de Flutter: Mantente
                  informado sobre las nuevas características y capacidades que
                  se introduzcan en Flutter. Explora cómo estas características
                  pueden mejorar la experiencia del usuario o simplificar el
                  desarrollo.
                </li>
                <li>
                  Integración de un sistema de pago: Agregar algún método de
                  pago que esté vinculado tanto para billeteras virtuales o el
                  manejo de una cuenta de banco para finalizar el pago del
                  producto.
                </li>
                <li>
                  Integración de un socio externo: La aplicación al tratarse de
                  compra y venta, las empresas y consumidores estarán
                  interesados en las entregas a domicilio de un producto.
                </li>
              </ul>
            </td>
          </tr>
        </table>

        <h2 id="animacion">Fuentes de Información</h2> <img  id="animacion" src="data:image/jpeg;base64,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" alt="">

        <table  class="table table-bordered table-striped " id="animacion">
          <tr>
            <td>
              Bibliografía:
              <ul>
                <li>
                  [Sistema web integrado de control de inventario, pedidos y
                  distribución para el departamento comercial de la empresa"
                  FADERPA LTDA". Periodo 2022]. (proyecto de grado)
                </li>
                <li>
                  Sillo, J. (2019, 23 de mayo). Procedimiento para la
                  publicación de los sistemas informáticos en el Repositorio
                  Estatal de Software Libre.
                </li>
                <li>
                  Código de comercio boliviano. (2022, 20 de septiembre). Gaceta
                  oficial de Bolivia.
                </li>
                <li>ELINSIGNA. (2018). Origen del inventario.</li>
                <li>
                  Silberschatz, A., Korth, H. F., & Sudarshan, S. (2010).
                  Database System Concepts (6ta ed.). McGraw-Hill.
                </li>
                <li>HUBSPOT. (2021). Control de inventarios.</li>
                <li>
                  OMG. (2017). Unified Modeling Language (UML) - Superstructure,
                  Version 2.5. OMG Document Number: formal/2017-12-05.
                </li>
                <li>Oracle Corporation. (2021). MySQL.</li>
                <li>PHP. (2001). PHP: Hypertext Preprocessor.</li>
                <li>W3C. (s. f.). HTML. Recuperado el 13 de mayo de 2023</li>
                <li>
                  Mozilla Developer Network. (s. f.). JavaScript. Recuperado el
                  13 de mayo de 2023
                </li>
              </ul>
            </td>
          </tr>
          <tr id="animacion">
            <td id="animacion">
              Webgrafía:
              <ul>
                <li>
                  <a
                    href="https://www.digital.gob.bo/2019/05/procedimiento-para-la-publicacion-de-los-sistemas-informaticos-en-el-repositorio-estatal-de-software-libre/"
                    >Procedimiento para la publicación de los sistemas
                    informáticos en el Repositorio Estatal de Software Libre</a
                  >
                </li>
                <li>
                  <a
                    href="https://www.derechoteca.com/gacetabolivia/codigo-de-comercio-boliviano-vigente-y-actualizado"
                    >Código de comercio boliviano vigente y actualizado</a
                  >
                </li>
                <li>
                  <a
                    href="https://elinsignia.com/2018/06/19/origen-del-inventario/"
                    >Origen del inventario</a
                  >
                </li>
                <li>
                  <a
                    href="https://blog.hubspot.es/sales/que-es-control-de-inventarios"
                    >Control de inventarios</a
                  >
                </li>
                <li><a href="https://www.mysql.com/">MySQL</a></li>
                <li>
                  <a href="https://www.php.net/">PHP: Hypertext Preprocessor</a>
                </li>
                <li><a href="https://www.w3.org/html/">HTML</a></li>
                <li>
                  <a href="https://developer.mozilla.org/es/docs/Web/JavaScript"
                    >JavaScript</a
                  >
                </li>
                <li><a href="https://getbootstrap.com/">Bootstrap</a></li>
              </ul>
            </td>
          </tr>
        </table>

    </main>
    <Footer/>
</template>