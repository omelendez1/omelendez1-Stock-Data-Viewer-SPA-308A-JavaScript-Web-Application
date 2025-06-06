# Stock-Data-Viewer-SPA-308A-JavaScript-Web-Application
# omelendez1-Stock-Data-Viewer-SPA-308A-JavaScript-Web-Application
📈 Stock Data Viewer SPA 308A: JavaScript Web Application
A single-page application (SPA) that allows users to retrieve and view historical stock data 📊. Built using modern JavaScript practices, asynchronous logic, and a modular file structure, it offers a fast, functional, and finance-friendly experience.

🚀 Features
✨ Fetch historical stock data using the RapidAPI Stock Forecast API
🔍 Search by stock symbol and date range
📆 User input validation ensures clean and accurate requests
🔄 Asynchronous programming using async/await and Promises
📦 Modular architecture utilizing ES Modules
💡 User feedback with clear error messages and UI updates
🛠️ Technologies Used
HTML5 / CSS3 🎨
JavaScript (ES6+) 🧠
Fetch API for HTTP requests 🌐
Async/Await + Promises ⏳
ES Modules for clean separation of logic 🔧

📂 File Structure
graphql
Copy
Edit
📁 project-root/
├── index.html              # The main HTML file
├── style.css               # Application styling
├── main.js                 # Entry point script (event handling)
└── modules/
    ├── api.js              # API logic and fetch calls
    ├── ui.js               # Rendering of stock data and errors
    └── utils.js            # Validation functions
📋 How to Use
Clone the repository:

bash
Copy
Edit
git clone https://github.com/yourusername/stock-data-viewer.git
cd stock-data-viewer
Open index.html in your browser.

Search by entering a stock symbol (e.g., AAPL, MSFT) and desired date range.

View the results or receive a friendly error message if something goes wrong.

🧪 Example
Input:
Symbol: MSFT
Date Range: 2023-01-01 to 2023-01-10
Output:

yaml
Copy
Edit
Date: 2023-01-03, Close: 239.58  
Date: 2023-01-04, Close: 229.10  
...
📦 API Reference
Endpoint: POST /getHistoricalData
Host: ai-stock-market-forecast-price-predictions-stock-data.p.rapidapi.com
Headers:
x-rapidapi-key: YOUR_API_KEY
Content-Type: application/json

✅ Project Requirements Checklist
 Fetch/Axios API Call (POST)
 User Interaction (form input with symbol and date)
 Data Manipulation (POST request based on input)
 Promises / Async-Await usage
 Modular JavaScript (3+ modules)
 Error Handling & awareness of async behavior
 Clean UI with HTML/CSS
 No console errors
 Frequent Git commits
 README file present
 Creative effort demonstrated
