import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

export default mongoose.connect(process.env.DB as string).then(()=> console.log('Database Connected Successful'))
                                          .catch(error => console.log(error));