import React from 'react'

import psPlus from '../../src/media/i-psplus.png'
import psNotifications from '../../src/media/i-notifications.png'
import psfriends from '../../src/media/i-psfriends.png'

export default class TopBar extends React.Component{
    render(){
        return (
            <div className="top-bar bar-text" style={{height:"19.4%", width:"100%", display:"flex", justifyContent: "flex-start", alignItems:"center"}}>
                <div className="top-icon psplus" style={{backgroundImage:`url("${psPlus}")`, marginLeft:"5%"}}></div>
                <div className=" notifications" style={{ marginLeft:"3%", display:"flex", justifyContent:"center",alignItems:"center", flexDirection:"column"}}>
                    <div className="notification-number " style={{fontSize:"1.4em", position:"absolute",top:"55px", textShadow:"0px 0px 8px white, 0px 0px 8px white, 0px 0px 8px white"}}>{this.props.notifications}</div>
                    <div className="notification-img top-icon" style={{backgroundImage:`url("${psNotifications}")`}}></div>
                </div>
                <div className="notification-message" style={{fontSize:"2em", marginLeft:"14px", width:"480px", textAlign:"left"}}>{this.props.message}</div>
                <div className="top-icon psfriends" style={{backgroundImage:`url("${psfriends}")`, marginLeft:"0%"}}></div>
                <div className=" user" style={{display:"flex",justifyConent:"center", alignItems:"center", marginLeft:"5%"}}>
                    <div className=" user-img" style={{height:"40px", width:"40px",backgroundSize:"cover",backgroundImage:`url("${this.props.img}")`, marginLeft:"0%"}}></div>
                    <div className="username" style={{fontSize:"2em", marginLeft:"54px", position:"absolute"}}>{this.props.username}</div>
                </div>
                <div className="clock" style={{fontSize:"2.3em", marginLeft:"40%", color:"white", fontWeight:"200" }}>{this.props.clock}</div>

            </div>
        )
    }
}