let path = "php/";
let caseNumArr = [];
// let cityArr = ["台中市", "台中市", "台北市", "台北市", "台北市", "台北市", "南投縣", "南投縣", "高雄市", "高雄市"]; 
let cityArr = [];
let arrayCode = [];
let cityCaseArr = [];

function notice() {
  $.ajax({
    url: path + "api-notice.php",
    type: "GET",
    dataType: "html",
    async: false,
    success: function (data) {

      scriptParse = $(data).filter('script')[1];
      strSrc = $(scriptParse).html().toString();

      var rex = /(\\x7b\\x22view).*(\\x7d\\x7d)/gmi;
      matchStr = strSrc.match(rex)[0];
      decodeStr = JSON.parse(decode(matchStr));

      return decodeStr;
    },
    error: function (data) {
      console.log(data);
    },
    complete: function (data) {
      // console.log(data);
      return decodeStr;
    }
  });
  return decodeStr;
}

function inspect() {
  $.ajax({
    url: path + "api-inspect.php",
    type: "GET",
    dataType: "html",
    async: false,
    success: function (data) {
      // console.log(data);
      data = data;
      scriptParse = $(data).filter('script')[1];
      strSrc = $(scriptParse).html().toString();

      var rex = /(\\x7b\\x22view).*(\\x7d\\x7d)/gmi;
      matchStr = strSrc.match(rex)[0];
      decodeStr = JSON.parse(decode(matchStr));
      // console.log(decodeStr);
    },
    error: function (data) {
      console.log(data);
    },
    complete: function () {
      return decodeStr;
    }
  });
  return decodeStr;
}

function exclude() {
  $.ajax({
    url: path + "api-exclude.php",
    type: "GET",
    dataType: "html",
    async: false,
    success: function (data) {
      // console.log(data);
      data = data;
      scriptParse = $(data).filter('script')[1];
      strSrc = $(scriptParse).html().toString();

      var rex = /(\\x7b\\x22view).*(\\x7d\\x7d)/gmi;
      matchStr = strSrc.match(rex)[0];
      decodeStr = JSON.parse(decode(matchStr));
      // console.log(decodeStr);
    },
    error: function (data) {
      console.log(data);
    },
    complete: function () {
      return decodeStr;
    }
  });
  return decodeStr;
}

function diagnose() {
  $.ajax({
    url: path + "api-diagnose.php",
    type: "GET",
    dataType: "html",
    async: false,
    success: function (data) {
      // console.log(data);
      data = data;
      scriptParse = $(data).filter('script')[1];
      strSrc = $(scriptParse).html().toString();

      var rex = /(\\x7b\\x22view).*(\\x7d\\x7d)/gmi;
      matchStr = strSrc.match(rex)[0];
      decodeStr = JSON.parse(decode(matchStr));
      // console.log(decodeStr);
    },
    error: function (data) {
      console.log(data);
    },
    complete: function () {
      return decodeStr;
    }
  });
  return decodeStr;
}

function release() {
  $.ajax({
    url: path + "api-release.php",
    type: "GET",
    dataType: "html",
    async: false,
    success: function (data) {
      // console.log(data);
      data = data;
      scriptParse = $(data).filter('script')[1];
      strSrc = $(scriptParse).html().toString();

      var rex = /(\\x7b\\x22view).*(\\x7d\\x7d)/gmi;
      matchStr = strSrc.match(rex)[0];
      decodeStr = JSON.parse(decode(matchStr));
      // console.log(decodeStr);
    },
    error: function (data) {
      console.log(data);
    },
    complete: function () {
      return decodeStr;
    }
  });
  return decodeStr;
}

function dead() {
  $.ajax({
    url: path + "api-dead.php",
    type: "GET",
    dataType: "html",
    async: false,
    success: function (data) {
      // console.log(data);
      data = data;
      scriptParse = $(data).filter('script')[1];
      strSrc = $(scriptParse).html().toString();

      var rex = /(\\x7b\\x22view).*(\\x7d\\x7d)/gmi;
      matchStr = strSrc.match(rex)[0];
      decodeStr = JSON.parse(decode(matchStr));
      // console.log(decodeStr);
    },
    error: function (data) {
      console.log(data);
    },
    complete: function () {
      return decodeStr;
    }
  });
  return decodeStr;
}

function ysdInspection() {
  $.ajax({
    url: path + "api-ysdInspection.php",
    type: "GET",
    dataType: "html",
    async: false,
    success: function (data) {
      // console.log(data);
      data = data;
      scriptParse = $(data).filter('script')[1];
      strSrc = $(scriptParse).html().toString();

      var rex = /(\\x7b\\x22view).*(\\x7d\\x7d)/gmi;
      matchStr = strSrc.match(rex)[0];
      decodeStr = JSON.parse(decode(matchStr));
      // console.log(decodeStr);
    },
    error: function (data) {
      console.log(data);
    },
    complete: function () {
      return decodeStr;
    }
  });
  return decodeStr;
}

function ysdExclude() {
  $.ajax({
    url: path + "api-ysdExclude.php",
    type: "GET",
    dataType: "html",
    async: false,
    success: function (data) {
      // console.log(data);
      data = data;
      scriptParse = $(data).filter('script')[1];
      strSrc = $(scriptParse).html().toString();

      var rex = /(\\x7b\\x22view).*(\\x7d\\x7d)/gmi;
      matchStr = strSrc.match(rex)[0];
      decodeStr = JSON.parse(decode(matchStr));
      // console.log(decodeStr);
    },
    error: function (data) {
      console.log(data);
    },
    complete: function () {
      return decodeStr;
    }
  });
  return decodeStr;
}

function ysdDiagnose() {
  $.ajax({
    url: path + "api-ysdDiagnose.php",
    type: "GET",
    dataType: "html",
    async: false,
    success: function (data) {
      // console.log(data);
      data = data;
      scriptParse = $(data).filter('script')[1];
      strSrc = $(scriptParse).html().toString();

      var rex = /(\\x7b\\x22view).*(\\x7d\\x7d)/gmi;
      matchStr = strSrc.match(rex)[0];
      decodeStr = JSON.parse(decode(matchStr));
      // console.log(decodeStr);
    },
    error: function (data) {
      console.log(data);
    },
    complete: function () {
      return decodeStr;
    }
  });
  return decodeStr;
}

function render() {
  //----- exclude Number -----
  wuhanExclude = exclude();
  wuhanExcludeNum = wuhanExclude.dataTable.rows[0].c[0].f;
  wuhanExcludeTitle = wuhanExclude.options.title;
  $("#excludeTitle").html(wuhanExcludeTitle + ' <i class="fas fa-child"></i>');
  $("#excludeNum").text(wuhanExcludeNum);

  //----- inspect Number -----
  wuhanInspect = inspect();
  // console.log(wuhanInspect);
  wuhanInspectNum = wuhanInspect.dataTable.rows[0].c[0].f;
  wuhanInspectTitle = wuhanInspect.options.title;
  // console.log(wuhanInspectTitle);
  // console.log(wuhanInspectNum);
  $("#inspectTitle").html(wuhanInspectTitle + ' <i class="fas fa-ambulance fa-sm"></i>');
  $("#inspectNum").text(wuhanInspectNum);

  //----- Diagnose Number -----
  wuhanDiagnose = diagnose();
  // console.log(wuhanDiagnose);
  wuhanDiagnoseNum = wuhanDiagnose.dataTable.rows[0].c[0].f;
  wuhanDiagnoseTitle = wuhanDiagnose.options.title;
  // $("#diagnoseTitle").text(wuhanDiagnoseTitle);
  $("#diagnoseNum").text(wuhanDiagnoseNum);

  //----- dead Number -----
  wuhanDead = dead();
  // console.log(wuhanDead);
  wuhanDeadNum = wuhanDead.dataTable.rows[0].c[0].f;
  // console.log(wuhanDeadNum);
  wuhanDeadTitle = wuhanDead.options.title;
  // $("#deadTitle").text(wuhanDeadTitle);
  $("#deadNum").text(wuhanDeadNum);

  //----- ysdExclude Number -----
  ysdExclude = ysdExclude();
  // console.log(ysdExclude);
  ysdExcludeNum = ysdExclude.dataTable.rows[0].c[0].f;
  ysdExcludeTitle = ysdExclude.options.title;
  $("#ysdExcludeTitle").html(ysdExcludeTitle + ' <i class="fas fa-child"></i>');
  $("#ysdExcludeNum").text(ysdExcludeNum);

  //----- ysdInspection Number -----
  ysdInspection = ysdInspection();
  // console.log(ysdInspection);
  ysdInspectionNum = ysdInspection.dataTable.rows[0].c[0].f;
  ysdInspectionTitle = ysdInspection.options.title;
  $("#ysdInspectionTitle").html(ysdInspectionTitle + ' <i class="fas fa-ambulance fa-sm"></i>');
  $("#ysdInspectionNum").text(ysdInspectionNum);

  //----- ysdDiagnose Number -----
  ysdDiagnose = ysdDiagnose();
  // console.log(ysdDiagnose);
  ysdDiagnoseNum = ysdDiagnose.dataTable.rows[0].c[0].f;
  ysdDiagnoseTitle = ysdDiagnose.options.title;
  // $("#ysdDiagnoseTitle").text(ysdDiagnoseTitle);
  $("#ysdDiagnoseNum").text(ysdDiagnoseNum);

  //----- release Number -----
  wuhanRelease = release();
  wuhanReleaseNum = wuhanRelease.dataTable.rows[0].c[0].f;
  wuhanReleaseTitle = wuhanRelease.options.title;
  $("#releaseTitle").text(wuhanReleaseTitle);
  $("#releaseNum").text(wuhanReleaseNum);
  //----- Notice Number -----
  // wuhanNotice = notice();
  // wuhanNoticeNum = wuhanNotice.dataTable.rows[0].c[0].f;
  // wuhanNoticeTitle = wuhanNotice.options.title;
  // $("#notifyTitle").text(wuhanNoticeTitle);
  // $("#notifyNum").text(wuhanNoticeNum);
  // console.log(wuhanNotice);
  // console.log(wuhanNoticeNum);
  // console.log(wuhanNoticeTitle);

}
// console.log(exclude());

function decode(str) {
  try {
    return !/([^\\]'|\r|\n)/.test(str) ? eval("'" + str + "'") : false;
  } catch (e) {
    return false;
  }
}

function nConVList() {
  $.ajax({
    url: path + "api-nConVList.php",
    type: "GET",
    success: function (data) {
      // console.log(data);
      parseJSON = $.parseJSON(data);
      // console.log(parseJSON);
      parseJSON.forEach((v, i) => {
        // console.log(v);
        caseMonth = v.診斷月份;
        caseCity = v.縣市;
        caseSex = v.性別;
        isOutCase = v.是否為境外移入;
        caseAge = v.年齡層;
        caseNum = v.確定病例數;
        caseNumInt = parseInt(caseNum, 10);
        caseNumArr.push(caseNumInt);
        cityArr.push(caseCity);
        if (caseSex === "F") {
          caseSex = "女";
        } else {
          caseSex = "男";
        };
        caseCityCode = findCityCode(caseCity).cityCode;
        caseCityName = findCityCode(caseCity).cityName;
        // console.log(caseCityName);
        // console.log(caseNumInt);
        // console.log(caseCityCode);
        let cityCaseObj = {
          'caseCityCode': caseCityCode,
          'caseCityName': '' + caseCityName + '',
          'caseCityNum': caseNumInt
        };
        cityCaseArr.push(cityCaseObj);

        $("#nConVList").append(
          '<tr><td>' + caseMonth + '</td><td data-order="' + caseCityCode + '">' + caseCity +
          '</td><td>' + caseSex + '</td><td>' +
          caseAge + '</td><td>' + caseNum + '</td><td>' + isOutCase + '</td></tr>');
      });
      // parseJSON = $.parseJSON(data);
    },
    error: function (data) {
      console.log(data);
    },
    complete: function () {
      // console.log(cityCaseArr);
      caseNumTotal = caseNumArr.reduce((a, b) => a + b);
      console.log(caseNumTotal);
      cityCaseArr.sort((a, b) => {
        return a.caseCityCode - b.caseCityCode;
      });
      countCityCase(cityCaseArr);
      nCovDataTable();
    }
  });
}

function countCityCase(cityCaseArr) {
  let prevCityCode = 1;
  for (const i in cityCaseArr) {

    currCityCode = cityCaseArr[i].caseCityCode;
    // console.log(currCityCode);
    if (prevCityCode != currCityCode) {
      // console.log(currCityCode, prevCityCode);
      prevCityCode = currCityCode;
      currCaseCityNum = cityCaseArr[i].caseCityNum;
      $("#TW_" + currCityCode + "").html("<span class='text-primary'>" + currCaseCityNum + "</span>");
    } else if (prevCityCode == currCityCode) {
      // console.log("pc:" + currCityCode, prevCityCode);
      prevCaseCityNum = parseInt($("#TW_" + prevCityCode + "").text(), 10);
      currCaseCityNum = parseInt(cityCaseArr[i].caseCityNum, 10);;
      NewCaseCityNum = prevCaseCityNum + currCaseCityNum;
      $("#TW_" + prevCityCode + "").html("<span class='text-primary'>" + NewCaseCityNum + "</span>");
    }
  }
}
$("#tw-city-list tr").hover(function () {
  // console.log($(this).find("td").attr("id"));
  cityID = $(this).find("td").attr("id").replace("TW_", "");
  // cityID.replace("TW_", "");
  // console.log(cityID);
  $("#tw-map-" + cityID).css({
    "fill": "#6DD0A6",
  });
  // cityID = $(this).attr("id");
}, function () {
  // console.log("end");
  $("#tw-map-" + cityID).css({
    "fill": "#fff",
  });
});
// $("svg").find("path").hover(function () {
//   // over
//   console.log($(this).attr("id"));
//   cityID = $(this).attr("id");

//   $("#TW-case-map").mousemove(function (e) {
//     // values: e.clientX, e.clientY, e.pageX, e.pageY
//     var x = e.pageX;
//     var y = e.pageY;
//     // $("#cityInfo").text(cityID + ' x:' + px + ' y:' + py);
//     $(".toolbox").css({
//       "top": y + "px",
//       "left": x + "px"
//     });
//   });
//   // $('#' + cityID + '').tooltip();
// }, function () {
//   console.log("end");
// });


function nCovDataTable() {
  $('#nCoVCaseTable').DataTable({
    "paging": true,
    "searching": false,
    "info": false,
    "pageLength": 5,
    "language": {
      "paginate": {
        'first': '第一頁',
        'previous': '&laquo;',
        'next': '&raquo;',
        'last': '最後一頁',

      },
      "lengthMenu": '顯示 <select>' +
        '<option value="5">5</option>' +
        '<option value="10">10</option>' +
        '<option value="25">25</option>' +
        '<option value="50">50</option>' +
        '<option value="100">100</option>' +
        '<option value="-1">All</option>' +
        '</select> 筆資料'
    }
  });
}

function sortCity(cityArr) {
  cityArr.forEach((v, i) => {
    // console.log(v);
    arrV = v;
    cityObj = findCityCode(arrV);
    console.log(cityObj);
    arrayCode.push(cityObj);
  });

  // console.log(arrayCode);
  arrayCode.sort((a, b) => {
    return a.cityCode - b.cityCode;
  });
  // console.log(arrayCode);
  return arrayCode;
}

function findCityCode(arrV) {
  $.ajax({
    url: "json/taiwan-city-code.json",
    type: "GET",
    async: false,
    success: function (data) {
      // console.log(data);
      cityCode = data.cityCode;
      cityName = data.cityName;
      for (let i in data) {
        jsonCity = data[i].cityName;
        if (arrV === jsonCity) {
          // console.log(jsonCity);
          code = parseInt(i, 10);
          cityObj = {
            'cityCode': code + 1,
            'cityName': '' + jsonCity + ''
          };
          // console.log(cityObj);
          return cityObj;
        }
      }
    }
  });
  return cityObj;
}

nConVList();
render();
