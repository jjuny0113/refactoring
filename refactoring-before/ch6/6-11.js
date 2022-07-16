export function priceOrder(product, quantity, shippingMethod) {
  const basePrice = getBasePrice(product.basePrice, quantity);
  const discount = getDiscount(product, quantity)
  const shippingCost = getShippingCost(basePrice, quantity, shippingMethod)

  const price = basePrice - discount + shippingCost;
  return price;
}

const getBasePrice = (basePrice, quantity) => basePrice * quantity
const getDiscount = (product, quantity) => Math.max(quantity - product.discountThreshold, 0) *
  product.basePrice *
  product.discountRate;

const getShippingCost = (basePrice, quantity, shippingMethod) => {
  const shippingPerCase = basePrice > shippingMethod.discountThreshold
    ? shippingMethod.discountedFee
    : shippingMethod.feePerCase;
  const result = quantity * shippingPerCase;
  return result
}
// 사용 예:
const product = {
  basePrice: 10,
  discountRate: 0.1,
  discountThreshold: 10,
};

const shippingMethod = {
  discountThreshold: 20,
  feePerCase: 5,
  discountedFee: 3,
};

const price = priceOrder(product, 5, shippingMethod);
console.log(price);
