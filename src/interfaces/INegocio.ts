import { Types } from "mongoose";

export interface INegocio {
    nombre : string;
    imagen : string;
    descripcion : String;
    rating : number;
    direccion : string;
    telefono : String;
    num_domicilios : number;
    tiempo_entrega : string;
    oferta : boolean;
    abierto : boolean;
    servicios :  String[];
    latitude : number;
    longitude : number;
    categoria ?: Types.ObjectId;
    productos? : Types.ObjectId[];
}