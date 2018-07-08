//Registering the Service Worker
if(navigator.serviceWorker) {

  navigator.serviceWorker.register('/sw.js').then(function() {
    console.log("SW Registration Success");
  }).catch(function() {
    console.log("SW Registeration Failed!");
  });
}
