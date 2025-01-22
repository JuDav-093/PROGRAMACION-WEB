const idTimeout = setTimeout(() => {
  console.log("Esto se ejecuta después de 2 segundos");
}, 2000);

// Cancelar el tiempo de espera antes de que ocurra
clearTimeout(idTimeout);
