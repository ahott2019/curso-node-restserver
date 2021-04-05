const { Router } = require('express');
const { UsuariosGet, UsuariosPut, UsuariosPost, UsuariosDelete, UsuariosPatch } = require('../controllers/usuarios');

const router = Router();

router.get('/', UsuariosGet);

router.put('/:id', UsuariosPut);

router.post('/', UsuariosPost);

router.delete('/', UsuariosDelete);

router.patch('/', UsuariosPatch);





module.exports = router;