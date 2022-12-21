//Generic Funcions for routes and controllers

const searchAll = async(model) => {
    return await model.findAll();
};

const searchById = async(model, id) => {
    return await model.findByPk(id);
};

const createGeneric = async(model, data) => {
    return await model.create(data);
};

const updateGeneric = async(model,id, data) =>{
    return await model.update(data, {
        where: {
            id,
        },
    });
};

const removeGeneric = async(model, id) => {
    return await model.destroy({
        where: {
            id,
        },
    });
};

module.exports = { searchAll, searchById, createGeneric, updateGeneric, removeGeneric };