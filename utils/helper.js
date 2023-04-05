export const getDiscountedPricePercent = (ogPrice, discountPrice) => {
   const discount = ogPrice - discountPrice;

   const discountPercantage = (discount/ogPrice) * 100;

   return discountPercantage.toFixed(0);
}
