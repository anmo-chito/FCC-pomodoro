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
