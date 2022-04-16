import httpReq from "./http.service";

class productService {
  async getAllProducts(): Promise<Iproduct[]> {
    const { data } = await httpReq.get("/product");
    console.log(data);

    return data;
  }
  async getProductsById(id: string): Promise<Iproduct> {
    const { data } = await httpReq.get(`/product/${id}`);
    return data;
  }
}

export default new productService();
