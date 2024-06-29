import "./skills.css";
import Technical from './Technical';
import Technologies from './Technologies';
import Database from './Database';
import Tools from './Tools';
import Os from './Os';

const Skills = () => {
  return (
    <section className="Skills section" id='Skills'>
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle"></span>
        <div className="Skills__container container grid">
        <Technical/>
        <Technologies/>
        <Database/>
        <Tools/>
        <Os/>
        </div>
    </section>
  )
}

export default Skills