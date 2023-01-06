const { products } = require("../models");

const searchProduct = async (id) => {
    console.log(id);
    try {
        if (id) {
            const result = await products.findByPk(id);
            //result.dataValues.price = parseFloat(result.dataValues.price);
            return result;
        }

        const result = await products.findAll();
        for (let index = 0; index < result.length; index++) {
            result[index].dataValues.price = parseFloat(
                result[index].dataValues.price
            );
        }
        return result;
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const createProduct = async ({ title, brand, price, color, images }) => {
    try {
        const result = await products.create({
            title,
            brand,
            price,
            color,
            images,
        });

        return result;
    } catch (error) {
        res.status(500).send({ mensagem: error.message });
    }
};

const updateProduct = async (
    id,
    { creation_date, title, brand, color, price, images }
) => {
    const result = await products.update(
        {
            creation_date,
            title,
            brand,
            color,
            price,
            images,
        },
        {
            where: {
                id,
            },
        }
    );

    return result;
};

const deleteProduct = async (id) => {
    try {
        const result = await products.destroy({
            where: { id },
        });

        return `Product ${id} successfuly deleted!`;
    } catch (error) {
        res.status(500).send({ mensagem: error.message });
    }
};

module.exports = {
    searchProduct,
    createProduct,
    updateProduct,
    deleteProduct,
};
