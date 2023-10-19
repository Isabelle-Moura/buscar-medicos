interface SpecialtiesApi {
  content: {
    id: number;
    name: string;
    enabled: boolean;
  }[]
};

type SpecialtyData = {
  name: string
  enabled: ReactNode
  actions: ReactNode
}