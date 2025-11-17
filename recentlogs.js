fetch("recentlogs.json")
  .then(res => res.json())
  .then(logs => {
    const container = document.getElementById("recent-logs-container");

    logs.forEach(l => {
      container.innerHTML += `
        <div class="log-item">
          <p><strong>${l.date}</strong></p>
          <p>${l.log}</p>
        </div>
      `;
    });
  })
  .catch(err => console.error("Error loading logs:", err));
