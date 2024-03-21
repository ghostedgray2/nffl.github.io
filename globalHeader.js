function loadHeader() {
  setTimeout(function(){
    var enclosure = document.getElementById("enclosure");

    enclosure.innerHTML = '<header> <a class="homelink"> <img src="https://i.ibb.co/5kg3xCQ/ufaframe.png" style="aspect-ratio: 64 / 25; width: auto; height: 30px; text-align: center; margin: auto; vertical-align: middle; margin-top: -10px; "></a> <a href="ufa-ff.github.io/league/stats/qb" class="dropbtn"> <b>Stats</b></a> <a href="/league/stats/standings"> <b>Standings</b> </a> <div class="dropdown" style="float: right; margin-right: 30px;"> <a href="index.html" class="dropbtn"> <b>︙</b></a> <div class="dropdown-content" style="left: -140px;"> <a href="?editor=true" id="statmode">Stat Mode</a> </div> </div> </header> <header class="gra"></header>';


    console.log(" >> / Header Loaded");
  }, 500);
  console.log("running");
}

