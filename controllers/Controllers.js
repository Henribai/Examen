let Reservation = require('../models/reservation');
let Voyageur = require('../models/voyageur');
let connection = require('../db');


exports.home = function(req, res){
    res.render('home.ejs');
}

exports.person = function(req, res){
    let reservation = new Reservation(req.body.destination, req.body.nbseat);
    req.session.reservation = reservation;
    res.render('person.ejs', {reservation: req.session.reservation});
}

exports.annuler = function(req, res){
    res.redirect('/');
}

exports.encodage = function(req,res){
    let liste_voyageur = [];
    for (index = 0; index < req.session.reservation.nombre_place; index++){

        let voyageur = new Voyageur(req.body.name, req.body.age);

        liste_voyageur.push(voyageur);

    }
    console.log(liste_voyageur[0].nom)
    console.log(liste_voyageur);
    req.session.liste_voyageur = liste_voyageur;

    res.render('validation.ejs', {reservation: req.session.reservation, liste_voyageur: req.session.liste_voyageur});

    
}

exports.confirmation = function(req, res){
    res.render('confirmation.ejs');
}