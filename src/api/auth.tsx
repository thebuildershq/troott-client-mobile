class Auth {
    client;
    secondaryClient;
  
    constructor(client: any, secondaryClient?: any) {
      this.client = client;
      this.secondaryClient = secondaryClient;
    }

    register(payload: any) {
        return this.client.post("/auth/register", payload)
    }
  
    login(payload: any) {
      return this.client.post("/auth/login", payload);
    }

    logout(payload: any) {
      return this.client.post("/auth/logout", payload);
    }
  
    forgotPassword(payload: any) {
      return this.client.put("/auth/forgot-password", payload);
    }

    changePassword(payload: any) {
        return this.secondaryClient.put("/auth/change-password", payload);
    }
    
  }
  
  export default Auth;
  