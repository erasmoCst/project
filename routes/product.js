const { Router } = require("express");
const router = Router();

router.get("/:id?", function (req, res) {
  res.send("Products List");
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.send("Product Added");
});

router.put("/:id", (req, res)  => {
  console.log(req.body);
  res.send("Update Product");
});

router.delete("/:id", (req, res) => {
  res.send("Remove Product");
});

module.exports = router;