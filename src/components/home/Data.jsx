import ButtonHome from "../../assets/buttonHome.svg";
// import HomeHand from "../../assets/homehand.svg";
const Data = () => {
    return(
        <div className="home__Data">
            <h1 className="home__title">Aditya Kulkarni

            </h1>
            <h3 className="home__subtitle">Software Developer</h3>
            <p className="home__description">Driven Computer Engineering Student Skilled in C++, Python, Learning Full-Stack Web Development Passionate About Continuous Learning & Strategic Thinking</p>
            <a href="#contact" className="button button--flex">Say Hello
              <img src={ButtonHome} alt="" />
            </a>
        </div>
    )
}

export default Data