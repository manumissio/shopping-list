	$(document).ready(function(){
		console.log("jQuery ready!");
		$(".buttons").hide();
		$(".item").hide();
		inputValue();		
		deleteAction();
		doneAction();

	});

	function inputValue() {
		$(".input-form").keypress(function(event){
			console.log("keys are being pressed");
			var value = $(".input-form").val();
				$(".buttons").slideDown("slow", "linear");
				$(".item").slideDown("slow", "linear");			
			if (event.which === 13) {
				console.log("enter key has been pressed");
				$(".item-name").text(value);
			}
		});
	}

	function deleteAction () {
		$(".delete").click(function(){
			console.log("delete event fired.")
			$(".item-name").remove();
		});		
	}

	function doneAction() {
		$(".done").click(function(){
			console.log("done event fired.")
			$(".item-name").toggleClass("strike");
		});		
	}