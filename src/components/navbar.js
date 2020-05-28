import React from "react"
import {Link} from "gatsby"
import './navbar.css'


class Navbar extends React.Component{

    componentDidMount() {
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY > 10;
            const navbar = document.getElementById('navbar');
            if (isTop){
                navbar.classList.add('scrolled');
            }
            else {
                navbar.classList.remove('scrolled');
            }

        });

    }
    componentWillUnmount(){
        window.removeEventListener('scroll');
    }
    render () {
        return (
            <nav id="navbar" style={{
                transition: `0.5s`
            }}>
            <h5 style={{ textAlign: "right" }}>
              <Link class="navitem"
                to="/about"
                style={{
                  color: `#e7ecef`,
                  textDecoration: `none`,
                }}
              >
                {" "}
                About
              </Link>
        
              <Link
              class="navitem"
                to="/projects"
                style={{
                  color: `#e7ecef`,
                  textDecoration: `none`,
                  marginLeft: `2em`,
                }}
              >
                Projects
              </Link>
        
              <Link
                to="/#contact"
                style={{
                  color: `#e7ecef`,
                  textDecoration: `none`,
                  marginLeft: `2em`,
                }}
              >
                Contact
              </Link>
            </h5>
          </nav>
        )
    }

}


export default Navbar
