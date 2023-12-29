
import React from 'react'
import './Navbar.css'


const Navbar = ({setCategory}) => {
  return (
    <div>

<nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark"  >
  <div class="container-fluid"  >
    <a class="navbar-brand" href="/"><span className="badge bg-light text-dark fs-4">News App</span></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        
        <li class="nav-item">
          <div class="nav-link pointer hover-effect " onClick={() => setCategory('science')} >Science</div>
        </li>
        <li class="nav-item">
          <div class="nav-link pointer hover-effect " onClick={() => setCategory('health')} >Health</div>
        </li>
        <li class="nav-item">
          <div class="nav-link pointer hover-effect" onClick={() => setCategory('entertainment')} >Entertainment</div>
        </li>
        <li class="nav-item">
          <div class="nav-link pointer hover-effect" onClick={() => setCategory('sports')}>Sports</div>
        </li>
        <li class="nav-item">
          <div class="nav-link pointer hover-effect" onClick={() => setCategory('business')}>Business</div>
        </li>
        <li class="nav-item">
          <div class="nav-link pointer hover-effect" onClick={() => setCategory('technology')}>Technology</div>
        </li>
        
      </ul>
    </div>
  </div>
</nav>


    </div>
  )
}

export default Navbar