import hooodImg from "../assets/hoood.png"
import hooodTxt from "../assets/hooodText.png"
function Header() {
    return (
        <div>
            <header className="header">
                <div className="head">
                    <div className="start">
                        <img src={hooodImg} className="logo" alt="hoood" />
                        <img src={hooodTxt} className="hooodTxt" alt="hoood" />
                    </div>
                    <div class="nav">
                        <ul className="head-links">
                            <li>Features</li>
                            <li>How it works</li>
                            <li>Community</li>

                        </ul>

                    </div>
                </div>
                <button className="login">Log in</button>
            </header>
            <hr />
        </div>
    );
}

export default Header;