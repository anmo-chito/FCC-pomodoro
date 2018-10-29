class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      minute : 0,
      second : 0,
      running : false
    }
  }
  componentDidMount(){
    this.setState({
      minute : this.props.data.minutes
    });
  }
  
  startTimer(){
    timer = setInterval(()=>{
      let seconds = this.state.second;
      if(seconds <=0){
        this.setState({
          minute : this.state.minute - 1,
          second : 59
        })
      }else{
        this.setState({
          second : seconds - 1
        });
      }
    },1000);
    this.setState({
      running : true
    });
  }
  stopTimer(){
    clearInterval(timer);
    this.setState({
      running : false
    });
  }
  stopHandler(){
    this.stopTimer();
  }
  startHandler(){
    if(!this.state.running && (this.state.minute >0 || this.state.second >0)){
      this.startTimer();
    }
  }
  resetHandler(){
    this.setState({
      minute : 0,
      second : 0
    })
    this.stopTimer();
  }
  formateTime(time){
      return time > 9 ? "" + time: "0" + time;
  }
  render(){
    return(
      <div>
        <h3>{this.props.name} clock</h3>
        <h1>{this.formateTime(this.state.minute)}:{this.formateTime(this.state.second)}</h1>
        <button onClick= {this.startHandler.bind(this)}>Start</button>
        <button onClick= {this.stopHandler.bind(this)}>Stop</button>
        <button onClick= {this.resetHandler.bind(this)}>Reset</button>
      </div>
    );
  }
  
}
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      Break : {
        minutes : 1
      },
      Session : {
        minutes : 1
      }
    }
  }
  onChange(value,changedParam){
    if(changedParam == "Break"){
        this.setState({
          Break:{
            minutes : value
          }
        });
    }
      if(changedParam=="Session"){
        this.setState({
          Session:{
            minutes : value
          }
        });
    }
  }
  render(){
    return (
      <div>
        <h3>Poromodo Clock</h3>
        <Sections name = {'Break'} data = {this.state.Break} change = {this.onChange.bind(this)} />
        <Sections name = {'Session'} data = {this.state.Session} change = {this.onChange.bind(this)} />
        <Clock name ={'Session'} data = {state}/>
      </div>
    );
  }
}

ReactDOM.render(<App/>,document.getElementById('root'));
