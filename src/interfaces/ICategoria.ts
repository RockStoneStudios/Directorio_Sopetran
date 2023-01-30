import { Types } from "mongoose";

export interface ICategoria {
    nombre : string;
    imagen : string;
    negocios : Types.ObjectId[]
}