import { Router } from 'express';
import { crearNegocio,MostrarNegocios,MostrarNegocioId,actualizarNegocio,eliminarNegocio } from '../controllers/negocio.controller';


const router = Router();

router.post('/crear/:id',crearNegocio);
router.get('/',MostrarNegocios);
router.put('/actualizar/:id',actualizarNegocio);
router.delete('/borrar/:id',eliminarNegocio);
router.get('/:id',MostrarNegocioId);




export default router;