import _ from "lodash";
import "./css/style.css";
import myImgGeneratedUrl from "./my-image.png";
import data from "./data/data.xml";
import notes from "./data/data.csv";

console.log(myImgGeneratedUrl);

function component() {
  const element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  // create img element
  const myImage = new Image();
  myImage.src = myImgGeneratedUrl;

  element.appendChild(myImage);

  console.log(data);
  console.log(notes);

  return element;
}

document.body.appendChild(component());
