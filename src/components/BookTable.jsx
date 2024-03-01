import React, { memo } from "react"

 function  BookTable(props) {

  const {book,setDeleteIndex,EditHandlerFunction , setEditIndex, setTitle, setAuthor, setIsbn} = props;
  
     
  const EditFunction = (event,index)=>{
    event.preventDefault();
    EditHandlerFunction(event,index, book,setEditIndex, setTitle, setAuthor, setIsbn)
  }
  return <>   
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
  <td  className="pt-3 pb-5"><button type="button"  className="border border-slate-300 px-8 py-2.5 rounded-[4px] tracking-widest font-medium text-gray-700  text-[11px]" onClick={(event)=>EditFunction(event,index)}>EDIT</button></td>
  <td className="pt-3 pb-5"><a href="#" className="underline text-blue-400 " onClick={() =>setDeleteIndex(index) }>X</a></td>

</tr>

)

  })

 
    }

  </tbody>
</table>

 </div>
  </>
}
export default memo( BookTable);