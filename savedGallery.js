// hard code image addresses
const imageMap = {
  drawing:
    "https://i.pinimg.com/736x/e4/f6/33/e4f633441e50b4b65c24bf2e9e72a524--crayon-drawings-drawings-of.jpg",
  reading:
    "https://ichef.bbci.co.uk/news/304/mcs/media/images/71331000/jpg/_71331828_potterstone.jpg",
  lego: "https://images.immediate.co.uk/production/volatile/sites/25/2022/08/Inquisitor-transport-Scythe-2c38f59.png",
  dinosaur:
    "https://cdn11.bigcommerce.com/s-fa6invgjkj/images/stencil/original/products/680/4921/XTT-MED-DINO-BNDL1red__22345.1648640698.jpg?c=2",
};

// create an array to store the images' key
let savedImages = [];

const onLoad = () => {
  if (localStorage.getItem("hasCodeRunBefore") === null) {
    localStorage.setItem("images", JSON.stringify(savedImages));
    localStorage.setItem("hasCodeRunBefore", true);
  } else {
    savedImages = JSON.parse(localStorage.getItem("images"));
    let galleryDiv = document.getElementById("gallery-container");
    savedImages.forEach((image) => {
      let listItem = document.createElement("img");
      listItem.src += imageMap[image];
      galleryDiv.appendChild(listItem);
      let deleteBtn = document.createElement("button");
      deleteBtn.innerHTML += "Delete";
      deleteBtn.setAttribute("onclick", "deleteImg(this)");
      deleteBtn.setAttribute("value", image);

      galleryDiv.appendChild(deleteBtn);
    });
  }
};

const deleteImg = (tag) => {
  savedImages = JSON.parse(localStorage.getItem("images"));
  // console.log(tag.value);
  const toDelete = savedImages.indexOf(tag.value);
  savedImages.splice(toDelete, 1);
  console.log(savedImages);
  localStorage.setItem("images", JSON.stringify(savedImages));
  window.location.reload();
};
