import { getProducts } from "@/lib/actions/actions";
import ProductCard from "./ProductCard";

const ProductList = async () => {
  const products = await getProducts();

  return (
    <div className="">
      <div className="flex flex-col items-center justify-center gap-10 py-8 px-5">
        {!products || products.length === 0 ? (
          <p className="text-body-bold">none</p>
        ) : (
          <div className="grid grid-cols-4 gap-2">
            {products.map((product: ProductType, index) => (
              <ProductCard index={index} product={product} className={index === 100 ? "col-span-2" : ""} />
            ))}
          </div>

        )}
      </div>
    </div>
  );
};

export default ProductList;
