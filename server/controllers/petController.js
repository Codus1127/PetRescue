module.exports = {
    async getPets(req, res) {
      const db = req.app.get('db')
      const pets = await db.get_pets()
      res.status(200).send(pets)
    },

    addPet: async (req, res, next) => {
        const db = req.app.get('db')
        const {type, locationId, img, name, breed, gender, age, color, weight, description} = req.body
        await db.add_pet([type, locationId, img, name, breed, gender, age, color, weight, description ])
        res.sendStatus(200)
    },

    getOnePet: async (req, res, next) => {
      const db = req.app.get('db')
      const {petid} = req.params
      const result = await db.get_one_pet(petid)
      res.status(200).send(result)
  },

  deletePet: async (req, res) => {
    const db = req.app.get("db");
    const { pet_id } = req.params;
    const result = await db.delete_pet(pet_id)
      res.status(200).send(result);
  }


};

  