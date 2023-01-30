import { Types } from "mongoose";

export interface INegocio {
    nombre : string;
    imagen : string;
    rating : number;
    direccion : string;
    num_domicilios : number;
    tiempo_entrega : string;
    oferta : boolean;
    abierto : boolean;
    categoria ?: Types.ObjectId
    productos? : Types.ObjectId[];
}