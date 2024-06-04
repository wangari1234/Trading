import { Component } from '@angular/core';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrl: './currency.component.css'
})
export class CurrencyComponent {
  // Simulated currency data
 currencyData = [
  { currencyPair: 'EUR/USD', rate: 1.2035 },
  { currencyPair: 'USD/JPY', rate: 109.75 },
  { currencyPair: 'GBP/USD', rate: 1.3862 },
  // Add more currency data as needed
];

// Update ticker tape with currency data
updateTicker() {
  const tickerList = document.querySelector('.ticker-list');
  if (!tickerList) return;

  tickerList.innerHTML = ''; // Clear previous items

  this.currencyData.forEach(function(data) {
    const listItem = document.createElement('li');
    listItem.textContent = `${data.currencyPair}: ${data.rate}`;
    tickerList.appendChild(listItem);
  });
}

// Update ticker tape periodically (e.g., every 5 seconds)
// setInterval(updateTicker, 5000); // Adjust interval as needed
}
