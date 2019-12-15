$(document).ready(() => {
  $(".collapse-btn").click(function(event){
    if(event.currentTarget.attributes[0].value == 'false'){
      $(this).html('Hide')
    } else {
      $(this).html('Show')
    }
  })
})