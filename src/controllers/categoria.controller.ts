import { Request,Response } from "express";
import Categoria from "../models/Categoria";


export const crearCategoria = async (req:Request,res:Response) =>{
     try{
           const {nombre,imagen} = req.body;
          
           if(nombre.length< 2) return res.status(400).json({message : 'Ingrese Nombre Valido'});
           if(imagen.length<3) return res.status(400).json({message : 'Ingrese Imagen Valida'})
           
            console.log(imagen);
            const nueva_categoria = {
                  nombre,
                  imagen
             }
            
           const categoria = new Categoria(nueva_categoria);
           await categoria.save();
           return res.status(200).json(categoria);
     }catch(error){
        return res.status(500).json(error);
     }
}

export const mostrarCategorias = async (req:Request,res:Response) => {
    try{
        const categorias = await Categoria.find({});
        return res.status(200).json(categorias);
    }catch(error){
       return res.status(500).json(error);
    }
}

export const mostrarCategoriaId = async (req:Request,res:Response) => {
    const id = req.params.id;
   try{
        const categoria = await Categoria.findById(id).populate('negocios');
        if(!categoria) return res.status(404).json({message : "No se encuentra categoria por este Id"});
        return res.status(200).json(categoria);
   }catch(error){
      return res.status(500).json(error);
   }
}

export const actualizarCategoria = async (req:Request,res:Response) => {
   try{
      
      const {nombre,imagen} = req.body;
      const id = req.params.id;
       const categoriaActualizada = await  Categoria.findOneAndUpdate({_id : id},req.body,{new : true});
       return res.status(200).json(categoriaActualizada);
   }

   
     catch(error){
        return res.status(500).json(error);
     }
}


export const borrarCategoria = async (req:Request,res:Response) => {
    try{
        const borrarCategoria = await Categoria.findByIdAndDelete(req.params.id);
        if(!borrarCategoria) return res.status(404).json({message : "No hay Categoria por este Id"});
        return res.status(200).json(borrarCategoria)
    }catch(error){
      return res.status(500).json(error);
    }
}
