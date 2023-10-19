// Type for single information
interface UserData {
    firstName: string
    lastName: string
    email: string
    address: {
      zipcode: string
      street: string
      number: string
      neighborhood: string
      city: string
      state: string
      complement: string
    }
    specialties: readonly string[]
    phone: string
  }