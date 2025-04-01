// Resident Vehicle Management
const vehicleTypes = {
    CAR: 'Car',
    MOTORCYCLE: 'Motorcycle',
    BICYCLE: 'Bicycle',
    OTHER: 'Other'
};

function registerVehicle(residentId, plateNumber, vehicleType, make, model, color) {
    const timestamp = new Date().toISOString();
    const vehicle = {
        id: Date.now(),
        residentId,
        plateNumber,
        vehicleType,
        make,
        model,
        color,
        registrationDate: timestamp,
        status: 'Active'
    };
    console.log('Vehicle registered:', vehicle);
    return vehicle;
}

function getResidentVehicles(residentId) {
    // Sample data - in real app would query database
    return [
        {
            id: 1,
            residentId: 'john.doe',
            plateNumber: 'ABC123',
            vehicleType: vehicleTypes.CAR,
            make: 'Toyota',
            model: 'Camry',
            color: 'Blue',
            registrationDate: '2024-01-10T09:30:00Z',
            status: 'Active'
        },
        {
            id: 2,
            residentId: 'sarah.johnson',
            plateNumber: 'XYZ789',
            vehicleType: vehicleTypes.MOTORCYCLE,
            make: 'Honda',
            model: 'CBR500R',
            color: 'Red',
            registrationDate: '2024-02-15T14:20:00Z',
            status: 'Active'
        }
    ];
}

export { vehicleTypes, registerVehicle, getResidentVehicles };