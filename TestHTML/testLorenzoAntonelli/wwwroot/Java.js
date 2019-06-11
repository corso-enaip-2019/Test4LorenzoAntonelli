var totalRows = 6;
var cellsInRow = 6;
    function drawTable() {
        //riferimento
        var div1 = document.getElementById('div1');
 
        // crea elemento <table> 
        var tbl = document.createElement("table");
 
             // crea rows
             for (var i = 0; i < totalRows; i++) {
            var row = document.createElement("tr");
	     
	         // crea cells in row
             for (var n = 0; n < cellsInRow; n++) {
                var cell = document.createElement("td");
		
                // var cellText = document.createTextNode("0");
                // cell.appendChild(cellText);
                row.appendChild(cell);
            }           
            
	tbl.appendChild(row);
        }
    
     div1.appendChild(tbl); 
}
 window.onload=drawTable; 

//   function btnClick() {
//     var d = document.getElementById("table").getElementsByTagName("td");
//     x[0].innerHTML = "i want to change my cell color";
//     x[0].style.backgroundColor = "yellow";    
//   }        


// class cell{
//      x = document.getElementById("table").rows[0].cells.length;
//     setStateOccupied();
//     setStateFree();
//     isOccupied();
// }