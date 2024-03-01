import React, { useState,useEffect } from 'react';
import { TiTick } from "react-icons/ti";

export default function Main() {

const [title,setTitle]= useState("");
const [titleError,setTitleError]= useState(false);
const [author,setAuthor] = useState("");
const [authorError,setAuthorError] = useState(false);
const [isbn,setIsbn] = useState("");
const [isbnError,setIsbnError] = useState(false);
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

useEffect(
  ()=>{
if(notification){
const timeOut = setTimeout(()=>{setNotification(null)},3000);
return ()=> clearTimeout(timeOut);
}
  },[notification]
)
useEffect(()=>{
localStorage.setItem('books',JSON.stringify(book))
},[book])

const onBookSubmitHandler = (event)=>{
event.preventDefault();

if(!title){   
  setTitleError(true); 
  return
} 
if(!author) {
  setAuthorError(true);
    return
  }; 
if(!isbn) {
  
  setIsbnError(true)
return;
};

if(editIndex == null){
setBooks([...book,{title,author,isbn}])
const storeBooks= [...book,{title,author,isbn}];
setNotification("book is added successfully!");
}else{
const updateBook = [...book];
const findBook = updateBook[editIndex];
findBook.title = title;
findBook.author = author;
findBook.isbn = isbn;
setBooks(updateBook);
setEditIndex(null);
setNotification("book updated successfully!");

}

setTitle("");
setAuthor("");
setIsbn("");
}

const deleteSubmitHandlre=()=>{
  const deleteBook = [...book];
  console.log("deleteBook")
  deleteBook.splice(deleteIndex,1);
  setBooks(deleteBook);
setDeleteIndex(null);
setNotification("book deleted successfully!")


}
const EditHandlerFunction = (event,index)=>{
event.preventDefault();
setEditIndex(index);
const editValues= book[index];
setTitle(editValues.title);
setAuthor(editValues.author);
setIsbn(editValues.isbn);
}
console.log(deleteIndex)
  return (
    <>

   <div className="container w-[60%] mt-1 relative">
    {/* notification box start */}
   {notification && <div  style={{ transition: 'opacity 0.5s ease-in-out' }}
 className='bg-white w-[25%] mx-auto   absolute top-2 py-2 px-1 rounded-md shadow-lg  left-0 right-0 flex items-center justify-center space-x-2'>
    <div className="text-white text-sm rounded-full bg-gray-500 inline">
  <TiTick />
</div>
<div className=''>{notification}</div>
  </div>}
    {/* notification box  end*/}


    {/* delete notification modal start */}
  {deleteIndex !== null &&   <div  style={{ transition: 'opacity 0.5s ease-in-out' }}
 className='bg-white w-[32%] mx-auto   absolute top-2 py-2 px-2 rounded-md shadow-lg  left-0 right-0   space-x-2'>
    
<div className='mt-1'>Are you sure you want to delete data ?</div>
<div className='flex justify-end space-x-3 mt-2'>
  <button className='bg-green-800 rounded-md px-4 text-white' onClick={()=>deleteSubmitHandlre()}>Yes</button>
  <button className='bg-red-800 rounded-md px-4 text-white'>No</button>
</div>
  </div>}

    {/* delete notification modal end */}
 <h1 className="text-5xl ">Add Book</h1>
 <div className="container mt-6">
  <form onSubmit={onBookSubmitHandler}>
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
  <input type="text" name="isbn" value={isbn} className={`block w-full  rounded-md  ${isbnError ?'ring-red-500': 'ring-slate-300'} ring-inset  ring-1   py-2  px-2.5 focus:ring-1  focus:ring-white `} onChange={(event)=>{setIsbn(event.target.value);setIsbnError(false)}}/>
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
 {/* table  */}
 <div className="mt-10" >
  <table className="table-auto w-full">
  <thead className="  border-b-[1px]  border-b-slate-200 leading-[2.75rem] " >
    <tr className= "text-left  ">
      <th>Title</th>
      <th>Author</th>
      <th>ISBN</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>

  {book && book.map((singleBook,index)=>{
return(
  <tr className="border-b-[1px] border-b-slate-200 mt-5 " key={index}>
  <td className="pt-3 pb-5">{singleBook.title}</td>
  <td className="pt-3 pb-5">{singleBook.author}</td>
  <td className="pt-3 pb-5">{singleBook.isbn}</td>
  <td  className="pt-3 pb-5"><button type="button"  className="border border-slate-300 px-8 py-2.5 rounded-[4px] tracking-widest font-medium text-gray-700  text-[11px]" onClick={(event)=>EditHandlerFunction(event,index)}>EDIT</button></td>
  <td className="pt-3 pb-5"><a href="#" className="underline text-blue-400 " onClick={() =>setDeleteIndex(index) }>X</a></td>

</tr>

)

  })

 
    }

  </tbody>
</table>

 </div>
   </div>
   

 
</>   
  )
}