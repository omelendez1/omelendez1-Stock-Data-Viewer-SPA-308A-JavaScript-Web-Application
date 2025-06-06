// modules/ui.js
/* export function renderStockData(data) {
  const container = document.getElementById('results');
  container.innerHTML = '';
  if (!data || !data.length) {
    container.textContent = 'No data found.';
    return;
  } */
  /* data.forEach(day => {
    const div = document.createElement('div');
    div.className = 'stock-day';
    div.textContent = `Date: ${day.date}, Close: ${day.close}`;
    container.appendChild(div);
  });
} */
/* data.forEach(entry => {
    const div = document.createElement('div');
    div.className = 'stock-entry';
    div.textContent = `Date: ${entry.date}, Open: ${entry.open}, Close: ${entry.close}, High: ${entry.high}, Low: ${entry.low}`;
    container.appendChild(div);
  });
}

export function showError(message) {
  const container = document.getElementById('results');
  container.innerHTML = `<span class="error">${message}</span>`;
} */
// modules/ui.js
/* export function renderStockData(data) {
  const container = document.getElementById('results');
  container.innerHTML = '';
  if (!data || !data.length) {
    container.textContent = '❌ No data found.';
    return;
  }
  data.forEach(entry => {
    const div = document.createElement('div');
    div.className = 'stock-entry';
    div.textContent = `📅Date: ${entry.date} | 🟢 Open: ${entry.open} | 🔴 Close: ${entry.close} | 🔼 High: ${entry.high} | 🔽 Low: ${entry.low}`;
    container.appendChild(div);
  });
}

export function showError(message) {
  const container = document.getElementById('results');
  container.innerHTML = `<span class="error">⚠️ ${message}</span>`;
} */
// modules/ui.js

export function renderStockData(data) {
  const container = document.getElementById('results');
  container.innerHTML = '';
  if (!data || !data.results || data.results.length === 0) {
    container.textContent = 'No data found for that symbol and date range.';
    return;
  }
  data.results.forEach(entry => {
    const div = document.createElement('div');
    div.className = 'stock-entry';
    // Polygon.io returns unix timestamp in ms as 't'
    const date = new Date(entry.t).toLocaleDateString();
    div.innerHTML = `
      <strong>${date}</strong><br>
      Open: ${entry.o} &nbsp; Close: ${entry.c} &nbsp; High: ${entry.h} &nbsp; Low: ${entry.l} &nbsp; Volume: ${entry.v}
    `;
    container.appendChild(div);
  });
}

export function showError(message) {
  const container = document.getElementById('results');
  container.innerHTML = `<span class="error">${message}</span>`;
}