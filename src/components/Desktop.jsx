import React from "react";

const Desktop = ({ onPortfolioClick }) => {
    return (
        <div className="desktop">
            {/*Desktop Icons*/}
            <div className = "desktop-icon portfolio-icon" onClick={onPortfolioClick}>
                <div className= "icon">📁</div>
                <div className="icon-label">Portfolio</div>
            </div>

            <div className="desktop-icon computer-icon">
                <div className="icon">💻</div>
                <div className="icon-label">My Computer</div>
            </div>

            <div className="desktop-icon recycle-icon">
                <div className="icon">🗑️</div>
                <div className="icon-label">Recycle Bin</div>
            </div>

            {/* Taskbar */}
            <div className="taskbar">
                <div className="start-btn">Start</div>
                <div className="clock">🕒 12:00 PM</div>
            </div>
        </div>
    )
}
export default Desktop;