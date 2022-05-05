import sortArray from "../src/sort_array"

const form = document.querySelector("#form");
const input = document.querySelector("#input");
const oddList = document.querySelector("#odd-list");
const evenList = document.querySelector("#even-list");

const createListItem = (list, num) => {
  const item = document.createElement("li");
  item.innerHTML = num;
  list.appendChild(item);
};


form.addEventListener("submit", (event) => {
  event.preventDefault();
  oddList.innerHTML = "";
  evenList.innerHTML = "";

  const userInput = input.value;
  const inputArray = userInput.split(" ");

  const sortedArray = sortArray(inputArray);

  sortedArray.forEach((num) => {
    if (num % 2 === 0) {
      createListItem(evenList, num);
    } else {
      createListItem(oddList, num);
    }
  });

  input.value = "";
});
