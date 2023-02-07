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
     tiempo_preparacion : {
      type: Number,
      default : 10
     },
     oferta : {
        type : Boolean,
        default : false
     },
     sello : {
        type : String,
        default : 'Pruebalo'
     },
      ingredientes : [
          {type : String}
      ],
      descripcion : {
          type : String,
          default : 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
      },
     negocio : {
        type : Types.ObjectId,
        ref : 'Negocio'
     }
},{
     versionKey : false
});

export default model <IProducto>('Producto',SchemaProducto);