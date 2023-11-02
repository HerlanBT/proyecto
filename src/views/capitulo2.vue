<script setup>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
</script>
<template>
     <Header/>
    <div>
        <main class="container mt-4">
    <div class="superior">
      <h1>Capitulo 2</h1>
      <h3 id="animacion">Introducción</h3>
      <p style="text-align: justify;" id="animacion">
        El marco teórico que fundamenta esta investigación proporciona al lector una idea más clara acerca de
        este tema. Permitirá conocer los conceptos básicos, los complementos y específicos necesarios para el
        entendimiento del desarrollo de este proyecto.</p>
    </div>
    <hr>
    <div class="MarcoLegal" id="animacion">
      <h2>Marco Legal</h2>
      <p style="text-align: justify;">
        Artículo 3.- (Definiciones). Además de las definiciones técnicas establecidas en la Ley N° 164, para el
        cumplimiento del presente Reglamento, se adoptan las siguientes definiciones. (Decreto Supremo 1793)

        <strong>Desarrollo de contenido y aplicaciones</strong>
      <ul>
        <li>
          <strong>Contenido digital:</strong> Información digitalizada generada bajo cualquier modo o forma de
          expresión que puede ser distribuida por cualquier medio electrónico y es parte de un mensaje que el
          sistema de transferencia o soporte no examina ni modifica, salvo para conversión durante el
          transporte del mismo;
        </li>
        <li>
          <strong>Desarrollo de contenido digital:</strong> Es la creatividad, diseño y producción de
          contenidos digitales para la obtención de productos y aplicaciones digitales con propósitos
          específicos;
        </li>
        <li>
          <strong>Aplicaciones digitales:</strong> Programas de software modulares, específicos e interactivos
          de usuario o multiusuario utilizados sobre plataformas de prestación de servicios digitales en
          general o equipos terminales destinados a comunicaciones personales.
        </li>
      </ul>
      </p>
    </div>
    <hr>
    <div class="MarcoConceptual mt-4" id="animacion">
      <h2>Marco Conceptual</h2>
      <div class="row">
        <div class="col-md-6">
          <h3>Desarrollo de aplicaciones móviles multiplataforma con Flutter</h3> <a href="https://flutter.dev/"><img  id="animacion"
              src="https://th.bing.com/th/id/OIP.zIh4g0sCaByZFcfH6O6wDwHaDg?w=313&h=165&c=7&r=0&o=5&pid=1.7"
              alt=" flutter"></a>
          <p style="text-align: justify;">Flutter es un marco de código abierto desarrollado y compatible con Google.
            Los
            desarrolladores de front-end y pila completa utilizan Flutter para crear una interfaz
            de usuario (IU) de aplicación para varias plataformas con un único código base.
            Cuando Flutter se lanzó, en 2018, era compatible principalmente con el desarrollo
            de aplicaciones móviles. Ahora, Flutter es compatible con el desarrollo de
            aplicaciones en seis plataformas: iOS, Android, web, Windows, MacOS y Linux.</p>
        </div>
        <div class="col-md-6">
          <h3>Flutter como desarrollador de aplicaciones</h3> <a href="https://flutter.dev/learn"><img  id="animacion"
              src="https://th.bing.com/th/id/OIP.oiNcPlqLp2KUckk5vt7DGwHaDm?w=320&h=180&c=7&r=0&o=5&pid=1.7" alt=""></a>
          <p style="text-align: justify;">Flutter simplifica el proceso de creación de interfaces de usuario coherentes
            y
            atractivas para una aplicación en las seis plataformas que admite.
            Dado que Flutter es un marco de desarrollo multiplataforma, primero lo
            compararemos con el desarrollo nativo. A continuación, destacaremos las
            características exclusivas de Flutter.</p>
        </div>
      </div>
      <hr>
      <div class="VentajasDeFlutter mt-4" id="animacion">
        <h3>Las ventajas de Flutter</h3>
        <img  id="animacion" src="https://th.bing.com/th/id/OIP.ekSCkgOWuohzqF96hnMe4AAAAA?pid=ImgDet&rs=1" alt="">
        <p style="text-align: justify;">
          Estas son algunas de las formas en las que Flutter destaca como marco de desarrollo multiplataforma:

        <ul style="text-align: justify;">
          <li>
            <strong>Rendimiento casi nativo:</strong> Flutter utiliza el lenguaje de programación Dart y se
            compila en código máquina. Los dispositivos host entienden este código, lo que garantiza un
            rendimiento rápido y eficaz.
          </li>
          <li>
            <strong>Rendimiento rápido, consistente y personalizable:</strong> En lugar de depender de
            herramientas de renderización específicas de la plataforma, Flutter utiliza la biblioteca
            gráfica de código abierto Skia de Google para renderizar la interfaz de usuario. Esto
            proporciona a los usuarios visuales consistentes sin importar la plataforma que utilicen para
            acceder a una aplicación.
          </li>
          <li>
            <strong>Herramientas para desarrolladores:</strong> El objetivo de Google es que Flutter sea
            fácil de usar. Con herramientas como la recarga en caliente, los desarrolladores pueden
            previsualizar el aspecto de los cambios de código sin perder el estado. Otras herramientas, como
            el inspector de widgets, facilitan la visualización y la resolución de problemas con los diseños
            de la interfaz de usuario.
          </li>
        </ul>

        </p>

      </div>
      <hr>
      <h2>Gestor de Base de Datos MySQL</h2> <img  id="animacion"
        src="data:image/png;base64,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"
        alt="">
      <p style="text-align: justify;" id="animacion">
        MySQL es un sistema de gestión de bases de datos relacionales (RDBMS, por sus siglas en inglés) que
        permite a los usuarios crear, modificar y gestionar bases de datos. Fue desarrollado por Oracle
        Corporation y es uno de los gestores de bases de datos más utilizados en todo el mundo.

        Entre las funciones y características destacadas de MySQL, se encuentran:
      <ul style="text-align: justify;" id="animacion">
        <li><strong>Software Libre y de Código Abierto:</strong> MySQL es gratuito y de código abierto, lo que
          significa que cualquiera puede descargarlo, usarlo y modificarlo.</li>
        <li><strong>Altamente Escalable:</strong> Permite gestionar grandes cantidades de datos y acceder a
          ellos de manera rápida y eficiente.</li>
        <li><strong>Soporte para Múltiples Lenguajes de Programación:</strong> Incluyendo PHP, Java, Python,
          C++, entre otros.</li>
        <li><strong>Amplia Variedad de Herramientas de Administración y Monitoreo:</strong> Garantizando el
          rendimiento y la seguridad de las bases de datos.</li>
        <li><strong>Definición de Relaciones Complejas:</strong> Permite a los usuarios establecer relaciones
          complejas entre los datos y realizar consultas avanzadas.</li>
        <li><strong>Compatibilidad con Múltiples Sistemas Operativos:</strong> Incluyendo Windows, Linux y Mac
          OS.</li>
      </ul>
      </p>
      <p style="text-align: justify;">
        MySQL es ampliamente utilizado en aplicaciones web y empresariales, incluyendo sistemas de comercio
        electrónico, blogs, foros, redes sociales y sistemas de gestión de contenido, entre otros.
      </p>
      <hr>
      <h2>Interfaz de Programación de Aplicaciones (API)</h2> <img  id="animacion" src="data:image/jpeg;base64,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" alt="">
      <p style="text-align: justify;">
        Las API son mecanismos que permiten a dos componentes de software comunicarse entre sí mediante un
        conjunto de definiciones y protocolos. Por ejemplo, el sistema de software del instituto de meteorología
        contiene datos meteorológicos diarios. La aplicación meteorológica de su teléfono "habla" con este
        sistema a través de las API y le muestra las actualizaciones meteorológicas diarias en su teléfono.
      </p>
      <p style="text-align: justify;">
        API significa "Interfaz de Programación de Aplicaciones". En el contexto de las API, la palabra
        "aplicación" se refiere a cualquier software con una función distintiva. La interfaz puede considerarse
        como un contrato de servicio entre dos aplicaciones. Este contrato define cómo se comunican entre sí
        mediante solicitudes y respuestas. La documentación de su API contiene información sobre cómo los
        desarrolladores deben estructurar esas solicitudes y respuestas.
      </p>
      <hr>
      <h2>Función de las API</h2>
<img  id="animacion" src="data:image/png;base64,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" alt="">
      <table class="table table-bordered table-striped" id="animacion">
        <tr>
          <td colspan="2" style="text-align: justify;">
            La arquitectura de las API suele explicarse en términos de cliente y servidor. La aplicación que
            envía la solicitud se llama cliente, y la que envía la respuesta se llama servidor. En el
            ejemplo del tiempo, la base de datos meteorológicos del instituto es el servidor y la aplicación
            móvil es el cliente.
          </td>
        </tr>
        <tr style="text-align: justify;">
          <td colspan="2"><strong>Tipos de API y sus Funcionamientos:</strong></td>
        </tr>
        <tr>
          <td><strong>API de SOAP</strong></td>
          <td>
            Estas API utilizan el protocolo simple de acceso a objetos. El cliente y el servidor
            intercambian mensajes mediante XML. Se trata de una API menos flexible que era más popular en el
            pasado.
          </td>
        </tr>
        <tr id="animacion">
          <td><strong>API de RPC</strong></td>
          <td style="text-align: justify;">
            Estas API se denominan llamadas a procedimientos remotos. El cliente completa una función (o
            procedimiento) en el servidor, y el servidor devuelve el resultado al cliente.
          </td>
        </tr>
        <tr>
          <td><strong>API de WebSocket</strong></td>
          <td style="text-align: justify;">
            La API de WebSocket es otro desarrollo moderno de la API web que utiliza objetos JSON para
            transmitir datos. La API de WebSocket admite la comunicación bidireccional entre las
            aplicaciones cliente y el servidor. El servidor puede enviar mensajes de devolución de llamada a
            los clientes conectados, por lo que es más eficiente que la API de REST.
          </td>
        </tr>
        <tr>
          <td><strong>API de REST</strong></td>
          <td style="text-align: justify;">
            Estas son las API más populares y flexibles que se encuentran en la web actualmente. El cliente
            envía las solicitudes al servidor como datos. El servidor utiliza esta entrada del cliente para
            iniciar funciones internas y devuelve los datos de salida al cliente. Veamos las API de REST con
            más detalle a continuación.
          </td>
        </tr>
        <tr>
          <td colspan="2" style="text-align: justify;">
            <strong>Significado de API de REST:</strong> REST significa transferencia de estado
            representacional. REST define un conjunto de funciones como GET, PUT, DELETE, etc. que los
            clientes pueden utilizar para acceder a los datos del servidor. Los clientes y los servidores
            intercambian datos mediante HTTP.
          </td>
        </tr>
        <tr>
          <td colspan="2" style="text-align: justify;">
            La principal característica de la API de REST es que no tiene estado. La ausencia de estado
            significa que los servidores no guardan los datos del cliente entre las solicitudes. Las
            solicitudes de los clientes al servidor son similares a las URL que se escriben en el navegador
            para visitar un sitio web. La respuesta del servidor son datos simples, sin la típica
            representación gráfica de una página web.
          </td>
        </tr>
      </table>

    </div>
  </main>

    </div>
    <Footer/>
</template>