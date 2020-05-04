const { Router } = require("express")
const AssignedItems = require("../models").assigneditem
const Item = require("../models").item
const Character = require("../models").character

const router = new Router();

router.get("/assigneditems", async (req, res) => {
  const assigned = await AssignedItems.findAll(
    {
      include: [
        {
          model: Item
        },
        {
          model: Character
        }
      ]
    }
  )
  res.status(200).send({
    message: "Assigned sent", assigned
  })
})


module.exports = router;