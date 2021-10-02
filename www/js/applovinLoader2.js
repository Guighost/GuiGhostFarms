var AppLovinMAX;
var INTER_AD_UNIT_ID;
var REWARDED_AD_UNIT_ID;
// Assume Android
INTER_AD_UNIT_ID = 'ed2d8896f2bc2fcc';
REWARDED_AD_UNIT_ID = 'ee479fb7bcdc18c3';
var SDK_KEY = "4Lf7icebFUhL60MpoZ107TLTRlsqTDtMX1pLCkWUFKxq0p13IDN8gZOGDTGnl4zDzCA6_sbMp1vbEsGRetqgMt";

function onDeviceReadyAL() {
    // console.log('Running cordova-' + cordova.platformId + 'v' + cordova.version);
    let loadTextStart2 = document.getElementById('loadingText1');
  
    try{  AppLovinMAX = cordova.require('cordova-plugin-applovin-max.AppLovinMAX');
    }catch(err){ loadTextStart2.innerText = "----Cordova load failed with " + err;}

    try { AppLovinMAX.initialize(SDK_KEY, function (configuration) {
                initializeInterstitialAds();
                initializeRewardedAds();    
            });
    } catch (error) {loadTextStart2.innerText = loadTextStart2.innerText +   "  -----INITALIZE Appplovin  failed with " + error; }
        //   function showMediationDebugger() {  AppLovinMAX.showMediationDebugger(); }
}

function onInterButtonClicked() {
    try {
        if (AppLovinMAX.isInterstitialReady(INTER_AD_UNIT_ID)) {
            AppLovinMAX.showInterstitial(INTER_AD_UNIT_ID);           
        } else { loadInterstitial();
            setTimeout(function(){
                if (AppLovinMAX.isInterstitialReady(INTER_AD_UNIT_ID)) { AppLovinMAX.showInterstitial(INTER_AD_UNIT_ID);}
                else{ alert('No ad ready');}  
            }, 250);        
        }
    } catch (error) {alert('onInterClicked error ' + error); }
}

function initializeInterstitialAds() {
    window.addEventListener('OnInterstitialLoadedEvent', function (adInfo) { console.log("Inter ad loaded with success");    });
 var retries2 = 0;
    window.addEventListener('OnInterstitialLoadFailedEvent', function (adInfo) {
        alert('OnInterstitialLoadFailedEvent is true - RETRY');
        setTimeout( function (){ onInterButtonClicked();}, 200);  
    });
    window.addEventListener('OnInterstitialClickedEvent', function (adInfo) {});
    window.addEventListener('OnInterstitialDisplayedEvent', function (adInfo) { console.log('OnInterstitialDisplayedEvent is true'); });
    window.addEventListener('OnInterstitialAdFailedToDisplayEvent', function (adInfo) {
         alert('OnInterstitialAdFailedToDisplayEvent is true - RETRY');
        setTimeout( function (){ onInterButtonClicked();}, 200);  
    });
    window.addEventListener('OnInterstitialHiddenEvent', function (adInfo) {
        localStorage.setItem('adWatched', 1);
        setTimeout( function (){  loadInterstitial(); localStorage.setItem('adWatched', 0);}, 3000);
    });
    // Load the first interstitial
    try {loadInterstitial(); } catch (error) { alert("load interstational 1st INNER failed with " + error); }
}

function loadInterstitial() {
    try { AppLovinMAX.loadInterstitial(INTER_AD_UNIT_ID); console.log("inter ad loaded");
    } catch (error) {  alert("AppLovinMAX.loadInterstitial  failed with " + error);    }      
}

function onRewardedAdButtonClicked() {
    try {
        if (AppLovinMAX.isRewardedAdReady(REWARDED_AD_UNIT_ID)) {
            AppLovinMAX.showRewardedAd(REWARDED_AD_UNIT_ID);
            
        } else {loadRewardedAd();     
            setTimeout(function(){
                if (AppLovinMAX.isRewardedAdReady(REWARDED_AD_UNIT_ID)) {AppLovinMAX.showRewardedAd(REWARDED_AD_UNIT_ID); }
                else{alert('No Rewarded ad ready');}  
            }, 250);        
        }
    } catch (error) { alert("onRewardedAdButtonClicked  failed with " + error);}

}

function initializeRewardedAds() {
    window.addEventListener('OnRewardedAdLoadedEvent', function (adInfo) {   console.log("rewarded ad loaded");    });
    var retries2 = 0;
    window.addEventListener('OnRewardedAdLoadFailedEvent', function (adInfo) {
         console.log("rewarded ad load failed - retrying");  
        setTimeout( function (){ onRewardedAdButtonClicked();}, 200);             
    });
    window.addEventListener('OnRewardedAdClickedEvent', function (adInfo) {});
    window.addEventListener('OnRewardedAdDisplayedEvent', function (adInfo) {localStorage.setItem('rewardWatched', 1);});
    window.addEventListener('OnRewardedAdAdFailedToDisplayEvent', function (adInfo) { setTimeout( function (){ onRewardedAdButtonClicked();}, 200);});
    window.addEventListener('OnRewardedAdHiddenEvent', function (adInfo) {
        setTimeout( function (){ loadRewardedAd(); localStorage.setItem('rewardWatched', 0);}, 3000);
    });
    window.addEventListener('OnRewardedAdReceivedRewardEvent', function (adInfo) { console.log("rewarded ad succeed"); });

    // Load the first rewarded ad
    try { loadRewardedAd(); } catch (error) {alert(" loadRewardedAd INNER failed with " + error); }
}

function loadRewardedAd() {
     try { AppLovinMAX.loadRewardedAd(REWARDED_AD_UNIT_ID);} catch (error) {alert("AppLovinMAX.loadRewardedAd  failed with " + error);} 
}


var interTries4 = 0;
var rewardedTries = 0;
function AppLovinCheck(){
      //inter
    if (localStorage.getItem('MedFarm_LoadAd') == 1 && localStorage.getItem('MedFarm_StarCashBoost') == 0) {
        interTries4 = interTries4 + 1;
        if (interTries4 > 3){localStorage.setItem('MedFarm_LoadAd',0); interTries4 = 0; }
        try{ onInterButtonClicked();localStorage.setItem('MedFarm_LoadAd',0);interTries4 = 0;
        }catch(err){console.log('Load inter failed with ' + err); alert('Load inter failed with ' + err); }               
     }

    ///rewarded
    if (localStorage.getItem('MedFarm_StarCashBoost') == 1) {
        rewardedTries = rewardedTries + 1;
        console.log("tries = " + rewardedTries);
        if (rewardedTries > 3){localStorage.setItem('MedFarm_StarCashBoost',0); rewardedTries = 0;}
      try{  onRewardedAdButtonClicked();            
            localStorage.setItem('MedFarm_StarCashBoost', 0);
            rewardedTries = 0;
        }catch(err){console.log('Load inter failed with ' + err); alert( 'LoadRewarded failed with ' + err);}
    }          
    setTimeout(() => { AppLovinCheck(); },500);
}
//start the loop
setTimeout(() => { AppLovinCheck();}, 5000);

