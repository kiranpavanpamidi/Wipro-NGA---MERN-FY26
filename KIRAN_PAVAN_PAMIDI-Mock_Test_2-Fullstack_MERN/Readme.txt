Mock-2 Practice Assessment – React Front-End Development
Name: KIRAN PAVAN PAMIDI
Total Marks: 60
Duration: 120 Minutes
Mode: Individual Assessment
Submission Format: ZIP File

### details:
# User Story 1 – Homepage & Components  
→ Header, DestinationCard, Footer  
→ Used Props, State, and Event Handling

# User Story 2 – Packages Page  
→ Routing (react-router-dom)  
→ Data Fetch via json-server (axios + useEffect)

# User Story 3 – Booking Form  
→ Formik + Yup Validation  
→ Context/Redux State Management  
→ Added PWA Support

# Screenshots:
- homepage.png
- packages.png
- bookingform.png


### file format:
travel-booking
	├── src/
	├── UserStory1/
	│   ├── Header.js
	│   ├── DestinationCard.js
	│   └── Footer.js
	├── UserStory2/
	│   ├── Home.js
	│   └── Packages.js
	├── UserStory3/
	│   └── BookingForm.js
	├── store/
	│   ├── actions.js
	│   └── reducers.js
	├── screenshots/
	│   ├── Homepage.png
	│   ├── Packages.png
	│   ├── Bookingform.png
	│   └── Conformation.png
	├── App.js
	├── index.js
	└── db.json
	
### Execution (Running the code)

dir to /travel-booking>
first install npm module
>npm install

then  run the backend
>npx json-server --watch db.json --port 5000

then run the frontend
>npm start

!!! if any error in packages section run backend again and refresh the react page;


