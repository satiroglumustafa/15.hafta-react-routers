import { Link, Outlet } from "react-router-dom"


const Layout = () => {
    return (
        <>
            <header className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li className="nav-item"><Link to="/">Ana Ekran</Link></li>
                            <li className="nav-item"><Link to="/blog">Blog</Link></li>
                            <li className="nav-item"><Link to="/iletisim">İletişim</Link></li>
                        </ul>
                    </div>
                </nav>
               
            </header>

            <section className="container py-3">
                <Outlet />
            </section>


            <footer className="container">Footer</footer>
        </>
    )
}
export default Layout
