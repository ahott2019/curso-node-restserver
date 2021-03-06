const { response, request } = require('express');

const UsuariosGet = (req = request, res = response) => {

    const { q, nombre = 'No name', apikey, page = 1, limit } = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const UsuariosPut = (req, res) => {

    const { id } = req.params;

    res.json({
        msg: 'put API - controlador',
        id
    });
}

const UsuariosPost = (req, res) => {

    const { nombre, edad } = req.body;

    res.json({
        msg: 'post API - controlador',
        nombre,
        edad
    });
}

const UsuariosDelete = (req, res) => {
    res.json({
        msg: 'delete API - controlador'
    });
}

const UsuariosPatch = (req, res) => {
    res.json({
        msg: 'patch API - controlador'
    });
}


module.exports = {
    UsuariosGet,
    UsuariosPut,
    UsuariosPost,
    UsuariosDelete,
    UsuariosPatch
}