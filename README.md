# React Emitter

   A simple React Emitter using Window Objects to communicate between React Components.
   http://prakashchokalingam.github.io/react-emitter

## Usage :
   To create new Emitter :

       ReactEmitter.set( EmitterName , EmitterFunction )

EmitterName : The name which is used to call while invoke.
EmitterFunction : The function to be invoke when the corresponding ReactEmitter called.

   To call an Emitter :

      ReactEmitter.call( EmitterName )()

   If the function has arguments,

       ReactEmitter.call( EmitterName )(...arguments)


   To delete an Emitter :

       ReactEmitter.delete( EmitterName )

## Example :
   Consider there is two Independent React Components namely InputComponent,TodoList , And the TodoList component requires data from InputComponent while there ReactEmitter acts as bridge of communication between these Components.

          // Input Component
           var InputComponent = React.createClass({
             sendInput:function(e){
               // this function sends value to the TodoList Component via ReactEmitter
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

## Features :

          Light weight (12 lines unminified )
          Easy to Implement
