/*jshint esversion: 6 */
window.addEventListener('load', (event) => {             
  let loadTextStart = document.getElementById('loadingText1');
  let startLogo = document.getElementById('startLogo');
  setTimeout(function(){    loadTextStart.innerText = 'Getting Images...'; startLogo.style.scale = '1.1'; }, 1250); 
  setTimeout(function(){    startLogo.style.scale = '1.0';  }, 1750); 
  setTimeout(function(){    loadTextStart.innerText = 'Building World...'; startLogo.style.scale = '1.1';  }, 2250); 
  setTimeout(function(){    startLogo.style.scale = '1.0';  }, 2500);  
  setTimeout(function(){
    loadTextStart.innerText = 'Loading Data...';  startLogo.style.scale = '1.1'; 
    try{ farming.start();  }
    catch(err){ alert("Error Loadingsas ---   " + err ); console.log(err);    }

  }, 3000);        


  setTimeout(function(){    loadTextStart.innerText = 'Loading Crops...'; startLogo.style.scale = '1.0';  }, 3750);  
         
 
// try{  initializeRewardedAds();}catch(err){console.log('InitializeRewarded failed with  ' + err);}

   ///end of window.load
  });
