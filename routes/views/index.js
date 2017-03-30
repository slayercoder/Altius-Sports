var keystone = require('keystone');
// var middleware = require('./middleware');
importRoutes = keystone.importer(__dirname);
exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
view.query('Homes', keystone.list('Home').model.find());
	// Render the view
	view.render('index');
};
