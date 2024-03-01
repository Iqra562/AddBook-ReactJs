import React from "react";
import { TiTick } from "react-icons/ti";

function DeleteModal({DeleteFunction,SaveData,setDeleteIndex}){
    return(
   <div  style={{ transition: 'opacity 0.5s ease-in-out' }}
 className='bg-white w-[32%] mx-auto   absolute top-2 py-2 px-2 rounded-md shadow-lg  left-0 right-0   space-x-2'>
    
<div className='mt-1'>Are you sure you want to delete data ?</div>
<div className='flex justify-end space-x-3 mt-2'>
  <button className='bg-green-800 rounded-md px-4 text-white' onClick={DeleteFunction}
  >Yes</button>
  <button className='bg-red-800 rounded-md px-4 text-white' onClick={()=>SaveData(setDeleteIndex)}>No</button>
</div>
  </div>

  )
}
export default DeleteModal;