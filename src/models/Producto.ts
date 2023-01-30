import {model,Schema, Types} from 'mongoose';
import { IProducto } from '../interfaces/IProducto';

const SchemaProducto = new Schema <IProducto>({
     nombre : {
        type : String,
        required : true,
        unique : true
     },
     imagen : {
        type : String,
        required : true
     },
     precio : {
        type : Number,
        required : true
     },
     vistas : {
        type: Number,
        default : 1
     },
     calificacion :{
        type : Number,
        default : 3.0
     },
     oferta : {
        type : Boolean,
        default : false
     },
     sello : {
        type : String,
        default : 'Pruebalo'
     },
     negocio : {
        type : Types.ObjectId,
        ref : 'Negocio'
     }
},{
     versionKey : false
});

export default model <IProducto>('Producto',SchemaProducto);