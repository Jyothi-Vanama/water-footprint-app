function findWaterFootprint(itemName) {
  const name = itemName.toLowerCase();

  // search in dataset
  const result = waterData.find(product => product.name === name);

  return result; // returns undefined if not found
}

