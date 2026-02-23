import hero from "../assets/hero1.png";
function Hero() {
    return (
        <section className="hero">
            <div className="hero-text">
                <button className="badge">Prompt discovery, Done right</button>
                <p className="boldText">Where Great</p>
                <p className="boldGreen boldText"> Prompt Begin</p>
                <p className="subtitle">
                    A platform built to simplify AI creativity by offering easy
                    prompt sharing, clean UI, and a  collaborative user
                    experience
                </p>
                <div className="btns">
                    <button className="cta colorG">Get Hoood</button>
                    <button className="cta colorW"> Explore Hoood</button>
                </div>
            </div>

            <img src={hero} alt="hero" className="hero-img" />
        </section>
    );
}

export default Hero;