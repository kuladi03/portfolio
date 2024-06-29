import React from 'react'
import CPP from "D:/Projects/Aditya_PortFolio/aditya_portfolio/src/assets/cpp.svg"
import PY from "D:/Projects/Aditya_PortFolio/aditya_portfolio/src/assets/python.svg"
import JS from "D:/Projects/Aditya_PortFolio/aditya_portfolio/src/assets/javascript.svg"
import MYSQL from "D:/Projects/Aditya_PortFolio/aditya_portfolio/src/assets/mysql.svg"
const Technical = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Languages</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                        <img src={CPP} alt="" />
                </div>
                <div className="skills__data">
                        <img src={PY} alt="" />
                </div>
                <div className="skills__data">
                        <img src={JS} alt="" />
                </div>
                <div className="skills__data">
                        <img src={MYSQL} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Technical