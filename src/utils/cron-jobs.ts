import cron from 'node-cron';
import Negocio from '../models/Negocio';


cron.schedule('* * * * *',() => {
       
});

export const Open = () => {
    cron.schedule('* 21 * * *',async()=>{
    console.log('oe');
        try {
          const negocios = await Negocio.find({});
          if(negocios) {
              negocios.map(async(negocio) => {
                negocio.abierto = true
                await negocio.save(); 
              });

          }
        }catch(error){
            console.log(error);
        }
    })
   
}
