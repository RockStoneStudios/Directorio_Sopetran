import { Types } from "mongoose";

export interface IProducto {
    nombre : String;
    imagen : String;
    precio : number;
    vistas : number;
    calificacion : number;
    tiempo_preparacion : number;
    oferta : boolean;
    sello : string;
    ingredientes : String[];
    descripcion : String;
    negocio? : Types.ObjectId;
}