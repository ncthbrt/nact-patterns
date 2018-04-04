// Generated by BUCKLESCRIPT VERSION 2.2.3, PLEASE EDIT WITH CARE
'use strict';

var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Caml_int32 = require("bs-platform/lib/js/caml_int32.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");

function isInArray(value, arr) {
  return Belt_Array.some(arr, (function (v) {
                return Caml_obj.caml_equal(v, value);
              }));
}

function isInInterval(value, start, end_, step) {
  if (Caml_int32.mod_(value - start | 0, step) === 0) {
    return +(value <= end_);
  } else {
    return /* false */0;
  }
}

function isInYear(currentYear, param) {
  if (typeof param === "number") {
    return /* true */1;
  } else if (param[0] >= 72054786) {
    return isInArray(currentYear, param[1]);
  } else {
    var match = param[1];
    var match$1 = match[0];
    if (match$1) {
      var match$2 = match[1];
      var start = match$1[0];
      if (match$2) {
        return isInInterval(currentYear, start, match$2[0], match[2]);
      } else {
        return isInInterval(currentYear, start, Pervasives.max_int, match[2]);
      }
    } else {
      var match$3 = match[1];
      if (match$3) {
        return isInInterval(currentYear, 0, match$3[0], match[2]);
      } else {
        return isInInterval(currentYear, 0, Pervasives.max_int, match[2]);
      }
    }
  }
}

function isInExpr(current, param) {
  if (typeof param === "number") {
    return /* true */1;
  } else if (param[0] >= 72054786) {
    return isInArray(current, param[1]);
  } else {
    var match = param[1];
    return isInInterval(current, match[0], match[1], match[2]);
  }
}

function isInDayOfWeek(dayOfMonth, dayOfWeek, daysInMonth, expr) {
  if (typeof expr === "number") {
    return isInExpr(dayOfWeek, expr);
  } else {
    var variant = expr[0];
    if (variant !== -339304170) {
      if (variant >= -1029051829) {
        return isInExpr(dayOfWeek, expr);
      } else if (dayOfWeek === expr[1]) {
        return +((dayOfMonth + 7 | 0) > daysInMonth);
      } else {
        return /* false */0;
      }
    } else {
      var match = expr[1];
      var dayOfWeek$1 = match[0];
      if (Caml_obj.caml_equal(dayOfWeek$1, dayOfWeek$1)) {
        return +(((dayOfMonth / 7 | 0) + 1 | 0) === match[1]);
      } else {
        return /* false */0;
      }
    }
  }
}

function isInDayOfMonth(dayOfMonth, dayOfWeek, daysInMonth, expr) {
  if (typeof expr === "number") {
    if (expr >= 46765562) {
      return isInExpr(dayOfMonth, expr);
    } else {
      var currentDayOfMonth = dayOfMonth;
      var daysInMonth$1 = daysInMonth;
      var currentDayOfWeek = dayOfWeek;
      var daysInMonthRemaining = daysInMonth$1 - currentDayOfMonth | 0;
      var dayOfWeekAtMonthEnd = (currentDayOfWeek + daysInMonthRemaining | 0) % 7;
      var daysFromMonthEndToNearestWeekday = dayOfWeekAtMonthEnd !== 0 ? (
          dayOfWeekAtMonthEnd !== 6 ? 0 : 1
        ) : 2;
      var dayOfMonthOfLastWeekday = daysInMonth$1 - daysFromMonthEndToNearestWeekday | 0;
      return +(currentDayOfMonth === dayOfMonthOfLastWeekday);
    }
  } else {
    var variant = expr[0];
    if (variant !== 525980234) {
      if (variant >= 1044297284) {
        return +((daysInMonth - dayOfMonth | 0) === expr[1]);
      } else {
        return isInExpr(dayOfMonth, expr);
      }
    } else {
      var currentDayOfMonth$1 = dayOfMonth;
      var daysInMonth$2 = daysInMonth;
      var scheduledDayOfMonth = expr[1];
      var currentDayOfWeek$1 = dayOfWeek;
      var dayOfWeekOfScheduledDay = ((currentDayOfWeek$1 + (scheduledDayOfMonth - currentDayOfMonth$1 | 0) | 0) + 7 | 0) % 7;
      var daysInMonthRemaining$1 = daysInMonth$2 - scheduledDayOfMonth | 0;
      var daysToNearestWeekdayFromScheduledDay;
      if (dayOfWeekOfScheduledDay !== 0) {
        daysToNearestWeekdayFromScheduledDay = dayOfWeekOfScheduledDay !== 6 ? 0 : -1;
      } else {
        var match = +(daysInMonthRemaining$1 >= 1);
        daysToNearestWeekdayFromScheduledDay = match !== 0 ? 1 : -2;
      }
      return +((daysToNearestWeekdayFromScheduledDay + scheduledDayOfMonth | 0) === currentDayOfMonth$1);
    }
  }
}

var isInMinute = isInExpr;

var isInHour = isInExpr;

var isInMonth = isInExpr;

exports.isInYear = isInYear;
exports.isInMinute = isInMinute;
exports.isInHour = isInHour;
exports.isInMonth = isInMonth;
exports.isInDayOfWeek = isInDayOfWeek;
exports.isInDayOfMonth = isInDayOfMonth;
/* No side effect */
