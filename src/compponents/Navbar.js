import React from 'react'
import PropTypes from 'prop-types'
//import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    // props: component have some variables( in actual a text but vary from user to user-> props
<>
    <nav className="navbar navbar-expand-lg navbar">
    <div className="container-fluid">
      <a className="navbar-brand " style={{color:props.mode==='light' ?'black' : 'white'}} href="/"><b>{props.title}</b></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse"  id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">{props.aboutText}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" style={{color:props.mode==='light' ?'black' : 'white'}} href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link"style={{color:props.mode==='light' ?'black' : 'white'}} href="/about">About</a>
          </li>
        </ul>
       {/*link as a href as to */}
        <div className={`form-check form-switch text-${props.mode==='light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Black mode</label>
        </div>

       <div className={`form-check form-switch text-${props.mode==='light'? 'red' : 'light'}`}>
        <input className='form-check-input' onClick={props.toggleRed} type="checkbox" id="flexSwitchCheckDefault1"/>
        <label className='form-check-label' htmlFor="flesSwitcCheckDefault1">Red Mode</label>
        </div>

        
       <div className={`form-check form-switch text-${props.mode==='light'? 'green' : 'light'}`}>
        <input className='form-check-input' onClick={props.toggleBrown} type="checkbox" id="flexSwitchCheckDefault2"/>
        <label className='form-check-label' htmlFor="flesSwitcCheckDefault2">Brown Mode</label>
        </div>

      </div>
      
    </div>
  </nav>
</>
  )
}
//object
Navbar.propTypes= 
{
    title:  PropTypes.string.isRequired,
aboutText:PropTypes.string
}

Navbar.defaultProps=
{
    title:'set title',

};