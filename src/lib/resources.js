
import RestResource from "./rest_resource";

export const productsAPI = new RestResource({
  baseURL: `${import.meta.env.VITE_REST_API_BASE_URL}/products`
});

export const productMetaAPI = new RestResource({
  baseURL: `${import.meta.env.VITE_REST_API_BASE_URL}/product_meta`
});

export const variantsAPI = new RestResource({
  baseURL: `${import.meta.env.VITE_REST_API_BASE_URL}/variants`
});

export const variantMetaAPI = new RestResource({
  baseURL: `${import.meta.env.VITE_REST_API_BASE_URL}/variant_meta`
});
