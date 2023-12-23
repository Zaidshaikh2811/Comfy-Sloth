export const formatPrice = (price) => {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price / 100);
};

export const getUniqueValues = (data, type) => {
  let uniqueValue = data.map((item) => {
    return item[type];
  });
  if (type == "colors") {
    uniqueValue = uniqueValue.flat();
  }
  return ["all", ...new Set(uniqueValue)];
};
