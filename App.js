class Sessions extends React.Component{
  changeCalled(value,change){
    if(value == "inc"){
      this.props.change(this.props.data.minutes+1, change);
    }
    else{
      let newVal = this.props.data.minutes-1 >1 ? this.props.data.minutes-1 : 1
      this.props.change(newVal, change);
    }
  }
  formateTime(time){
      return time > 9 ? "" + time: "0" + time;
  }
  render(){
    return (
      <div>
        <h3>{this.props.name} Length</h3>
        <br/>
        <button onClick = {this.changeCalled.bind(this,'dec',this.props.name)}>-</button>
         {this.formateTime(this.props.data.minutes)} 
        <button onClick = {this.changeCalled.bind(this,'inc',this.props.name)}>+</button>
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
      </div>
    );
  }
}

ReactDOM.render(<App/>,document.getElementById('root'));
