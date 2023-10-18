type PlansAPI = {
    content: {
      id: number
      planTitle: string
      period: string
      values: number | string
      enabled: boolean
      actions: boolean
      type: string
    }[]
    numberOfElements: number
  }
  
  interface PlanData {
    id?: number
    planTitle: string
    enabled: boolean
    period: string
    type: string
    values: number | string
  }