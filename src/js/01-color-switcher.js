  const inicio = document.querySelector('[data-start=""]');
  const detener = document.querySelector('[data-stop=""]');
  let process;
  const body = document.querySelector("body");

  detener.disabled = true;

  inicio.addEventListener("click" , () => {
        process = setInterval(() => {
            body.style.backgroundColor = '#' + (((1 << 24) * Math.random()) | 0).toString(16);
            inicio.disabled = true;
            detener.disabled = false;
        }, 1000);
  });

  detener.addEventListener("click" , () => {
    clearInterval(process);
    inicio.disabled = false;
    detener.disabled = true;
  });

  
