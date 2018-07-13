


  console.time();


// var x2js = new X2JS();
console.log(getLastTime().start)
var player = videojs('LS', {  textTrackSettings: false
,html5: {
   
   hlsjsConfig: {
                 startPosition: getLastTime().start,
                 maxStarvationDelay:3,
                  maxLoadingDelay:1,
                  abrEwmaDefaultEstimate:getLastTime().bandwidth

   },
   hls: {
      useCueTags:true,
      bandwidth: getLastTime().bandwidth,
      enableLowInitialPlaylist:true   }
}});
// getLastTime().bandwidth

player.ready(function () {
   this.hotkeys({
      volumeStep: 0.1,
      seekStep: 5,
      enableModifiersForNumbers: false
   });

});
//const v = document.createElement('video');

//alert(v.canPlayType('audio/mp4; codecs="ec-3"'))


var secondsToTimeCode = function secondsToTimeCode(timeInSeconds) {

   var zeropad = function zeropad(number) {
      return number <= 9 ? '0' + number : number;
   };

   var hours = Math.floor(timeInSeconds / 3600);
   var minutes = Math.floor((timeInSeconds - hours * 3600) / 60) % 60;
   var seconds = timeInSeconds % 60;

   return zeropad(hours) + ':' + zeropad(minutes) + ':' + zeropad(seconds);
};

//jwplayer.defaults.preload = "auto"
//jwplayer.defaults.autostart = "true"
function bg(url) {
   document.getElementById('blockLoader').style.background = 'linear-gradient(rgba(0, 0, 0, 0.34),  rgba(0, 0, 0, 0.7)),url(' + url + ")";
   document.getElementById('blockLoader').src = url
}
function meta(s, e, a) {
   document.getElementById('season').innerHTML = s;
   document.getElementById('episode').innerHTML = e;
   document.getElementById('airdate').innerHTML = a;
}
function loadURL(url, type) {

   jwplayer("myElement1").setup({
      cast: {},
      file: url,
      width: "100%",
      aspectratio: "16:9",
      type: type
   });

   resume();
}
var played = 0;
var currentEpisode = {}
var next = {}
function getLastTime(){
   if (localStorage[window.location.search] > 10 && localStorage[window.location.search+'_duration'] - localStorage[window.location.search] > 48) {
      return {start:localStorage[window.location.search] - 5,bandwidth:Number(localStorage['last_bandwidth'])};
      }
   return {start:0,bandwidth:Number(localStorage['last_bandwidth'])};
}
function resumePlayback(state) {
   console.log(getLastTime())
     console.timeEnd();
if('playlist' in player){
if(player.playlist()){
if(player.playlist.currentItem() == 0 && player.src().includes('media.cwtv.com')){console.log('first intro video');return;}
}
}
   if (!player.canPlayType('application/vnd.apple.mpegURL')) {
      played = true;
   return;
}

if (!played) {
        if (localStorage[window.location.search] > 10 && player.duration() - localStorage[window.location.search] > player.duration() - finishDur) {

         player.currentTime(localStorage[window.location.search] - 5);
         played = true;
      }
}
     return;
   player.hls.xhr.beforeRequest = function(options) {

      if(options.uri.endsWith('.key')){

         return options;
      }
      if(options.uri.includes('hlsioscwtv.warnerbros.com') || options.uri.endsWith('.ts')){
  //options.uri = options.uri.replace('http://hlsioscwtv.warnerbros.com', 'http://level3-hls-segment-vod-wb.vip1-ord1.dlvr1.net');


      }
      if(options.uri.includes('stream-hls.cwtv.com/nosec/The_CW/')){
         console.log(options.uri.split('_').slice(-1)[0].split('.ts')[0])
         if(options.uri.endsWith(".m3u8")){
  options.uri = options.uri.replace('stream-hls.cwtv.com/nosec/The_CW/', '3aa37dc0e8bb47e08042e0ebb25acb34.dlvr1.net/nosec/The_CW');

         }
      }
      
   return options;
   
};


}
function pad(n) {
   return n < 10 ? "0" + n : n;
}
var b = ''
function endTime() {
   var t = new Date();
   t.setSeconds(t.getSeconds() + player.duration() - player.currentTime());

   var h = t.getHours();
   var ap = 'AM';
   if (h > 12) {
      h = h - 12;
      ap = 'PM';
   }
   var m = pad(t.getMinutes());
   if(h == 12){
      ap = 'PM'      
   }
   if (h == 0) {
      h = 12
      ap = 'AM'
   }

x =  'Ends at: ' + h + ':' + m + ' ' + ap;
if (b != x) {
   document.querySelector('.endTime').innerHTML = x;
   b=x
}
}
function fmtMSS(s) {
   return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s;
}


function playNext(){
document.querySelector('.upnext').style.display = 'none';
console.log(next)
window.history.replaceState('Object', 'Title', '?'+next.link);
findName(next.link)

}
var interval
var finishDur
function resume() {




    finishDur = player.duration() - 48
   if(localStorage[window.location.search + '_end']){
      finishDur = localStorage[window.location.search + '_end']
   }
//player.ga()
// player.currentTime(getLastTime().start)
clearInterval(interval)
   var vid = document.getElementById('LS_html5_api');

   var vid = document.getElementById(player.el().children[0].id);
vid.title = document.title

vid.addEventListener('loadstart', function(){
   if (localStorage['last_bandwidth']) {

  //    player.tech().hls.bandwidth = (localStorage['last_bandwidth'])
    //  console.log('set last bandwidth', localStorage['last_bandwidth']  / 1024/1024 + ' mbps')

   }


   setInterval(function(){
      localStorage['last_bandwidth'] = player.tech_.hls.bandwidth
   },6000)
})

   vid.onerror = function (e) {
      error(e);
   };
   /*
vid.addEventListener('loadstart',function(){
if (!vid.canPlayType('application/vnd.apple.mpegURL')) {
               resumePlayback();
}

})
  */
   vid.addEventListener('loadeddata', function () {
       document.getElementById('LS').style.opacity = 1;
      //  document.getElementsByClassName('video-duration')[0].innerHTML = "( " + Math.round(vid.duration / 60) + " min )"
      document.getElementById('blockLoader').style.opacity = "0";
      document.getElementById('blockLoader').style.display = 'absolute';
      document.getElementById('blockLoader').style.zIndex = '-99999';
            document.getElementById('LS').style.zIndex = '7';
          finishDur = player.duration() - 48
   if(localStorage[window.location.search + '_end']){
      finishDur = localStorage[window.location.search + '_end']
   }
               resumePlayback();


   

  
      var played = true;
      endTime();


  interval = setInterval(function () {
         endTime();
         if('playlist' in player){
if(player.playlist.currentItem() == 0){ return;}

         }
         localStorage[window.location.search] = player.currentTime();
            localStorage[window.location.search+'_duration'] = player.duration();
         if (player.duration() - player.currentTime() < player.duration() - finishDur) {
if(!JSON.parse(localStorage['showData'])[currentEpisode.show]){
return;
  }
            var showJson = JSON.parse(localStorage['showData'])[currentEpisode.show].seasons[currentEpisode.season]
            for (var i = showJson.length - 1; i >= 0; i--) {
           //    console.log(showJson[i])
               if (showJson[i].episode == currentEpisode.episode ) {

                  if (i+1 - showJson.length - 1 == -1 ) {console.log('no episode newer');return;}

               next = showJson[i+1]
               document.querySelector('.showTitle').innerHTML = currentEpisode.show
               document.querySelector('.episode').innerHTML = next.episode
               document.querySelector('.upnext').style.display = 'block';

               }
            }
         }
       
      }, 2000);

      document.body.onunload = function () {
         localStorage[window.location.search] = player.currentTime();
         localStorage[window.location.search+'_duration'] = player.duration();
      };

  
         ga('send', 'pageview');
   }, false);
   



   };

  

if (localStorage[window.location.search] == '' || localStorage[window.location.search] == 'undefined') {
   console.log("No cookie for position found");
   var currentPosition = 0;
} else {
   if (localStorage[window.location.search] == "null") {
      localStorage[window.location.search] = 0;
   } else {
      var currentPosition = localStorage[window.location.search];
   }
   console.log("Position cookie found: " + localStorage[window.location.search]);
}

var foxwholescript;
if (!String.prototype.includes) {
   String.prototype.includes = function () {
      'use strict';

      return String.prototype.indexOf.apply(this, arguments) !== -1;
   };
}
var parser = new DOMParser();
function tohtml(data, type) {
   if (type != 'xml') {
      return parser.parseFromString(data, "text/html");
   }
   if (type == 'xml') {
      return parser.parseFromString(data, "text/xml");
   }
}
function toTitleCase(str) {
   return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
   });
}

function openWithoutReferrer(url) {
  var site = window.open("", "hide_referrer");
  site.document.open();
  site.document.writeln('<script type="text/javascript">window.location = "' + url + '";</script>');
  site.document.close();
}

downloader.onclick = function(){
  if (downloader.href == '') {
    return;
  }
  openWithoutReferrer(downloader.href)
return false;
player.src({src:downloader.href,type:'application/x-mpegURL'})
   var vid = document.getElementById(player.el().children[0].id);

   vid.addEventListener('oncanplay', function () {

    player.currentTime(localStorage[window.location.search]);
    localStorage[window.location.search] = player.currentTime()

   }, false);
return false;
}
function raw(url) {
   console.log(url);
   url = url.split('_=')[1];
   console.log(url);
   showname.innerHTML = url;
   document.getElementById('downloader').href = url;

   player.src({ "type": "application/x-mpegURL", "src": url });
   player.play();
   resume();
}
function parseHTML(html) {
    var t = document.createElement('template');
    t.innerHTML = html;
    return t.content.cloneNode(true);
}







// CWTV Fetch 
var hostcw
var showPreload = []

function fetchcwjson(value) {
   console.log(value);
   document.getElementById('progress').style.width = "35%";
   var stripped = value.split('?')[1].split('=')[1].split('/')[0];
   console.log(stripped
   // HLS = 154 | 206
   // MP4 = 213
   );var url = "http://metaframe.digitalsmiths.tv/v2/CWtv/assets/" + stripped + "/partner/217?format=json";
   fetch(url).then(function(res){return res.json();}).then(function(data){
 document.getElementById('downloader').href = data.videos.variantplaylist.uri.replace('http://hlsioscwtv.warnerbros.com','https://www.cwtv.com',);
resume()

   })
     fetch(`https://dai.google.com/ondemand/hls/content/6698/vid/${stripped}/streams`,{
         method:"POST",
       //  body:"cust_params=osgrp%253DIOS%2526devgrp%253DTAB%2526dfp_msid%253D491730359%2526DV_TYPE%253Diphone%2526os_name%253DiPhone%20OS%2526appversion%253D3.2%2526AD_POD%253DMobile%20App%2526time%253D120%252C90%252C60%252C30%252C15%252C10%252C5%2526platform%253DMBL%2526osver%253D11.4%2526devid%253D89523F40-4515-4401-858D-2B22EC4027CD%2526optout%253D1%2526DV_SDK%253Dios%2526IDFA%253D89523F40-4515-4401-858D-2B22EC4027CD%2526device%253Diphone%2526nielsenid%253DP1F71EB62-8D87-40FE-856C-74F299710E17%2526model%253DiPhone&iu=4266%2Fcwtv.fullstream%2Fflash%2F%2Fiphone&description_url=http%3A%2F%2Fwww.cwtv.com&api-key=il5qfm01e0lq81vuck744kokf&msid=0&idtype=idfa&is_lat=1&ms=hGpy2Ib7moETSblYkr9XESHBp-SLQY8LpHVj_pXvZbr4oiVBjqNm3DO13gs0mq3PnqzIXtPUtVmtumi8cfHPsySrsHimaEgbUFEiEJ7f8FzfwjYo9qVu05SprUxAnpqrEyg86SGrQWq12fpXqcSK2l6skJmwKOdb9qQQskLSoq-YfszLjBFEBVSYHu2O7-1I-WmZ06SfAt5IcNoaxgSrYwcMQ3GkU6gmCnuGF274KdlaNBiOBSvZ1JNH2nKJJRuOsGUimyPAAHPdvQ847nZnJpRmzXeFcKdW4sPZKmgSLz1vXl0JCWiOidsjfX4oUirX1Z-TSjH3X5GzgrGa_TiBdQ&js=ima-ios.3.6.1&correlator=839407548414813&osd=2&rdid=00000000-0000-0000-0000-000000000000&sdkv=h.3.59.1%2Fn.ios.3.6.1%2Fcom.cw.fullepisodes.ios&url=http%3A%2F%2Fwww.cwtv.com&an=com.cw.fullepisodes.ios&eid=668123028&frm=0&submodel=iPhone10%2C2",
         headers:new Headers({
            Authorization:'DCLKDAI key="il5qfm01e0lq81vuck744kokf"',
                'Content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
                'Accept-Encoding': 'br, gzip, deflate',
                'Accept-Language':'en-us'

/*
POST https://dai.google.com/ondemand/hls/content/6698/vid/689230bf-a9c2-4918-9e75-459d8507dc9b/streams HTTP/1.1
Content-Type: application/x-www-form-urlencoded;charset=UTF-8
Accept-Encoding: br, gzip, deflate
Content-Length: 1248
Accept-Language: en-us


*/

         })
      }).then(function(res){return res.json();}).then(function(hls){
if('subtitles' in hls){
      track = player.addRemoteTextTrack({kind:"captions",src:hls.subtitles[0].webvtt, srclang:"English"});

}
//if(player.src() == ''){
   var pl  = []
if(player.src() == ''){
player.src([{"src":hls.stream_manifest, "type": "application/vnd.apple.mpegurl"}]);
                 player.play();

   }else{
      /*
   pl.push(showPreload,{
  sources: [{
    src: hls.stream_manifest,
    type: "application/vnd.apple.mpegurl"
  }]
})

console.log(pl)
player.playlist(pl)
player.playlist.autoadvance(-1);
   
*/
   }


//player.src([{"src":hls.stream_manifest, "type": "application/vnd.apple.mpegurl"}]);
  //                player.play();
      resume();
//}
            
      })





   
    fetch('https://link.theplatform.com/s/cwtv/media/guid/2703454149/'+stripped+'?formats=m3u&format=script').then(function(res){

    //  console.log(res)
      if(res.status == 200){
                 return res.json();


      }else{
      }
   }).then(function(metadata){
     if(metadata == undefined){
      return;
     }
              console.log('1080p available!')


         currentEpisode = {show:metadata['cw$seriesTitle'],episode:metadata.title,season:metadata['cw$seasonNumber']}
 showname.innerHTML = metadata['cw$seriesTitle'];
fetch('http://images.cwtv.com/feed/mobileapp/shows/apiversion_7/channel_cwtv/pagesize_100/').then(function(res){return res.json();}).then(function(shows){
   console.log(shows)
   for(i in shows.items){
      if(shows.items[i].series_code == metadata['cw$seriesCode']){
      document.getElementById('showname').innerHTML = '<img style="    margin-bottom:-5px;height: 4.0em;display:inline-block;" src="https://images.cwtv.com/images/cw/show-logo-horz/' + shows.items[i].slug + '.png">';

      }
   }
})

      showdesc.innerHTML = metadata.description;
      document.getElementById('epname').innerHTML = metadata.title;

            document.title = metadata['cw$seriesTitle'] + " - " + metadata.title;









      var media = metadata.captions[0].src.split('The_CW')[1].split('_')
      console.log('https://'+metadata.captions[0].src.split('/')[2])
      //'https://'+metadata.captions[0].src.split('/')[2]
  /*  
     hostNames:
     https://stream-hls.cwtv.com/nosec/The_CW 
     https://3aa37dc0e8bb47e08042e0ebb25acb34.dlvr1.net/nosec/The_CW 
     https://edge.cwtv-vod.top.comcast.net/nosec/The_CW
     https://cwtv-amd-akamai.akamaized.net/nosec/The_CW
*/
media.splice(-4)
/*
{
  sources: [{
    src: 'http://media.cwtv.com/cwtv/Prime/Season/1213/Shows/General/CW-'+metadata['cw$seriesCode']+'-05-ShowID-2017-ComboID.mp4',
    type: 'video/mp4'
  }],
},
*/
player.src({
    src: 'https://'+metadata.captions[0].src.split('/')[2] + '/nosec/The_CW'+ media.join('_') + '.m3u8',
    type: 'application/vnd.apple.mpegurl'
})
if(getLastTime().start > 10){
  // player.playlist.next();

}
 resume()
   })
   

         bg('https://images.cwtv.com/thecw/img/w_720.s_mobile.i_video_thumbnail.guid_'+stripped+'.jpg');


      fetch('https://images.cwtv.com/feed/mobileapp/video-meta/apiversion_7/guid_'+stripped).then(function(res){return res.json();}).then(function(episode_data){
      if(episode_data.result == 'error'){return;}

         currentEpisode = {show:episode_data.video.series_name,episode:episode_data.video.title,season:episode_data.video.availability_asset_id.split('-')[episode_data.video.availability_asset_id.split('-').length - 1].split('E')[0].split('S')[1]}
      showname.innerHTML = episode_data.video.series_name;
      document.getElementById('showname').innerHTML = '<img style="    margin-bottom:-5px;height: 4.0em;display:inline-block;" src="https://images.cwtv.com/images/cw/show-logo-horz/' + episode_data.video.show_slug + '.png">';
      showdesc.innerHTML = episode_data.video.description_long;
      document.getElementById('epname').innerHTML = episode_data.video.title;
            document.title = episode_data.video.series_name + " - " + episode_data.video.title;
            return;
showPreload = {
  sources: [{
    src: 'http://media.cwtv.com/cwtv/Prime/Season/1213/Shows/General/CW-'+episode_data.video.series+'-05-ShowID-2017-ComboID.mp4',
    type: 'video/mp4'
  }],
}
      })
// Get Captions!
 fetch('http://api.digitalsmiths.tv/metaframe/65e6ee99/asset/' + stripped + '/filter').then(function (res) {
      return res.json();
   }).then(function (cap) {
      track = player.addTextTrack("subtitles", "English Alt", "en");
      for (i = 0, len = cap.length; i < len; ++i) {
         if(cap[i].track == 'Closed Captioning'){
         track.addCue(new VTTCue(cap[i].startTime, cap[i].endTime, cap[i].metadata.Text));
      }
      if(cap[i].track == 'Video Attributes'){
         localStorage[window.location.search + '_end'] = cap[i].startTime - 3.5
      }
      }
   });
   
console.log(url)
return;

   fetch(url, {
      method: 'get'
   }).then(function (response) {
      return response.json();
   }).then(function (data) {
    
      document.getElementById('progress').style.width = "50%";
      // finalurl = data.videos.hls5128.uri;
      finalurl = data.videos.variantplaylist_dai.uri;
 // { "src": data.assetFields.smoothStreamingUrl + '(format=mpd-time-csf).mpd', "type": "application/dash+xml" }, { "src": data.assetFields.smoothStreamingUrl + '(format=m3u8-aapl).m3u8', "type": "application/x-mpegURL" }, { "src": finalurl, "type": "application/x-mpegURL" },
     




   //   player.src([{ "src": finalurl, "type": "application/vnd.apple.mpegurl" },{ "src": data.assetFields.smoothStreamingUrl + '(format=m3u8-aapl).m3u8', "type": "application/x-mpegURL" },{"src":  'http://cwtv-mrss-akamai.cwtv.com/'+ data.videos.variantplaylist.uri.split('videos/')[1].split('.m3u8')[0] + '_3596kbps.mp4',"type":"video/mp4"}]);
    // console.log('http://hlsioscwtv.warnerbros.com/hls/'+finalurl.replace('ioshlskeys','hls').split('_dai')[0].split('/videos/')[1] + '_dai_6628kbps/'+finalurl.replace('ioshlskeys','hls').split('_dai')[0].split('/videos/')[1] + '_dai_6628kbps.m3u8')
    // console.log(finalurl)


// player.src({"src":url, "type": "application/vnd.apple.mpegurl"})


      console.log(finalurl);
      getShowinfo(data.assetFields.seriesName)
currentEpisode = {show:data.assetFields.seriesName,episode:data.assetFields.title}
      showname.innerHTML = data.assetFields.seriesName;
      document.getElementById('showname').innerHTML = '<img style="    margin-bottom:-5px;height: 4.0em;display:inline-block;" src="http://images.cwtv.com/images/cw/show-logo-horz/' + data.assetFields.showSlug + '.png">';
      showdesc.innerHTML = data.assetFields.description;

      document.title = data.assetFields.seriesName + " - " + data.assetFields.title;
      document.getElementById('progress').style.width = "60%";
      document.getElementById('downloader').href = 'http://cwtv-mrss-akamai.cwtv.com/'+ data.videos.variantplaylist.uri.split('videos/')[1].split('.m3u8')[0] + '_5128kbps.mp4';

      /*  player.src({
           "type": "application/x-mpegURL",
           "src": finalurl 
        }); */


      document.getElementById('epname').innerHTML = data.assetFields.title;
      isDone = true;
   }).catch(function(e){
     // error()
      console.log(e)
   });
}
// ABC Fetch 
var sessionKey;
var videourl;
function om(data) {
   console.log(data.video[0].assets.asset[0].value);
   document.getElementById('progress').style.width = "60%";
   showname.innerHTML = data.video[0].show.title;
   showdesc.innerHTML = data.video[0].longdescription;
   document.title = data.video[0].show.title + "- " + data.video[0].title;

   var brand = "001";
   if (data.video[0].url.includes('disneyxd')) {
      brand = "009";
   }
   $.post("https://api.entitlement.watchabc.go.com/vp2/ws-secure/entitlement/2020/authorize.json", {
      video_type: "lf",
      brand: brand,
      device: "001",
      video_id: data.video[0].id
   }, function (sessionkey, status) {
      document.getElementById('progress').style.width = "70%";
      sessionKey = sessionkey.uplynkData.sessionKey;
      console.log(sessionKey);
      videourl = data.video[0].assets.asset[0].value + "?" + sessionKey;
      document.getElementById('downloader').href = videourl;
      console.log(videourl);

      player.src({ "type": "application/x-mpegURL", "src": videourl });
      resume();
      document.getElementById('epname').innerHTML = data.video[0].title;

      document.getElementById('progress').style.width = "100%";
document.getElementById('projpar').style.display = 'none'
   });
}
function fetchabcjson(value) {
   document.getElementById('progress').style.width = "35%";

   if (value.includes('abc.go.com/disvidcode=')) {
      console.log(value.split('=')[1]);
      addJS('https://api.contents.watchabc.go.com/vp2/ws/contents/3000/videos/009/001/-1/-1/-1/' + value.split('=')[1] + '/-1/-1.jsonp?callback=om');
   }

   if (value.includes('abc.go.com/vidcode=')) {
      console.log(value.split('=')[1]);
      addJS('https://api.contents.watchabc.go.com/vp2/ws/contents/3000/videos/001/001/-1/-1/-1/' + value.split('=')[1] + '/-1/-1.jsonp?callback=om');
   } else {

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
         if (this.readyState == 4 && this.status == 200) {
            document.getElementById('progress').style.width = "50%";
            html = this.responseText;
            var showidjson = JSON.parse(this.responseText).query.results.div['data-video-id'];
            console.log(showidjson);
            addJS('https://api.contents.watchabc.go.com/vp2/ws/contents/3000/videos/001/001/-1/-1/-1/' + showidjson + '/-1/-1.jsonp?callback=om');
         }
      };
      xhttp.open("GET", 'https://query.yahooapis.com/v1/public/yql?q=select%20data-video-id%20from%20html%20where%20url%3D%27' + value + '%27%20and%20compat%3D"html5"%20and%20xpath%3D%27%2F%2Fdiv%5B%40class%3D"videoContainer%20m-videoplayer-embed%20m-videoplayer-embed-lf"%5D%27&format=json&callback=', true);

      xhttp.send();
   }
}

// FOX Fetch
function fetchfoxjson(value) {
foxapi('https://api.fox.com/fbc-content/v1_4/video' + value.split('/watch')[1])
return;
     fetch('https://api.fox.com/fbc-content/v1_4/video/' + value.split('/watch')[1],{
    headers: new Headers({
    'apikey': 'rm7dzFLzucfbXAVkZi8e1P34PWEN4GoR'
  })
  }).then(function(res){return res.json();}).then(function(json){
console.log(json)
  bg(json.images.still.HD);
         getShowinfo(json.seriesName);
         showname.innerHTML = json.seriesName;
         showdesc.innerHTML = json.description;
         document.getElementById('epname').innerHTML = json.name;

         document.title = json.seriesName + " - " + json.name;
          play(json.videoRelease.url)
                            document.getElementById('showname').innerHTML = '<img style="    margin-bottom:-5px;width: 6.0em;display:inline-block;" src="' + json.images.logo.FHD + '" width="100%">';

  })

}

// CBS Fetch
String.prototype.toSeconds = function () { if (!this) return null; var hms = this.split(':'); return (+hms[0]) * 60 * 60 + (+hms[1]) * 60 + (+hms[2] || 0); }
function fetchcbsjson(value) {
   document.getElementById('progress').style.width = "35%";
   if (value.includes('http')) {
      searchValue = value.split('/')[6];
   } else {
      searchValue = value.split('/')[4];
   }
   if (value.slice(-1) == "/") {
      value = value.slice(0, -1);
   }
   console.log(searchValue);
   fetch("https://link.theplatform.com/s/dJ5BDC/media/guid/2198311517/" + searchValue + "?mbr=true&formats=m3u&format=redirect").then(function(res){
      player.src({type:'application/x-mpegURL',src:res.url})
      resume();
   })


   fetch("https://link.theplatform.com/s/dJ5BDC/media/guid/2198311517/" + searchValue + "?format=preview").then(function(res){return res.json()}).then(function(data){
      document.getElementById('progress').style.width = "50%";
        bg(data.defaultThumbnailUrl);

fetch(data.cbs$ClosedCaptionURL).then(function(res){return res.text()}).then(function(text){

var parser = new DOMParser();
var htmlDoc = parser.parseFromString(text, "text/xml")
htmlDoc = htmlDoc.getElementsByTagName('p')
      track = player.addTextTrack("captions", "English", "en");

for(i in htmlDoc){
               track.addCue(new VTTCue(htmlDoc[i].getAttribute('begin').toSeconds(), htmlDoc[i].getAttribute('end').toSeconds(), htmlDoc[i].innerHTML));

}


})
      getShowinfo(data.cbs$SeriesTitle);
      showname.innerHTML = data.cbs$SeriesTitle;
      document.getElementById('epname').innerHTML =  data.title
      showdesc.innerHTML = data.description;
      document.title = data.cbs$SeriesTitle + ' - '+ data.title;

   })


}
// NBC 
var mediaurl;
var iframeDOM = document.createElement('html');
var pageDOM = document.createElement('html');

function fetchnbcjson(value) {
   fetch('https://link.theplatform.com/s/NnzsPC/media/guid/2410887629/'+3104027+'?&fallbackSiteSectionId=1676939&manifest=m3u&switch=HLSOriginSecure&sdk=PDK%205.7.16&&formats=m3u,mpeg4&format=redirect').then(function(res){
   console.log(res.url.replace('3104027',value.split('/')[value.split('/').length-1]))
   player.src({type:'application/vnd.apple.mpegurl',src:res.url.replace('3104027',value.split('/')[value.split('/').length-1]).replace('http://','http://')})
   resume();
   console.log('http://tkx-cable-prod.nbc.anvato.net/rest/v2/mcp/video/'+value.split('/')[value.split('/').length-1]+'?'+res.url.replace('3104027',value.split('/')[value.split('/').length-1]).replace('http://','http://').split('?')[1])
})

fetch('https://link.theplatform.com/s/NnzsPC/media/guid/2410887629/'+value.split('/')[value.split('/').length-1]+'?format=script').then(function(res){return res.json()}).then(function(meta){
   showname.innerHTML = (meta['nbcu$seriesShortTitle'])
var episode_title =  (meta['title'])
var description =  (meta['description'])
   currentEpisode = {show:meta['nbcu$seriesShortTitle'],episode:episode_title,season:meta['nbcu$seasonNumber']}
      showdesc.innerHTML = description;
      document.title =  meta['nbcu$seriesShortTitle'] + ' - ' + episode_title;
      document.getElementById('epname').innerHTML = episode_title;

   fetch('https://api.nbc.com/v3.14/shows?filter[shortTitle]='+meta['nbcu$seriesShortTitle']).then(function(res){return res.json()}).then(function(showapi){
      fetch('https://api.nbc.com/v3.14/images/'+showapi.data["0"].relationships.logo.data.id).then(function(res){return res.json()}).then(function(image){
          document.getElementById('showname').innerHTML =    '<img style="margin-bottom:-5px;width: 11.0em;display:inline-block;margin-top: -50%;margin-bottom: 2%;margin-left: -4%;" src="'+'https://img.nbc.com/'+image.data.attributes.path+'" width="100%">'
      })
   })
         console.log(meta.defaultThumbnailUrl.replace('.jpg','_1200.fs'))
         fetch('https://link.theplatform.com/s/NnzsPC/media/guid/2410887629/'+value.split('/')[value.split('/').length-1]+'?format=smil').then(function(res){return res.text();}).then(function(smil){

          //  var doc = document.createElement('body')
            //doc.innerHTML = smil
            //console.log(doc)
         })
   fetch(  meta.defaultThumbnailUrl.replace('.jpg','_1200.fs')).then(function(res){return res.json();}).then(function(preview){
   var vidPreview = {}
eachCount = (preview.endTime / preview.imageCount / 1000)
   for (i = 0; i <  preview.thumbnails.length; i++) {
      vidPreview[`${(i*eachCount)}`] = {"src":preview.thumbnails[i]}
            console.log((i*eachCount))

   }
   console.log(vidPreview)
   player.thumbnails(vidPreview);
})


   bg(meta.defaultThumbnailUrl+'?impolicy=nbc_com&imwidth=720')
})

}
// AdultSwim
function fetchaswimjson(value) {
   if (value.includes('asdir=')) {
      value = value.split('asdir=')[1];

      fetch('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20json%20where%20url%3D"http%3A%2F%2Fwww.adultswim.com%2Fvideos%2Fapi%2Fv2%2Fvideos%2F' + value + '%3Ffields%3Dtitle%252Ctype%252Cduration%252Ccollection_title%252Cimages%252Cstream%252Csegments%252Ctitle_id%26iframe%3Dfalse"%20&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=').then(function (response) {
         return response.json();
      }).then(function (returnedValue) {
         document.getElementById('progress').style.width = "75%";
         showname.innerHTML = returnedValue.query.results.json.data.collection_title;
         getShowinfo(returnedValue.query.results.json.data.collection_title)
         document.getElementById('epname').innerHTML = returnedValue.query.results.json.data.title;
         bg(returnedValue.query.results.json.data.images[returnedValue.query.results.json.data.images.length -1].url)
         document.title = returnedValue.query.results.json.data.collection_title + "- " + returnedValue.query.results.json.data.title;

         //    showdesc.innerHTML = returnedValue.query.results.video.description
         console.log(returnedValue.query.results.json.data.stream.assets);

         for (var i = 0; i < returnedValue.query.results.json.data.stream.assets.length; i++) {
            console.log(returnedValue.query.results.json.data.stream.assets[i]);

            if (returnedValue.query.results.json.data.stream.assets[i].mime_type == "application/x-mpegURL" && returnedValue.query.results.json.data.stream.assets[i].url.includes('_full')) {
               if (!hlsSupported) 
               {
                continue;
               }
               console.log(returnedValue.query.results.json.data.stream.assets[i].url);
               videofile = returnedValue.query.results.json.data.stream.assets[i].url;
               document.getElementById('downloader').href = videofile;
               player.src({ "type": "application/x-mpegURL", "src": videofile });
               resume();
               document.getElementById('downloader').href = videofile;

               document.getElementById('progress').style.width = "100%";
document.getElementById('projpar').style.display = 'none'

               return;
            }else{
       if (returnedValue.query.results.json.data.stream.assets[i].mime_type == "video/mp4") {
                videofile = returnedValue.query.results.json.data.stream.assets[i].url;
               document.getElementById('downloader').href = videofile;
               player.src({ "type": "application/x-mpegURL", "src": videofile });
               resume();
               document.getElementById('downloader').href = videofile;

               document.getElementById('progress').style.width = "100%";
document.getElementById('projpar').style.display = 'none'
return;

          }
   
         }
         }

         // ...
      });

      return;
   }
   console.log(value);
   fetch("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%27" + value + '%27%20and%20compat%3D"html5"%20and%20xpath%3D"%2F%2Fscript"&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=', {
      method: 'get'
   }).then(function (response) {
      return response.json();
   }).then(function (final) {
      document.getElementById('progress').style.width = "50%";
      for (var i = final.query.results.script.length - 1; i >= 0; i--) {
         var script = final.query.results.script[i];
         if (whatIsIt(script) == 'String') {
            if (script.includes('_AS_INITIAL_DATA')) {
               eval(final.query.results.script[i]);
               console.log(__AS_INITIAL_DATA__.show.sluggedVideo.id);
               fetch('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20json%20where%20url%3D"http%3A%2F%2Fwww.adultswim.com%2Fvideos%2Fapi%2Fv2%2Fvideos%2F' + __AS_INITIAL_DATA__.show.sluggedVideo.id + '%3Ffields%3Dtitle%252Ctype%252Cduration%252Ccollection_title%252Cimages%252Cstream%252Csegments%252Ctitle_id%26iframe%3Dfalse"%20&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=').then(function (response) {
                  return response.json();
               }).then(function (returnedValue) {
                  document.getElementById('progress').style.width = "75%";
                  showname.innerHTML = returnedValue.query.results.json.data.collection_title + "- " + returnedValue.query.results.json.data.title;
                  document.title = returnedValue.query.results.json.data.collection_title + "- " + returnedValue.query.results.json.data.title;

                  //    showdesc.innerHTML = returnedValue.query.results.video.description
                  console.log(returnedValue.query.results.json.data.stream.assets);

                  for (var i = 0; i < returnedValue.query.results.json.data.stream.assets.length; i++) {
                     console.log(returnedValue.query.results.json.data.stream.assets[i]);

                     if (returnedValue.query.results.json.data.stream.assets[i].mime_type == "application/x-mpegURL") {
                      if (!hlsSupported) {
                        continue;
                      }
                        console.log(returnedValue.query.results.json.data.stream.assets[i].url);
                        videofile = returnedValue.query.results.json.data.stream.assets[i].url;
                        player.src({ "type": "application/x-mpegURL", "src": videofile });
                        resume();
                        document.getElementById('downloader').href = videofile;

                        document.getElementById('progress').style.width = "100%";
document.getElementById('projpar').style.display = 'none'

                        return;
                     }
                  }

                  // ...
               });
            }
         }
      }
      // ...
   });
}
// AMC Fetcher
function fetchamcjson(value) {
   console.log(value);
   fetch("https://query.yahooapis.com/v1/public/yql?q=select%20data-video-id%2Ccontent%2Cproperty%20from%20html%20where%20url%3D%27" + value + '%27%20and%20compat%3D"html5"%20and%20xpath%3D"%2F%2Fdiv%5B%40class%3D%20%27platform-container%27%5D%7C%2F%2Fmeta%5B%40property%3D%27og%3Atitle%27%5D%7C%2F%2Fmeta%5B%40property%3D%27og%3Adescription%27%5D"&format=json&callback=').then(function (response) {
      return response.json();
   }).then(function (data) {
      document.getElementById('progress').style.width = "50%";
      console.log(data);
      showname.innerHTML = data.query.results.meta[0].content;
      document.title = data.query.results.meta[0].content;

      showdesc.innerHTML = data.query.results.meta[1].content;
      document.getElementById('downloader').href = "https://link.theplatform.com/s/M_UwQC/media/" + data.query.results.div['data-video-id'] + '?mbr=true&manifest=m3u&metafile=false';

      player.src({ "type": "application/x-mpegURL", "src": "https://link.theplatform.com/s/M_UwQC/media/" + data.query.results.div['data-video-id'] + '?mbr=true&manifest=m3u&metafile=false' });

      resume();
      document.getElementById('progress').style.width = "100%";
document.getElementById('projpar').style.display = 'none'
      isDone = true;
   });
}
// fxfetch
function fetchfxjson(value) {

      var epiname;
      // url (required), options (optional)
      document.getElementById('progress').style.width = "30%";
      // url (required), options (optional)
        fetch('https://api.fox.com/fbc-content/v1_4/video?externalId=' + value.split('video/')[1],{
    headers: new Headers({
    'apikey': 'rm7dzFLzucfbXAVkZi8e1P34PWEN4GoR'
  })
  }).then(function(res){return res.json();}).then(function(json){
console.log(json)
  bg(json.member["0"].images.still.HD);
         getShowinfo(json.member["0"].seriesName);
         showname.innerHTML = json.member["0"].seriesName;
         showdesc.innerHTML = json.member["0"].description;
         document.getElementById('epname').innerHTML = json.member["0"].name;


         document.title = json.member["0"].seriesName + " - " + json.member["0"].name;
          play(json.member["0"].videoRelease.url,url.split('&auth=')[1])
                  document.getElementById('showname').innerHTML = '<img style="    margin-bottom:-5px;width: 6.0em;display:inline-block;" src="' + json.member["0"].images.logo.FHD + '" width="100%">';
  bg(json.member["0"].images.still.HD);
document.getElementById('projpar').style.display = 'none'

  })
}


function play(url,auth){
// '?mbr=true&formats=m3u&format=smil&sitesection=app.dcg-foxnow%2Fiphone%2Ffxn%2Flive&assetTypes=uplynk-clean%3Auplynk-ivod-west%3Auplynk-ivod-mountain%3Auplynk-ivod-east%3Auplynk-ivod&auth=' + auth 
// ?mbr=true&format=script
     fetch(url.split('?')[0] + '?format=script', {
         method: 'get'
      }).then(function (response) {
           return response.json();
      }).then(function (play) {
       
/*
parser = new DOMParser();
xmlDoc = parser.parseFromString(play,"text/xml");
*/
// param[name="testPlayerUrl"]
/*
if(play['fwivi$advertisingData'].network == 'fox'){
   // return;
}
*/
if ('uplynk$testPlayerUrl' in play) {
fetch(play.uplynk$testPlayerUrl.replace('http://','https://') + '?rays=gkjihfedcba&ray=&exp='+(new Date().getTime() + 10000000 ) / 1000
).then(function(res){if(res.status != 200){ backupWay(url)
}else{
   return res.text();
}
}).then(function(m3u8){
  var m3u8 = parser.parseFromString(m3u8,"text/html").body.querySelector('script').innerHTML.split("';")[0].split("'")[1]
  console.log(m3u8.split('.')[2].split('/')[1])
console.log(m3u8)
document.getElementById('downloader').href = m3u8
    player.src({ "type": "application/x-mpegURL", "src": m3u8 });
        resume();
   // backupWay(url)
fetch('https://content-ause3.uplynk.com/player/assetinfo/'+m3u8.split('.')[2].split('/')[1]+'.json').then(function(res){return res.json();}).then(function(videoData){
   console.log(videoData)
 var vidPreview = {}
eachCount = videoData.slice_dur
console.log(Math.ceil(videoData.duration / videoData.slice_dur))
function toPaddedHexString(num, len) {
    str = num.toString(16);
    return "0".repeat(len - str.length) + str.toUpperCase();
}
/*
   for (i = 0; i <  Math.ceil(videoData.duration / videoData.slice_dur); i++) {
    if(i % 3 == 0){
      //upl256
            vidPreview[`${(i*eachCount)}`] = {"width":"256","src":videoData.thumb_prefix + '' + toPaddedHexString(i,8) + '.jpg',"tempsrc":videoData.thumb_prefix + toPaddedHexString(i,8) + '.jpg'}

var img = new Image;
      img.src = videoData.thumb_prefix + '' + toPaddedHexString(i,8) + '.jpg'
    }
     

   }
   console.log(vidPreview)
   player.thumbnails(vidPreview);
*/

})

})
}else{
 backupWay(url)
}
function backupWay(url){

   console.log(play.fox$freewheelId)


     // &sitesection=app.dcg-foxnow%2Fios%2Ffxn%2Flive
   // app.dcg-foxnow%2Fiphone%2Ffxn%2Flive
   // app.dcg-foxnow%2Fappletv%2Ffox
   fetch(url.split('?')[0] + '?formats=m3u&assetTypes=uplynk-clean%3Auplynk-ivod-west%3Auplynk-ivod-mountain%3Auplynk-ivod-east%3Auplynk-ivod&sitesection=app.dcg-foxnow%2Fiphone%2Ffxn&auth='+auth).then(function(res){if(res.status != 200){
return;
}else{return res.json();}}).then(function(play){
fetch(play.interstitialURL.replace('http://','https://')).then(function(res){return res.text()
}).then(function(ads){
  parser = new DOMParser();
xmlDoc = parser.parseFromString(ads,"text/xml");
var adTimes = xmlDoc.querySelector('interstitialGroup').children
var ads = []
//var adstrack = player.addTextTrack("metadata", "ads", "en");
//adstrack.mode = 'hidden';
for (var i = adTimes.length - 1; i >= 0; i--) {
  ads.push({start:adTimes[i].querySelector('start').innerHTML,end:adTimes[i].querySelector('end').innerHTML})
  console.log({start:adTimes[i].querySelector('start').innerHTML,end:adTimes[i].querySelector('end').innerHTML})
  //         adstrack.addCue(new VTTCue(adTimes[i].querySelector('start').innerHTML,adTimes[i].querySelector('end').innerHTML, ''));
}

function adsHandle(time){
for (var i = ads.length - 1; i >= 0; i--) {
  if(time.between(ads[i].start,ads[i].end)){
return {playing:true,end:ads[i].end};
}
}
return {playing:false};
}
/*
adstrack.addEventListener('cuechange', function() {
    var cues = this.cues;
    console.log(cues)
    if (player.currentTime() >= cues.cues_["0"].originalCue_.endTime){}else{
    player.currentTime(cues.cues_["0"].originalCue_.endTime);

    }
    var processCue = function() {
      console.log('processCue')
    };
    var cancelAds = function() {
            console.log('cancelAds')

    };
 
  });
*/
//Skip ads 

player.on('timeupdate', function () {
  if (adsHandle(this.currentTime()).playing) {
          this.currentTime(adsHandle(this.currentTime()).end);

  }
    })
  



      });
var pbs = play.playURL.split('?')[1]
var id = play.playURL.replace('/preplay2/','/').split('uplynk.com')[1].split('/')[1]
console.log('official way',play.playURL.split('uplynk.com')[0]+'uplynk.com'+'/'+id+'.m3u8?'+pbs)
console.log(play.playURL)
         player.src({ "type": "application/x-mpegURL", "src": play.playURL });
        resume();

   }).catch(function(e){
      error()
   })
}
return;


  }).catch(function(e){
   error(e)
  })

}


function fxsite(url){
  url = url.split('_=')[1];
  fetch('https://api.fox.com/fbc-content/v1_4/video?externalId=' + document.referrer.split('video/')[1],{
    headers: new Headers({
    'apikey': 'rm7dzFLzucfbXAVkZi8e1P34PWEN4GoR'
  })
  }).then(function(res){return res.json();}).then(function(json){
console.log(json)
  bg(json.member["0"].images.still.HD);
         getShowinfo(json.member["0"].seriesName);
         showname.innerHTML = json.member["0"].seriesName;
         showdesc.innerHTML = json.member["0"].description;
         document.getElementById('epname').innerHTML = json.member["0"].name;


         document.title = json.member["0"].seriesName + " - " + json.member["0"].name;
          play(json.member["0"].videoRelease.url,url.split('&auth=')[1])
                  document.getElementById('showname').innerHTML = '<img style="    margin-bottom:-5px;width: 6.0em;display:inline-block;" src="' + json.member["0"].images.logo.FHD + '" width="100%">';

  })
}
function foxsite(url) {
   url = url.split('_=')[1];
     fetch('https://api.fox.com/fbc-content/v3_blue/video?externalId=' + document.referrer.split('watch/')[1].split("/")[0],{
    headers: new Headers({
    'apikey': 'rm7dzFLzucfbXAVkZi8e1P34PWEN4GoR'
  })
  }).then(function(res){return res.json();}).then(function(json){
console.log(json)
  bg(json.member["0"].images.still.HD);
         getShowinfo(json.member["0"].seriesName);
         showname.innerHTML = json.member["0"].seriesName;
         showdesc.innerHTML = json.member["0"].description;
         document.getElementById('epname').innerHTML = json.member["0"].name;

         document.title = json.member["0"].seriesName + " - " + json.member["0"].name;
          play(json.member["0"].videoRelease.url,url.split('&auth=')[1])
                            document.getElementById('showname').innerHTML = '<img style="    margin-bottom:-5px;width: 6.0em;display:inline-block;" src="' + json.member["0"].images.logo.FHD + '" width="100%">';

  })
}

Number.prototype.between = function(a, b) {
  var min = Math.min.apply(Math, [a, b]),
    max = Math.max.apply(Math, [a, b]);
  return this > min && this < max;
};
function foxapi(url) {
   console.log(url);

   var request = {
      method: 'GET',
      headers: {
         'ApiKey':'abdcbed02c124d393b39e818a4312055',
  "Accept":"application/json, text/plain, */*",
  "Connection":"keep-alive",
  "Accept-language":"en-US,en;q=0.9"

      }
   };
   fetch(url, request).then(function (res) {
      return res.json();
   }).then(function (item) {
      if ('member' in item) {
         console.log('not single video');
         handle(item.member[0])
         return;
      }
function convertVttToJson(vttString) {
  return new Promise((resolve, reject) => {
  var current = {}
  var sections = []
  var start = false;
  var vttArray = vttString.split('\n');
   vttArray.forEach((line, index) => {
    if (line.replace(/<\/?[^>]+(>|$)/g, "") === " "){
    } else if (line.replace(/<\/?[^>]+(>|$)/g, "") == "") {
    } else if (line.indexOf('-->') !== -1 ) {
      start = true;

      if (current.start) {
        sections.push(clone(current))
      }

      current = {
        start: timeString2ms(line.split("-->")[0].trimRight().split(" ").pop()),
        end: timeString2ms(line.split("-->")[1].trimLeft().split(" ").shift()),
        part: ''
      }
    } else if (line.replace(/<\/?[^>]+(>|$)/g, "") === ""){
    } else if (line.replace(/<\/?[^>]+(>|$)/g, "") === " "){
    } else {
      if (start){
        if (sections.length !== 0) {
          if (sections[sections.length - 1].part.replace(/<\/?[^>]+(>|$)/g, "") === line.replace(/<\/?[^>]+(>|$)/g, "")) {
          } else {
            if (current.part.length === 0) {
              current.part = line
            } else {
              current.part = `${current.part} ${line}`
            }
            // If it's the last line of the subtitles
            if (index === vttArray.length - 1) {
              sections.push(clone(current))
            }
          }
        } else {
          current.part = line
          sections.push(clone(current))
          current.part = ''
        }
      }
    }
  })

  current = []

  var regex = /(<([0-9:.>]+)>)/ig
  sections.forEach(section => {
    strs = section.part.split()
    var results = strs.map(function(s){
        return s.replace(regex, function(n){
          return n.split('').reduce(function(s,i){ return `==${n.replace("<", "").replace(">", "")}` }, 0)
        })
    });
    cleanText = results[0].replace(/<\/?[^>]+(>|$)/g, "");
    cleanArray = cleanText.split(" ")
    resultsArray = [];
    cleanArray.forEach(function(item){
      if (item.indexOf('==') > -1) {
        var pair = item.split("==")
        var key = pair[0]
        var value = pair[1]
        if(key == "" || key == "##") {
          return;
        }
        resultsArray.push({
          word: cleanWord(item.split("==")[0]),
          time: timeString2ms(item.split("==")[1]),
        })
      } else {
        resultsArray.push({
          word: cleanWord(item),
          time: undefined,
        })
      }
    })
    section.part = section.part.replace(/<\/?[^>]+(>|$)/g, "")
  })
    resolve(sections);
  })
}

// helpers
String.prototype.toSeconds = function () { if (!this) return null; var hms = this.split(':'); return (+hms[0]) * 60 * 60 + (+hms[1]) * 60 + (+hms[2] || 0); }
//   http://codereview.stackexchange.com/questions/45335/milliseconds-to-time-string-time-string-to-milliseconds
function timeString2ms(a,b){
   return a.toSeconds();
}

// removes everything but characters and apostrophe and dash
function cleanWord(word) {
  return word
}

function clone(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
}

function handle(data){
// error('this episode is not available.')
   player.duration(data.durationInSeconds)
currentEpisode = {show:data.seriesName,episode:data.name,season:data.seasonNumber}

      bg(data.images.still.HD);
            showname.innerHTML = data.seriesName;

      getShowinfo(data.seriesName);

      showdesc.innerHTML = data.description;
      if(data.name == data.seriesName){
         data.name = data.headline;
      }
      document.getElementById('epname').innerHTML = data.name;
            document.title = data.seriesName + " - " + data.name;
            if (!data.materialIDs) {
               data['materialIDs'] = []
               data.materialIDs.push(data.guid)
            }
            console.log(data.materialIDs)
            if("videoRelease" in data ){
               if(data.videoRelease.releaseType == 'VOD'){
play(data.videoRelease.url)
               }else{
                  if (data.network == 'fx') {
   play('https://link.theplatform.com/s/fox-dcg/media/guid/2696725017/'+data.materialIDs[0]+'?format=script')

}else{
play('https://link.theplatform.com/s/fox-dcg/media/guid/2696724497/'+data.materialIDs[0]+'?format=script')

}
               }
               
            }else{
if (data.network == 'fx') {
   play('https://link.theplatform.com/s/fox-dcg/media/guid/2696725017/'+data.materialIDs[0]+'?format=script')

}else{
play('https://link.theplatform.com/s/fox-dcg/media/guid/2696724497/'+data.materialIDs[0]+'?format=script')

}
            }

      window.history.replaceState('', '', '?'+data['@id']);
      document.getElementById('showname').innerHTML = '<img style="    margin-bottom:-5px;height: 4.0em;display:inline-block;" src="' + data.images.logo.FHD + '" >';


for(i in data.documentReleases){

      if(data.documentReleases[i].format == "Filmstrip" && data.documentReleases[i].width == 212){
fetch(data.documentReleases[i].url).then(function(res){return res.json();}).then(function(preview){
   var vidPreview = {}
eachCount = (preview.endTime / preview.imageCount / 1000)
   for (i = 0; i <  preview.thumbnails.length; i++) {
      vidPreview[`${(i*eachCount)}`] = {"src":preview.thumbnails[i]}

   }
   console.log(vidPreview)
   player.thumbnails(vidPreview);

})
      }
   
}


 
}
console.log(item)


handle(item)

 });
}



// Anvato
function anvato(url){
   console.log(url.split('?')[1])
  fetch('https://link.theplatform.com/s/NnzsPC/media/guid/2410887629/'+3104027+'?&fallbackSiteSectionId=1676939&manifest=m3u&switch=HLSOriginSecure&sdk=PDK%205.7.16&&formats=m3u,mpeg4&format=redirect').then(function(res){
   console.log('http://tkx-cable-prod.nbc.anvato.net/rest/v2/mcp/video/'+url.split('?')[1]+'?'+res.url.split('?')[1])
fetch('http://tkx-prod.nbc.anvato.net/rest/v2/mcp/video/'+url.split('?')[1]+'?'+res.url.split('?')[1]).then(function(res){return res.text();}).then(function(episode){
  var p = episode.split('(')

  p.splice(0, 1)
   var data = (JSON.parse(p.join('').slice(0,-1)))
     console.log(data)

    bg(data.src_image_url);
         getShowinfo(data.program_name);
         showname.innerHTML = data.program_name;
         showdesc.innerHTML = data.def_description;
         document.getElementById('epname').innerHTML = data.def_title;

player.src(data.published_urls[0].embed_url)
resume();

         for(i in data.captions){
            if(data.captions[i].format != 'SMPTE-TT' || data.captions[i].language != 'en'){continue;}
            console.log(data.captions[i])

fetch(data.captions[i].url).then(function(res){return res.text()}).then(function(text){

   var parser = new DOMParser();
   var htmlDoc = parser.parseFromString(text, "text/xml")
   htmlDoc = htmlDoc.getElementsByTagName('p')
   track = player.addTextTrack("captions", 'English (alt)', 'en');
   console.log(data.captions[i].language)
   for(i in htmlDoc){
     // if(Number(htmlDoc[i]) || htmlDoc[i] == undefined){
          //  console.log(htmlDoc[i] == undefined)
        // continue;
      //}
      console.log(htmlDoc[i].getAttribute('begin').toSeconds(),htmlDoc[i].getAttribute('begin'))
               track.addCue(new VTTCue(htmlDoc[i].getAttribute('begin').toSeconds() + 5, htmlDoc[i].getAttribute('end').toSeconds() + 5, htmlDoc[i].innerHTML));
}
})

         }

         document.title = data.program_name + " - " + data.def_title
})
  console.log(res.url.replace('3104027',url.split('?')[1]))
 //  player.src({type:'application/vnd.apple.mpegurl',src:res.url.replace('3104027',url.split('?')[1])})
   //resume();
})














}






function funimation(url){
  console.log(url)
  fetch('https://cors-anywhere.herokuapp.com/' + url).then(function(res){
    return res.text();
  }).then(function(data){
    parser = new DOMParser();
xmlDoc = parser.parseFromString(data,"text/html");
fetch(`https://prod-api-funimationnow.dadcdigital.com/api/source/catalog/video/${xmlDoc.querySelector('meta[property="al:web:url"]').content.replace('/player/','')}/signed/`).then(function(res){return res.json()}).then(function(media){
  for (var i = media.items.length - 1; i >= 0; i--) {
    if(media.items[i].videoType == 'm3u8'){
      player.src({"src":media.items[i].src,"type":'application/x-mpegURL'})
      resume()
      break;

    }
  }
})


bg(xmlDoc.querySelector('meta[property="og:image"]').content.replace('c_fill,q_60,h_630,w_1290',''))
document.getElementById('showname').innerHTML = xmlDoc.querySelector('input[name="showTitle"]').value
document.getElementById('epname').innerHTML = xmlDoc.querySelector('.content-episode').getAttribute('data-title')
console.log( xmlDoc.querySelector('.content-episode').getAttribute('data-title'))
getShowinfo(xmlDoc.querySelector('input[name="showTitle"]').value)
  })
}

var stringConstructor = "test".constructor;
var arrayConstructor = [].constructor;
var objectConstructor = {}.constructor;

function whatIsIt(object) {
   if (object === null) {
      return "null";
   } else if (object === undefined) {
      return "undefined";
   } else if (object.constructor === stringConstructor) {
      return "String";
   } else if (object.constructor === arrayConstructor) {
      return "Array";
   } else if (object.constructor === objectConstructor) {
      return "Object";
   } else {
      return "don't know";
   }
}
var testSubjects = ["string", [1, 2, 3], {
   foo: "bar"
}, 4];
for (var i = 0, len = testSubjects.length; i < len; i++) {}
















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
  "api-staging.fox.com": foxapi,
  "funimation.com": funimation,
  "cwtv.com": fetchcwjson,
  "adultswim.com": fetchaswimjson,
  "cwseed.com": fetchcwjson,
  "abc.go.com": fetchabcjson,
  "amc.com": fetchamcjson,
  "cbs.com": fetchcbsjson,
  "nbc.com": fetchnbcjson,
  "fox.com": fetchfoxjson,
  "fxnetworks.com": fetchfxjson,
  "anvato.com?":anvato,

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
var currenturl = decodeURIComponent(currenturl)
var xhttp = new XMLHttpRequest();

function findName(url) {
   //player.src({})
var oldTracks = player.textTracks();
var i = oldTracks.length;
while (i--) {
 //  player.removeTextTrack(oldTracks[i]);
}

if (url) {
   currenturl = url
}
  document.getElementById('progress').style.width = "0%";
  for (tv in sitefunctions) {

    if (currenturl.includes(tv)) {
      console.log(tv + " detected");
      url = currenturl;
      sitefunctions[tv](url

      //        eval(sitefunctions[tv]);
      );isDone = true;
      return;
    }
  }
}
document.getElementById('progress').style.width = "15%";

function googleAPI() {

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById('progress').style.width = "25%";
     var googlejson = JSON.parse(this.responseText);
      console.log(googlejson.items)
       googleurl = googlejson.items[0].link;
      console.time();
      console.log(googleurl)


for (i = 0; i < googlejson.items.length; i++) {
   console.log(googlejson.items[i].pagemap.metatags)
   if('pagemap' in googlejson.items[i]){
      if ('metatags' in googlejson.items[i].pagemap) {

 if ('og:url' in googlejson.items[i].pagemap.metatags[0]) {
               googleurl = googlejson.items[0].pagemap.metatags[0]['og:url'];
               console.log(googlejson.items[0].pagemap.metatags[0]['og:url'])
 
 break;
      }

      }
     
   }
}
console.log(googleurl)

      for (tv in sitefunctions) {
        if (isDone == false) {

          if (googleurl.includes(tv)) {
            console.log(tv + " " + "Detected");
            url = googleurl;

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
  xhttp.open("GET",   "https://www.googleapis.com/customsearch/v1?key=AIzaSyC8eHgHgJMD1rEFv97zeEuQXHk878ZLNcc&cx=009916453314335219988:-0yvqrz4snu&q="+currenturl, true);
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
//      document.getElementsByClassName('showImg')[0].href = "https://www.tvtime.com/en/show/" + data.query.results.json.id;
  //    document.getElementsByClassName('showImg')[0].innerHTML = '<img width="100%" src="' + data.query.results.json.all_images.poster._[3] + '">';
    //  document.getElementById('showname').href = "https://www.tvtime.com/en/show/" + data.query.results.json.id;
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
//  showFetch.send();
}