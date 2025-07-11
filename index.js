let hotels = [];

function createHotel(name, details, rooms, address) {
  const newHotel = {
    id: hotels.length + 1,
    name: name,
    details: details,
    rooms: rooms,
    address: address,
  };
  hotels.push(newHotel);
  console.log(`\nHotel '${name}' created successfully.\n`);
}

function getHotelDetails() {
  if (hotels.length === 0) {
    console.log("No hotel records found.");
    return;
  }
  hotels.forEach((hotel) => {
    console.log(`\nHotel ID: ${hotel.id}`);
    console.log(`Name: ${hotel.name}`);
    console.log(`Details: ${hotel.details}`);
    console.log(`Rooms: ${hotel.rooms}`);
    console.log(`Address: ${hotel.address}`);
    console.log("----------------------------\n");
  });
}

function updateHotelDetails(id, updatedFields) {
  const hotel = hotels.find((h) => h.id === id);
  if (!hotel) {
    console.log(`Hotel with ID ${id} not found.`);
    return;
  }
  Object.assign(hotel, updatedFields);
  console.log(`\nHotel ID ${id} updated successfully.\n`);
}

function deleteHotel(id) {
  const index = hotels.findIndex((h) => h.id === id);
  if (index === -1) {
    console.log(`Hotel with ID ${id} not found.`);
    return;
  }
  hotels.splice(index, 1);
  console.log(`\nHotel ID ${id} deleted successfully.\n`);
}

createHotel("Grand Palace", "Luxury 5-star hotel", 120, "Mumbai");
createHotel("Sea Breeze Resort", "Beach resort", 80, "Goa");
getHotelDetails();

updateHotelDetails(2, { rooms: 85 });
getHotelDetails();

deleteHotel(1);
getHotelDetails();
