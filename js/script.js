var todoApp = ( function(){

	var todos = new Array; 

	function init(config)
	{
		console.log("initializing");
		$.getJSON("todos.json", loadTodos)
		loadTodos(); 
	}

	function loadTodos(data)
	{
		data.forEach(function(datum){
			todos.push(new todo(datum.id, datum.content)); 
		});

		console.log(todos); 
	}

	return { 
		init : init 
	}

})();

var todo = function(id, content){
	var template;
	this.id = id;
	this.content = content; 
}

$(document).ready(function(){
	todoApp.init(); 	
})
