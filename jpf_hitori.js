"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Review Assignment

   Author: 
   Date:   

   Global Variables
   ================
   
   allCells
      References the TD cells within the Hitori table grid.   
      
   Function List
   =============

   startUp()
      Run when the web page is loaded; displays puzzle 1
      and loads the event handlers for the web page buttons.
      
   setupPuzzle()
      Sets up a new puzzle, adding the event handlers for
      every puzzle cell.      

   switchPuzzle(e)
      Swaps one puzzle for another based on the button being clicked
      by the user. Confirms the change before swapping in the
      new puzzle.

   findErrors()
      Highlights the errors in the Hitori puzzle in a red font.
      
   showSolution()
      Shows the solution to the Hitori puzzle
    
   checkSolution()
      Checks the current user's puzzle to verify whether it contains
      the complete and correct solution.

   drawHitori(numbers, blocks, rating)
      Returns a text string of the HTML code to
      display a Hitori puzzle table based on the contents of
      the numbers, blocks, and rating parameters.
	
*/

var allCells;

startUp();
function startUp(){
   document.getElementById("puzzleTitle").innerHTML = "puzzle1";
   




}

function drawHitori(hitori1Numbers, hitori1Blocks, hitori1Rating ){
   document.getElementById("puzzleTitle").innerHTML = "puzzle";

   var puzzleButtons = document.getElementsByClassName("puzzles");

   for (var i = 0; i < puzzleButtons.length; i++){
      puzzleButtons[i].onclick = switchPuzzle();
   }

}


function setupPuzzle(){

   for (var i = 0; i < puzzleButtons.length; i++){
      puzzleButtons[i].onclick = switchPuzzle();
   }
   document.getElementById("check").addEventListener("click")
   document.getElementById("show").addEventListener("click")
   var filled = document.querySelectorAll("table#hitoriGrid td.filled");

   for(var i = 0; i < filled.length; i ++){
      if(filled[i].style.backgroundColor === "rgb(255, 255, 255)");
      (filled[i].style.fontColor === "rgb(0, 0, 0)");
      (filled[i].style.border-borderRadius === "0");
   }
            puzzleCells[i].onmousedown = setBackground;

            puzzleCells[i].style.cursor = "url(jpf_eraser.png)";
            puzzleCells[i].style.cursor = "url(jpf_block.png)";
            puzzleCells[i].style.cursor = "url(jpf_circle.png)";


      }


   

function switchPuzzle(e){
   var puzzleID = e.target.id;
   if(confirm("your will lose all of your work on the puzzle: continue?")){
   document.getElementById("puzzleTitle").innerHTML = puzzleTitle;
   switch(puzzleID){
      case "puzzle1":
         document.getElementById("puzzle").innerHTML = drawPuzzle(puzzle1);
         break;
      case "puzzle2":
         document.getElementById("puzzle").innerHTML = drawPuzzle(puzzle2);
         break;
      case "puzzle3":
         document.getElementById("puzzle").innerHTML = drawPuzzle(puzzle3);
         break;
   }
   setupPuzzle();

}
}



         
/* ================================================================= */

function checkSolution() {
   /* Set the initial solved state of the puzzle to true */
   var solved = true;

   /* Loop through the puzzle cells, exiting when an incorrect
      cell is found, setting the solved variable to false */

   for (var i = 0; i < allCells.length; i++) {
      var cellColor = allCells[i].style.backgroundColor;
      var cellClass = allCells[i].className;

      /* A cell is incorrect if it is in the block class and is not black
         or in the circle class and is not white */
      if ( (cellClass == "blocks" && cellColor !== "black") || 
           (cellClass == "circles" && cellColor !== "rgb(101, 101, 101)")) {
         solved = false;
         break;
      }
   }

   /* If solved is still true after the loop, display an alert box */
   if (solved) alert("Congratulations! You solved the puzzle!");
}

function showSolution () {
   for (var i = 0; i < allCells.length; i++) {
      allCells[i].style.color = "";
      allCells[i].style.backgroundColor = "";
      allCells[i].style.borderRadius = "";
   };   
}

function drawHitori(numbers, blocks, rating) {

   /* Initial HTML String for the Hitori Puzzle */
   var htmlString = "";

   /* numbers is a multidimensional array containing the
      Hitori numbers; blocks is a corresponding 
      multidimensional array containing the location of the
      blocks which are indicated by the # character.
      Non-blocking cells are indicated by a blank character.
  */

   /* Create a Web table with the id, hitoriGrid, containing
      the numeric values. Blocks cells have the class name,
      blocks. Non-blocking cells have the class name, circles
  */

   var totalRows = numbers.length;
   var totalCols = numbers[0].length;
   htmlString = "<table id='hitoriGrid'>";
   htmlString += "<caption>" + rating + "</caption>";
   

   for (var i = 0; i < totalRows; i++) {
      htmlString += "<tr>";

      for (var j = 0; j < totalCols; j++) {
         if (blocks[i][j] == "#") htmlString += "<td  class='blocks'>"
         else htmlString += "<td class='circles'>";

         htmlString += numbers[i][j];
         htmlString +="</td>";
      }

      htmlString += "</tr>";
   }

   htmlString += "</table>";

   return htmlString;
}