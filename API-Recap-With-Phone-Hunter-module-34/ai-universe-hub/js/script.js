const aiUniverseHub = async (isSeeMore) => {
  const res = await fetch("https://openapi.programming-hero.com/api/ai/tools");
  const data = await res.json();
  //   console.log(data);
  const aiTools = data.data.tools;
  //   console.log(ai);
  displayAi(aiTools, isSeeMore);
};

const displayAi = (aiTools, isSeeMore) => {
  console.log(aiTools);
  const aiToolsContainer = document.getElementById("ai-tools-container");
  aiToolsContainer.textContent = "";

  // see more container
  const seeMoreContainer = document.getElementById("see-more-container");
  // console.log(aiTools.length);

  if (aiTools.length > 6 && !isSeeMore) {
    seeMoreContainer.classList.remove("hidden");
  } else {
    seeMoreContainer.classList.add("hidden");
  }

  if (!isSeeMore) {
    aiTools = aiTools.slice(0, 6);
  }

  seeMoreContainer.addEventListener("click", (isSeeMore) => {
    aiUniverseHub(isSeeMore);
  });

  // featuresContent
  aiTools.forEach((aiTool) => {
    let featuresContent = "";
    aiTool.features.forEach((el) => {
      featuresContent += `<li>${el}</li>`;
    });

    const aiToolCard = document.createElement("div");
    aiToolCard.classList = "card bg-base-100 shadow-xl border";
    aiToolCard.innerHTML = `
    <figure>
      <img src="${aiTool.image}" alt="aiTool" />
    </figure>
    <div class="card-body">
      <div class="border-b py-4">
        <h2 class="card-title">Features</h2>
        <ol class="list-decimal ml-4">
          ${featuresContent}
        </ol>
      </div>
      <div class="flex justify-between items-center">
        <div class="space-y-2">
          <h2 class="text-2xl font-semibold">${aiTool.name}</h2>
          <p class="font-medium"><img class="inline-block" src="date.svg" alt=""> ${aiTool.published_in}</p>
        </div>

        <button onclick="handleShowDetail('${aiTool.id}')">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-9 h-9 bg-gray-100 p-2 rounded-full cursor-pointer"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
    `;

    aiToolsContainer.appendChild(aiToolCard);
  });
};

/* const handleShowDetail = (id) => {
  console.log("clicked show details", id);
};
 */

const handleShowDetail = async (id) => {
  // console.log("clicked show details", id);
  // load single aiTool data
  const res = await fetch(
    `https://openapi.programming-hero.com/api/ai/tool/${id}`
  );
  const data = await res.json();
  // console.log(data);
  const aiTool = data.data;
  // console.log(aiTool);
  showAiToolDetails(aiTool);
};
const showAiToolDetails = (aiTool) => {
  console.log(aiTool);
  const showDetailContainer = document.getElementById("show-detail-container");
  showDetailContainer.innerHTML = `
  <div class="flex justify-between items-center gap-5">
    <div class="border p-4 rounded-lg bg-[#FEF7F7]">
      <P class="text-xl font-semibold lg:w-11/12">${aiTool.description}</P>
      <div class="flex justify-center items-center gap-5 mt-5">
          <p class="px-10 py-8 font-bold bg-white rounded-lg text-[#03A30A]">
            <span class="block">${aiTool.pricing[0].price}</span>
            <span class="block">${aiTool.pricing[0].plan}</span>
          </p>
          <p class="px-10 py-8 font-bold bg-white rounded-lg text-[#F28927]">
          <span class="block">${aiTool.pricing[1].price}</span>
          <span class="block">${aiTool.pricing[1].plan}</span>
          </p>
          <p class="px-10 py-8 font-bold bg-white rounded-lg text-[#EB5757]">
          <span class="block">${aiTool.pricing[2].price}</span>
          <span class="block">${aiTool.pricing[2].plan}</span>
          </p>
      </div>

      <div class="flex justify-between items-center p-4 gap-5">
          <div>
              <h2 class="text-2xl font-semibold mb-2">Features</h2>
              <ol class="list-decimal ml-6">
                <li>${aiTool?.features[1]?.feature_name}</li>
                <li>${aiTool?.features[2]?.feature_name}</li>
                <li>${aiTool?.features[3]?.feature_name}</li>
              </ol>
          </div>
          <div>
              <h2 class="text-2xl font-semibold mb-2">Integrations</h2>
              <ol class="list-disc ml-6">
                <li>${aiTool.integrations[0] || "no data found"}</li>
                <li>${aiTool?.integrations[1] || "not data found"}</li>
                <li>${
                  aiTool?.integrations[2] ? aiTool.integrations[2] : "not found"
                }</li>
              </ol>
          </div>
      </div>
    </div>
    <div class="border p-4 rounded-lg">
      <img src="${aiTool.image_link[0]}" alt="aiTool" />
      <h3 class="text-xl font-semibold text-center p-2 mt-2">${
        aiTool.input_output_examples[0].input
      }</h3>
      <p class="text-center p-2">${aiTool.input_output_examples[0].output}</P>
    </div>
  </div>
  `;

  show_details_modal.showModal();
};

aiUniverseHub();
