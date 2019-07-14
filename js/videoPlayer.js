

firebase.initializeApp({
  apiKey: 'AIzaSyC5rQaFbnCg0eI-7BavdI_CGHPPuQFhuis',
  authDomain: 'https://tv-stream-5f331.firebaseio.com',
  projectId: 'tv-stream-5f331'
});

var db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true
});
var fireBaseCollection = null
function db_playbackData(){
if(localStorage['USER_TOKEN']){
  if(window.location.search == ''){return;}
 fireBaseCollection = db.collection(localStorage['USER_TOKEN']).doc(encodeURIComponent(btoa(window.location.search)));
// fireBaseCollection.set({})
fireBaseCollection.get().then(function(doc) {
    if (doc.exists) {
        if(doc.data()){
             localStorage[window.location.search] = (doc.data().current);
}

    } else {
        // doc.data() will be undefined in this case
    }
}).catch(function(error) {
});
 

}
}
db_playbackData()






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
  console.log(url)
  return;
   document.getElementById('blockLoader').style.background = 'linear-gradient(rgba(0, 0, 0, 0.34),  rgba(0, 0, 0, 0.7)),url(' + url + ")";
   document.getElementById('blockLoader').src = url
}

var played = 0;
var currentEpisode = {}
var next = {}
function getLastTime(){
   if (localStorage[window.location.search] > 10 && localStorage[window.location.search+'_duration'] - localStorage[window.location.search] > 35) {
      return {start:localStorage[window.location.search] - 5,bandwidth:Number(localStorage['last_bandwidth'])};
      }
   return {start:0,bandwidth:Number(localStorage['last_bandwidth'])};
}
function resumePlayback(state) {
/*
   if (mediaPlayer.canPlayType('application/vnd.apple.mpegURL')) {
      played = true;
   return;
}
*/
if (!played) {


        if (localStorage[window.location.search] > 10 && mediaPlayer.duration - localStorage[window.location.search] > mediaPlayer.duration - finishDur) {
mediaPlayer.play()
         mediaPlayer.currentTime = (localStorage[window.location.search] - 5);

         played = true;
      }
      if(!isMobile){
if(localStorage['localConfig']){
   var config = JSON.parse(localStorage['localConfig'])

   mediaPlayer.volume = (config.volume)
   document.querySelector('.player-slider').value = mediaPlayer.volume
   if(config.captions == true){
var tracks = mediaPlayer.textTracks
for(i = 0; i < tracks.length; i++){
if(tracks[i].kind == "metadata"){continue;}
tracks[i].addEventListener("cuechange", function(c){
//  console.log(c.currentTarget)
for(i = 0; i < c.currentTarget.cues.length; i++){

//console.log(c.currentTarget.cues[i])
}
}, false);


tracks[i].mode = "showing"
break;

}
   }
}
}
}
  

}
function pad(n) {
   return n < 10 ? "0" + n : n;
}

function fmtMSS(s) {
   return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s;
}


function playNext(){
   clearInterval(interval)
clearInterval(trackData)
document.querySelector('.upnext').style.display = 'none';
console.log(next)
window.history.replaceState('Object', 'Title', '?'+next.link);
db_playbackData()

//window.location.reload();
//return;
called_autoplay = false;
played = 0;
findName(next.link)

}
var interval
var trackData
var sentPlaybackData
var called_autoplay = false
var episodeDone = false
function autoplay_next(){
   if(!called_autoplay){
for(var i = 21; i > 0; i--){
   setTimeout(function(a){
   document.getElementById('timerAutoplay').innerHTML = 20 - a
}.bind(null,i),Number(i*1000) )
}

   setTimeout(function(){
document.getElementById('playNextEpisode').click();
   },20000)
   called_autoplay = true
}
}

function sendPlaybackInfo(){
    lastSentTimeAPI = mediaPlayer.currentTime;
       localStorage[window.location.search] = mediaPlayer.currentTime;
       var d = mediaPlayer.duration
       if('end' in currentVideo && Number.isInteger(currentVideo['end'])){
        d = currentVideo.end
       }
            localStorage[window.location.search+'_duration'] = d;
            var playbackStats = JSON.parse(`{"current":${mediaPlayer.currentTime},"duration":${d}}`)
 var diff = 0

if(JSON.stringify(sentPlaybackData) != JSON.stringify(playbackStats) ){
sentPlaybackData = playbackStats
if(fireBaseCollection){
fireBaseCollection.set(playbackStats)
}
}
}
function completedEpisode(){
   if(!episodeDone){
      sendPlaybackInfo()
      episodeDone = true
   }
}
function resumeVideo(){
       //    mediaPlayer.currentTime = (localStorage[window.location.search] - 5);
if('end' in currentVideo){
    finishDur = mediaPlayer.duration -  (currentVideo.end - 2)
  }else{
finishDur = 35
  }
 if (localStorage[window.location.search] > 10 && mediaPlayer.duration - localStorage[window.location.search] < mediaPlayer.duration - finishDur){
  mediaPlayer.currentTime = (localStorage[window.location.search] - 2);
}

              document.querySelector('.playMobile').style.display = 'none'


}

document.getElementById('playButton').addEventListener("click", function(e){
  mediaPlayer.play()
  resumeVideo();
});
var lastSentTimeAPI = 0
var savedTime = 0
var loadedCount = 0
function resume() {





 if('end' in currentVideo){
        finishDur = mediaPlayer.duration - currentVideo.end
       }else{
    finishDur = mediaPlayer.duration - 35

       }
   if(localStorage[window.location.search + '_end']){
     // finishDur = localStorage[window.location.search + '_end']
   }
clearInterval(interval)
clearInterval(trackData)
   var vid = mediaPlayer;


   vid.addEventListener('loadeddata', function (e) {
    console.log(mediaPlayer.readyState)
    if(!Hls.isSupported() && !isMobile){
    console.log(isMobile)
  resumeVideo();
    }

if(isMobile){
if(loadedCount > 0){
  // video loaded multiple times
//alert(mediaPlayer.currentTime + '  ,  '+ savedTime)
}else{
  mediaPlayer.pause()
    document.querySelector('#playButton').innerHTML = `<img class="svgBackground" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5MCIgaGVpZ2h0PSI5MCIgdmlld0JveD0iMCAwIDkwIDkwIj48cGF0aCBmaWxsPSIjRkZGIiBkPSJNODguMTY0IDQyLjc2YzIuNDQ3IDEuMjM4IDIuNDQ3IDMuMjQyIDAgNC40OEw0LjQzNCA4OS41MTNDMS45ODQgOTAuNzUgMCA4OS41NDcgMCA4Ni44M1YzLjE3QzAgLjQ1IDEuOTg1LS43NSA0LjQzNC40ODVsODMuNzMgNDIuMjc1eiIvPjwvc3ZnPg==" alt="">` 
   
}
}
if(isMobile){
loadedCount = loadedCount +1;
}
 
   if(localStorage[window.location.search + '_end']){
   }

   if(!isMobile){
   }else{
                 // resumePlayback();
}

   

  
      var played = true;
   //   endTime();
      episodeDone = false
clearInterval(interval)
interval = setInterval(function(){
  sendPlaybackInfo();
},5000)


 trackData = setInterval(function () {
  var difference = lastSentTimeAPI
  if(difference < 0){
    difference = difference*-1;
  }
 // console.log(mediaPlayer.currentTime - difference)
  if(mediaPlayer.currentTime - difference > 30){
sendPlaybackInfo()
console.log('big difference')
  }
 
savedTime = mediaPlayer.currentTime;
       
      }, 500);

      document.body.onunload = function () {
         localStorage[window.location.search] = mediaPlayer.currentTime;
         localStorage[window.location.search+'_duration'] = mediaPlayer.duration;
var showcaptions = false;

if(!isMobile){
var tracks = mediaPlayer.textTracks
for(i = 0; i < tracks.length; i++){
if(tracks[i].kind == "metadata"){continue;}
if(tracks[i].mode == "showing"){
showcaptions =true
}
}
localStorage['localConfig'] = JSON.stringify({volume:mediaPlayer.volume,captions:showcaptions})
}
    };

  
   }, false);
   



   };

  

if (localStorage[window.location.search] == '' || localStorage[window.location.search] == 'undefined') {
   var currentPosition = 0;
} else {
   if (localStorage[window.location.search] == "null") {
      localStorage[window.location.search] = 0;
   } else {
      var currentPosition = localStorage[window.location.search];
   }
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
   var stripped = value.split('?')[1].split('=')[1].split('/')[0];
  var url = "http://metaframe.digitalsmiths.tv/v2/CWtv/assets/" + stripped + "/partner/217?format=json";











   
/*  
    hostNames:
     https://stream-hls.cwtv.com/nosec/The_CW 
     https://3aa37dc0e8bb47e08042e0ebb25acb34.dlvr1.net/nosec/The_CW 
     https://edge.cwtv-vod.top.comcast.net/nosec/The_CW
     https://cwtv-amd-akamai.akamaized.net/nosec/The_CW
*/

    fetch('https://link.theplatform.com/s/cwtv/media/guid/2703454149/'+stripped+'?formats=m3u&format=script').then(function(res){
      if(res.status == 200){return res.json();}
   }).then(function(metadata){
     if(metadata == undefined){
      return;
     }

     metaData({image:'http://images.cwtv.com/thecw/img/w_1920.s_mobile.i_video_thumbnail.guid_'+stripped+'.jpg',show:metadata['cw$seriesTitle'],episodeNumber:metadata['cw$episodeNumber'],seasonNumber:metadata['cw$seasonNumber'],title:metadata.title})
 //    currentEpisode = {show:metadata['cw$seriesTitle'],episode:metadata.title,season:metadata['cw$seasonNumber']}
      //document.getElementById('epname').innerHTML = metadata.title;

if('captions' in metadata && metadata.captions.length > 0){
      var media = metadata.captions[0].src.split('The_CW')[1].split('_')
     // console.log('https://'+metadata.captions[0].src.split('/')[2])
media.splice(-4)
    fetch('https://link.theplatform.com/s/cwtv/media/guid/2703454149/'+stripped+'?formats=m3u&format=smil').then(function(res){return res.text();}).then(function(smil){

        parser = new DOMParser();
xmlDoc = parser.parseFromString(smil,"text/xml"); 
 //  playVideo((xmlDoc.querySelector('ref').getAttribute('src')))

    })
    fetch('https://link.theplatform.com/s/cwtv/media/guid/2703454149/'+stripped+'?formats=m3u&format=redirect').then(function(res){
if(res.ok){
  console.log(res.url)
  playVideo(res.url)
          //playVideo('https://link.theplatform.com/s/cwtv/media/guid/2703454149/'+stripped+'?formats=m3u&format=redirect')
resume();
}
      return res.text();}).then(function(t){
      var json = JSON.parse(t)
      if(json.isException){

 fetch(`https://dai.google.com/ondemand/hls/content/2478072/vid/${stripped}/streams`,{
         method:"POST",
         headers:new Headers({
            Authorization:'DCLKDAI key="il5qfm01e0lq81vuck744kokf"',
                'Content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
                'Accept-Encoding': 'br, gzip, deflate',
                'Accept-Language':'en-us'

         })
      }).then(function(res){
//console.log(res)
         if(!res.ok){
// 2478072
//6698
      }else{
return res.json()
      }
   }).then(function(hls){
     var pl  = []

playVideo(hls.stream_manifest);
      //           player.play();
   resume();
            
      })

//playVideo('https://'+metadata.captions[0].src.split('/')[2] + '/nosec/The_CW'+ media.join('_') + '.m3u8')

 //resume()

      }else{
        playVideo('https://link.theplatform.com/s/cwtv/media/guid/2703454149/'+stripped+'?formats=m3u&format=redirect')
      }
    }).catch(function(){

    })
  /*    
*/
 resume()
}else{
  playVideo(
   'https://link.theplatform.com/s/cwtv/media/guid/2703454149/'+stripped+'?mbr=true&formats=m3u,mpeg4&format=redirect'
)
}

})
   

return;

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
  /*
   fetch('https://link.theplatform.com/s/NnzsPC/media/guid/2410887629/'+3104027+'?&fallbackSiteSectionId=1676939&manifest=m3u&switch=HLSOriginSecure&sdk=PDK%205.7.16&&formats=m3u,mpeg4&format=redirect').then(function(res){
   console.log(res.url.replace('3104027',value.split('/')[value.split('/').length-1]))
   player.src({type:'application/vnd.apple.mpegurl',src:res.url.replace('3104027',value.split('/')[value.split('/').length-1]).replace('http://','http://')})
   resume();
   console.log('https://tkx-cable-prod.nbc.anvato.net/rest/v2/mcp/video/'+value.split('/')[value.split('/').length-1]+'?'+res.url.replace('3104027',value.split('/')[value.split('/').length-1]).replace('http://','http://').split('?')[1])
})
*/
  

fetch('https://link.theplatform.com/s/NnzsPC/media/guid/2410887629/'+value.split('/')[value.split('/').length-1]+'?format=script').then(function(res){return res.json()}).then(function(meta){
   if(window.location.protocol == 'https:' && !isMobile){
 fetch('https://link.theplatform.com/s/NnzsPC/media/guid/2410887629/'+value.split('/')[value.split('/').length-1]+'?format=smil&manifest=m3u').then(function(res){return res.text();}).then(function(smil){

         parser = new DOMParser();
xmlDoc = parser.parseFromString(smil,"text/xml");
playVideo(xmlDoc.querySelector('video').getAttribute('src'))
   resume();

         })
   }else{
fetch('https://link.theplatform.com/s/NnzsPC/media/guid/2410887629/'+3104027+'?&fallbackSiteSectionId=1676939&manifest=m3u&switch=HLSOriginSecure&sdk=PDK%205.7.16&&formats=m3u,mpeg4&format=smil').then(function(res){return res.text();}).then(function(smil){
      parser = new DOMParser();
xmlDoc = parser.parseFromString(smil,"text/xml");
   playVideo(xmlDoc.querySelector('ref').getAttribute('src').replace('3104027',value.split('/')[value.split('/').length-1]).replace('http://','http://'))
 resume();
})
   }
        metaData({image:meta.defaultThumbnailUrl,show:meta['nbcu$seriesShortTitle'],episodeNumber:meta['nbcu$airOrder'],seasonNumber:meta['nbcu$seasonNumber'],title:meta['title']})
fetch('https://friendship.nbc.co/v1/end-cards/episode/-6031016734070054488/'+value.split('/')[value.split('/').length-1]+'?_platform=all&_version=v1').then(function(res){return res.json();}).then(function(metad){
  currentVideo.end = (metad.data.episodeEndCard.currentVideoCreditCuePoint)
})
if(meta['nbcu$seriesShortTitle'] == 'Heroes'){

      //       document.getElementById('showname').innerHTML =    '<img style="margin-bottom:-5px;width: 11.0em;display:inline-block;" src="showMetadata/heroes/Heroes.logo.png" width="100%">'

}

       /* 
   fetch(  meta.defaultThumbnailUrl.replace('.jpg','_1200.fs')).then(function(res){return res.json();}).then(function(preview){
   var vidPreview = {}
eachCount = (preview.endTime / preview.imageCount / 1000)
   for (i = 0; i <  preview.thumbnails.length; i++) {
      vidPreview[`${(i*eachCount)}`] = {"src":preview.thumbnails[i]}
    //        console.log((i*eachCount))

   }
   console.log(vidPreview)
   thumbnails(vidPreview);
})

*/

   bg(meta.defaultThumbnailUrl+'?impolicy=nbc_com&imwidth=720')
})

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
        if(response.ok){
 return response.json();
        }else{
console.log('video not in system')
return null;
        }  
      }).then(function (play) {
        if(play == null){
          return;
        }
       
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
currentVideo['end'] = play['fox$creditCuePoint']
currentVideo['title'] = play['title']
if('debug$ingestXml' in play){
var ingest = parser.parseFromString(play['debug$ingestXml'],"text/xml")
currentVideo['episodeNumber'] = ingest.querySelector('episodeNumber').textContent
currentVideo['seasonNumber'] = ingest.querySelector('seasonNumber').textContent

console.log(ingest.querySelector('episodeNumber')) 
console.log(ingest.querySelector('seasonNumber')) 

metaData('',true)
}
if ('uplynk$testPlayerUrl' in play) {
fetch(play.uplynk$testPlayerUrl.replace('http://','https://') + '?rays=gkjihfedcba&ray=&exp='+(new Date().getTime() + 10000000 ) / 1000
).then(function(res){if(res.status != 200){ backupWay(url)
}else{
   return res.text();
}
}).then(function(m3u8){
  var m3u8 = parser.parseFromString(m3u8,"text/html").body.querySelector('script').innerHTML.split("';")[0].split("'")[1]
playVideo(m3u8)
        resume();

})
}else{
 backupWay(url)
}
function backupWay(url){

   fetch(url.split('?')[0] + '?formats=m3u&assetTypes=uplynk-clean%3Auplynk-ivod-west%3Auplynk-ivod-mountain%3Auplynk-ivod-east%3Auplynk-ivod&sitesection=app.dcg-foxnow%2Fiphone%2Ffxn&auth='+auth).then(function(res){if(res.status != 200){
return;
}else{return res.json();}}).then(function(play){
fetch(play.interstitialURL.replace('http://','https://')).then(function(res){return res.text()
}).then(function(ads){
  parser = new DOMParser();
xmlDoc = parser.parseFromString(ads,"text/xml");
var adTimes = xmlDoc.querySelector('interstitialGroup').children
var ads = []
for (var i = adTimes.length - 1; i >= 0; i--) {
  ads.push({start:adTimes[i].querySelector('start').innerHTML,end:adTimes[i].querySelector('end').innerHTML})
  console.log({start:adTimes[i].querySelector('start').innerHTML,end:adTimes[i].querySelector('end').innerHTML})
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
playVideo( play.playURL)

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
  'x-api-key':'abdcbed02c124d393b39e818a4312055',
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
//   player.duration(data.durationInSeconds)
//currentEpisode = {show:data.seriesName,episode:data.name,season:data.seasonNumber}


      if(data.name == data.seriesName){
         data.name = data.headline;
      }
      metaData({show:data.seriesName,episodeNumber:data.episodeNumber,seasonNumber:data.seasonNumber,title:data.name})
 if(Number.isInteger(data.creditCuePoint)){
  currentVideo.end = (data.creditCuePoint - 10)

 }

            if (!data.materialIDs) {
               data['materialIDs'] = []
               data.materialIDs.push(data.guid)
            }
            console.log(data.materialIDs)
            if("SvideoRelease" in data ){
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
if('sameAs' in data){
      window.history.replaceState('', '', '?'+data.sameAs);
      db_playbackData()

}

for(i in data.documentReleases){
/*
      if(data.documentReleases[i].format == "Filmstrip" && data.documentReleases[i].width == 470){
fetch(data.documentReleases[i].url).then(function(res){return res.json();}).then(function(preview){
   var vidPreview = {}
eachCount = (preview.endTime / preview.imageCount / 1000)
   for (i = 0; i <  preview.thumbnails.length; i++) {
      vidPreview[`${(i*eachCount)}`] = {"src":preview.thumbnails[i],width:'256px'}

   }
   thumbnails(vidPreview);

})
      }
 */  
}


 
}


handle(item)

 });
}


function smpte2vtt(timecode,add_seconds,frame_rate){
   var tm_obj = timecode.split(':')

   return tm_obj[0] + ':'+tm_obj[1] +':'+ ('0' + (Number(tm_obj[2]) + add_seconds)).slice(-2) +'.'+ ('000'+(Math.round(tm_obj[3]/frame_rate *1000))).slice(-3)

}
// Anvato
function anvato(url){
  fetch('https://link.theplatform.com/s/NnzsPC/media/guid/2410887629/'+3104027+'?&fallbackSiteSectionId=1676939&manifest=m3u&switch=HLSOriginSecure&sdk=PDK%205.7.16&&formats=m3u,mpeg4&format=redirect').then(function(res){
fetch('http://tkx-prod.nbc.anvato.net/rest/v2/mcp/video/'+url.split('?')[1]+'?'+res.url.split('?')[1]).then(function(res){return res.text();}).then(function(episode){
  var p = episode.split('(')

  //p.splice(0, 1)
   //var data = (JSON.parse(p.join('').slice(0,-1)))
    var data = JSON.parse(episode)


playVideo(data.stream_url)
resume();

         for(i in data.captions){
            if(data.captions[i].format != 'SMPTE-TT' || data.captions[i].language != 'en'){continue;}
          //  console.log(data.captions[i])

fetch(data.captions[i].url).then(function(res){return res.text()}).then(function(text){

   var parser = new DOMParser();
   var htmlDoc = parser.parseFromString(text, "text/xml")
   htmlDoc = htmlDoc.getElementsByTagName('p')
  // track = player.addTextTrack("captions", 'English (alt)', 'en');
      var str =  `WEBVTT

`

var frameRate = Number(parser.parseFromString(text, "text/xml").querySelector('tt').getAttribute('ttp:frameRate'))
var prevTime = ''
   for(i in htmlDoc){
      if(htmlDoc[i] instanceof Element == false){continue;}
            console.log(prevTime)

if(htmlDoc[i].getAttribute('begin') + htmlDoc[i].getAttribute('end') == prevTime){
    /* str += `
${smpte2vtt(htmlDoc[i].getAttribute('begin'),5,frameRate)} --> ${smpte2vtt(htmlDoc[i].getAttribute('end'),5,frameRate)} position:50%   lines:${Number(position[1].split('%')[0])   + '%'}   align:center
${(unescape(encodeURIComponent(htmlDoc[i].innerHTML))).trim()}
`
*/
      str += ` ${(unescape(encodeURIComponent(htmlDoc[i].innerHTML))).trim()}
         `
   continue;
   
}

prevTime = htmlDoc[i].getAttribute('begin') + htmlDoc[i].getAttribute('end')

      //console.log(htmlDoc[i].getAttribute('begin').split(':'))
      //console.log(htmlDoc[i].getAttribute('tts:extent').split(' ')[0])
      //console.log(100 - Number(htmlDoc[i].getAttribute('tts:origin').split(' ')[1].split('%')[0])+ '%')
      var position =  htmlDoc[i].getAttribute('tts:origin').split(' ')

var begin = htmlDoc[i].getAttribute('begin').split(':')
begin[2] = Number(begin[2]) + 5 
begin.splice(-1,1)

var end = htmlDoc[i].getAttribute('end').split(':')
end[2] = Number(end[2]) + 5 

end.splice(-1,1)
smpte2vtt(htmlDoc[i].getAttribute('begin'),5,frameRate)
// ${htmlDoc[i].getAttribute('tts:extent').split(' ')[0]}
//console.log(htmlDoc[i].getAttribute('begin').toSeconds() + (Number(htmlDoc[i].getAttribute('begin').split(':')[3]) / 30))
str += `
${smpte2vtt(htmlDoc[i].getAttribute('begin'),5,frameRate)} --> ${smpte2vtt(htmlDoc[i].getAttribute('end'),5,frameRate)} position:50%  scroll:up line:87% lines:${Number(position[1].split('%')[0])   + '%'} size:40%  align:center
${(unescape(encodeURIComponent(htmlDoc[i].innerHTML))).trim()}
`

            //   track.addCue(new VTTCue(htmlDoc[i].getAttribute('begin').toSeconds() + 5, htmlDoc[i].getAttribute('end').toSeconds() + 5, htmlDoc[i].innerHTML));
}




      track = player.addRemoteTextTrack({kind:"captions",src:'data:text/vtt;base64,' + btoa(str), srclang:"English VTT"});


})

         }

         document.title = data.program_name + " - " + data.def_title
})
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

var isDone = false;

var sitefunctions = {
  "rawFile": raw,
  "api2.fox.com": foxapi,
  "cwtv.com": fetchcwjson,
  "cwseed.com": fetchcwjson,
  "cbs.com": fetchcbsjson,
  "nbc.com": fetchnbcjson,
  "fox.com": fetchfoxjson,
  "fxnetworks.com": fetchfxjson,
  "anvato.com?":anvato,


};

var url;
var currenturl = window.location.search.split('?')[1];
if (window.location.search.split('?').length == 3) {
  currenturl = window.location.search.split('?')[1] + "?" + window.location.search.split('?')[2];
}
var currenturl = decodeURIComponent(currenturl)
function findName(url) {
if (url) {
   currenturl = url
}
  for (tv in sitefunctions) {

    if (currenturl.includes(tv)) {
      url = currenturl;
      sitefunctions[tv](url
      );isDone = true;
      return;
    }
  }
}

findName();

if (isDone == false) {
}
