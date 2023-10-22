// Type for API
interface QuestionAPI {
   content: [
      {
         id: number;
         createdAt: string;
         updatedAt: string;
         createdBy: string;
         updatedBy: string;
         title: string;
         message: string;
         type: string;
      }
   ];
   totalPages: number;
}

// Type for single information
interface QuestionData {
   id?: number;
   title: string;
   message: string;
   type: string;
}
