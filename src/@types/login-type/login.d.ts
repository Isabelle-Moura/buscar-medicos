interface LoginApi {
    token: string
  }

interface UserMeApi {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    profiles: {
      id: number;
      name: string;
      authority: string;
    }[];
    enabled: boolean;
  }