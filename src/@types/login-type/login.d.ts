// Type for API
interface LoginApi {
    token: string
  }

  // Type for API
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

// Type for single information