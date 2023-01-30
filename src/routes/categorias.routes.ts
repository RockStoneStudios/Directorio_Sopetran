import { Router } from 'express';
import { crearCategoria ,mostrarCategoriaId,mostrarCategorias,actualizarCategoria,borrarCategoria} from '../controllers/categoria.controller';
import upload from '../middlewares/upload';


const router = Router();

router.post('/crear',upload,crearCategoria);
router.get('/',mostrarCategorias);
router.put('/actualizar/:id',actualizarCategoria);
router.delete('/borrar/:id',borrarCategoria);
router.get('/:id',mostrarCategoriaId);




export default router;