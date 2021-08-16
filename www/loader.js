/*jshint esversion: 6 */
window.addEventListener('load', (event) => {             
    try{ farming.start();  }
    catch(err){ alert("Error Loading ---   " + err ); console.log(event);    }
         
   
  });