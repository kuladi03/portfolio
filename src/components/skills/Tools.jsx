import React from 'react'
import GIT from "D:/Projects/Aditya_PortFolio/aditya_portfolio/src/assets/git.svg"
import VSCODE from "D:/Projects/Aditya_PortFolio/aditya_portfolio/src/assets/code.svg"
import PYCHARM from "D:/Projects/Aditya_PortFolio/aditya_portfolio/src/assets/pc.svg"
import JIRA from "D:/Projects/Aditya_PortFolio/aditya_portfolio/src/assets/jira.svg"


const Tools = () => {
  return (
    <div className="skills__content">
    <h3 className="skills__title">Tools</h3>

    <div className="skills__box">
        <div className="skills__group">
            <div className="skills__data">
                <img src={GIT} alt="" />
            </div>
            <div className="skills__data">
                <img src={VSCODE} alt="" />
            </div>
            <div className="skills__data">
                <img src={PYCHARM} alt="" />
            </div>
            <div className="skills__data">
                <img src={JIRA} alt="" />
            </div>
        </div>
    </div>
</div>
  )
}

export default Tools