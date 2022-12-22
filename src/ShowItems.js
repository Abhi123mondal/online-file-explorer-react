import './ShowItems.css';
import React from 'react';
import { faFolder,faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function ShowItems({title,items,type}){    //passing props
    return(
        <>
    <div className='width'>
     <h4 className='text'>{title}</h4>
    <div className='row'>
         {items.map((item,index)=>{
            return (<p key={index * 55} className="item col-md-2 py-3 d-flex flex-column">
                {type==="files" ? (
                 <FontAwesomeIcon icon={faFolder} className="mb=3" size="4x"/>
                ):(
                    <FontAwesomeIcon icon={faFileAlt} size="4x"/>
                )}
                {item}
                </p>);
            // console.log(item);
        })}
       
        </div>
    </div>
    </>
    )
}
export default ShowItems;