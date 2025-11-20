React Hooks & State Management

### details
This project demonstrates modern and advanced React concepts including Context API, custom hooks, Redux Toolkit, and Progressive Web App (PWA) support.

### Features 
Challenge 5 — React Context API (Theme System)
Toggle between dark and light modes
Theme applies to every component globally
Persisted theme even after page refresh

Challenge 6 — Progressive Web App (PWA)
Offline-first capability
App install popup
High Lighthouse PWA score
Optional offline banner

Challenge 7 — React Hooks (Workout Tracker)
Timer updates every second
Start / Stop / Reset buttons
Cleanup using clearInterval
Logic shared using custom hook

Challenge 8 — Redux Toolkit (Global State Management)
Fetch products from FakeStoreAPI
Update a selected product
Global shared state across all components

### Project Folder Structure
react-hooks/
src/
 ├── context/
 │     └── ThemeContext.js
 ├── redux/
 │     ├── store.js
 │     ├── productSlice.js
 ├── hooks/
 │     └── useTimer.js
 ├── components/
 │     ├── ThemeToggle.jsx
 │     ├── WorkoutTracker.jsx
 │     ├── ProductAdmin.jsx
 ├── App.jsx
 ├── index.js
public/
 ├── manifest.json
 ├── service-worker.js
 └── index.html

### Installation and Running
>npm install
>npm start
>npm run build
>npx serve -s build

