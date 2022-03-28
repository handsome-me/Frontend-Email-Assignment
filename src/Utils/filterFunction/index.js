

export const filterData=(data,filtertype)=>{

    console.log(" Data",data);
    console.log("filtreType", filtertype);
  
   const filtereData= filtertype.list.filter((item)=>{
        
        for(let i=0;i<data.length;i++){
            if(data[i].id===item.id){
                return true;
            }
        }
    })
    console.log("#121","filteredData",filtereData);
   
}