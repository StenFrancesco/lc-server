const { Router } = require("express");
const Character = require("../models").character
const User = require("../models").user
const Guild = require("../models").guild
const Wishlist = require("../models").wishlist

const router = new Router();

router.get("/chars", async (req, res) => {
  const allCharacters = await Character.findAll(
    {
      include: [
        {
          model: User
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