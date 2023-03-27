import { Request,Response } from "express";
import Producto from "../models/Producto";
import Negocio from "../models/Negocio";


export const mostrarProductos = async (req:Request,res:Response) => {
    try{
        const productos = await Producto.find({});
        return res.status(200).json(productos);
    }catch(error){
        res.status(500).json(error);
    }
}


export const crearProducto = async (req:Request,res:Response) => {
     try{
          const {nombre,imagen,precio,vistas,calificacion,descripcion} = req.body;
           const id = req.params.id;
           if(nombre.length< 3) return res.status(400).json({message : 'Ingresa Nombre del producto'});
           if(imagen.length< 5) return res.status(400).json({message : 'Ingresa Imagen'});
           if(precio <0) return res.status(400).json({message : 'Ingresa Precio Valido'});
           const negocio = await Negocio.findById(id);
           const producto_nuevo = {
             nombre,
             imagen,
             precio,
             vistas,
             calificacion,
             descripcion
           }
           const nuevo_producto = new Producto(producto_nuevo);
           negocio?.productos?.push(nuevo_producto.id);
           nuevo_producto.negocio= negocio?.id;
           await negocio?.save();
           await nuevo_producto.save();
           return res.status(200).json(nuevo_producto);
     }catch(error){
        return res.status(500).json(error);
     }
}

export const mostrarProductoId = async (req:Request,res:Response) => {
     try{
        const producto = await Producto.findById(req.params.id);
        if(!producto) return res.status(404).json({message : "No se encontro producto con este Id"});
        return res.status(200).json(producto);
     }catch(error){
        return res.status(500).json(error);
     }
}


export const actualizarProducto = async(req:Request,res:Response) => {
     try{
          const producto = await Producto.findOneAndUpdate({_id : req.params.id},req.body,{new : true});
           
           if(!producto) return res.status(404).json({message : "No se encontro producto con este Id"});
           return res.status(200).json(producto);
     }catch(error){
         res.status(500).json(error);
     }
}

export const eliminarProducto = async (req:Request,res:Response) => {
     try{
        const producto = await Producto.findOneAndDelete({_id:req.params.id});
         if(!producto) return res.status(404).json({messsage : "No se encontro producto con este Id"});
         return res.status(200).json(producto);
     }catch(error){
        res.status(500).json(error);
     }
}