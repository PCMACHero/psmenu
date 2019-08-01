import React from 'react'

import psPlus from '../../src/media/i-psplus.png'
import psNotifications from '../../src/media/i-notifications.png'
import psfriends from '../../src/media/i-psfriends.png'

export default class TopBar extends React.Component{
    render(){
        return (
            <div className="top-bar bar-text" style={{height:"19.4%", width:"100%", display:"flex", justifyContent: "flex-start", alignItems:"center"}}>
                <div className="top-icon psplus" style={{backgroundImage:`url("${psPlus}")`, marginLeft:"5vw"}}></div>
                <div className=" notifications" style={{ marginLeft:"3vw", display:"flex", justifyContent:"center",alignItems:"center", flexDirection:"column"}}>
                    <div className="notification-number " style={{fontSize:"1vw", position:"absolute",top:"2.864583333333333vw", textShadow:"0px 0px 0.4166666666666667vw white, 0px 0px 0.4166666666666667vw white, 0px 0px 0.4166666666666667vw white"}}>{this.props.notifications}</div>
                    <div className="notification-img top-icon" style={{backgroundImage:`url("${psNotifications}")`}}></div>
                </div>
                <div className="notification-message" style={{fontSize:"1.4vw", marginLeft:"0.7291666666666666vw", width:"25vw", textAlign:"left"}}>{this.props.message}</div>
                <div className="top-icon psfriends" style={{backgroundImage:`url("${psfriends}")`, marginLeft:"0%"}}></div>
                <div className=" user" style={{display:"flex",justifyConent:"center", alignItems:"center", marginLeft:"5%"}}>
                    <div className=" user-img" style={{height:"2.083333333333333vw", width:"2.083333333333333vw",backgroundSize:"cover",backgroundImage:`url("${this.props.img}")`, marginLeft:"0%"}}></div>
                    <div className="username" style={{fontSize:"1.4vw", marginLeft:"2.8125vw", position:"absolute"}}>{this.props.username}</div>
                </div>
                <div className="clock" style={{fontSize:"1.8vw", marginLeft:"40%", color:"white", fontWeight:"200" }}>{this.props.clock}</div>

            </div>
        )
    }
}