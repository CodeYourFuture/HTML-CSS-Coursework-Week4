$(document).ready(function() {
  
  let bodyHeight=$(document).outerHeight()
  let footerHeight=$('#footer-wrapper').outerHeight()
  let bodyWrapperHeight=bodyHeight-footerHeight
  $("#body-wrapper").css('height',`${bodyWrapperHeight}px`)
})