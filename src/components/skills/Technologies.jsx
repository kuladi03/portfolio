import EXPRESS from "../../assets/express.svg"
import NODE from "../../assets/node.svg"
import NUMPY from "../../assets/numpy.svg"
import PANDAS from "../../assets/pandas.svg"
import REACT from "../../assets/react.svg"
import SCIKIT from "../../assets/scikit.svg"

const Technologies = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Framework & Libraries</h3>
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <img src={NODE} alt="" />
                </div>

                <div className="skills__data">
                    <img src={REACT} alt="" />
                </div>

                <div className="skills__data">
                    <img src={EXPRESS} alt="" />
                </div>

                <div className="skills__data">
                    <img src={NUMPY} alt="" />
                </div>

                <div className="skills__data">
                    <img src={PANDAS} alt="" />
                </div>

                <div className="skills__data">
                    <img src={SCIKIT} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Technologies