// the tag argument is the name of the value of the button. we use this name to add a new class to the html button element, which can be toggled on and off.
// in this case the like button can be toggle on and off and have its styling changed
const onLike = (tag) => {
  console.log(tag.value);
  tag.classList.toggle(tag.value);

  const initialText = "Like";
  if (tag.textContent === initialText) {
    tag.textContent = "Liked";
  } else {
    tag.textContent = initialText;
  }
};

// create arrays to store saved images and user comments
let savedImages = [];
let userComments = [];

// if page has not been run, set up local storage
// if page has been run before, print user comments at the comment section
const onLoad = () => {
  if (localStorage.getItem("hasCodeRunBefore") === null) {
    localStorage.setItem("images", JSON.stringify(savedImages));
    localStorage.setItem("userComments", JSON.stringify(userComments));
    localStorage.setItem("hasCodeRunBefore", true);
  } else {
    userComments = JSON.parse(localStorage.getItem("userComments"));
    // comment section container
    let commentDiv = document.getElementById("comment-added");

    userComments.forEach((comment) => {
      let newDiv = document.createElement("div");
      newDiv.innerHTML += comment;
      newDiv.setAttribute("class", "individual-comment");
      commentDiv.appendChild(newDiv);
    });
  }
};

// when Save for later is clicked the corresponding image will be stored in local storage. the key for the item stored is the value of the button element.
const onSave = (tag) => {
  savedImages = JSON.parse(localStorage.getItem("images"));
  const imageValue = tag.value;
  // console.log(savedImages);
  // the key corresponding to its image will be push to an array
  savedImages.push(imageValue);
  tag.disabled = true;
  const totalImages = savedImages.length;
  alert(
    `This image has been saved for later! You now have ${totalImages} images in your folder`
  );
  localStorage.setItem("images", JSON.stringify(savedImages));
};

// allow user to leave comments and store them in local storage
const onComment = () => {
  userComments = JSON.parse(localStorage.getItem("userComments"));
  const textAreaText = document.getElementById("textarea-text");
  userComments.push(textAreaText.value);
  localStorage.setItem("userComments", JSON.stringify(userComments));
  alert("Thank you for your comment!");
  window.location.reload();
};

const onContactForm = () => {
  alert("Thank you! We will respond in 3-5 working days.");
};
