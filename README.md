# Movies LAB

Este proyecto permite practicar lo aprendido en https://github.com/IronPTSolutions/cart-dom

## Identifica estados

Almacena en estructuras de datos los estados que van a cambiar al interactuar con la aplicación:

```js
let watchList = [{ id: 1 }];
let search = "Spider";
let category = "Acción";
```

## Método render

programa la función render que genere el DOM en base a la información del estado.

Utiliza el patrón template para genrar las películas que tenemos en js/movies.js

```js
// patrón template
const template = document.getElementById("template");
template.removeAttribute("id");
template.remove();

// ...

movies.forEach((movie) => {
  const movieDOM = templat.cloneNode();
  movieDOM.innerHTML = templat.innerHTML;

  // fill data
  const img = productDOM.querySelector("img");
  img.src = movie.image;

  // add to list
  list.appendChild(movieDOM);
});
```

```js
render() {}
```

## Event listeners

Añade los event listeners para los diferentes triggers (botones, input, etc) que permitan cambiar el estado

Recuerda ejecutar `render()` siempre tras cambiar un estado.
