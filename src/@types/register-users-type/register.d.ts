// Type for API
interface RegisteredUserAPI {
  content: [
    {
      id: number,
      email: string,
      firstName: string,
      lastName: string,
      profiles: [
        {
          id: number,
          name: string
        }
      ],
      specialties: [
        {
          id: number,
          name: string,
          enabled: boolean
        }
      ],
      phone: string,
      address: {
        zipcode: string,
        street: string,
        number: string,
        neighborhood: string,
        city: string,
        state: string,
        complement: string
      },
      enabled: boolean
    }
  ],
}

// Type for single information
interface RegisteredUserData {
    id: number
    user: string
    email: string
    whatsapp: string
    speciality: string
    city: string
    state: string
    userType: string
  }