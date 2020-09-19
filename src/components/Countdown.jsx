import React from 'react';
import Clock from './Clock';
import CountdownForm from './CountdownForm';

class Countdown extends React.Component {
    constructor(){
        super();
        this.state={ seconds:0};
        this.timer=0;
        this.startTimer=this.startTimer.bind(this);
        this.countdown=this.countdown.bind(this);
       this.value=0;
        
    }
    componentDidMount=()=>{
      console.log('value',this.state.seconds);
    }
    startTimer=(seconds)=>{
        this.setState({seconds:seconds})

        if(this.timer===0 && this.state.seconds>0){
            this.timer=setInterval(this.countdown,1000)
        }
    }
    countdown=()=>{
        this.value=this.state.seconds;
        let seconds=this.state.seconds-1;
        this.value=seconds;
        
        this.setState({seconds:seconds})
        if(seconds===0){
            clearInterval(this.timer)
        }

    }
    render() {
        return (
            <div>
                <Clock timeInSeconds={this.value}/>
                <CountdownForm onSetCountdownTime={this.startTimer}/>
            </div>
        );
    }
}
export default Countdown;