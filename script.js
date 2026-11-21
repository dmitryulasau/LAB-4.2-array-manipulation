// ------------------- TASK 1 -------------------
console.log("-------- Task 1: Array Manipulation Basics --------");
let shoppingList = [];

// Function adds an item to the shopping list
function addItem(item) {
  shoppingList.push(item);
}

// Function removes the last item from the shopping list
function removeLastItem() {
  shoppingList.pop();
}

// Function logs all items in the shopping list
function displayList() {
  console.log("SHOPPING LIST:");
  for (let item of shoppingList) {
    console.log(item);
  }
}

addItem("bread");
addItem("eggs");
addItem("milk");
addItem("water");
addItem("tomato");

removeLastItem();

addItem("apples");
addItem("cookies");
// Comment out below for TASK 1
displayList();

// ------------------- TASK 2 -------------------
console.log("-------- Task 2: Filter and Search an Array --------");

function addUniqueItem(item) {
  if (!shoppingList.includes(item)) {
    shoppingList.push(item);
    console.log(`${item} - An item has been added!`);
  } else {
    console.log(`${item} - This item already in a list`);
  }
}

function filterItems(searchTerm) {
  console.log(`Results for searching "${searchTerm}":`);
  let filterResult = [];
  for (let item of shoppingList) {
    if (item.toLowerCase().includes(searchTerm.toLowerCase())) {
      filterResult.push(item);
    }
  }

  return filterResult;
}

// Using filter method
function filterItems2(searchTerm) {
  console.log(`Results for searching "${searchTerm}":`);
  const result = shoppingList.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return result;
}

addUniqueItem("bAnana");
addUniqueItem("milk");
addUniqueItem("napkIns");

displayList();

console.log(filterItems("i"));
console.log(filterItems("es"));
console.log(filterItems("a"));

console.log(filterItems2("na"));

// ------------------- TASK 3 -------------------
console.log("-------- Task 3 --------");
const items = [];

const inputField = document.getElementById("input");
const addItemButton = document.getElementById("add-item");
const removeItemButton = document.getElementById("remove-item");
const ul = document.querySelector(".list-group");

// RENDER LIST
function renderList() {
  ul.innerHTML = "";
  for (let i = 0; i < items.length; i++) {
    const li = document.createElement("li");
    li.classList.add("list-group-item", "fw-bold");
    li.textContent = items[i];
    ul.append(li);
  }
}

// ADD ITEM
addItemButton.addEventListener("click", function () {
  const item = inputField.value.trim();

  if (item === "") {
    return;
  }
  items.push(item[0].toUpperCase() + item.slice(1));

  renderList();

  inputField.value = "";
  console.log(items);
});

removeItemButton.addEventListener("click", function () {
  items.pop();
  renderList();
  console.log(items);
});
