function findWaterFootprint(itemName) {

  if (!itemName) return undefined;

  const name = itemName.trim().toLowerCase();

  // exact match first
  let result = waterData.find(product => product.name === name);

  // if not found, try partial match
  if (!result) {
    result = waterData.find(product => product.name.includes(name));
  }

  return result;
}
