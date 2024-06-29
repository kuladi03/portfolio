import React from 'react'
import LINUX from "D:/Projects/Aditya_PortFolio/aditya_portfolio/src/assets/linux.svg"
import WINDOWS from "D:/Projects/Aditya_PortFolio/aditya_portfolio/src/assets/windows.svg"

const Os = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Operating Systems</h3>

        <div className="skills__box">
            <div className="skills__group">
            <div className="skills__data">
                    <img src={WINDOWS} alt="" />
                </div>

                <div className="skills__data">
                    <img src={LINUX} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Os