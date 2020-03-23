let path = "php/";
let countyNumArr = [];

function getWorldCase() {
  $.ajax({
    url: path + "api-worldCase.php",
    type: "GET",
    success: function (data) {
      data = $.parseJSON(data);
      features = data.features;

      features.forEach((v, i) => {
        v = data.features[i].properties;
        countyName = v.name;
        cases = v.cases;
        deaths = v.deaths;
        // console.log(v);
        cCodeObj = getCountry(countyName);
        // console.log(cCodeObj.countyCode);
        countryCode = cCodeObj.countyCode;
        // console.log(cCode);
        rkObj = {
          "cCode": cCode,
          "countryCode": countryCode,
          "countyName": countyName,
          "cases": cases,
          "deaths": deaths
        }
        countyNumArr.push(rkObj);
        // ranking(cCode, cases, deaths);
      });
      // foreach end
      ranked = ranking(countyNumArr);

    },
    error: function (data) {
      console.log(data);
    },
    complete: function (data) {
      // console.log(data);

      renderTable(ranked);
      // console.log(ranked);
    }
  });
}

function renderTable(ranked) {
  ranked.forEach(v => {
    cCode = v.cCode;
    countryCode = v.countryCode;
    countyName = v.countyName;
    cases = v.cases;
    deaths = v.deaths;
    rank = v.rank;
    $("#nConVWList").append(
      '<tr id="' + cCode + '"><td>' + rank + '</td><td class="td-flag-bg" data-order="' + rank + '">' + '<span class="flag-icon flag-icon-' + countryCode + ' mr-2"></span></td> ' + '<td> ' + countyName + '</td></td><td>' + cases + '</td><td>' + deaths + '</td></tr>'
    );
  });
  nCovCountyDataTable();
  renderVisualMap();
  AllRank = $("#nCoV-W-CaseTable tr:last-child td:first-child").html();
  $("#TW").addClass('bg-success');
  twRank = $("#TW > td.sorting_1").text();
  $("#TW_rank").html(" " + twRank + " / " + AllRank + " ");
  $(".loading").css({
    "display": "none"
  });
  console.log(AllRank);
}

function ranking(arr) {
  // console.log(arr);
  // let obj;
  orderArr = arr.sort((a, b) => {
    return b.deaths - a.deaths;
  });
  orderArr.sort((a, b) => {
    return b.cases - a.cases;
  });
  // revArr = arr.reverse();
  var ranked = orderArr.map(function (item, i) {
    // console.log(item);
    //  itemTotal = item.cases + item.deaths;
    if (i > 0) {
      var prevItem = orderArr[i - 1];
      if (prevItem.cases == item.cases) {
        if (prevItem.deaths > item.deaths) {
          item.rank = i + 1;
        } else {
          item.rank = prevItem.rank;
        }
      } else {
        item.rank = i + 1;
      }
    } else {
      item.rank = 1;
    }
    return item;
  });
  // console.log(ranked);
  // console.log(orderArr);
  // console.log(revArr);
  return ranked;
}

function renderVisualMap() {

  // > td:nth-child(4)
  tbList = $("#nConVWList > tr").length;
  for (let i = 1; i <= tbList; i++) {
    let selectorID = "#nConVWList > tr:nth-child(" + i + ")";
    let selectorNum = "#nConVWList > tr:nth-child(" + i + ") > td:nth-child(4)";
    cCodeTB = $("#nConVWList > tr:nth-child(" + i + ")").attr("id");
    cCaseNum = $(selectorNum).text();
    cCaseNumInt = parseInt(cCaseNum, 10);
    // console.log(cCaseNumInt);
    // console.log(cCodeTB);
    if (cCaseNumInt != 0) {
      cCaseLatLng = getCountryLatLng(cCodeTB);
      intervalRadius(cCaseNumInt);
    }
    // radiusCircle = 
    // console.log(cCaseNumInt);
    // L.circleMarker(cCaseLatLng, {
    //   radius: radiusCircle,
    //   className: "case-circle"
    // }).addTo(map);
    // .bindTooltip("my tooltip text").openTooltip()
    // console.log(cCodeTB);
    // console.log(cCaseNumInt);
    // console.log(cCaseLatLng);
  }
}
// countyNumArr.push()
function intervalRadius() {
  // if()
  let radiusCircle;
  let weight;
  if (cCaseNumInt >= 50000) {
    // console.log(">50000");
    radiusCircle = 100;
    weight = 0.5;
  } else if (cCaseNumInt >= 5000) {
    radiusCircle = 80;
    weight = 0.5;
  } else if (cCaseNumInt <= 5000 && cCaseNumInt >= 1000) {
    radiusCircle = 40;
    weight = 0.5;
  } else if (cCaseNumInt <= 1000 && cCaseNumInt >= 500) {
    radiusCircle = 30;
    weight = 0.5;
  } else if (cCaseNumInt <= 500 && cCaseNumInt >= 100) {
    radiusCircle = 15;
    weight = 0.5;
  } else if (cCaseNumInt <= 100 && cCaseNumInt >= 10) {
    radiusCircle = 5;
    weight = 1;
  } else if (cCaseNumInt <= 10 && cCaseNumInt >= 0) {
    radiusCircle = 1;
    weight = 2;
  }
  // console.log(weight);
  L.circleMarker(cCaseLatLng, {
    radius: radiusCircle,
    className: "case-circle",
    weight: weight
  }).addTo(map);
}

function getCountryLatLng(cCodeTB) {
  $.ajax({
    url: "json/countries.json",
    type: "GET",
    async: false,
    success: function (data) {
      for (const i in data) {
        country_code = data[i].country_code;
        // console.log(country_code);
        // console.log(cCodeTB);
        if (cCodeTB == country_code) {
          cLatLng = data[i].latlng;
          // console.log(cLatLng);
          return;
        } else if (cCodeTB == "OT") {
          cLatLng = [36, 138];
        }
      }
      return cLatLng;
    }
  });
  return cLatLng;
}

function getCountry(en_name) {
  $.ajax({
    url: "json/county-code.json",
    type: "GET",
    async: false,
    success: function (data) {
      // console.log(en_name);
      // console.log(data);
      for (const i in data) {
        jsonCName = data[i].countyName;
        // console.log(en_name);
        // console.log(jsonCName);
        if (en_name == jsonCName) {
          // console.log(data[i].countyCode);
          cCode = data[i].countyCode;
          countyCode = cCode.toLowerCase();
          cCodeObj = {
            "cCode": cCode,
            "countyCode": countyCode
          };
          // console.log(cCodeObj);
          return cCodeObj;
        }
      }
    },
    error: function (data) {
      console.log(data);
    },
    complete: function () {
      // cLV = getCountryEpidLevel(cCode);
      // console.log(cLV);
      // console.log(data);
      // console.log(cCode);
      // cLV_Obj = getCountryEpidLevel(cCode);
      // console.log(cLV_Obj);
      // console.log(cCodeObj);
    }
  });
  return cCodeObj;
}

function getTravelEpidemic() {
  $.ajax({
    url: path + "api-TravelEpidemic.php",
    type: "GET",
    success: function (data) {
      console.log(data);
      data = data;
      // parseJSON = $.parseJSON(data);
    },
    error: function (data) {
      console.log(data);
    },
    complete: function (data) {
      // console.log(data);
    }
  });
}
// let cCode = "jp";
// getCountryEpidLevel(cCode);

function getCountryEpidLevel(cCode) {
  // console.log(cCode);
  $.ajax({
    url: path + "api-CountryEpidLevel.php",
    type: "GET",
    async: false,
    success: function (data) {
      parseJSON = $.parseJSON(data);
      // console.log(parseJSON);
      for (const i in parseJSON) {
        let v = parseJSON[i];
        // console.log(v);
        sent = v.sent;
        Source = v.Source;
        effective = v.effective;
        expires = v.expires;
        senderName = v.senderName;
        description = v.description;
        instruction = v.instruction;
        web = v.web;
        alert_title = v.alert_title;
        severity_level = v.severity_level;
        alert_disease = v.alert_disease;
        circle = v.circle;
        areaDesc = v.areaDesc;
        headline = v.headline;
        ISO3166 = v.ISO3166;
        // console.log(ISO3166);
        cIOS = ISO3166.toLowerCase();
        if (cIOS == cCode) {
          let cEpidLevelObj = {
            'sLV': severity_level,
            'web': web,
          };
          // console.log(cEpidLevelObj);
          return cEpidLevelObj;
        }
      }
    }
  });
  return cEpidLevelObj;
}

function getGlobalData() {
  $.ajax({
    url: path + "api-globalData.php",
    type: "GET",
    success: function (data) {
      parseJSON = $.parseJSON(data);
      // console.log(parseJSON);
      cases = parseJSON[0].cases;
      deaths = parseJSON[0].deaths;
      cfr = parseJSON[0].cfr;
      countries = parseJSON[0].countries;
    },
    error: function (data) {
      console.log(data);
    },
    complete: function (data) {
      $("#globalConfirmNum").html(cases);
      $("#globalDeadNum").html(deaths);
      $("#globalDeadNumPre").html(cfr);
      $("#countryNum").html(countries);
    }
  });
}

//-------------
function nCovCountyDataTable() {
  $('#nCoV-W-CaseTable').DataTable({
    "paging": true,
    "searching": false,
    "info": false,
    "lengthChange": false,
    "paging": false
  });
}
//-------------
//-------------
getWorldCase();
getGlobalData();
// ********** map **********
// var map;
// map = L.map('map-container', {
//   minZoom: 0,
//   maxZoom: 18,
//   zoomSnap: 0,
//   zoomDelta: 0.25
// }).setView([0, 0], 1.219);

// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//   attribution: '<a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
//   maxZoom: 18,
// }).addTo(map);
var map = L.map('map', {
  minZoom: 0,
  maxZoom: 18,
  zoomSnap: 0,
  zoomDelta: 0.25,
});

var cartodbAttribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attribution">CARTO</a>';

var positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: cartodbAttribution
}).addTo(map);

var ZoomViewer = L.Control.extend({
  onAdd: function () {

    var container = L.DomUtil.create('div');
    var gauge = L.DomUtil.create('div');
    container.style.width = '200px';
    container.style.background = 'rgba(255,255,255,0.5)';
    container.style.textAlign = 'left';
    // map.on('zoomstart zoom zoomend', function (ev) {
    //   gauge.innerHTML = 'Zoom level: ' + map.getZoom();
    // })
    container.appendChild(gauge);

    return container;
  }
});
// map.on('move', function (e) {
//   console.log(map.getCenter());
// });
(new ZoomViewer).addTo(map);

map.setView([34.495, 6.6199], 1.6518);
// L.circleMarker([50.5, 30.5], {
//   radius: 100,
//   className: "case-circle"
// }).bindTooltip("my tooltip text").openTooltip().addTo(map);

//******************************
