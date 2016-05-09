// Input Component
 var InputComponent = React.createClass({
   sendInput:function(e){
     // this function sends value from the TodoList Component via ReactEmitter
      ReactEmitter.call("getInput")(e.target.value);
      e.target.value="";
   },
    render:function(){
      return (
        <input type="text" placeholder="Enter Todo's" onBlur={this.sendInput} />
      );
    }
 });

//  todo list
var TodoList = React.createClass({
  getInitialState : function(){
    return {lists:[]};
  },
  componentDidMount : function(){
    // setting an emitter
    ReactEmitter.set("getInput",this.getInput)
  },
  getInput : function(inputValue){
    // this function gets value from the InputComponent via ReactEmitter
    this.state.lists.push(inputValue);
    this.setState({
      lists:this.state.lists
    });
  },
  render: function(){
    var lists = this.state.lists.map(function(list,key){
         return (
           <li key={key}>{list}</li>
         );
    });
    return (
      <ul>{lists}</ul>
    )
  }
});

// rendering components
 ReactDOM.render(<InputComponent />,document.getElementById('TodoInput'));
 ReactDOM.render(<TodoList />,document.getElementById('TodoLists'));
