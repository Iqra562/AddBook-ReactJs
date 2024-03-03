import React from 'react';
import { useState,useEffect ,memo} from 'react';
import {onBookSubmitHandler} from './jsFunctions/CrudFunctions'
export default  memo( function BookForm(props) {
const {book,setBooks,setNotification,editIndex,setEditIndex,title,setTitle,author,setAuthor,isbn,setIsbn} =props;
    const [titleError,setTitleError]= useState(false);
    const [authorError,setAuthorError] = useState(false);
    const [isbnError,setIsbnError] = useState(false);

    const valideState = {
       setTitleError,
       setAuthorError,
       setIsbnError 
    }
    

                                                       
    
    return <>

<h1 className="text-5xl ">Add Book</h1>
 <div className="container mt-6">
  <form onSubmit={(event)=>onBookSubmitHandler(event,props,valideState)}>
 <div>
<label htmlFor="title" className="block  text-md font-medium leading-5 text-gray-900">Title </label>
<div className="mt-2 rounded-sm ">
  <input type="text" value={title} name="title"  className={`block w-full  rounded-md ${titleError ?'ring-red-500': 'ring-slate-300'}  ring-inset  ring-1   py-2  px-2.5 focus:ring-1  focus:ring-white`}onChange={(event) => {setTitle(event.target.value);setTitleError(false)}}
   />
  <span className={`${titleError ? 'block' :'hidden' }   text-red-500 `}>Please fill out this empty feild</span>
</div>
</div>
 <div>
<label htmlFor="author" className="block  text-md font-medium leading-1 mt-4 text-gray-900">Author </label>
<div className="mt-2 rounded-sm ">
  <input type="text" name="author" value={author}  className={`block w-full  rounded-md ${authorError ?'ring-red-500': 'ring-slate-300'}  ring-inset  ring-1   py-2  px-2.5 focus:ring-1  focus:ring-white "`}onChange={(event)=> {setAuthor(event.target.value);setAuthorError(false)}}/>
  <span className={`${authorError ? 'block' :'hidden' }   text-red-500 `}>Please fill out this empty feild</span>
</div>
</div>
 <div>
<label htmlFor="isbn" className="block  text-md font-medium leading-5 text-gray-900 mt-5" >ISBN# </label>
<div className="mt-2 rounded-sm ">
  <input type="number" name="isbn" value={isbn} className={`block w-full  rounded-md  ${isbnError ?'ring-red-500': 'ring-slate-300'} ring-inset  ring-1   py-2  px-2.5 focus:ring-1  focus:ring-white `} onChange={(event)=>{setIsbn(event.target.value);setIsbnError(false)}}/>
  <span className={`${isbnError ? 'block' :'hidden' }   text-red-500 `}>Please fill out this empty feild</span>
</div>
</div>
<div>
<button type="submit" className=" block w-full ring-1 ring-gray-400     p-2.5  mt-4 rounded-sm  font-medium  text-gray-700  text-[11px] tracking-widest ">
  {editIndex !== null ? 
  "UPDATE" : "CREATE"
  
  }
</button>
</div>
</form>

 </div>
    </>
})