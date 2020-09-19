import React from 'react';

class CountdownForm extends React.Component {

   

     onSubmit(e) {
       //This will give you string for seconds. Do not remove refs
        var secondsStr = this.refs.seconds.value;
        this.props.onSetCountdownTime(secondsStr)
        e.preventDefault();
    }
    render() {
       
        return (
            <div>
                <form ref="form" onSubmit={this.onSubmit.bind(this)} className="countdown-form">
                    <input type="text" ref="seconds" placeholder="Enter time in seconds" onChange={this.handleinput}  / >
                    <input type="submit" className="button success expanded" value="Start Countdown"/>
                </form>
            </div>
        );
    }
}

export default CountdownForm;