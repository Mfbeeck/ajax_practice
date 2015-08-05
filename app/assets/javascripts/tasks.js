// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(function(){
	console.log('document ready');
	// $('body').on('ajax:success','#new_task',function(evt, data) { THIS ALLOWS YOU TO ANCHOR TO THE BODY TAG, SO EVEN IF NEW TASK DISAPPEARS AND REAPPEARS AGAIN, IT CAN HOOK BACK ONTO BODY TAG, YOU HOOK IT ON TO BODY TAG BECAUSE BODY TAG WILL ALWAYS BE THERE
	$('#new_task').on("ajax:success",function(evt, data){
		console.log(arguments);
		if ($('#task_name').val().length > 0){
		// window.location.reload(); this solution is not that great because if you are uploading large info then it will flicker to white (refresh) and the user will notice.
		$('body').append(data);
		$('#task_name').val('');}
		
	});
 });

// $(ready);
// $(document).on('page:load',ready); 
// ABOVE IS THE OLD WAY TO DO WHAT IS BELOW (BUT BELOW DIDNT WORK WITH LINKS ON TASK NAME)
$(document).on('ready page:load', ready); 

// this stuff above makes it so that the document ready fires on every load not just the inital one.
