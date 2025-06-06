// modules/api.js
/* const BASE_URL = 'https://ai-stock-market-forecast-price-predictions-stock-data.p.rapidapi.com'; */
/* const BASE_URL = 'https://latest-stock-price.p.rapidapi.com'; */

/* const HEADERS = {
  'x-rapidapi-key': '849cb7a0d9msh2ec0d87a90ea912p18f044jsn666cfd414a9d',
  'x-rapidapi-host': 'ai-stock-market-forecast-price-predictions-stock-data.p.rapidapi.com',
  'Content-Type': 'application/json'
}; */
/* const HEADERS = {
  'x-rapidapi-key': '849cb7a0d9msh2ec0d87a90ea912p18f044jsn666cfd414a9d',
  'x-rapidapi-host': 'latest-stock-price.p.rapidapi.com'
}; */


                                            //retryCount = 0 to try and resolve  V  error 403
/* export async function getHistoricalData(symbol, startDate, endDate, retryCount = 0) {
  const url = `${BASE_URL}/getHistoricalData?noqueue=1`;
  const body = JSON.stringify({ symbol, startDate, endDate }); */
 /*  export async function getStockTimeseries(symbol = 'INFO.NS', timescale = '1', period = '1DAY') {
  const url = `${BASE_URL}/timeseries?Symbol=${encodeURIComponent(symbol)}&Timescale=${timescale}&Period=${period}`;
 */
  
    /*  if (response.status === 429 && retryCount < 1) {
    await new Promise(res => setTimeout(res, 3000));
    return await getHistoricalData(symbol, startDate, endDate, retryCount + 1);
  } */

 /*  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: HEADERS,
      body
    }); */

    //kept getting error 429 resolving this by adding a delay
   /*  if (response.status === 429 && retryCount < 1) {
    console.warn('⏳ Too many requests. Retrying in 3 seconds...');
    await new Promise(res => setTimeout(res, 3000));
    return await getHistoricalData(symbol, startDate, endDate, retryCount + 1); // Retry once
    } */


   /*  if (!response.ok) throw new Error(`Error: ${response.status}`);
    return await response.json();
  } catch (error) {
    throw error;
  } */
/*  i *//* f (!response.ok) {
      const errorText = await response.text();
      console.error('❌ API error response:', errorText);
      throw new Error(`HTTP ${response.status} - ${response.statusText}`);
    }

    return await response.json();

  } catch (error) {
    console.error('🔥 Fetch failed:', error.message);
    throw error;
  }
} */
//kept getting error 403 google stating key might be outdated so I added a new key
// modules/api.js
/* const BASE_URL = 'https://marketstack.p.rapidapi.com/api.marketstack.com/v1/eod'; */
/* const BASE_URL = 'https://api.polygon.io'; */
/* const HEADERS = {
  'x-rapidapi-key': '849cb7a0d9msh2ec0d87a90ea912p18f044jsn666cfd414a9d',
  'x-rapidapi-host': 'marketstack.p.rapidapi.com'
  'x-api-key': 'YOUR_API_KEY' 
}; */
/* const API_KEY = 'TV7ZTIDzCzOnMmGygxw8nLdrKAgQZfYO'; */

/* export async function getStockTimeseries(symbol = 'INFO.NS', timescale = '1', period = '1DAY') {
  const url = `${BASE_URL}/timeseries?Symbol=${encodeURIComponent(symbol)}&Timescale=${timescale}&Period=${period}`;
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: HEADERS
    });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP ${response.status} - ${response.statusText}\n${errorText}`);
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
} */
/* export async function getDailyOpenClose(symbol = 'AAPL', date = '2024-06-01') {
  const url = `${BASE_URL}/v1/open-close/${encodeURIComponent(symbol)}/${date}?adjusted=true&apiKey=${API_KEY}`;
  try {
    const response = await fetch(url, {
      method: 'GET'
      // No headers needed for API key, it's in the URL
    });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP ${response.status} - ${response.statusText}\n${errorText}`);
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
} */
// modules/api.js

const BASE_URL = 'https://api.polygon.io';
const API_KEY = 'TV7ZTIDzCzOnMmGygxw8nLdrKAgQZfYO';

/**
 * Fetches daily timeseries data for a given symbol and date range.
 * @param {string} symbol - Stock symbol (e.g., 'AAPL')
 * @param {string} from - Start date (YYYY-MM-DD)
 * @param {string} to - End date (YYYY-MM-DD)
 * @returns {Promise<Object>} - The timeseries data from Polygon.io
 */
export async function getTimeseries(symbol, from, to) {
  const url = `${BASE_URL}/v2/aggs/ticker/${encodeURIComponent(symbol)}/range/1/day/${from}/${to}?adjusted=true&sort=asc&apiKey=${API_KEY}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP ${response.status} - ${response.statusText}\n${errorText}`);
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
}