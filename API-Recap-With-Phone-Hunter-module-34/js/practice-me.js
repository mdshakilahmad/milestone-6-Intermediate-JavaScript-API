const loadPhone = async (searchText = "13", isShowAll) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phone = data.data;
  // console.log(phone);
  displayPhones(phone, isShowAll);
};

const displayPhones = (phones, isShowAll) => {
  // console.log(phones);
  const phoneContainer = document.getElementById("phone-container");
  phoneContainer.textContent = "";

  console.log(phones.length);

  const showAllContainer = document.getElementById("show-all-container");

  if (phones.length > 12 && !isShowAll) {
    showAllContainer.classList.remove("hidden");
  } else {
    showAllContainer.classList.add("hidden");
  }

  console.log("is show All", isShowAll);
  if (!isShowAll) {
    phones = phones.slice(0, 12);
  }

  phones.forEach((phone) => {
    console.log(phone);
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card bg-base-100 shadow-xl`; // ekhane classList er pore add deinai karon etar div ta javascript diyei kora ekhane ovabe na dileo hobe
    phoneCard.innerHTML = `
    <figure><img src="${phone.image}" alt="phone" /></figure>
    <div class="card-body">
      <h2 class="card-title">${phone.phone_name}</h2>
      <div class="card-actions justify-center">
        <button onclick="handleShowDetail('${phone.slug}')" class="btn btn-primary">Show Details</button>
      </div>
    </div>

    `;
    phoneContainer.appendChild(phoneCard);
  });

  // hide loadig spinner
  toggleLoadingSpinner(false);
};

const handleShowDetail = async (id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phone/${id}`
  );
  // console.log("show details", id);
  const data = await res.json();
  const phone = data.data;
  // console.log(phone);
  showPhoneDetails(phone);
};

const showPhoneDetails = (phone) => {
  console.log(phone);
  const phoneName = document.getElementById("show-detail-phone-name");
  phoneName.innerText = `${phone.name}`;

  const showDetailContainer = document.getElementById("show-detail-container");
  showDetailContainer.innerHTML = `
  <img class="mx-auto m-2" src="${phone.image}" alt="">
  <p><span>Storage:</span>${phone?.mainFeatures?.storage}</p>
  <p><span>Display Size:</span>${phone?.mainFeatures?.displaySize}</p>
  <p><span>memory:</span>${phone?.mainFeatures?.memory}</p>
  <p><span>
  sensors:</span>${phone?.mainFeatures?.sensors}</p>
  GPS:</span>${phone?.others?.GPS || "no gps abailable"}</p>
  GPS:</span>${phone?.others?.GPS ? phone.others.GPS : "no gps"}</p>
  `;
  show_details_modal.showModal();
};

// handle search button
const handleSearch = (isShowAll) => {
  console.log("search clicked");
  toggleLoadingSpinner(true);
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  loadPhone(searchText, isShowAll);
  // searchField.value = "";
};

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
});

const toggleLoadingSpinner = (isLoading) => {
  const loadingSpinner = document.getElementById("loading-spinner");
  // loadingSpinner.classList.remove("hidden");
  if (isLoading) {
    loadingSpinner.classList.remove("hidden");
  } else loadingSpinner.classList.add("hidden");
};

// handle show all
const handleShowAll = () => {
  handleSearch(true);
};

loadPhone();
