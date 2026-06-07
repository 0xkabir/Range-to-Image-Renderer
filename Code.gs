function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('📷 Range2Image')
    .addItem('Convert Selection to Image', 'showRangePreview')
    .addToUi();
}

function showRangePreview() {
  var html = HtmlService.createHtmlOutputFromFile('Preview')
    .setWidth(740)
    .setHeight(520)
    .setSandboxMode(HtmlService.SandboxMode.IFRAME);
  SpreadsheetApp.getUi().showModalDialog(html, '📷 Range to Image');
}

function getRangeData() {
  var sheet    = SpreadsheetApp.getActiveSheet();
  var range    = sheet.getActiveRange();
  var startCol = range.getColumn();
  var startRow = range.getRow();
  var numCols  = range.getNumColumns();
  var numRows  = range.getNumRows();

  var colWidths = [], rowHeights = [];
  for (var c = 0; c < numCols; c++) colWidths.push(sheet.getColumnWidth(startCol + c));
  for (var r = 0; r < numRows; r++) rowHeights.push(sheet.getRowHeight(startRow + r));

  var merges = [];
  var rangeMerges = range.getMergedRanges();
  for (var m = 0; m < rangeMerges.length; m++) {
    var mr = rangeMerges[m];
    merges.push({
      row:     mr.getRow()        - startRow,
      col:     mr.getColumn()     - startCol,
      rowSpan: mr.getNumRows(),
      colSpan: mr.getNumColumns()
    });
  }

  return {
    values:      range.getDisplayValues(),   // ← formatted: %, decimals, dates, currency
    backgrounds: range.getBackgrounds(),
    fontColors:  range.getFontColors(),
    fontWeights: range.getFontWeights(),
    fontStyles:  range.getFontStyles(),
    fontSizes:   range.getFontSizes(),
    hAlignments: range.getHorizontalAlignments(),
    vAlignments: range.getVerticalAlignments(),
    wraps:       range.getWraps(),
    colWidths:   colWidths,
    rowHeights:  rowHeights,
    merges:      merges,
    rangeA1:     range.getA1Notation(),
    sheetName:   sheet.getName(),
    numRows:     numRows,
    numCols:     numCols
  };
}