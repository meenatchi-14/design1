import hero from "../assets/hero1.png";
function Hero() {
    return (
        <section className="hero">
            <div className="hero-text">
                <p className="badge">Designed for Flow</p>
                <h1>A Better Way to Work with AI</h1>
                <p className="subtitle">
                    HOOOD is a next gen prompt library where AI ideas are
                    discovered, shared, and remixed.
                </p>
                <button className="cta">Get Hoood</button>
            </div>

            <img src={hero} alt="hero" className="hero-img" />
        </section>
    );
}

export default Hero;