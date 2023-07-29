const imgSrc = [];

const availableQuantities = {
  XS: 2,
  S: 6,
  M: 8,
  L: 2,
  XL: 1,
};

// Function to check if the selected size is in stock
function isSizeInStock(size) {
  return availableQuantities[size] > 0;
}

function addToCart() {
  if (idx !== 0) {
    const sizeMapping = {
      1: "XS",
      2: "S",
      3: "M",
      4: "L",
      5: "XL",
    };
    const selectedSize = sizeMapping[idx];

    if (isSizeInStock(selectedSize)) {
      localStorage.setItem("myImgSrc", imgSrc);
      storeInCart(imgSrc[0], selectedSize);
      availableQuantities[selectedSize]--; // Decrease the available quantity for the selected size
      showAlert("success", "Added to Cart!");
    } else {
      showAlert("danger", "Selected size is out of stock!");
    }
  }
}

window.addEventListener("load", () => {
  const name = localStorage.getItem("myDivData");
  document.getElementById("title").innerHTML = name;
  document.getElementById("itemName").innerHTML = name;

  const storedImgSrc = localStorage.getItem("myImgSrc");
  const output = document.getElementById("clothingImage");
  const img = document.createElement("img");
  img.src = storedImgSrc;

  imgSrc.push(img.src);

  img.width = 700;
  img.setAttribute("style", "border: solid 1px grey; border-radius: 10px;");
  output.appendChild(img);

  localStorage.setItem("alertType", "danger");
});

var idx = 0;
function selectButton(buttonIndex) {
  localStorage.setItem("alertType", "success");
  const buttons = document.querySelectorAll(".button");
  buttons.forEach((button, index) => {
    if (index === buttonIndex - 1) {
      button.classList.add("selected");
      idx = buttonIndex;
    } else {
      button.classList.remove("selected");
    }
  });
}

function addToWish() {
  if (idx != 0) {
    localStorage.setItem("myImgSrc", imgSrc);
    storeInWish(imgSrc[0]);
  }
}
