// Resident Document Management
const documentTypes = {
    ID: 'ID Proof',
    LEASE: 'Lease Agreement',
    UTILITY: 'Utility Bill',
    OTHER: 'Other'
};

function uploadDocument(residentId, docType, fileData) {
    const timestamp = new Date().toISOString();
    const document = {
        id: Date.now(),
        residentId,
        docType,
        fileName: fileData.name,
        uploadDate: timestamp,
        status: 'Pending Review'
    };
    console.log('Document uploaded:', document);
    return document;
}

function getResidentDocuments(residentId) {
    // Sample data - in real app would query database
    return [
        {
            id: 1,
            residentId: 'john.doe',
            docType: documentTypes.ID,
            fileName: 'id_proof.jpg',
            uploadDate: '2024-01-15T10:30:00Z',
            status: 'Approved'
        },
        {
            id: 2,
            residentId: 'john.doe',
            docType: documentTypes.LEASE,
            fileName: 'lease_agreement.pdf',
            uploadDate: '2024-01-10T14:15:00Z',
            status: 'Approved'
        }
    ];
}

export { documentTypes, uploadDocument, getResidentDocuments };