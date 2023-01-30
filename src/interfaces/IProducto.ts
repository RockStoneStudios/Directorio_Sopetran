import { Types } from "mongoose";

export interface IProducto {
    nombre : String;
    imagen : String;
    precio : number;
    vistas : number;
    calificacion : number;
    oferta : boolean;
    sello : string;
    negocio? : Types.ObjectId;
}