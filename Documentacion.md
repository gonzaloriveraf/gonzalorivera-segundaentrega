<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome file</title>
  <link rel="stylesheet" href="https://stackedit.io/style.css" />
</head>

<body class="stackedit">
  <div class="stackedit__html"><h1 id="tienda-onwine">Tienda OnWine</h1>
<h5 id="gonzalo-rivera">Gonzalo Rivera</h5>
<p>Esta aplicación web se trata de una tienda online donde el usuario puede elegir productos alojados en una base de datos, organizados semánticamente,  agregarlos al carro, editar este último, y finalizar su compra registrándola en la base de datos, utilizando Firebase y Context.</p>
<h2 id="requisitos-previos">Requisitos Previos</h2>
<ul>
<li>Node.js y npm instalados</li>
<li>Cuenta de Firebase configurada</li>
</ul>
<h2 id="configuración-y-uso">Configuración y Uso</h2>
<ol>
<li>
<p>Clona el repositorio:</p>
<p>git clone &lt; <a href="https://github.com/gonzaloriveraf/gonzalorivera-segundaentrega.git">https://github.com/gonzaloriveraf/gonzalorivera-segundaentrega.git</a> &gt;</p>
</li>
</ol>
<h2 id="dependencias">Dependencias</h2>
<ul>
<li>React</li>
<li>Bootstrap</li>
<li>react-bootstrap</li>
<li>react-router-dom</li>
<li>isomorphic-fetch</li>
</ul>
<h2 id="estructura-del-proyecto">Estructura del Proyecto</h2>
<p>Los direciorios del proyecto más importantes son:</p>
<h4 id="src">/src</h4>
<p>Conitene los archuvos App.jsx e Index.jsx</p>
<h4 id="components">/components</h4>
<p>Contiene todos los componentes, cada componente creado debe guardarse en esta directorio en una carpeta independiente. Si el componente tiene assets y hojas de estilo deben quedar guardados junto a us componente.<br>
cada carpeta contiene un archivo index.js estructurada con el siguiente ejemplo:</p>
<pre><code>import Cart from './Cart'
export default Cart
</code></pre>
<h4 id="utils">/utils</h4>
<p>Aquí se guardan los archivos con funciones asociadas a consumir la base de dato de Firebase.</p>
<h4 id="context">/context</h4>
<p>Los archivos que se utilicen para utlizar el hook Context se guardan en esta carpeta.</p>
<h2 id="estructura-de-la-base-de-datos-firebase">Estructura de la Base de Datos Firebase</h2>
<p>La base de datos cuenta con 3 collections principales:</p>
<h4 id="items">Items</h4>
<p>contiene los datos de cada uno de los productos con los campos <em>name, description, category, stock, price, img, id</em></p>
<h4 id="cateogries">Cateogries</h4>
<p>Contiene las cateogorías, cada una cuenta con un <em>ID</em> , <em>cateogria</em> e <em>img</em>, el campo <em>category</em> de la colección anterior debe coincidir con el ID de la coleccion actual para que el producto se muestre en lacateogoría correspondiente. ejemplo:</p>
<pre><code> "categorias" { "vinosBlancos" : {} }
 
 "Item": {  ITEMID: { category: "VinosBlancos" }}
</code></pre>
<h4 id="orders">Orders</h4>
<p>Es la colección que guarda las ordenes del comprador y el respectivo carro una vez que finaliza la compra…</p>
<h2 id="licencia">Licencia</h2>
<p>Proyecto creado con fines académicos.</p>
</div>
</body>

</html>
