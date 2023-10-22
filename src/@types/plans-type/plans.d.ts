// Type for API
type PlansAPI = {
   content: {
      id: number;
      planTitle: string;
      period: string;
      values: number | string;
      enabled: boolean;
      actions: boolean;
      type: string;
   }[];
   numberOfElements: number;
   totalPages: number;
};

// Type for single information
interface PlanData {
   content: {
      id?: number;
      planTitle: string;
      enabled: boolean;
      period: string;
      type: string;
      values: number | string;
   };
}
