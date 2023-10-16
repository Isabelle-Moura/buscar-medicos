type PlansAPI = {
    content: {
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
    values: number | string
  }