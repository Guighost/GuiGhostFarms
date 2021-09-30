/*jshint esversion: 6 */
window.addEventListener('load', (event) => {             
      let loadTextStart = document.getElementById('loadingText1');
      let startLogo = document.getElementById('startLogo');
      setTimeout(function(){    loadTextStart.innerText = 'Getting Images...'; startLogo.style.scale = '1.1'; }, 1000); 
      
      setTimeout(function(){    loadTextStart.innerText = 'Building World...'; startLogo.style.scale = '1.1';  }, 2000); 
      setTimeout(function(){    
        try {
                  Enhance.purchases.isSupported(function(result){
                    if (result == true){loadTextStart.innerText = 'Purchases Enabled';}
                    else {loadTextStart.innerText = 'Purchases are NOT supported';}
                  
          });
        } catch (error) {
          loadTextStart.innerText = 'Purchases check failed with ' + error;
        }

      }, 3000);  
      setTimeout(function(){    
        let spackOwned = 0;
          try {
            Enhance.purchases.getOwnedItemCount('starter_pack',function(){spackOwned = spackOwned + parseInt(result);  } );
            Enhance.purchases.getOwnedItemCount('master_pack',function(){spackOwned = spackOwned + parseInt(result);  } );
            Enhance.purchases.getOwnedItemCount('starpack_small',function(){spackOwned = spackOwned + parseInt(result);  } );
            Enhance.purchases.getOwnedItemCount('starpack_large',function(){spackOwned = spackOwned + parseInt(result); loadTextStart.innerText = 'Premium Items Bought = ' + spackOwned; } );
          } catch (error) { loadTextStart.innerText = 'getOwnedItemCount startPack failed ' + error; }      
      }, 4500);  


      setTimeout(function(){ loadTextStart.innerText = 'Loading Data...'; 
        ///////////////////////START THE GAME/////////////////////////////////////////////////////////////////////
        try{ farming.start();  }
        catch(err){ alert("Error Loading ---   " + err ); console.log(err);    }
      }, 7000); 

     
      setTimeout(function(){     loadTextStart.innerText = 'Starting Game '; }, 7500);
            
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////moved from index.html//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var deviceType = (navigator.userAgent.match(/iPad/i)) == "iPad" ? "iPad" : (navigator.userAgent.match(/iPhone/i)) == "iPhone" ? "iPhone" : (navigator.userAgent.match(/Android/i)) == "Android" ? "Android" : (navigator.userAgent.match(/BlackBerry/i)) == "BlackBerry" ? "BlackBerry" : "null";
    if (localStorage.getItem("rateMeNever") == null) { localStorage.setItem("rateMeNever", 0); }
    if (localStorage.getItem("MedFarms_boughtMasterPack") == null) { localStorage.setItem("MedFarms_boughtMasterPack", 0); }
    if (localStorage.getItem("MedFarms_boughtSmallStars") == null) { localStorage.setItem("MedFarms_boughtSmallStars", 0); }
    if (localStorage.getItem("MedFarms_boughtStarterPack") == null) { localStorage.setItem("MedFarms_boughtStarterPack", 0); }
    if (localStorage.getItem("MedFarms_boughtLargeStars") == null) { localStorage.setItem("MedFarms_boughtLargeStars", 0); }

    var showItOrNo = 1;
    var showItOrNo2 = 0;

    ////rate me
    var rateMeBtnYes = document.getElementById("rateMeBtnYes");
    rateMeBtnYes.addEventListener("click", openRateOnPlay);
    rateMeBtnYes.addEventListener("touchstart", openRateOnPlay, {passive: true});
    var rateMeBtnNo = document.getElementById("rateMeBtnNo");
    rateMeBtnNo.addEventListener("click", closeRate1);
    rateMeBtnNo.addEventListener("touchstart", closeRate1, {passive: true});

    var rateMeBtnLater = document.getElementById("rateMeBtnLater");
    rateMeBtnLater.addEventListener("click", closeRate2);
    rateMeBtnLater.addEventListener("touchstart", closeRate2, {passive: true});

    var rateImage = document.getElementById("rateImage");
    rateImage.addEventListener("click", openRateOnPlay);
    rateImage.addEventListener("touchstart", openRateOnPlay, {passive: true});


    function closeFBShare() { document.getElementById("fbshare").style.display = 'none'; }

    function closeRate1() { document.getElementById("rateMe").style.display = 'none'; localStorage.setItem("rateMeNever", 1); }
    function closeRate2() { document.getElementById("rateMe").style.display = 'none'; localStorage.setItem("rateMeNever", 0); }

    function openRateOnPlay() {
        document.getElementById("rateMe").style.display = 'none';
        try { cordova.plugins.market.open('com.wMedievalFarms_GuiGhostGames'); }
        catch (err) { console.log("caught = " + err); }
        try { Enhance.logEvent('app_rate_clicked'); } catch (err) { console.log("logging failed"); }

    }

    var onceSmallStars = false;
    var onceLargeStars = false;
    var onceSmallStarter = false;
    var onceLargeStarter = false;
    ///In App Payments
    var callback_SmallSP = function () {
        var onPurchaseSuccess = function () {
            Enhance.purchases.getDisplayTitle('starpack_small', '50 Stars', function (result) {
                localStorage.setItem('MedFarms_boughtSmallStars', 1);
                alert("You have sucessfully purchased " + result);
            });
            starCash = parseInt(localStorage.getItem('starCash'));
            //console.log("before starcash = " + starCash);
            starCash = parseInt(starCash) + 50;
            //console.log("after buy small starcash = " + starCash);
            localStorage.setItem('starCash', starCash);
            buySmallStars.owned = 1;
            try { Enhance.purchases.consume('starpack_small', onConsumeSuccessCallback, onConsumeFailedCallback); }
            catch (err) { console.log(err); }
        };

        var onPurchaseFailed = function () {
            // Failure
            localStorage.setItem('MedFarms_boughtSmallStars', 0);
            //check it owned and try to consume
            Enhance.purchases.isItemOwned('starpack_small', function (result) {
                if (result == true) {
                    try { Enhance.purchases.consume('starpack_small', onConsumeSuccessCallback, onConsumeFailedCallback); }
                    catch (err) { console.log(err); }
                }
            });
            if (onceSmallStars == false){onceSmallStars = true; 
                try {Enhance.purchases.attemptPurchase('starpack_small', onPurchaseSuccess, onPurchaseFailed, onPurchasePending);}
                    catch (err) { console.log(err);}}
          else{alert('Purchased failed - try again later');} 
        };
        var onPurchasePending = function () {       alert('Item is Pending');        };  
      
        var onConsumeSuccessCallback = function () { console.log('product consumed'); };
        var onConsumeFailedCallback = function () {  console.log('consume failed'); };
        try{
            Enhance.purchases.isItemOwned('starpack_small', function (result) {
                    if (result == true) {
                        try { Enhance.purchases.consume('master_pack', onConsumeSuccessCallback, onConsumeFailedCallback); }
                        catch (err) { console.log(err);}
                    }                        
            });
        }catch(err){console.log('consume failed');}
        Enhance.purchases.attemptPurchase('starpack_small', onPurchaseSuccess, onPurchaseFailed, onPurchasePending);
    };

    var callback_LargeSP = function () {
        var onPurchaseSuccess = function () {
            Enhance.purchases.getDisplayTitle('starpack_large', '300 Stars', function (result) {
                localStorage.setItem('MedFarms_boughtLargeStars', 1);
                alert("You have sucessfully purchased " + result);
            });
            starCash = parseInt(localStorage.getItem('starCash'));
            console.log("before starcash = " + starCash);
            starCash = parseInt(starCash) + 300;

            console.log("after buy large starcash = " + starCash);
            localStorage.setItem('starCash', starCash);
            buyLargeStars.owned = 1;
            try { Enhance.purchases.consume('starpack_large', onConsumeSuccessCallback, onConsumeFailedCallback); }
            catch (err) { console.log(err); }
        };
        var onPurchasePending = function () {       alert('Item is Pending');        };  
        var onPurchaseFailed = function () {
            // Failure
            localStorage.setItem('MedFarms_boughtLargeStars', 0);
            Enhance.purchases.isItemOwned('starpack_large', function (result) {
                if (result == true) {
                    try { Enhance.purchases.consume('starpack_large', onConsumeSuccessCallback, onConsumeFailedCallback); }
                    catch (err) { console.log(err); }
                }
            }
            );
            if (onceLargeStars == false){ onceLargeStars = true; 
                try{Enhance.purchases.attemptPurchase('starpack_large', onPurchaseSuccess, onPurchaseFailed, onPurchasePending);}
                    catch (err) { console.log(err);alert('Purchase failed- try again soon ' + err);}}
            else{alert('purchase fail out - try again later' + result);}
        };
        var onConsumeSuccessCallback = function () { console.log('product consumed'); };
        var onConsumeFailedCallback = function () {  console.log('consume failed'); };
    
        try{
            Enhance.purchases.isItemOwned('starpack_large', function (result) {
                    if (result == true) {
                        try { Enhance.purchases.consume('master_pack', onConsumeSuccessCallback, onConsumeFailedCallback); }
                        catch (err) { console.log(err);}
                    }                        
            });
        }catch(err){console.log('consume failed');}
        try {
            Enhance.purchases.attemptPurchase('starpack_large', onPurchaseSuccess, onPurchaseFailed, onPurchasePending);
        } catch (error) {
            alert('Purchase Attempt failed with ' + error);
        }
      
    };
    var callback_starterPack = function () {
        var onPurchaseSuccess = function () {
            Enhance.purchases.getDisplayTitle('starter_pack', 'Resource Starter Pack', function (result) {
                localStorage.setItem('MedFarms_boughtStarterPack', 1);
                alert("You have sucessfully purchased " + result);
            });           
            try { Enhance.purchases.consume('starter_pack', onConsumeSuccessCallback, onConsumeFailedCallback); }
            catch (err) { console.log(err); }            
        };
        var onPurchasePending = function () {       alert('Item is Pending');        };  
        var onPurchaseFailed = function () {
            // Failure
            localStorage.setItem('MedFarms_boughtStarterPack', 0);
            //check it owned and try to consume
            Enhance.purchases.isItemOwned('starter_pack', function (result) {
                if (result == true) {
                    try { Enhance.purchases.consume('starter_pack', onConsumeSuccessCallback, onConsumeFailedCallback); }
                    catch (err) { console.log(err); }
                }
            });
            if(onceSmallStarter == false){ onceSmallStarter = true;
                try{ Enhance.purchases.attemptPurchase('starter_pack', onPurchaseSuccess, onPurchaseFailed, onPurchasePending);}
                    catch (err) { console.log(err); alert('Purchased failed- try again soon ' + err);}}
            else{alert('Purchased failed - try again later');}                
        };
        var onConsumeSuccessCallback = function () { console.log('product consumed');};
        var onConsumeFailedCallback = function () { console.log('consume failed'); };
        try{
            Enhance.purchases.isItemOwned('starter_pack', function (result) {
                    if (result == true) {
                        try { Enhance.purchases.consume('master_pack', onConsumeSuccessCallback, onConsumeFailedCallback); }
                        catch (err) { console.log(err); }
                    }                        
            });
        }catch(err){console.log('consume failed');}
        Enhance.purchases.attemptPurchase('starter_pack', onPurchaseSuccess, onPurchaseFailed , onPurchasePending);
    };

    var callback_masterPack = function () {
        var onPurchaseSuccess = function () {
            Enhance.purchases.getDisplayTitle('master_pack', 'Resource Master Pack', function (result) {                   
                alert("You have sucessfully purchased " + result);
                localStorage.setItem('MedFarms_boughtMasterPack', 1);
            });     
            try { Enhance.purchases.consume('master_pack', onConsumeSuccessCallback, onConsumeFailedCallback); }
            catch (err) { console.log(err); }             
        };
        var onPurchasePending = function () {       alert('Item is Pending');        };  
        var onPurchaseFailed = function () {
            // Failure
            localStorage.setItem('MedFarms_boughtMasterPack', 0);
            Enhance.purchases.isItemOwned('master_pack', function (result) {
                if (result == true) {
                    try { Enhance.purchases.consume('master_pack', onConsumeSuccessCallback, onConsumeFailedCallback); }
                    catch (err) { console.log(err);}
                }                    
            });
            if(onceLargeStarter == false){onceLargeStarter = true; 
                try {  Enhance.purchases.attemptPurchase('master_pack', onPurchaseSuccess, onPurchaseFailed, onPurchasePending);}
                    catch (err) { console.log(err); alert('Purchased failed- try again soon ' + err);}}
            else{alert('Purchased failed- try again soon' + result); }
        };
        var onConsumeSuccessCallback = function () {console.log('product consumed');};
        var onConsumeFailedCallback = function () {console.log('consume failed');};
        try{
        Enhance.purchases.isItemOwned('master_pack', function (result) {
                if (result == true) {
                    try { Enhance.purchases.consume('master_pack', onConsumeSuccessCallback, onConsumeFailedCallback); }
                    catch (err) { console.log(err);}
                }                    
            });
        }catch(err){console.log('consume failed');}
        try{
            Enhance.purchases.attemptPurchase('master_pack', onPurchaseSuccess, onPurchaseFailed, onPurchasePending);
        }catch(err){console("purchase failed " + err);}            
    };

    var buyingSmallStars = 0;
    var buyingLargeStars = 0;
    var buyingStarterPack = 0;
    var buyingMasterPack = 0;
    let interTries = 0;
    let rewardedTries = 0;
    localStorage.setItem('MedFarms_buyingSmallStars', 0);
    localStorage.setItem('MedFarms_buyingLargeStars', 0);
    localStorage.setItem('MedFarms_buyingStarterPack', 0);
    localStorage.setItem('MedFarms_buyingMasterPack', 0);

    var purchaseCheck = function (){
        //console.log("tickk purchasecheck");
        buyingSmallStars = localStorage.getItem('MedFarms_buyingSmallStars');
        buyingLargeStars = localStorage.getItem('MedFarms_buyingLargeStars');
        buyingStarterPack = localStorage.getItem('MedFarms_buyingStarterPack');
        buyingMasterPack = localStorage.getItem('MedFarms_buyingMasterPack');
        if (buyingSmallStars == 1) {
            try { Enhance.purchases.isSupported(callback_SmallSP); }
            catch (err) { console.log("failed small stars " + err); alert('Purchase failed - ' + err); }
            localStorage.setItem('MedFarms_buyingSmallStars', 0);
        }
        else if (buyingLargeStars == 1) {            
            try { Enhance.purchases.isSupported(callback_LargeSP); }
            catch (err) { console.log("failed large stars " + err);  alert('Purchase failed - ' + err);}
            localStorage.setItem('MedFarms_buyingLargeStars', 0);
        }
        else if (buyingStarterPack == 1) {
            try { Enhance.purchases.isSupported(callback_starterPack); }
            catch (err) { console.log("failed buystarter with " + err);  alert('Purchase failed - ' + err);}
            localStorage.setItem('MedFarms_buyingStarterPack', 0);
        }
        else if (buyingMasterPack == 1) {
            try { Enhance.purchases.isSupported(callback_masterPack); }
            catch (err) { console.log("failedBuyMaster with  " + err);  alert('Purchase failed - ' + err); }
            localStorage.setItem('MedFarms_buyingMasterPack', 0);
        }
            
        setTimeout(() => {
            purchaseCheck();
        },500);
    };


      
        var optionsShare = {
            message: 'Join me playing Medieval Farms', // not supported on some apps (Facebook, Instagram)
            subject: 'Medieval Farms', // fi. for email
            files: ['https://guighostgames.com/MedievalFarms/images/ads/promo580x400.png'], // an array of filenames either locally or remotely
            url: 'https://bit.ly/SharingMedFarms',
            chooserTitle: 'Pick an app to share with' // Android only, you can override the default share sheet title
        };
        var optionsShare2 = {
            message: 'Use Reward Code "StarBoost" for free stars in Medieval Farms ', // not supported on some apps (Facebook, Instagram)
            subject: 'Medieval Farms', // fi. for email
            files: ['https://guighostgames.com/MedievalFarms/images/ads/rewardImg.png'], // an array of filenames either locally or remotely
            url: 'https://bit.ly/Stars4MedFarm',
            chooserTitle: 'Pick an app to share with' // Android only, you can override the default share sheet title
        };
        var onSuccessShare = function (result) {

            starCash = parseInt(localStorage.getItem('starCash'));
            starCash = parseInt(starCash) + 5;
            localStorage.setItem('starCash', starCash);

            document.getElementById("starCashOuterLabel").innerHTML = starCash;
            document.getElementById("currentStarCashShare").style.display = 'none';

            console.log("Share completed? " + result.completed); // On Android apps mostly return false even while it's true
            console.log("Shared to app: " + result.app); // On Android result.app is currently empty. On iOS it's empty when sharing is cancelled (result.completed=false)
            try {
                Enhance.logEvent('app_shared', 'result', result.app);

            } catch (err) { console.log("share failed"); }
        };

        var onErrorShare = function (msg) {
            try { Enhance.logEvent('app_shared', 'result', 'false'); } catch (err) { console.log("share failed"); }
            console.log("Sharing failed with message: " + msg);
        };

        var shareUs = document.getElementById("sharedBtnImg");
        var shareUs2 = document.getElementById("shareUs2");
        shareUs.addEventListener("click", function (event) { SocialShareGG(1); });
        shareUs.addEventListener("touchend", function (event) { SocialShareGG(1); });
        shareUs2.addEventListener("click", function (event) { SocialShareGG(2); });
        shareUs2.addEventListener("touchend", function (event) { SocialShareGG(2); });
        function SocialShareGG(num) {
            if (num == 1) {
                try {
                    if (navigator.share) {
                navigator.share({
                    title: 'Share GuiGhostGames',
                    text: 'Check out Medieval Farms retro farming sim',
                    url: 'https://guighostgames.com/MedievalFarms/',
                })
                    .then(() => console.log('Successful share'))
                    .catch((error) => console.log('Error sharing', error));
            }
            starCash = parseInt(localStorage.getItem('starCash'));
            starCash = parseInt(starCash + 5) ;
            localStorage.setItem('starCash', starCash);
            document.getElementById("starCashOuterLabel").innerHTML = starCash;
            shareUs.style.display = 'none';
                } catch (err) { console.log(err); }
            }
            else if (num == 2) {
                try {
                    console.log("clicked share from reward");
                    if (navigator.share) {
                        navigator.share({
                        title: 'Share GuiGhostGames',
                        text: 'I got free rewards on Medieval Farms retro farming sim',
                        url: 'https://guighostgames.com/MedievalFarms/images/ads/rewardImg.png',
                        })
                    .then(() => console.log('Successful share'))
                    .catch((error) => console.log('Error sharing', error));
                    }
                }  catch (err) { console.log(err); }
            }
        }
      
    //open prize entry
      document.getElementById("OpenPrizeBtn").addEventListener("click", function (event) {
          var isVisPrize3 = document.getElementById("prizeMe").style.display ;    
          if (isVisPrize3 == 'block') {
                  localStorage.setItem('enteredPrizeToday', 1);
                  document.getElementById("prizeMe").style.display = 'none';   
                  var copyText = document.getElementById("prizeCodeThisTime");
                  console.log("copyText is " + copyText.innerHTML);       
                  let codeThis =    copyText.innerHTML;
                  var entryPath = 'https://docs.google.com/forms/d/e/1FAIpQLScagsRtI1r-CBXdXevU4PFL83Oo7jTcavyfxUssgr7PJsmQqg/viewform?usp=pp_url&entry.1167240952=' + codeThis + ' ';
                  window.open(entryPath, '_blank');
                  document.getElementById("currentStarCashBackPrize").style.display = 'none';
                  try{Enhance.logEvent('contestEntry');}catch(err){console.log(err);}
                  event.stopPropagation();
          }         
      }, false);
      document.getElementById("OpenPrizeBtn").addEventListener("touchend", function (event) {
          var isVisPrize3 = document.getElementById("prizeMe").style.display ;    
          if (isVisPrize3 == 'block') {
                  localStorage.setItem('enteredPrizeToday', 1);
                  document.getElementById("prizeMe").style.display = 'none';   
                  var copyText = document.getElementById("prizeCodeThisTime");
                  console.log("copyText is " + copyText.innerHTML);       
                  let codeThis =    copyText.innerHTML;
                  var entryPath = 'https://docs.google.com/forms/d/e/1FAIpQLScagsRtI1r-CBXdXevU4PFL83Oo7jTcavyfxUssgr7PJsmQqg/viewform?usp=pp_url&entry.1167240952=' + codeThis + ' ';
                  window.open(entryPath, '_blank');
                  document.getElementById("currentStarCashBackPrize").style.display = 'none';
                  try{Enhance.logEvent('contestEntry');}catch(err){console.log(err);}
                  event.stopPropagation();
          }         
      }, false);
    //closePrize
      document.getElementById("closePrize").addEventListener("touchstart", function (event) {
          var isVisPrize1 = document.getElementById("prizeMe").style.display ;    
          if (isVisPrize1 == 'block') {
          document.getElementById("prizeMe").style.display = 'none';
        event.stopPropagation();    
          }  
      }, false);
      document.getElementById("closePrize").addEventListener("click", function (event) {         
          var isVisPrize2 = document.getElementById("prizeMe").style.display ;    
          if (isVisPrize2 == 'block') {
          document.getElementById("prizeMe").style.display = 'none';
        event.stopPropagation();    
          }    
      }, false);
      document.getElementById("weeklyPrize").addEventListener("touchstart", function (event) {
          var isVisFBe = document.getElementById("fbshare").style.display;
          if (isVisFBe == 'block') {
              document.getElementById("prizeMe").style.display = 'block';
              event.stopPropagation();
          }
      }, false);
      document.getElementById("weeklyPrize").addEventListener("click", function (event) {
          var isVisFBe = document.getElementById("fbshare").style.display;
          if (isVisFBe == 'block') {
              document.getElementById("prizeMe").style.display = 'block';
              event.stopPropagation();
          }
      }, false);
      try {
          Enhance.enableLocalNotification('Crops are Ready', 'Pick your Crops before they Wither!', 86400);
      } catch (error) {  alert('enable notification failed - ' + err);
      }
      function copyToClipboard() {
          // console.log("in copy func");
          var copyText = document.getElementById("prizeCodeThisTime");
          console.log("copyText is " + copyText.innerHTML);
          /* Select the text field */
          // copyText.select();
          var range = document.createRange();
          range.selectNode(copyText);
          copyText.setSelectionRange(0, 99999);
          try {
              var successful = document.execCommand('copy');
              var msg = successful ? 'successful' : 'unsuccessful';
              console.log('Copying text command was ' + msg);
          } catch (err) {
              console.log('Oops, unable to copy');
          }
          /* Alert the copied text */
          alert("Copied the text: " + copyText.value);
        }
        setTimeout(function(){  purchaseCheck();  loadTextStart.innerText = 'Game loop running'; }, 7750);


   ///end of window.load
});
