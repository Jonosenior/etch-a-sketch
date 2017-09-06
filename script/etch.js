function main() {  

  var squaresPerLine = $("input").val();
  console.log(squaresPerLine);
  var totalSquares = Math.pow(squaresPerLine, 2);
  var a = $('.grid-square');
  for (i = 0; i < totalSquares; i++) {
      $('<div class="grid-square"></div>').appendTo('.grid-container');
  }
  
  var squareSize = 600 / squaresPerLine;
  $('.grid-square').css("height", squareSize);
  $('.grid-square').css("width", squareSize);  
  
  $('.grid-square').hover(function() {
    var colors = ['#FFB03B', '#B64926', 'tomato',     '#FF8C00', '##FFA500', '#FF7F50',     '#FF4500', '##FFA07A', '##FFA07A', '##FA8072', '#FFA07A'];
    var ranCol = colors[Math.floor(Math.random() *             colors.length)];
    $(this).css('background', ranCol);
  });
  
};
                
$('#reset-button').on('click', function () {
  $('.grid-square').css('background', '#FFF0A5');
});

function reDefine() {
  var newInput = document.querySelector("input");
  newInput.setAttribute("value", $("input").val());
};

function whenInputChanges(event){
  event.preventDefault();
  $('.grid-container').empty();
  reDefine();
  main();
}


  
                      
$(document).ready(main);
$('input').change(whenInputChanges);
$('form').submit(function(event) {
  event.preventDefault();
});