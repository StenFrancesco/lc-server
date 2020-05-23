const { Router } = require("express");
const Character = require("../models").character
const User = require("../models").user
const Guild = require("../models").guild
const Wishlist = require("../models").wishlist
const CharacterClass = require("../models").characterclass

const router = new Router();

router.get("/chars", async (req, res) => {
  const allCharacters = await Character.findAll(
    {
      include: [
        {
          model: User
        },
        {
          model: CharacterClass
        },
        {
          model: Guild
        },
        {
          model: Wishlist
        }
      ]
    }
  );
  res.status(200).send({
    message: "Characters sent", allCharacters
  })
})

module.exports = router;