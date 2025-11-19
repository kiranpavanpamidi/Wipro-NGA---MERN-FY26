Day 14 — ReactJS Advanced Concepts

### Challenge 1: Lazy Loading & Code Splitting
# User Story
Modules should load only when the user clicks, making the app faster.

# Features:
Initially loads only the visible UI.
Loads CourseDetails and InstructorProfile on button click.
Shows a custom loading spinner.

### Challenge 2: Pure Components
# User Story
Dashboard widgets should re-render only if their props change, improving performance.

# Result:
Only modified card re-renders
Others stay untouched (verified in console)

### Challenge 3: Error Boundary
# User Story
If a component crashes, the UI should not break completely.
A fallback message should show instead.

# Demo:
A component called BrokenProductCard intentionally throws an error.

### Challenge 4: React Portals
# User Story
Notifications and modal popups should appear above all UI, even if nested.

# Implemented Using:
ReactDOM.createPortal()
#modal-root in index.html
Clean and responsive modal
Supports open/close toggle

### Project Structure
Day14/
src/
 ├── components/
 │    ├── LazyLoadDemo.jsx
 │    ├── CourseDetails.jsx
 │    ├── InstructorProfile.jsx
 │    ├── StatsCard.jsx
 │    ├── Dashboard.jsx
 │    ├── ErrorBoundary.jsx
 │    ├── BrokenProductCard.jsx
 │    ├── ModalPortal.jsx
 ├── App.jsx
 ├── index.js
public/
 └── index.html

### How to run
-go to terminal with the filename
>npm install
>npm start



