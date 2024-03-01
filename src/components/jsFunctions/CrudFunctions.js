// on form submit update data and create new data

export const onBookSubmitHandler = (event,props,valideState)=>{
    event.preventDefault();
    const {book,setBooks,setNotification,editIndex,setEditIndex,title,setTitle,author,setAuthor,isbn,setIsbn} =props;
    const  { setTitleError, setAuthorError, setIsbnError } = valideState;
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


// EditHandler.js
export const EditHandlerFunction = (event, index, book, setEditIndex, setTitle, setAuthor, setIsbn) => {
  // console.log(index);
  event.preventDefault();
  setEditIndex(index);
  const editValues = book[index];
  setTitle(editValues.title);
  setAuthor(editValues.author);
  setIsbn(editValues.isbn);
};


// delete handler 

export const DeleteSubmitHandler = (book, setBooks, deleteIndex, setDeleteIndex, setNotification) => {
  const deleteBook = [...book];
  deleteBook.splice(deleteIndex, 1);
  setBooks(deleteBook);
  setDeleteIndex(null);
  setNotification("book deleted successfully!");
};

// on 'no' btn click 
export const SaveData = (setDeleteIndex)=>{
  setDeleteIndex(null);
  
  }