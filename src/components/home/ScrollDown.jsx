import mouse from "../../assets/scroll_down.svg";
const ScrollDown = () => {
    return (
        <div className="home__scroll">
            <a href="" className="home__scroll-button button--flex">

              <span className="home__scroll-name">Scroll Down</span>
              <img src={mouse} alt="" />
            </a>
        </div>
    )
}

export default ScrollDown