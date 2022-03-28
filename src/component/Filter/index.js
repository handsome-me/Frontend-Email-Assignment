import React ,{useState,useContext} from 'react';
import { Context } from '../../Context/Context';
import './index.css';

const Filter=({title,active,handleFilterClick})=>{
   
     

    const onClick=(event)=>{
        event.stopPropagation();
        const id=event.target.id;
       
        handleFilterClick(id);

    }
    /**
     * border-radius: 20px;
    border: 1px solid;
     */
    const activeStyle={
      borderRadius:"20px",
       border:"1px solid #F4F5F9",
       backgroundColor:"#F4F5F9"
        
    }
     
    return(
     <>
       
          <button onClick={(event)=>onClick(event)} style={active?activeStyle:{}} className='filter-button'  id={title.toUpperCase()}>{title}</button>
      
     </>
    )

}


export default Filter;