import { get } from "../axios/Fetchre";

export const hotProduct = async () => {
  const response = await get("products?limit=5");
  return response;
};
export const trendingVendors = async () => {
  const response = await get("products?limit=10");
  return response;
};
// export const Deleteproduct = async () => {
//   const response = await get("products?limit=10");
//   return response;
// };

