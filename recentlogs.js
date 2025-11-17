fetch("posts.json")
  .then(res => res.json())
  .then(posts => {
    const container = document.getElementById("blog-container");

    posts.forEach(post => {
      container.innerHTML += `
        <div class="post">
          <p><strong>${post.date}</strong></p>
          <p>${post.log}</p>
        </div>
      `;
    });
  });
