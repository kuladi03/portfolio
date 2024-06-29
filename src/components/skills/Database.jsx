import SQL from "../../assets/sql.svg"
import MONGODB from "../../assets/mongodb.svg"

const Database = () => {
  return (
    <div className="skills__content">
    <h3 className="skills__title">Databases</h3>

    <div className="skills__box">
        <div className="skills__group">
            <div className="skills__data">
                <img src={SQL} alt="" />
            </div>

            <div className="skills__data">
                <img src={MONGODB} alt="" />
            </div>
        </div>
    </div>
</div>
  )
}

export default Database