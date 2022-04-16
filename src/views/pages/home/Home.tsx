import useAPI from "hooks/useAPI";
import React from "react";
import productService from "services/product.service";
import MainSlider from "views/components/custom/MainSlider";
import ProductsArray from "views/components/home/ProductsArray";

const Home = () => {
  // const [products, setProducts] = useState<Iproduct[]>([]);

  // useEffect(() => {
  //   productService
  //     .getAllProducts()
  //     .then((data) => setProducts(data))
  //     .catch((err) => console.log(err));
  // }, []);

  const { data: products } = useAPI<Iproduct[]>(productService.getAllProducts);

  return (
    <div>
      <div>
        <MainSlider />
      </div>
      <div className="my-5 container mx-auto mt-20">
        {products && <ProductsArray products={products} />}
      </div>
    </div>
  );
};

export default Home;
