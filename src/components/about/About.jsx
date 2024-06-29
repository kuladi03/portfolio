import "./about.css";
import CV from "../../assets/Aditya Resume.pdf";
import ButtonIcon from "../../assets/button_icon.svg";

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My introduction</span>

        <div className="about__container container grid">
            <div className="about__data">
                    <p className="about__description">
                    Hi everyone, I am Aditya Kulkarni from Pune, India.
                    <br/><br/>
                    I am currently in my final year, pursuing a B.Tech in Computer Science & Engineering at MIT ADT University, Pune, striving for excellence with a CGPA of 8.38.
<br/><br/>
                    Apart from diving into the world of AI and ML, I find joy in:
<br/><br/>          
                    <ul className="about__interests">
                    <li><i className="uil uil-angle-right">Exploring new coding projects</i></li>
                    <li><i className="uil uil-angle-right">Solving algorithmic puzzles</i></li>
                    <li><i className="uil uil-angle-right">Engaging in competitive programming</i></li>
                    <li><i className="uil uil-angle-right">Striving to innovate and create solutions that matter!</i></li>
                    </ul>
                    <br/>
                    <b>Let`&#39;`s keep building a better tomorrow!</b>
                    </p>
                    <br />
                    <a download="" href={CV} className="button button--flex">Download Resume
                    <img src={ButtonIcon} alt="" />
                    </a>
            </div>
        </div>
    </section>
  )
}

export default About