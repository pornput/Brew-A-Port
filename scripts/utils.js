// Listen and format number inputs
// - with comma separator
// - with max 2 fraction digits

$(".bap-inp-num, .bap-inp-num-6").on('keyup', function(evt) {

  let key = evt.key;

  if (key >= '0' && key <= '9') {
  // if (!(code == 110 || code == 190 || code == 229)) {

    // Get minimum fraction digits
    let mfd = 0;
    if ($(this).val().includes(".")) {
      mfd = $(this).val().length - $(this).val().indexOf(".") - 1;
    }
    if (mfd > 2) {
      mfd = 2;
    }

    let d = parseFloat($(this).val().replace(/,/g, ""));
    if (isNaN(d)) {
      $(this).val("");
    } else {
      $(this).val(d.toLocaleString(undefined, {
        minimumFractionDigits: mfd,
        maximumFractionDigits: 2}));
    }
  }
});
