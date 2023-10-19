// Type for API
interface SpecialtiesApi {
  content: {
    id: number;
    name: string;
    enabled: boolean;
  }[]
};

// Type for single information
interface SpecialtyData {
  id?: number;
  name: string;
  enabled: boolean;
}
