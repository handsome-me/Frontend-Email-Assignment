
 export const filterData=(data,filtertype,type)=>{
 

    if(type.toLowerCase()==="default")
    return filtertype;

   const filtereData= filtertype.list.filter((item)=>{
        
        for(let i=0;i<data.length;i++){
            if(data[i].id===item.id){
                return data[i].state.find((item)=>item===type)
            }
        }
    })
    console.log("#121","filteredData",filtereData);
    return {
        list:filtereData,
        total:filtereData.length
    };
   
}