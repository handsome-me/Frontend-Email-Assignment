import React, {createContext, useEffect,useState} from 'react';
import Constant from '../constants/index'
import {makeFetchCall} from '../Utils/api/index';
import {setLocalStorage,getLocalStorage} from '../Utils/LocalStorage/localStorage'
import {FILTERTYPE} from '../constants/index';
 

 

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
      
        //set filtertype
        setFilterType(filterType);

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

   
    function emailClicked(id,filterType){

      filterType=filterType?Constant.STATE.FAV:Constant.STATE.READ;

        setFilter((filterList)=>{
          const index=filterList.findIndex((item)=>{
              if(item.id==id)
              return true;
          });
                 
                 if(index>0 && filterList.length)
               filterList[index].state.push(filterType);
            else{
                filterList.push({id:id,state:[filterType]})
            }

          return [
              ...filterList
          ]
        })

    }   
    const value_={
        emailList,
        filter,
        emailClicked,
        handleFilterClick,
        filterType
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