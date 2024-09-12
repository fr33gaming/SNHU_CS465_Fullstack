/* GET travel view */
const travel = (req, res) => {
    res.render('Travel', { title: 'Travlr Getaways'});
};

module.exports = {
    travel
};