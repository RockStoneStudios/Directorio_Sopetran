import dotenv from 'dotenv';


const envFound = dotenv.config();

if(envFound.error){
    throw new Error('Couldnt find .env file!!');
}

export default {
    PORT : process.env.PORT || 3001,
    DB : process.env.DB
}