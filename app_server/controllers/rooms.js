var fs = require('fs');
var room = JSON.parse(fs.readFileSync('./data/packages.json','utf8'));

/* GET room view */
const rooms = (req, res) => {
    res.render('rooms', { title: 'Travlr Getaways', room});
};

module.exports = {
    rooms
};