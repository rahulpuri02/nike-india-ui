export const getDiscountedPricePercent = (ogPrice, discountPrice) => {

   const discount = ogPrice - discountPrice

   const getDiscountPercentage = (discount/ogPrice) * 100

   return getDiscountPercentage.toFixed(0);
}