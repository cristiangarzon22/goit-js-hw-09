import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


const dateInput = document.querySelector("#datetime-picker");
const dia = document.querySelector('[data-days =""]');
const hora = document.querySelector('[data-hours =""]');
const minutos = document.querySelector('[data-minutes =""]');
const segundos = document.querySelector('[data-seconds =""]');
const boton = document.querySelector('[data-start =""]');
const aviso = document.querySelector(".timer");

flatpickr(dateInput, {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
  onClose(selectedDates){
    if (selectedDates[0] < new Date()) {
      Notiflix.Notify.failure('fecha no valida');
    }
  }
});

let targetDate;

dateInput.addEventListener("change" , (e) => {
  targetDate = new Date (e.target.value).getTime();

});

//const targetDate = new Date (dateInput.value);
//const targetDate = new Date ("2023-02-04");

function Ejec() {
const displayCountdown = setInterval( function() {
  const currentTime = new Date();
  const difference = targetDate  - currentTime; 

  // Calculate the remaining time
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

 
  dia.textContent = days;
  hora.textContent = hours;
  minutos.textContent = minutes;
  segundos.textContent = seconds;

  if (difference < 0) {
    clearInterval(displayCountdown);
    aviso.innerHTML = `<h2>"TIME EXPIRED"</h2>`;
  }  

},1000 );
}

boton.addEventListener("click" , () => {
   Ejec();
   Notiflix.Notify.info('inicio contador');
});


