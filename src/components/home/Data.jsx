import ButtonHome from "../../assets/buttonHome.svg";
// import HomeHand from "../../assets/homehand.svg";
const Data = () => {
    return(
        <div className="home__Data">
            <h1 className="home__title">Aditya Kulkarni

            </h1>
            <h3 className="home__subtitle">Software Developer</h3>
            <p className="home__description">Driven Computer Engineering student skilled in C++, Python, and full-stack web development, with a passion for continuous learning and strategic thinking.</p>
            <a href="#contact" className="button button--flex">Say Hello
              <img src={ButtonHome} alt="" />
            </a>
        </div>
    )
}

export default Data