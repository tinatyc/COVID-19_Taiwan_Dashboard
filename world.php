<!DOCTYPE html>
<html lang="zh-tw">

<head>
  <!-- <script src="js/analytics.js"></script>
  <script src="https://www.google-analytics.com/analytics.js"></script>
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-160692102-1"></script> -->
  <!-- Required meta tags -->
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <meta HTTP-EQUIV="Pragma" CONTENT="no-cache">
  <meta HTTP-EQUIV="Expires" CONTENT="-1">
  <meta name="description" content="呈現來自中國武漢病毒所造成的疫情情報" />
  <meta name="author" content="Tzeng,Ying-Chi" />
  <!-- og -->
  <meta property="og:title" content="武漢肺炎疫情 台灣情報站">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="武漢肺炎疫情-台灣情報站">
  <meta property="og:url" content="https://covid19.tzeng17.com/">
  <meta property="og:image:width" content="885">
  <meta property="og:image:height" content="885">
  <meta property="og:image" content="https://covid19.tzeng17.com/img/favicon.png">
  <meta property="og:description" content="呈現來自中國武漢病毒所造成的疫情情報">
  <!-- og -->
  <link rel="apple-touch-icon" sizes="180x180" href="https://covid19.tzeng17.com/img/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="https://covid19.tzeng17.com/img/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="https://covid19.tzeng17.com/img/favicon-16x16.png">
  <link rel="manifest" href="https://covid19.tzeng17.com/img/site.webmanifest">
  <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css' />
  <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css" />
  <link rel="stylesheet" type="text/css"
    href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.css" />
  <link rel="stylesheet" href="https://cdn.datatables.net/1.10.20/css/dataTables.bootstrap4.min.css">
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
    integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
    crossorigin="" />
  <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/css/flag-icon.css' />
  <link rel="stylesheet" href="css/style.css" />
  <link rel="stylesheet" href="css/shared-style.css" />
  <link rel="stylesheet" href="css/demo-style.css" />
  <link rel="stylesheet" href="css/world.css">
  <title>武漢肺炎疫情-台灣情報站</title>
  <style>
  #map {
    width: 100%;
    height: 450px;
  }
  </style>

<body class="header-fixed">
  <nav class="t-header">
    <div class="t-header-brand-wrapper">
      <a href="index.php" class="text-danger">
        <!-- <img src="https://api.fnkr.net/testimg/50x50/00CED1/FFF/?text=wuhan" /> -->
        <img class="logo logo px-3" src="img/logo.svg" />
        <div class="text-gray">
          <p>武漢肺炎疫情</p>
          <p>台灣情報站</p>
        </div>
      </a>
    </div>
    <div class="t-header-content-wrapper">
      <div class="t-header-content">
        <button class="t-header-toggler t-header-mobile-toggler d-block d-lg-none">
          <i class="fas fa-bars"></i>
        </button>
      </div>
    </div>
  </nav>

  <!-- partial -->
  <div class="page-body">
    <div id="sideBar" class="sidebar"></div>
    <!-- partial -->
    <div class="page-content-wrapper">
      <div class="loading">
        <span class="spinner-grow" role="status" aria-hidden="true"></span>
      </div>
      <div class="page-content-wrapper-inner">
        <div class="content-viewport">
          <div class="row">
            <div class="col-12 pt-5 pb-3">
              <h4>世界病例地理分佈</h4>
            </div>
          </div>
          <div class="row">
            <div class="container row col-12">
              <div class="col-md-3 col-sm-6 col-6">
                <div class="grid">
                  <div class="grid-body text-gray">
                    <div class="d-flex justify-content-between">
                      <p id="globalConfirmTitle" class="card-title">全球確定病例數</p>
                    </div>
                    <p id="globalConfirmNum" class="display-4 text-danger"></p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-6 col-6">
                <div class="grid">
                  <div class="grid-body text-gray">
                    <div class="d-flex justify-content-between">
                      <p id="globalDeadNumTitle" class="card-title">全球死亡病例數</p>
                    </div>
                    <p id="globalDeadNum" class="display-4 text-danger"></p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-6 col-6">
                <div class="grid">
                  <div class="grid-body text-gray">
                    <div class="d-flex justify-content-between">
                      <p id="globalDeadNumPreT" class="card-title">全球致死率</p>
                    </div>
                    <p id="globalDeadNumPre" class="display-4 text-danger"></p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-6 col-6">
                <div class="grid">
                  <div class="grid-body text-gray">
                    <div class="d-flex justify-content-between">
                      <p id="countryNumTitle" class="card-title">國家/地區數</p>
                    </div>
                    <p id="countryNum" class="display-4 text-danger"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div id="map"></div>
          </div>
          <!--  -->
          <div class="row">
            <div class="my-3 w-100">
              <div class="alert alert-light box-shadow w-100" role="alert">
                今天 台灣 世界排名第<span id="TW_rank" class="text-success"> - </span>名
              </div>
              <table id="nCoV-W-CaseTable"
                class="table table-hover table-light table-responsive-sm dataTable no-footer bg-white">
                <thead>
                  <tr>
                    <th scope="col">序列</th>
                    <th scope="col">flag</th>
                    <th scope="col">國家／地區 Country／Region</th>
                    <th scope="col">確診</th>
                    <th scope="col">死亡</th>
                    <!-- <th scope="col">旅遊疫情等級</th>
                <th scope="col">旅遊警示燈號</th> -->
                  </tr>
                </thead>
                <tbody id="nConVWList">
                  <!-- <tr id="' + cCode + '">
                    <td>' + ranking + '</td>
                    <td class="td-flag-bg" data-order="' + i + '">' + '<span
                        class="flag-icon flag-icon-' + countryCode + ' mr-2"></span> ' + '
                    <td> ' + countyName + '</td>
                    </td>
                    <td>' + cases + '</td>
                    <td>' + deaths + '</td>
                  </tr> -->
                  <!-- <tr>
                <td>' + caseMonth + '</td>
                <td data-order="' + caseCityCode + '">' + caseCity +
                  '</td>
                <td><span class="flag-icon flag-icon-jp"></span></td>
                <td>' +
                  caseAge + '</td>
                <td>' + caseNum + '</td>
                <td>' + isOutCase + '</td>
              </tr> -->
                </tbody>
              </table>
            </div>
            <!--  -->
          </div>
        </div>
      </div>
      <!-- partial -->
    </div>
    <!-- page content ends -->
  </div>
  <!--page body ends -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  <script src="js/layout/core.js"></script>
  <script src="js/layout/template.js"></script>
  <!-- <script src="js/layout/dashboard.js"></script> -->
  <script src="js/popper.min.js"></script>
  <script src="js/bootstrap.js"></script>
  <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js">
  </script>
  <script src="https://cdn.datatables.net/1.10.20/js/dataTables.bootstrap4.min.js"></script>
  <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
    integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
    crossorigin=""></script>
  <script>
  $(function() {
    $('#sideBar').load('sidebar.html');
  });
  </script>
  <script src="js/world.js"></script>
</body>
</head>

</html>