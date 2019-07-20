import React from 'react'

export default class SmallBox extends React.Component{

    render(){
        let marginR = null
        if(this.props.selected){
            marginR = 135
        }else{
            if(this.props.leftOfSelected){
                marginR=20
            }else{
                marginR= 3
            }
        }

        return (
                    
                        <div  className={this.props.selected?"selected-box ": "small-box"} 
                        style={{marginRight:`${marginR}px`}}
                        >
                            <div className={this.props.selected?"selected-box-border":""}></div>
                            <div className={this.props.selected?"small-box-img-selected": "small-box-img"} style={{backgroundImage:`url("${this.props.img}")`}}></div>
            {/* <div className={this.props.selected?"selected-border": ""}></div> */}
            <div className="selected-box-text" style={{display:this.props.selected?"":"none"}}>
                <div className={`small-box-title-space animated fadeInUp faster `}></div>
                <div className="small-box-title-2">{this.props.title2}</div>
                <div className={`small-box-title animated fadeInUp delay-5s faster `}>{this.props.title}</div>
                            
            
            </div>
            
            </div>
                   
                    
            
            
        )
    }
}