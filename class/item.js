class Item {
  // Item Class: Item should have name and description attributes
  name = '';
  description = '';
  // Your code here

  constructor(
    name,
    description
  ) {
    this.name = name;
    this.description = description;
  }
}

module.exports = {
  Item,
};