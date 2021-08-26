$(document).ready(() => {
  var displayValue = "";

  $(".number").click(function () {
    displayValue = displayValue.concat($(this).text());
    $("#calculation").val(displayValue);
  });

  $(".equal").click(function () {
    displayValue = "";
    function operate(operation) {
      return new Function("return " + operation)();
    }

    try {
      $("#calculation").val(operate($("#calculation").val()));
    } catch (error) {
      $("#calculation").val("Error");
      console.log(error);
    }
  });

  //All clear button
  $(".allClear").click(function () {
    displayValue = "";
    $("#calculation").val(0);
  });
});
