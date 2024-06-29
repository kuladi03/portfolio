import React from 'react'
import EXPRESS from "D:/Projects/Aditya_PortFolio/aditya_portfolio/src/assets/express.svg"
import NODE from "D:/Projects/Aditya_PortFolio/aditya_portfolio/src/assets/node.svg"
import NUMPY from "D:/Projects/Aditya_PortFolio/aditya_portfolio/src/assets/numpy.svg"
import PANDAS from "D:/Projects/Aditya_PortFolio/aditya_portfolio/src/assets/pandas.svg"
import REACT from "D:/Projects/Aditya_PortFolio/aditya_portfolio/src/assets/react.svg"
import SCIKIT from "D:/Projects/Aditya_PortFolio/aditya_portfolio/src/assets/scikit.svg"

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