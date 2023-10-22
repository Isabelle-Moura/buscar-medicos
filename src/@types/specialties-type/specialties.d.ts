// Type for API
interface SpecialtiesApi {
   content: {
      id: number;
      name: string;
      enabled: boolean;
   }[];
   totalPages: number;
}

// Type for single information
interface SpecialtyData {
   id?: number;
   name: string;
   enabled: boolean;
}
