import React, { useState ,useEffect} from 'react'

function Books() {
    const getformData=()=>{
        const data=localStorage.getItem('bookRecord');
        if(data!=null){
           return JSON.parse(data);
    }
}
    const [books, setBooks] = useState(getformData());
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('')
    function submitBooks(e) {
        e.preventDefault();
        console.log(e.target.value);
        let booksObj = {
            id,
            title,
            author
        }
        setBooks([...books, booksObj]);
        setId('');
        setTitle('');
        setAuthor('');
       
    }
    const deleteBook=(id)=>{
        const filteredBooks=books.filter((element,index)=>{
            return element.id!==id
        })
        setBooks(filteredBooks);
    }

    const updateBook=(item)=>{
        console.log(item)
        setId(item.id);
        setTitle(item.title);
        setAuthor(item.author);
    }
   
    useEffect(()=>{
        localStorage.setItem('bookRecord',JSON.stringify(books));
})
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-info text-center">
                                <h4>Books Management</h4>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        <div className="row">
                                            <div className="col">
                                                <div className="card">
                                                    <div className="card-header bg-light">
                                                        <h6>Book Entry Form</h6>
                                                    </div>
                                                    <div className="card-body">
                                                        <form onSubmit={submitBooks}>
                                                            <div className="row">
                                                                <div className="col">
                                                                    <label htmlFor="">ISBN</label>
                                                                    <input type="text" name="id" id="" className='form-control' placeholder='ISBN' onChange={(e) => setId(e.target.value)} />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col">
                                                                    <label htmlFor="">Title</label>
                                                                    <input type="text" name="id" id="" className='form-control' placeholder='Title' onChange={(e) => setTitle(e.target.value)} />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col">
                                                                    <label htmlFor="">Author</label>
                                                                    <input type="text" name="id" id="" className='form-control' placeholder='Author' onChange={(e) => setAuthor(e.target.value)} />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col">
                                                                    <button type="submit" className='btn btn-success mt-2 btn-sm' >Submit</button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row">
                                            <div className="col">
                                                <div className="card">
                                                    <div className="card-header bg-light">
                                                        <h6>Book Records</h6>
                                                    </div>
                                                    <div className="card-body">
                                                        {books.length<1?<span>No Record Found</span>:
                                                         <div className="row">
                                                         <div className="col">
                                                             <table className="table table-bordered table-striped">
                                                                 <thead>
                                                                     <tr>
                                                                         <th>ISBN</th>
                                                                         <th>Title</th>
                                                                         <th>Author</th>
                                                                         <th>Action</th>
                                                                     </tr>
                                                                 </thead>
                                                                 <tbody>
                                                                    
                                                                    {
                                                                        books.map((item,i)=>
                                                                        <tr key={i}>
                                                                         <td>{item.id}</td>
                                                                         <td>{item.title}</td>
                                                                         <td>{item.author}</td>
                                                                         <td>
                                                                            <button className='btn btn-danger' onClick={()=>deleteBook(item.id)}>Delete</button>
                                                                            <button className='btn btn-warning' onClick={()=>updateBook(item)}>Update</button>
                                                                         </td>
                                                                        </tr>
                                                                        ) 
                                                                     }
                                                                
                                                                 </tbody>
                                                             </table>
                                                         </div>
                                                     </div>
                                                        }
                                                       
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
    
export default Books
