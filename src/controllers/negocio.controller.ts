import { Request,Response } from "express";
import Negocio from "../models/Negocio";
import Categoria from "../models/Categoria";

export const crearNegocio = async(req:Request,res:Response)=>{
      const id = req.params.id;
      const {nombre,imagen,rating,direccion,num_domicilios,tiempo_entrega,oferta,abierto} = req.body;
        try{

            const negocio = await Negocio.findOne({nombre});
   
            if(negocio) return res.status(400).json({message : "Ya hay un Negocio registrado con este Nombre"});
            if(nombre.length< 3) return res.status(400).json({message : 'Ingresa Nombre'});
            if(imagen.length<3) return res.status(400).json({message  : 'Ingresa Imagen'});
            if(direccion.length<4) return res.status(400).json({message : "Ingresa Direccion"});
            
            const categoria = await Categoria.findById(id);
            if(!categoria) return res.status(404).json({message : 'No se encuentra categoria con este Id'});
            const negocio_nuevo = {
               nombre,
               imagen,
               rating,
               direccion,
               num_domicilios,
               tiempo_entrega,
               oferta,
               abierto
            }
            const nuevo_negocio = new Negocio(negocio_nuevo);
        
            nuevo_negocio.categoria = categoria.id;
            await nuevo_negocio.save();
            categoria.negocios?.push(nuevo_negocio.id);
            await categoria.save();
            return res.status(200).json(nuevo_negocio);
        }catch(error){
            return res.status(500).json(error);
        }
      }
      
      
    



export const MostrarNegocios = async (req:Request,res: Response) => {
     try{
         const negocios = await Negocio.find({}).populate({path : 'categoria',select : 'nombre'});
         return res.status(200).json(negocios);
     }catch(error){
        res.status(500).json(error);
     }
}

export const MostrarNegocioId = async (req:Request,res:Response) => {
   const id = req.params.id;
   try{
       const negocio = await Negocio.findById(id).populate('productos');
       if(!negocio) return res.status(404).json({message : "No hay Negocio con este Id"});
       return res.status(200).json(negocio);
   }catch(error){
       res.status(500).json(error);
   }
}


export const actualizarNegocio = async (req:Request,res:Response) => {
    const id = req.params.id;
   try{
        const negocio = await Negocio.findOneAndUpdate({_id:id},req.body,{new : true});
        if(!negocio) return res.status(404).json({message : "No se encontro Negocio con este Id"});
        return res.status(200).json(negocio);
   }catch(error){
      return res.status(500).json(error);
   }
}



export const eliminarNegocio = async (req:Request,res:Response) =>{ 
    try{

        const negocio = await Negocio.findByIdAndDelete(req.params.id);
        if(!negocio) return res.status(404).json({message : "No se encontro negocio con este Id"});
        const categorias = await Categoria.findOne({_id : negocio.categoria});
         console.log(categorias);
         categorias?.negocios.filter(neg => neg._id !== negocio.categoria);
         console.log('---',categorias);
         await categorias?.save();
          
         return res.status(200).json(negocio);
    }catch(error){
      return res.status(500).json(error);
    }
}