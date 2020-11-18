const Pet = require("../models/pet.model");

//get all pets
module.exports.getAllPets = (req, res) => {
    Pet.find()
    .then(allPets => res.json({pets: allPets }))
    .catch(err => res.json({message:" Erro you can't gett All pets....", error: err }));
}

//get one pet
module.exports.getOnePet = (req, res) => {
    Pet.findOne({_id: req.params._id})
    .then(getPet=> res.json({pets: getPet }))
    .catch(err => res.json({message:" Erro you can't gett one pet....", error: err }));
}


//make a new pet
module.exports.newPet = (req, res) => {
    Pet.create(req.body)
    .then(newPet => res.json({pets: newPet }))
    .catch(err => res.json({error: err}));
}


//update your pet!

module.exports.updatePet = (req, res) => {
    Pet.update({_id: req.params._id}, {
        $set: {
            name: req.body.name,
            type: req.body.type,
            desc: req.body.desc,
            skill1: req.body.skill1,
            skill2: req.body.skill2,
            skill3: req.body.skill3

        }
    }, {runValidators: true})
    .then(updatePet => res.json({pets: updatePet}))
    .catch(err => res.json({error:err}));
}

//delete you pet:(
    module.exports.deletePet = (req, res) => {
        Pet.remove({_id: req.params._id })
        .then(delPet => res.json({message: "Oh no.. deleted your pet"}))
        .catch(err => res.json({message:" Erro you can't delete a pet....", error: err }));
    
    }


