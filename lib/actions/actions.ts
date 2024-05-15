export const getCollections = async () => {
  let allCollections: any[] = [];
  let page = 1;
  let totalPages = 1;

  // Lặp qua các trang cho đến khi lấy hết tất cả các bộ sưu tập
  while (page <= totalPages) {
    // Gọi API để lấy bộ sưu tập từ trang hiện tại
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections?page=${page}`);
    const data = await response.json();

    // Thêm bộ sưu tập từ trang hiện tại vào mảng allCollections
    allCollections = [...allCollections, ...data];

    // Cập nhật số trang hiện tại và tổng số trang
    page++;
    totalPages = data.totalPages; // Giả sử API trả về thông tin về tổng số trang
  }

  return allCollections;
}


export const getCollectionDetails = async (collectionId: string) => {
  const collection = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections/${collectionId}`)
  return await collection.json()
}

export const getProducts = async () => {
  let allProducts: any[] = [];
  let page = 1;
  let totalPages = 1;

  // Lặp qua các trang cho đến khi lấy hết tất cả các sản phẩm
  while (page <= totalPages) {
    // Gọi API để lấy sản phẩm từ trang hiện tại
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products?page=${page}`);
    const data = await response.json();

    // Thêm sản phẩm từ trang hiện tại vào mảng allProducts
    allProducts = [...allProducts, ...data];

    // Cập nhật số trang hiện tại và tổng số trang
    page++;
    totalPages = data.totalPages; // Giả sử API trả về thông tin về tổng số trang
  }

  return allProducts;
}


export const getProductDetails = async (productId: string) => {
  const product = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`)
  return await product.json()
}

export const getSearchedProducts = async (query: string) => {
  const searchedProducts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search/${query}`)
  return await searchedProducts.json()
}

export const getOrders = async (customerId: string) => {
  const orders = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/customers/${customerId}`)
  return await orders.json()
}

export const getRelatedProducts = async (productId: string) => {
  const relatedProducts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}/related`)
  return await relatedProducts.json()
}