let path = "php/";
let caseNumArr = [];
let cityArr = [];
let arrayCode = [];
let cityCaseArr = [];

function getTWData() {
  return new Promise(function (resolve, reject) {
  $.ajax({
    url: path + "api-TWData.php",
    type: "GET",
    success: function (data) {
      parseJSON = $.parseJSON(data);
      // console.log(parseJSON[0]);
      diagnoseNum = parseJSON[0].確診;
      releaseNum = parseJSON[0].解除隔離;
      deadNum = parseJSON[0].死亡;
      inspectNum = parseJSON[0].送驗;
      excludeNum = parseJSON[0]['排除(新)'];
      ysdDiagnoseNum = parseJSON[0].昨日確診;
      ysdInspectionNum = parseJSON[0].昨日送驗;
      ysdExcludeNum = parseJSON[0]['昨日排除(新)'];
      // console.log(
      //   diagnoseNum, releaseNum, deadNum, inspectNum, excludeNum, ysdDiagnoseNum, ysdInspectionNum, ysdExcludeNum
      // );
      
    },
    error: function (data) {
      console.log(data);
    },
    complete: function (data) {
      // console.log(data);
      TWObjData ={
        "diagnoseNum":diagnoseNum,
        "releaseNum":releaseNum,
        "deadNum":deadNum,
        "inspectNum":inspectNum,
        "excludeNum":excludeNum,
        "ysdDiagnoseNum":ysdDiagnoseNum,
        "ysdInspectionNum":ysdInspectionNum,
        "ysdExcludeNum":ysdExcludeNum
        }
        renderData(TWObjData);
    }
  });
  resolve();
});
}
function renderData(TWObjData){
// $("#ysdExcludeTitle").html(returnData.Title + ' <i class="fas fa-child"></i>');
$("#ysdExcludeNum").html(TWObjData.ysdExcludeNum);

// $("#ysdInspectionTitle").html(returnData.Title + ' <i class="fas fa-ambulance fa-sm"></i>');
$("#ysdInspectionNum").html(ysdInspectionNum);

// $("#excludeTitle").html(returnData.Title + ' <i class="fas fa-child"></i>');
$("#excludeNum").html(TWObjData.excludeNum);

// $("#inspectTitle").html(returnData.Title + ' <i class="fas fa-ambulance fa-sm"></i>');
 $("#inspectNum").html(TWObjData.inspectNum);
 
//  $("#releaseTitle").html(returnData.Title + ' <i class="fas fa-smile"></i>')
 $("#releaseNum").html(TWObjData.releaseNum);
 
//  $("#ysdDiagnoseTitle").html('昨日' + returnData.Title + ' <i class="fas fa-syringe"></i>');
 $("#ysdDiagnoseNum").html(TWObjData.ysdDiagnoseNum);
 
//  $("#deadTitle").html(returnData.Title + ' <i class="fas fa-skull-crossbones"></i>');
 $("#deadNum").html(TWObjData.deadNum);
 
//  $("#diagnoseTitle").html('總' + returnData.Title + ' <i class="far fa-hospital"></i>');
 $("#diagnoseNum").html(TWObjData.diagnoseNum);
}
function diagnose() {
  return new Promise(function (resolve, reject) {
    $.ajax({
      url: path + "api-diagnose.php",
      type: "GET",
      dataType: "html",
      async: false,
      success: function (data) {
        returnData = getNumAndTitle(data);
        // console.log(returnData);
      },
      error: function (data) {
        console.log(data);

      },
      complete: function () {
        // console.log(returnData);
        $("#diagnoseTitle").html('總' + returnData.Title + ' <i class="far fa-hospital"></i>');
        $("#diagnoseNum").html(returnData.CaseNum);
        // return decodeStr;
      }
    });

    resolve(returnData);
  });
}

function dead() {
  $.ajax({
    url: path + "api-dead.php",
    type: "GET",
    dataType: "html",
    async: false,
    success: function (data) {
      returnData = getNumAndTitle(data);
    },
    error: function (data) {
      console.log(data);
    },
    complete: function () {
      $("#deadTitle").html(returnData.Title + ' <i class="fas fa-skull-crossbones"></i>');
      $("#deadNum").html(returnData.CaseNum);

    }
  });

}

function ysdDiagnose() {
  $.ajax({
    url: path + "api-ysdDiagnose.php",
    type: "GET",
    dataType: "html",
    async: false,
    success: function (data) {
      returnData = getNumAndTitle(data);
    },
    error: function (data) {
      console.log(data);
    },
    complete: function () {
      $("#ysdDiagnoseTitle").html('昨日' + returnData.Title + ' <i class="fas fa-syringe"></i>');
      $("#ysdDiagnoseNum").html(returnData.CaseNum);

    }
  });

}

function release() {
  $.ajax({
    url: path + "api-release.php",
    type: "GET",
    dataType: "html",
    async: false,
    success: function (data) {
      returnData = getNumAndTitle(data);
    },
    error: function (data) {
      console.log(data);
    },
    complete: function () {
      $("#releaseTitle").html(returnData.Title + ' <i class="fas fa-smile"></i>')
      $("#releaseNum").html(returnData.CaseNum)

    }
  });

}

function inspect() {
  $.ajax({
    url: path + "api-inspect.php",
    type: "GET",
    dataType: "html",
    async: false,
    success: function (data) {
      returnData = getNumAndTitle(data);
    },
    error: function (data) {
      console.log(data);
    },
    complete: function () {
      $("#inspectTitle").html(returnData.Title + ' <i class="fas fa-ambulance fa-sm"></i>');
      $("#inspectNum").html(returnData.CaseNum);

    }
  });

}

function exclude() {
  $.ajax({
    url: path + "api-exclude.php",
    type: "GET",
    dataType: "html",
    async: false,
    success: function (data) {
      returnData = getNumAndTitle(data);
    },
    error: function (data) {
      console.log(data);
    },
    complete: function () {
      $("#excludeTitle").html(returnData.Title + ' <i class="fas fa-child"></i>');
      $("#excludeNum").html(returnData.CaseNum);

    }
  });

}

function ysdInspection() {
  $.ajax({
    url: path + "api-ysdInspection.php",
    type: "GET",
    dataType: "html",
    async: false,
    success: function (data) {
      returnData = getNumAndTitle(data);
    },
    error: function (data) {
      console.log(data);
    },
    complete: function () {
      $("#ysdInspectionTitle").html(returnData.Title + ' <i class="fas fa-ambulance fa-sm"></i>');
      $("#ysdInspectionNum").html(returnData.CaseNum);

    }
  });

}

function ysdExclude() {
  $.ajax({
    url: path + "api-ysdExclude.php",
    type: "GET",
    dataType: "html",
    async: false,
    success: function (data) {
      returnData = getNumAndTitle(data);
    },
    error: function (data) {
      console.log(data);
    },
    complete: function () {
      $("#ysdExcludeTitle").html(returnData.Title + ' <i class="fas fa-child"></i>');
      $("#ysdExcludeNum").html(returnData.CaseNum);
    }
  });
}

// function notice() {
//   $.ajax({
//     url: path + "api-notice.php",
//     type: "GET",
//     dataType: "html",
//     async: false,
//     success: function (data) {
//       returnData = getNumAndTitle(data);
//     },
//     error: function (data) {
//       console.log(data);
//     },
//     complete: function (data) {
//       // console.log(data);
//       console.log(decodeStr);
//       return decodeStr;
//     }
//   });
//   return decodeStr;
// }

function render() {
  getTWData()
    // .then(dead)
    // .then(ysdDiagnose)
    // .then(release)
    // .then(inspect)
    // .then(exclude)
    // .then(ysdInspection)
    // .then(ysdExclude)
    .then(nConVList);

}

function getNumAndTitle(data) {
  try {
    scriptParse = $(data).filter('script')[1];
    strSrc = $(scriptParse).html().toString();
    var rex = /(\\x7b\\x22view).*(\\x7d\\x7d)/gmi;
    matchStr = strSrc.match(rex)[0];
    decodeStr = JSON.parse(decode(matchStr));
    CaseNum = decodeStr.dataTable.rows[0].c[0].f;
    Title = decodeStr.options.title;

    returnData = {
      "CaseNum": CaseNum,
      "Title": Title
    };
  } catch (e) {
    // console.log(e);
    returnData = {
      "CaseNum": "error",
      "Title": "error"
    }
  }

  return returnData;
}

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
      // console.log(caseNumTotal);
      cityCaseArr.sort((a, b) => {
        return a.caseCityCode - b.caseCityCode;
      });
      countCityCase(cityCaseArr);
      nCovDataTable();
      renderSVGColor();
      $(".loading").css({
        "display": "none"
      });
    }
  });
}

function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function renderSVGColor() {
  for (let i = 1; i < 22; i++) {
    cName = $("#TW_" + i + " > th").text();
    cNum = parseInt($("#TW_" + i + " > td").text(), 10) * 5;
    let r = 255;
    let g = 255 - cNum;
    let b = 255 - cNum;
    hexColor = rgbToHex(r, g, b);
    // console.log(hexColor);
    $("#tw-map-" + i).css({
      "fill": hexColor,
    });
    // console.log(cName, cNum);
  }
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
      $("#TW_" + currCityCode + " > td").html("<span class='text-primary'>" + currCaseCityNum + "</span>");
    } else if (prevCityCode == currCityCode) {
      // console.log("pc:" + currCityCode, prevCityCode);
      prevCaseCityNum = parseInt($("#TW_" + prevCityCode + " > td").text(), 10);
      currCaseCityNum = parseInt(cityCaseArr[i].caseCityNum, 10);;
      NewCaseCityNum = prevCaseCityNum + currCaseCityNum;
      $("#TW_" + prevCityCode + " > td").html("<span class='text-primary'>" + NewCaseCityNum + "</span>");
    }
  }
  TW_1_Num = parseInt($("#TW_1 > td").text(), 10) - 1;
  $("#TW_1 > td").html("<span class='text-primary'>" + TW_1_Num + "</span>");
  // console.log(TW_1_Num);

}

// $("#tw-city-list tr").hover(function () {
//   // console.log($(this).find("td").attr("id"));
//   cityID = $(this).find("td").attr("id").replace("TW_", "");
//   // cityID.replace("TW_", "");
//   // console.log(cityID);
//   $("#tw-map-" + cityID).css({
//     "fill": "#6DD0A6",
//   });
//   // cityID = $(this).attr("id");
// }, function () {
//   // console.log("end");
//   $("#tw-map-" + cityID).css({
//     "fill": "#fff",
//   });
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


render();
