// Type for API
interface NotificationAPI {
    content: [
    {
        id: number
        createdAt: string
        updatedAt: string
        createdBy: null,
        updatedBy: null,
        title: string,
        sendingDate: string
        message: string,
        type: string
    }
    ],
}

// Type for single table row information
interface NotificationsData {
    id: number
    title: string,
    sendingDate: string
    actions: ReactNode
}

// Type for single information
interface NotificationData {
    title: string
    sendingDate: string
    message: string
    type: string
}