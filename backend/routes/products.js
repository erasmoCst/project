const { Router } = require("express");
const router = Router();

const { searchProduct, createProduct , updateProduct, deleteProduct } = require("../controllers/products");

router.get("/:id?", async (req, res) => {
    //res.send("Products List");
/*     try {
        const result = req.params.id
            ? await findByPk(products, req.params.id)
            : await findAll(products);
        res.send(result);
    } catch (error) {
        res.status(500).send({ mensagem: error.message });
    } */
    const result = await searchProduct(req.params.id);
    
    res.send(result);
});

router.post("/", async (req, res) => {
    const result = await createProduct(req.body);

    res.send(result);
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
    try{
        const result = await deleteProduct(req.params.id);

        res.send(result);
    } catch(error){
        res.status(500).send({ mensagem: error.message });
    }
});

module.exports = router;