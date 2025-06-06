// main.js
/* import { getHistoricalData } from './modules/api.js';
import { renderStockData, showError } from './modules/ui.js';
import { validateInput } from './modules/utils.js';

document.getElementById('search-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const symbol = document.getElementById('symbol').value;
  const startDate = document.getElementById('start-date').value;
  const endDate = document.getElementById('end-date').value;

  if (!validateInput(symbol, startDate, endDate)) {
    showError('Invalid input.');
    return;
  }

  try {
    const data = await getHistoricalData(symbol, startDate, endDate);
    renderStockData(data.data); // Adjust property as per actual API response
  } catch (err) {
    showError(err.message);
  }
}); */
/* import { getStockTimeseries } from './modules/api.js';
import { renderStockTimeseries, showError } from './modules/ui.js';
import { validateSymbol } from './modules/utils.js';

document.getElementById('search-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const symbol = document.getElementById('symbol').value.trim();
  if (!validateSymbol(symbol)) {
    showError('Please enter a valid stock symbol.');
    return;
  }
  try {
    const data = await getStockTimeseries(symbol);
    renderStockTimeseries(data);
  } catch (err) {
    showError(err.message);
  }
}); */
/* const url = 'https://latest-stock-price.p.rapidapi.com/timeseries?Symbol=INFO.NS&Timescale=1&Period=1DAY';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '849cb7a0d9msh2ec0d87a90ea912p18f044jsn666cfd414a9d',
    'x-rapidapi-host': 'latest-stock-price.p.rapidapi.com'
  }
};

(async () => {
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
})(); */
// main.js
/* import { getStockTimeseries } from './modules/api.js';
import { renderStockData, showError } from './modules/ui.js';
import { validateSymbol } from './modules/utils.js';

document.getElementById('search-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const symbol = document.getElementById('symbol').value.trim();
  if (!validateSymbol(symbol)) {
    showError('Please enter a valid stock symbol.');
    return;
  }
  try {
    const data = await getStockTimeseries(symbol);
    renderStockData(data);
  } catch (err) {
    showError(err.message);
  }
}); */
/* import { getDailyOpenClose } from './modules/api.js';

document.getElementById('search-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const symbol = document.getElementById('symbol').value.trim();
  const date = document.getElementById('date').value; // Add a date input in your HTML!
  try {
    const data = await getDailyOpenClose(symbol, date);
    console.log(data); // Or render to UI
  } catch (err) {
    console.error(err);
  }
}); */
// main.js

import { getTimeseries } from './modules/api.js';
import { renderStockData, showError } from './modules/ui.js';
import { validateInputs } from './modules/utils.js';

document.getElementById('search-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const symbol = document.getElementById('symbol').value.trim().toUpperCase();
  const from = document.getElementById('from').value;
  const to = document.getElementById('to').value;
  if (!validateInputs(symbol, from, to)) {
    showError('Please enter a valid symbol and date range.');
    return;
  }
  try {
    const data = await getTimeseries(symbol, from, to);
    renderStockData(data);
  } catch (err) {
    showError(err.message);
  }
});