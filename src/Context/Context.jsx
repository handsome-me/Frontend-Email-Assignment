import React, {createContext, useEffect,useState} from 'react';
import Constant from '../constants/index'
import {makeFetchCall} from '../Utils/api/index';
import {setLocalStorage,getLocalStorage} from '../Utils/LocalStorage/localStorage'
import {FILTERTYPE} from '../constants/index';
import {filterData} from '../Utils/filterFunction';


 

/**
 * filter structure
 * [{
 *  id:email_id,
 *  state:["read","fav"]
 *  }]
 */
 
const  MyContext=({children})=>{
    
    const [emailList,setEmailList]=useState([]);
    const [filter,setFilter]=useState(()=>{
        const local=getLocalStorage();
         return local;
    });
    const [filterType,setFilterType]=useState(FILTERTYPE.DEFAULT);
    

    const handleFilterClick=(filterType)=>{
      console.log("#121",".....selected......",filterType);
        switch(filterType){
            case FILTERTYPE.READ:{
                const filteredData= filterData(filter,emailList);
                setEmailList(filteredData)
            return;
            }
            case FILTERTYPE.FAV:{
               
               const filteredData= filterData(filter,emailList);
                 setEmailList(filteredData)
                return;
            }

            default: return FILTERTYPE.DEFAULT;
            
        }
    }
     
    
  async function callAPI(){
   
    console.log("called the api");

    //make api call
    const res=await makeFetchCall();
    console.log("api call data",res);
     setEmailList(res);

  }
    
  useEffect(()=>{
    console.log("#131","filter in useEffet",filter);
         if(filter.length){
             console.log("#131","filter in useEffet",filter);
            setLocalStorage(filter) 
         }
    

  },[filter])


    function emailClicked(id){

        setFilter((filterList)=>{
          const index=filterList.findIndex((item)=>{
              if(item.id==id)
              return true;
          });
          
                 console.log("#141",index); 
                 if(index>=0 && filterList.length)
             filterList[index].state.push(Constant.STATE.READ);
            else{
                filterList.push({id:id,state:[Constant.STATE.READ]})
            }

          console.log("after sorting","#121",filterList);
          //return with new reference
          return [
              ...filterList
          ]
        })

    }   
    const value_={
        emailList,
        filter,
        emailClicked,
        handleFilterClick

    }


    /**
     * useEffects
     */
     useEffect(()=>{
         callAPI();
     },[]);


    //end

   
    return(
        <Context.Provider
        value={value_}
        >
         {children}
        </Context.Provider> 
    )

    }
    
export const Context=createContext({});
export default MyContext;