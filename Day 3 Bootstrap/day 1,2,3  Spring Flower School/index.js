function showSection(sectionId) {
    document.getElementById('welcome').style.display = 'none';
    document.getElementById('studentProfile').style.display = 'none';
    document.getElementById('timeTable').style.display = 'none';
    document.getElementById(sectionId).style.display = 'block';
}
// Simulated user data
let users = [{ username: "Ram", password: "1234" }];

// Monthly activities array
const activities = [
  { id: 1, activity: "Create project file on tables 12 to 19", subject: "Maths" },
  { id: 2, activity: "Write essay on environment", subject: "English" },
  { id: 3, activity: "Science model making", subject: "Science" },
  { id: 4, activity: "HTML portfolio project", subject: "Computer" }
];

// Initially show login page
window.onload = () => showSection("authSection");

// Show / Hide sections
function showSection(sectionId) {
  const sections = ["authSection", "welcome", "studentProfile", "timeTable", "monthlyActivities"];
  sections.forEach(id => document.getElementById(id).style.display = "none");
  document.getElementById(sectionId).style.display = "block";
}

// Login function
function login() {
  const uname = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();
  const user = users.find(u => u.username === uname && u.password === pass);

  if (user) {
    showSection("welcome");
  } else {
    document.getElementById("authMessage").innerText = "Invalid credentials!";
  }
}

// Register function
function register() {
  const uname = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();

  if (uname && pass) {
    users.push({ username: uname, password: pass });
    document.getElementById("authMessage").innerText = "Registration successful! You can login now.";
  } else {
    document.getElementById("authMessage").innerText = "Please enter username and password.";
  }
}

// Show activities by subject
function showActivities() {
  const subject = document.getElementById("subjectSelect").value;
  const listDiv = document.getElementById("activityList");
  listDiv.innerHTML = "";

  const filtered = activities.filter(a => a.subject === subject);
  if (filtered.length > 0) {
    filtered.forEach(a => {
      const p = document.createElement("p");
      p.textContent = `• ${a.activity}`;
      listDiv.appendChild(p);
    });
  } else {
    listDiv.innerHTML = "<p class='text-muted'>No activities found for this subject.</p>";
  }
}
