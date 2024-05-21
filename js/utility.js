// Mobile navbar
let isVisableDropdown = false;

// roogle mobile navbar
const toggleMobNavDropdown = () => {
  isVisableDropdown = !isVisableDropdown;
  const navbar_dropdown = document.getElementById("navbar_dropdown");
  const icon = document.getElementById("svg_toggle_icon");

  if (isVisableDropdown) {
    navbar_dropdown.classList.remove("hidden");
    icon.innerHTML =
      '<path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>';
  } else {
    icon.innerHTML = `
  <path
    d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"
  ></path>
`;

    navbar_dropdown.classList.add("hidden");
  }
};

let isOpenDropdown = false;

// Mobile dropdown 1 functionlities
const toogleMobileNavbarDropdown1 = () => {
  isOpenDropdown = !isOpenDropdown;
  //   get elements
  const dropdown_1_btn = document.getElementById("dropdown_1_btn");
  const dropdown_1_content_1 = document.getElementById("dropdown_1_content_1");
  if (isOpenDropdown) {
    dropdown_1_btn.classList.add("text-[#700000]");
    dropdown_1_content_1.classList.add("border-[#700000]");
    dropdown_1_content_1.classList.remove("hidden");
  } else {
    dropdown_1_btn.classList.remove("text-[#700000]");
    dropdown_1_content_1.classList.add("hidden");
    dropdown_1_content_1.classList.remove("border-[#700000]");
  }
};

// Mobile dropdown 2 functionlities
const toogleMobileNavbarDropdown2 = () => {
  isOpenDropdown = !isOpenDropdown;
  //   get elements
  const dropdown_2_btn = document.getElementById("dropdown_2_btn");
  const dropdown_2_content_1 = document.getElementById("dropdown_2_content_1");
  if (isOpenDropdown) {
    dropdown_2_btn.classList.add("text-[#700000]");
    dropdown_2_content_1.classList.add("border-[#700000]");
    dropdown_2_content_1.classList.remove("hidden");
  } else {
    dropdown_2_btn.classList.remove("text-[#700000]");
    dropdown_2_content_1.classList.add("hidden");
    dropdown_2_content_1.classList.remove("border-[#700000]");
  }
};

// Mobile dropdown 3 functionlities
const toogleMobileNavbarDropdown3 = () => {
  isOpenDropdown = !isOpenDropdown;
  //   get elements
  const dropdown_3_btn = document.getElementById("dropdown_3_btn");
  const dropdown_3_content_1 = document.getElementById("dropdown_3_content_1");
  if (isOpenDropdown) {
    dropdown_3_btn.classList.add("text-[#700000]");
    dropdown_3_content_1.classList.add("border-[#700000]");
    dropdown_3_content_1.classList.remove("hidden");
  } else {
    dropdown_3_btn.classList.remove("text-[#700000]");
    dropdown_3_content_1.classList.add("hidden");
    dropdown_3_content_1.classList.remove("border-[#700000]");
  }
};
