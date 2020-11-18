const PetController = require("../controllers/pet.controller");

module.exports = app => {
    app.get("/api/pets", PetController.getAllPets);
    app.get("/api/pets/:_id", PetController.getOnePet);
    app.post("/api/pets/new", PetController.newPet);
    app.put("/api/pets/update/:_id", PetController.updatePet);
    app.delete("/api/pets/delete/:_id", PetController.deletePet);
}