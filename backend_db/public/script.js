const container = document.querySelector('.container');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;

function updateCost() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  const finalCost = document.getElementById('finalCost');
  finalCost.style.display = "block";
  finalCost.style.visibility = "visible";

  const selectedSeatsCount = selectedSeats.length;

  const cost = document.getElementById("cost");
  cost.innerText = "The total cost is Rs. " + selectedSeatsCount * ticketPrice;
}

function displaySeats(screenNo) {
  const screen1 = document.getElementById('screen1');
  const screen2 = document.getElementById('screen2');
  const screen3 = document.getElementById('screen3');

  screen1.style.display = "none";
  screen1.style.visibility = "hidden";
  screen2.style.display = "none";
  screen2.style.visibility = "hidden";
  screen3.style.display = "none";
  screen3.style.visibility = "hidden";

  if (screenNo === 1) {
    screen1.style.display = "flex";
    screen1.style.visibility = "visible";
  } else if (screenNo === 2) {
    screen2.style.display = "flex";
    screen2.style.visibility = "visible";
  } else if (screenNo === 3) {
    screen3.style.display = "flex";
    screen3.style.visibility = "visible";
  }
}

movieSelect.addEventListener('change', (e) => {
  const screenNo = e.target.selectedIndex + 1;
  displaySeats(screenNo);

  ticketPrice = +e.target.value;
  updateCost();
});

container.addEventListener('click', (e) => {
  if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected');
    updateCost();
  }
});

// Initially display seats for the first movie
displaySeats(1);
displaySeats(2);
displaySeats(3);
updateCost();
