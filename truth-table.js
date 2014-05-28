(function () {
  
  'use strict';
  
  function TruthTable(formula) {
    this.variables = parseFormula(formula).variables;
    
    var noOfVariables = this.variables.length;
    var noOfCombinations = Math.pow(2, noOfVariables);
    
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
  
  function parseFormula(formula) {
    var match;
    var varPattern = /\w/g;
    var andPattern = /\(\S+\)/g;
    var variables = [];
    
    while (match = varPattern.exec(formula)) {
      if (variables.indexOf(match[0]) === -1) {
        variables.push(match[0]);
      }
    }
    
    return {
      variables: variables
    };
  }

  window.TruthTable = TruthTable;
  TruthTable.prototype.reverse = reverse;

})();