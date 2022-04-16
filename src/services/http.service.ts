import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

// headers: { "X-Custom-Header": "foobar" },
const axiosConfig: AxiosRequestConfig = {
  baseURL: "http://localhost:4000/api",
  timeout: 15000,
};

const instance: AxiosInstance = axios.create(axiosConfig);

//request all
class Request {
  async get(url: string): Promise<AxiosResponse> {
    return instance.get(url).then((res) => res.data);
  }
  async post(url: string, body: any): Promise<AxiosResponse> {
    return instance.post(url, body).then((res) => res.data);
  }
  async update(url: string, body: any): Promise<AxiosResponse> {
    return instance.patch(url, body).then((res) => res.data);
  }
}
const httpReq = new Request();

export default httpReq;
