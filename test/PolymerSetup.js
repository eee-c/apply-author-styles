// 1. Load Polymer before any code that touches the DOM.
var script = document.createElement("script");
script.src = "/bower_components/platform/platform.js";
document.getElementsByTagName("head")[0].appendChild(script);

// 2. Load component(s)
var fixtureLink = document.createElement("link");
fixtureLink.rel = "import";
fixtureLink.href = "/test/x-foo.html";
document.getElementsByTagName("head")[0].appendChild(fixtureLink);

var link = document.createElement("link");
link.rel = "import";
link.href = "/apply-author-styles.html";
document.getElementsByTagName("head")[0].appendChild(link);


// Delay Jasmine specs until polymer-ready
var POLYMER_READY = false;
beforeEach(function(done) {
  window.addEventListener('polymer-ready', function(){
    POLYMER_READY = true;
    console.log('yo')
    done();
  });
  console.log(POLYMER_READY)
  if (POLYMER_READY) done();
});
