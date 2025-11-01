// userstory2/script.js
// Use let/const, arrow functions, destructuring, template literals

const eventsContainer = document.getElementById('eventsContainer');
const categoryFilter = document.getElementById('categoryFilter');
const dateFilter = document.getElementById('dateFilter');
const refreshBtn = document.getElementById('refreshBtn');

let eventsData = []; 

async function fetchEvents() {
  try {
    const res = await fetch('events.json', {cache: "no-store"});
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    await new Promise(r => setTimeout(r, 300));
    const data = await res.json();
    eventsData = data;
    populateCategoryFilter(data);
    renderEvents(data);
  } catch (err) {
    console.error('Failed to fetch events:', err);
    eventsContainer.innerHTML = `<div class="alert alert-danger">Unable to load events.</div>`;
  }
}


const populateCategoryFilter = (data) => {
  const cats = [...new Set(data.map(e => e.category))];
  categoryFilter.innerHTML = `<option value="">All categories</option>` + cats.map(c => `<option>${c}</option>`).join('');
}

const renderEvents = (data) => {
  if (!data.length) {
    eventsContainer.innerHTML = `<div class="col-12"><p>No events to show.</p></div>`;
    return;
  }
  eventsContainer.innerHTML = data.map(({id,title,category,date,location}) => `
    <article class="col-md-6">
      <div class="card">
        <div class="card-body d-flex justify-content-between align-items-start">
          <div>
            <h5>${title}</h5>
            <p class="mb-1"><small>${category} • ${location}</small></p>
            <p><strong>${new Date(date).toLocaleDateString()}</strong></p>
          </div>
          <div>
            <button class="btn btn-sm btn-primary" data-id="${id}">Register</button>
          </div>
        </div>
      </div>
    </article>`).join('');
}


const applyFilters = () => {
  const cat = categoryFilter.value;
  const date = dateFilter.value;
  let filtered = [...eventsData];
  if (cat) filtered = filtered.filter(e => e.category === cat);
  if (date) filtered = filtered.filter(e => e.date === date);
  renderEvents(filtered);
}

categoryFilter.addEventListener('change', applyFilters);
dateFilter.addEventListener('change', applyFilters);
refreshBtn.addEventListener('click', () => fetchEvents());

eventsContainer.addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-id]');
  if (!btn) return;
  const id = Number(btn.getAttribute('data-id'));
  const ev = eventsData.find(x => x.id === id);
  if (ev) alert(`Registering for: ${ev.title} on ${ev.date}`);
});

fetchEvents();
