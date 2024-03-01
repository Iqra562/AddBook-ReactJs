import React from "react";
import { TiTick } from "react-icons/ti";

function NotificationModal(props){
  const {notification}  = props
    return(
 <div  style={{ transition: 'opacity 0.5s ease-in-out' }}
 className='bg-white w-[25%] mx-auto   absolute top-2 py-2 px-1 rounded-md shadow-lg  left-0 right-0 flex items-center justify-center space-x-2'>
    <div className="text-white text-sm rounded-full bg-gray-500 inline">
  <TiTick />
</div>
<div className=''>{notification}</div>
  </div>
  )
}
export default NotificationModal;