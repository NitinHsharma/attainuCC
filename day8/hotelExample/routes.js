const router = require('express').Router();
const { getHotel, addHotel, updateHotel, deleteHotel } = require('./controller/hotel.controller.js');


router.get('/hotel', getHotel);
router.post('/hotel',  addHotel);
router.put('/hotel/:id',  updateHotel);
router.delete('/hotel/:id', deleteHotel);


module.exports = router;