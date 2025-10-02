const lunches = [];

function addLunchToEnd (lunchArray, item) {
  lunchArray.push(item);
  console.log(`${item} added to the end of the lunch menu.`);
  return lunchArray;
}

addLunchToEnd(lunches, "Tacos");
addLunchToEnd(["Pizza", "Tacos"], "Burger");


function addLunchToStart (lunchArray, item) {
  lunchArray.unshift(item);
  console.log(`${item} added to the start of the lunch menu.`);
  return lunchArray;
}

addLunchToStart(lunches, "Sushi");
addLunchToEnd(["Burger", "Sushi"], "Pizza");


function removeLastLunch (lunchArray) {
  if (lunchArray.length === 0) {
    console.log("No lunches to remove.")
  }

  const removedItem = lunchArray.pop();
  console.log(`${removedItem} removed from the end of the lunch menu.`);
  return lunchArray;
}

removeLastLunch(["Stew", "Soup", "Toast"]);
removeLastLunch(["Sushi", "Pizza", "Noodles"]);


function removeFirstLunch (lunchArray) {
  if (lunchArray.length === 0) {
    console.log("No lunches to remove.");
  }

  const removedItem = lunchArray.shift();
  console.log(`${removedItem} removed from the start of the lunch menu.`);
  return lunchArray;
}


removeFirstLunch(["Salad", "Eggs", "Cheese"]);
removeFirstLunch(["Sushi", "Pizza", "Burger"]);