import React from 'react'

import onlineIcon from '../../icons/onlineIcon.png'
import closeIcon from '../../icons/closeIcon.png'

import './InfoBar.css'

const InfoBar = ({ thon }) => (
    <div className="infoBar">
        <div className="leftInnerCotainer">
            <img className="onlineIcon" src={onlineIcon} alt="online icon" />
            <h3>{thon}</h3>
        </div>
        <div className="rightInnerContainer">
            <a href="/"><img src={closeIcon} alt="close icon" /></a>
        </div>
  </div>
)
export default InfoBar