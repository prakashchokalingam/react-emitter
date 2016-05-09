// author : Prakash Chokalingam
// facebook.com/prakashchokalingam
// To enable global react listner
// ### Do Communications between React Components easily
window.ReactEmitter = {};
var ReactEmitter = {
   set : function(EmitterName,EmitterFunction){
       window.ReactEmitter[EmitterName] = EmitterFunction ;
   },
   call : function(EmitterName){
     return window.ReactEmitter[EmitterName];
   },
   delete : function(EmitterName){
     delete window.ReactEmitter[EmitterName];
   }
};
