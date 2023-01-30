import {model,Schema, Types} from 'mongoose';
import { INegocio } from '../interfaces/INegocio';


const SchemaNegocio = new Schema <INegocio>({
     nombre : {
         type:String,
         required : true,
         unique : true,
         min : 3
     },
     imagen : {
        type : String,
     },
     rating : {
        type : Number,
        default : 3.0
     },
     direccion : {
        type:String,
        required : true
     },
     num_domicilios : {
        type : Number,
        required : true,
        default : 1
     },
     tiempo_entrega : {
        type :String,
        required :true,
        default : '20 min'
     },
     oferta : {
        type : Boolean,
        default : false
     },
     abierto :{
       type : Boolean,
       default : false
     },
      categoria : {
         type : Types.ObjectId,
         ref : 'Categoria'
      },
     productos : [
         {
            type : Types.ObjectId,
            ref : 'Producto'
        }
     ]
},{
     versionKey : false
});


export default model <INegocio>('Negocio',SchemaNegocio);