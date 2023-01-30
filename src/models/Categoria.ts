import {model,Schema,Types} from 'mongoose';
import { ICategoria } from '../interfaces/ICategoria';


const SchemaCategoria = new Schema <ICategoria>({
     nombre : {
        type : String,
        required : true,
        unique : true
     },
     imagen :{
          type : String,
          required : true
     },
     negocios : [{
         type : Types.ObjectId,
         ref : 'Negocio'
     }]
},{
     versionKey : false
});


export default model <ICategoria>('Categoria',SchemaCategoria);