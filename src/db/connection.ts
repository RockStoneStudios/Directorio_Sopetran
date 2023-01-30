import mongoose from "mongoose";
import config from "../config";

export default mongoose.connect(<string> config.DB).then(()=> console.log('Database Connected Successful'))
                                          .catch(error => console.log(error));