import httpReq from "./http.service";

class authService {
  async LoginUser(payload: LoginData): Promise<userData> {
    const { data } = await httpReq.post("/auth/login", payload);
    return data;
  }
}

export default new authService();
