// Announcements Management
const announcementCategories = {
    GENERAL: 'General',
    MAINTENANCE: 'Maintenance',
    SECURITY: 'Security',
    EVENT: 'Event',
    URGENT: 'Urgent'
};

function createAnnouncement(title, content, category, author) {
    const timestamp = new Date().toISOString();
    const announcement = {
        id: Date.now(),
        title,
        content,
        category,
        author,
        date: timestamp,
        isPinned: false
    };
    console.log('New announcement created:', announcement);
    return announcement;
}

function getAnnouncements() {
    // Sample data - in real app would query database
    return [
        {
            id: 1,
            title: 'Elevator Maintenance',
            content: 'The east elevator will be out of service for maintenance on Friday from 9AM-3PM.',
            category: announcementCategories.MAINTENANCE,
            author: 'Management',
            date: '2024-03-10T14:30:00Z',
            isPinned: true
        },
        {
            id: 2,
            title: 'Community BBQ',
            content: 'Join us for the annual community BBQ this Saturday at 2PM in the courtyard!',
            category: announcementCategories.EVENT,
            author: 'Social Committee',
            date: '2024-03-15T09:15:00Z',
            isPinned: false
        }
    ];
}

export { announcementCategories, createAnnouncement, getAnnouncements };