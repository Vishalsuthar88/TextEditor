import React from 'react'
import PropTypes from 'prop-types'

const Navbar = props => {
    return (
        <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">{props.abouttext}</a>
                            </li>
                            
                            
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" /> */}
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
        </div>
    )
}

Navbar.propTypes = {
    title:PropTypes.string.isRequired,
    abouttext:PropTypes.string.isRequired
}
Navbar.defaultProps = {  //will execute when there will be no title and about in navbar object
    title:"Set title ",
    abouttext:"Set about "
}

export default Navbar
