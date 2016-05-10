(function() {

  return {
    events: {
      'app.activated':'doSomething',
      'click #buttonsubmit':'getTime',

    },

    doSomething: function() {
    	this.switchTo('dateinput');
    	console.log("doSomething ran!");

    },

    getTime: function() {
    	var timeField = this.$('#datedata').val();
    	console.log(timeField);
    	console.log("getTime ran!");
    }

  };

}());
