import React from 'react'
import psnBtns from '../media/i-psbtns.png'
import store from '../media/i-psstore.png'

import news from '../media/g-new.png'
import vue from '../media/g-vue.png'
import tv from '../media/g-tv.png'
import video from '../media/g-video.png'
import detroit from '../media/g-detroit.png'
import ghost from '../media/g-ghost.png'
import bo4 from '../media/g-bo4.png'
import live from '../media/g-live.png'



import SmallBox from './smallbox';

export default class MainRow extends React.Component{
    state={
        selected:0,
        pixelsToSlide: 0,
        arrow:null
    }

    boxes=[
        {
            title:"PlayStation Store",
            title2:"Start",
            img: store

        },
        {
            title:"What's New",
            title2:"Start",
            img: news
        },
        {
            title:"PlayStation™ Vue",
            title2:"Start",
            img: vue
        },
        {
            title:"TV & Video",
            title2:"Start",
            img: tv
        },
        {
            title:"Detroit: Become Human™",
            title2:"Start",
            img: detroit
        },
        {
            title:"Call of Duty®: Ghosts",
            title2:"Start",
            img: ghost
        },
        {
            title:"Call of Duty®: Black Ops 4",
            title2:"Start",
            img: bo4
        },
        {
            title:"Live from Playstation",
            title2:"Start",
            img: live
        }
    ]

    smallBoxWidth=null
    keyPress=(e)=>{
        
        console.log("key pressed", e.key)
        if(e.key==="ArrowRight"){
            if(this.state.selected===this.boxes.length-1){
                return
            }
            this.setState({
                selected: this.state.selected + 1
            },()=>{
                this.slide(this.smallBoxWidth, "r")
            })
        }
        if(e.key==="ArrowLeft"){
            if(this.state.selected===0){
                return
            }else{
                this.setState({
                    selected: this.state.selected - 1
                },()=>{
                    this.slide(this.smallBoxWidth, "l")
                })
            }
            
        }
        
    }

    slide=(px, direction)=>{
        px += 5
        if(direction==="r"){
            this.setState({
                        pixelsToSlide: this.state.pixelsToSlide + px,
                        arrow:"r"
                    })
               
        }else{
            this.setState({
                        pixelsToSlide: this.state.pixelsToSlide - px,
                        arrow:"l"
                    })
               
            }
            
        }
        
    

    componentDidMount(){
        this.smallBoxWidth = document.getElementsByClassName("small-box")[0].offsetWidth
        console.log("my small boxes", this.smallBoxWidth)
        window.addEventListener("keyup", this.keyPress)

        
        
    }

    render(){
        return (
            <div 
            
            className="main-row" style={{transform: `translateX(-${this.state.pixelsToSlide}px)`, transition:"300ms ease-out"}}>
                {this.boxes.map((e,i)=>
                    <SmallBox 
                    key={i} 
                    title={e.title} 
                    title2={e.title2} 
                    selected={this.state.selected===i} 
                    leftOfSelected={this.state.selected===i+1} 
                    img={e.img}
                    />
                )}
                {/* <SmallBox title2="Start" title="PlayStation Store" selected={this.state.selected===0} leftOfSelected={this.state.selected==1} img={store}/>
                <SmallBox title2="Start" title="What's New" selected={this.state.selected===1} leftOfSelected={this.state.selected==2} img={news}/>
                <SmallBox title2="Start" title="PlayStation™ Vue" selected={this.state.selected===2} leftOfSelected={this.state.selected==3} img={vue}/>
                <SmallBox title2="Start" title="TV & Video" selected={this.state.selected===3} leftOfSelected={this.state.selected==4} img={tv}/>
                <SmallBox title2="Start" title="Detroit: Become Human™" selected={this.state.selected===4} leftOfSelected={this.state.selected==5} img={detroit}/>
                <SmallBox title2="Start" title="Call of Duty®: Ghosts" selected={this.state.selected===5} leftOfSelected={this.state.selected==6} img={ghost}/>
                <SmallBox title2="Start" title="Call of Duty®: Black Ops 4" selected={this.state.selected===6} leftOfSelected={this.state.selected==7} img={bo4}/>
                <SmallBox title2="Start" title="Live from Playstation" selected={this.state.selected===7} leftOfSelected={this.state.selected==8} img={live}/> */}
            </div>
        )
    }
}