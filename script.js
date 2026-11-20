// ------------------- TASK 1 -------------------
console.log("Task 1: Array Manipulation Basics");
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
// displayList();

// ------------------- TASK 2 -------------------
console.log("Task 2: Filter and Search an Array");

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

addUniqueItem("bAnana");
addUniqueItem("milk");

displayList();

console.log(filterItems("i"));
console.log(filterItems("es"));
console.log(filterItems("a"));
