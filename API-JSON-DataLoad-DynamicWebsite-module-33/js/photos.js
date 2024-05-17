// photo

function loadData() {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res) => res.json())
    .then((data) => displayPhotos(data));
}
function displayPhotos(users) {
  const photoContainer = document.getElementById("photo-container");
  for (const user of users) {
    console.log(user);
    const div = document.createElement("div");
    div.classList.add("user");
    div.innerHTML = `
      <h4>id:${user.id}</h4>
      <h4>title:${user.title}</h4>
      <img src="${user.thumbnailUrl}" alt="img">
      `;
    photoContainer.appendChild(div);
  }
}

loadData();
