import { Router } from 'express';
import {mostrarProductos,crearProducto,actualizarProducto,eliminarProducto,mostrarProductoId} from '../controllers/producto.controller';


const router = Router();


router.get('/',mostrarProductos);
router.post('/crear/:id',crearProducto);
router.put('/actualizar/:id',actualizarProducto);
router.delete('/borrar/:id',eliminarProducto);
router.get('/:id',mostrarProductoId);




export default router;