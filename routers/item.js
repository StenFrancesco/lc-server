const { Router } = require("express")
const Items = require("../models").item
const ItemClass = require("../models").itemclass
const ItemSubClass = require("../models").itemsubclass
const ItemQuality = require("../models").itemquality
const Boss = require("../models").boss

const router = new Router();

router.get("/items", async (req, res) => {
  const allItems = await Items.findAll(
    {
      include: [
        {
          model: ItemClass
        },
        {
          model: ItemSubClass
        },
        {
          model: Boss
        },
        {
          model: ItemQuality
        }
      ]
    }
  )
  res.status(200).send({
    message: "Items sent", allItems
  })
})

module.exports = router;