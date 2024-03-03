import React from 'react';
 import BookTable from './BookTable'
 import BookForm from './BookForm'
import { TiTick } from "react-icons/ti";
import NotificationModal from './modals/DeleteModal';
import DeleteModal from './modals/DeleteModal';
 import { EditHandlerFunction,DeleteSubmitHandler ,SaveData} from './jsFunctions/CrudFunctions'; 
 import {useState,useEffect} from 'react'
export default function Home() {
   
  const [title,setTitle]= useState("");
const [author,setAuthor] = useState("");
const [isbn,setIsbn] = useState("");
const [notification,setNotification]  =useState("");
const [book,setBooks] = useState([]);
const [deleteIndex,setDeleteIndex] = useState(null);
const [editIndex,setEditIndex] = useState(null);

  


useEffect(() => { 
  const getItem = localStorage.getItem('books');
  // const parseData = getItem ? JSON.parse(getItem) : []; 
   const parseData = JSON.parse(getItem);
   if(parseData && parseData.length > 0 ){
     setBooks(parseData);

   }
  
}, []);
useEffect(()=>{
  localStorage.setItem('books',JSON.stringify(book))
  },[book])

  useEffect(
    ()=>{
  if(notification){
  const timeOut = setTimeout(()=>{setNotification(null)},3000);
  return ()=> clearTimeout(timeOut);
  }
    },[notification]
  )

const DeleteFunction = ()=>{
  DeleteSubmitHandler(book, setBooks, deleteIndex, setDeleteIndex, setNotification)
}

   return (
      <>
      <div className="container w-[60%] mt-1 relative">

    {/* notification box start */}
    { notification && <div  style={{ transition: 'opacity 0.5s ease-in-out' }}
 className='bg-white lg:w-[25%] md:w-[55%] mx-auto   absolute top-2 py-2 px-1 rounded-md shadow-lg  lg:left-0 right-0 flex items-center justify-center space-x-2'>
    <div className="text-white text-sm rounded-full bg-gray-500 inline">
  <TiTick />
</div>
<div className=''>{notification}</div>
  </div>}
 
    {/* notification box  end*/}

   
    {/* delete notification modal start */}
  {deleteIndex !== null &&   <div  style={{ transition: 'opacity 0.5s ease-in-out' }}
 className='bg-white  lg:w-[32%] md:w-[50%] mx-auto   absolute top-2 py-2 px-2 rounded-md shadow-lg  lg:left-0 right-0   space-x-2'>
    
<div className='mt-1'>Are you sure you want to delete data ?</div>
<div className='flex justify-end space-x-3 mt-2'>
  <button className='bg-green-800 rounded-md px-4 text-white' onClick={DeleteFunction}
  >Yes</button>
  <button className='bg-red-800 rounded-md px-4 text-white' onClick={()=>SaveData(setDeleteIndex)}>No</button>
</div>
  </div>}
  
    {/* delete notification modal end */}

<BookForm  book={book} setBooks={setBooks} setNotification={setNotification}  editIndex={editIndex} setEditIndex={setEditIndex} title={title} setTitle={setTitle} author={author} setAuthor={setAuthor} isbn={isbn} setIsbn={setIsbn}/>
<BookTable book={book}   setEditIndex={setEditIndex} setTitle={setTitle} setAuthor={setAuthor} setIsbn= {setIsbn} setDeleteIndex={setDeleteIndex} EditHandlerFunction={EditHandlerFunction}/>

      </div>
    </>
  );
}
