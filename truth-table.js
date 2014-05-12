(function () {
  
  'use strict';
  
  function TruthTable(variables, formula) {
    var noOfVariables = variables.length;
    var noOfCombinations = Math.pow(noOfVariables, 2) - 1;

    this.variables = variables;
    this.formula = formula;

    this.inputs = Array(noOfCombinations);
    for (var row = 0; row < noOfCombinations; row++) {
      this.inputs[row] = Array(noOfVariables);
      combine(this.inputs[row], row);
    }
  }

  function combine(rowInputs, rowNo) {
    var col = rowInputs.length - 1;
    while (rowNo > 0) {
      var remainder = rowNo % 2;
      rowNo = Math.floor(rowNo / 2);
      rowInputs[col] = !remainder;
      col--;
    }
    for (; col > -1; col--) {
      rowInputs[col] = true;
    }
  }

  function reverse() {
    this.inputs.reverse();
    this.outputs.reverse();
    return this;
  }

  window.TruthTable = TruthTable;
  TruthTable.prototype.rInputs = rInputs;

})();