const { product } = require("../models");

const searchProduct = async (id = null) => {
    const parameters = [
        "id",
        "created_on",
        "title",
        "brand",
        "color",
        "price",
        "images",
    ];

    if (id) {
        return await product.findByPk(id, { attributes: parameters });
    }
    return await product.findAll({
        attributes: parameters,
    });
};

const createProduct = async ({
    created_on,
    title,
    brand,
    price,
    color,
    images,
}) => {
    const [result, isNewRecord] = await product.findOrCreate({
        defaults: {
            created_on,
            title,
            brand,
            price,
            color,
            images,
        },
        where: {
            title,
        },
    });

    //DEBUG
    console.log("New Record?", isNewRecord);
    //

    return result;
};

const updateProduct = async (
    id,
    { created_on, title, brand, color, price, images }
) => {
    const result = await product.update(
        {
            created_on,
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
    const result = await product.destroy({
        where: { id },
    });

    return `Product ${id} successfuly deleted!`;
};

module.exports = {
    searchProduct,
    createProduct,
    updateProduct,
    deleteProduct,
};
