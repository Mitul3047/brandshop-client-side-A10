const getstoredBooking = () =>{
    const storedBooking = localStorage.getItem('Event-Booking');
    if(storedBooking){
        return JSON.parse(storedBooking);
    }
    return [];
}


const saveBooking = id =>{
    const storedBookings = getstoredBooking();
    const exists = storedBookings.find(eventId => eventId === id);
    if(!exists){
        storedBookings.push(id);
        localStorage.setItem('Event-Booking', JSON.stringify(storedBookings))
    }
}

export { getstoredBooking, saveBooking}