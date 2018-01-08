let db = require('../models');

function newCargo (req,res){
	res.render('cargoNew');
}

function createCargo(req, res) { //and look at that controller
	db.Cargo.create({description: req.body.description, title: req.body.title}, function(error, cargo) {
		res.render('cargoShow', {cargo: cargo});
	});
}

module.exports.new = newCargo;
module.exports.create = createCargo;