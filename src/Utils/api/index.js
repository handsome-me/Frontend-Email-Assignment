import constants from "../../constants";

export const makeFetchCall=async()=>{
const {API_EMAIL_LIST}=constants;
try{

   const res=  await fetch(API_EMAIL_LIST);
   const formatedData= res.json();
   return formatedData;

}catch(error){

console.log("handle error",error);

}

}

 