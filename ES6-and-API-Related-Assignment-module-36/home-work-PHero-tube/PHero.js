/* 
function loadData() {
  fetch("https://openapi.programming-hero.com/api/videos/categories")
    .then((res) => res.json())
    .then((data) => console.log(data));
}

loadData();
 */

const loadButton = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );
  const data = await res.json();
  //   console.log(data);
  //   console.log(data.data);
  //   console.log(data.data[0].category);
  const buttons = data.data;
  displayButton(buttons);
};

const displayButton = (buttons) => {
  console.log(buttons);
  const buttonsContainer = document.getElementById("buttons-container");
  const allButton = document.createElement("div");

  allButton.classList = `text-center mt-10 mb-12`;
  allButton.innerHTML = `
    <button onclick="loadData()"
    class="text-white font-medium px-5 py-2 rounded bg-[#FF1F3D]"
    >
    ${buttons?.[0]?.category}
    </button>
    <button onclick="music()"
    class="text-[#5D5D5D] font-medium px-5 py-2 rounded bg-[#DEDEDE]"
    >
    ${buttons?.[1]?.category}
    </button>
    <button onclick="comedy()"
    class="text-[#5D5D5D] font-medium px-5 py-2 rounded bg-[#DEDEDE]"
    >
    ${buttons?.[2]?.category}
    </button>
    <button onclick="drawing()"
    class="text-[#5D5D5D] font-medium px-5 py-2 rounded bg-[#DEDEDE]"
    >
    ${buttons?.[3]?.category}
    </button>
  `;
  buttonsContainer.appendChild(allButton);
};

// bg-[#FF1F3D]
loadButton();

const loadData = async () => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/1000`
  );
  const data = await res.json();
  //   console.log(data);
  const allData = data.data;
  // console.log(allData);
  displayData(allData);
};
const displayData = (allData) => {
  // console.log(allData);
  const mainContainer = document.getElementById("main-contianer");
  mainContainer.classList.add("grid-cols-4");
  mainContainer.innerText = "";
  allData.forEach((data) => {
    console.log(data);
    const cardDiv = document.createElement("div");
    cardDiv.classList = `card bg-base-100 shadow-xl`;
    cardDiv.innerHTML = `
    <figure>
      <img
        src="${data.thumbnail}"
        alt="Shoes"
      />
    </figure>
    <div class="p-3 card-body">
      <div class="flex gap-3 items-start">
        <img class="w-10 h-10 rounded-full" src="${data?.authors?.[0].profile_picture}" alt="" />
        <h2 class="text-[#171717] font-bold">
          ${data.title}
        </h2>
      </div>
      <p>${data.authors[0].profile_name}</p>
      <p>${data.others.views} views</p>
    </div>
    `;
    mainContainer.appendChild(cardDiv);
  });
};

loadData();

/* const music = async () => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/1000`
  );
  const data = await res.json();
  // console.log(data);
  const music = data.data;
  displayMusic(music);
};

const displayMusic = (music) => {
  console.log(music);
};
// music();
 */

const music = async () => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/1001`
  );
  const data = await res.json();
  // console.log(data);
  const music = data.data;
  displayMusic(music);
};
const displayMusic = (music) => {
  console.log(music);
  const mainContainer = document.getElementById("main-contianer");
  mainContainer.classList.add("grid-cols-4");
  mainContainer.innerText = "";
  music.forEach((data) => {
    console.log(data);
    const cardDiv = document.createElement("div");
    cardDiv.classList = `card bg-base-100 shadow-xl`;
    cardDiv.innerHTML = `
    <figure>
      <img
        src="${data.thumbnail}"
        alt="Shoes"
      />
    </figure>
    <div class="p-3 card-body">
      <div class="flex gap-3 items-start">
        <img class="w-10 h-10 rounded-full" src="${data?.authors?.[0].profile_picture}" alt="" />
        <h2 class="text-[#171717] font-bold">
          ${data.title}
        </h2>
      </div>
      <p>${data.authors[0].profile_name}</p>
      <p>${data.others.views} views</p>
    </div>
    `;
    mainContainer.appendChild(cardDiv);
  });
};
// music();

// 2

const comedy = async () => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/1003`
  );
  const data = await res.json();
  // console.log(data);
  const comedy = data.data;
  displaycomedy(comedy);
};
const displaycomedy = (comedy) => {
  console.log(comedy);
  const mainContainer = document.getElementById("main-contianer");
  mainContainer.classList.add("grid-cols-4");
  mainContainer.innerText = "";
  comedy.forEach((data) => {
    console.log(data);
    const cardDiv = document.createElement("div");
    cardDiv.classList = `card bg-base-100 shadow-xl`;
    cardDiv.innerHTML = `
    <figure>
      <img
        src="${data.thumbnail}"
        alt="Shoes"
      />
    </figure>
    <div class="p-3 card-body">
      <div class="flex gap-3 items-start">
        <img class="w-10 h-10 rounded-full" src="${data?.authors?.[0].profile_picture}" alt="" />
        <h2 class="text-[#171717] font-bold">
          ${data.title}
        </h2>
      </div>
      <p>${data.authors[0].profile_name}</p>
      <p>${data.others.views} views</p>
    </div>
    `;
    mainContainer.appendChild(cardDiv);
  });
};

// comedy();

// 3
const drawing = async () => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/1005`
  );
  const data = await res.json();
  console.log(data);
  // console.log(data.message);
  const drawing = data.data;
  displaydrawing(drawing, data);
};
const displaydrawing = (drawing, data) => {
  const mainContainer = document.getElementById("main-contianer");
  mainContainer.classList.add("grid-cols-4");
  mainContainer.innerText = "";
  console.log(drawing);
  // console.log(data.message);
  emty = data.message;
  if (drawing.length === 0) {
    // console.log(emty);
    mainContainer.classList.remove("grid-cols-4");
    mainContainer.innerHTML = `
    <img class="mx-auto mt-14" src="images/content.png" alt="content">
    <p class="text-center">${(emty =
      "Oops!! Sorry, There is no content here")}<p>
    `;
  }

  drawing.forEach((data) => {
    console.log(data);
    const cardDiv = document.createElement("div");
    cardDiv.classList = `card bg-base-100 shadow-xl`;
    cardDiv.innerHTML = `
    <figure>
      <img
        src="${data.thumbnail}"
        alt="Shoes"
      />
    </figure>
    <div class="p-3 card-body">
      <div class="flex gap-3 items-start">
        <img class="w-10 h-10 rounded-full" src="${data?.authors?.[0].profile_picture}" alt="" />
        <h2 class="text-[#171717] font-bold">
          ${data.title}
        </h2>
      </div>
      <p>${data.authors[0].profile_name}</p>
      <p>${data.others.views} views</p>
    </div>
    `;
    mainContainer.appendChild(cardDiv);
  });
};

// drawing();
