// Visitor Management System
const visitorStatuses = {
    PENDING: 'Pending',
    APPROVED: 'Approved',
    REJECTED: 'Rejected',
    COMPLETED: 'Completed'
};

function logVisitor(residentId, visitorName, visitDate, purpose) {
    const timestamp = new Date().toISOString();
    const visit = {
        id: Date.now(),
        residentId,
        visitorName,
        visitDate,
        purpose,
        status: visitorStatuses.PENDING,
        timestamp
    };
    console.log('New visitor logged:', visit);
    return visit;
}

function getVisitorLogs(residentId = null) {
    // Sample data - in real app would query database
    const logs = [
        {
            id: 1,
            residentId: 'john.doe',
            visitorName: 'Alice Smith',
            visitDate: '2024-03-15',
            purpose: 'Family visit',
            status: visitorStatuses.APPROVED,
            timestamp: '2024-03-10T14:30:00Z'
        },
        {
            id: 2,
            residentId: 'sarah.johnson', 
            visitorName: 'Delivery Service',
            visitDate: '2024-03-16',
            purpose: 'Package delivery',
            status: visitorStatuses.PENDING,
            timestamp: '2024-03-14T09:15:00Z'
        }
    ];
    
    return residentId 
        ? logs.filter(log => log.residentId === residentId)
        : logs;
}

export { visitorStatuses, logVisitor, getVisitorLogs };