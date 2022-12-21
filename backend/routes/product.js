const { Router } = require("express");
const { searchById, searchAll } = require("../controllers/generic");
const { searchProduct, createProduct, updateProduct, deleteProduct } = require("../controllers/product");
const { product } = require("../models");

const router = Router();

router.get("/:id?", async (req, res) => {
    //res.send("Products List");
    try {
        const result = req.params.id
            ? await searchById(product, req.params.id)
            : await searchAll(product);
        res.send(result);
    } catch (error) {
        res.status(500).send({ mensagem: error.message });
    }
});

router.post("/", async (req, res) => {
    const result = await createProduct(req.body);

    res.send(result);
    //console.log(req.body);
    //res.send("Product Added");
});

router.put("/:id", async (req, res) => {
    //console.log(req.body);
    //res.send("Update Product");
    try{
        await updateProduct(req.params.id, req.body);
        
        const result = await searchProduct(req.params.id);

        res.send(result);
    } catch (error){
        res.status(500).send({mensagem: error.message });
    }
});

router.delete("/:id", async(req, res) => {
    //res.send("Remove Product");
    try{
        const result = await deleteProduct(req.params.id);

        res.send(result);
    } catch(error){
        res.status(500).send({ mensagem: error.message });
    }
});

module.exports = router;