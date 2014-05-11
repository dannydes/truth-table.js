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
    var binValue = decimalToBinary(rowNo);
    var lengthDiff = rowInputs.length - binValue.length;
    for (var count = 0; count < lengthDiff; count++) {
      binValue = '0' + binValue;
    }
    for (var col = 0; col < rowInputs.length; col++) {
      rowInputs[col] = (binValue[col] === '0');
    }
  }
  
  function decimalToBinary(decimal) {
    var remainder = decimal % 2;
    decimal /= 2;
    return decimal >= 1 ? decimalToBinary(Math.floor(decimal)) + '' + remainder : remainder + '';
  }

  function rInputs() {
    return this.inputs.reverse();
  }

  window.TruthTable = TruthTable;
  TruthTable.prototype.rInputs = rInputs;

})();