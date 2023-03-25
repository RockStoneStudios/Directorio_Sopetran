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
      descripcion : {
         type : String
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
     telefono :{
       type :String,
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
      latitude : {
         type : Number,
         default : 6.5
      },
      longitude : {
        type : Number,
        default : -75.732
      },
      categoria : {
         type : Types.ObjectId,
         ref : 'Categoria'
      },
      historia : {
       type : String
      },
      servicios : [{
         type : String,
      }
      ],

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