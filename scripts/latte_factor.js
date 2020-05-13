function projectPortValue() {

  // Read and validate intputs

  let monthlySaving = parseFloat($("#monthly-saving").val().replace(/,/g, ""));
  let years = parseFloat($("#years").val().replace(/,/g, ""));
  let cagr = parseFloat($("#cagr-percentage").val().replace(/,/g, "")) / 100.0;

  // Validate inputs

  if (isNaN(monthlySaving) || monthlySaving < 0.0 || monthlySaving > 1000000.0) {
    alert("Please enter saving per month between 0 to 1,000,000.")
    return;
  }

  if (isNaN(years) || years < 0.0 || years > 100.0 ) { // may ensure integer later?
    alert("Please enter number of years between 0 to 100.")
    return;
  }

  if (isNaN(cagr) || cagr < 0.0 || cagr > 1.0 ) {
    alert("Please enter annual return (%) between 0 to 100.")
    return;
  }

  // Animate to output section

  $('html, body').animate(
    {
      scrollTop: $('#latte-result').offset().top - 56,
    },
    500
  );

  // Calculation

  var projectedPortValue = 0.0;
  var investAmount = 0.0;

  for (var i = 1; i <= (12 * years); i++) {
    projectedPortValue += (monthlySaving * Math.pow(1.0 + cagr, years - i/12));
    investAmount += monthlySaving;
  }

  // Output

  var investProfit = projectedPortValue - investAmount;
  var investReturn = projectedPortValue/investAmount - 1.0;
  var f = new Intl.NumberFormat();

  $("#out-projected-port-value").text(f.format(Math.round(projectedPortValue)));

  $("#out-investment-amount").text(f.format(Math.round(investAmount)));
  $("#out-investment-profit").text(f.format(Math.round(investProfit)));

  $("#out-monthly-saving").text(f.format(monthlySaving));
  $("#out-years").text(f.format(years));
  $("#out-cagr-percentage").text(f.format(cagr * 100));

  // Show picture and color H1

  $(".bap-dis-off").removeClass("bap-dis-off");
  $("#out-projected-port-value").addClass("bap-txc-1");
}
