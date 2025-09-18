import '../styles/Navbar.css'

function Navbar() {
    return (
        <header>
            <nav className="header__nav">
                <div className="header__logo">
                    <h4>logo</h4>
                </div>
                <ul className="header__menu">
                    <li>
                        <a href="/add">Add</a>
                    </li>
                    <li>
                        <a href="/view">View</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar