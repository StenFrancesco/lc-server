const { Router } = require("express")
const CharacterClass = require("../models").characterclass
const Character = require("../models").character

const router = new Router();

router.get("/characterclasses", async (req, res) => {
  const CharacterClasses = await CharacterClass.findAll({
    include: [
      {
        model: Character
      }
    ]
  })
  res.status(200).send({
    message: "CharacterClasses sent", CharacterClasses
  })
})

module.exports = router;

