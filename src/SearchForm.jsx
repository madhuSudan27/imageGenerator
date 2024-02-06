import React from 'react'
import { useGlobalContext } from './context';

const SearchForm = () => {
    const {searchTerm,setSearchTerm} = useGlobalContext();
    const handleSubmit = (e)=>{
        e.preventDefault();
        const searchValue = e.target.elements.search.value;
        if(!searchValue){
            return;
        }
        setSearchTerm(searchValue);
        // console.log(searchValue);
    }
  return (
   <section>
    <h1 className='title'>unsplash image</h1>
    <form className='search-form' onSubmit={handleSubmit}>
        <input type="text" className='form-input search-input'  name = 'search' placeholder={searchTerm || 'cat'}/>
        <button type='submit' className='btn'>
            search
        </button>
    </form>
   </section>
  )
}

export default SearchForm
