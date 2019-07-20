import React from 'react';
import 'animate.css'
import './components/mainrow.css'
import './App.css';
import vid from './media/psmenubackground.mp4'
import SelectedBox from './components/selectedbox';
import SmallBox from './components/smallbox';
import MainRow from './components/mainrow';
import TopBar from './components/topbar';

class App extends React.Component{
  state={
    time:null
  }
  getTime=()=>{
   let d = new Date();
    let hour = d.getHours()
    let m= "AM"
  if(hour===0){
    hour=12
    m="AM"
  }else{
    hour=hour>11?(hour-12):hour
    m="PM"
  }
 
    let time = `${hour}:${d.getMinutes()<10?`0${d.getMinutes()}`:d.getMinutes()} ${m}`
  this.setState({
    time: time
  })
  }
  
  componentDidMount(){
    this.getTime()
    setInterval(() => {
      this.getTime()
    }, 1000);
  }

  render(){
    return (
      <React.Fragment>

      
      <div className="App">
        <video autoplay="true" muted="true" loop="true" id="video">
  
          <source src={vid} type="video/mp4"/>
        </video>
  
  
        <TopBar 
        notifications={5} 
        clock={this.state.time}
        message="U suck at games i hat u quit campin!!!"
        username="Username"
        img="data:image/jpeg;base64,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"/>
        <MainRow/>
      </div>
      <div style={{color:"white",fontSize:"2em",fontFamily:"psn"}}>Use L and R arrow keys on keyboard to navigate</div>
      </React.Fragment>
    );
  }
  
}

export default App;
