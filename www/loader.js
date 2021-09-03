/*jshint esversion: 6 */
// Add the Firebase products that you want to use

// Add the Firebase services that you want to use

window.addEventListener('load', (event) => { 
  let loadTextStart = document.getElementById('loadingText1');
  let startLogo = document.getElementById('startLogo');
  setTimeout(function(){    loadTextStart.innerText = 'Getting Images...'; startLogo.style.scale = '1.1'; }, 1250); 
  
  setTimeout(function(){
    loadTextStart.innerText = 'Loading Data...';  startLogo.style.scale = '1.0'; 
    try{ farming.start();  }
    catch(err){ alert("Error Loadingsas ---   " + err ); console.log(err);    }

  }, 2000);        
       
  setTimeout(function(){    loadTextStart.innerText = 'Building World...'; startLogo.style.scale = '1.1';  }, 2750);  
  setTimeout(function(){    loadTextStart.innerText = 'Loading Crops...'; startLogo.style.scale = '1.0';  }, 3500);    

  


  });