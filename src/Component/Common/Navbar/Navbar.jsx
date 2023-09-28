import React, { useState } from 'react'
import '../navbar.scss'
import event from '../../../Events/Events';
const Navbar = ({onSearch}) => {
  const [searchTerm, setSearchTerm] = useState('');
      

const handleSearch = (e) => {
  e.preventDefault()
  // event.emit("onSearch", search)
  onSearch(searchTerm)
}

  return (
   <>
 <nav class="navbar navbar-expand-lg bg-body-tertiary nav1">
  <div class="container-fluid">
    <h3 class="navbar-brand" href="#">The <span style={{color:"red"}}>Rahul</span> Shop</h3>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav m-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Shop</a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Products</a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Features</a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Pages</a>
        </li>
  
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"
         value={searchTerm}
         onChange={(e)=>setSearchTerm(e.target.value)}/>
        <button class="btn btn-outline-success" type="submit" onClick={handleSearch}>Search</button>
      </form>
    </div>
  </div>
</nav>
    
   
   </>
  )
}

export default Navbar