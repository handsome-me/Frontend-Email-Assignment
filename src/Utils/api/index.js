import constants from "../../constants";
const {API_EMAIL_LIST,API_BODY_CONTENT}=constants;

export const makeFetchCall=async()=>{
 try{

   const res=  await fetch(API_EMAIL_LIST);
   const formatedData= res.json();
   return formatedData;

}catch(error){

console.log("handle error",error);

}

}

export const fetchBodyDetail=async(id)=>{


    try{
    const API=API_BODY_CONTENT+"/?id="+id;
    const res=  await fetch(API);
    const formatedData= res.json();
    return formatedData;

    }catch(error){
        console.log("error",error);
    }
}


 