

// window.onload = function() {
//     alert("window on load fired from applovinloader");
  
// };
setTimeout(function(){ onDeviceReady();},7000);
 var AppLovinMAX;

var INTER_AD_UNIT_ID;
var REWARDED_AD_UNIT_ID;
var BANNER_AD_UNIT_ID;
var MREC_AD_UNIT_ID;


    // Assume Android
    INTER_AD_UNIT_ID = 'ed2d8896f2bc2fcc';
    REWARDED_AD_UNIT_ID = 'ee479fb7bcdc18c3';
    BANNER_AD_UNIT_ID = 'YOUR_ANDROID_BANNER_AD_UNIT_ID';
    MREC_AD_UNIT_ID = 'YOUR_ANDROID_MREC_AD_UNIT_ID';


var SDK_KEY = "4Lf7icebFUhL60MpoZ107TLTRlsqTDtMX1pLCkWUFKxq0p13IDN8gZOGDTGnl4zDzCA6_sbMp1vbEsGRetqgMt";

// var mediationDebuggerButton = document.querySelector('#med_debugger_button');
// var interButton = document.querySelector('#inter_button');
// var rewardedAdButton = document.querySelector('#rewarded_ad_button');
// var bannerAdButton = document.querySelector('#banner_ad_button');
// var mrecAdButton = document.querySelector('#mrec_ad_button');

function onDeviceReady() {
    // console.log('Running cordova-' + cordova.platformId + 'v' + cordova.version);

    // Disable buttons until SDK is initialized
    // mediationDebuggerButton.disabled = true;
    // interButton.disabled = true;
    // rewardedAdButton.disabled = true;
    // bannerAdButton.disabled = true;
    // mrecAdButton.disabled = true;

    // 3rd-party plugins are loaded now
    try{
       
            AppLovinMAX = cordova.require('cordova-plugin-applovin-max.AppLovinMAX');
            alert("cordova import completed");
        // AppLovinMAX.setVerboseLogging(true);
    }catch(err){alert("REQUIRE Appplovin cordova  failed with " + err);}
        
        try {
            AppLovinMAX.initialize(SDK_KEY, function (configuration) {
                // mediationDebuggerButton.disabled = true;
                // alert("initializing AppLovin");
                initializeInterstitialAds();
                initializeRewardedAds();
                alert("AppLovinMAX.initialize completed");
                // initializeBannerAds();
                // initializeMRecAds();
            });
        } catch (error) {
            alert("INITALIZE Appplovin  failed with " + error);
        }
  
        function showMediationDebugger() {
            AppLovinMAX.showMediationDebugger();
        }
        
       
}

function onInterButtonClicked() {
    try {
        if (AppLovinMAX.isInterstitialReady(INTER_AD_UNIT_ID)) {
            AppLovinMAX.showInterstitial(INTER_AD_UNIT_ID);
           
        } else {
            loadInterstitial();
            setTimeout(function(){
                if (AppLovinMAX.isInterstitialReady(INTER_AD_UNIT_ID)) { AppLovinMAX.showInterstitial(INTER_AD_UNIT_ID);}
                else{ alert('No ad ready');}  
            }, 250);
        
        }
    } catch (error) {
        alert('onInterClicked error ' + error);
    }

}

function initializeInterstitialAds() {
    window.addEventListener('OnInterstitialLoadedEvent', function (adInfo) {
        // interButton.innerHTML = 'Show Interstitial';
        // interButton.disabled = false;
        console.log("Inter ad loaded with success");
    });
 var retries2 = 0;
    window.addEventListener('OnInterstitialLoadFailedEvent', function (adInfo) {
        // interButton.innerHTML = 'Load Interstitial';
        // interButton.disabled = false;
     
        alert('OnInterstitialLoadFailedEvent is true - RETRY');
        setTimeout( function (){ onInterButtonClicked();}, 200);  
    });
    window.addEventListener('OnInterstitialClickedEvent', function (adInfo) {});
    window.addEventListener('OnInterstitialDisplayedEvent', function (adInfo) { console.log('OnInterstitialDisplayedEvent is true'); });
    window.addEventListener('OnInterstitialAdFailedToDisplayEvent', function (adInfo) {
        // interButton.innerHTML = 'Load Interstitial';
        // interButton.disabled = false;
         alert('OnInterstitialAdFailedToDisplayEvent is true - RETRY');
        setTimeout( function (){ onInterButtonClicked();}, 200);  

    });
    window.addEventListener('OnInterstitialHiddenEvent', function (adInfo) {
        // interButton.innerHTML = 'Load Interstitial';
        // interButton.disabled = false;
        localStorage.setItem('adWatched', 1);
        setTimeout( function (){  loadInterstitial(); localStorage.setItem('adWatched', 0);}, 3000);
    });

    // Load the first interstitial
    try {
        loadInterstitial();
    } catch (error) {
        alert("load interstational 1st INNER failed with " + error);
    }
    
}

function loadInterstitial() {
    // interButton.innerHTML = 'Loading Interstitial...';
    // interButton.disabled = true;
    try {
        AppLovinMAX.loadInterstitial(INTER_AD_UNIT_ID);
        console.log("inter ad loaded");
    } catch (error) {
        alert("AppLovinMAX.loadInterstitial  failed with " + error);
    }      
}

function onRewardedAdButtonClicked() {
    try {
        if (AppLovinMAX.isRewardedAdReady(REWARDED_AD_UNIT_ID)) {
            AppLovinMAX.showRewardedAd(REWARDED_AD_UNIT_ID);
            
        } else {
            loadRewardedAd();
     
            setTimeout(function(){
                if (AppLovinMAX.isRewardedAdReady(REWARDED_AD_UNIT_ID)) {AppLovinMAX.showRewardedAd(REWARDED_AD_UNIT_ID); }
                else{alert('No Rewarded ad ready');}  
            }, 250);
        
        }
    } catch (error) {
        alert("onRewardedAdButtonClicked  failed with " + error);
    }

}

function initializeRewardedAds() {
    window.addEventListener('OnRewardedAdLoadedEvent', function (adInfo) {
        // rewardedAdButton.innerHTML = 'Show Rewarded Ad';
        // rewardedAdButton.disabled = false;
        console.log("rewarded ad loaded");
    });
var retries2 = 0;
    window.addEventListener('OnRewardedAdLoadFailedEvent', function (adInfo) {
        // rewardedAdButton.innerHTML = 'Load Rewarded Ad';
        // rewardedAdButton.disabled = false;
        console.log("rewarded ad load failed - retrying");  
        setTimeout( function (){ onRewardedAdButtonClicked();}, 200);     
        
    });
    window.addEventListener('OnRewardedAdClickedEvent', function (adInfo) {});
    window.addEventListener('OnRewardedAdDisplayedEvent', function (adInfo) {localStorage.setItem('rewardWatched', 1);});
    window.addEventListener('OnRewardedAdAdFailedToDisplayEvent', function (adInfo) {
        // rewardedAdButton.innerHTML = 'Load Rewarded Ad';
        // rewardedAdButton.disabled = false;
        setTimeout( function (){ onRewardedAdButtonClicked();}, 200);
       
    });
    window.addEventListener('OnRewardedAdHiddenEvent', function (adInfo) {
        // rewardedAdButton.innerHTML = 'Load Rewarded Ad';
        // rewardedAdButton.disabled = false;
        setTimeout( function (){ loadRewardedAd(); localStorage.setItem('rewardWatched', 0);}, 3000);
    });
    window.addEventListener('OnRewardedAdReceivedRewardEvent', function (adInfo) {
        // Rewarded ad was displayed and user should receive the reward
        
        // setTimeout( function (){  loadRewardedAd(); localStorage.setItem('rewardWatched', 0);}, 3000);
    });

    // Load the first rewarded ad
   
    try {
        loadRewardedAd();
    } catch (error) {
        alert(" loadRewardedAd INNER failed with " + error);
    }
}

function loadRewardedAd() {
    // rewardedAdButton.innerHTML = 'Loading Rewarded Ad...';
    // rewardedAdButton.disabled = true;
    try {
        AppLovinMAX.loadRewardedAd(REWARDED_AD_UNIT_ID);
       
    } catch (error) {
        alert("AppLovinMAX.loadRewardedAd  failed with " + error);
    }
    
}

// function initializeBannerAds() {
//     window.addEventListener('OnBannerAdLoadedEvent', function (adInfo) {
//         bannerAdButton.innerHTML = 'Showing Banner Ad...';
//         AppLovinMAX.showBanner(BANNER_AD_UNIT_ID);
//     });
//     window.addEventListener('OnBannerAdLoadFailedEvent', function (adInfo) {
//         bannerAdButton.innerHTML = 'Banner Ad Failed to Load';
//     });
//     window.addEventListener('OnBannerAdClickedEvent', function (adInfo) {});
//     window.addEventListener('OnBannerAdCollapsedEvent', function (adInfo) {});
//     window.addEventListener('OnBannerAdExpandedEvent', function (adInfo) {});

//     // Banners are automatically sized to 320x50 on phones and 728x90 on tablets
//     // You may use the utility method `AppLovinMAX.isTablet()` to help with view sizing adjustments
//     AppLovinMAX.createBanner(BANNER_AD_UNIT_ID, AppLovinMAX.AdViewPosition.BOTTOM_CENTER);

//     // Set background or background color for banners to be fully functional
//     // In this case we are setting it to black - PLEASE USE HEX STRINGS ONLY
//     AppLovinMAX.setBannerBackgroundColor(BANNER_AD_UNIT_ID, '#000000');
// }

// function initializeMRecAds() {
//     window.addEventListener('onMRecAdLoadedEvent', function (adInfo) {
//         mrecAdButton.innerHTML = 'Showing MREC Ad...';
//         AppLovinMAX.showMRec(MREC_AD_UNIT_ID);
//     });
//     window.addEventListener('onMRecAdLoadFailedEvent', function (adInfo) {
//         rewardedAdButton.innerHTML = 'MREC Ad Failed to Load';
//     });
//     window.addEventListener('onMRecAdClickedEvent', function (adInfo) {});
//     window.addEventListener('onMRecAdCollapsedEvent', function (adInfo) {});
//     window.addEventListener('onMRecAdExpandedEvent', function (adInfo) {});

//     // Banners are automatically sized to 320x50 on phones and 728x90 on tablets
//     // You may use the utility method `AppLovinMAX.isTablet()` to help with view sizing adjustments
//     AppLovinMAX.createBanner(MREC_AD_UNIT_ID, AppLovinMAX.AdViewPosition.CENTERED);
// }
var interTries4 = 0;
function AppLovinCheck(){
    //inter
    // console.log("applovin check")
    if (localStorage.getItem('MedFarm_LoadAd') == 1 && localStorage.getItem('MedFarm_StarCashBoost') == 0) {
        interTries4 = interTries4 + 1;
        // console.log("tries = " + interTries);
        if (interTries4 > 3){localStorage.setItem('MedFarm_LoadAd',0); interTries4 = 0; }
        try{ 
            // Enhance.isInterstitialReady(callbackAdInter);
           
            onInterButtonClicked();
                
            localStorage.setItem('MedFarm_LoadAd',0);interTries4 = 0;
        }catch(err){console.log('Load inter failed with ' + err); alert('Load inter failed with ' + err); }               
     }

    ///rewarded

    if (localStorage.getItem('MedFarm_StarCashBoost') == 1) {
        rewardedTries = rewardedTries + 1;
        console.log("tries = " + rewardedTries);
        if (rewardedTries > 3){localStorage.setItem('MedFarm_StarCashBoost',0); rewardedTries = 0;}
      try{
            // Enhance.isRewardedAdReady(callbackRewarded); 
          // loadRewardedAd();
            onRewardedAdButtonClicked();            
            localStorage.setItem('MedFarm_StarCashBoost', 0);
            rewardedTries = 0;
        }catch(err){console.log('Load inter failed with ' + err); alert( 'LoadRewarded failed with ' + err);}
    }          

    setTimeout(() => { AppLovinCheck(); },500);
}


setTimeout(() => {
    AppLovinCheck();
}, 5000);