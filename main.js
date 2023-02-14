
const OVERFLOW = $('#toggle1');

OVERFLOW.click(e => e.target.checked ? $("body").css("overflow-y", "hidden") : $("body").css("overflow-y", "auto"));