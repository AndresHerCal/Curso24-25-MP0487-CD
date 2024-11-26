function actualizarNombre() {
  const nombre = prompt('Dime tu nombre! ');
  para.textContent = `¡Hola!: ${nombre} encantado de conocerte`;
}

const para = document.querySelector('p');

para.addEventListener('click', actualizarNombre);
