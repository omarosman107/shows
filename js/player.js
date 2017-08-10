
function addJS(url) {
  var s = document.createElement('script'); // Create a script element
  s.type = "text/javascript"; // optional in html5
  s.async = false; // asynchronous? true/false
  s.src = url;
  var fs = document.getElementsByTagName('script')[0]; // Get the first script
  fs.parentNode.insertBefore(s, fs);
};

if (!'fetch' in window) {

  addJS('js/fetch.min.js');
}

var nickactive = false;
var foxactive = false;
var cbsactive = false;
var cwtv = false;
var abcactive = false;
var spactive = false;
var cwactive = false;
var nbcactive = false;
var isDone = false;
var aswim = false;
var amcactive = false;
var diziayactive = false;
var cwurl;

var sitefunctions = {
  "rawFile": raw,
  "foxorgin": foxsite,
  "fx_=": fxsite,
  "asdir=": fetchaswimjson,
  "api.fox.com": foxapi,
  "funimation.com": funimation,
  "cwtv.com": fetchcwjson,
  "diziay.com": fetchdiziayjson,
  "adultswim.com": fetchaswimjson,
  "cwseed.com": fetchcwjson,
  "nick.com": fetchnickjson,
  "abc.go.com": fetchabcjson,
  "southpark.cc.com": fetchsouthpjson,
  "amc.com": fetchamcjson,
  "cbs.com": fetchcbsjson,
  "nbc.com": fetchnbcjson,
  "cartoonnetwork.com": fetchcartoonnjson,
  "fox.com": fetchfoxjson,
  "link.theplatform.com": fetchlplatjson,
  "fxnetworks.com": fetchfxjson,
  "tvzion.pro": tvzion

  /* var player = videojs('LS');;
   player.ready(function() {
    this.hotkeys({
      volumeStep: 0.1,
      seekStep: 5,
      enableModifiersForNumbers: false
    });
  });
  */

};var url;

showname = document.getElementById('showname');
showdesc = document.getElementById('showdesc');

var currenturl = window.location.search.split('?')[1];

if (window.location.search.split('?').length == 3) {

  currenturl = window.location.search.split('?')[1] + "?" + window.location.search.split('?')[2];
}
var xhttp = new XMLHttpRequest();

function findName() {

  document.getElementById('progress').style.width = "0%";
  console.time();
  for (tv in sitefunctions) {

    if (currenturl.includes(tv)) {
      console.log(tv + " detected");
      url = currenturl;
      sitefunctions[tv](url

      //        eval(sitefunctions[tv]);
      );isDone = true;
      console.timeEnd();
      return;
    }
  }
}
document.getElementById('progress').style.width = "15%";

function googleAPI() {

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById('progress').style.width = "25%";
      googlejson = JSON.parse(this.responseText);
      googleurl = googlejson.results[0].unescapedUrl;
      foxurl = googlejson.results[0].unescapedUrl;
      console.time();
      for (var i = 0; i < googlejson.results.length; i++) {

        if (JSON.stringify(googlejson.results[i]).includes('ogUrl')) {
          console.log("worked");

          cwurl = googlejson.results[i].richSnippet.metatags.ogUrl;
        }

        if (JSON.stringify(googlejson.results[i]).includes('ogType')) {
          console.log("worked");
          if (typeof googlejson.results[i].richSnippet.metatags.ogType == "string") {
            if (googlejson.results[i].richSnippet.metatags.ogType == "video.episode") {

              foxurl = googlejson.results[i].unescapedUrl;
              break;
            }

            if (googlejson.results[i].richSnippet.metatags.ogType == "video.other") {

              foxurl = googlejson.results[0].unescapedUrl;
              break;
            }
          }
        }
      }

      for (tv in sitefunctions) {
        if (isDone == false) {

          if (googleurl.includes(tv)) {
            console.log(tv + " " + "Detected");
            url = googleurl;
            if (tv == "fox.com") {
              url = foxurl;
            }
            if (tv == "cwtv.com") {
              url = cwurl;
            }
            if (tv == "abc.go.com") {
              url = cwurl;
            }

            document.getElementById('orginVisit').innerHTML = url;
            document.getElementById('orginVisit').href = url;
            console.log(url);
            sitefunctions[tv](url);
            isDone = true;
            console.timeEnd();
            break;
          }
        }
      }

      i;
    }
  };
  xhttp.open("GET", "https://www.googleapis.com/customsearch/v1element?key=AIzaSyCVAXiUzRYsML1Pv6RwSG1gunmMikTzQqY&rsz=filtered_cse&hl=en&prettyPrint=false&source=gcsc&gss=.com&sig=0c3990ce7a056ed50667fe0c3873c9b6&cx=009916453314335219988:-0yvqrz4snu&q=" + currenturl, true);
}

findName();

if (isDone == false) {
  googleAPI();
  xhttp.send();
}

function tvstQ(q) {
  q = encodeURIComponent(q);
  var query = 'https://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('select * from json where url="https://api.tozelabs.com/v2/show?limit=1&q=' + q + '"') + '&format=json&_maxage=360000';

  return query;
}

function getShowinfo(name) {

  var showFetch = new XMLHttpRequest();

  showFetch.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {

      var data = JSON.parse(this.responseText);
      console.log(data);
      document.getElementsByClassName('showImg')[0].href = "https://www.tvtime.com/en/show/" + data.query.results.json.id;
      document.getElementsByClassName('showImg')[0].innerHTML = '<img width="100%" src="' + data.query.results.json.all_images.poster._[3] + '">';
      document.getElementById('showname').href = "https://www.tvtime.com/en/show/" + data.query.results.json.id;
      if (document.getElementById('showname').querySelectorAll('img').length === 0) {
        fetch('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20json%20where%20url%3D%22http%3A%2F%2Fwebservice.fanart.tv%2Fv3%2Ftv%2F' + data.query.results.json.id + '%3Fapi_key%3D334bde683eabd3ae55eb6a1917bd4795%22%20&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=&_maxage=360000').then(function (res) {
          return res.json();
        }).then(function (data) {
          console.log(data.query.results.json);
          if (data.query.results.json.hdtvlogo.length > 1) {
            data.query.results.json.hdtvlogo.url = data.query.results.json.hdtvlogo[0].url
          }
          document.getElementById('showname').innerHTML = '<img style="    margin-bottom:-5px;width: 6.0em;display:inline-block;" src="' + data.query.results.json.hdtvlogo.url + '" width="100%">';
        });
      }

      //+ '<br><span class="rating">Rating: '+data.query.results.json.mean_rate*2+' / 10</span>'

    }
  };
  showFetch.open("GET", tvstQ(name), true);
  showFetch.send();
}