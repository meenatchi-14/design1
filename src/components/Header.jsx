import hooodImg from "../assets/hoood.png"
function Header() {
    return (
        <div>
            <header className="header">
                <div className="head">

                    <img src={hooodImg} className="logo" alt="hoood" />
                    <div><h2> HOOOD</h2>
                        <h6>Prompt Made Social</h6>
                    </div>

                    <nav class="nav">
                        <ul className="head-links">
                            <li>Features</li>
                            <li>How it works</li>
                            <li>Community</li>
                            <li> <button className="login">Login</button></li>
                        </ul>

                    </nav>
                </div>
            </header>
            <hr />
        </div>
    );
}

export default Header;