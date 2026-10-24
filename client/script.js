const API_URL = "http://localhost:5000/events";

fetch(API_URL)
  .then(response => response.json())
  .then(events => {
    events.forEach(renderEvent);
  })
  .catch(error => console.error("Error loading events:", error));

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const input = document.querySelector("#title");
  const title = input.value.trim();

  if (!title) {
    alert("Please enter an event title.");
    return;
  }

  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title })
  })
    .then(response => response.json())
    .then(newEvent => {
      renderEvent(newEvent);
      input.value = "";
    })
    .catch(error => console.error("Error adding event:", error));
});

function renderEvent(event) {
  const li = document.createElement("li");
  li.textContent = event.title;
  document.querySelector("#event-list").appendChild(li);
}