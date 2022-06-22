
const hotel = [{
    id: 1,
    hotelName: "Nitin",
    managerName: "Software Engineer",
    noOfRooms: 100,
    contactNo: "01/01/2020",
    address: "mumbai"
}];

function getHotel(req, res) {
    return res.send(hotel);
}

function addHotel(req, res) {
    const { hotelName, managerName, noOfRooms, address, contactNo } = req.body;
    const id = hotel.length + 1;
    hotel.push({
        id,
        hotelName, managerName, noOfRooms, address, contactNo
    });

    return res.send("hotel added successfully");
}

function updateHotel(req, res) {
    const id = req.params.id;
    const {hotelName, managerName, noOfRooms, address, contactNo} = req.body;


    const index = hotel.findIndex(emp => emp.id == id);
    if (index === -1) {
        return res.send("hotel not found");
    } 

    hotel[index].hotelName = hotelName;
    hotel[index].managerName = managerName;
    hotel[index].noOfRooms = noOfRooms;
    hotel[index].address = address;
    hotel[index].contactNo = contactNo;
    return res.send("hotel updated successfully");

}

function deleteHotel(req, res) {
    const id = req.params.id;
    const index = hotel.findIndex(emp => emp.id == id);
    if (index === -1) {
        return res.send("hotel not found");
    } 

    hotel.splice(index, 1);
    return res.send("hotel deleted successfully");
}

module.exports = {
    getHotel,
    addHotel,
    updateHotel,
    deleteHotel
}