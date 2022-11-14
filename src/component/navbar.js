import logo from "../images/logo.svg"
function NavBar (props) {
    return (
       <nav className={props.darkMode ? "dark": ""}
       >
        <img className="logo" src={logo} ></img>
        <h3>ReactsFacts</h3>
        <div className="toggler" >
                <p className="toggler--light">Light</p>
                <div className="toggler--slider" onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
        </div>
       </nav>
    )
}

export default NavBar