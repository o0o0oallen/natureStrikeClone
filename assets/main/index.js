window.__require = function e(t, i, a) {
    function n(s, o) {
        if (!i[s]) {
            if (!t[s]) {
                var r = s.split("/");
                if (r = r[r.length - 1],
                !t[r]) {
                    var l = "function" == typeof __require && __require;
                    if (!o && l)
                        return l(r, !0);
                    if (c)
                        return c(r, !0);
                    throw new Error("Cannot find module '" + s + "'")
                }
                s = r
            }
            var g = i[s] = {
                exports: {}
            };
            t[s][0].call(g.exports, function(e) {
                return n(t[s][1][e] || e)
            }, g, g.exports, e, t, i, a)
        }
        return i[s].exports
    }
    for (var c = "function" == typeof __require && __require, s = 0; s < a.length; s++)
        n(a[s]);
    return n
}({
    1: [function(e, t, i) {
        (function(e) {
            (function(e, a) {
                "object" == typeof i && void 0 !== t ? t.exports = a() : "function" == typeof define && define.amd ? define(a) : function() {
                    const t = e.Base64
                      , i = a();
                    i.noConflict = ()=>(e.Base64 = t,
                    i),
                    e.Meteor && (Base64 = i),
                    e.Base64 = i
                }()
            }
            )("undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== e ? e : this, function() {
                "use strict";
                const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
                  , t = (()=>{
                    let e = {}
                      , t = 0;
                    for (const i of "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/")
                        e[i] = t++;
                    return e
                }
                )()
                  , i = String.fromCharCode
                  , a = e=>String(e).replace(/[+\/]/g, e=>"+" == e ? "-" : "_").replace(/=/g, "")
                  , n = (t,i)=>{
                    let n = "";
                    for (let a = 0, c = t.length; a < c; a += 3) {
                        const i = t[a]
                          , c = t[a + 1]
                          , s = t[a + 2]
                          , o = i << 16 | c << 8 | s;
                        n += e.charAt(o >>> 18) + e.charAt(o >>> 12 & 63) + (void 0 !== c ? e.charAt(o >>> 6 & 63) : "=") + (void 0 !== s ? e.charAt(63 & o) : "=")
                    }
                    return i ? a(n) : n
                }
                  , c = "function" == typeof btoa ? e=>btoa(e) : e=>{
                    if (e.match(/[^\x00-\xFF]/))
                        throw new RangeError("The string contains invalid characters.");
                    return n(Uint8Array.from(e, e=>e.charCodeAt(0)))
                }
                  , s = e=>unescape(encodeURIComponent(e))
                  , o = (e,t)=>{
                    const i = c(s(e));
                    return t ? a(i) : i
                }
                  , r = e=>o(e, !0)
                  , l = e=>decodeURIComponent(escape(e))
                  , g = e=>{
                    let a = e.length
                      , n = a % 4
                      , c = (a > 0 ? t[e.charAt(0)] << 18 : 0) | (a > 1 ? t[e.charAt(1)] << 12 : 0) | (a > 2 ? t[e.charAt(2)] << 6 : 0) | (a > 3 ? t[e.charAt(3)] : 0)
                      , s = [i(c >>> 16), i(c >>> 8 & 255), i(255 & c)];
                    return s.length -= [0, 0, 2, 1][n],
                    s.join("")
                }
                  , h = "function" == typeof atob ? e=>atob(e) : e=>String(e).replace(/[^A-Za-z0-9\+\/]/g, "").replace(/\S{1,4}/g, g)
                  , d = e=>l(h(e))
                  , u = e=>String(e).replace(/[-_]/g, e=>"-" == e ? "+" : "/").replace(/[^A-Za-z0-9\+\/]/g, "")
                  , p = e=>d(u(e))
                  , m = e=>Uint8Array.from(h(u(e)), e=>e.charCodeAt(0))
                  , f = e=>({
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                })
                  , M = function() {
                    const e = (e,t)=>Object.defineProperty(String.prototype, e, f(t));
                    e("fromBase64", function() {
                        return p(this)
                    }),
                    e("toBase64", function(e) {
                        return o(this, e)
                    }),
                    e("toBase64URI", function() {
                        return o(this, !0)
                    }),
                    e("toBase64URL", function() {
                        return o(this, !0)
                    }),
                    e("toUint8Array", function() {
                        return m(this)
                    })
                }
                  , v = function() {
                    const e = (e,t)=>Object.defineProperty(Uint8Array.prototype, e, f(t));
                    e("toBase64", function(e) {
                        return n(this, e)
                    }),
                    e("toBase64URI", function() {
                        return n(this, !0)
                    }),
                    e("toBase64URL", function() {
                        return n(this, !0)
                    })
                }
                  , b = {
                    VERSION: "3.2.4",
                    atob: h,
                    btoa: c,
                    fromBase64: p,
                    toBase64: o,
                    encode: o,
                    encodeURI: r,
                    encodeURL: r,
                    utob: s,
                    btou: l,
                    decode: p,
                    fromUint8Array: n,
                    toUint8Array: m,
                    extendString: M,
                    extendUint8Array: v,
                    extendBuiltins: ()=>{
                        M(),
                        v()
                    }
                };
                return b.Base64 = Object.assign({}, b),
                b
            })
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {}],
    ABTest: [function(e, t) {
        "use strict";
        cc._RF.push(t, "34efa1/f3lD44VVns0vLAE9", "ABTest"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {
                cc.Mgr.abTest = this,
                this.initConfig()
            },
            initConfig: function() {
                this.abConfig = {};
                var e = ["control", "countdown", "nocountdown"];
                this.abConfig.ab_countdown = e[Math.random() * e.length >> 0]
            },
            getABtestLocally: function(e) {
                return this.abConfig[e]
            },
            getABtest: function(e) {
                if (!0 === cc.Mgr.Config.isFacebook)
                    return "";
                var t;
                switch (cc.sys.os) {
                case cc.sys.OS_ANDROID:
                    t = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/firebase/ABTest", "getValueOfABTest", "(Ljava/lang/String;)Ljava/lang/String;", e);
                    break;
                case cc.sys.OS_IOS:
                    t = jsb.reflection.callStaticMethod("ABTest", "getValueOfABTest:", e)
                }
                return t
            }
        }),
        cc._RF.pop()
    }
    , {}],
    AchieveData: [function(e, t) {
        "use strict";
        cc._RF.push(t, "a8a7aKgOlVI1oOE567Pk3AI", "AchieveData");
        var i = cc.Class({
            name: "AchieveData",
            properties: {
                id: 1,
                Level: 1,
                Gain_5: 0,
                Gain_20: 0,
                Gain_50: 0,
                Gain_100: 0,
                Gain_200: 0
            }
        });
        t.exports = i,
        cc._RF.pop()
    }
    , {}],
    AchieveMapMgr: [function(e, t) {
        "use strict";
        cc._RF.push(t, "19f1629F69CfIBGOTUhomAH", "AchieveMapMgr");
        var i = e("DB_achievementAwards")
          , a = e("AchieveData")
          , n = cc.Class({
            extends: cc.Component,
            properties: {
                dataList: {
                    default: [],
                    type: [a]
                }
            },
            DecodeJson: function() {
                var e = JSON.parse(i.data);
                for (var t in e) {
                    var n = new a;
                    n.id = e[t][0],
                    n.Level = e[t][1],
                    n.Gain_5 = e[t][2],
                    n.Gain_20 = e[t][3],
                    n.Gain_50 = e[t][4],
                    n.Gain_100 = e[t][5],
                    n.Gain_200 = e[t][6],
                    this.dataList[t] = n
                }
            },
            getDataByKey: function(e) {
                return this.dataList[e]
            }
        });
        t.exports = n,
        cc._RF.pop()
    }
    , {
        AchieveData: "AchieveData",
        DB_achievementAwards: "DB_achievementAwards"
    }],
    Admob: [function(e, t) {
        "use strict";
        cc._RF.push(t, "1d44enYXAhByqzHu8tVjZbm", "Admob");
        var i = e("MissionType");
        cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {
                this.bannerList = [],
                this.getInitTimer = 0,
                this.updateTimer = null,
                this.openRemoveAdCountList = [1, 3, 5, 8, 11, 14, 17],
                this.openRemoveAdCountList_interstitial = [1, 3, 5, 8, 11, 14, 17],
                this.hasShowPopup_banner = !1,
                this.hasShowPopup_interstitial = !1,
                this.adClicked = !1
            },
            preloadAds_mopub: function() {
                !0 === cc.Mgr.game.isFacebook || cc.Mgr.game.isVIP || cc.Mgr.game.removeAd || this.preloadBanner_mopub(),
                !0 === cc.Mgr.game.isFacebook || cc.Mgr.game.isVIP || cc.Mgr.game.removeAd || this.preloadInterstitial_mopub(),
                this.preloadRewarded_mopub()
            },
            getMessage: function(e) {
                this.label.string = e
            },
            onLoad: function() {
                cc.Mgr.admob = this,
                this.isInit = !1
            },
            muteAds: function() {
                var e = 0 == cc.Mgr.AudioMgr.sfxVolume && 0 == cc.Mgr.AudioMgr.bgmVolume ? "0" : "1";
                if (cc.Mgr.game.isFacebook || (cc.Mgr.game.isFacebook = cc.Mgr.Config.isFacebook),
                !0 !== cc.Mgr.game.isFacebook && !0 !== cc.Mgr.Config.isMopub)
                    switch (cc.sys.os) {
                    case cc.sys.OS_ANDROID:
                        jsb.reflection.callStaticMethod("org/cocos2dx/javascript/admob/AdManager", "muteAds", "(Ljava/lang/String;)V", e);
                        break;
                    case cc.sys.OS_IOS:
                        jsb.reflection.callStaticMethod("AdmobManager", "muteAds:", e)
                    }
            },
            showAdsTool: function() {
                if (!0 !== cc.Mgr.game.isFacebook)
                    switch (cc.sys.os) {
                    case cc.sys.OS_ANDROID:
                        jsb.reflection.callStaticMethod("org/cocos2dx/javascript/admob/AdManager", "showAdsTool", "()V");
                        break;
                    case cc.sys.OS_IOS:
                        jsb.reflection.callStaticMethod("AdmobManager", "showAdsTool")
                    }
                else
                    cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("not-supported"))
            },
            checkAvailableRewardedAd: function() {
                return 1 == cc.Mgr.game.isFacebook && 0 == cc.Mgr.Config.isGameSnacks || null != this.showRewardedCallback
            },
            showBanner: function(e) {
                if (!0 !== cc.Mgr.game.isFacebook && !cc.Mgr.game.isVIP && cc.Mgr.game.needShowBanner && !cc.Mgr.game.removeAd && this.bannerList.indexOf(e) < 0 && (this.bannerList.push(e),
                console.log("this.bannerList.length :" + this.bannerList.length),
                !(this.bannerList.length > 1)))
                    if (cc.Mgr.game.banner_ct++,
                    !1 === cc.Mgr.Config.isMopub)
                        switch (cc.sys.os) {
                        case cc.sys.OS_ANDROID:
                            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/admob/AdManager", "showBanner", "(Ljava/lang/String;)V", e);
                            break;
                        case cc.sys.OS_IOS:
                            jsb.reflection.callStaticMethod("AdmobManager", "showBanner:", e)
                        }
                    else
                        switch (cc.sys.os) {
                        case cc.sys.OS_ANDROID:
                            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/admob/AdManager", "showBanner_mopub", "(Ljava/lang/String;)V", e);
                            break;
                        case cc.sys.OS_IOS:
                            jsb.reflection.callStaticMethod("AdmobManager", "showBanner_mopub:", e)
                        }
            },
            hideBanner: function(e) {
                if (!0 !== cc.Mgr.game.isFacebook) {
                    if ("all" === e)
                        this.bannerList = [];
                    else {
                        var t = this.bannerList.indexOf(e);
                        if (!(t >= 0))
                            return;
                        this.bannerList.splice(t, 1)
                    }
                    if (console.log("this.bannerList.length :" + this.bannerList.length),
                    !(this.bannerList.length > 0 || !0 === cc.Mgr.game.isFacebook && "all" !== e))
                        if (!1 === cc.Mgr.Config.isMopub)
                            switch (cc.sys.os) {
                            case cc.sys.OS_ANDROID:
                                jsb.reflection.callStaticMethod("org/cocos2dx/javascript/admob/AdManager", "hideBanner", "()V");
                                break;
                            case cc.sys.OS_IOS:
                                jsb.reflection.callStaticMethod("AdmobManager", "hideBanner")
                            }
                        else
                            switch (cc.sys.os) {
                            case cc.sys.OS_ANDROID:
                                jsb.reflection.callStaticMethod("org/cocos2dx/javascript/admob/AdManager", "hideBanner_mopub", "()V");
                                break;
                            case cc.sys.OS_IOS:
                                jsb.reflection.callStaticMethod("AdmobManager", "hideBanner_mopub")
                            }
                }
            },
            showInterstitial: function(e, t, i) {
                this.isPlayingAd = !0;
                cc.Mgr.game.pauseGame();

                ENF_showInterstitialAd(()=>{
                    this.isPlayingAd = 0;
                    cc.Mgr.game.resumeGame();
                }, ()=>{
                    this.isPlayingAd = 0;
                    cc.Mgr.game.resumeGame();
                });
                return;

                if (this.interstitialCallback = t,
                !0 === cc.Mgr.game.isFacebook || cc.Mgr.game.isVIP || !cc.Mgr.game.needShowInterstitial || cc.Mgr.game.removeAd || !1 === i && cc.Mgr.UIMgr.currentShowUICount > 0)
                    null != this.interstitialCallback && (this.interstitialCallback(),
                    this.interstitialCallback = null);
                else {
                    this.interstitialFeature = e,
                    cc.Mgr.TEA.collectEvent("ad_request", {
                        elapsed: cc.Mgr.Utils.getDate9(!0),
                        ads_type: "interstitial",
                        feature: e
                    });
                    var a = {};
                    if (a.elapsed = cc.Mgr.Utils.getDate9(!0),
                    a.ads_type = "interstitial",
                    a.feature = e,
                    cc.Mgr.analytics.logEvent("ad_request", JSON.stringify(a)),
                    !1 === cc.Mgr.Config.isMopub)
                        switch (cc.sys.os) {
                        case cc.sys.OS_ANDROID:
                            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/admob/AdManager", "showInterstitial", "(Ljava/lang/String;)V", e);
                            break;
                        case cc.sys.OS_IOS:
                            jsb.reflection.callStaticMethod("AdmobManager", "showInterstitial:", e)
                        }
                    else
                        switch (cc.sys.os) {
                        case cc.sys.OS_ANDROID:
                            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/admob/AdManager", "showInterstitial_mopub", "(Ljava/lang/String;)V", e);
                            break;
                        case cc.sys.OS_IOS:
                            jsb.reflection.callStaticMethod("AdmobManager", "showInterstitial_mopub:", e)
                        }
                    this.isPlayingAd = !0,
                    this.timeout = setTimeout(function() {
                        cc.Mgr.game.pauseGame()
                    }, 200),
                    cc.Mgr.game.Interstitial_ct++
                }
            },
            showRewardedVideoAd: function(e, t, i, a) {
                if (this.tipParent = t,
                this.controller = a,
                !0 === cc.Mgr.game.isFacebook)
                    return 1 == cc.Mgr.Config.isGameSnacks ? (this.callback = e,
                    void (null != this.showRewardedCallback ? this.showRewardedCallback() : cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("ad-tip-3"), "", t))) : void e(!0);
                cc.Mgr.TEA.collectEvent("ad_request", {
                    elapsed: cc.Mgr.Utils.getDate9(!0),
                    ads_type: "rewarded",
                    feature: i
                });
                var n = {};
                if (n.elapsed = cc.Mgr.Utils.getDate9(!0),
                n.ads_type = "rewarded",
                n.feature = i,
                cc.Mgr.analytics.logEvent("ad_request", JSON.stringify(n)),
                this.callback = e,
                !1 === cc.Mgr.Config.isMopub)
                    switch (cc.sys.os) {
                    case cc.sys.OS_ANDROID:
                        jsb.reflection.callStaticMethod("org/cocos2dx/javascript/admob/AdManager", "showRewardedVideoAd", "(Ljava/lang/String;)V", i);
                        break;
                    case cc.sys.OS_IOS:
                        jsb.reflection.callStaticMethod("AdmobManager", "showRewardedAd:", i)
                    }
                else
                    switch (cc.sys.os) {
                    case cc.sys.OS_ANDROID:
                        jsb.reflection.callStaticMethod("org/cocos2dx/javascript/admob/AdManager", "showRewardedVideoAd_mopub", "(Ljava/lang/String;)V", i);
                        break;
                    case cc.sys.OS_IOS:
                        jsb.reflection.callStaticMethod("AdmobManager", "showRewardedAd_mopub:", i)
                    }
                this.isPlayingAd = !0,
                this.timeout = setTimeout(function() {
                    cc.Mgr.game.pauseGame()
                }, 100)
            },
            getRewardFromVideo: function() {
                null != this.callback && (this.callback(!0),
                this.callback = null),
                cc.Mgr.game.rewarded_ct++,
                cc.Mgr.game.updateMissionProgressById(i.AdsShow)
            },
            closeAdHandler: function() {
                var e = this;
                clearTimeout(this.timeout),
                this.timeout = setTimeout(function() {
                    cc.Mgr.game.resumeGame(),
                    e.isPlayingAd = !1,
                    null != e.interstitialCallback && (e.interstitialCallback(),
                    e.interstitialCallback = null)
                }, 200)
            },
            isNative: function() {
                return !1 === cc.sys.isBrowser || void 0 === cc.sys.isBrowser
            },
            errorMessage: function(e) {
                var t = this;
                clearTimeout(this.timeout),
                this.timeout = setTimeout(function() {
                    if (cc.Mgr.game.resumeGame(),
                    t.isPlayingAd = !1,
                    3 !== e) {
                        switch (e) {
                        case 1:
                            cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("ad-tip"), "", t.tipParent);
                            break;
                        case 2:
                            cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("ad-tip-2"), "", t.tipParent);
                            break;
                        case 4:
                            cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("ad-tip-3"), "", t.tipParent),
                            t.controller && t.controller.updateAdsBtnState()
                        }
                        5 === e && null != t.interstitialCallback && (t.interstitialCallback(),
                        t.interstitialCallback = null),
                        6 === e && (cc.Mgr.UIMgr.showLoading(!0),
                        t.needShowAdTimer = setTimeout(function() {
                            switch (cc.Mgr.UIMgr.hideLoading(),
                            cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("ad-tip-3"), "", t.tipParent),
                            cc.sys.os) {
                            case cc.sys.OS_ANDROID:
                                jsb.reflection.callStaticMethod("org/cocos2dx/javascript/admob/AdManager", "endWaiting", "()V");
                                break;
                            case cc.sys.OS_IOS:
                                jsb.reflection.callStaticMethod("AdmobManager", "endWaiting")
                            }
                        }, 5e3))
                    }
                }, 500)
            },
            clearNeedShowTimer: function() {
                cc.Mgr.UIMgr.hideLoading(),
                clearTimeout(this.needShowAdTimer),
                cc.Mgr.game.pauseGame()
            },
            preloadBanner: function() {
                if (!0 !== cc.Mgr.game.isFacebook && !0 !== cc.Mgr.Config.isMopub && 1 != cc.Mgr.Config.isGameSnacks)
                    switch (cc.sys.os) {
                    case cc.sys.OS_ANDROID:
                        jsb.reflection.callStaticMethod("org/cocos2dx/javascript/admob/AdManager", "preloadBanner", "()V");
                        break;
                    case cc.sys.OS_IOS:
                        jsb.reflection.callStaticMethod("AdmobManager", "preloadBanner")
                    }
            },
            preloadBanner_mopub: function() {
                if (!0 !== cc.Mgr.game.isFacebook && !1 !== cc.Mgr.Config.isMopub)
                    switch (cc.sys.os) {
                    case cc.sys.OS_ANDROID:
                        jsb.reflection.callStaticMethod("org/cocos2dx/javascript/admob/AdManager", "preloadBanner_mopub", "()V");
                        break;
                    case cc.sys.OS_IOS:
                        jsb.reflection.callStaticMethod("AdmobManager", "preloadBanner_mopub")
                    }
            },
            preloadInterstitial: function() {
                if (!0 !== cc.Mgr.game.isFacebook && !0 !== cc.Mgr.Config.isMopub && 1 != cc.Mgr.Config.isGameSnacks)
                    switch (cc.sys.os) {
                    case cc.sys.OS_ANDROID:
                        jsb.reflection.callStaticMethod("org/cocos2dx/javascript/admob/AdManager", "preLoadInterstitial_mopub", "()V");
                        break;
                    case cc.sys.OS_IOS:
                        jsb.reflection.callStaticMethod("AdmobManager", "preloadInterstitial")
                    }
            },
            preloadInterstitial_mopub: function() {
                if (!0 !== cc.Mgr.game.isFacebook && !1 !== cc.Mgr.Config.isMopub)
                    switch (cc.sys.os) {
                    case cc.sys.OS_ANDROID:
                        jsb.reflection.callStaticMethod("org/cocos2dx/javascript/admob/AdManager", "preloadInterstitial_mopub", "()V");
                        break;
                    case cc.sys.OS_IOS:
                        jsb.reflection.callStaticMethod("AdmobManager", "preloadInterstitial_mopub")
                    }
            },
            preloadRewarded: function(e) {
                var t = this;
                !0 === cc.Mgr.game.isFacebook && 0 == cc.Mgr.Config.isGameSnacks || (this.controller = e,
                null == this.showRewardedCallback && GAMESNACKS.rewardedAdOpportunity({
                    beforeReward: function(e) {
                        t.controller && t.controller.updateAdsBtnState(),
                        t.showRewardedCallback = e
                    },
                    beforeBreak: function() {
                        t.isPlayingAd = !0,
                        t.timeout = setTimeout(function() {
                            cc.Mgr.game.pauseGame()
                        }, 100)
                    },
                    adComplete: function() {
                        t.getRewardFromVideo()
                    },
                    adDismissed: function() {},
                    afterBreak: function() {
                        t.closeAdHandler(),
                        t.showRewardedCallback = null,
                        t.controller && t.controller.updateAdsBtnState(),
                        cc.Mgr.UIMgr.InGameUI.updateDoubleCoinBtn()
                    }
                }))
            },
            preloadRewarded_mopub: function() {
                if (!0 !== cc.Mgr.game.isFacebook && !1 !== cc.Mgr.Config.isMopub)
                    switch (cc.sys.os) {
                    case cc.sys.OS_ANDROID:
                        jsb.reflection.callStaticMethod("org/cocos2dx/javascript/admob/AdManager", "preloadRewarded_mopub", "()V");
                        break;
                    case cc.sys.OS_IOS:
                        jsb.reflection.callStaticMethod("AdmobManager", "preloadRewardAd_mopub")
                    }
            },
            getInitState: function() {
                if (!0 === cc.Mgr.game.isFacebook)
                    return !1;
                var e;
                switch (cc.sys.os) {
                case cc.sys.OS_ANDROID:
                    e = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/admob/AdManager", "getInitState", "()Z");
                    break;
                case cc.sys.OS_IOS:
                    e = jsb.reflection.callStaticMethod("AdmobManager", "getInitState")
                }
                return e
            },
            reportEvent: function(e, t, i, a) {
                cc.Mgr.TEA.collectEvent(e, {
                    elapsed: cc.Mgr.Utils.getDate9(!0),
                    ads_type: t,
                    feature: i || "none",
                    ad_source: a
                });
                var n = {};
                n.elapsed = cc.Mgr.Utils.getDate9(!0),
                n.ads_type = t,
                n.feature = i || "none",
                n.ad_source = a,
                cc.Mgr.analytics.logEvent(e, JSON.stringify(n))
            },
            openRemoveAdBundle: function() {
                cc.Mgr.game.openRemoveAdCount++,
                this.openRemoveAdCountList.indexOf(cc.Mgr.game.openRemoveAdCount) >= 0 && !1 === cc.Mgr.game.isVIP && !1 === cc.Mgr.game.removeAd && (0 === cc.Mgr.game.removeAdStartTimer || 0 != cc.Mgr.game.removeAdStartTimer && Date.now() - cc.Mgr.game.removeAdStartTimer >= 864e5) && (cc.Mgr.game.removeAdStartTimer = Date.now())
            },
            openRemoveAdBundle_interstitial: function() {
                cc.Mgr.game.openRemoveAdCount_interstitial++,
                this.openRemoveAdCountList_interstitial.indexOf(cc.Mgr.game.openRemoveAdCount_interstitial) >= 0 && !1 === cc.Mgr.game.isVIP && !1 === cc.Mgr.game.removeAd && (0 === cc.Mgr.game.removeAdStartTimer || 0 != cc.Mgr.game.removeAdStartTimer && Date.now() - cc.Mgr.game.removeAdStartTimer >= 864e5) && (cc.Mgr.game.removeAdStartTimer = Date.now()),
                !1 === this.hasShowPopup_interstitial && (cc.Mgr.UIMgr.openRemoveAdBundle(),
                this.hasShowPopup_interstitial = !0)
            },
            onClickBanner: function() {
                this.adClicked = !0
            },
            update: function() {
                !1 !== this.isInit && !0 !== cc.Mgr.game.isFacebook && 1 != cc.Mgr.Config.isGameSnacks && (null != this.updateTimer ? Date.now() - this.updateTimer >= 1e3 && (this.preloadRewarded(),
                !0 === cc.Mgr.game.isFacebook || cc.Mgr.game.isVIP || !cc.Mgr.game.needShowBanner || cc.Mgr.game.removeAd || this.preloadBanner(),
                !0 === cc.Mgr.game.isFacebook || cc.Mgr.game.isVIP || !cc.Mgr.game.needShowInterstitial || cc.Mgr.game.removeAd || this.preloadInterstitial(),
                this.updateTimer = Date.now()) : this.updateTimer = 0)
            }
        }),
        cc._RF.pop()
    }
    , {
        MissionType: "MissionType"
    }],
    AirDropData: [function(e, t) {
        "use strict";
        cc._RF.push(t, "b4232JqGKZD8ZAPp+5heYbz", "AirDropData");
        var i = cc.Class({
            extends: cc.Component,
            properties: {
                Level: 1,
                Plant1: 0,
                Plant2: 0
            }
        });
        t.exports = i,
        cc._RF.pop()
    }
    , {}],
    AirDropMapMgr: [function(e, t) {
        "use strict";
        cc._RF.push(t, "1b99bN5SlxPNIIdcREK/DKV", "AirDropMapMgr");
        var i = e("DB_airdrop")
          , a = e("AirDropData")
          , n = cc.Class({
            extends: cc.Component,
            properties: {
                dataList: {
                    default: [],
                    type: [a]
                }
            },
            DecodeJson: function() {
                var e = JSON.parse(i.data);
                for (var t in e) {
                    var n = new a;
                    n.Level = e[t][0],
                    n.Plant1 = e[t][1],
                    n.Plant2 = e[t][2],
                    this.dataList[t] = n
                }
            },
            getDataByKey: function(e) {
                return this.dataList[e]
            }
        });
        t.exports = n,
        cc._RF.pop()
    }
    , {
        AirDropData: "AirDropData",
        DB_airdrop: "DB_airdrop"
    }],
    Analytics: [function(e, t) {
        "use strict";
        cc._RF.push(t, "bc108y62TVKUJpDw6OLT8M1", "Analytics"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                cc.Mgr.analytics = this
            },
            start: function() {},
            logEvent: function(e, t) {
                if (!0 !== cc.Mgr.game.isFacebook && !0 !== cc.Mgr.isDebug)
                    switch (cc.sys.os) {
                    case cc.sys.OS_ANDROID:
                        jsb.reflection.callStaticMethod("org/cocos2dx/javascript/firebase/Analytics", "logEvent", "(Ljava/lang/String;Ljava/lang/String;)V", e, t);
                        break;
                    case cc.sys.OS_IOS:
                        jsb.reflection.callStaticMethod("Analytics", "logEvent:content:", e, t)
                    }
            }
        }),
        cc._RF.pop()
    }
    , {}],
    AppStart: [function(e, t) {
        "use strict";
        function i() {
            console.log("\u6a21\u5757\u521d\u59cb\u5316\u5f00\u59cb"),
            cc.Mgr.Parse = !1,
            cc.Mgr.preLoadingScene = !1,
            cc.Mgr.initData = !1,
            cc.Mgr.Event = e("Event"),
            cc.Mgr.Utils = e("Utils"),
            cc.Mgr.Utils.init(),
            cc.Mgr.Config = e("Config"),
            cc.Mgr.Config.init();
            var t = e("HttpUtils");
            cc.Mgr.http = new t;
            var i = e("MapDataMgr");
            cc.Mgr.MapDataMgr = new i;
            var a = e("game");
            cc.Mgr.game = a.getInstance();
            var n = e("UserDataMgr");
            cc.Mgr.UserDataMgr = new n,
            cc.Mgr.DragonMgr = e("DragonMgr");
            var c = e("AtlasMgr");
            cc.Mgr.AtlasMgr = new c,
            cc.Mgr.AtlasMgr.init();
            var s = e("BulletPool");
            cc.Mgr.BulletPool = new s,
            cc.Mgr.BulletPool.InitPool(),
            cc.Mgr.UIItemMgr = e("uiItemMgr"),
            cc.Mgr.UIItemMgr.loadItemsPre();
            var o = e("EffectMgr");
            cc.Mgr.EffectMgr = new o,
            cc.Mgr.EffectMgr.InitPool();
            var r = e("plantManage");
            cc.Mgr.plantMgr = r.instance;
            var l = e("flowerPotManage");
            cc.Mgr.flowerPotMgr = l.instance;
            var g = e("UIMgr");
            cc.Mgr.UIMgr = g.instance,
            console.log("\u6a21\u5757\u521d\u59cb\u5316\u5b8c\u6210")
        }
        cc._RF.push(t, "294db5kmhVNM6K0TAEwEyUS", "AppStart"),
        cc.director.initMgr = !1,
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                cc.director.GlobalEvent.clear(),
                cc.Mgr = {}
            },
            start: function() {
                cc.Mgr.app = this,
                i(),
                this.canvas = this.node.getComponent(cc.Canvas);
                var e = cc.view.getVisibleSizeInPixel()
                  , t = e.width / e.height;
                cc.log("ratio: " + t),
                cc.Mgr.game.ratioOffsetY = 0,
                t > .6 ? (cc.Mgr.game.isPad = !0,
                cc.Mgr.game.ratioOffsetX = 640 * (t - .6),
                this.canvas.fitHeight = !0,
                this.canvas.fitWidth = !0) : (t < .56 && (cc.Mgr.game.ratioOffsetY = 1136 * (.56 - t)),
                cc.Mgr.game.isPad = !1,
                this.canvas.fitHeight = !1,
                this.canvas.fitWidth = !0)
            }
        }),
        cc._RF.pop()
    }
    , {
        AtlasMgr: "AtlasMgr",
        BulletPool: "BulletPool",
        Config: "Config",
        DragonMgr: "DragonMgr",
        EffectMgr: "EffectMgr",
        Event: "Event",
        HttpUtils: "HttpUtils",
        MapDataMgr: "MapDataMgr",
        UIMgr: "UIMgr",
        UserDataMgr: "UserDataMgr",
        Utils: "Utils",
        flowerPotManage: "flowerPotManage",
        game: "game",
        plantManage: "plantManage",
        uiItemMgr: "uiItemMgr"
    }],
    AtlasMgr: [function(e, t) {
        "use strict";
        cc._RF.push(t, "5d779T4kYVAi6VYgdDU9irp", "AtlasMgr");
        var i = e("AtlasType")
          , a = cc.Class({
            extends: cc.Component,
            properties: {
                gameAtlas: cc.SpriteAtlas,
                plantHeadAtlas: cc.SpriteAtlas
            },
            init: function() {
                var e = this;
                cc.loader.loadRes("atlas/plantHead", cc.SpriteAtlas, function(t, i) {
                    t ? cc.error(t.message || t) : e.plantHeadAtlas = i
                })
            },
            getSpriteFrame: function(e, t) {
                var a = null;
                switch (e) {
                case i.PlantHead:
                    a = this.plantHeadAtlas.getSpriteFrame(t)
                }
                return a
            },
            getSpriteAtlas: function(e) {
                var t = null;
                switch (e) {
                case i.PlantHead:
                    t = this.plantHeadAtlas
                }
                return t
            }
        });
        t.exports = a,
        cc._RF.pop()
    }
    , {
        AtlasType: "AtlasType"
    }],
    AtlasType: [function(e, t) {
        "use strict";
        cc._RF.push(t, "d49ecQ28VdASK8ivL2OcTfA", "AtlasType");
        var i = cc.Enum({
            PlantHead: 3,
            SmallHead: 4
        });
        t.exports = i,
        cc._RF.pop()
    }
    , {}],
    AudioMgr: [function(e, t) {
        "use strict";
        cc._RF.push(t, "c45cbALFTRJhZChw3h3yR9+", "AudioMgr"),
        cc.Class({
            extends: cc.Component,
            properties: {
                bgmVolume: 1,
                sfxVolume: 1,
                bgmAudioID: -1,
                soundAudioID: -1,
                musicState: 1,
                uavAudioId: -1,
                blockBGM: 0,
                blockSFX: 0
            },
            start: function() {
                cc.Mgr.AudioMgr = this;
                var e = cc.sys.localStorage.getItem("VolumeData");
                e = e ? JSON.parse(e) : {},
                this.sfxVolume = null == e.sfxVolume ? 1 : e.sfxVolume,
                this.bgmVolume = null == e.bgmVolume ? 1 : e.bgmVolume,
                cc.Mgr.admob.muteAds(),
                this.cacheDict = {}
            },
            getUrl: function(e) {
                return cc.url.raw("resources/sound/" + e + ".mp3")
            },
            playBGM: function(e) {
                this.bgmAudioID >= 0 && cc.audioEngine.stop(this.bgmAudioID);
                var t = this;
                this.cacheDict[e] ? t.bgmAudioID = cc.audioEngine.play(this.cacheDict[e], !0, this.bgmVolume) : cc.loader.loadRes("sound/" + e, cc.AudioClip, function(i, a) {
                    i ? cc.error(i.message || i) : (t.bgmAudioID = cc.audioEngine.play(a, !0, t.bgmVolume),
                    t.cacheDict[e] = a)
                })
            },
            playSFX: function(e) {
                if (0 !== this.sfxVolume && !this.isPause) {
                    var t = this;
                    this.cacheDict[e] ? cc.audioEngine.play(this.cacheDict[e], !1, this.sfxVolume) : cc.loader.loadRes("sound/" + e, cc.AudioClip, function(i, a) {
                        i ? cc.error(i.message || i) : (cc.audioEngine.play(a, !1, t.sfxVolume),
                        t.cacheDict[e] = a)
                    })
                }
            },
            playUavSFX: function(e) {
                if (0 !== this.sfxVolume && !this.isPause) {
                    var t = this;
                    this.cacheDict[e] ? this.uavAudioId = cc.audioEngine.play(this.cacheDict[e], !0, .5 * this.sfxVolume) : cc.loader.loadRes("sound/" + e, cc.AudioClip, function(i, a) {
                        i ? cc.error(i.message || i) : (t.uavAudioId = cc.audioEngine.play(a, !0, .5 * t.sfxVolume),
                        t.cacheDict[e] = a)
                    })
                }
            },
            stopUavSFX: function() {
                -1 != this.uavAudioId && (cc.audioEngine.stop(this.uavAudioId),
                this.uavAudioId = -1)
            },
            setSFXVolume: function(e) {
                this.sfxVolume = e,
                cc.audioEngine.setVolume(this.uavAudioId, e);
                var t = {};
                t.bgmVolume = this.bgmVolume,
                t.sfxVolume = e,
                cc.sys.localStorage.setItem("VolumeData", JSON.stringify(t)),
                cc.Mgr.admob.muteAds()
            },
            setBGMVolume: function(e) {
                cc.audioEngine.setVolume(this.bgmAudioID, e),
                this.bgmVolume = e;
                var t = {};
                t.bgmVolume = e,
                t.sfxVolume = this.sfxVolume,
                cc.sys.localStorage.setItem("VolumeData", JSON.stringify(t)),
                cc.Mgr.admob.muteAds()
            },
            stopAll: function() {
                cc.audioEngine.stopAll()
            },
            pauseAll: function() {
                this.isPause = !0,
                cc.audioEngine.pauseAll()
            },
            resumeAll: function() {
                this.isPause = !1,
                cc.audioEngine.resumeAll()
            }
        }),
        cc._RF.pop()
    }
    , {}],
    BlurMask: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "f351aoLeYRFMJ0SkjRFg/yo", "BlurMask"),
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = cc._decorator
          , n = a.ccclass
          , c = a.property
          , s = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.camera = null,
                t.texture = null,
                t.spriteFrame = null,
                t.sprite = null,
                t._lastSize = new cc.Size(0,0),
                t._cullingMask = 268435456,
                t.material = null,
                t.ignoredNodes = [],
                t.bightness = .5,
                t.blurAmount = .5,
                t
            }
            return __extends(t, e),
            t.prototype.start = function() {
                var e = this;
                this.node.scaleY = -1,
                this.texture = new cc.RenderTexture,
                this.texture.initWithSize(this.node.width, this.node.height, cc.game._renderContext.STENCIL_INDEX8),
                this.camera = this.node.addComponent(cc.Camera),
                this.camera.cullingMask = 4294967295 ^ this._cullingMask,
                this.camera.targetTexture = this.texture,
                this.camera.enabled = !1,
                this.cull(this.node),
                this.ignoredNodes.map(function(t) {
                    return e.cull(t)
                }),
                this.spriteFrame = new cc.SpriteFrame,
                this.sprite = this.node.addComponent(cc.Sprite),
                this.sprite.spriteFrame = this.spriteFrame,
                this.material._props.bightness = this.bightness,
                this.material._props.blurAmount = this.blurAmount,
                this.sprite._materials[0] = this.material
            }
            ,
            t.prototype.snapshot = function() {
                var e = this.node.getContentSize();
                e.width === this._lastSize.width && e.height === this._lastSize.height || (this.texture.initWithSize(this.node.width, this.node.height, cc.game._renderContext.STENCIL_INDEX8),
                this.camera.targetTexture = this.texture),
                this._lastSize.width = e.width,
                this._lastSize.height = e.height,
                this.camera.render(cc.Canvas.instance.node),
                this.spriteFrame.setTexture(this.texture)
            }
            ,
            t.prototype.update = function() {
                this.snapshot()
            }
            ,
            t.prototype.cull = function(e) {
                var t = this;
                e && (e._cullingMask = this._cullingMask,
                e.childrenCount > 0 && e.children.map(function(e) {
                    return t.cull(e)
                }))
            }
            ,
            __decorate([c({
                type: cc.Material,
                displayName: "\u6a21\u7cca\u6750\u8d28",
                tooltip: "\u7528\u4e8e\u5e94\u7528\u6a21\u7cca\u6240\u7528\u7684\u6750\u8d28\uff0c\u5982\u65e0\u7279\u6b8a\u9700\u6c42\u8bf7\u4fdd\u6301\u9ed8\u8ba4"
            })], t.prototype, "material", void 0),
            __decorate([c({
                type: [cc.Node],
                displayName: "\u5ffd\u7565\u8282\u70b9\u5217\u8868",
                tooltip: "\u5728\u6b64\u5217\u8868\u5185\u7684\u8282\u70b9\u5c06\u4e0d\u4f1a\u88ab\u6a21\u7cca\u906e\u7f69\u6e32\u67d3"
            })], t.prototype, "ignoredNodes", void 0),
            __decorate([c({
                type: cc.Float,
                displayName: "\u4eae\u5ea6",
                tooltip: "\u964d\u4f4e\u80cc\u666f\u7684\u4eae\u5ea6",
                min: 0,
                max: 1
            })], t.prototype, "bightness", void 0),
            __decorate([c({
                type: cc.Float,
                displayName: "\u6a21\u7cca\u5ea6",
                tooltip: "\u80cc\u666f\u7684\u6a21\u7cca\u7a0b\u5ea6",
                min: 0,
                max: 1
            })], t.prototype, "blurAmount", void 0),
            __decorate([n], t)
        }(cc.Component);
        i.default = s,
        cc._RF.pop()
    }
    , {}],
    BuffUI: [function(e, t) {
        "use strict";
        cc._RF.push(t, "0985aKurvRDKIBT9YMJgW/F", "BuffUI"),
        cc.Class({
            extends: cc.Component,
            properties: {
                content: cc.Node,
                blurBg: cc.Node,
                auto_title: cc.Label,
                rage_title: cc.Label,
                fire_title: cc.Label,
                ice_titile: cc.Label,
                crit_title: cc.Label,
                getBtnLabelList: [cc.Label],
                auto_progress: cc.Node,
                rage_progress: cc.Node,
                fire_progress: cc.Node,
                ice_progress: cc.Node,
                crit_progress: cc.Node,
                auto_time_label: cc.Label,
                rage_time_label: cc.Label,
                fire_time_label: cc.Label,
                ice_time_label: cc.Label,
                crit_time_label: cc.Label,
                auto_btn_sprite: cc.Sprite,
                rage_btn_sprite: cc.Sprite,
                fire_btn_sprite: cc.Sprite,
                ice_btn_sprite: cc.Sprite,
                crit_btn_sprite: cc.Sprite,
                auto_btn: cc.Node,
                rage_btn: cc.Node,
                fire_btn: cc.Node,
                ice_btn: cc.Node,
                crit_btn: cc.Node,
                nomarlM: cc.Material,
                grayM: cc.Material,
                title: cc.Node,
                title_zh: cc.Node,
                title_ja: cc.Node,
                title_ru: cc.Node
            },
            start: function() {
                this.auto_title.string = cc.Mgr.Utils.getTranslation("buff-auto"),
                this.rage_title.string = cc.Mgr.Utils.getTranslation("buff-rage"),
                this.fire_title.string = cc.Mgr.Utils.getTranslation("buff-flame"),
                this.ice_titile.string = cc.Mgr.Utils.getTranslation("buff-freeze"),
                this.crit_title.string = cc.Mgr.Utils.getTranslation("buff-crit");
                for (var e = 0; e < this.getBtnLabelList.length; e++)
                    this.getBtnLabelList[e].string = cc.Mgr.Utils.getTranslation("btn-get");
                this.title.active = !1,
                this.title_zh.active = !1,
                this.title_ja.active = !1,
                this.title_ru.active = !1,
                "Japanese" === cc.Mgr.Config.language ? this.title_ja.active = !0 : "Simplified Chinese" === cc.Mgr.Config.language || "Traditional Chinese" === cc.Mgr.Config.language ? this.title_zh.active = !0 : "Russian" === cc.Mgr.Config.language ? this.title_ru.active = !0 : this.title.active = !0,
                this.limitClick = this.node.getComponent("LimitClick"),
                this.allowShow = !0
            },
            showUI: function() {
                cc.Mgr.admob.preloadRewarded(this),
                this.blurBg.opacity = 0,
                this.content.opacity = 0,
                this.content.setScale(.5),
                cc.tween(this.blurBg).to(.05, {
                    opacity: 255
                }).call().start(),
                cc.tween(this.content).to(.15, {
                    opacity: 255,
                    scale: 1
                }).start(),
                this.checkAvailabelAds = cc.Mgr.admob.checkAvailableRewardedAd(),
                this.checkAvailabelAds ? this.rage_btn.active = !0 : this.rage_btn.active = !1,
                this.checkAvailabelAds ? this.auto_btn.active = !0 : this.auto_btn.active = !1,
                this.checkAvailabelAds ? this.crit_btn.active = !0 : this.crit_btn.active = !1,
                this.checkAvailabelAds ? this.ice_btn.active = !0 : this.ice_btn.active = !1,
                this.checkAvailabelAds ? this.fire_btn.active = !0 : this.fire_btn.active = !1,
                this.refreshUI(),
                cc.Mgr.admob.showBanner("buff")
            },
            refreshUI: function() {
                this.rage_progress.width = cc.Mgr.game.rageTimer / 900 * 241,
                this.rage_time_label.string = cc.Mgr.Utils.FormatNumToTime(cc.Mgr.game.rageTimer),
                this.auto_progress.width = cc.Mgr.game.autoTimer / 900 * 241,
                this.auto_time_label.string = cc.Mgr.Utils.FormatNumToTime(cc.Mgr.game.autoTimer),
                this.fire_progress.width = cc.Mgr.game.fireTimer / 900 * 241,
                this.fire_time_label.string = cc.Mgr.Utils.FormatNumToTime(cc.Mgr.game.fireTimer),
                this.ice_progress.width = cc.Mgr.game.iceTimer / 900 * 241,
                this.ice_time_label.string = cc.Mgr.Utils.FormatNumToTime(cc.Mgr.game.iceTimer),
                this.crit_progress.width = cc.Mgr.game.critTimer / 900 * 241,
                this.crit_time_label.string = cc.Mgr.Utils.FormatNumToTime(cc.Mgr.game.critTimer)
            },
            updateAdsBtnState: function() {
                this.checkAvailabelAds = cc.Mgr.admob.checkAvailableRewardedAd(),
                this.checkAvailabelAds ? this.rage_btn.active = !0 : this.rage_btn.active = !1,
                this.checkAvailabelAds ? this.auto_btn.active = !0 : this.auto_btn.active = !1,
                this.checkAvailabelAds ? this.crit_btn.active = !0 : this.crit_btn.active = !1,
                this.checkAvailabelAds ? this.ice_btn.active = !0 : this.ice_btn.active = !1,
                this.checkAvailabelAds ? this.fire_btn.active = !0 : this.fire_btn.active = !1
            },
            onClickGetAutoByAd: function() {
                0 != this.limitClick.clickTime() && (!1 !== this.checkAvailabelAds ? cc.Mgr.admob.showRewardedVideoAd(function(e) {
                    !0 === e && cc.Mgr.UIMgr.openAssetGetUI("auto", 300, "buff")
                }, this.node, "auto", this) : cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("ad-tip-3"), "", this.node))
            },
            onClickGetAutoByGem: function() {
                var e = this;
                if (cc.Mgr.game.autoTimer >= 900)
                    cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("max-auto-time-300"), "", this.node);
                else if (cc.Mgr.game.gems >= 3) {
                    cc.Mgr.game.gems -= 3,
                    cc.Mgr.UIMgr.InGameUI.RefreshAssetData(!1, "gem");
                    var t = {};
                    t.elapsed = cc.Mgr.Utils.getDate9(!0),
                    t.costGems = 3,
                    cc.Mgr.UIMgr.openAssetGetUI("auto", 300, "buff")
                } else
                    cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("NoGems"), "gem", this.node),
                    !0 === this.allowShow && (this.allowShow = !1,
                    setTimeout(function() {
                        cc.Mgr.UIMgr.openPaymentUI(!0),
                        e.allowShow = !0
                    }, 300))
            },
            onClickGetCritByAd: function() {
                0 != this.limitClick.clickTime() && (!1 !== this.checkAvailabelAds ? cc.Mgr.admob.showRewardedVideoAd(function(e) {
                    !0 === e && cc.Mgr.UIMgr.openAssetGetUI("crit", 300, "buff")
                }, this.node, "crit", this) : cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("ad-tip-3"), "", this.node))
            },
            onClickGetCritByGem: function() {
                var e = this;
                if (cc.Mgr.game.critTimer >= 900)
                    cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("max-crit-time-150"), "", this.node);
                else if (cc.Mgr.game.gems >= 3) {
                    cc.Mgr.game.gems -= 3,
                    cc.Mgr.UIMgr.InGameUI.RefreshAssetData(!1, "gem");
                    var t = {};
                    t.elapsed = cc.Mgr.Utils.getDate9(!0),
                    t.costGems = 3,
                    cc.Mgr.UIMgr.openAssetGetUI("crit", 300, "buff")
                } else
                    cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("NoGems"), "gem", this.node),
                    !0 === this.allowShow && (this.allowShow = !1,
                    setTimeout(function() {
                        cc.Mgr.UIMgr.openPaymentUI(!0),
                        e.allowShow = !0
                    }, 300))
            },
            onClickGetIceByAd: function() {
                0 != this.limitClick.clickTime() && (!1 !== this.checkAvailabelAds ? cc.Mgr.admob.showRewardedVideoAd(function(e) {
                    !0 === e && cc.Mgr.UIMgr.openAssetGetUI("freeze", 300, "buff")
                }, this.node, "freeze", this) : cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("ad-tip-3"), "", this.node))
            },
            onClickGetIceByGem: function() {
                var e = this;
                if (cc.Mgr.game.iceTimer >= 900)
                    cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("max-freeze-time-150"), "", this.node);
                else if (cc.Mgr.game.gems >= 3) {
                    cc.Mgr.game.gems -= 3,
                    cc.Mgr.UIMgr.InGameUI.RefreshAssetData(!1, "gem");
                    var t = {};
                    t.elapsed = cc.Mgr.Utils.getDate9(!0),
                    t.costGems = 3,
                    cc.Mgr.UIMgr.openAssetGetUI("freeze", 300, "buff")
                } else
                    cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("NoGems"), "gem", this.node),
                    !0 === this.allowShow && (this.allowShow = !1,
                    setTimeout(function() {
                        cc.Mgr.UIMgr.openPaymentUI(!0),
                        e.allowShow = !0
                    }, 300))
            },
            onClickGetFireByAd: function() {
                0 != this.limitClick.clickTime() && (!1 !== this.checkAvailabelAds ? cc.Mgr.admob.showRewardedVideoAd(function(e) {
                    !0 === e && cc.Mgr.UIMgr.openAssetGetUI("flame", 300, "buff")
                }, this.node, "flame", this) : cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("ad-tip-3"), "", this.node))
            },
            onClickGetFireByGem: function() {
                var e = this;
                if (cc.Mgr.game.fireTimer >= 900)
                    cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("max-flame-time-150"), "", this.node);
                else if (cc.Mgr.game.gems >= 3) {
                    cc.Mgr.game.gems -= 3,
                    cc.Mgr.UIMgr.InGameUI.RefreshAssetData(!1, "gem");
                    var t = {};
                    t.elapsed = cc.Mgr.Utils.getDate9(!0),
                    t.costGems = 3,
                    cc.Mgr.UIMgr.openAssetGetUI("flame", 300, "buff")
                } else
                    cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("NoGems"), "gem", this.node),
                    !0 === this.allowShow && (this.allowShow = !1,
                    setTimeout(function() {
                        cc.Mgr.UIMgr.openPaymentUI(!0),
                        e.allowShow = !0
                    }, 300))
            },
            onClickGetRageByAd: function() {
                0 != this.limitClick.clickTime() && (!1 !== this.checkAvailabelAds ? cc.Mgr.admob.showRewardedVideoAd(function(e) {
                    !0 === e && cc.Mgr.UIMgr.openAssetGetUI("rage", 300, "buff")
                }, this.node, "rage", this) : cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("ad-tip-3"), "", this.node))
            },
            onClickGetRageByGem: function() {
                var e = this;
                if (cc.Mgr.game.rageTimer >= 900)
                    cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("max-angry-time-150"), "", this.node);
                else if (cc.Mgr.game.gems >= 3) {
                    cc.Mgr.game.gems -= 3,
                    cc.Mgr.UIMgr.InGameUI.RefreshAssetData(!1, "gem");
                    var t = {};
                    t.elapsed = cc.Mgr.Utils.getDate9(!0),
                    t.costGems = 3,
                    cc.Mgr.UIMgr.openAssetGetUI("rage", 300, "buff")
                } else
                    cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("NoGems"), "gem", this.node),
                    !0 === this.allowShow && (this.allowShow = !1,
                    setTimeout(function() {
                        cc.Mgr.UIMgr.openPaymentUI(!0),
                        e.allowShow = !0
                    }, 300))
            },
            closeUI: function() {
                cc.Mgr.AudioMgr.playSFX("click"),
                cc.Mgr.admob.hideBanner("buff");
                var e = this;
                cc.tween(this.blurBg).to(.15, {
                    opacity: 0
                }).start(),
                cc.tween(this.content).to(.15, {
                    opacity: 0,
                    scale: .5
                }).call(function() {
                    e.node.active = !1
                }).start(),
                cc.Mgr.UIMgr.reduceShowUICount("buff")
            }
        }),
        cc._RF.pop()
    }
    , {}],
    BulletPool: [function(e, t) {
        "use strict";
        cc._RF.push(t, "195ffaZSQJGy4bSrv3SxKxE", "BulletPool");
        var i = cc.Class({
            extends: cc.Component,
            properties: {
                obPrefab: cc.Prefab
            },
            InitPool: function() {
                var e = this;
                this.pool = new cc.NodePool,
                cc.loader.loadRes("prefab/bullet/bullet", function(t, i) {
                    if (t)
                        cc.error(t.message || t);
                    else {
                        e.obPrefab = i;
                        for (var a = 0; a < 16; a++) {
                            var n = cc.instantiate(i);
                            e.pool.put(n)
                        }
                    }
                })
            },
            clearList: function() {
                this.pool.clear()
            },
            getObFromPool: function() {
                var e = null;
                return this.pool.size() > 0 ? (e = this.pool.get()).active = !1 : e = cc.instantiate(this.obPrefab),
                e
            },
            ObBackToPool: function(e) {
                this.pool.put(e)
            }
        });
        t.exports = i,
        cc._RF.pop()
    }
    , {}],
    BulletType: [function(e, t) {
        "use strict";
        cc._RF.push(t, "2f246EB0nNI3Iyqom/cWfUx", "BulletType");
        var i = cc.Enum({
            Straight: 1,
            Curve: 2
        });
        t.exports = i,
        cc._RF.pop()
    }
    , {}],
    BuyButtonData: [function(e, t) {
        "use strict";
        cc._RF.push(t, "919f6mNzhlAHoAXfbh8SJ2u", "BuyButtonData");
        var i = cc.Class({
            name: "BuyButtonData",
            properties: {
                Level: 1,
                button: 1
            }
        });
        t.exports = i,
        cc._RF.pop()
    }
    , {}],
    BuyButtonMapMgr: [function(e, t) {
        "use strict";
        cc._RF.push(t, "c2dfeMauDtCppXUZNX11/4d", "BuyButtonMapMgr");
        var i = e("DB_buyButton")
          , a = e("BuyButtonData")
          , n = cc.Class({
            extends: cc.Component,
            properties: {
                dataList: {
                    default: [],
                    type: [a]
                }
            },
            DecodeJson: function() {
                var e = JSON.parse(i.data);
                for (var t in e) {
                    var n = new a;
                    n.Level = e[t][0],
                    n.button = e[t][1],
                    this.dataList[t] = n
                }
            },
            getDataByKey: function(e) {
                return this.dataList[e]
            }
        });
        t.exports = n,
        cc._RF.pop()
    }
    , {
        BuyButtonData: "BuyButtonData",
        DB_buyButton: "DB_buyButton"
    }],
    Cloud: [function(e, t) {
        "use strict";
        cc._RF.push(t, "c2a12JQ8WJDboh2NFwsG6C5", "Cloud"),
        cc.Class({
            extends: cc.Component,
            properties: {
                speed: 0
            },
            start: function() {
                this.node.x = 550,
                this.count = 0,
                this.currentTimer = Date.now(),
                this.startTimer = 1e4 * Math.random()
            },
            update: function() {
                this.count < 2 ? this.count++ : Date.now() - this.currentTimer < this.startTimer || (this.count = 0,
                this.node.x -= this.speed,
                this.node.x <= -550 && (this.node.x = 550))
            }
        }),
        cc._RF.pop()
    }
    , {}],
    CoinBundle: [function(e, t) {
        "use strict";
        cc._RF.push(t, "954afzJ5DdLGYRAjLTq2ut2", "CoinBundle"),
        cc.Class({
            extends: cc.Component,
            properties: {
                content: cc.Node,
                blurBg: cc.Node,
                btnLabel: cc.Label,
                coinLabel: cc.Label,
                priceSaleLabel: cc.Label,
                priceLabel: cc.Label,
                singlePriceLabel: cc.Label,
                saleNode: cc.Node,
                priceNode: cc.Node,
                desLabel: cc.Label,
                saleSprite: cc.Node,
                saleSprite2: cc.Node,
                timeNode: cc.Node,
                timeLabel: cc.Label,
                timeTip: cc.Label,
                title: cc.Node,
                title_zh: cc.Node,
                title_ja: cc.Node,
                title_ru: cc.Node
            },
            onLoad: function() {
                this.limitClick = this.node.getComponent("LimitClick")
            },
            start: function() {
                this.btnLabel.string = cc.Mgr.Utils.getTranslation("btn-get"),
                this.timeTip.string = cc.Mgr.Utils.getTranslation("bundle-time-tip"),
                this.title.active = !1,
                this.title_zh.active = !1,
                this.title_ja.active = !1,
                this.title_ru.active = !1,
                "Japanese" === cc.Mgr.Config.language ? this.title_ja.active = !0 : "Simplified Chinese" === cc.Mgr.Config.language || "Traditional Chinese" === cc.Mgr.Config.language ? this.title_zh.active = !0 : "Russian" === cc.Mgr.Config.language ? this.title_ru.active = !0 : this.title.active = !0
            },
            showUI: function(e, t) {
                this.coinLabel.string = cc.Mgr.Utils.getNumStr2(e),
                cc.Mgr.game.localPriceList && cc.Mgr.game.localPriceList.length > 0 ? (this.priceLabel.string = cc.Mgr.game.localPriceList[7],
                this.priceSaleLabel.string = cc.Mgr.game.localPriceList[11],
                this.singlePriceLabel.string = cc.Mgr.game.localPriceList[7]) : (this.priceLabel.string = "$" + cc.Mgr.payment.priceList[7],
                this.priceSaleLabel.string = "$" + cc.Mgr.payment.priceList[11],
                this.singlePriceLabel.string = "$" + cc.Mgr.payment.priceList[7]),
                this.saleSprite.width = this.saleSprite2.width = 16 * this.priceLabel.string.length,
                this.blurBg.opacity = 0,
                this.content.opacity = 0,
                this.content.setScale(.5),
                cc.tween(this.blurBg).to(.05, {
                    opacity: 255
                }).call().start(),
                cc.tween(this.content).to(.15, {
                    opacity: 255,
                    scale: 1
                }).start(),
                this.fromSale = t,
                (0 === cc.Mgr.game.coinBundleStartTimer || 0 != cc.Mgr.game.coinBundleStartTimer && Date.now() - cc.Mgr.game.coinBundleStartTimer >= 864e5) && t && (cc.Mgr.game.coinBundleStartTimer = Date.now()),
                this.getCoin = e,
                this.refreshUI(),
                cc.Mgr.admob.showBanner("coinBunlde"),
                this.haveBought = !1,
                this.startTimeCount()
            },
            refreshUI: function() {
                this.isSale = 0 !== cc.Mgr.game.coinBundleStartTimer && Date.now() - cc.Mgr.game.coinBundleStartTimer < 864e5,
                this.saleNode.active = this.isSale,
                this.priceNode.active = !this.isSale,
                this.timeNode.active = this.isSale,
                this.isSale ? this.desLabel.string = cc.Mgr.Utils.getTranslation("coinBundle-tip2").format(cc.Mgr.Utils.getNumStr2(this.getCoin)) : this.desLabel.string = cc.Mgr.Utils.getTranslation("coinBundle-tip").format(cc.Mgr.Utils.getNumStr2(this.getCoin))
            },
            startTimeCount: function() {
                if (this.unschedule(this.countTime),
                !1 !== this.isSale && (this.seconds = Math.floor((cc.Mgr.game.coinBundleStartTimer + 864e5 - Date.now()) / 1e3),
                this.seconds > 0)) {
                    this.timeNode.active = !0;
                    var e = cc.Mgr.Utils.FormatNumToTime(this.seconds);
                    this.timeLabel.string = e,
                    this.schedule(this.countTime, 1)
                }
            },
            countTime: function() {
                if (this.seconds -= 1,
                this.seconds < 0)
                    return this.unschedule(this.countTime),
                    void this.refreshUI();
                var e = cc.Mgr.Utils.FormatNumToTime(this.seconds);
                this.timeLabel.string = e
            },
            onClickClose: function() {
                var e = this;
                cc.Mgr.AudioMgr.playSFX("click"),
                cc.Mgr.admob.hideBanner("coinBunlde");
                var t = this;
                cc.tween(this.blurBg).to(.15, {
                    opacity: 0
                }).start(),
                cc.tween(this.content).to(.15, {
                    opacity: 0,
                    scale: .5
                }).call(function() {
                    t.node.active = !1,
                    0 == e.haveBought && e.fromSale && cc.Mgr.UIMgr.openPaymentUI(!0),
                    cc.Mgr.UIMgr.starterBundleNode && cc.Mgr.UIMgr.starterBundleNode.active && cc.Mgr.UIMgr.starterBundleNode.getComponent("StarterBundle").refreshUI()
                }).start(),
                cc.Mgr.UIMgr.reduceShowUICount("coinBundle")
            },
            onClickGet: function() {
                var e = this;
                if (0 != this.limitClick.clickTime()) {
                    var t = this.isSale ? 11 : 7;
                    cc.Mgr.payment.purchaseByIndex(t, function() {
                        cc.Mgr.UIMgr.openAssetGetUI("money", e.getCoin, "payment"),
                        e.haveBought = !0,
                        cc.Mgr.game.coinBundleStartTimer = 0,
                        cc.Mgr.game.coinBundleFlag = !1,
                        e.refreshUI(),
                        e.onClickClose()
                    }, cc.Mgr.UIMgr.tipRoot)
                }
            }
        }),
        cc._RF.pop()
    }
    , {}],
    Compensation: [function(e, t) {
        "use strict";
        cc._RF.push(t, "ad5d9Yr/V9C6Yy3SAsiq1EJ", "Compensation"),
        cc.Class({
            extends: cc.Component,
            properties: {
                content: cc.Node,
                blurBg: cc.Node,
                desLabel: cc.Label,
                desLabel2: cc.Label,
                desLabel3: cc.Label,
                btnLabel: cc.Label,
                numLabel: cc.Label,
                gemIcon_1: cc.Node,
                coinIcon_1: cc.Node,
                gemIcon_2: cc.Node,
                coinIcon_2: cc.Node,
                restoreTipLabel: cc.Label
            },
            onLoad: function() {
                this.itemNameMap = {},
                this.itemNameMap.addCoin = "restore-coin",
                this.itemNameMap.addGem = "restore-gem",
                this.itemNameMap.isVIP = "restore-vip",
                this.itemNameMap.vipExpire = "restore-vipExpire",
                this.itemNameMap.removeAd = "restore-removeAd",
                this.itemNameMap.unlockSpecialGrid = "restore-unlockSpecialGrid",
                this.itemNameMap.offlineDouble = "restore-offlineDouble"
            },
            start: function() {
                this.limitClick = this.node.getComponent("LimitClick"),
                this.btnLabel.string = cc.Mgr.Utils.getTranslation("btn-claim"),
                this.desLabel3.string = cc.Mgr.Utils.getTranslation("restore-tip"),
                this.restoreTipLabel.string = cc.Mgr.Utils.getTranslation("restore-tip-2")
            },
            showUI: function(e) {
                if (this.desLabel.node.active = !1,
                this.numLabel.node.active = !1,
                this.restoreTipLabel.node.active = !1,
                this.data = e,
                this.num = 0,
                null != e ? ("gem" == e.content.type ? (this.gemIcon_1.active = !0,
                this.gemIcon_2.active = !0,
                this.coinIcon_1.active = !1,
                this.coinIcon_2.active = !1) : (this.gemIcon_1.active = !1,
                this.gemIcon_2.active = !1,
                this.coinIcon_1.active = !0,
                this.coinIcon_2.active = !0),
                this.type = e.content.type,
                this.num = parseInt(e.content.amount),
                this.numLabel.string = "x" + cc.Mgr.Utils.getNumStr(e.content.amount),
                this.id = e.id,
                "" != e.content.description ? this.desLabel.string = e.content.description : this.desLabel.string = cc.Mgr.Utils.getTranslation("compensation-des"),
                this.desLabel.node.active = !0,
                this.numLabel.node.active = !0) : (this.gemIcon_1.active = !1,
                this.gemIcon_2.active = !1,
                this.coinIcon_1.active = !1,
                this.coinIcon_2.active = !1,
                this.restoreTipLabel.node.active = !0),
                this.blurBg.opacity = 0,
                this.content.opacity = 0,
                this.content.setScale(.5),
                cc.tween(this.blurBg).to(.05, {
                    opacity: 255
                }).call().start(),
                cc.tween(this.content).to(.15, {
                    opacity: 255,
                    scale: 1
                }).start(),
                this.desLabel3.node.active = !1,
                this.desLabel2.string = "",
                null != cc.Mgr.Utils.preUpdateData) {
                    for (var t in this.result = {},
                    cc.Mgr.Utils.preUpdateData) {
                        var i = cc.Mgr.Utils.preUpdateData[t];
                        for (var a in i)
                            "id" !== a && (!this.result[a] || "addCoin" !== a && "addGem" !== a ? this.result[a] = i[a] : this.result[a] += i[a])
                    }
                    for (var n in this.result)
                        "" === this.desLabel2.string ? this.desLabel2.string += this.getContent(n, this.result[n]) : this.desLabel2.string += "\n" + this.getContent(n, this.result[n]);
                    this.desLabel3.node.active = !0
                }
            },
            getContent: function(e, t) {
                return "addCoin" === e || "addGem" === e ? cc.Mgr.Utils.getTranslation(this.itemNameMap[e]) + "  x" + cc.Mgr.Utils.getNumStr(t) : !0 === t ? cc.Mgr.Utils.getTranslation(this.itemNameMap[e]) : !1 !== t ? (t = Date.now() + 864e5 * t,
                cc.Mgr.Utils.getTranslation(this.itemNameMap[e]) + "  " + new Date(t).toUTCString()) : void 0
            },
            claim: function() {
                var e = this;
                0 != this.limitClick.clickTime() && (cc.Mgr.AudioMgr.playSFX("click"),
                cc.tween(this.blurBg).to(.15, {
                    opacity: 0
                }).start(),
                cc.tween(this.content).to(.15, {
                    opacity: 0,
                    scale: .5
                }).call(function() {
                    var t = 0;
                    null != cc.Mgr.Utils.preUpdateData && cc.Mgr.Utils.preUpdateData.addGem > 0 && (t += cc.Mgr.Utils.preUpdateData.addGem),
                    null != e.data ? ("gem" == e.type ? (t += e.num,
                    cc.Mgr.UIMgr.openAssetGetUI("gem", t, "compensation")) : (cc.Mgr.game.money += e.num,
                    cc.Mgr.game.coin_gained_total += e.num,
                    cc.Mgr.UIMgr.InGameUI.RefreshAssetData(!1, "money"),
                    cc.Mgr.UIMgr.showJibEffect()),
                    cc.Mgr.game.compensation[e.id] = !0) : t > 0 && cc.Mgr.UIMgr.openAssetGetUI("gem", t, "compensation"),
                    setTimeout(function() {
                        cc.Mgr.GameCenterCtrl.caculateOfflineAsset()
                    }, 2e3),
                    e.node.active = !1;
                    var i = cc.Mgr.Utils.updateUsersData();
                    null != i && (i.add_gem = t,
                    i.elapsed = cc.Mgr.Utils.getDate9(!0),
                    cc.Mgr.TEA.collectEvent("compensation_claim", i),
                    cc.Mgr.analytics.logEvent("compensation_claim", JSON.stringify(i)))
                }).start(),
                cc.Mgr.UIMgr.reduceShowUICount("compensation"))
            }
        }),
        cc._RF.pop()
    }
    , {}],
    Config: [function(e, t) {
        "use strict";
        cc._RF.push(t, "1c7b0w9FLxIVZ1Pxh3tlyxY", "Config"),
        cc.Class({
            extends: cc.Component,
            statics: {
                isFacebook: !0,
                isDebug: !1,
                isChina: !0,
                isMopub: !1,
                isGameSnacks: !0,
                platform: "game_snacks",
                version: "2.1.0",
                debug_version: "_1",
                zOffsetY: 142,
                zBossLine: 100,
                allPlantCount: 75,
                angryCost: 50,
                lastWaveKey: "60_5",
                lastGameLevel: 60,
                language: "English",
                lastWaveWaitTime: 8,
                normalWaveWaitTime: 3,
                CheckPotGrownInterval: .3,
                missionDataList: [{
                    id: 0,
                    checkType: 0,
                    misType: 0,
                    checkNum: 1,
                    checklv: 0,
                    progress: 0,
                    claimed: 0,
                    rewardType: "coin"
                }, {
                    id: 1,
                    checkType: 0,
                    misType: 1,
                    checkNum: 20,
                    checklv: 0,
                    progress: 0,
                    claimed: 0,
                    rewardType: "coin"
                }, {
                    id: 2,
                    checkType: 0,
                    misType: 2,
                    checkNum: 10,
                    checklv: 0,
                    progress: 0,
                    claimed: 0,
                    rewardType: "coin"
                }, {
                    id: 3,
                    checkType: 0,
                    misType: 3,
                    checkNum: 3,
                    checklv: 0,
                    progress: 0,
                    claimed: 0,
                    rewardType: "gem"
                }, {
                    id: 4,
                    checkType: 0,
                    misType: 4,
                    checkNum: 10,
                    checklv: 0,
                    progress: 0,
                    claimed: 0,
                    rewardType: "gem"
                }],
                missionCheckList: [[1], [20], [10], [3, 6], [300, 600, 1200]],
                missionRewardList: [[0], [0], [0], [50, 50], [20, 50, 50]],
                achieveDataList: [{
                    id: 1,
                    checkType: 1,
                    level: 4,
                    checklv: 0,
                    progress: 0,
                    finished: 0
                }, {
                    id: 2,
                    checkType: 1,
                    level: 7,
                    checklv: 0,
                    progress: 0,
                    finished: 0
                }, {
                    id: 3,
                    checkType: 1,
                    level: 11,
                    checklv: 0,
                    progress: 0,
                    finished: 0
                }, {
                    id: 4,
                    checkType: 1,
                    level: 15,
                    checklv: 0,
                    progress: 0,
                    finished: 0
                }, {
                    id: 5,
                    checkType: 1,
                    level: 19,
                    checklv: 0,
                    progress: 0,
                    finished: 0
                }, {
                    id: 6,
                    checkType: 1,
                    level: 23,
                    checklv: 0,
                    progress: 0,
                    finished: 0
                }, {
                    id: 7,
                    checkType: 1,
                    level: 27,
                    checklv: 0,
                    progress: 0,
                    finished: 0
                }, {
                    id: 8,
                    checkType: 1,
                    level: 31,
                    checklv: 0,
                    progress: 0,
                    finished: 0
                }, {
                    id: 9,
                    checkType: 1,
                    level: 35,
                    checklv: 0,
                    progress: 0,
                    finished: 0
                }, {
                    id: 10,
                    checkType: 1,
                    level: 39,
                    checklv: 0,
                    progress: 0,
                    finished: 0
                }, {
                    id: 11,
                    checkType: 1,
                    level: 43,
                    checklv: 0,
                    progress: 0,
                    finished: 0
                }, {
                    id: 12,
                    checkType: 1,
                    level: 47,
                    checklv: 0,
                    progress: 0,
                    finished: 0
                }, {
                    id: 13,
                    checkType: 1,
                    level: 51,
                    checklv: 0,
                    progress: 0,
                    finished: 0
                }, {
                    id: 14,
                    checkType: 1,
                    level: 55,
                    checklv: 0,
                    progress: 0,
                    finished: 0
                }, {
                    id: 15,
                    checkType: 1,
                    level: 59,
                    checklv: 0,
                    progress: 0,
                    finished: 0
                }, {
                    id: 16,
                    checkType: 1,
                    level: 63,
                    checklv: 0,
                    progress: 0,
                    finished: 0
                }, {
                    id: 17,
                    checkType: 1,
                    level: 67,
                    checklv: 0,
                    progress: 0,
                    finished: 0
                }],
                signDataList: [{
                    id: 1,
                    rewardType: 1,
                    rewardNum: 5
                }, {
                    id: 2,
                    rewardType: 1,
                    rewardNum: 5
                }, {
                    id: 3,
                    rewardType: 1,
                    rewardNum: 5
                }, {
                    id: 4,
                    rewardType: 1,
                    rewardNum: 10
                }, {
                    id: 5,
                    rewardType: 1,
                    rewardNum: 10
                }, {
                    id: 6,
                    rewardType: 1,
                    rewardNum: 10
                }, {
                    id: 7,
                    rewardType: 1,
                    rewardNum: 30
                }],
                signDataListSub: [{
                    id: 1,
                    rewardType: 1,
                    rewardNum: 5
                }, {
                    id: 2,
                    rewardType: 1,
                    rewardNum: 5
                }, {
                    id: 3,
                    rewardType: 1,
                    rewardNum: 5
                }, {
                    id: 4,
                    rewardType: 1,
                    rewardNum: 10
                }, {
                    id: 5,
                    rewardType: 1,
                    rewardNum: 10
                }, {
                    id: 6,
                    rewardType: 1,
                    rewardNum: 10
                }, {
                    id: 7,
                    rewardType: 1,
                    rewardNum: 30
                }],
                cgZombieData: {
                    totalHp: 200,
                    spd: 1.5,
                    spdRatio: 3
                },
                init: function() {
                    this.winSize = cc.view.getVisibleSize(),
                    this.initMoney = BigInt(2e3),
                    this.onlineCoinRatio = BigInt(2)
                }
            }
        }),
        cc._RF.pop()
    }
    , {}],
    DB_achievementAwards: [function(e, t) {
        "use strict";
        cc._RF.push(t, "95773Y8lMpGOq1a/EQmRovz", "DB_achievementAwards");
        var i = cc.Class({
            name: "DB_achievementAwards",
            statics: {
                dataLen: 15,
                dataHead: '["id", "Level", "Gain_5", "Gain_20", "Gain_50", "Gain_100", "Gain_200"]',
                data: '{"1":[1,4,1,0,0,0,0],"2":[2,7,2,3,5,8,10],"3":[3,11,2,3,5,8,10],"4":[4,15,3,5,8,15,15],"5":[5,19,3,5,8,15,20],"6":[6,23,5,8,10,15,20],"7":[7,27,5,8,10,15,20],"8":[8,31,5,8,15,20,20],"9":[9,35,5,8,15,20,20],"10":[10,39,10,15,20,20,20],"11":[11,43,10,15,20,20,20],"12":[12,47,15,20,20,20,20],"13":[13,51,15,20,20,20,0],"14":[14,55,20,20,20,0,0],"15":[15,59,20,20,0,0,0],"16":[16,63,25,20,0,0,0],"17":[17,67,25,20,0,0,0]}'
            }
        });
        t.exports = i,
        cc._RF.pop()
    }
    , {}],
    DB_airdrop: [function(e, t) {
        "use strict";
        cc._RF.push(t, "11335GtX3lDrJIFsPjkNvez", "DB_airdrop");
        var i = cc.Class({
            name: "DB_airdrop",
            statics: {
                dataLen: 70,
                dataHead: '["Level", "Plant1", "Plant2"]',
                data: '{"1":[1,1,0],"2":[2,1,0],"3":[3,1,0],"4":[4,1,2],"5":[5,1,2],"6":[6,2,0],"7":[7,2,0],"8":[8,3,0],"9":[9,3,0],"10":[10,3,4],"11":[11,4,0],"12":[12,4,0],"13":[13,4,5],"14":[14,5,0],"15":[15,5,6],"16":[16,6,0],"17":[17,7,0],"18":[18,8,0],"19":[19,9,0],"20":[20,10,0],"21":[21,11,0],"22":[22,12,0],"23":[23,13,0],"24":[24,14,0],"25":[25,15,0],"26":[26,16,0],"27":[27,17,0],"28":[28,18,0],"29":[29,19,0],"30":[30,20,0],"31":[31,21,0],"32":[32,22,0],"33":[33,23,0],"34":[34,24,0],"35":[35,25,0],"36":[36,26,0],"37":[37,27,0],"38":[38,28,0],"39":[39,29,0],"40":[40,30,0],"41":[41,31,0],"42":[42,32,0],"43":[43,33,0],"44":[44,34,0],"45":[45,35,0],"46":[46,36,0],"47":[47,37,0],"48":[48,38,0],"49":[49,39,0],"50":[50,40,0],"51":[51,41,0],"52":[52,42,0],"53":[53,43,0],"54":[54,44,0],"55":[55,45,0],"56":[56,46,0],"57":[57,47,0],"58":[58,48,0],"59":[59,49,0],"60":[60,50,0],"61":[61,51,0],"62":[62,52,0],"63":[63,53,0],"64":[64,54,0],"65":[65,55,0],"66":[66,56,0],"67":[67,57,0],"68":[68,58,0],"69":[69,59,0],"70":[70,60,0], "71":[71,61,0], "72":[72,62,0], "73":[73,63,0], "74":[74,64,0], "75":[75,65,0]}'
            }
        });
        t.exports = i,
        cc._RF.pop()
    }
    , {}],
    DB_buyButton: [function(e, t) {
        "use strict";
        cc._RF.push(t, "ae0d2g1t7BL+4n5tljRLWgK", "DB_buyButton");
        var i = cc.Class({
            name: "DB_buyButton",
            statics: {
                dataLen: 6,
                dataHead: '["Level", "button"]',
                data: '{"1":[1,1],"2":[2,1],"3":[3,1],"4":[4,1],"5":[5,2],"6":[6,2],"7":[7,3],"8":[8,3],"9":[9,4],"10":[10,4],"11":[11,5],"12":[12,5],"13":[13,6],"14":[14,7],"15":[15,8],"16":[16,9],"17":[17,10],"18":[18,11],"19":[19,12],"20":[20,13],"21":[21,14],"22":[22,15],"23":[23,16],"24":[24,17],"25":[25,18],"26":[26,19],"27":[27,20],"28":[28,21],"29":[29,22],"30":[30,23],"31":[31,24],"32":[32,25],"33":[33,26],"34":[34,27],"35":[35,28],"36":[36,29],"37":[37,30],"38":[38,31],"39":[39,32],"40":[40,33],"41":[41,34],"42":[42,35],"43":[43,36],"44":[44,37],"45":[45,38],"46":[46,39],"47":[47,40],"48":[48,41],"49":[49,42],"50":[50,43],"51":[51,44],"52":[52,45],"53":[53,46],"54":[54,47],"55":[55,48],"56":[56,49],"57":[57,50],"58":[58,51],"59":[59,52],"60":[60,53],"61":[61,54],"62":[62,55],"63":[63,56],"64":[64,57],"65":[65,58],"66":[66,59],"67":[67,60],"68":[68,61],"69":[69,62],"70":[70,63]}'
            }
        });
        t.exports = i,
        cc._RF.pop()
    }
    , {}],
    DB_droneRewards: [function(e, t) {
        "use strict";
        cc._RF.push(t, "73eb5/lxRVKw7ls4qlUMNDW", "DB_droneRewards");
        var i = cc.Class({
            name: "DB_droneRewards",
            statics: {
                dataLen: 6,
                dataHead: '["Level", "Drone"]',
                data: '{"1":[1,1],"2":[2,1],"3":[3,1],"4":[4,2],"5":[5,3],"6":[6,3],"7":[7,3],"8":[8,4],"9":[9,4],"10":[10,4],"11":[11,5],"12":[12,5],"13":[13,6],"14":[14,6],"15":[15,7],"16":[16,7],"17":[17,8],"18":[18,9],"19":[19,10],"20":[20,11],"21":[21,12],"22":[22,13],"23":[23,14],"24":[24,15],"25":[25,16],"26":[26,16],"27":[27,17],"28":[28,18],"29":[29,19],"30":[30,20],"31":[31,21],"32":[32,22],"33":[33,23],"34":[34,24],"35":[35,25],"36":[36,26],"37":[37,27],"38":[38,28],"39":[39,29],"40":[40,30],"41":[41,31],"42":[42,32],"43":[43,33],"44":[44,34],"45":[45,35],"46":[46,36],"47":[47,37],"48":[48,38],"49":[49,39],"50":[50,40],"51":[51,41],"52":[52,42],"53":[53,43],"54":[54,44],"55":[55,45],"56":[56,46],"57":[57,47],"58":[58,48],"59":[59,49],"60":[60,50],"61":[61,51],"62":[62,52],"63":[63,53],"64":[64,54],"65":[65,55],"66":[66,56],"67":[67,57],"68":[68,58],"69":[69,59],"70":[70,60], "71":[71,61], "72":[72,62], "73":[73,63], "74":[74,64], "75":[75,65]}'
            }
        });
        t.exports = i,
        cc._RF.pop()
    }
    , {}],
    DB_i18n: [function(e, t) {
        "use strict";
        cc._RF.push(t, "9961dviWXVDPLn5xuM6Qx5W", "DB_i18n");
        var i = cc.Class({
            name: "DB_i18n",
            statics: {
                data: [{
                    Key: "btn-free",
                    English: "FREE ",
                    "Simplified Chinese": "\u514d\u8d39",
                    "Traditional Chinese": "\u514d\u8d39",
                    Japanese: "\u7121\u6599",
                    Spanish: "GRATIS",
                    Russian: "FREE"
                }, {
                    Key: "btn-claim",
                    English: "CLAIM",
                    "Simplified Chinese": "\u9886\u53d6",
                    "Traditional Chinese": "\u9886\u53d6",
                    Japanese: "\u53d7\u3051\u53d6\u308b",
                    Spanish: "RECLAMACI\xd3N",
                    Russian: "\u0412\u0417\u042f\u0422\u042c"
                }, {
                    Key: "btn-claimed",
                    English: "CLAIMED",
                    "Simplified Chinese": "\u5df2\u9886\u53d6",
                    "Traditional Chinese": "\u5df2\u9886\u53d6",
                    Japanese: "\u53d7\u53d6\u6e08\u307f",
                    Spanish: "RECLAMADO",
                    Russian: "\u0412\u0417\u042f\u0422\u041e"
                }, {
                    Key: "plant-level",
                    English: "GUARDIAN",
                    "Simplified Chinese": "\u5b88\u62a4\u8005",
                    "Traditional Chinese": "\u5b88\u62a4\u8005",
                    Japanese: "\u30ac\u30fc\u30c7\u30a3\u30a2\u30f3",
                    Spanish: "GUARDI\xc1N",
                    Russian: "\u0417\u0410\u0429\u0418\u0422\u041d\u0418\u041a"
                }, {
                    Key: "newItem-title",
                    English: "CONGRATS!",
                    "Simplified Chinese": "\u606d\u559c\u83b7\u5f97\uff01",
                    "Traditional Chinese": "\u606d\u559c\u83b7\u5f97\uff01",
                    Japanese: "\u304a\u3081\u3067\u3068\u3046\uff01",
                    Spanish: "\xa1Felicidades!",
                    Russian: "\u041f\u041e\u0417\u0414\u0420\u0410\u0412\u041b\u042f\u0415\u041c!"
                }, {
                    Key: "NoCoins",
                    English: "Not enough coins!",
                    "Simplified Chinese": "\u91d1\u5e01\u4e0d\u8db3",
                    "Traditional Chinese": "\u91d1\u5e01\u4e0d\u8db3",
                    Japanese: "\u30b3\u30a4\u30f3\u304c\u8db3\u308a\u306a\u3044",
                    Spanish: "\xa1No hay suficientes monedas!",
                    Russian: "\u041d\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442 \u043c\u043e\u043d\u0435\u0442!"
                }, {
                    Key: "NoGems",
                    English: "Not enough gems!",
                    "Simplified Chinese": "\u5b9d\u77f3\u4e0d\u8db3",
                    "Traditional Chinese": "\u5b9d\u77f3\u4e0d\u8db3",
                    Japanese: "\u5b9d\u77f3\u304c\u8db3\u308a\u306a\u3044",
                    Spanish: "No hay suficientes piedras preciosas!",
                    Russian: "\u041d\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442 \u0436\u0435\u043c\u0447\u0443\u0436\u0438\u043d!"
                }, {
                    Key: "NoSpaceForPlant",
                    English: "No more space",
                    "Simplified Chinese": "\u4f4d\u7f6e\u4e0d\u591f\u5566",
                    "Traditional Chinese": "\u4f4d\u7f6e\u4e0d\u591f\u5566",
                    Japanese: "\u7a7a\u304d\u5730\u304c\u306a\u3044",
                    Spanish: "No m\xe1s espacio",
                    Russian: "\u0411\u043e\u043b\u044c\u0448\u0435 \u043d\u0435\u0442 \u043c\u0435\u0441\u0442\u0430"
                }, {
                    Key: "TrashTip",
                    English: "Drag Guardians here to recycle",
                    "Simplified Chinese": "\u62d6\u52a8\u690d\u7269\u5230\u8fd9\u91cc\u53ef\u4ee5\u5356\u51fa",
                    "Traditional Chinese": "\u62d6\u52a8\u5230\u8fd9\u91cc\u53ef\u4ee5\u5356\u51fa\u690d\u7269",
                    Japanese: "\u3053\u3053\u3067\u30ac\u30fc\u30c7\u30a3\u30a2\u30f3\u3092\u30ea\u30b5\u30a4\u30af\u30eb\u3059\u308b",
                    Spanish: "Guardianes Arrastre aqu\xed a reciclar",
                    Russian: "\u0422\u0430\u0449\u0438 \u0417\u0430\u0449\u0438\u0442\u043d\u0438\u043a\u043e\u0432 \u0441\u044e\u0434\u0430, \u0447\u0442\u043e\u0431\u044b c\u0434\u0430\u0442\u044c"
                }, {
                    Key: "skillDescs-slowdown",
                    English: "Slow down the enemy for 1 second with {0} probability",
                    "Simplified Chinese": "{0}\u7684\u51e0\u7387\u51cf\u901f\u76ee\u68071\u79d2",
                    "Traditional Chinese": "{0}\u7684\u673a\u7387\u51cf\u901f\u602a\u72691\u79d2",
                    Japanese: "{0}\u306e\u78ba\u7387\u3067\u6575\u3092\uff11\u79d2\u9593\u9045\u3089\u305b\u308b",
                    Spanish: "Ralentizar el enemigo durante 1 segundo con {0} de probabilidad",
                    Russian: "\u0417\u0430\u043c\u0435\u0434\u043b\u0438\u0442\u044c \u0432\u0440\u0430\u0433\u0430 \u043d\u0430 1 \u0441\u0435\u043a\u0443\u043d\u0434\u0443 \u0441 \u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u044c\u044e {0}"
                }, {
                    Key: "skillDescs-crit",
                    English: "Double damage with {0} probability",
                    "Simplified Chinese": "{0}\u7684\u51e0\u7387\u5bf9\u76ee\u6807\u9020\u6210\u53cc\u500d\u4f24\u5bb3",
                    "Traditional Chinese": "{0}\u7684\u673a\u7387\u5bf9\u602a\u7269\u9020\u6210\u53cc\u500d\u4f24\u5bb3",
                    Japanese: "{0}\u306e\u78ba\u7387\u3067\u30c0\u30e1\u30fc\u30b8\u3092\uff12\u500d\u306b\u3059\u308b",
                    Spanish: "da\xf1os doble con {0} de probabilidad",
                    Russian: "\u0414\u0432\u043e\u0439\u043d\u043e\u0439 \u0443\u0440\u043e\u043d \u0441 \u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u044c\u044e {0}"
                }, {
                    Key: "skillDescs-freeze",
                    English: "Freeze the enemy for 1 second with {0} probability",
                    "Simplified Chinese": "{0}\u7684\u51e0\u7387\u51bb\u7ed3\u76ee\u68071\u79d2",
                    "Traditional Chinese": "{0}\u7684\u673a\u7387\u51bb\u7ed3\u602a\u72691\u79d2",
                    Japanese: "{0}\u306e\u78ba\u7387\u3067\u6575\u3092\uff11\u79d2\u9593\u6b62\u3081\u308b",
                    Spanish: "Congelar el enemigo durante 1 segundo con {0} de probabilidad",
                    Russian: "\u0417\u0430\u043c\u043e\u0440\u043e\u0437\u0438\u0442\u044c \u0432\u0440\u0430\u0433\u0430 \u043d\u0430 1 \u0441\u0435\u043a\u0443\u043d\u0434\u0443 \u0441 \u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u044c\u044e {0}"
                }, {
                    Key: "newPlant-title",
                    English: "New Guardian",
                    "Simplified Chinese": "\u65b0\u5b88\u62a4\u8005",
                    "Traditional Chinese": "\u65b0\u5b88\u62a4\u8005",
                    Japanese: "\u65b0\u30ac\u30fc\u30c7\u30a3\u30a2\u30f3",
                    Spanish: "nueva Guardi\xe1n",
                    Russian: "\u041d\u043e\u0432\u044b\u0439 \u0417\u0430\u0449\u0438\u0442\u043d\u0438\u043a"
                }, {
                    Key: "mission-login-game",
                    English: "Log in to the Game",
                    "Simplified Chinese": "\u767b\u5f55\u6e38\u620f",
                    "Traditional Chinese": "\u767b\u5165\u6e38\u620f",
                    Japanese: "\u30b2\u30fc\u30e0\u306b\u30ed\u30b0\u30a4\u30f3",
                    Spanish: "Iniciar sesi\xf3n en el juego",
                    Russian: "\u0412\u043e\u0439\u0442\u0438 \u0432 \u0438\u0433\u0440\u0443"
                }, {
                    Key: "mission-merge20-flowers",
                    English: "Merge 20 Guardians",
                    "Simplified Chinese": "\u5408\u621020\u53ea\u5b88\u62a4\u8005",
                    "Traditional Chinese": "\u5408\u621020\u53ea\u5b88\u62a4\u8005",
                    Japanese: "\u30ac\u30fc\u30c7\u30a3\u30a2\u30f3\u5408\u4f5320\u56de\u9054\u6210",
                    Spanish: "Combinar 20 guardianes",
                    Russian: "\u0421\u043e\u0435\u0434\u0438\u043d\u0438\u0442\u044c 20 \u0417\u0430\u0449\u0438\u0442\u043d\u0438\u043a\u043e\u0432"
                }, {
                    Key: "mission-win10-times",
                    English: "Defeat 10 Waves of Muckmongers",
                    "Simplified Chinese": "\u6210\u529f\u62b5\u5fa110\u6b21\u602a\u7269",
                    "Traditional Chinese": "\u6210\u529f\u62b5\u5fa110\u6b21\u602a\u7269",
                    Japanese: "10\u6ce2\u306e\u6c5a\u30e2\u30f3\u30b9\u30bf\u30fc\u3092\u6483\u9000",
                    Spanish: "Vence a 10 oleadas de Muckmongers",
                    Russian: "\u041e\u0442\u0431\u0438\u0442\u044c 10 \u0432\u043e\u043b\u043d \u0413\u0430\u0434\u043e\u0432\u043e\u0434\u043e\u0432"
                }, {
                    Key: "mission-watch3-videos",
                    English: "Watch {0} Videos",
                    "Simplified Chinese": "\u89c2\u770b{0}\u6b21\u5e7f\u544a",
                    "Traditional Chinese": "\u89c2\u770b{0}\u6b21\u5e7f\u544a",
                    Japanese: "{0}\u672c\u306e\u52d5\u753b\u3092\u518d\u751f",
                    Spanish: "Reloj {0} V\xeddeos",
                    Russian: "\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c {0} \u0432\u0438\u0434\u0435\u043e"
                }, {
                    Key: "mission-ingame-time",
                    English: "Stay Online for {0} seconds",
                    "Simplified Chinese": "\u5728\u7ebf\u65f6\u957f\u8fbe\u5230{0}\u79d2",
                    "Traditional Chinese": "\u5728\u7ebf\u65f6\u957f\u8fbe\u5230{0}\u79d2",
                    Japanese: "{0} \u79d2\u9593\u7d99\u7d9a\u30aa\u30f3\u30e9\u30a4\u30f3",
                    Spanish: "Mant\xe9ngase en l\xednea para {0} segundos",
                    Russian: "\u041f\u043e\u0438\u0433\u0440\u0430\u0442\u044c {0} \u0441\u0435\u043a\u0443\u043d\u0434"
                }, {
                    Key: "achieveItem-description",
                    English: "Get {0} Lv.{1} Guardians",
                    "Simplified Chinese": "\u83b7\u5f97{0}\u53ea{1}\u7ea7\u7684\u5b88\u62a4\u8005",
                    "Traditional Chinese": "\u83b7\u5f97{0}\u53ea{1}\u7ea7\u7684\u5b88\u62a4\u8005",
                    Japanese: "\u30ac\u30fc\u30c7\u30a3\u30a2\u30f3Lv.{1}\u3092{0}\u5339\u7372\u5f97",
                    Spanish: "Obtener {0} Lv. {1} Guardi\xe1n",
                    Russian: "\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c {0} \u0417\u0430\u0449\u0438\u0442\u043d\u0438\u043a\u043e\u0432 {1}-\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f"
                }, {
                    Key: "guide-1",
                    English: "Click to buy a Guardian",
                    "Simplified Chinese": "\u70b9\u51fb\u8fd9\u91cc\u8d2d\u4e70\u4e00\u53ea\u5b88\u62a4\u8005",
                    "Traditional Chinese": "\u70b9\u51fb\u8fd9\u91cc\u8d2d\u4e70\u4e00\u53ea\u5b88\u62a4\u8005",
                    Japanese: "\u30af\u30ea\u30c3\u30af\u3057\u3066\u30ac\u30fc\u30c7\u30a3\u30a2\u30f3\u3092\u8cfc\u5165",
                    Spanish: "Haga clic para comprar a un Guardi\xe1n",
                    Russian: "\u0416\u043c\u0438, \u0447\u0442\u043e\u0431\u044b \u043a\u0443\u043f\u0438\u0442\u044c \u0417\u0430\u0449\u0438\u0442\u043d\u0438\u043a\u0430"
                }, {
                    Key: "guide-2",
                    English: "Click one more time",
                    "Simplified Chinese": "\u518d\u8d2d\u4e70\u4e00\u6b21",
                    "Traditional Chinese": "\u518d\u8d2d\u4e70\u4e00\u6b21",
                    Japanese: "\u3082\u3046\u4e00\u5ea6\u30af\u30ea\u30c3\u30af",
                    Spanish: "Haga clic una vez m\xe1s",
                    Russian: "\u0416\u043c\u0438 \u0435\u0449\u0435 \u0440\u0430\u0437"
                }, {
                    Key: "guide-3",
                    English: "Drag Guardians to merge and power up!",
                    "Simplified Chinese": "\u62d6\u52a8\u5230\u4e00\u8d77\u5408\u6210\u4e00\u53ea\u65b0\u5b88\u62a4\u8005",
                    "Traditional Chinese": "\u62d6\u52a8\u5230\u4e00\u8d77\u5408\u6210\u4e00\u53ea\u65b0\u5b88\u62a4\u8005",
                    Japanese: "\u30ac\u30fc\u30c7\u30a3\u30a2\u30f3\u3092\u5408\u4f53\u3055\u305b\u3066\u30d1\u30ef\u30fc\u30a2\u30c3\u30d7\uff01",
                    Spanish: "Guardianes de arrastre para fusionar y encienda!",
                    Russian: "\u0422\u0430\u0449\u0438 \u0417\u0430\u0449\u0438\u0442\u043d\u0438\u043a\u043e\u0432 \u0438 \u0441\u043e\u0435\u0434\u0438\u043d\u044f\u0439 \u0434\u043b\u044f \u0443\u0441\u0438\u043b\u0435\u043d\u0438\u044f"
                }, {
                    Key: "guide-4",
                    English: "Tap to claim coins",
                    "Simplified Chinese": "\u70b9\u51fb\u9886\u53d6\u91d1\u5e01\u5956\u52b1",
                    "Traditional Chinese": "\u70b9\u51fb\u9886\u53d6\u91d1\u5e01\u5956\u52b1",
                    Japanese: "\u30bf\u30c3\u30d7\u3057\u3066\u30b3\u30a4\u30f3\u7372\u5f97",
                    Spanish: "Toque para las monedas de reclamaci\xf3n",
                    Russian: "\u0416\u043c\u0438, \u0447\u0442\u043e\u0431\u044b \u0432\u0437\u044f\u0442\u044c \u043c\u043e\u043d\u0435\u0442\u044b"
                }, {
                    Key: "guide-5",
                    English: "Drag to move the Guardian",
                    "Simplified Chinese": "\u79fb\u52a8\u5b88\u62a4\u8005\u6765\u62b5\u5fa1\u602a\u7269",
                    "Traditional Chinese": "\u79fb\u52a8\u5b88\u62a4\u8005\u6765\u62b5\u5fa1\u602a\u7269",
                    Japanese: "\u30c9\u30e9\u30c3\u30b0\u3057\u3066\u30ac\u30fc\u30c7\u30a3\u30a2\u30f3\u3092\u79fb\u52d5",
                    Spanish: "Arrastre para mover el Guardi\xe1n",
                    Russian: "\u0422\u0430\u0449\u0438, \u0447\u0442\u043e\u0431\u044b \u0434\u0432\u0438\u0433\u0430\u0442\u044c \u0417\u0430\u0449\u0438\u0442\u043d\u0438\u043a\u043e\u0432"
                }, {
                    Key: "guide-6",
                    English: "Tap to open the Pod!",
                    "Simplified Chinese": "\u70b9\u51fb\u6253\u5f00",
                    "Traditional Chinese": "\u70b9\u51fb\u6253\u5f00",
                    Japanese: "\u30bf\u30c3\u30d7\u3057\u3066\u7a2e\u3092\u958b\u3051\u308b",
                    Spanish: "Toque para abrir la vaina!",
                    Russian: "\u0416\u043c\u0438, \u0447\u0442\u043e\u0431\u044b \u043e\u0442\u043a\u0440\u044b\u0442\u044c \u043a\u043e\u043a\u043e\u043d"
                }, {
                    Key: "guide-7",
                    English: "Attack the Pollution Army!",
                    "Simplified Chinese": "\u62b5\u5fa1\u602a\u7269\u6765\u88ad\uff01",
                    "Traditional Chinese": "\u62b5\u5fa1\u602a\u7269\u6765\u88ad\uff01",
                    Japanese: "\u6c5a\u30e2\u30f3\u30b9\u30bf\u30fc\u8ecd\u56e3\u3092\u5012\u305d\u3046\uff01",
                    Spanish: "Atacar al Ej\xe9rcito de la contaminaci\xf3n!",
                    Russian: "\u0410\u0442\u0430\u043a\u0443\u0439 \u0410\u0440\u043c\u0438\u044e \u041d\u0435\u0447\u0438\u0441\u0442\u0438"
                }, {
                    Key: "guide-8",
                    English: "Drag Guardians here to recycle for coins",
                    "Simplified Chinese": "\u62d6\u52a8\u5b88\u62a4\u8005\u5230\u8fd9\u91cc\u6765\u5356\u51fa",
                    "Traditional Chinese": "\u62d6\u52a8\u5b88\u62a4\u8005\u5230\u8fd9\u91cc\u6765\u5356\u51fa",
                    Japanese: "\u30ac\u30fc\u30c7\u30a3\u30a2\u30f3\u3092\u30ea\u30b5\u30a4\u30af\u30eb\u3057\u3066\u30b3\u30a4\u30f3\u7372\u5f97",
                    Spanish: "Guardianes Arrastre aqu\xed a reciclar para las monedas",
                    Russian: "\u0422\u0430\u0449\u0438 \u0417\u0430\u0449\u0438\u0442\u043d\u0438\u043a\u043e\u0432 \u0441\u044e\u0434\u0430, \u0447\u0442\u043e\u0431\u044b c\u0434\u0430\u0442\u044c \u0437\u0430 \u043c\u043e\u043d\u0435\u0442\u044b"
                }, {
                    Key: "guideOver",
                    English: "Earn more coins to unlock new guardians",
                    "Simplified Chinese": "\u8d5a\u66f4\u591a\u7684\u94b1\u6765\u83b7\u5f97\u89e3\u9501\u65b0\u7684\u5b88\u62a4\u8005",
                    "Traditional Chinese": "\u8d5a\u66f4\u591a\u7684\u94b1\u6765\u83b7\u5f97\u89e3\u9501\u65b0\u7684\u5b88\u62a4\u8005",
                    Japanese: "\u30b3\u30a4\u30f3\u3092\u96c6\u3081\u3066\u65b0\u30ac\u30fc\u30c7\u30a3\u30a2\u30f3\u3092\u30a2\u30f3\u30ed\u30c3\u30af",
                    Spanish: "Ganar m\xe1s monedas para desbloquear nuevos guardianes",
                    Russian: "\u0417\u0430\u0440\u0430\u0431\u043e\u0442\u0430\u0439 \u0431\u043e\u043b\u044c\u0448\u0435 \u043c\u043e\u043d\u0435\u0442, \u0447\u0442\u043e\u0431\u044b \u043e\u0442\u043a\u0440\u044b\u0442\u044c \u043d\u043e\u0432\u044b\u0445 \u0437\u0430\u0449\u0438\u0442\u043d\u0438\u043a\u043e\u0432"
                }, {
                    Key: "max-angry-time-150",
                    English: "Rage mode lasts for up to 900s",
                    "Simplified Chinese": "\u72c2\u66b4\u6700\u591a\u6301\u7eed900\u79d2",
                    "Traditional Chinese": "\u72c2\u66b4\u6700\u591a\u6301\u7eed900\u79d2",
                    Japanese: "\u30ec\u30a4\u30b8\u72b6\u614b\u306f\u6700\u5927900\u79d2\u9593\u307e\u3067\u7d9a\u304f",
                    Spanish: "el modo de rabia tiene una duraci\xf3n de hasta 150s",
                    Russian: "\u0420\u0435\u0436\u0438\u043c \u0434\u0438\u043a\u043e\u0441\u0442\u0438 \u0434\u043b\u0438\u0442\u0441\u044f \u0434\u043e 900 \u0441\u0435\u043d\u0443\u043d\u0434"
                }, {
                    Key: "be-lock",
                    English: "LOCKED!",
                    "Simplified Chinese": "\u5c1a\u672a\u89e3\u9501",
                    "Traditional Chinese": "\u5c1a\u672a\u89e3\u9501",
                    Japanese: "\u30ed\u30c3\u30af\u72b6\u614b\uff01",
                    Spanish: "BLOQUEADO!",
                    Russian: "\u0417\u0410\u041a\u0420\u042b\u0422\u041e"
                }, {
                    Key: "congratulation-get",
                    English: "Purchased!\r",
                    "Simplified Chinese": "\u606d\u559c\u83b7\u5f97\r",
                    "Traditional Chinese": "\u606d\u559c\u83b7\u5f97\r",
                    Japanese: "\u8cfc\u5165\u6e08\u307f\uff01\r",
                    Spanish: "Comprar!  R",
                    Russian: "\u041a\u0443\u043f\u043b\u0435\u043d\u043e!\r"
                }, {
                    Key: "buy-success",
                    English: "Purchase complete",
                    "Simplified Chinese": "\u8d2d\u4e70\u6210\u529f!",
                    "Traditional Chinese": "\u8d2d\u4e70\u6210\u529f!",
                    Japanese: "\u8cfc\u5165\u5b8c\u4e86",
                    Spanish: "Compra Completada",
                    Russian: "\u041f\u043e\u043a\u0443\u043f\u043a\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u0430"
                }, {
                    Key: "skill_des",
                    English: "Skill",
                    "Simplified Chinese": "\u6280\u80fd",
                    "Traditional Chinese": "\u6280\u80fd",
                    Japanese: "\u30b9\u30ad\u30eb",
                    Spanish: "Habilidad",
                    Russian: "\u041d\u0430\u0432\u044b\u043a"
                }, {
                    Key: "plant-Max",
                    English: "You have unlocked the highest level.\n New Guardians coming soon in next Update! ",
                    "Simplified Chinese": "\u5f53\u524d\u5b88\u62a4\u7740\u5df2\u8fbe\u6700\u9ad8\u7b49\u7ea7\u3002\n \u65b0\u7684\u5b88\u62a4\u8005\u5c06\u5728\u4e0b\u4e00\u4e2a\u7248\u672c\u4e2d\u63a8\u51fa\uff01",
                    "Traditional Chinese": "\u5f53\u524d\u5b88\u62a4\u8005\u5df2\u8fbe\u6700\u9ad8\u7b49\u7ea7\u3002 \n \u65b0\u7684\u5b88\u62a4\u8005\u5c06\u5728\u4e0b\u4e00\u4e2a\u7248\u672c\u4e2d\u63a8\u51fa\uff01",
                    Japanese: "\u6700\u9ad8\u30ec\u30d9\u30eb\u307e\u3067\u30a2\u30f3\u30ed\u30c3\u30af\u6e08\u307f\n \u6b21\u56de\u306e\u66f4\u65b0\u3067\u65b0\u30ac\u30fc\u30c7\u30a3\u30a2\u30f3\u304c\u767b\u5834\uff01",
                    Spanish: "Que haya desbloqueado el nivel m\xe1s alto.  N nuevos guardianes pr\xf3ximamente en la pr\xf3xima actualizaci\xf3n!",
                    Russian: "\u0412\u044b \u0434\u043e\u0448\u043b\u0438 \u0434\u043e \u0441\u0430\u043c\u043e\u0433\u043e \u0432\u044b\u0441\u043e\u043a\u043e\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f.\n \u041d\u043e\u0432\u044b\u0435 \u0437\u0430\u0449\u0438\u0442\u043d\u0438\u043a\u0438 \u043f\u043e\u044f\u0432\u044f\u0442\u0441\u044f \u0441\u043e \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435\u043c"
                }, {
                    Key: "is-double-now",
                    English: "Double Coin bonus activated ",
                    "Simplified Chinese": "\u53cc\u500d\u91d1\u5e01\u5df2\u6fc0\u6d3b",
                    "Traditional Chinese": "\u53cc\u500d\u91d1\u5e01\u5df2\u6fc0\u6d3b",
                    Japanese: "\uff12\u500d\u30b3\u30a4\u30f3\u30dc\u30fc\u30ca\u30b9\u767a\u52d5\u4e2d",
                    Spanish: "bono Double Coin activa",
                    Russian: "\u0412\u043a\u043b\u044e\u0447\u0435\u043d \u0431\u043e\u043d\u0443\u0441 \u0414\u0432\u043e\u0439\u043d\u044b\u0445 \u041c\u043e\u043d\u0435\u0442"
                }, {
                    Key: "max-level-cannt-recovery",
                    English: "You can't recycle your most powerful Guardian",
                    "Simplified Chinese": "\u5f53\u524d\u6700\u9ad8\u7b49\u7ea7\u5b88\u62a4\u8005\u65e0\u6cd5\u56de\u6536",
                    "Traditional Chinese": "\u5f53\u524d\u6700\u9ad8\u7b49\u7ea7\u5b88\u62a4\u8005\u65e0\u6cd5\u56de\u6536",
                    Japanese: "\u6700\u3082\u5f37\u3044\u30ab\u30fc\u30c7\u30a3\u30a2\u30f3\u306f\u30ea\u30b5\u30a4\u30af\u30eb\u3067\u304d\u306a\u3044",
                    Spanish: "No se puede reciclar su m\xe1s poderoso Guardi\xe1n",
                    Russian: "\u041d\u0435\u043b\u044c\u0437\u044f \u0441\u0434\u0430\u0442\u044c \u0441\u0430\u043c\u043e\u0433\u043e \u0441\u0438\u043b\u044c\u043d\u043e\u0433\u043e \u0417\u0430\u0449\u0438\u0442\u043d\u0438\u043a\u0430"
                }, {
                    Key: "signed",
                    English: "Claimed",
                    "Simplified Chinese": "\u5df2\u9886\u53d6",
                    "Traditional Chinese": "\u5df2\u9886\u53d6",
                    Japanese: "\u53d7\u53d6\u6e08\u307f",
                    Spanish: "reclamado",
                    Russian: "\u0412\u0437\u044f\u0442\u043e"
                }, {
                    Key: "mission-toggle-button",
                    English: "Daily Tasks",
                    "Simplified Chinese": "\u6bcf\u65e5\u4efb\u52a1",
                    "Traditional Chinese": "\u6bcf\u65e5\u4efb\u52a1",
                    Japanese: "\u30c7\u30a4\u30ea\u30fc\u30bf\u30b9\u30af",
                    Spanish: "Tareas diarias",
                    Russian: "\u0414\u043d\u0435\u0432\u043d\u044b\u0435 \u0417\u0430\u0434\u0430\u0447\u0438"
                }, {
                    Key: "achievement-toggle-button",
                    English: "Achievements",
                    "Simplified Chinese": "\u6210\u5c31",
                    "Traditional Chinese": "\u6210\u5c31",
                    Japanese: "\u9054\u6210\u5831\u916c",
                    Spanish: "Logros",
                    Russian: "\u0414\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u044f"
                }, {
                    Key: "noMission-tip",
                    English: "All of today's tasks\n have been completed",
                    "Simplified Chinese": "\u5df2\u5b8c\u6210\u4eca\u5929\u7684\u5168\u90e8\u4efb\u52a1",
                    "Traditional Chinese": "\u5df2\u5b8c\u6210\u4eca\u5929\u7684\u5168\u90e8\u4efb\u52a1",
                    Japanese: "\u672c\u65e5\u306e\u30bf\u30b9\u30af\u306f\u5168\u3066\u5b8c\u4e86",
                    Spanish: "Todas las tareas de hoy se han completado",
                    Russian: "\u0412\u0441\u0435 \u0437\u0430\u0434\u0430\u0447\u0438 \u043d\u0430 \u0441\u0435\u0433\u043e\u0434\u043d\u044f\n \u0443\u0436\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u044b"
                }, {
                    Key: "rage-title",
                    English: "Rage",
                    "Simplified Chinese": "\u66b4\u6012",
                    "Traditional Chinese": "\u66b4\u6012",
                    Japanese: "\u30ec\u30a4\u30b8",
                    Spanish: "Rabia",
                    Russian: "\u0414\u0438\u043a\u043e\u0441\u0442\u044c"
                }, {
                    Key: "rage-speedup-tip-1",
                    English: "Attack Speed x 2",
                    "Simplified Chinese": "\u653b\u51fb\u901f\u5ea6x2",
                    "Traditional Chinese": "\u653b\u51fb\u901f\u5ea6x2",
                    Japanese: "\u653b\u6483\u901f\u5ea6 x 2",
                    Spanish: "Velocidad de ataque x 2",
                    Russian: "\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0410\u0442\u0430\u043a\u0438 \u0445 2"
                }, {
                    Key: "rage-speedup-tip-2",
                    English: "Increase duration by 30s",
                    "Simplified Chinese": "\u589e\u52a030\u79d2",
                    "Traditional Chinese": "\u589e\u52a030\u79d2",
                    Japanese: "\u767a\u52d5\u6642\u9593\u309230\u79d2\u30d7\u30e9\u30b9",
                    Spanish: "Aumentar la duraci\xf3n de 30 a\xf1os",
                    Russian: "\u0423\u0432\u0435\u043b\u0438\u0447\u0438\u0442\u044c \u0434\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u043d\u0430 30\u0441"
                }, {
                    Key: "getReward-title",
                    English: "CONGRATS!",
                    "Simplified Chinese": "\u606d\u559c\u83b7\u5f97\uff01",
                    "Traditional Chinese": "\u606d\u559c\u83b7\u5f97\uff01",
                    Japanese: "\u304a\u3081\u3067\u3068\u3046\uff01",
                    Spanish: "\xa1Felicidades!",
                    Russian: "\u041f\u041e\u0417\u0414\u0420\u0410\u0412\u041b\u042f\u0415\u041c!"
                }, {
                    Key: "getReward-checkbox",
                    English: "Watch a video to double the reward",
                    "Simplified Chinese": "\u770b\u5e7f\u544a\u52a0\u500d\u9886\u53d6",
                    "Traditional Chinese": "\u770b\u5e7f\u544a\u52a0\u500d\u9886\u53d6",
                    Japanese: "\u52d5\u753b\u3092\u518d\u751f\u3057\u3066\u5831\u916c\uff12\u500d",
                    Spanish: "Vea un video para duplicar la recompensa",
                    Russian: "\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0432\u0438\u0434\u0435\u043e \u0434\u043b\u044f \u0434\u0432\u043e\u0439\u043d\u043e\u0439 \u043d\u0430\u0433\u0440\u0430\u0434\u044b"
                }, {
                    Key: "bigResult-win-checkbox",
                    English: "Watch a video to double the reward",
                    "Simplified Chinese": "\u770b\u5e7f\u544a\u52a0\u500d\u9886\u53d6",
                    "Traditional Chinese": "\u770b\u5e7f\u544a\u52a0\u500d\u9886\u53d6",
                    Japanese: "\u52d5\u753b\u3092\u518d\u751f\u3057\u3066\u5831\u916c\uff12\u500d",
                    Spanish: "Vea un video para duplicar la recompensa",
                    Russian: "\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0432\u0438\u0434\u0435\u043e \u0434\u043b\u044f \u0434\u0432\u043e\u0439\u043d\u043e\u0439 \u043d\u0430\u0433\u0440\u0430\u0434\u044b"
                }, {
                    Key: "bigResult-loss-checkbox",
                    English: "Get a Rage bonus",
                    "Simplified Chinese": "\u83b7\u53d6\u66b4\u6012\u5956\u52b1",
                    "Traditional Chinese": "\u83b7\u53d6\u66b4\u6012\u5956\u52b1",
                    Japanese: "\u30ec\u30a4\u30b8\u30dc\u30fc\u30ca\u30b9\u3092\u5165\u624b",
                    Spanish: "Obtener un bono Rage",
                    Russian: "\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0431\u043e\u043d\u0443\u0441 \u0414\u0438\u043a\u043e\u0441\u0442\u0438"
                }, {
                    Key: "bigResult-loss-reborn",
                    English: "Restart Stage",
                    "Simplified Chinese": "\u91cd\u8bd5\u5f53\u524d\u7b49\u7ea7",
                    "Traditional Chinese": "\u91cd\u8bd5\u5f53\u524d\u7b49\u7ea7",
                    Japanese: "\u30b9\u30c6\u30fc\u30b8\u30ea\u30c8\u30e9\u30a4",
                    Spanish: "Etapa reinicio",
                    Russian: "\u0423\u0440\u043e\u0432\u0435\u043d\u044c \u0421 \u041d\u0430\u0447\u0430\u043b\u0430"
                }, {
                    Key: "doubleCoin-des-1",
                    English: "Defeated Enemies will drop x2 coins!",
                    "Simplified Chinese": "\u6253\u8d25\u654c\u4eba\u65f6\u91d1\u5e01\u6389\u843d\u52a0\u500d",
                    "Traditional Chinese": "\u6253\u8d25\u654c\u4eba\u65f6\u91d1\u5e01\u6389\u843d\u52a0\u500d",
                    Japanese: "\u5012\u3057\u305f\u6575\u304b\u3089\u30b3\u30a4\u30f3\uff12\u500d\u7372\u5f97",
                    Spanish: "Los enemigos derrotados se caen las monedas x2!",
                    Russian: "\u041f\u043e\u0431\u0435\u0436\u0434\u0435\u043d\u043d\u044b\u0435 \u0432\u0440\u0430\u0433\u0438 \u0432\u044b\u0434\u0430\u044e\u0442 \u04452 \u043c\u043e\u043d\u0435\u0442!"
                }, {
                    Key: "doubleCoin-des-2",
                    English: "Bonus will last for 500 seconds",
                    "Simplified Chinese": "\u91d1\u5e01\u52a0\u500d\u6301\u7eed500\u79d2",
                    "Traditional Chinese": "\u91d1\u5e01\u52a0\u500d\u6301\u7eed500\u79d2",
                    Japanese: "\u30dc\u30fc\u30ca\u30b9\u306f500\u79d2\u9593\u7d9a\u304f",
                    Spanish: "Bonificaci\xf3n tendr\xe1 una duraci\xf3n de 500 segundos",
                    Russian: "\u0411\u043e\u043d\u0443\u0441 \u0431\u0443\u0434\u0435\u0442 \u0434\u043b\u0438\u0442\u044c\u0441\u044f 500 \u0441\u0435\u043a\u0443\u043d\u0434"
                }, {
                    Key: "coinExchange-title",
                    English: "Gold Coin Exchange",
                    "Simplified Chinese": "\u91d1\u5e01\u5151\u6362",
                    "Traditional Chinese": "\u91d1\u5e01\u5151\u6362",
                    Japanese: "\u30b3\u30a4\u30f3\u4ea4\u63db",
                    Spanish: "Cambio de moneda de oro",
                    Russian: "\u041e\u0431\u043c\u0435\u043d \u0417\u043e\u043b\u043e\u0442\u044b\u0445 \u041c\u043e\u043d\u0435\u0442"
                }, {
                    Key: "coinExchange-des",
                    English: "Remaining exchanges today",
                    "Simplified Chinese": "\u4eca\u5929\u7684\u91d1\u5e01\u5151\u6362\u6b21\u6570\u5269\u4f59",
                    "Traditional Chinese": "\u4eca\u5929\u7684\u91d1\u5e01\u5151\u6362\u6b21\u6570\u5269\u4f59",
                    Japanese: "\u672c\u65e5\u306e\u6b8b\u308a\u306e\u4ea4\u63db\u56de\u6570",
                    Spanish: "Restante intercambios hoy",
                    Russian: "\u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c \u043e\u0431\u043c\u0435\u043d\u043e\u0432 \u043d\u0430 \u0441\u0435\u0433\u043e\u0434\u043d\u044f"
                }, {
                    Key: "main-level",
                    English: "Stage",
                    "Simplified Chinese": "\u7b49\u7ea7",
                    "Traditional Chinese": "\u7b49\u7ea7",
                    Japanese: "\u30b9\u30c6\u30fc\u30b8",
                    Spanish: "Etapa",
                    Russian: "\u0423\u0440\u043e\u0432\u0435\u043d\u044c"
                }, {
                    Key: "main-task",
                    English: "Missions",
                    "Simplified Chinese": "\u4efb\u52a1",
                    "Traditional Chinese": "\u4efb\u52a1",
                    Japanese: "\u30df\u30c3\u30b7\u30e7\u30f3",
                    Spanish: "misiones",
                    Russian: "\u041c\u0438\u0441\u0441\u0438\u0438"
                }, {
                    Key: "main-signIn",
                    English: "Daily Bonus",
                    "Simplified Chinese": "\u6bcf\u65e5\u5956\u52b1",
                    "Traditional Chinese": "\u6bcf\u65e5\u5956\u52b1",
                    Japanese: "\u30ed\u30b0\u30dc",
                    Spanish: "Bonus diario",
                    Russian: "\u0414\u043d\u0435\u0432\u043d\u043e\u0439 \u0411\u043e\u043d\u0443\u0441"
                }, {
                    Key: "main-roulette",
                    English: "Roulette",
                    "Simplified Chinese": "\u81ea\u7136\u5927\u8f6c\u76d8",
                    "Traditional Chinese": "\u81ea\u7136\u5927\u8f6c\u76d8",
                    Japanese: "\u30eb\u30fc\u30ec\u30c3\u30c8",
                    Spanish: "Ruleta",
                    Russian: "\u0420\u0443\u043b\u0435\u0442\u043a\u0430"
                }, {
                    Key: "main-rank",
                    English: "Ranking",
                    "Simplified Chinese": "\u6392\u540d",
                    "Traditional Chinese": "\u6392\u540d",
                    Japanese: "\u30e9\u30f3\u30ad\u30f3\u30b0",
                    Spanish: "Clasificaci\xf3n",
                    Russian: "\u0420\u0430\u043d\u0433"
                }, {
                    Key: "main-double",
                    English: "Double Gold",
                    "Simplified Chinese": "\u53cc\u500d\u91d1\u5e01",
                    "Traditional Chinese": "\u53cc\u500d\u91d1\u5e01",
                    Japanese: "\u30b3\u30a4\u30f3\uff12\u500d",
                    Spanish: "doble oro",
                    Russian: "\u0414\u0432\u043e\u0439\u043d\u043e\u0435 \u0417\u043e\u043b\u043e\u0442\u043e"
                }, {
                    Key: "main-offline",
                    English: "Collect",
                    "Simplified Chinese": "\u9886\u53d6",
                    "Traditional Chinese": "\u9886\u53d6",
                    Japanese: "\u56de\u53ce",
                    Spanish: "Recoger",
                    Russian: "\u0421\u043e\u0431\u0440\u0430\u0442\u044c"
                }, {
                    Key: "main-rage",
                    English: "Rage",
                    "Simplified Chinese": "\u66b4\u6012",
                    "Traditional Chinese": "\u66b4\u6012",
                    Japanese: "\u30ec\u30a4\u30b8",
                    Spanish: "Rabia",
                    Russian: "\u0414\u0438\u043a\u043e\u0441\u0442\u044c"
                }, {
                    Key: "main-shop",
                    English: "Shop",
                    "Simplified Chinese": "\u5546\u5e97",
                    "Traditional Chinese": "\u5546\u5e97",
                    Japanese: "\u30b7\u30e7\u30c3\u30d7",
                    Spanish: "tienda",
                    Russian: "\u041c\u0430\u0433\u0430\u0437\u0438\u043d"
                }, {
                    Key: "newRecord-title",
                    English: "Next Stage",
                    "Simplified Chinese": "\u4e0b\u4e00\u7b49\u7ea7",
                    "Traditional Chinese": "\u4e0b\u4e00\u7b49\u7ea7",
                    Japanese: "\u6b21\u306e\u30b9\u30c6\u30fc\u30b8",
                    Spanish: "Siguiente etapa",
                    Russian: "\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0423\u0440\u043e\u0432\u0435\u043d\u044c"
                }, {
                    Key: "newRecord-level",
                    English: "Stage",
                    "Simplified Chinese": "\u7b49\u7ea7",
                    "Traditional Chinese": "\u7b49\u7ea7",
                    Japanese: "\u30b9\u30c6\u30fc\u30b8",
                    Spanish: "Etapa",
                    Russian: "\u0423\u0440\u043e\u0432\u0435\u043d\u044c"
                }, {
                    Key: "offline-des",
                    English: "Offline Earnings",
                    "Simplified Chinese": "\u79bb\u7ebf\u5956\u52b1",
                    "Traditional Chinese": "\u79bb\u7ebf\u5956\u52b1",
                    Japanese: "\u30aa\u30d5\u30e9\u30a4\u30f3\u5831\u916c",
                    Spanish: "Las ganancias fuera de l\xednea",
                    Russian: "\u041e\u0444\u0444\u043b\u0430\u0439\u043d \u0417\u0430\u0440\u0430\u0431\u043e\u0442\u043e\u043a"
                }, {
                    Key: "offline-checkbox",
                    English: "Watch a video to double the reward",
                    "Simplified Chinese": "\u89c2\u770b\u5e7f\u544a\u53cc\u500d\u9886\u53d6",
                    "Traditional Chinese": "\u89c2\u770b\u5e7f\u544a\u53cc\u500d\u9886\u53d6",
                    Japanese: "\u52d5\u753b\u3092\u518d\u751f\u3057\u3066\u5831\u916c\uff12\u500d",
                    Spanish: "Vea un video para duplicar la recompensa",
                    Russian: "\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0432\u0438\u0434\u0435\u043e, \u0447\u0442\u043e\u0431\u044b \u0443\u0434\u0432\u043e\u0438\u0442\u044c \u043d\u0430\u0433\u0440\u0430\u0434\u0443"
                }, {
                    Key: "vip-title",
                    English: "VIP",
                    "Simplified Chinese": "VIP",
                    "Traditional Chinese": "VIP",
                    Japanese: "VIP",
                    Spanish: "VIP",
                    Russian: "VIP"
                }, {
                    Key: "uav-title",
                    English: "Fairy Support",
                    "Simplified Chinese": "\u7cbe\u7075\u652f\u63f4",
                    "Traditional Chinese": "\u7cbe\u7075\u652f\u63f4",
                    Japanese: "\u5996\u7cbe\u30b5\u30dd\u30fc\u30c8",
                    Spanish: "Soporte de hadas",
                    Russian: "\u041f\u043e\u043c\u043e\u0449\u044c \u0424\u0435\u0438"
                }, {
                    Key: "roulette-start",
                    English: "Start",
                    "Simplified Chinese": "\u5f00\u59cb",
                    "Traditional Chinese": "\u5f00\u59cb",
                    Japanese: "\u30b9\u30bf\u30fc\u30c8",
                    Spanish: "comienzo",
                    Russian: "\u041d\u0430\u0447\u0430\u0442\u044c"
                }, {
                    Key: "roulette-timeTip",
                    English: "Ad button recovers in:",
                    "Simplified Chinese": "\u5e7f\u544a\u6062\u590d\u8fd8\u5269\uff1a",
                    "Traditional Chinese": "\u5e7f\u544a\u6062\u590d\u8fd8\u5269\uff1a",
                    Japanese: "\u5e83\u544a\u30dc\u30bf\u30f3\u6709\u52b9\u307e\u3067\u6b8b\u308a\uff1a",
                    Spanish: "La pr\xf3xima vez libre:",
                    Russian: "\u041a\u043d\u043e\u043f\u043a\u0430 \u0440\u0435\u043a\u043b\u0430\u043c\u044b \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437: "
                }, {
                    Key: "signIn-day",
                    English: "Day{0}",
                    "Simplified Chinese": "\u7b2c{0}\u5929",
                    "Traditional Chinese": "\u7b2c{0}\u5929",
                    Japanese: "{0}\u65e5\u76ee",
                    Spanish: "D\xeda {0}",
                    Russian: "\u0414\u0435\u043d\u044c {0}"
                }, {
                    Key: "signIn-checked",
                    English: "Today\u2019s Bonus has been Claimed!\nPlease come back tomorrow.",
                    "Simplified Chinese": "\u4eca\u5929\u7684\u5b9d\u77f3\u5956\u52b1\u5df2\u7ecf\u9886\u53d6\uff01\n \u6b22\u8fce\u660e\u5929\u518d\u6765\uff01",
                    "Traditional Chinese": "\u4eca\u5929\u7684\u5b9d\u77f3\u5956\u52b1\u5df2\u7ecf\u9886\u53d6\uff01 \n \u6b22\u8fce\u660e\u5929\u518d\u6765\uff01",
                    Japanese: "\u672c\u65e5\u306e\u5831\u916c\u306f\u3059\u3067\u306b\u56de\u53ce\u6e08\u307f\uff01\n \u307e\u305f\u660e\u65e5\u3082\u304d\u3066\u306d\uff01\u3000",
                    Spanish: "Adicional de hoy ha sido reclamada!  N Por favor venga ma\xf1ana espalda.",
                    Russian: "\u0421\u0435\u0433\u043e\u0434\u043d\u044f\u0448\u043d\u0438\u0439 \u0411\u043e\u043d\u0443\u0441 \u0443\u0436\u0435 \u0412\u0437\u044f\u0442!\n\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u043f\u0440\u0438\u0445\u043e\u0434\u0438\u0442\u0435 \u0437\u0430\u0432\u0442\u0440\u0430."
                }, {
                    Key: "signIn-checkbox",
                    English: "Watch a video to double the reward",
                    "Simplified Chinese": "\u89c2\u770b\u5e7f\u544a\u53cc\u500d\u9886\u53d6",
                    "Traditional Chinese": "\u89c2\u770b\u5e7f\u544a\u53cc\u500d\u9886\u53d6",
                    Japanese: "\u52d5\u753b\u3092\u518d\u751f\u3057\u3066\u5831\u916c\uff12\u500d",
                    Spanish: "Vea un video para duplicar la recompensa",
                    Russian: "\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0432\u0438\u0434\u0435\u043e \u0434\u043b\u044f \u0434\u0432\u043e\u0439\u043d\u043e\u0439 \u043d\u0430\u0433\u0440\u0430\u0434\u044b"
                }, {
                    Key: "getPlant-nextLevel",
                    English: "Next",
                    "Simplified Chinese": "\u4e0b\u4e00\u7ea7",
                    "Traditional Chinese": "\u4e0b\u4e00\u7ea7",
                    Japanese: "\u6b21\u306e\u30ec\u30d9\u30eb",
                    Spanish: "pr\xf3ximo",
                    Russian: "\u0414\u0430\u043b\u044c\u0448\u0435"
                }, {
                    Key: "getPlant-checkbox",
                    English: "Watch a video to double the reward",
                    "Simplified Chinese": "\u89c2\u770b\u5e7f\u544a\u53cc\u500d\u9886\u53d6",
                    "Traditional Chinese": "\u89c2\u770b\u5e7f\u544a\u53cc\u500d\u9886\u53d6",
                    Japanese: "\u52d5\u753b\u3092\u518d\u751f\u3057\u3066\u5831\u916c\uff12\u500d",
                    Spanish: "Vea un video para duplicar la recompensa",
                    Russian: "\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0432\u0438\u0434\u0435\u043e \u0434\u043b\u044f \u0434\u0432\u043e\u0439\u043d\u043e\u0439 \u043d\u0430\u0433\u0440\u0430\u0434\u044b"
                }, {
                    Key: "payment-shop",
                    English: "Guardians",
                    "Simplified Chinese": "\u5b88\u62a4\u8005",
                    "Traditional Chinese": "\u5b88\u62a4\u8005",
                    Japanese: "\u30ac\u30fc\u30c7\u30a3\u30a2\u30f3",
                    Spanish: "guardianes",
                    Russian: "\u0417\u0430\u0449\u0438\u0442\u043d\u0438\u043a\u0438"
                }, {
                    Key: "payment-gem",
                    English: "Gems",
                    "Simplified Chinese": "\u5b9d\u77f3",
                    "Traditional Chinese": "\u5b9d\u77f3",
                    Japanese: "\u5b9d\u77f3",
                    Spanish: "gemas",
                    Russian: "\u0416\u0435\u043c\u0447\u0443\u0433\u0430"
                }, {
                    Key: "max-exchange",
                    English: "You have reached today's exchange limit!\n Come back tomorrow!",
                    "Simplified Chinese": "\u5df2\u8fbe\u5230\u4eca\u65e5\u6700\u5927\u5151\u6362\u6b21\u6570! \n \u6b22\u8fce\u660e\u5929\u518d\u6765!",
                    "Traditional Chinese": "\u5df2\u8fbe\u5230\u4eca\u65e5\u6700\u5927\u5151\u6362\u6b21\u6570! \n \u6b22\u8fce\u660e\u5929\u518d\u6765!",
                    Japanese: "\u672c\u65e5\u306e\u4ea4\u63db\u56de\u6570\u306f\u4e0a\u9650\u306b\u5230\u9054!\n \u307e\u305f\u660e\u65e5\u3082\u6765\u3066\u306d\uff01",
                    Spanish: "Has alcanzado el l\xedmite de cambio de hoy!  N Vuelve ma\xf1ana!",
                    Russian: "\u0412\u044b \u0438\u0441\u0447\u0435\u0440\u043f\u0430\u043b\u0438 \u0441\u0435\u0433\u043e\u0434\u043d\u044f\u0448\u043d\u0438\u0439 \u043b\u0438\u043c\u0438\u0442 \u043e\u0431\u043c\u0435\u043d\u0430!\n \u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0439\u0442\u0435\u0441\u044c \u0437\u0430\u0432\u0442\u0440\u0430!"
                }, {
                    Key: "exchangeSuccess",
                    English: "You exchanged {0} coins",
                    "Simplified Chinese": "\u6210\u529f\u5151\u6362{0}\u91d1\u5e01!",
                    "Traditional Chinese": "\u6210\u529f\u5151\u6362{0}\u91d1\u5e01!",
                    Japanese: "\u30b3\u30a4\u30f3{0}\u679a\u3092\u4ea4\u63db\u3057\u305f",
                    Spanish: "Ha intercambiado {0} monedas",
                    Russian: "\u0412\u044b \u043e\u0431\u043c\u0435\u043d\u044f\u043b\u0438 {0} \u043c\u043e\u043d\u0435\u0442"
                }, {
                    Key: "rankUnavailable",
                    English: "Coming Soon",
                    "Simplified Chinese": "\u656c\u8bf7\u671f\u5f85",
                    "Traditional Chinese": "\u656c\u8bf7\u671f\u5f85",
                    Japanese: "\u8fd1\u65e5\u516c\u958b",
                    Spanish: "Pr\xf3ximamente",
                    Russian: "\u0421\u043a\u043e\u0440\u043e \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u0441\u044f"
                }, {
                    Key: "main-buy-plant-tip",
                    English: "Tap to get more Guardians",
                    "Simplified Chinese": "\u70b9\u51fb\u8d2d\u4e70\u66f4\u591a\u5b88\u62a4\u8005",
                    "Traditional Chinese": "\u70b9\u51fb\u8d2d\u4e70\u66f4\u591a\u5b88\u62a4\u8005",
                    Japanese: "\u30bf\u30c3\u30d7\u3057\u3066\u30ac\u30fc\u30c7\u30a3\u30a2\u30f3\u3092\u5165\u624b",
                    Spanish: "Toca para obtener m\xe1s guardianes",
                    Russian: "\u0411\u043e\u043b\u044c\u0448\u0435 \u0432\u043e\u0439\u0441\u043a"
                }, {
                    Key: "main-rage-tip",
                    English: "Activate rage mode to attack the enemy",
                    "Simplified Chinese": "\u6fc0\u6d3b\u66b4\u6012\u52a0\u901f\u653b\u51fb\u602a\u7269",
                    "Traditional Chinese": "\u6fc0\u6d3b\u66b4\u6012\u52a0\u901f\u653b\u51fb\u602a\u7269",
                    Japanese: "\u30ec\u30a4\u30b8\u3092\u767a\u52d5\u3057\u3066\u6575\u3092\u653b\u6483",
                    Spanish: "Activar el modo de rabia para atacar al enemigo",
                    Russian: "\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0440\u0435\u0436\u0438\u043c \u0434\u0438\u043a\u043e\u0441\u0442\u0438 \u0434\u043b\u044f \u0430\u0442\u0430\u043a\u0438 \u043d\u0430 \u0432\u0440\u0430\u0433\u043e\u0432"
                }, {
                    Key: "main-rubbishTip",
                    English: "Drag Guardian here to recycle",
                    "Simplified Chinese": "\u53ef\u4ee5\u5c06\u5b88\u62a4\u8005\u62d6\u52a8\u5230\u8fd9\u91cc\u56de\u6536",
                    "Traditional Chinese": "\u53ef\u4ee5\u5c06\u5b88\u62a4\u8005\u62d6\u52a8\u5230\u8fd9\u91cc\u56de\u6536",
                    Japanese: "\u3053\u3053\u3067\u30ac\u30fc\u30c7\u30a3\u30a2\u30f3\u3092\u30ea\u30b5\u30a4\u30af\u30eb\u3059\u308b",
                    Spanish: "Arrastre Guardi\xe1n aqu\xed para reciclar",
                    Russian: "\u041f\u0435\u0440\u0435\u0442\u044f\u043d\u0438\u0442\u0435 \u0417\u0430\u0449\u0438\u0442\u043d\u0438\u043a\u0430 \u0441\u044e\u0434\u0430, \u0447\u0442\u043e\u0431\u044b \u0435\u0433\u043e \u0441\u0434\u0430\u0442\u044c"
                }, {
                    Key: "main-rage-tip",
                    English: "Boost Attack",
                    "Simplified Chinese": "\u70b9\u6211\u52a0\u901f\u653b\u51fb",
                    "Traditional Chinese": "\u70b9\u6211\u52a0\u901f\u653b\u51fb",
                    Japanese: "\u653b\u6483\u30b9\u30d4\u30fc\u30c9UP",
                    Spanish: "impulsar Ataque",
                    Russian: "\u0423\u043b\u0443\u0447\u0448\u0438\u0442\u044c \u0410\u0442\u0430\u043a\u0443"
                }, {
                    Key: "need-to-complete-guide",
                    English: "Please finish the tutorial!",
                    "Simplified Chinese": "\u5f15\u5bfc\u672a\u5b8c\u6210\uff0c\u8bf7\u5b8c\u6210\u5f15\u5bfc",
                    "Traditional Chinese": "\u5f15\u5bfc\u672a\u5b8c\u6210\uff0c\u8bf7\u5b8c\u6210\u5f15\u5bfc",
                    Japanese: "\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3092\u5b8c\u4e86\u3057\u3088\u3046",
                    Spanish: "Por favor, termina el tutorial!",
                    Russian: "\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0435 \u0442\u0443\u0442\u043e\u0440\u0438\u0430\u043b!"
                }, {
                    Key: "guide-move-plant",
                    English: "Move me to fight!",
                    "Simplified Chinese": "\u79fb\u52a8\u4f4d\u7f6e\u66f4\u597d\u653b\u51fb",
                    "Traditional Chinese": "\u79fb\u52a8\u4f4d\u7f6e\u66f4\u597d\u653b\u51fb",
                    Japanese: "\u79fb\u52d5\u3057\u3066\u6575\u3092\u653b\u6483",
                    Spanish: "cambiarme a la lucha!",
                    Russian: "\u041f\u0435\u0440\u0435\u0434\u0432\u0438\u043d\u044c\u0442\u0435 \u043c\u0435\u043d\u044f \u0434\u043b\u044f \u0431\u043e\u044f!"
                }, {
                    Key: "not-supported",
                    English: "Coming Soon",
                    "Simplified Chinese": "\u656c\u8bf7\u671f\u5f85",
                    "Traditional Chinese": "\u656c\u8bf7\u671f\u5f85",
                    Japanese: "\u8fd1\u65e5\u516c\u958b",
                    Spanish: "Pr\xf3ximamente",
                    Russian: "\u0421\u043a\u043e\u0440\u043e \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u0441\u044f"
                }, {
                    Key: "exchange-tip",
                    English: "You need to unlock level 4 Guardian to activate this feature",
                    "Simplified Chinese": "\u4f60\u7684\u7b49\u7ea7\u4e0d\u591f",
                    "Traditional Chinese": "\u4f60\u7684\u7b49\u7ea7\u4e0d\u591f",
                    Japanese: "\u30b3\u30a4\u30f3\u4ea4\u63db\u3092\u4f7f\u7528\u3059\u308b\u306b\u306f\u30ec\u30d9\u30eb\uff17\u304c\u5fc5\u8981",
                    Spanish: "Que necesita para alcanzar el nivel 7 para activar esta funci\xf3n",
                    Russian: "\u041d\u0443\u0436\u043d\u043e \u043e\u0442\u043a\u0440\u044b\u0442\u044c \u0417\u0430\u0449\u0438\u0442\u043d\u0438\u043a\u0430 4-\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f \u0434\u043b\u044f \u0430\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u0438"
                }, {
                    Key: "coinExchange-max",
                    English: "Your reached the cap of currency exchange today!",
                    "Simplified Chinese": "\u5df2\u8fbe\u5230\u4eca\u65e5\u6700\u5927\u5151\u6362\u6b21\u6570",
                    "Traditional Chinese": "\u5df2\u8fbe\u5230\u4eca\u65e5\u6700\u5927\u5151\u6362\u6b21\u6570",
                    Japanese: "\u672c\u65e5\u306e\u4ea4\u63db\u56de\u6570\u306f\u4e0a\u9650\u306b\u5230\u9054\uff01",
                    Spanish: "Su alcanzado el l\xedmite de cambio de divisas hoy!",
                    Russian: "\u0412\u044b \u0438\u0441\u0447\u0435\u0440\u043f\u0430\u043b\u0438 \u0441\u0435\u0433\u043e\u0434\u043d\u044f\u0448\u043d\u0438\u0439 \u043b\u0438\u043c\u0438\u0442 \u043e\u0431\u043c\u0435\u043d\u0430!\n \u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0439\u0442\u0435\u0441\u044c \u0437\u0430\u0432\u0442\u0440\u0430!"
                }, {
                    Key: "main-vip",
                    English: "VIP",
                    "Simplified Chinese": "VIP",
                    "Traditional Chinese": "VIP",
                    Japanese: "VIP",
                    Spanish: "VIP",
                    Russian: "VIP"
                }, {
                    Key: "payment-successful",
                    English: "Payment Succeeded ",
                    "Simplified Chinese": "\u8d2d\u4e70\u6210\u529f",
                    "Traditional Chinese": "\u8d2d\u4e70\u6210\u529f",
                    Japanese: "\u652f\u6255\u3044\u5b8c\u4e86",
                    Spanish: "Pago exitoso",
                    Russian: "\u041f\u043b\u0430\u0442\u0435\u0436 \u0423\u0441\u043f\u0435\u0448\u043d\u044b\u0439"
                }, {
                    Key: "payment-failed",
                    English: "Payment Failed",
                    "Simplified Chinese": "\u8d2d\u4e70\u5931\u8d25",
                    "Traditional Chinese": "\u8d2d\u4e70\u5931\u8d25",
                    Japanese: "\u652f\u6255\u3044\u5931\u6557",
                    Spanish: "Pago fallido",
                    Russian: "\u041f\u043b\u0430\u0442\u0435\u0436 \u041d\u0435 \u0421\u0440\u0430\u0431\u043e\u0442\u0430\u043b"
                }, {
                    Key: "vip-tip",
                    English: "Come back tomorrow!",
                    "Simplified Chinese": "\u6b22\u8fce\u660e\u5929\u518d\u6765\uff01",
                    "Traditional Chinese": "\u6b22\u8fce\u660e\u5929\u518d\u6765\uff01",
                    Japanese: "\u307e\u305f\u660e\u65e5\u3082\u6765\u3066\u306d\uff01",
                    Spanish: "\xa1Vuelve ma\xf1ana!",
                    Russian: "\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0439\u0442\u0435\u0441\u044c \u0437\u0430\u0432\u0442\u0440\u0430!"
                }, {
                    Key: "shopItem-coming-soon",
                    English: "Coming soon in next update!",
                    "Simplified Chinese": "\u656c\u8bf7\u671f\u5f85\u4e0b\u6b21\u66f4\u65b0\uff01",
                    "Traditional Chinese": "\u656c\u8bf7\u671f\u5f85\u4e0b\u6b21\u66f4\u65b0\uff01",
                    Japanese: "\u6b21\u56de\u306e\u66f4\u65b0\u3067\u8fd1\u65e5\u516c\u958b\uff01",
                    Spanish: "Pr\xf3ximamente en la pr\xf3xima actualizaci\xf3n!",
                    Russian: "\u0421\u043a\u043e\u0440\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u0441\u044f \u0432 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u043c \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438!"
                }, {
                    Key: "signIn-tip",
                    English: "Play every day to earn great bonuses!",
                    "Simplified Chinese": "\u6bcf\u65e5\u767b\u9646\u9886\u53d6\u5b9d\u77f3\u5956\u52b1\uff01",
                    "Traditional Chinese": "\u6bcf\u65e5\u767b\u9646\u9886\u53d6\u5b9d\u77f3\u5956\u52b1\uff01",
                    Japanese: "\u6bce\u65e5\u30d7\u30ec\u30fc\u3057\u3066\u30dc\u30fc\u30ca\u30b9\u3092\u30b2\u30c3\u30c8\uff01",
                    Spanish: "Jugar todos los d\xedas para ganar grandes primas!",
                    Russian: "\u0418\u0433\u0440\u0430\u0439\u0442\u0435 \u043a\u0430\u0436\u0434\u044b\u0439 \u0434\u0435\u043d\u044c \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u043a\u0440\u0443\u0442\u044b\u0445 \u0431\u043e\u043d\u0443\u0441\u043e\u0432"
                }, {
                    Key: "fairyGift-tip",
                    English: "GET {0} GUARDIANS TO \nBOOST YOUR DEFENSES",
                    "Simplified Chinese": "\u53ec\u5524{0}\u5b88\u62a4\u8005 \n \u52a0\u5f3a\u9632\u5fa1",
                    "Traditional Chinese": "\u53ec\u5524{0}\u5b88\u62a4\u8005 \n \u52a0\u5f3a\u9632\u5fa1",
                    Japanese: "\u30ac\u30fc\u30c7\u30a3\u30a2\u30f3\u3092{0}\u5339\u7372\u5f97\u3057\u3066\n\u9632\u5fa1\u529b\u3092\u30a2\u30c3\u30d7\u3057\u3088\u3046",
                    Spanish: "GET {0} tutores  nBOOST sus defensas",
                    Russian: "\u041f\u041e\u041b\u0423\u0427\u0418\u0422\u042c {0} \u0417\u0410\u0429\u0418\u0422\u041d\u0418\u041a\u041e\u0412 \n \u0414\u041b\u042f \u0423\u0421\u0418\u041b\u0415\u041d\u0418\u042f \u0417\u0410\u0429\u0418\u0422\u042b"
                }, {
                    Key: "getPlant-previousLevel",
                    English: "Previous",
                    "Simplified Chinese": "\u4e0a\u4e00\u7ea7",
                    "Traditional Chinese": "\u4e0a\u4e00\u7ea7",
                    Japanese: "\u524d\u306e\u30ec\u30d9\u30eb",
                    Spanish: "Anterior",
                    Russian: "\u041f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0439"
                }, {
                    Key: "btn-get",
                    English: "Get",
                    "Simplified Chinese": "\u83b7\u53d6",
                    "Traditional Chinese": "\u83b7\u53d6",
                    Japanese: "\u30b2\u30c3\u30c8",
                    Spanish: "Obtener",
                    Russian: "\u0412\u0437\u044f\u0442\u044c"
                }, {
                    Key: "btn-ok",
                    English: "OK",
                    "Simplified Chinese": "OK",
                    "Traditional Chinese": "OK",
                    Japanese: "OK",
                    Spanish: "Okay",
                    Russian: "\u041e\u041a"
                }, {
                    Key: "beCleared-tip",
                    English: "Thank you for coming to Nature\u2019s defense and unlocking the highest level of Natural Guardian Spirits. \nThe MuckMonger Pollution Army will continue to threaten Nature so we are busy recruiting even more powerful Guardians to join in the fight!\nStay with us for the next update!",
                    "Simplified Chinese": "\u611f\u8c22\u60a8\u957f\u4e45\u4ee5\u6765\u7684\u966a\u4f34\uff01 \n\u60a8\u5df2\u89e3\u9501\u5f53\u524d\u6700\u9ad8\u7b49\u7ea7\u7684\u5b88\u62a4\u8005\uff0c\u4f46\u662f\u6c61\u67d3\u519b\u56e2\u4f9d\u7136\u5728\u4e0d\u65ad\u7684\u653b\u51fb\u6211\u4eec\u3002\n \u6211\u4eec\u5c06\u5728\u4e0b\u6b21\u66f4\u65b0\u4e2d\u53ec\u5524\u66f4\u5f3a\u5927\u7684\u5b88\u62a4\u8005\u6765\u5e2e\u60a8\u5b88\u536b\u5927\u81ea\u7136\uff0c\u656c\u8bf7\u671f\u5f85\uff01",
                    "Traditional Chinese": "\u611f\u8c22\u60a8\u957f\u4e45\u4ee5\u6765\u7684\u966a\u4f34\uff01 \n\u60a8\u5df2\u89e3\u9501\u5f53\u524d\u6700\u9ad8\u7b49\u7ea7\u7684\u5b88\u62a4\u8005\uff0c\u4f46\u662f\u6c61\u67d3\u602a\u7269\u519b\u56e2\u4f9d\u7136\u5728\u4e0d\u65ad\u7684\u653b\u51fb\u6211\u4eec\u3002 \n \u6211\u4eec\u5c06\u5728\u4e0b\u6b21\u66f4\u65b0\u4e2d\u53ec\u5524\u66f4\u5f3a\u5927\u7684\u5b88\u62a4\u8005\u6765\u5e2e\u60a8\u4fdd\u62a4\u5927\u81ea\u7136\uff0c\u656c\u8bf7\u671f\u5f85\uff01",
                    Japanese: "\u9577\u304f\u4ed8\u304d\u5408\u3063\u3066\u304d\u3066\u3042\u308a\u304c\u3068\u3046\uff01\n \u6700\u9ad8\u30ec\u30d9\u30eb\u306e\u30ac\u30fc\u30c7\u30a3\u30a2\u30f3\u3092\u30a2\u30f3\u30ed\u30c3\u30af\u3067\u304d\u307e\u3057\u305f\u304c\u3001\u6c5a\u30e2\u30f3\u30b9\u30bf\u30fc\u8ecd\u56e3\u306e\u8972\u6483\u306f\u307e\u3060\u307e\u3060\u6b62\u307e\u3089\u306a\u3044\u3002 \n\u6b21\u56de\u306e\u66f4\u65b0\u3067\u306f\u66f4\u306b\u5f37\u529b\u306a\u30ac\u30fc\u30c7\u30a3\u30a2\u30f3\u3092\u53ec\u559a\u3059\u308b\u306e\u3067\u662f\u975e\u304a\u697d\u3057\u307f\u306b\uff01",
                    Spanish: "Gracias por venir a la defensa de la naturaleza y desbloquear el nivel m\xe1s alto de Naturales Bebidas espirituosas de guarda usted.  NLa MuckMonger Ej\xe9rcito contaminaci\xf3n seguir\xe1 amenazando la naturaleza por lo que estamos ocupados de reclutamiento a\xfan m\xe1s poderosos guardianes para unirse en la lucha!  Nstay con nosotros para la pr\xf3xima actualizaci\xf3n!",
                    Russian: "\u0421\u043f\u0430\u0441\u0438\u0431\u043e, \u0447\u0442\u043e \u043f\u0440\u0438\u0448\u043b\u0438 \u043d\u0430 \u043f\u043e\u043c\u043e\u0449\u044c \u041f\u0440\u0438\u0440\u043e\u0434\u0435 \u0438 \u043e\u0442\u043a\u0440\u044b\u043b\u0438 \u043d\u0430\u0438\u0432\u044b\u0441\u0448\u0438\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u0417\u0430\u0449\u0438\u0442\u043d\u0438\u043a\u043e\u0432. \n \u0410\u0440\u043c\u0438\u044f \u041d\u0435\u0447\u0438\u0441\u0442\u0438 \u0431\u0443\u0434\u0435\u0442 \u0434\u0430\u043b\u044c\u0448\u0435 \u0441\u0442\u0430\u0432\u0438\u0442\u044c \u041f\u0440\u0438\u0440\u043e\u0434\u0443 \u043f\u043e\u0434 \u0443\u0433\u0440\u043e\u0437\u0443, \u0442\u0430\u043a \u0447\u0442\u043e \u043c\u044b \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u043c \u043d\u0430\u0434 \u043d\u0430\u0435\u043c\u043e\u043c \u0435\u0449\u0451 \u0431\u043e\u043b\u0435\u0435 \u0441\u0438\u043b\u044c\u043d\u044b\u0445 \u0417\u0430\u0449\u0438\u0442\u043d\u0438\u043a\u043e\u0432 \u0434\u043b\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0439 \u0441\u0445\u0432\u0430\u0442\u043a\u0438! \n \u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435 \u043e\u0431\u043d\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0443\u0436\u0435 \u043d\u0435 \u0437\u0430 \u0433\u043e\u0440\u0430\u043c\u0438!"
                }, {
                    Key: "vip-price",
                    English: "3 DAY FREE TRIAL, THEN {0} PER WEEK",
                    "Simplified Chinese": "\u524d\u4e09\u5929\u514d\u8d39\u8bd5\u7528\uff0c\u4e4b\u540e\u6bcf\u4e2a\u661f\u671f{0}",
                    "Traditional Chinese": "\u524d\u4e09\u5929\u514d\u8d39\u8bd5\u7528\uff0c\u4e4b\u540e\u6bcf\u4e2a\u661f\u671f{0}",
                    Japanese: "\u7121\u6599\u30c8\u30e9\u30a4\u30a2\u30eb\uff13\u65e5\u9593\u3001\u305d\u306e\u5f8c\u306f\u6bce\u9031 {0} ",
                    Spanish: "3 D\xedas de Evaluaci\xf3n, ENTONCES {0} por semana",
                    Russian: "3 \u0414\u041d\u042f \u0411\u0415\u0421\u041f\u041b\u0410\u0422\u041d\u0410\u042f \u0414\u0415\u041c\u041e-\u0412\u0415\u0420\u0421\u0418\u042f, \u041f\u041e\u0422\u041e\u041c {0} \u0417\u0410 \u041d\u0415\u0414\u0415\u041b\u042e"
                }, {
                    Key: "vip-des",
                    English: "VIP offers a weekly subscription for {0} after a 3 day free trial. During subscription period, the following privileges will be provided\uff1a\n1. Unlock Fort \n2. Free to claim 30 Gems/day \n3. Remove banner/interstitial Ads \n4. Triple the reward of Offline Earnings, Daily Bonuses and Mission Rewards. \nPayment will be charged to your {1} account at the confirmation of purchase. Subscription automatically renews unless it is cancelled at least 24-hours before the end of the current period. Your account will be charged for renewal within 24 hours prior to the end of the current period. You can manage and cancel your subscriptions in your account settings on the {2} after purchase.",
                    "Simplified Chinese": "VIP\u8ba2\u9605\u63d0\u4f9b3\u5929\u514d\u8d39\u8bd5\u7528\uff0c\u4e09\u5929\u540e\u6bcf\u5468\u6536\u53d6{0}\u7684\u8d39\u7528\u3002\u8ba2\u9605\u671f\u95f4\u4eab\u53d7\u4e0b\u5217\u670d\u52a1\uff1a\n1. \u89e3\u9501\u70ae\u53f0 \n2. \u6bcf\u65e5\u514d\u8d39\u9886\u53d630\u679a\u5b9d\u77f3\n3.\u79fb\u9664\u6a2a\u5e45\u5e7f\u544a\u548c\u63d2\u5c4f\u5e7f\u544a\n4. \u79bb\u7ebf\u5956\u52b1\uff0c\u6bcf\u65e5\u5956\u52b1\u548c\u4efb\u52a1\u5956\u52b13\u500d\u9886\u53d6\n\u8d2d\u4e70\u5b8c\u6210\u540e\uff0c\u8d39\u7528\u5c06\u76f4\u63a5\u4ece\u60a8\u7684{1}\u8d26\u6237\u4e2d\u6263\u9664\u3002\u5982\u679c\u60a8\u672a\u53d6\u6d88\uff0c\u5219\u8ba2\u9605\u5c06\u5728\u5230\u671f\u524d24\u5c0f\u65f6\u81ea\u52a8\u7eed\u671f\u5e76\u652f\u4ed8\u4e0b\u4e00\u8ba2\u9605\u5468\u671f\u7684\u8d39\u7528\u3002\u60a8\u53ef\u4ee5\u5728{2}\u7684\u8d2d\u4e70\u6216\u8ba2\u9605\u76f8\u5173\u7684\u8bbe\u7f6e\u83dc\u5355\u4e2d\u7ba1\u7406\u6216\u53d6\u6d88\u60a8\u7684\u8ba2\u9605\u3002",
                    "Traditional Chinese": "VIP\u8ba2\u9605\u63d0\u4f9b3\u5929\u514d\u8d39\u8bd5\u7528\uff0c\u4e09\u5929\u540e\u6bcf\u5468\u6536\u53d6{0}\u7684\u8d39\u7528\u3002\u8ba2\u9605\u671f\u95f4\u4eab\u53d7\u4e0b\u5217\u670d\u52a1\uff1a\n1. \u89e3\u9501\u70ae\u53f0\n2. \u6bcf\u65e5\u514d\u8d39\u9886\u53d630\u679a\u5b9d\u77f3\n3.\u79fb\u9664\u6a2a\u5e45\u5e7f\u544a\u548c\u63d2\u5c4f\u5e7f\u544a\n4. \u79bb\u7ebf\u5956\u52b1\uff0c\u6bcf\u65e5\u5956\u52b1\u548c\u4efb\u52a1\u5956\u52b13\u500d\u9886\u53d6\n\u8d2d\u4e70\u5b8c\u6210\u540e\uff0c\u8d39\u7528\u5c06\u76f4\u63a5\u4ece\u60a8\u7684{1}\u8d26\u6237\u4e2d\u6263\u9664\u3002\u5982\u679c\u60a8\u672a\u53d6\u6d88\uff0c\u5219\u8ba2\u9605\u5c06\u5728\u5230\u671f\u524d24\u5c0f\u65f6\u81ea\u52a8\u7eed\u671f\u5e76\u652f\u4ed8\u4e0b\u4e00\u8ba2\u9605\u5468\u671f\u7684\u8d39\u7528\u3002\u60a8\u53ef\u4ee5\u5728{2}\u7684\u8d2d\u4e70\u6216\u8ba2\u9605\u76f8\u5173\u7684\u8bbe\u7f6e\u83dc\u5355\u4e2d\u7ba1\u7406\u6216\u53d6\u6d88\u60a8\u7684\u8ba2\u9605\u3002",
                    Japanese: "VIP\u306f\u9031\u3054\u3068\u306e\u30b5\u30d6\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u3067\u3059\u3002\uff13\u65e5\u9593\u306e\u7121\u6599\u30c8\u30e9\u30a4\u30a2\u30eb\u5f8c\u3001\u6bce\u9031 {0}\u306e\u4f1a\u8cbb\u304c\u767a\u751f\u3057\u307e\u3059 \u3002VIP\u4f1a\u54e1\u306b\u306f\u6b21\u306e\u7279\u5178\u304c\u3042\u308a\u307e\u3059\u3002\n1. \u8981\u585e\u3092\u30a2\u30f3\u30ed\u30c3\u30af \n2. \u6bce\u65e5\u7121\u6599\u3067\u5b9d\u77f330\u500b\u7372\u5f97\u30c1\u30e3\u30f3\u30b9 \n3. \u5e83\u544a\u3092\u975e\u8868\u793a \n4. \u30aa\u30d5\u30e9\u30a4\u30f3\u5831\u916c\u3001\u30c7\u30a4\u30ea\u30fc\u30dc\u30fc\u30ca\u30b9\u3001\u30df\u30c3\u30b7\u30e7\u30f3\u5831\u916c\u304c\u5168\u30663\u500d \n\u304a\u652f\u6255\u3044\u65b9\u6cd5\u306f\u8cfc\u5165\u627f\u8a8d\u6642\u306b {1} \u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u30c1\u30e3\u30fc\u30b8\u3055\u308c\u307e\u3059\u3002\u30b5\u30d6\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u306f\u3001\u5951\u7d04\u671f\u9593\u306e\u7d42\u4e86\u65e5\u306e24\u6642\u9593\u4ee5\u4e0a\u524d\u306b\u89e3\u7d04\u3055\u308c\u306a\u3044\u9650\u308a\u81ea\u52d5\u66f4\u65b0\u3055\u308c\u307e\u3059\u3002 \u89e3\u7d04\u3057\u306a\u3044\u5834\u5408\u3001\u7d42\u4e86\u65e5\u306e24\u6642\u9593\u4ee5\u5185\u306b\u66f4\u65b0\u6599\u91d1\u304c\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u30c1\u30e3\u30fc\u30b8\u3055\u308c\u307e\u3059\u3002\u89e3\u7d04\u624b\u7d9a\u304d\u306f\u8cfc\u5165\u5f8c\u306b {2}\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u8a2d\u5b9a\u753b\u9762\u306b\u3066\u7ba1\u7406\u3067\u304d\u307e\u3059\u3002",
                    Spanish: "VIP ofrece una suscripci\xf3n semanal para {0} despu\xe9s de una prueba gratuita de 3 d\xedas. Durante el per\xedodo de suscripci\xf3n, se proporcionar\xe1n los siguientes privilegios:  n 1. Desbloquear Fort  n2. Libre de la reivindicaci\xf3n 30 Gems / d\xeda  n3. Retire la bandera / Anuncios intersticiales  n4. Duplicar la recompensa de ganancias fuera de l\xednea, bonos diarios y recompensas de la misi\xf3n.  NPayment ser\xe1 cargado a su cuenta {1} en la confirmaci\xf3n de la compra. Suscripci\xf3n se renueva autom\xe1ticamente a menos que se cancela al menos 24 horas antes del final del per\xedodo actual. Su cuenta ser\xe1 cargada para la renovaci\xf3n dentro de las 24 horas previas a la final del per\xedodo actual. Puede gestionar y cancelar sus suscripciones en la configuraci\xf3n de su cuenta en la {2} despu\xe9s de la compra.",
                    Russian: "VIP - \u044d\u0442\u043e \u0435\u0436\u0435\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0430\u044f \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0430 \u0437\u0430 {0} \u043f\u043e\u0441\u043b\u0435 3-\u0445 \u0434\u043d\u0435\u0432\u043d\u043e\u0439 \u0434\u0435\u043c\u043e-\u0432\u0435\u0440\u0441\u0438\u0438. \u0412\u043e \u0432\u0440\u0435\u043c\u044f \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0438, \u0432\u044b\u0434\u0430\u044e\u0442\u0441\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u043f\u0440\u0438\u0432\u0435\u043b\u0435\u0433\u0438\u0438: \n1. \u041e\u0442\u043a\u0440\u044b\u0442\u0438\u0435 \u0424\u043e\u0440\u0442\u0430 \n2. \u0412\u044b\u0434\u0430\u0447\u0430 30 \u0436\u0435\u043c\u0447\u0443\u0436\u0438\u043d \u0432 \u0434\u0435\u043d\u044c \n3. \u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0431\u0430\u043d\u043d\u0435\u0440\u043e\u0432 \u0438 \u043c\u0435\u0436\u0441\u0442\u0440\u0430\u043d\u0438\u0447\u043d\u044b\u044a \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0439. \n4. \u0422\u0440\u043e\u0439\u043d\u044b\u0435 \u043e\u0444\u0444\u043b\u0430\u0439\u043d-\u0437\u0430\u0440\u0430\u0431\u043e\u0442\u043a\u0438, \u0434\u043d\u0435\u0432\u043d\u044b\u0435 \u0431\u043e\u043d\u0443\u0441\u044b \u0438 \u043d\u0430\u0433\u0440\u0430\u0434\u044b \u0437\u0430 \u043c\u0438\u0441\u0441\u0438\u0438. \n\u041f\u043b\u0430\u0442\u0451\u0436 \u0431\u0443\u0434\u0435\u0442 \u0441\u043d\u044f\u0442 \u0441 \u0432\u0430\u0448\u0435\u0433\u043e {1} \u0441\u0447\u0451\u0442\u0430 \u0432 \u043c\u043e\u043c\u0435\u043d\u0442 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f \u043f\u043e\u043a\u0443\u043f\u043a\u0438. \u041f\u043e\u0434\u043f\u0438\u0441\u043a\u0430 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u0442\u0441\u044f, \u0435\u0441\u043b\u0438 \u0435\u0451 \u043d\u0435 \u043e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u0437\u0430 24 \u0447\u0430\u0441\u0430 \u0434\u043e \u0438\u0441\u0442\u0435\u0447\u0435\u043d\u0438\u044f \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u043f\u0435\u0440\u0438\u043e\u0434\u0430. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0438\u043b\u0438 \u043e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0438 \u0432 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u0445 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430 \u043d\u0430 {2} \u043f\u043e\u0441\u043b\u0435 \u043f\u043e\u043a\u0443\u043f\u043a\u0438. "
                }, {
                    Key: "guide-unlock-tip",
                    English: "Tap to unlock new plot!",
                    "Simplified Chinese": "\u70b9\u51fb\u89e3\u9501\u65b0\u7684\u571f\u5730",
                    "Traditional Chinese": "\u70b9\u51fb\u89e3\u9501\u65b0\u7684\u571f\u5730",
                    Japanese: "\u30bf\u30c3\u30d7\u3057\u3066\u571f\u5730\u3092\u30a2\u30f3\u30ed\u30c3\u30af",
                    Spanish: "Toque para desbloquear nueva parcela!",
                    Russian: "\u0416\u043c\u0438\u0442\u0435, \u0447\u0442\u043e\u0431\u044b \u043e\u0442\u043a\u0440\u044b\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u0443\u0447\u0430\u0441\u0442\u043e\u043a!"
                }, {
                    Key: "vip-double-tip",
                    English: "Double reward for VIP",
                    "Simplified Chinese": "VIP\u52a0\u500d\u7279\u6743",
                    "Traditional Chinese": "VIP\u52a0\u500d\u7279\u6743",
                    Japanese: "VIP\u4f1a\u54e1\u5831\u916c\uff12\u500d",
                    Spanish: "Doble recompensa para VIP",
                    Russian: "\u0414\u0432\u043e\u0439\u043d\u0430\u044f \u043d\u0430\u0433\u0440\u0430\u0434\u0430 \u0437\u0430 VIP"
                }, {
                    Key: "offline-double-tip",
                    English: "Offline Earning is doubled",
                    "Simplified Chinese": "\u52a0\u500d\u9886\u53d6",
                    "Traditional Chinese": "\u52a0\u500d\u9886\u53d6",
                    Japanese: "\u5831\u916c\uff12\u500d",
                    Spanish: "doble Recompensa",
                    Russian: "\u041e\u0444\u0444\u043b\u0430\u0439\u043d \u0417\u0430\u0440\u0430\u0431\u043e\u0442\u043e\u043a \u0443\u0434\u0432\u043e\u0435\u043d"
                }, {
                    Key: "starterBundles0title",
                    English: "Starter Bundles",
                    "Simplified Chinese": "\u5927\u793c\u5305",
                    "Traditional Chinese": "\u5927\u793c\u5305",
                    Japanese: "\u30b9\u30bf\u30fc\u30bf\u30fc\u30d1\u30c3\u30af",
                    Spanish: "Los paquetes de arranque",
                    Russian: "\u041d\u0430\u0447\u0430\u043b\u044c\u043d\u044b\u0435 \u041f\u0430\u043a\u0435\u0442\u044b"
                }, {
                    Key: "already-subscribed-vip",
                    English: "This product is already included in your VIP Subscription.",
                    "Simplified Chinese": "\u60a8\u7684VIP\u8ba2\u9605\u4e2d\u5df2\u5305\u542b\u6b64\u670d\u52a1",
                    "Traditional Chinese": "\u60a8\u7684VIP\u8ba2\u9605\u4e2d\u5df2\u5305\u542b\u6b64\u670d\u52a1",
                    Japanese: "\u3053\u3061\u3089\u306e\u5546\u54c1\u306fVIP\u30d1\u30c3\u30af\u306b\u542b\u307e\u308c\u3066\u3044\u307e\u3059",
                    Spanish: "Este producto ya est\xe1 incluido en tu suscripci\xf3n VIP.",
                    Russian: "\u042d\u0442\u043e\u0442 \u043f\u0440\u043e\u0434\u0443\u043a\u0442 \u0443\u0436\u0435 \u0432\u043a\u043b\u044e\u0447\u0435\u043d \u0432 \u0432\u0430\u0448\u0435\u0439 VIP \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0435"
                }, {
                    Key: "already-subscribed",
                    English: "You already purchased this product.",
                    "Simplified Chinese": "\u60a8\u5df2\u7ecf\u8d2d\u4e70\u4e86\u6b64\u4ea7\u54c1",
                    "Traditional Chinese": "\u60a8\u5df2\u7ecf\u8d2d\u4e70\u4e86\u6b64\u4ea7\u54c1",
                    Japanese: "\u3053\u3061\u3089\u306e\u5546\u54c1\u306f\u8cfc\u5165\u6e08\u307f\u3067\u3059",
                    Spanish: "Ya ha adquirido este producto.",
                    Russian: "\u0412\u044b \u0443\u0436\u0435 \u043f\u0440\u0435\u043e\u0431\u0440\u0435\u043b\u0438 \u044d\u0442\u043e\u0442 \u043f\u0440\u043e\u0434\u0443\u043a\u0442"
                }, {
                    Key: "plantDetail-title",
                    English: "Nature Guardian",
                    "Simplified Chinese": "\u81ea\u7136\u5b88\u62a4\u8005",
                    "Traditional Chinese": "\u81ea\u7136\u5b88\u62a4\u8005",
                    Japanese: "\u30ac\u30fc\u30c7\u30a3\u30a2\u30f3",
                    Spanish: "Guardi\xe1n de la naturaleza",
                    Russian: "\u0417\u0430\u0449\u0438\u0442\u043d\u0438\u043a \u041f\u0440\u0438\u0440\u043e\u0434\u044b"
                }, {
                    Key: "plantDetail-tip",
                    English: "Unlocked",
                    "Simplified Chinese": "\u5df2\u89e3\u9501",
                    "Traditional Chinese": "\u5df2\u89e3\u9501",
                    Japanese: "\u30a2\u30f3\u30ed\u30c3\u30af\u6e08\u307f",
                    Spanish: "desbloqueado",
                    Russian: "\u041e\u0442\u043a\u0440\u044b\u0442\u043e"
                }, {
                    Key: "roulette-title",
                    English: "Roulette",
                    "Simplified Chinese": "\u81ea\u7136\u5927\u8f6c\u76d8",
                    "Traditional Chinese": "\u81ea\u7136\u5927\u8f6c\u76d8",
                    Japanese: "\u30eb\u30fc\u30ec\u30c3\u30c8",
                    Spanish: "Ruleta",
                    Russian: "\u0420\u0443\u043b\u0435\u0442\u043a\u0430"
                }, {
                    Key: "ad-tip",
                    English: "Ad initialization is not complete",
                    "Simplified Chinese": "\u5e7f\u544a\u64ad\u653e\u9519\u8bef",
                    "Traditional Chinese": "\u5e7f\u544a\u64ad\u653e\u9519\u8bef",
                    Japanese: "\u5e83\u544a\u304c\u8868\u793a\u3067\u304d\u307e\u305b\u3093",
                    Spanish: "inicializaci\xf3n del anuncio no es completa",
                    Russian: "\u0418\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0440\u0435\u043a\u043b\u0430\u043c\u044b \u043d\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u043b\u0430\u0441\u044c"
                }, {
                    Key: "ad-tip-2",
                    English: "Failed to load ads",
                    "Simplified Chinese": "\u5e7f\u544a\u52a0\u8f7d\u9519\u8bef",
                    "Traditional Chinese": "\u5e7f\u544a\u52a0\u8f7d\u9519\u8bef",
                    Japanese: "\u5e83\u544a\u304c\u8868\u793a\u3067\u304d\u307e\u305b\u3093",
                    Spanish: "No se ha podido anuncios de carga",
                    Russian: "\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0440\u0435\u043a\u043b\u0430\u043c\u0443"
                }, {
                    Key: "policy-label",
                    English: "PRIVACY POLICY",
                    "Simplified Chinese": "\u9690\u79c1\u653f\u7b56",
                    "Traditional Chinese": "\u9690\u79c1\u653f\u7b56",
                    Japanese: "\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc",
                    Spanish: "POL\xcdTICA DE PRIVACIDAD",
                    Russian: "\u041f\u041e\u041b\u0418\u0422\u0418\u041a\u0410 \u041a\u041e\u041d\u0424\u0418\u0414\u0415\u041d\u0426\u0418\u0410\u041b\u042c\u041d\u041e\u0421\u0422\u0418"
                }, {
                    Key: "and",
                    English: "AND",
                    "Simplified Chinese": "\u4ee5\u53ca",
                    "Traditional Chinese": "\u4ee5\u53ca",
                    Japanese: "\u53ca\u3073",
                    Spanish: "Y",
                    Russian: "\u0418"
                }, {
                    Key: "service-label",
                    English: "TERMS OF SERVICE",
                    "Simplified Chinese": "\u670d\u52a1\u6761\u6b3e",
                    "Traditional Chinese": "\u670d\u52a1\u6761\u6b3e",
                    Japanese: "\u5229\u7528\u898f\u7d04",
                    Spanish: "T\xc9RMINOS DE SERVICIO",
                    Russian: "\u0423\u0421\u041b\u041e\u0412\u0418\u042f \u041e\u0411\u0421\u041b\u0423\u0416\u0418\u0412\u0410\u041d\u0418\u042f"
                }, {
                    Key: "dailyBonusTip",
                    English: "Claim your Daily Bonuses!",
                    "Simplified Chinese": "\u9886\u53d6\u6bcf\u65e5\u5956\u52b1",
                    "Traditional Chinese": "\u9886\u53d6\u6bcf\u65e5\u5956\u52b1",
                    Japanese: "\u30c7\u30a4\u30ea\u30fc\u30dc\u30fc\u30ca\u30b9\u3092\u30b2\u30c3\u30c8\u3057\u3088\u3046\uff01",
                    Spanish: "Reclamar sus bonos diarios!",
                    Russian: "\u0412\u043e\u0437\u044c\u043c\u0438\u0442\u0435 \u0441\u0432\u043e\u0438 \u0414\u043d\u0435\u0432\u043d\u044b\u0435 \u0411\u043e\u043d\u0443\u0441\u044b!"
                }, {
                    Key: "taskTip",
                    English: "Claim your Mission Rewards!",
                    "Simplified Chinese": "\u9886\u53d6\u4efb\u52a1\u5956\u52b1",
                    "Traditional Chinese": "\u9886\u53d6\u4efb\u52a1\u5956\u52b1",
                    Japanese: "\u30df\u30c3\u30b7\u30e7\u30f3\u5831\u916c\u3092\u30b2\u30c3\u30c8\u3057\u3088\u3046\uff01",
                    Spanish: "Reclamar su misi\xf3n Rewards!",
                    Russian: "\u0412\u043e\u0437\u044c\u043c\u0438\u0442\u0435 \u0441\u0432\u043e\u0438 \u041d\u0430\u0433\u0440\u0430\u0434\u044b \u0437\u0430 \u041c\u0438\u0441\u0441\u0438\u0438!"
                }, {
                    Key: "zoomTip",
                    English: "You can zoom in/out here!",
                    "Simplified Chinese": "\u70b9\u51fb\u6b64\u5904\u653e\u5927\u7f29\u5c0f",
                    "Traditional Chinese": "\u70b9\u51fb\u6b64\u5904\u653e\u5927\u7f29\u5c0f",
                    Japanese: "\u3053\u3053\u3067\u8868\u793a\u753b\u9762\u3092\u62e1\u5927\u30fb\u7e2e\u5c0f\uff01",
                    Spanish: "Puede hacer zoom in / out aqu\xed!",
                    Russian: "\u041c\u043e\u0436\u0435\u0442\u0435 \u0443\u0432\u0435\u043b\u0438\u0447\u0438\u0442\u044c/\u0443\u043c\u0435\u043d\u044c\u0448\u0438\u0442\u044c \u0437\u0434\u0435\u0441\u044c"
                }, {
                    Key: "vip-tip-01",
                    English: "You need to subscribe vip first!",
                    "Simplified Chinese": "\u60a8\u9700\u8981\u8ba2\u9605VIP\u6765\u4f7f\u7528\u6b64\u529f\u80fd\uff01",
                    "Traditional Chinese": "\u60a8\u9700\u8981\u8ba2\u9605VIP\u6765\u4f7f\u7528\u6b64\u529f\u80fd\uff01",
                    Japanese: "VIP\u30b5\u30d6\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u304c\u5fc5\u8981\u3067\u3059\uff01",
                    Spanish: "Es necesario suscribirse vip primero!",
                    Russian: "\u0421\u043f\u0435\u0440\u0432\u0430 \u043d\u0443\u0436\u043d\u0430 VIP \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0430"
                }, {
                    Key: "unlock-fort-tip",
                    English: "Unlock Fort to fight the enemies!",
                    "Simplified Chinese": "\u89e3\u9501\u70ae\u53f0\u6765\u963b\u51fb\u602a\u7269\u5927\u519b\uff01",
                    "Traditional Chinese": "\u89e3\u9501\u70ae\u53f0\u6765\u963b\u51fb\u602a\u7269\u5927\u519b\uff01",
                    Japanese: "\u8981\u585e\u3092\u30a2\u30f3\u30ed\u30c3\u30af\u3057\u3066\u6575\u3068\u6226\u304a\u3046\uff01",
                    Spanish: "Desbloquear la fortaleza para luchar contra los enemigos!",
                    Russian: "\u041e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u0424\u043e\u0440\u0442, \u0447\u0442\u043e\u0431\u044b \u043e\u0442\u0431\u0438\u0442\u044c\u0441\u044f \u043e\u0442 \u0432\u0440\u0430\u0433\u043e\u0432"
                }, {
                    Key: "notification-title-1",
                    English: "Guardian Hint 1",
                    "Simplified Chinese": "\u5b88\u62a4\u8005\u79d8\u5bc6\u2460",
                    "Traditional Chinese": "\u5b88\u62a4\u8005\u79d8\u5bc6\u2460",
                    Japanese: "\u30ac\u30fc\u30c7\u30a3\u30a2\u30f3\u3000\u30d2\u30f3\u30c8\u2460",
                    Spanish: "Guardi\xe1n Pista 1",
                    Russian: "\u041f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0430 \u0417\u0430\u0449\u0438\u0442\u043d\u0438\u043a\u0430 1"
                }, {
                    Key: "notification-content-1",
                    English: "You can get double gems of daily bonus if you claim it between 5pm - 11pm!",
                    "Simplified Chinese": "\u6bcf\u65e5\u5956\u52b1\u572817:00~23:00\u53ef\u4ee5\u53cc\u500d\u9886\u53d6\uff01",
                    "Traditional Chinese": "\u6bcf\u65e5\u5956\u52b1\u572817:00~23:00\u53ef\u4ee5\u53cc\u500d\u9886\u53d6\uff01",
                    Japanese: "17\u6642\u301c23\u6642\u306b\u30ed\u30b0\u30a4\u30f3\u3059\u308b\u3068\u304c\u30c7\u30a4\u30ea\u30fc\u30dc\u30fc\u30ca\u30b9\u304c\uff12\u500d\u306b\uff01",
                    Spanish: "Puede obtener dobles gemas de bonificaci\xf3n al d\xeda, si usted afirma que entre 17:00-23:00!",
                    Russian: "\u041c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0432\u043e\u0439\u043d\u044b\u0435 \u0436\u0435\u043c\u0447\u0443\u0433\u0430 \u0434\u043d\u0435\u0432\u043d\u043e\u0433\u043e \u0431\u043e\u043d\u0443\u0441\u0430 \u043c\u0435\u0436\u0434\u0443 5-\u044e \u0438 11-\u044e \u0432\u0435\u0447\u0435\u0440\u0430"
                }, {
                    Key: "notification-title-2",
                    English: "Call for HELP!",
                    "Simplified Chinese": "\u8bf7\u6c42\u652f\u63f4\uff01",
                    "Traditional Chinese": "\u8bf7\u6c42\u652f\u63f4\uff01",
                    Japanese: "\u30d8\u30eb\u30d7\u3092\u8981\u8acb\uff01",
                    Spanish: "\xa1Llamar por ayuda!",
                    Russian: "\u041d\u0443\u0436\u043d\u0430 \u041f\u041e\u0414\u041c\u041e\u0413\u0410!"
                }, {
                    Key: "notification-content-2",
                    English: "Nature needs your help to defend against the MuckMonger Pollution Army!",
                    "Simplified Chinese": "\u5927\u81ea\u7136\u73b0\u5728\u9700\u8981\u4f60\u7684\u652f\u63f4\u6765\u62b5\u5fa1\u6c61\u67d3\u5927\u519b\uff01",
                    "Traditional Chinese": "\u5927\u81ea\u7136\u73b0\u5728\u9700\u8981\u4f60\u7684\u652f\u63f4\u6765\u62b5\u5fa1\u6c61\u67d3\u602a\u7269\u5927\u519b\uff01",
                    Japanese: "\u6c5a\u30e2\u30f3\u30b9\u30bf\u30fc\u8ecd\u56e3\u304b\u3089\u5927\u81ea\u7136\u3092\u5b88\u308d\u3046\uff01",
                    Spanish: "La naturaleza necesita su ayuda para defenderse contra el Ej\xe9rcito de la contaminaci\xf3n MuckMonger!",
                    Russian: "\u041f\u0440\u0438\u0440\u043e\u0434\u0435 \u043d\u0443\u0436\u043d\u0430 \u0412\u0430\u0448\u0430 \u043f\u043e\u043c\u043e\u0449\u044c, \u0447\u0442\u043e\u0431\u044b \u043e\u0442\u0431\u0438\u0442\u044c\u0441\u044f \u043e\u0442 \u0410\u0440\u043c\u0438\u0438 \u041d\u0435\u0447\u0438\u0441\u0442\u0438!"
                }, {
                    Key: "notification-title-3",
                    English: "Guardian Hint 2",
                    "Simplified Chinese": "\u5b88\u62a4\u8005\u79d8\u5bc6\u2461",
                    "Traditional Chinese": "\u5b88\u62a4\u8005\u79d8\u5bc6\u2461",
                    Japanese: "\u30ac\u30fc\u30c7\u30a3\u30a2\u30f3\u3000\u30d2\u30f3\u30c8\u2461",
                    Spanish: "Guardi\xe1n Pista 2",
                    Russian: "\u041f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0430 \u0417\u0430\u0449\u0438\u0442\u043d\u0438\u043a\u0430 1"
                }, {
                    Key: "notification-content-3",
                    English: "Try a new Guardian layout strategy and defend Nature from the MuckMonger Pollution Army!",
                    "Simplified Chinese": "\u5c1d\u8bd5\u65b0\u7684\u4f4d\u7f6e\u7b56\u7565\u6765\u66f4\u597d\u7684\u62b5\u5fa1\u6c61\u67d3\u5927\u519b\u7684\u653b\u51fb\u5427\uff01",
                    "Traditional Chinese": "\u5c1d\u8bd5\u65b0\u7684\u4f4d\u7f6e\u7b56\u7565\u6765\u66f4\u597d\u7684\u62b5\u5fa1\u6c61\u67d3\u602a\u7269\u5927\u519b\u7684\u653b\u51fb\u5427\uff01",
                    Japanese: "\u30ac\u30fc\u30c7\u30a3\u30a2\u30f3\u306e\u914d\u7f6e\u3092\u5de5\u592b\u3057\u3066\u6c5a\u30e2\u30f3\u30b9\u30bf\u30fc\u8ecd\u56e3\u3092\u6483\u9000\u3057\u3088\u3046\uff01",
                    Spanish: "Intentar una nueva estrategia de dise\xf1o guarda y defensa de la naturaleza de la contaminaci\xf3n del Ej\xe9rcito MuckMonger!",
                    Russian: "\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043d\u043e\u0432\u0443\u044e \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044e \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0417\u0430\u0449\u0438\u0442\u043d\u0438\u043a\u043e\u0432, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u0449\u0438\u0442\u0438\u0442\u044c \u043f\u0440\u0438\u0440\u043e\u0434\u0443 \u043e\u0442 \u0410\u0440\u043c\u0438\u0438 \u041d\u0435\u0447\u0438\u0441\u0442\u0438!"
                }, {
                    Key: "notification-title-4",
                    English: "Knock Knock, Nature Commander!",
                    "Simplified Chinese": "\u60a8\u597d\uff0c\u6307\u6325\u5b98\uff01",
                    "Traditional Chinese": "\u60a8\u597d\uff0c\u6307\u6325\u5b98\uff01",
                    Japanese: "\u3082\u3057\u3082\u3057\u3001\u968a\u9577\uff01",
                    Spanish: "Golpe del golpe, la naturaleza comandante!",
                    Russian: "\u0422\u0443\u043a-\u0442\u0443\u043a, \u041a\u043e\u043c\u0430\u043d\u0434\u0438\u0440 \u0417\u0430\u0449\u0438\u0442\u044b \u041f\u0440\u0438\u0440\u043e\u0434\u044b!"
                }, {
                    Key: "notification-content-4",
                    English: "You have an appointment with the Natural Guardians to defend Nature!",
                    "Simplified Chinese": "\u5230\u4e86\u548c\u5b88\u62a4\u8005\u4e00\u8d77\u4fdd\u536b\u5927\u81ea\u7136\u7684\u65f6\u95f4\u4e86\uff01",
                    "Traditional Chinese": "\u5230\u4e86\u548c\u5b88\u62a4\u8005\u4e00\u8d77\u4fdd\u536b\u5927\u81ea\u7136\u7684\u65f6\u95f4\u4e86\uff01",
                    Japanese: "\u30ac\u30fc\u30c7\u30a3\u30a2\u30f3\u3068\u4e00\u7dd2\u306b\u5927\u81ea\u7136\u3092\u5b88\u308b\u6642\u9593\u3067\u3059\uff01",
                    Spanish: "Usted tiene una cita con los tutores naturales para defender la naturaleza!",
                    Russian: "\u0423 \u0412\u0430\u0441 \u0440\u0430\u043d\u0434\u0435\u0432\u0443 \u0441 \u0417\u0430\u0449\u0438\u0442\u043d\u0438\u043a\u0430\u043c\u0438, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u0449\u0438\u0442\u0438\u0442\u044c \u041f\u0440\u0438\u0440\u043e\u0434\u0443!"
                }, {
                    Key: "notification-title-5",
                    English: "Got time now?",
                    "Simplified Chinese": "\u5728\u5417\uff1f",
                    "Traditional Chinese": "\u5728\u5417\uff1f",
                    Japanese: "\u4eca\u3001\u6642\u9593\u3042\u308b\uff1f",
                    Spanish: "Tienes tiempo ahora?",
                    Russian: "\u0415\u0441\u0442\u044c \u0432\u0440\u0435\u043c\u044f?"
                }, {
                    Key: "notification-content-5",
                    English: "Natural Guardians have been busy fighting while you were away! Come get your reward!",
                    "Simplified Chinese": "\u60a8\u4e0d\u5728\u7684\u65f6\u5019\uff0c\u5b88\u62a4\u8005\u4eec\u4e00\u76f4\u5728\u548c\u6c61\u67d3\u5927\u519b\u4f5c\u6218\uff0c\u5feb\u6765\u9886\u53d6\u4ed6\u4eec\u5e2e\u60a8\u6323\u53d6\u7684\u5956\u52b1\uff01",
                    "Traditional Chinese": "\u60a8\u4e0d\u5728\u7684\u65f6\u5019\uff0c\u5b88\u62a4\u8005\u4eec\u4e00\u76f4\u5728\u548c\u6c61\u67d3\u602a\u7269\u5927\u519b\u4f5c\u6218\uff0c\u5feb\u6765\u9886\u53d6\u4ed6\u4eec\u5e2e\u60a8\u6323\u53d6\u7684\u5956\u52b1\uff01",
                    Japanese: "\u30aa\u30d5\u30e9\u30a4\u30f3\u6642\u306b\u30ac\u30fc\u30c7\u30a3\u30a2\u30f3\u304c\u5fc5\u6b7b\u306b\u6226\u3063\u3066\u305f\u305e\uff01 \u5831\u916c\u3092\u30b2\u30c3\u30c8\u3057\u3088\u3046\uff01",
                    Spanish: "Guardianes naturales han sido ocupados luchando en su ausencia! Ven obtener su recompensa!",
                    Russian: "\u0417\u0430\u0449\u0438\u0442\u043d\u0438\u043a\u0438 \u0443\u0447\u0430\u0441\u0442\u0432\u043e\u0432\u0430\u043b\u0438 \u0432 \u0431\u0438\u0442\u0432\u0430\u0445, \u043f\u043e\u043a\u0430 \u0412\u0430\u0441 \u043d\u0435 \u0431\u044b\u043b\u043e! \u041f\u0440\u0438\u043d\u0438\u043c\u0430\u0439\u0442\u0435 \u043d\u0430\u0433\u0440\u0430\u0434\u044b!"
                }, {
                    Key: "notification-title-6",
                    English: "Never Give Up!",
                    "Simplified Chinese": "\u4e0d\u8981\u653e\u5f03\uff01",
                    "Traditional Chinese": "\u4e0d\u8981\u653e\u5f03\uff01",
                    Japanese: "\u7d76\u5bfe\u306b\u8ae6\u3081\u308b\u306a\uff01",
                    Spanish: "\xa1Nunca te rindas!",
                    Russian: "\u041d\u0438\u043a\u043e\u0433\u0434\u0430 \u043d\u0435 \u0441\u0434\u0430\u0432\u0430\u0439\u0442\u0435\u0441\u044c!"
                }, {
                    Key: "notification-content-6",
                    English: "Strike back! Show the MuckMongers who\u2019s the Boss!!",
                    "Simplified Chinese": "\u52c7\u6562\u53cd\u51fb\uff01\u8ba9\u6c61\u67d3\u519b\u56e2\u770b\u770b\u8c01\u624d\u662f\u8001\u5927\uff01",
                    "Traditional Chinese": "\u52c7\u6562\u53cd\u51fb\uff01\u8ba9\u6c61\u67d3\u602a\u7269\u519b\u56e2\u770b\u770b\u8c01\u624d\u662f\u8001\u5927\uff01",
                    Japanese: "\u30ea\u30d9\u30f3\u30b8\u3060\uff01 \u6c5a\u30e2\u30f3\u30b9\u30bf\u30fc\u8ecd\u56e3\u3092\u5012\u305d\u3046\uff01",
                    Spanish: "\xa1Golpear de vuelta! Mostrar los MuckMongers qui\xe9n manda !!",
                    Russian: "\u041e\u0442\u0431\u0438\u0432\u0430\u0439\u0442\u0435\u0441\u044c! \u041f\u043e\u043a\u0430\u0436\u0438\u0442\u0435 \u0413\u0430\u0434\u043e\u0432\u043e\u0434\u0430\u043c, \u043a\u0442\u043e \u0437\u0434\u0435\u0441\u044c \u0433\u043b\u0430\u0432\u043d\u044b\u0439!"
                }, {
                    Key: "notification-title-7",
                    English: "The MuckMongers are chanting!",
                    "Simplified Chinese": "\u6c61\u67d3\u519b\u56e2\u53c8\u5728\u6311\u8845\u4e86\uff01",
                    "Traditional Chinese": "\u6c61\u67d3\u602a\u7269\u519b\u56e2\u53c8\u5728\u6311\u8845\u4e86\uff01",
                    Japanese: "\u6c5a\u30e2\u30f3\u30b9\u30bf\u30fc\u304c\u6311\u767a\u3057\u3066\u308b\u305e\uff01",
                    Spanish: "Los MuckMongers est\xe1n cantando!",
                    Russian: "\u0413\u0430\u0434\u043e\u0432\u043e\u0434\u044b \u043d\u0430\u0447\u0430\u043b\u0438 \u0440\u0430\u0441\u043f\u0435\u0432\u0430\u0442\u044c \u043f\u0435\u0441\u043d\u0438!"
                }, {
                    Key: "notification-content-7",
                    English: "We came! We saw! We will conquer Nature!!",
                    "Simplified Chinese": "\u6211\u4eec\u62b1\u7740\u5fc5\u80dc\u7684\u51b3\u5fc3\uff0c\u4e00\u5b9a\u4f1a\u653b\u9677\u5927\u81ea\u7136\u7684\uff01\uff01",
                    "Traditional Chinese": "\u6211\u4eec\u6765\u4e86\uff0c\u5e76\u4e14\u4e00\u5b9a\u4f1a\u653b\u9677\u5927\u81ea\u7136\u7684\uff01 \uff01",
                    Japanese: "\u6211\u3005\u306f\u6765\u305f\u3001\u898b\u305f\u3001\u305d\u3057\u3066\u52dd\u3064",
                    Spanish: "\xa1Vinimos! \xa1Nosotros vimos! Vamos a conquistar la naturaleza !!",
                    Russian: "\u041c\u044b \u043f\u0440\u0438\u0448\u043b\u0438! \u041c\u044b \u0443\u0432\u0438\u0434\u0435\u043b\u0438! \u041c\u044b \u0437\u0430\u0432\u043e\u044e\u0435\u043c \u041f\u0440\u0438\u0440\u043e\u0434\u0443!"
                }, {
                    Key: "free-double-daily-tip",
                    English: "Daily Bonus is doubled 5pm - 11pm everyday!",
                    "Simplified Chinese": "\u6bcf\u65e5\u5956\u52b1\u572817:00~23:00\u53ef\u4ee5\u53cc\u500d\u9886\u53d6\uff01",
                    "Traditional Chinese": "\u6bcf\u65e5\u5956\u52b1\u572817:00~23:00\u53ef\u4ee5\u53cc\u500d\u9886\u53d6\uff01",
                    Japanese: "17\u6642\u301c23\u6642\u306b\u30ed\u30b0\u30a4\u30f3\u3059\u308b\u3068\n\u30c7\u30a4\u30ea\u30fc\u30dc\u30fc\u30ca\u30b9\u304c\uff12\u500d\u306b\uff01",
                    Spanish: "Bonificaci\xf3n diaria se duplica 17:00-23:00 todos los d\xedas!",
                    Russian: "\u0414\u043d\u0435\u0432\u043d\u043e\u0439 \u0411\u043e\u043d\u0443\u0441 \u0443\u0434\u0432\u043e\u0435\u043d \u0441 5-\u0438 \u0434\u043e \n 11-\u0438 \u0432\u0435\u0447\u0435\u0440\u0430 \u043a\u0430\u0436\u0434\u044b\u0439 \u0434\u0435\u043d\u044c!"
                }, {
                    Key: "ad-tip-3",
                    English: "No ads available",
                    "Simplified Chinese": "\u6ca1\u6709\u5e7f\u544a\u53ef\u770b",
                    "Traditional Chinese": "\u6ca1\u6709\u5e7f\u544a\u53ef\u770b",
                    Japanese: "\u5e83\u544a\u304c\u3042\u308a\u307e\u305b\u3093",
                    Spanish: "No hay anuncios disponibles",
                    Russian: "\u0420\u0435\u043a\u043b\u0430\u043c\u0430 \u043d\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430"
                }, {
                    Key: "payment-max-ad-count-tip",
                    English: "Come back tomorrow!",
                    "Simplified Chinese": "\u660e\u5929\u518d\u6765\u8bd5\u8bd5\uff01",
                    "Traditional Chinese": "\u660e\u5929\u518d\u6765\u8bd5\u8bd5\uff01",
                    Japanese: "\u660e\u65e5\u3082\u6765\u3066\u306d\uff01",
                    Spanish: "\xa1Vuelve ma\xf1ana!",
                    Russian: "\u0412\u0435\u0440\u043d\u0438\u0442\u0435\u0441\u044c \u0437\u0430\u0432\u0442\u0440\u0430!"
                }, {
                    Key: "updateAvailable-tip",
                    English: "Guardian Master! An update is available in the {0}. Update Now and check what's new!",
                    "Simplified Chinese": "\u6307\u6325\u5b98\uff01{0}\u91cc\u6709\u66f4\u65b0\u53ef\u4ee5\u5b89\u88c5\uff0c\u5feb\u53bb\u770b\u770b\u6709\u4ec0\u4e48\u65b0\u7684\u5185\u5bb9\uff01",
                    "Traditional Chinese": "\u6307\u6325\u5b98\uff01 {0}\u91cc\u6709\u66f4\u65b0\u53ef\u4ee5\u5b89\u88c5\uff0c\u5feb\u53bb\u770b\u770b\u6709\u4ec0\u4e48\u65b0\u7684\u5185\u5bb9\uff01",
                    Japanese: "\u968a\u9577\uff01 {0}\u306b\u65b0\u305f\u306a\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u304c\u3042\u308a\u307e\u3059\u3002 \u4eca\u3059\u3050\u66f4\u65b0\u3057\u3066\u6700\u65b0\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u30b2\u30c3\u30c8\u3057\u3046\u3088\u3046\uff01",
                    Spanish: "Guardi\xe1n Maestro! Una actualizaci\xf3n est\xe1 disponible en el {0}. Actualizar ahora y comprobaci\xf3n de lo que hay de nuevo!",
                    Russian: "\u041c\u0430\u0441\u0442\u0435\u0440 \u0417\u0430\u0449\u0438\u0442\u043d\u0438\u043a\u043e\u0432! \u0413\u043e\u0442\u043e\u0432\u043e \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0432 {0}. \u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0439\u0442\u0435, \u0438 \u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435, \u0447\u0442\u043e \u043d\u043e\u0432\u043e\u0433\u043e!"
                }, {
                    Key: "updateAvailable-update-now",
                    English: "Update Now",
                    "Simplified Chinese": "\u73b0\u5728\u66f4\u65b0",
                    "Traditional Chinese": "\u73b0\u5728\u66f4\u65b0",
                    Japanese: "\u4eca\u3059\u3050\u66f4\u65b0",
                    Spanish: "Actualizar ahora",
                    Russian: "\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0441\u0435\u0439\u0447\u0430\u0441"
                }, {
                    Key: "updateAvailable-next-time",
                    English: "Next Time",
                    "Simplified Chinese": "\u4e0b\u6b21\u518d\u8bf4",
                    "Traditional Chinese": "\u4e0b\u6b21\u518d\u8bf4",
                    Japanese: "\u6b21\u56de",
                    Spanish: "La pr\xf3xima vez",
                    Russian: "\u0412 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0440\u0430\u0437"
                }, {
                    Key: "enjoyNature-title",
                    English: "Enjoying Nature SB?",
                    "Simplified Chinese": "\u559c\u6b22\u6211\u4eec\u7684\u6e38\u620f\u5417\uff1f",
                    "Traditional Chinese": "\u559c\u6b22\u6211\u4eec\u7684\u6e38\u620f\u5417\uff1f",
                    Japanese: "\u3053\u306e\u30b2\u30fc\u30e0\u697d\u3057\u3093\u3067\u308b\uff1f",
                    Spanish: "Disfrutando de la naturaleza SB?",
                    Russian: "\u041d\u0440\u0430\u0432\u0438\u0442\u0441\u044f \u0418\u0433\u0440\u0430\u0442\u044c?"
                }, {
                    Key: "enjoyNature-tip",
                    English: "Tell us if you love our game!",
                    "Simplified Chinese": "\u8bf7\u544a\u8bc9\u6211\u4eec\n\u5982\u679c\u60a8\u4e5f\u559c\u6b22\u6211\u4eec\u7684\u6e38\u620f\uff01",
                    "Traditional Chinese": "\u8bf7\u4e0d\u541d\u6307\u6559\uff0c\u5982\u679c\u559c\u6b22\u6211\u4eec\u7684\u6e38\u620f\uff01",
                    Japanese: "\u697d\u3057\u3051\u308c\u3070\u8a55\u4fa1\u3057\u3066\u306d\uff01",
                    Spanish: "Dinos si te gusta nuestro juego!",
                    Russian: "\u0420\u0430\u0441\u0441\u043a\u0430\u0436\u0438\u0442\u0435, \u043d\u0440\u0430\u0432\u0438\u0442\u0441\u044f \u043b\u0438 \u0432\u0430\u043c \u0438\u0433\u0440\u0430!"
                }, {
                    Key: "enjoyNature-next-time",
                    English: "Next Time",
                    "Simplified Chinese": "\u4e0b\u6b21",
                    "Traditional Chinese": "\u4e0b\u6b21\u518d\u8bf4",
                    Japanese: "\u6b21\u56de",
                    Spanish: "La pr\xf3xima vez",
                    Russian: "\u0412 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0440\u0430\u0437"
                }, {
                    Key: "enjoyNature-rate-now",
                    English: "Love It",
                    "Simplified Chinese": "\u8d85\u7231",
                    "Traditional Chinese": "\u7ed9\u4e2a\u597d\u8bc4",
                    Japanese: "\u3044\u3044\u306d\uff01",
                    Spanish: "Qui\xe9ralo",
                    Russian: "\u041d\u0440\u0430\u0432\u0438\u0442\u0441\u044f"
                }, {
                    Key: "btn-double",
                    English: "Double",
                    "Simplified Chinese": "\u52a0\u500d",
                    "Traditional Chinese": "\u52a0\u500d",
                    Japanese: "\uff12\u500d",
                    Spanish: "Doble",
                    Russian: "\u0423\u0434\u0432\u043e\u0438\u0442\u044c"
                }, {
                    Key: "btn-retry",
                    English: "Retry",
                    "Simplified Chinese": "\u91cd\u65b0\u6311\u6218",
                    "Traditional Chinese": "\u91cd\u65b0\u6311\u6218",
                    Japanese: "\u518d\u6311\u6226",
                    Spanish: "Rever",
                    Russian: "\u0415\u0449\u0451 \u0440\u0430\u0437"
                }, {
                    Key: "enjoyNature-rated",
                    English: "Already Rated",
                    "Simplified Chinese": "\u5df2\u7ecf\u8bc4\u4ef7",
                    "Traditional Chinese": "\u5df2\u7ecf\u8bc4\u4ef7",
                    Japanese: "\u8a55\u4fa1\u6e08\u307f",
                    Spanish: "ya nominal",
                    Russian: "\u0423\u0436\u0435 \u043e\u0446\u0435\u043d\u0435\u043d\u043e"
                }, {
                    Key: "compensation-des",
                    English: "Thanks for being among the first wave of warriors to come to Nature's Defense. \nThe fight continues!",
                    "Simplified Chinese": "\u611f\u8c22\u60a8\u6210\u4e3a\u7b2c\u4e00\u6279\u52c7\u6562\u7684\u6307\u6325\u5b98\uff01 \n\u6218\u6597\u4ecd\u5c06\u7ee7\u7eed!",
                    "Traditional Chinese": "\u611f\u8c22\u60a8\u6210\u4e3a\u7b2c\u4e00\u6279\u52c7\u6562\u7684\u6307\u6325\u5b98\uff01 \n\u6218\u6597\u4ecd\u5c06\u7ee7\u7eed!",
                    Japanese: "\u521d\u671f\u306e\u6226\u58eb\u306b\u306a\u3063\u3066\u304f\u308c\u3066\u3042\u308a\u304c\u3068\u3046\uff01  \n\u6226\u3044\u306f\u307e\u3060\u307e\u3060\u7d9a\u304f\u305e\uff01",
                    Spanish: "Gracias por estar en la primera ola de guerreros a salir en defensa de la naturaleza.  NEl lucha contin\xfaa!",
                    Russian: "\u0421\u043f\u0430\u0441\u0438\u0431\u043e, \u0447\u0442\u043e \u0431\u044b\u043b\u0438 \u0432 \u043f\u0435\u0440\u0432\u043e\u0439 \u0432\u043e\u043b\u043d\u0435 \u0432\u043e\u0438\u043d\u043e\u0432, \u043f\u0440\u0438\u0448\u0435\u0434\u0448\u0438\u0445 \u043d\u0430 \u0437\u0430\u0449\u0438\u0442\u0443 \u043f\u0440\u0438\u0440\u043e\u0434\u044b! \n\u0411\u0438\u0442\u0432\u0430 \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0430\u0435\u0442\u0441\u044f!"
                }, {
                    Key: "bad-connection",
                    English: "Network connection unstable",
                    "Simplified Chinese": "\u7f51\u7edc\u8fde\u63a5\u4e0d\u7a33\u5b9a",
                    "Traditional Chinese": "\u7f51\u7edc\u8fde\u63a5\u4e0d\u7a33\u5b9a",
                    Japanese: "\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u4e0d\u5b89\u5b9a",
                    Spanish: "conexi\xf3n de red inestable",
                    Russian: "\u0421\u0432\u044f\u0437\u044c \u0441 \u0441\u0435\u0442\u044c\u044e \u043d\u0435\u0443\u0441\u0442\u043e\u0439\u0447\u0438\u0432\u0430\u044f"
                }, {
                    Key: "recovery-tip",
                    English: "No data available",
                    "Simplified Chinese": "\u6ca1\u6709\u76f8\u5e94\u6570\u636e",
                    "Traditional Chinese": "\u6ca1\u6709\u76f8\u5e94\u6570\u636e",
                    Japanese: "\u56de\u5fa9\u3067\u304d\u308b\u30c7\u30fc\u30bf\u304c\u306a\u3044",
                    Spanish: "Datos no disponibles",
                    Russian: "\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445"
                }, {
                    Key: "btn-recovery",
                    English: "Restore Data",
                    "Simplified Chinese": "\u6062\u590d\u6570\u636e",
                    "Traditional Chinese": "\u6570\u636e\u56de\u6863",
                    Japanese: "\u30c7\u30fc\u30bf\u56de\u5fa9",
                    Spanish: "restaurar datos",
                    Russian: "\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435"
                }, {
                    Key: "coinBundle-tip",
                    English: "Purchase {0} coins",
                    "Simplified Chinese": "\u8d2d\u4e70{0}\u91d1\u5e01",
                    "Traditional Chinese": "\u8d2d\u4e70{0}\u91d1\u5e01",
                    Japanese: "{0}\u30b3\u30a4\u30f3\u3092\u8cfc\u5165",
                    Spanish: "Compra {0} monedas",
                    Russian: "\u041a\u0443\u043f\u0438\u0442\u044c {0} \u043c\u043e\u043d\u0435\u0442"
                }, {
                    Key: "coinBundle-tip2",
                    English: "Limited Time Special Offer\nPurchase {0} coins",
                    "Simplified Chinese": "\u9650\u65f6\u7279\u60e0\n\u8d2d\u4e70{0}\u91d1\u5e01",
                    "Traditional Chinese": "\u9650\u65f6\u7279\u60e0\n\u8d2d\u4e70 {0} \u91d1\u5e01",
                    Japanese: "\u30bf\u30a4\u30e0\u30bb\u30fc\u30eb\n {0} \u30b3\u30a4\u30f3\u3092\u8cfc\u5165",
                    Spanish: "Oferta por tiempo limitado especial  nAdquiera {0} monedas",
                    Russian: "\u041a\u0440\u0430\u0442\u043a\u043e\u0441\u0440\u043e\u0447\u043d\u043e\u0435 \u0421\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0435 \u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435\n\u041a\u0443\u043f\u0438\u0442\u044c {0} \u043c\u043e\u043d\u0435\u0442"
                }, {
                    Key: "specialGridBundle-tip",
                    English: "Special offer to Unlock the Fort",
                    "Simplified Chinese": "\u89e3\u9501\u70ae\u53f0",
                    "Traditional Chinese": "\u89e3\u9501\u70ae\u53f0",
                    Japanese: "\u8981\u585e\u3092\u30a2\u30f3\u30ed\u30c3\u30af",
                    Spanish: "Oferta especial para desbloquear el Fuerte",
                    Russian: "\u0421\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0435 \u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u0447\u0442\u043e\u0431\u044b \u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0424\u043e\u0440\u0442"
                }, {
                    Key: "specialGridBundle-tip2",
                    English: "Limited Time Special Offer\nUnlock the Fort",
                    "Simplified Chinese": "\u9650\u65f6\u7279\u60e0\n\u89e3\u9501\u70ae\u53f0",
                    "Traditional Chinese": "\u9650\u65f6\u7279\u60e0\n\u89e3\u9501\u70ae\u53f0",
                    Japanese: "\u30bf\u30a4\u30e0\u30bb\u30fc\u30eb\n\u8981\u585e\u3092\u30a2\u30f3\u30ed\u30c3\u30af",
                    Spanish: "Oferta por tiempo limitado especial  nUnlock el Fuerte",
                    Russian: "\u041a\u0440\u0430\u0442\u043a\u043e\u0441\u0440\u043e\u0447\u043d\u043e\u0435 \u0421\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0435 \u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435\n\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0424\u043e\u0440\u0442"
                }, {
                    Key: "removeAdBundle-tip",
                    English: "Remove banner/interstitial ads",
                    "Simplified Chinese": "\u6c38\u4e45\u79fb\u9664\u6a2a\u5e45\u5e7f\u544a\u4ee5\u53ca\u63d2\u5c4f\u5e7f\u544a",
                    "Traditional Chinese": "\u6c38\u4e45\u79fb\u9664\u6a2a\u5e45\u5e7f\u544a\u4ee5\u53ca\u63d2\u5c4f\u5e7f\u544a",
                    Japanese: "\u5e83\u544a\u3092\u975e\u8868\u793a",
                    Spanish: "Retire la bandera / anuncios intersticiales",
                    Russian: "\u0423\u0431\u0440\u0430\u0442\u044c \u0431\u0430\u043d\u043d\u0435\u0440\u044b/\u043c\u0435\u0436\u0441\u0442\u0440\u0430\u043d\u0438\u0447\u043d\u044b\u0435 \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u044f"
                }, {
                    Key: "removeAdBundle-tip2",
                    English: "Limited Time Special Offer\nRemove banner/interstitial ads",
                    "Simplified Chinese": "\u9650\u65f6\u7279\u60e0\n\u6c38\u4e45\u79fb\u9664\u6a2a\u5e45\u53ca\u63d2\u5c4f\u5e7f\u544a",
                    "Traditional Chinese": "\u9650\u65f6\u7279\u60e0\n\u6c38\u4e45\u79fb\u9664\u6a2a\u5e45\u53ca\u63d2\u5c4f\u5e7f\u544a",
                    Japanese: "\u30bf\u30a4\u30e0\u30bb\u30fc\u30eb\n\u5e83\u544a\u3092\u975e\u8868\u793a",
                    Spanish: "Oferta por tiempo limitado especial  nRemove bandera / anuncios intersticiales",
                    Russian: "\u041a\u0440\u0430\u0442\u043a\u043e\u0441\u0440\u043e\u0447\u043d\u043e\u0435 \u0421\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0435 \u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435\n\u0423\u0431\u0440\u0430\u0442\u044c \u0431\u0430\u043d\u043d\u0435\u0440\u044b/\u043c\u0435\u0436\u0441\u0442\u0440\u0430\u043d\u0438\u0447\u043d\u044b\u0435 \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u044f"
                }, {
                    Key: "offlineBundle-tip",
                    English: "Double your Offline Earnings",
                    "Simplified Chinese": "\u6c38\u4e45\u52a0\u500d\u79bb\u7ebf\u6536\u76ca",
                    "Traditional Chinese": "\u6c38\u4e45\u52a0\u500d\u79bb\u7ebf\u6536\u76ca",
                    Japanese: "\u30aa\u30d5\u30e9\u30a4\u30f3\u53ce\u76ca\u3092\u305a\u3063\u3068\uff12\u500d\u306b",
                    Spanish: "Duplicar sus ganancias fuera de l\xednea",
                    Russian: "\u0423\u0434\u0432\u043e\u0438\u0442\u044c \u043e\u0444\u0444\u043b\u0430\u0439\u043d-\u0437\u0430\u0440\u0430\u0431\u043e\u0442\u043e\u043a"
                }, {
                    Key: "bundle-time-tip",
                    English: "The offer ends in:",
                    "Simplified Chinese": "\u7279\u60e0\u65f6\u95f4\u8fd8\u5269\uff1a",
                    "Traditional Chinese": "\u7279\u60e0\u65f6\u95f4\u8fd8\u5269\uff1a",
                    Japanese: "\u30bf\u30a4\u30e0\u30bb\u30fc\u30eb\u6b8b\u308a\uff1a",
                    Spanish: "La oferta termina en:",
                    Russian: "\u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0438\u0441\u0442\u0435\u043a\u0430\u0435\u0442 \u0447\u0435\u0440\u0435\u0437: "
                }, {
                    Key: "bgm",
                    English: "BGM",
                    "Simplified Chinese": "\u80cc\u666f\u97f3\u4e50",
                    "Traditional Chinese": "\u80cc\u666f\u97f3\u4e50",
                    Japanese: "BGM",
                    Spanish: "BGM",
                    Russian: "\u0424\u043e\u043d-\u043c\u0443\u0437\u044b\u043a\u0430"
                }, {
                    Key: "sfx",
                    English: "SFX",
                    "Simplified Chinese": "\u7279\u6548\u97f3\u4e50",
                    "Traditional Chinese": "\u7279\u6548\u97f3\u4e50",
                    Japanese: "SFX",
                    Spanish: "SFX",
                    Russian: "\u042d\u0444\u0444\u0435\u043a\u0442\u044b"
                }, {
                    Key: "set-on",
                    English: "ON",
                    "Simplified Chinese": "\u5f00",
                    "Traditional Chinese": "\u5f00",
                    Japanese: "\u30aa\u30f3",
                    Spanish: "EN",
                    Russian: "\u0412\u044b\u043a\u043b\u044e\u0447\u0438\u0442\u044c"
                }, {
                    Key: "set-off",
                    English: "OFF",
                    "Simplified Chinese": "\u5173",
                    "Traditional Chinese": "\u5173",
                    Japanese: "\u30aa\u30d5",
                    Spanish: "APAGADO",
                    Russian: "\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u044c"
                }, {
                    Key: "set-version",
                    English: "Version:",
                    "Simplified Chinese": "\u7248\u672c\u53f7\uff1a",
                    "Traditional Chinese": "\u7248\u672c\u53f7\uff1a",
                    Japanese: "\u30d0\u30fc\u30b8\u30e7\u30f3\uff1a",
                    Spanish: "Versi\xf3n:",
                    Russian: "\u0412\u0435\u0440\u0441\u0438\u044f: "
                }, {
                    Key: "set-copy",
                    English: "CopyID",
                    "Simplified Chinese": "\u590d\u5236ID",
                    "Traditional Chinese": "\u590d\u5236ID",
                    Japanese: "ID\u30b3\u30d4\u30fc",
                    Spanish: "CopyID",
                    Russian: "CopyID"
                }, {
                    Key: "restore-coin",
                    English: "Coins",
                    "Simplified Chinese": "\u91d1\u5e01",
                    "Traditional Chinese": "\u91d1\u5e01",
                    Japanese: "\u30b3\u30a4\u30f3",
                    Spanish: "",
                    Russian: "\u041c\u043e\u043d\u0435\u0442\u044b"
                }, {
                    Key: "restore-gem",
                    English: "Gems",
                    "Simplified Chinese": "\u5b9d\u77f3",
                    "Traditional Chinese": "\u5b9d\u77f3",
                    Japanese: "\u5b9d\u77f3",
                    Spanish: "",
                    Russian: "\u0416\u0435\u043c\u0447\u0443\u0433\u0430"
                }, {
                    Key: "restore-vip",
                    English: "VIP Subscription",
                    "Simplified Chinese": "VIP\u8ba2\u9605",
                    "Traditional Chinese": "VIP\u8ba2\u9605",
                    Japanese: "VIP",
                    Spanish: "",
                    Russian: "VIP \u041f\u043e\u0434\u043f\u0438\u0441\u043a\u0430"
                }, {
                    Key: "restore-vipExpire",
                    English: "Expiration Time Of VIP",
                    "Simplified Chinese": "VIP\u8ba2\u9605\u4e0b\u6b21\u66f4\u65b0",
                    "Traditional Chinese": "VIP\u8ba2\u9605\u4e0b\u6b21\u66f4\u65b0",
                    Japanese: "VIP\u6b21\u56de\u66f4\u65b0",
                    Spanish: "",
                    Russian: "\u0418\u0441\u0442\u0435\u0447\u0435\u043d\u0438\u0435 \u041f\u043e\u0434\u043f\u0438\u0441\u043a\u0438 VIP"
                }, {
                    Key: "restore-removeAd",
                    English: "Ads Removed",
                    "Simplified Chinese": "\u53bb\u5e7f\u544a",
                    "Traditional Chinese": "\u53bb\u5e7f\u544a",
                    Japanese: "\u5e83\u544a\u3092\u975e\u8868\u793a",
                    Spanish: "",
                    Russian: "\u0420\u0435\u043a\u043b\u0430\u043c\u0430 \u0443\u0431\u0440\u0430\u043d\u0430"
                }, {
                    Key: "restore-unlockSpecialGrid",
                    English: "Fort Unlocked",
                    "Simplified Chinese": "\u89e3\u9501\u70ae\u53f0",
                    "Traditional Chinese": "\u89e3\u9501\u70ae\u53f0",
                    Japanese: "\u8981\u585e\u3092\u30a2\u30f3\u30ed\u30c3\u30af",
                    Spanish: "",
                    Russian: "\u0424\u043e\u0440\u0442 \u043e\u0442\u043a\u0440\u044b\u0442"
                }, {
                    Key: "restore-offlineDouble",
                    English: "Double Offline Earnings",
                    "Simplified Chinese": "\u79bb\u7ebf\u5956\u52b1\u52a0\u500d",
                    "Traditional Chinese": "\u79bb\u7ebf\u5956\u52b1\u52a0\u500d",
                    Japanese: "\u30aa\u30d5\u30e9\u30a4\u30f3\u53ce\u76ca\uff12\u500d",
                    Spanish: "",
                    Russian: "\u0414\u0432\u043e\u0439\u043d\u044b\u0435 \u043e\u0444\u0444\u043b\u0430\u0439\u043d-\u0437\u0430\u0440\u0430\u0431\u043e\u0442\u043a\u0438"
                }, {
                    Key: "restore-tip",
                    English: "Compensation:",
                    "Simplified Chinese": "\u8865\u507f\u7269\u54c1\uff1a",
                    "Traditional Chinese": "\u8865\u507f\u7269\u54c1\uff1a",
                    Japanese: "\u88dc\u586b\u5546\u54c1\uff1a",
                    Spanish: "",
                    Russian: "\u041a\u043e\u043c\u043f\u0435\u043d\u0441\u0430\u0446\u0438\u044f:"
                }, {
                    Key: "restore-tip-2",
                    English: "We're sorry for the trouble we've caused you, \nand we hope you continue to enjoy the game.\nPlease accept these rewards and\n let us know if you continue to have any problems!",
                    "Simplified Chinese": "\u6211\u4eec\u4e3a\u60a8\u9047\u5230\u7684\u95ee\u9898\u6df1\u611f\u62b1\u6b49\uff0c\n\u8bf7\u63a5\u53d7\u6211\u4eec\u7684\u8865\u507f\u5e76\u7ee7\u7eed\u4f53\u9a8c\u6211\u4eec\u6e38\u620f\u7684\u4e50\u8da3\uff0c\n\u5982\u679c\u60a8\u6709\u4efb\u4f55\u95ee\u9898\u6b22\u8fce\u968f\u65f6\u8054\u7cfb\u6211\u4eec\uff01",
                    "Traditional Chinese": "\u6211\u4eec\u4e3a\u60a8\u9047\u5230\u7684\u95ee\u9898\u6df1\u611f\u62b1\u6b49\uff0c\n\u8bf7\u63a5\u53d7\u6211\u4eec\u7684\u8865\u507f\u5e76\u7ee7\u7eed\u4f53\u9a8c\u6211\u4eec\u6e38\u620f\u7684\u4e50\u8da3\uff0c\n\u5982\u679c\u60a8\u6709\u4efb\u4f55\u95ee\u9898\u6b22\u8fce\u968f\u65f6\u8054\u7cfb\u6211\u4eec\uff01",
                    Japanese: "\u3053\u306e\u5ea6\u3001\u30b2\u30fc\u30e0\u306e\u4e0d\u5177\u5408\u306b\u3088\u308a\u3054\u8ff7\u60d1\u3092\u304a\u304b\u3051\u3057\u3001\n\u5927\u5909\u7533\u3057\u8a33\u3054\u3056\u3044\u307e\u305b\u3093\u3067\u3057\u305f\u3002\n\u5f15\u304d\u7d9a\u304d\u3088\u308d\u3057\u304f\u304a\u9858\u3044\u81f4\u3057\u307e\u3059\uff01",
                    Spanish: "",
                    Russian: "\u0418\u0437\u0432\u0438\u043d\u0438\u0442\u0435 \u0437\u0430 \u043d\u0435\u0443\u0434\u043e\u0431\u0441\u0442\u0432\u043e!\n\u041d\u0430\u0434\u0435\u0435\u043c\u0441\u044f, \u0447\u0442\u043e \u0432\u044b \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u0435 \u0438\u0433\u0440\u0430\u0442\u044c.\n\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u043f\u0440\u0438\u0439\u043c\u0438\u0442\u0435 \u044d\u0442\u0443 \u043d\u0430\u0433\u0440\u0430\u0434\u0443 \u0438\n\u043d\u0430\u043f\u0438\u0448\u0438\u0442\u0435, \u0435\u0441\u043b\u0438 \u0431\u0443\u0434\u0443\u0442 \u0434\u0440\u0443\u0433\u0438\u0435 \u043d\u0435\u0438\u0441\u043f\u0440\u0430\u0432\u043d\u043e\u0441\u0442\u0438."
                }, {
                    Key: "language-cn",
                    English: "\u7b80\u4f53\u4e2d\u6587",
                    "Simplified Chinese": "\u7b80\u4f53\u4e2d\u6587",
                    "Traditional Chinese": "\u7b80\u4f53\u4e2d\u6587",
                    Japanese: "\u7c21\u4f53\u4e2d\u6587",
                    Spanish: "",
                    Russian: "\u7b80\u4f53\u4e2d\u6587"
                }, {
                    Key: "language-en",
                    English: "English",
                    "Simplified Chinese": "English",
                    "Traditional Chinese": "English",
                    Japanese: "English",
                    Spanish: "",
                    Russian: "English"
                }, {
                    Key: "language-jp",
                    English: "\u65e5\u672c\u8bed",
                    "Simplified Chinese": "\u65e5\u672c\u8bed",
                    "Traditional Chinese": "\u65e5\u672c\u8bed",
                    Japanese: "\u65e5\u672c\u8a9e",
                    Spanish: "",
                    Russian: "\u65e5\u672c\u8bed"
                }, {
                    Key: "language-tc",
                    English: "\u7e41\u4f53\u4e2d\u6587",
                    "Simplified Chinese": "\u7e41\u4f53\u4e2d\u6587",
                    "Traditional Chinese": "\u7e41\u4f53\u4e2d\u6587",
                    Japanese: "\u7e41\u4f53\u4e2d\u6587",
                    Spanish: "",
                    Russian: "\u7e41\u4f53\u4e2d\u6587"
                }, {
                    Key: "language-ru",
                    English: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439",
                    "Simplified Chinese": "\u0420\u0443\u0441\u0441\u043a\u0438\u0439",
                    "Traditional Chinese": "\u0420\u0443\u0441\u0441\u043a\u0438\u0439",
                    Japanese: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439",
                    Spanish: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439",
                    Russian: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439"
                }, {
                    Key: "buff-auto",
                    English: "Merge Automatically",
                    "Simplified Chinese": "\u81ea\u52a8\u5408\u5e76\u5b88\u62a4\u8005",
                    "Traditional Chinese": "\u81ea\u52a8\u5408\u5e76\u5b88\u62a4\u8005",
                    Japanese: "\u30ac\u30fc\u30c7\u30a3\u30a2\u30f3\u3092\u81ea\u52d5\u30de\u30fc\u30b8",
                    Spanish: "",
                    Russian: "\u0421\u043e\u0435\u0434\u0438\u043d\u044f\u0442\u044c \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438"
                }, {
                    Key: "buff-rage",
                    English: "Attack Speed x 1.5",
                    "Simplified Chinese": "\u653b\u51fb\u901f\u5ea6 x 1.5",
                    "Traditional Chinese": "\u653b\u51fb\u901f\u5ea6x1.5",
                    Japanese: "\u653b\u6483\u901f\u5ea6 x 1.5",
                    Spanish: "",
                    Russian: "\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0410\u0442\u0430\u043a\u0438 \u0445 1.5"
                }, {
                    Key: "buff-flame",
                    English: "Attack Damage x 1.5",
                    "Simplified Chinese": "\u653b\u51fb\u4f24\u5bb3 x 1.5",
                    "Traditional Chinese": "\u653b\u51fb\u4f24\u5bb3 x 1.5,",
                    Japanese: "\u653b\u6483\u529b x 1.5",
                    Spanish: "",
                    Russian: "\u0423\u0440\u043e\u043d \u0410\u0442\u0430\u043a\u0438 \u0445 1.5"
                }, {
                    Key: "buff-freeze",
                    English: "Freeze Attack Rate x 2",
                    "Simplified Chinese": "\u51b0\u51bb\u6982\u7387 x 2",
                    "Traditional Chinese": "\u51b0\u51bb\u6982\u7387 x 2",
                    Japanese: "\u6c37\u7d50\u653b\u6483\u7387 x 2",
                    Spanish: "",
                    Russian: "\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0410\u0442\u0430\u043a\u0438 \u041c\u043e\u0440\u043e\u0437\u0430 \u0445 2"
                }, {
                    Key: "buff-crit",
                    English: "Critical Damage Rate x 2",
                    "Simplified Chinese": "\u66b4\u51fb\u6982\u7387 x 2",
                    "Traditional Chinese": "\u66b4\u51fb\u6982\u7387 x 2",
                    Japanese: "\u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u7387 x 2",
                    Spanish: "",
                    Russian: "\u041a\u0440\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0443\u0440\u043e\u043d \u0443\u0434\u0432\u043e\u0435\u043d"
                }, {
                    Key: "max-flame-time-150",
                    English: "Flame mode lasts for up to 900s",
                    "Simplified Chinese": "\u706b\u7130\u9053\u5177\u6700\u591a\u6301\u7eed900s",
                    "Traditional Chinese": "\u706b\u7130\u9053\u5177\u6700\u591a\u6301\u7eed900s",
                    Japanese: "\u706b\u708e\u52b9\u679c\u304c\u6700\u5927900s\u6301\u7d9a\u53ef\u80fd",
                    Spanish: "",
                    Russian: "\u0420\u0435\u0436\u0438\u043c \u043f\u043b\u0430\u043c\u0435\u043d\u0438 \u0434\u043b\u0438\u0442\u0441\u044f \u0434\u043e 900\u0441"
                }, {
                    Key: "max-freeze-time-150",
                    English: "Freeze mode lasts for up to 900s",
                    "Simplified Chinese": "\u51b0\u51bb\u9053\u5177\u6700\u591a\u6301\u7eed900s",
                    "Traditional Chinese": "\u51b0\u51bb\u9053\u5177\u6700\u591a\u6301\u7eed900s",
                    Japanese: "\u6c37\u7d50\u52b9\u679c\u304c\u6700\u5927900s\u6301\u7d9a\u53ef\u80fd",
                    Spanish: "",
                    Russian: "\u0420\u0435\u0436\u0438\u043c \u043c\u043e\u0440\u043e\u0437\u0430 \u0434\u043b\u0438\u0442\u0441\u044f \u0434\u043e 900\u0441"
                }, {
                    Key: "max-crit-time-150",
                    English: "Critical mode lasts for up to 900s",
                    "Simplified Chinese": "\u66b4\u51fb\u9053\u5177\u6700\u591a\u6301\u7eed900s",
                    "Traditional Chinese": "\u66b4\u51fb\u9053\u5177\u6700\u591a\u6301\u7eed900s",
                    Japanese: "\u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u52b9\u679c\u304c\u6700\u5927900s\u6301\u7d9a\u53ef\u80fd",
                    Spanish: "",
                    Russian: "\u0420\u0435\u0436\u0438\u043c \u043a\u0440\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0443\u0440\u043e\u043d\u0430 \u0434\u043b\u0438\u0442\u0441\u044f \u0434\u043e 900\u0441"
                }, {
                    Key: "max-auto-time-300",
                    English: "Auto mode lasts for up to 900s",
                    "Simplified Chinese": "\u81ea\u52a8\u5408\u5e76\u9053\u5177\u6700\u591a\u6301\u7eed900s",
                    "Traditional Chinese": "\u81ea\u52a8\u5408\u5e76\u9053\u5177\u6700\u591a\u6301\u7eed900s",
                    Japanese: "\u81ea\u52d5\u30de\u30fc\u30b8\u52b9\u679c\u304c\u6700\u5927900s\u6301\u7d9a\u53ef\u80fd",
                    Spanish: "",
                    Russian: "\u0410\u0432\u0442\u043e-\u0440\u0435\u0436\u0438\u043c \u0434\u043b\u0438\u0442\u0441\u044f \u0434\u043e 900\u0441"
                }, {
                    Key: "main-buff",
                    English: "Powers",
                    "Simplified Chinese": "\u9053\u5177",
                    "Traditional Chinese": "\u9053\u5177",
                    Japanese: "\u30a2\u30a4\u30c6\u30e0",
                    Spanish: "",
                    Russian: "\u0421\u0438\u043b\u044b"
                }, {
                    Key: "language",
                    English: "Language",
                    "Simplified Chinese": "\u8bed\u8a00",
                    "Traditional Chinese": "\u8bed\u8a00",
                    Japanese: "\u8a00\u8a9e",
                    Spanish: "",
                    Russian: "\u042f\u0437\u044b\u043a"
                }, {
                    Key: "vip-week",
                    English: "week",
                    "Simplified Chinese": "\u5468",
                    "Traditional Chinese": "\u5468",
                    Japanese: "\u9031",
                    Spanish: "",
                    Russian: "\u043d\u0435\u0434\u0435\u043b\u044f"
                }, {
                    Key: "btn-no-thanks",
                    English: "No Thanks!",
                    "Simplified Chinese": "\u5355\u500d\u9886\u53d6",
                    "Traditional Chinese": "\u5355\u500d\u9886\u53d6",
                    Japanese: "\u7d50\u69cb\u3067\u3059\uff01",
                    Spanish: "",
                    Russian: "\u041d\u0435\u0442, \u0441\u043f\u0430\u0441\u0438\u0431\u043e!"
                }, {
                    Key: "btn-treble",
                    English: "Triple",
                    "Simplified Chinese": "3\u500d",
                    "Traditional Chinese": "3\u500d",
                    Japanese: "3\u500d",
                    Spanish: "",
                    Russian: "\u0423\u0442\u0440\u043e\u0438\u0442\u044c"
                }, {
                    Key: "main-treble",
                    English: "Triple Gold",
                    "Simplified Chinese": "3\u500d\u91d1\u5e01",
                    "Traditional Chinese": "3\u500d\u91d1\u5e01",
                    Japanese: "\u30b3\u30a4\u30f33\u500d",
                    Spanish: "",
                    Russian: "\u0423\u0442\u0440\u043e\u0438\u0442\u044c \u0417\u043e\u043b\u043e\u0442\u043e"
                }, {
                    Key: "is-treble-now",
                    English: "Triple Coin bonus activated ",
                    "Simplified Chinese": "3\u500d\u91d1\u5e01\u5df2\u6fc0\u6d3b",
                    "Traditional Chinese": "3\u500d\u91d1\u5e01\u5df2\u6fc0\u6d3b",
                    Japanese: "\u30b3\u30a4\u30f33\u500d\u6709\u52b9\u4e2d",
                    Spanish: "",
                    Russian: "\u0422\u0440\u043e\u0439\u043d\u043e\u0439 \u0431\u043e\u043d\u0443\u0441 \u043c\u043e\u043d\u0435\u0442 \u0430\u043a\u0442\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u043d"
                }, {
                    Key: "trebleCoin-des-1",
                    English: "Defeated Enemies will drop x3 coins!",
                    "Simplified Chinese": "\u6253\u8d25\u654c\u4eba\u65f6\u91d1\u5e01\u6389\u843d3\u500d",
                    "Traditional Chinese": "\u6253\u8d25\u654c\u4eba\u65f6\u91d1\u5e01\u6389\u843d3\u500d",
                    Japanese: "\u5012\u3057\u305f\u6575\u304b\u3089\u30b3\u30a4\u30f33\u500d\u7372\u5f97",
                    Spanish: "",
                    Russian: "\u041f\u043e\u0431\u0435\u0436\u0434\u0435\u043d\u043d\u044b\u0435 \u0432\u0440\u0430\u0433\u0438 \u0432\u044b\u0434\u0430\u044e\u0442 \u04453 \u043c\u043e\u043d\u0435\u0442!"
                }, {
                    Key: "trebleCoin-des-2",
                    English: "Bonus will last for 500 seconds",
                    "Simplified Chinese": "\u91d1\u5e013\u500d\u6301\u7eed500\u79d2",
                    "Traditional Chinese": "\u91d1\u5e013\u500d\u6301\u7eed500\u79d2",
                    Japanese: "\u30dc\u30fc\u30ca\u30b9\u306f500\u79d2\u9593\u7d9a\u304f",
                    Spanish: "",
                    Russian: "\u0411\u043e\u043d\u0443\u0441 \u0431\u0443\u0434\u0435\u0442 \u0434\u043b\u0438\u0442\u044c\u0441\u044f 500 \u0441\u0435\u043a\u0443\u043d\u0434"
                }, {
                    Key: "getReward-checkbox-treble",
                    English: "Watch a video to triple the reward",
                    "Simplified Chinese": "\u770b\u5e7f\u544a3\u500d\u9886\u53d6",
                    "Traditional Chinese": "\u770b\u5e7f\u544a3\u500d\u9886\u53d6",
                    Japanese: "\u52d5\u753b\u3092\u518d\u751f\u3057\u3066\u5831\u916c3\u500d",
                    Spanish: "",
                    Russian: "\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0432\u0438\u0434\u0435\u043e \u0434\u043b\u044f \u0442\u0440\u043e\u0439\u043d\u043e\u0439 \u043d\u0430\u0433\u0440\u0430\u0434\u044b"
                }, {
                    Key: "offline-treble-tip",
                    English: "Offline Earning is tripled",
                    "Simplified Chinese": "3\u500d\u9886\u53d6",
                    "Traditional Chinese": "3\u500d\u9886\u53d6",
                    Japanese: "\u5831\u916c3\u500d",
                    Spanish: "",
                    Russian: "\u041e\u0444\u0444\u043b\u0430\u0439\u043d \u0437\u0430\u0440\u0430\u0431\u043e\u0442\u043e\u043a \u0443\u0442\u0440\u043e\u0435\u043d"
                }, {
                    Key: "vip-treble-tip",
                    English: "Triple reward for VIP",
                    "Simplified Chinese": "VIP3\u500d\u7279\u6743",
                    "Traditional Chinese": "VIP3\u500d\u7279\u6743",
                    Japanese: "VIP\u4f1a\u54e1\u5831\u916c3\u500d",
                    Spanish: "",
                    Russian: "\u0422\u0440\u043e\u0439\u043d\u0430\u044f \u043d\u0430\u0433\u0440\u0430\u0434\u0430 \u0437\u0430 VIP"
                }, {
                    Key: "trebleCoin-des-1",
                    English: "Defeated Enemies will drop x3 coins!",
                    "Simplified Chinese": "\u6253\u8d25\u654c\u4eba\u65f6\u91d1\u5e01\u6389\u843d3\u500d",
                    "Traditional Chinese": "\u6253\u8d25\u654c\u4eba\u65f6\u91d1\u5e01\u6389\u843d3\u500d",
                    Japanese: "\u5012\u3057\u305f\u6575\u304b\u3089\u30b3\u30a4\u30f33\u500d\u7372\u5f97",
                    Spanish: "",
                    Russian: "\u041f\u043e\u0431\u0435\u0436\u0434\u0435\u043d\u043d\u044b\u0435 \u0432\u0440\u0430\u0433\u0438 \u0432\u044b\u0434\u0430\u044e\u0442 \u04453 \u043c\u043e\u043d\u0435\u0442!"
                }, {
                    Key: "free-treble-daily-tip",
                    English: "Daily Bonus is tripled 5pm - 11pm everyday!",
                    "Simplified Chinese": "\u6bcf\u65e5\u5956\u52b1\u572817:00~23:00\u53ef\u4ee53\u500d\u9886\u53d6\uff01",
                    "Traditional Chinese": "\u6bcf\u65e5\u5956\u52b1\u572817:00~23:00\u53ef\u4ee53\u500d\u9886\u53d6\uff01",
                    Japanese: "17\u6642\u301c23\u6642\u306b\u30ed\u30b0\u30a4\u30f3\u3059\u308b\u3068\n\u30c7\u30a4\u30ea\u30fc\u30dc\u30fc\u30ca\u30b9\u304c3\u500d\u306b\uff01",
                    Spanish: "",
                    Russian: "\u0414\u043d\u0435\u0432\u043d\u043e\u0439 \u0411\u043e\u043d\u0443\u0441 \u0443\u0442\u0440\u043e\u0435\u043d \u0441 5-\u0438 \u0434\u043e \n11-\u0438 \u0432\u0435\u0447\u0435\u0440\u0430 \u043a\u0430\u0436\u0434\u044b\u0439 \u0434\u0435\u043d\u044c!"
                }, {
                    Key: "main-recycle",
                    English: "Recycle",
                    "Simplified Chinese": "\u56de\u6536",
                    "Traditional Chinese": "\u56de\u6536",
                    Japanese: "\u30ea\u30b5\u30a4\u30af\u30eb",
                    Spanish: "",
                    Russian: "\u0421\u0434\u0430\u0442\u044c"
                }, {
                    Key: "rank-ranking",
                    English: "Rank",
                    "Simplified Chinese": "\u6392\u540d",
                    "Traditional Chinese": "\u6392\u540d",
                    Japanese: "\u30e9\u30f3\u30ad\u30f3\u30b0",
                    Spanish: "",
                    Russian: "\u0420\u0430\u043d\u0433"
                }, {
                    Key: "rank-icon",
                    English: "Icon",
                    "Simplified Chinese": "\u56fe\u6807",
                    "Traditional Chinese": "\u56fe\u6807",
                    Japanese: "\u30a2\u30a4\u30b3\u30f3",
                    Spanish: "",
                    Russian: "\u0417\u043d\u0430\u0447\u0435\u043a"
                }, {
                    Key: "rank-name",
                    English: "Name",
                    "Simplified Chinese": "\u540d\u5b57",
                    "Traditional Chinese": "\u540d\u5b57",
                    Japanese: "\u540d\u524d",
                    Spanish: "",
                    Russian: "\u0418\u043c\u044f"
                }, {
                    Key: "rank-top",
                    English: "Top Guardian",
                    "Simplified Chinese": "\u6700\u9ad8\u7b49\u7ea7\u5b88\u62a4\u8005",
                    "Traditional Chinese": "\u6700\u9ad8\u7b49\u7ea7\u5b88\u62a4\u8005",
                    Japanese: "\u6700\u9ad8\u30ec\u30d9\u30eb\u30ac\u30fc\u30c7\u30a3\u30a2\u30f3",
                    Spanish: "",
                    Russian: "\u041d\u0430\u0438\u0432\u044b\u0441\u0448\u0438\u0439 \u0417\u0430\u0449\u0438\u0442\u043d\u0438\u043a"
                }]
            }
        });
        t.exports = i,
        cc._RF.pop()
    }
    , {}],
    DB_invite: [function(e, t) {
        "use strict";
        cc._RF.push(t, "f5f5fkAcd9HHaPfZAv8Y46f", "DB_invite");
        var i = cc.Class({
            name: "DB_invite",
            statics: {
                dataLen: 6,
                dataHead: '["id", "invitePeople", "gem"]',
                data: '{"1":[1,1,5],"2":[2,2,8],"3":[3,3,10],"4":[4,5,25],"5":[5,8,45],"6":[6,12,60]}'
            }
        });
        t.exports = i,
        cc._RF.pop()
    }
    , {}],
    DB_level: [function(e, t) {
        "use strict";
        cc._RF.push(t, "0a7e1SQCThJH7KfINZcQE3b", "DB_level");
        var i = cc.Class({
            name: "DB_level",
            statics: {
                dataLen: 60,
                dataHead: '["level", "wave", "waveCount", "zombieID1", "zombieCount1", "zombieID2", "zombieCount2"]',
                data: '{"1_1":[1,1,3,1,5,2,1],"1_2":[1,2,3,1,7,2,1],"1_3":[1,3,3,101,1,2,0],"2_1":[2,1,4,2,5,3,1],"2_2":[2,2,4,2,7,3,1],"2_3":[2,3,4,2,9,3,1],"2_4":[2,4,4,102,1,3,0],"3_1":[3,1,5,3,5,4,1],"3_2":[3,2,5,3,7,4,1],"3_3":[3,3,5,3,9,4,1],"3_4":[3,4,5,3,11,4,1],"3_5":[3,5,5,103,1,4,0],"4_1":[4,1,5,4,5,5,1],"4_2":[4,2,5,4,7,5,1],"4_3":[4,3,5,4,9,5,1],"4_4":[4,4,5,4,11,5,1],"4_5":[4,5,5,104,1,5,0],"5_1":[5,1,5,5,5,6,1],"5_2":[5,2,5,5,7,6,1],"5_3":[5,3,5,5,9,6,1],"5_4":[5,4,5,5,11,6,1],"5_5":[5,5,5,105,1,6,0],"6_1":[6,1,5,6,5,7,1],"6_2":[6,2,5,6,7,7,1],"6_3":[6,3,5,6,9,7,1],"6_4":[6,4,5,6,11,7,1],"6_5":[6,5,5,106,1,7,0],"7_1":[7,1,5,7,5,8,1],"7_2":[7,2,5,7,7,8,1],"7_3":[7,3,5,7,9,8,1],"7_4":[7,4,5,7,11,8,1],"7_5":[7,5,5,107,1,8,0],"8_1":[8,1,5,8,5,9,1],"8_2":[8,2,5,8,7,9,1],"8_3":[8,3,5,8,9,9,1],"8_4":[8,4,5,8,11,9,1],"8_5":[8,5,5,108,1,9,0],"9_1":[9,1,5,9,5,10,1],"9_2":[9,2,5,9,7,10,1],"9_3":[9,3,5,9,9,10,1],"9_4":[9,4,5,9,11,10,1],"9_5":[9,5,5,109,1,10,0],"10_1":[10,1,5,10,5,11,1],"10_2":[10,2,5,10,7,11,1],"10_3":[10,3,5,10,9,11,1],"10_4":[10,4,5,10,11,11,1],"10_5":[10,5,5,110,1,11,0],"11_1":[11,1,5,11,5,12,1],"11_2":[11,2,5,11,7,12,1],"11_3":[11,3,5,11,9,12,1],"11_4":[11,4,5,11,11,12,1],"11_5":[11,5,5,111,1,12,0],"12_1":[12,1,5,12,5,13,1],"12_2":[12,2,5,12,7,13,1],"12_3":[12,3,5,12,9,13,1],"12_4":[12,4,5,12,11,13,1],"12_5":[12,5,5,112,1,13,0],"13_1":[13,1,5,13,5,14,1],"13_2":[13,2,5,13,7,14,1],"13_3":[13,3,5,13,9,14,1],"13_4":[13,4,5,13,11,14,1],"13_5":[13,5,5,113,1,14,0],"14_1":[14,1,5,14,5,15,1],"14_2":[14,2,5,14,7,15,1],"14_3":[14,3,5,14,9,15,1],"14_4":[14,4,5,14,11,15,1],"14_5":[14,5,5,114,1,15,0],"15_1":[15,1,5,15,5,16,1],"15_2":[15,2,5,15,7,16,1],"15_3":[15,3,5,15,9,16,1],"15_4":[15,4,5,15,11,16,1],"15_5":[15,5,5,115,1,16,0],"16_1":[16,1,5,16,5,17,1],"16_2":[16,2,5,16,7,17,1],"16_3":[16,3,5,16,9,17,1],"16_4":[16,4,5,16,11,17,1],"16_5":[16,5,5,116,1,17,0],"17_1":[17,1,5,17,5,18,1],"17_2":[17,2,5,17,7,18,1],"17_3":[17,3,5,17,9,18,1],"17_4":[17,4,5,17,11,18,1],"17_5":[17,5,5,117,1,18,0],"18_1":[18,1,5,18,5,19,1],"18_2":[18,2,5,18,7,19,1],"18_3":[18,3,5,18,9,19,1],"18_4":[18,4,5,18,11,19,1],"18_5":[18,5,5,118,1,19,0],"19_1":[19,1,5,19,5,20,1],"19_2":[19,2,5,19,7,20,1],"19_3":[19,3,5,19,9,20,1],"19_4":[19,4,5,19,11,20,1],"19_5":[19,5,5,119,1,20,0],"20_1":[20,1,5,20,5,21,1],"20_2":[20,2,5,20,7,21,1],"20_3":[20,3,5,20,9,21,1],"20_4":[20,4,5,20,11,21,1],"20_5":[20,5,5,120,1,21,0],"21_1":[21,1,5,21,5,22,1],"21_2":[21,2,5,21,7,22,1],"21_3":[21,3,5,21,9,22,1],"21_4":[21,4,5,21,11,22,1],"21_5":[21,5,5,121,1,22,0],"22_1":[22,1,5,22,5,23,1],"22_2":[22,2,5,22,7,23,1],"22_3":[22,3,5,22,9,23,1],"22_4":[22,4,5,22,11,23,1],"22_5":[22,5,5,122,1,23,0],"23_1":[23,1,5,23,5,24,1],"23_2":[23,2,5,23,7,24,1],"23_3":[23,3,5,23,9,24,1],"23_4":[23,4,5,23,11,24,1],"23_5":[23,5,5,123,1,24,0],"24_1":[24,1,5,24,5,25,1],"24_2":[24,2,5,24,7,25,1],"24_3":[24,3,5,24,9,25,1],"24_4":[24,4,5,24,11,25,1],"24_5":[24,5,5,124,1,25,0],"25_1":[25,1,5,25,5,26,1],"25_2":[25,2,5,25,7,26,1],"25_3":[25,3,5,25,9,26,1],"25_4":[25,4,5,25,11,26,1],"25_5":[25,5,5,125,1,26,0],"26_1":[26,1,5,26,5,27,1],"26_2":[26,2,5,26,7,27,1],"26_3":[26,3,5,26,9,27,1],"26_4":[26,4,5,26,11,27,1],"26_5":[26,5,5,126,1,27,0],"27_1":[27,1,5,27,5,28,1],"27_2":[27,2,5,27,7,28,1],"27_3":[27,3,5,27,9,28,1],"27_4":[27,4,5,27,11,28,1],"27_5":[27,5,5,127,1,28,0],"28_1":[28,1,5,28,5,29,1],"28_2":[28,2,5,28,7,29,1],"28_3":[28,3,5,28,9,29,1],"28_4":[28,4,5,28,11,29,1],"28_5":[28,5,5,128,1,29,0],"29_1":[29,1,5,29,5,30,1],"29_2":[29,2,5,29,7,30,1],"29_3":[29,3,5,29,9,30,1],"29_4":[29,4,5,29,11,30,1],"29_5":[29,5,5,129,1,30,0],"30_1":[30,1,5,30,5,31,1],"30_2":[30,2,5,30,7,31,1],"30_3":[30,3,5,30,9,31,1],"30_4":[30,4,5,30,11,31,1],"30_5":[30,5,5,130,1,31,0],"31_1":[31,1,5,31,5,32,1],"31_2":[31,2,5,31,7,32,1],"31_3":[31,3,5,31,9,32,1],"31_4":[31,4,5,31,11,32,1],"31_5":[31,5,5,131,1,32,0],"32_1":[32,1,5,32,5,33,1],"32_2":[32,2,5,32,7,33,1],"32_3":[32,3,5,32,9,33,1],"32_4":[32,4,5,32,11,33,1],"32_5":[32,5,5,132,1,33,0],"33_1":[33,1,5,33,5,34,1],"33_2":[33,2,5,33,7,34,1],"33_3":[33,3,5,33,9,34,1],"33_4":[33,4,5,33,11,34,1],"33_5":[33,5,5,133,1,34,0],"34_1":[34,1,5,34,5,35,1],"34_2":[34,2,5,34,7,35,1],"34_3":[34,3,5,34,9,35,1],"34_4":[34,4,5,34,11,35,1],"34_5":[34,5,5,134,1,35,0],"35_1":[35,1,5,35,5,36,1],"35_2":[35,2,5,35,7,36,1],"35_3":[35,3,5,35,9,36,1],"35_4":[35,4,5,35,11,36,1],"35_5":[35,5,5,135,1,36,0],"36_1":[36,1,5,36,5,37,1],"36_2":[36,2,5,36,7,37,1],"36_3":[36,3,5,36,9,37,1],"36_4":[36,4,5,36,11,37,1],"36_5":[36,5,5,136,1,37,0],"37_1":[37,1,5,37,5,38,1],"37_2":[37,2,5,37,7,38,1],"37_3":[37,3,5,37,9,38,1],"37_4":[37,4,5,37,11,38,1],"37_5":[37,5,5,137,1,38,0],"38_1":[38,1,5,38,5,39,1],"38_2":[38,2,5,38,7,39,1],"38_3":[38,3,5,38,9,39,1],"38_4":[38,4,5,38,11,39,1],"38_5":[38,5,5,138,1,39,0],"39_1":[39,1,5,39,5,40,1],"39_2":[39,2,5,39,7,40,1],"39_3":[39,3,5,39,9,40,1],"39_4":[39,4,5,39,11,40,1],"39_5":[39,5,5,139,1,40,0],"40_1":[40,1,5,40,5,41,1],"40_2":[40,2,5,40,7,41,1],"40_3":[40,3,5,40,9,41,1],"40_4":[40,4,5,40,11,41,1],"40_5":[40,5,5,140,1,41,0],"41_1":[41,1,5,41,5,42,1],"41_2":[41,2,5,41,7,42,1],"41_3":[41,3,5,41,9,42,1],"41_4":[41,4,5,41,11,42,1],"41_5":[41,5,5,141,1,42,0],"42_1":[42,1,5,42,5,43,1],"42_2":[42,2,5,42,7,43,1],"42_3":[42,3,5,42,9,43,1],"42_4":[42,4,5,42,11,43,1],"42_5":[42,5,5,142,1,43,0],"43_1":[43,1,5,43,5,44,1],"43_2":[43,2,5,43,7,44,1],"43_3":[43,3,5,43,9,44,1],"43_4":[43,4,5,43,11,44,1],"43_5":[43,5,5,143,1,44,0],"44_1":[44,1,5,44,5,45,1],"44_2":[44,2,5,44,7,45,1],"44_3":[44,3,5,44,9,45,1],"44_4":[44,4,5,44,11,45,1],"44_5":[44,5,5,144,1,45,0],"45_1":[45,1,5,45,5,46,1],"45_2":[45,2,5,45,7,46,1],"45_3":[45,3,5,45,9,46,1],"45_4":[45,4,5,45,11,46,1],"45_5":[45,5,5,145,1,46,0],"46_1":[46,1,5,46,5,47,1],"46_2":[46,2,5,46,7,47,1],"46_3":[46,3,5,46,9,47,1],"46_4":[46,4,5,46,11,47,1],"46_5":[46,5,5,146,1,47,0],"47_1":[47,1,5,47,5,48,1],"47_2":[47,2,5,47,7,48,1],"47_3":[47,3,5,47,9,48,1],"47_4":[47,4,5,47,11,48,1],"47_5":[47,5,5,147,1,48,0],"48_1":[48,1,5,48,5,49,1],"48_2":[48,2,5,48,7,49,1],"48_3":[48,3,5,48,9,49,1],"48_4":[48,4,5,48,11,49,1],"48_5":[48,5,5,148,1,49,0],"49_1":[49,1,5,49,5,50,1],"49_2":[49,2,5,49,7,50,1],"49_3":[49,3,5,49,9,50,1],"49_4":[49,4,5,49,11,50,1],"49_5":[49,5,5,149,1,50,0],"50_1":[50,1,5,50,5,51,1],"50_2":[50,2,5,50,7,51,1],"50_3":[50,3,5,50,9,51,1],"50_4":[50,4,5,50,11,51,1],"50_5":[50,5,5,150,1,51,0],"51_1":[51,1,5,51,5,52,1],"51_2":[51,2,5,51,7,52,1],"51_3":[51,3,5,51,9,52,1],"51_4":[51,4,5,51,11,52,1],"51_5":[51,5,5,151,1,52,0],"52_1":[52,1,5,52,5,53,1],"52_2":[52,2,5,52,7,53,1],"52_3":[52,3,5,52,9,53,1],"52_4":[52,4,5,52,11,53,1],"52_5":[52,5,5,152,1,53,0],"53_1":[53,1,5,53,5,54,1],"53_2":[53,2,5,53,7,54,1],"53_3":[53,3,5,53,9,54,1],"53_4":[53,4,5,53,11,54,1],"53_5":[53,5,5,153,1,54,0],"54_1":[54,1,5,54,5,55,1],"54_2":[54,2,5,54,7,55,1],"54_3":[54,3,5,54,9,55,1],"54_4":[54,4,5,54,11,55,1],"54_5":[54,5,5,154,1,55,0],"55_1":[55,1,5,55,5,56,1],"55_2":[55,2,5,55,7,56,1],"55_3":[55,3,5,55,9,56,1],"55_4":[55,4,5,55,11,56,1],"55_5":[55,5,5,155,1,56,0],"56_1":[56,1,5,56,5,57,1],"56_2":[56,2,5,56,7,57,1],"56_3":[56,3,5,56,9,57,1],"56_4":[56,4,5,56,11,57,1],"56_5":[56,5,5,156,1,57,0],"57_1":[57,1,5,57,5,58,1],"57_2":[57,2,5,57,7,58,1],"57_3":[57,3,5,57,9,58,1],"57_4":[57,4,5,57,11,58,1],"57_5":[57,5,5,157,1,58,0],"58_1":[58,1,5,58,5,59,1],"58_2":[58,2,5,58,7,59,1],"58_3":[58,3,5,58,9,59,1],"58_4":[58,4,5,58,11,59,1],"58_5":[58,5,5,158,1,59,0],"59_1":[59,1,5,59,5,60,1],"59_2":[59,2,5,59,7,60,1],"59_3":[59,3,5,59,9,60,1],"59_4":[59,4,5,59,11,60,1],"59_5":[59,5,5,159,1,60,0],"60_1":[60,1,5,60,5,60,1],"60_2":[60,2,5,60,7,60,1],"60_3":[60,3,5,60,9,60,1],"60_4":[60,4,5,60,11,60,1],"60_5":[60,5,5,160,1,60,0]}'
            }
        });
        t.exports = i,
        cc._RF.pop()
    }
    , {}],
    DB_levelupGem: [function(e, t) {
        "use strict";
        cc._RF.push(t, "ff61bcftMZCV7C5W8v7t1d/", "DB_levelupGem");
        var i = cc.Class({
            name: "DB_levelupGem",
            statics: {
                dataLen: 60,
                dataHead: '["level", "gem"]',
                data: '{"3":[3,3],"5":[5,3],"8":[8,3],"11":[11,3],"14":[14,5],"17":[17,5],"19":[19,5],"21":[21,5],"23":[23,5],"25":[25,5],"27":[27,5],"29":[29,5],"31":[31,8],"33":[33,8],"35":[35,8],"37":[37,8],"39":[39,8],"41":[41,8],"43":[43,8],"45":[45,8],"47":[47,10],"49":[49,10],"51":[51,10],"53":[53,10],"55":[55,10],"57":[57,10],"59":[59,10]}',
                data_101: '{"3":[3,3],"5":[5,3],"8":[8,3],"11":[11,3],"14":[14,5],"17":[17,5],"19":[19,5],"21":[21,5],"23":[23,5],"25":[25,5],"27":[27,5],"29":[29,5],"31":[31,8],"33":[33,8],"35":[35,8],"37":[37,8],"39":[39,8],"41":[41,8],"43":[43,8],"45":[45,8],"47":[47,10],"49":[49,10],"51":[51,10],"53":[53,10],"55":[55,10],"57":[57,10],"59":[59,10]}',
                data_102: '{"1":[1,5],"2":[2,5],"3":[3,5],"4":[4,5],"5":[5,5],"6":[6,10],"7":[7,10],"8":[8,10],"9":[9,10],"10":[10,10],"11":[11,20],"12":[12,20],"13":[13,20],"14":[14,20],"15":[15,20],"16":[16,30],"17":[17,30],"18":[18,30],"19":[19,30],"20":[20,30],"21":[21,40],"22":[22,40],"23":[23,40],"24":[24,40],"25":[25,40],"26":[26,50],"27":[27,50],"28":[28,50],"29":[29,50],"30":[30,50],"31":[31,60],"32":[32,60],"33":[33,60],"34":[34,60],"35":[35,60],"36":[36,70],"37":[37,70],"38":[38,70],"39":[39,70],"40":[40,70],"41":[41,80],"42":[42,80],"43":[43,80],"44":[44,80],"45":[45,80],"46":[46,90],"47":[47,90],"48":[48,90],"49":[49,90],"50":[50,90],"51":[51,100],"52":[52,100],"53":[53,100],"54":[54,100],"55":[55,100],"56":[56,120],"57":[57,120],"58":[58,120],"59":[59,120],"60":[60,120]}'
            }
        });
        t.exports = i,
        cc._RF.pop()
    }
    , {}],
    DB_plantName: [function(e, t) {
        "use strict";
        cc._RF.push(t, "46259O/ct9H+Jd5a2HCfXCm", "DB_plantName");
        var i = cc.Class({
            name: "DB_plantName",
            statics: {
                data: [{
                    Key: "guardian-1",
                    English: "Twig",
                    "Simplified Chinese": "\u5c0f\u6811\u679d",
                    "Traditional Chinese": "\u5c0f\u6811\u679d",
                    Japanese: "\u30c4\u30a4\u30c3\u30b0",
                    Spanish: "Ramita",
                    Russian: "\u0412\u0435\u0442\u043e\u0447\u043a\u0430"
                }, {
                    Key: "guardian-2",
                    English: "Woody",
                    "Simplified Chinese": "\u65e0\u654c\u5c0f\u6811",
                    "Traditional Chinese": "\u65e0\u654c\u5c0f\u6811",
                    Japanese: "\u30a6\u30c3\u30c7\u30a3",
                    Spanish: "Le\xf1oso",
                    Russian: "\u041f\u0440\u0443\u0442\u0438\u043a"
                }, {
                    Key: "guardian-3",
                    English: "FallFro",
                    "Simplified Chinese": "\u7206\u70b8\u5934",
                    "Traditional Chinese": "\u7206\u70b8\u5934",
                    Japanese: "\u30cf\u30d5\u30ed",
                    Spanish: "FallFro",
                    Russian: "\u0410\u0444\u0440\u043e\u0441\u0435\u043d\u044c"
                }, {
                    Key: "guardian-4",
                    English: "GrassPutin",
                    "Simplified Chinese": "\u5927\u80e1\u5b50\u6811\u53d4",
                    "Traditional Chinese": "\u5927\u80e1\u5b50\u6811\u53d4",
                    Japanese: "\u30a6\u30b7\u30e3\u30f3\u30ab",
                    Spanish: "GrassPutin",
                    Russian: "\u0413\u0440\u0430\u0441\u0441\u043f\u0443\u0442\u0438\u043d"
                }, {
                    Key: "guardian-5",
                    English: "Cyclog",
                    "Simplified Chinese": "\u72ec\u773c\u6811\u4fa0",
                    "Traditional Chinese": "\u72ec\u773c\u6811\u4fa0",
                    Japanese: "\u30b5\u30a4\u30af\u30ed\u30d7\u30b9",
                    Spanish: "Cyclog",
                    Russian: "\u0426\u0438\u043a\u043b\u043e\u0433"
                }, {
                    Key: "guardian-6",
                    English: "Cypress",
                    "Simplified Chinese": "\u5927\u809a\u9ec4\u67cf",
                    "Traditional Chinese": "\u5927\u809a\u9ec4\u67cf",
                    Japanese: "\u30dd\u30f3\u30dd\u30f3",
                    Spanish: "Cipr\xe9s",
                    Russian: "\u041a\u0438\u043f\u0430\u0440\u0438\u0441"
                }, {
                    Key: "guardian-7",
                    English: "Eggwood",
                    "Simplified Chinese": "\u5927\u809a\u7eff\u67cf",
                    "Traditional Chinese": "\u5927\u809a\u7eff\u67cf",
                    Japanese: "\u30dc\u30f3\u30dc\u30f3",
                    Spanish: "Eggwood",
                    Russian: "\u0414\u0440\u043e\u0432\u043e\u044f\u0439\u043a"
                }, {
                    Key: "guardian-8",
                    English: "Bluecap",
                    "Simplified Chinese": "\u5c0f\u84dd\u5e3d",
                    "Traditional Chinese": "\u5c0f\u84dd\u5e3d",
                    Japanese: "\u30a2\u30aa\u30bf\u30b1",
                    Spanish: "Gorra azul",
                    Russian: "\u0421\u0438\u043d\u0435\u0433\u043b\u0430\u0432"
                }, {
                    Key: "guardian-9",
                    English: "Redcap",
                    "Simplified Chinese": "\u5927\u7ea2\u5e3d",
                    "Traditional Chinese": "\u5927\u7ea2\u5e3d",
                    Japanese: "\u30a2\u30ab\u30bf\u30b1",
                    Spanish: "Gorra roja",
                    Russian: "\u041c\u0443\u0445\u043e\u043c\u043e\u0440"
                }, {
                    Key: "guardian-10",
                    English: "Antlers",
                    "Simplified Chinese": "\u9762\u5177\u4fa0",
                    "Traditional Chinese": "\u9762\u5177\u4fa0",
                    Japanese: "\u30c4\u30ce\u30ab\u30e1\u30f3",
                    Spanish: "Cornamenta",
                    Russian: "\u0420\u043e\u0433\u0430\u0447"
                }, {
                    Key: "guardian-11",
                    English: "Woodface",
                    "Simplified Chinese": "\u53cc\u89d2\u9762\u5177\u4fa0",
                    "Traditional Chinese": "\u53cc\u89d2\u9762\u5177\u4fa0",
                    Japanese: "\u30cf\u30a6\u30c1\u30ef\u30f3",
                    Spanish: "Cara de madera",
                    Russian: "\u0414\u0440\u043e\u0432\u043e\u043b\u0438\u0446"
                }, {
                    Key: "guardian-12",
                    English: "Rocky",
                    "Simplified Chinese": "\u6d1b\u57fa\u77f3\u4eba",
                    "Traditional Chinese": "\u6d1b\u57fa\u77f3\u4eba",
                    Japanese: "\u30ed\u30c3\u30ad\u30fc",
                    Spanish: "Rocoso",
                    Russian: "\u041a\u0430\u043c\u0435\u043d\u0435\u0446"
                }, {
                    Key: "guardian-13",
                    English: "GreenPup",
                    "Simplified Chinese": "\u7eff\u6811\u77f3\u72ee",
                    "Traditional Chinese": "\u7eff\u6811\u77f3\u72ee",
                    Japanese: "\u30cf\u30c3\u30d1\u30d4\u30fc",
                    Spanish: "GreenPup",
                    Russian: "\u0417\u0435\u043b\u0435\u043d\u0435\u0446"
                }, {
                    Key: "guardian-14",
                    English: "IcePup",
                    "Simplified Chinese": "\u84dd\u51b0\u77f3\u72ee",
                    "Traditional Chinese": "\u84dd\u51b0\u77f3\u72ee",
                    Japanese: "\u30a2\u30a4\u30b9\u30d1\u30d4\u30fc",
                    Spanish: "IcePup",
                    Russian: "\u041b\u0435\u0434\u0438\u043d\u0435\u0446"
                }, {
                    Key: "guardian-15",
                    English: "GorillHot",
                    "Simplified Chinese": "\u7ea2\u5b9d\u77f3\u72ee",
                    "Traditional Chinese": "\u7ea2\u5b9d\u77f3\u72ee",
                    Japanese: "\u30db\u30c3\u30c8\u30d2\u30d2",
                    Spanish: "GorillHot",
                    Russian: "\u0413\u043e\u0440\u0438\u043b\u0435\u0446"
                }, {
                    Key: "guardian-16",
                    English: "Salamandarin",
                    "Simplified Chinese": "\u8428\u62c9\u70ed\u86d9",
                    "Traditional Chinese": "\u8428\u62c9\u70ed\u86d9",
                    Japanese: "\u30a4\u30e2\u30ea\u30f3",
                    Spanish: "Salamandarin",
                    Russian: "\u0421\u0430\u043b\u0430\u043c\u0430\u043d\u0434\u0430\u0440\u0438\u043d"
                }, {
                    Key: "guardian-17",
                    English: "LemonToad",
                    "Simplified Chinese": "\u67e0\u6aac\u9676\u5fb3",
                    "Traditional Chinese": "\u67e0\u6aac\u9676\u5fb3",
                    Japanese: "\u30ec\u30e2\u30ac\u30a8\u30eb",
                    Spanish: "LemonToad",
                    Russian: "\u041b\u0438\u043c\u043e\u0433\u0443\u0448\u043a\u0430"
                }, {
                    Key: "guardian-18",
                    English: "GardenGnome",
                    "Simplified Chinese": "\u7eff\u5e3d\u77ee\u4eba",
                    "Traditional Chinese": "\u7eff\u5e3d\u77ee\u4eba",
                    Japanese: "\u30cb\u30ef\u30ce\u30fc\u30e0",
                    Spanish: "Gnomo de jardin",
                    Russian: "\u0421\u0430\u0434\u043e\u0432\u044b\u0439\u0413\u043d\u043e\u043c"
                }, {
                    Key: "guardian-19",
                    English: "Sprite",
                    "Simplified Chinese": "\u7eff\u5e3d\u4fa0",
                    "Traditional Chinese": "\u7eff\u5e3d\u4fa0",
                    Japanese: "\u30b9\u30d7\u30e9\u30a4\u30c4",
                    Spanish: "Duende",
                    Russian: "\u042d\u043b\u044c\u0444"
                }, {
                    Key: "guardian-20",
                    English: "Lilac",
                    "Simplified Chinese": "\u7d2b\u8346\u516c\u4e3b",
                    "Traditional Chinese": "\u7d2b\u8346\u516c\u4e3b",
                    Japanese: "\u30e9\u30a4\u30e9\u30c3\u30af\u30eb",
                    Spanish: "Lila",
                    Russian: "\u0421\u0438\u0440\u0435\u043d\u044c"
                }, {
                    Key: "guardian-21",
                    English: "Eidelweiss",
                    "Simplified Chinese": "\u706b\u7ed2\u516c\u4e3b",
                    "Traditional Chinese": "\u706b\u7ed2\u516c\u4e3b",
                    Japanese: "\u30a8\u30fc\u30c7\u30eb\u30f3",
                    Spanish: "Eidelweiss",
                    Russian: "\u042d\u0439\u0434\u0435\u043b\u044c\u0432\u0435\u0439\u0441"
                }, {
                    Key: "guardian-22",
                    English: "Rose",
                    "Simplified Chinese": "\u73ab\u7470\u516c\u4e3b",
                    "Traditional Chinese": "\u73ab\u7470\u516c\u4e3b",
                    Japanese: "\u30e9\u30d9\u30f3\u30c7\u30a3",
                    Spanish: "Rosa",
                    Russian: "\u0420\u043e\u0437\u0430"
                }, {
                    Key: "guardian-23",
                    English: "Daisy",
                    "Simplified Chinese": "\u96cf\u83ca\u516c\u4e3b",
                    "Traditional Chinese": "\u96cf\u83ca\u516c\u4e3b",
                    Japanese: "\u30c7\u30a4\u30b8\u30fc",
                    Spanish: "Margarita",
                    Russian: "\u041c\u0430\u0440\u0433\u0430\u0440\u0438\u0442\u043a\u0430"
                }, {
                    Key: "guardian-24",
                    English: "Teala",
                    "Simplified Chinese": "\u7eff\u6728\u516c\u4e3b",
                    "Traditional Chinese": "\u7eff\u6728\u516c\u4e3b",
                    Japanese: "\u30c1\u30e3\u30d0\u30c6\u30a3",
                    Spanish: "Teala",
                    Russian: "\u0422\u0435\u0430\u043b\u0430"
                }, {
                    Key: "guardian-25",
                    English: "Cupidog",
                    "Simplified Chinese": "\u90b1\u6bd4\u718a",
                    "Traditional Chinese": "\u90b1\u6bd4\u718a",
                    Japanese: "\u30d4\u30c3\u30c9\u30ad\u30e5\u30fc",
                    Spanish: "Cupidog",
                    Russian: "\u041a\u0443\u043f\u0438\u0434\u043e\u0433"
                }, {
                    Key: "guardian-26",
                    English: "BlueBunny",
                    "Simplified Chinese": "\u84dd\u5154\u4fa0",
                    "Traditional Chinese": "\u84dd\u5154\u4fa0",
                    Japanese: "\u30e9\u30d3\u30ed\u30c3\u30c8",
                    Spanish: "Bluebunny",
                    Russian: "\u0421\u0438\u043d\u0435\u0437\u0430\u0439"
                }, {
                    Key: "guardian-27",
                    English: "Turnip",
                    "Simplified Chinese": "\u751c\u83dc\u718a",
                    "Traditional Chinese": "\u751c\u83dc\u718a",
                    Japanese: "\u30bf\u30fc\u30cb\u30c3\u30d7",
                    Spanish: "Nabo",
                    Russian: "\u0420\u0435\u043f\u0430"
                }, {
                    Key: "guardian-28",
                    English: "GrassBlade",
                    "Simplified Chinese": "\u7eff\u5251\u718a",
                    "Traditional Chinese": "\u7eff\u5251\u718a",
                    Japanese: "\u30cf\u30c4\u30eb\u30ae\u30ea\u30b9",
                    Spanish: "GrassBlade",
                    Russian: "\u041b\u0435\u0437\u0432\u0438\u0435\u0422\u0440\u0430\u0432\u044b"
                }, {
                    Key: "guardian-29",
                    English: "PeaWing",
                    "Simplified Chinese": "\u9752\u8c46\u9690\u8005",
                    "Traditional Chinese": "\u9752\u8c46\u9690\u8005",
                    Japanese: "\u30b9\u30ca\u30c3\u30d4\u30fc",
                    Spanish: "PeaWing",
                    Russian: "\u0413\u043e\u0440\u043e\u0445\u043e\u043a\u0440\u044b\u043b"
                }, {
                    Key: "guardian-30",
                    English: "Barkling",
                    "Simplified Chinese": "\u6811\u6d1e\u5bc6\u7075",
                    "Traditional Chinese": "\u6811\u6d1e\u5bc6\u7075",
                    Japanese: "\u30ad\u30ce\u30b3\u30ce\u30ad",
                    Spanish: "Barkling",
                    Russian: "\u0413\u0430\u0432\u0447\u0443\u043d"
                }, {
                    Key: "guardian-31",
                    English: "Totem",
                    "Simplified Chinese": "\u56fe\u817e\u9886\u4e3b",
                    "Traditional Chinese": "\u56fe\u817e\u9886\u4e3b",
                    Japanese: "\u30c8\u30fc\u30c6\u30e0",
                    Spanish: "T\xf3tem",
                    Russian: "\u0422\u043e\u0442\u0435\u043c"
                }, {
                    Key: "guardian-32",
                    English: "Pebbles",
                    "Simplified Chinese": "\u9e45\u5375\u5854\u7075",
                    "Traditional Chinese": "\u9e45\u5375\u5854\u7075",
                    Japanese: "\u30da\u30d6\u30eb\u30f3",
                    Spanish: "guijarros",
                    Russian: "\u041a\u0430\u043c\u0443\u0448\u0435\u043a"
                }, {
                    Key: "guardian-33",
                    English: "StoneHead",
                    "Simplified Chinese": "\u77f3\u50cf\u5de8\u5934",
                    "Traditional Chinese": "\u77f3\u50cf\u5de8\u5934",
                    Japanese: "\u30b3\u30ef\u30a4\u30be\u30a6",
                    Spanish: "Cabeza de piedra",
                    Russian: "\u041a\u0430\u043c\u043d\u0435\u0413\u043b\u0430\u0432"
                }, {
                    Key: "guardian-34",
                    English: "Dolmen",
                    "Simplified Chinese": "\u795e\u79d8\u77f3\u7891",
                    "Traditional Chinese": "\u795e\u79d8\u77f3\u7891",
                    Japanese: "\u30c9\u30eb\u30e1\u30f3",
                    Spanish: "Dolmen",
                    Russian: "\u0414\u043e\u043b\u044c\u043c\u0435\u043d"
                }, {
                    Key: "guardian-35",
                    English: "Golem",
                    "Simplified Chinese": "\u7070\u77f3\u5b88\u536b",
                    "Traditional Chinese": "\u7070\u77f3\u5b88\u536b",
                    Japanese: "\u30b4\u30fc\u30ec\u30e0",
                    Spanish: "Golem",
                    Russian: "\u0413\u043e\u043b\u0435\u043c"
                }, {
                    Key: "guardian-36",
                    English: "NutJob",
                    "Simplified Chinese": "\u677e\u9f20\u62f3\u51fb\u624b",
                    "Traditional Chinese": "\u677e\u9f20\u62f3\u51fb\u624b",
                    Japanese: "\u30ca\u30c3\u30c4\u30ea\u30b9",
                    Spanish: "Trabajo de bobos",
                    Russian: "\u041e\u0440\u0435\u0448\u0435\u043a"
                }, {
                    Key: "guardian-37",
                    English: "PowOwl",
                    "Simplified Chinese": "\u732b\u5934\u9e70\u7235\u58eb",
                    "Traditional Chinese": "\u732b\u5934\u9e70\u7235\u58eb",
                    Japanese: "\u30d5\u30af\u30ed\u30a6\u30eb",
                    Spanish: "PowOwl",
                    Russian: "\u0424\u0438\u043b\u0438\u043d"
                }, {
                    Key: "guardian-38",
                    English: "SeanHick",
                    "Simplified Chinese": "\u523a\u732c\u8096\u6069",
                    "Traditional Chinese": "\u523a\u732c\u8096\u6069",
                    Japanese: "\u30cf\u30ea\u30db\u30c3\u30b0",
                    Spanish: "SeanHick",
                    Russian: "\u0422\u0443\u043c\u0430\u043d\u0435\u0446"
                }, {
                    Key: "guardian-39",
                    English: "TrashPanda",
                    "Simplified Chinese": "\u6218\u6597\u72f8\u732b",
                    "Traditional Chinese": "\u6218\u6597\u72f8\u732b",
                    Japanese: "\u30a2\u30e9\u30a4\u30d9\u30a2",
                    Spanish: "TrashPanda",
                    Russian: "\u041f\u0430\u043d\u0434\u0430\u0414\u0432\u043e\u0440\u043d\u0438\u043a"
                }, {
                    Key: "guardian-40",
                    English: "Justin",
                    "Simplified Chinese": "\u6d77\u736d\u536b\u58eb",
                    "Traditional Chinese": "\u6d77\u736d\u536b\u58eb",
                    Japanese: "\u30b8\u30e3\u30b9\u30c6\u30a3\u30f3",
                    Spanish: "Justin",
                    Russian: "\u0411\u043e\u0431\u0440\u0438\u043a"
                }, {
                    Key: "guardian-41",
                    English: "Chief",
                    "Simplified Chinese": "\u795e\u79d8\u914b\u957f",
                    "Traditional Chinese": "\u795e\u79d8\u914b\u957f",
                    Japanese: "\u30ea\u30eb\u30c1\u30fc\u30d5",
                    Spanish: "Jefe",
                    Russian: "\u0428\u0435\u0444"
                }, {
                    Key: "guardian-42",
                    English: "Sylvid",
                    "Simplified Chinese": "\u6728\u795e\u5e0c\u5c14",
                    "Traditional Chinese": "\u6728\u795e\u5e0c\u5c14",
                    Japanese: "\u30b7\u30eb\u30d3\u30c3\u30c9",
                    Spanish: "Sylvid",
                    Russian: "\u0421\u0438\u043b\u044c\u0432\u0438\u0434\u0430"
                }, {
                    Key: "guardian-43",
                    English: "Onidine",
                    "Simplified Chinese": "\u6c34\u795e\u5965\u59ae",
                    "Traditional Chinese": "\u6c34\u795e\u5965\u59ae",
                    Japanese: "\u30aa\u30cb\u30c0\u30a4\u30f3",
                    Spanish: "Onidine",
                    Russian: "\u041e\u043d\u0438\u0434\u0438\u043d\u0430"
                }, {
                    Key: "guardian-44",
                    English: "Zenine",
                    "Simplified Chinese": "\u51a5\u60f3\u7231\u739b",
                    "Traditional Chinese": "\u51a5\u60f3\u7231\u739b",
                    Japanese: "\u30bc\u30f3\u30c6\u30fc\u30eb",
                    Spanish: "Zenine",
                    Russian: "\u0417\u0435\u043d\u0438\u043d\u0430"
                }, {
                    Key: "guardian-45",
                    English: "Tritail",
                    "Simplified Chinese": "\u7d2b\u83f1\u7fe0\u897f",
                    "Traditional Chinese": "\u7d2b\u83f1\u7fe0\u897f",
                    Japanese: "\u30c8\u30e9\u30a4\u30c6\u30fc\u30eb",
                    Spanish: "Tritail",
                    Russian: "\u0422\u0440\u0438\u0425\u0432\u043e\u0441\u0442\u0438\u0446\u0430"
                }, {
                    Key: "guardian-46",
                    English: "Pinkwind",
                    "Simplified Chinese": "\u5343\u624b\u6e29\u8482",
                    "Traditional Chinese": "\u5343\u624b\u6e29\u8482",
                    Japanese: "\u30d4\u30f3\u30af\u30cd\u30fc\u30c9",
                    Spanish: "Pinkwind",
                    Russian: "\u0420\u043e\u0437\u0430\u0412\u0435\u0442\u0440\u043e\u0432"
                }, {
                    Key: "guardian-47",
                    English: "Unitaur",
                    "Simplified Chinese": "\u72ec\u89d2\u4f18\u5a1c",
                    "Traditional Chinese": "\u72ec\u89d2\u4f18\u5a1c",
                    Japanese: "\u30e6\u30cb\u30bf\u30a6\u30ed\u30b9",
                    Spanish: "Unitaur",
                    Russian: "\u0423\u043d\u0438\u0442\u0430\u0432\u0440"
                }, {
                    Key: "guardian-48",
                    English: "LadyBug",
                    "Simplified Chinese": "\u4e03\u661f\u884c\u8005",
                    "Traditional Chinese": "\u4e03\u661f\u884c\u8005",
                    Japanese: "\u30c6\u30f3\u30c8\u30a5\u30fc",
                    Spanish: "Mariquita",
                    Russian: "\u041a\u043e\u0440\u043e\u0432\u043a\u0430"
                }, {
                    Key: "guardian-49",
                    English: "Queeny",
                    "Simplified Chinese": "\u9ec4\u8702\u7687\u540e",
                    "Traditional Chinese": "\u9ec4\u8702\u7687\u540e",
                    Japanese: "\u30af\u30a4\u30f3\u30d3\u30fc",
                    Spanish: "Queeny",
                    Russian: "\u041f\u0447\u0435\u043b\u043e\u041c\u0430\u0442\u043a\u0430"
                }, {
                    Key: "guardian-50",
                    English: "Beetle",
                    "Simplified Chinese": "\u72ec\u89d2\u4ed9\u4eba",
                    "Traditional Chinese": "\u72ec\u89d2\u4ed9\u4eba",
                    Japanese: "\u30ab\u30d6\u30c8\u30ed\u30f3",
                    Spanish: "Escarabajo",
                    Russian: "\u0416\u0443\u0447\u0435\u043a"
                }, {
                    Key: "guardian-51",
                    English: "Monna",
                    "Simplified Chinese": "\u8774\u8776\u516c\u4e3b",
                    "Traditional Chinese": "\u8774\u8776\u516c\u4e3b",
                    Japanese: "\u30a2\u30b2\u30cf\u30e9\u30f3",
                    Spanish: "Monna",
                    Russian: "\u041c\u043e\u043d\u043d\u0430"
                }, {
                    Key: "guardian-52",
                    English: "CottonBall",
                    "Simplified Chinese": "\u68c9\u7403\u516c\u4e3b",
                    "Traditional Chinese": "\u68c9\u7403\u516c\u4e3b",
                    Japanese: "\u30e2\u30b9\u30df\u30b9",
                    Spanish: "Bola de algod\xf3n",
                    Russian: "\u0425\u043b\u043e\u043f\u043a\u043e\u0428\u0430\u0440"
                }, {
                    Key: "guardian-53",
                    English: "DragonEgg",
                    "Simplified Chinese": "\u9f99\u86cb\u4ed4",
                    "Traditional Chinese": "\u9f99\u86cb\u4ed4",
                    Japanese: "\u30c9\u30e9\u30bf\u30de\u30b4\u30f3",
                    Spanish: "DragonEgg",
                    Russian: "\u0414\u0440\u0430\u043a\u043e\u044f\u0439\u043a"
                }, {
                    Key: "guardian-54",
                    English: "Dragonlet",
                    "Simplified Chinese": "\u5c0f\u7d2b\u9f99",
                    "Traditional Chinese": "\u5c0f\u7d2b\u9f99",
                    Japanese: "\u30c9\u30e9\u30b5\u30a6\u30eb\u30b9",
                    Spanish: "Dragonlet",
                    Russian: "\u0414\u0440\u0430\u043a\u043e\u043d\u0447\u0438\u043a"
                }, {
                    Key: "guardian-55",
                    English: "Wyvernling",
                    "Simplified Chinese": "\u706b\u9f99\u738b\u5b50",
                    "Traditional Chinese": "\u706b\u9f99\u738b\u5b50",
                    Japanese: "\u30c9\u30e9\u30c7\u30d3\u30eb",
                    Spanish: "Wyvernling",
                    Russian: "\u0412\u0438\u0432\u0435\u0440\u043d\u043b\u0438\u043d\u0433"
                }, {
                    Key: "guardian-56",
                    English: "Dragon",
                    "Simplified Chinese": "\u5ca9\u6d46\u9886\u4e3b",
                    "Traditional Chinese": "\u5ca9\u6d46\u9886\u4e3b",
                    Japanese: "\u30c9\u30e9\u30b7\u30fc\u30b5\u30fc",
                    Spanish: "Continuar",
                    Russian: "\u0414\u0440\u0430\u043a\u043e\u0448\u0430"
                }, {
                    Key: "guardian-57",
                    English: "GreatWyrm",
                    "Simplified Chinese": "\u5de8\u9f99\u97e6\u6069",
                    "Traditional Chinese": "\u5de8\u9f99\u97e6\u6069",
                    Japanese: "\u30c9\u30e9\u30b5\u30bf\u30f3",
                    Spanish: "GreatWyrm",
                    Russian: "\u0412\u0438\u0440\u043c"
                }, {
                    Key: "guardian-58",
                    English: "GreenMagi",
                    "Simplified Chinese": "\u7eff\u6728\u5723\u5973",
                    "Traditional Chinese": "\u7eff\u6728\u5723\u5973",
                    Japanese: "\u30b0\u30ea\u30f3\u30de\u30ae\u30fc",
                    Spanish: "GreenMagi",
                    Russian: "\u0417\u0435\u043b\u0435\u0424\u0435\u044f"
                }, {
                    Key: "guardian-59",
                    English: "DarkMagi",
                    "Simplified Chinese": "\u7d2b\u8346\u5723\u5973",
                    "Traditional Chinese": "\u7d2b\u8346\u5723\u5973",
                    Japanese: "\u30c0\u30fc\u30af\u30de\u30ae\u30fc",
                    Spanish: "DarkMagi",
                    Russian: "\u0427\u0435\u0440\u043d\u043e\u0424\u0435\u044f"
                }, {
                    Key: "guardian-60",
                    English: "UltiMagi",
                    "Simplified Chinese": "\u5929\u4f7f\u5723\u5973",
                    "Traditional Chinese": "\u5929\u4f7f\u5723\u5973",
                    Japanese: "\u30df\u30f3\u30c8\u30de\u30ae\u30fc",
                    Spanish: "UltiMagi",
                    Russian: "\u0423\u043b\u044c\u0442\u0438\u0424\u0435\u044f"
                }, {
                    Key: "guardian-61",
                    English: "Picasso",
                    "Simplified Chinese": "\u795e\u9f9f\u6597\u58eb",
                    "Traditional Chinese": "\u795e\u9f9f\u6597\u58eb",
                    Japanese: "\u30d4\u30c3\u30ab\u30bd",
                    Spanish: "Picasso",
                    Russian: "\u041f\u0438\u043a\u0430\u0441\u0441\u043e"
                }, {
                    Key: "guardian-62",
                    English: "Chitinus",
                    "Simplified Chinese": "\u9f99\u867e\u8d85\u4eba",
                    "Traditional Chinese": "\u9f99\u867e\u8d85\u4eba",
                    Japanese: "\u30ab\u30cb\u30ab\u30d6\u30c8",
                    Spanish: "Chitinus",
                    Russian: "\u0425\u0438\u0442\u0438\u043d"
                }, {
                    Key: "guardian-63",
                    English: "Neptune",
                    "Simplified Chinese": "\u4e09\u53c9\u5de8\u9cb6",
                    "Traditional Chinese": "\u4e09\u53c9\u5de8\u9cb6",
                    Japanese: "\u30dd\u30bb\u30a4\u30ae\u30e7\u30f3",
                    Spanish: "Neptuno",
                    Russian: "\u041d\u0435\u043f\u0442\u0443\u043d"
                }, {
                    Key: "guardian-64",
                    English: "Siren",
                    "Simplified Chinese": "\u4eba\u9c7c\u516c\u4e3b",
                    "Traditional Chinese": "\u4eba\u9c7c\u516c\u4e3b",
                    Japanese: "\u30b5\u30a4\u30ec\u30fc\u30f3",
                    Spanish: "Sirena",
                    Russian: "\u0421\u0438\u0440\u0435\u043d\u0430"
                }, {
                    Key: "guardian-65",
                    English: "MK",
                    "Simplified Chinese": "\u7334\u738b\u609f\u7a7a",
                    "Traditional Chinese": "\u7334\u738b\u609f\u7a7a",
                    Japanese: "\u30b4\u30f3\u30bd\u30af\u30fc",
                    Spanish: "MK",
                    Russian: "\u041c\u0430\u043a\u0430\u043a"
                }, {
                    Key: "guardian-66",
                    English: "Pussenboot",
                    "Simplified Chinese": "\u51fb\u5251\u732b\u4fa0",
                    "Traditional Chinese": "\u51fb\u5251\u732b\u4fa0",
                    Japanese: "\u30cd\u30b3\u30d6\u30fc\u30c4",
                    Spanish: "Pussenboot",
                    Russian: "\u041a\u043e\u0442\u0421\u0430\u043f\u043e\u0433"
                }, {
                    Key: "guardian-67",
                    English: "Aries",
                    "Simplified Chinese": "\u7ef5\u7f8a\u6597\u58eb",
                    "Traditional Chinese": "\u7ef5\u7f8a\u6597\u58eb",
                    Japanese: "\u30a2\u30ec\u30fc\u30b9",
                    Spanish: "Aries",
                    Russian: "\u041e\u0432\u0435\u043d"
                }, {
                    Key: "guardian-68",
                    English: "Bestet",
                    "Simplified Chinese": "\u80e1\u72fc\u5deb\u5e08",
                    "Traditional Chinese": "\u80e1\u72fc\u5deb\u5e08",
                    Japanese: "\u30d0\u30b9\u30c6\u30c8",
                    Spanish: "Bestet",
                    Russian: "\u0411\u0430\u0441\u0442\u0435\u0442"
                }, {
                    Key: "guardian-69",
                    English: "Peacock",
                    "Simplified Chinese": "\u795e\u9e70\u9886\u4e3b",
                    "Traditional Chinese": "\u795e\u9e70\u9886\u4e3b",
                    Japanese: "\u30af\u30b8\u30e3\u30c3\u30ad\u30fc",
                    Spanish: "Pavo real",
                    Russian: "\u041f\u0430\u0432\u043b\u0438\u043d"
                }, {
                    Key: "guardian-70",
                    English: "Tinkerbelle",
                    "Simplified Chinese": "\u5947\u5999\u4ed9\u5b50",
                    "Traditional Chinese": "\u5947\u5999\u4ed9\u5b50",
                    Japanese: "\u30b0\u30ea\u30f3\u30c0\u30ea\u30f3",
                    Spanish: "Tinkerbelle",
                    Russian: "\u0422\u0438\u043d\u043a\u0435\u0440\u0431\u0435\u043b\u043b"
                }, {
                    Key: "guardian-71",
                    English: "Teddy",
                    "Simplified Chinese": "\u6cf0\u8fea\u718a\u5b9d",
                    "Traditional Chinese": "\u6cf0\u8fea\u718a\u5b9d",
                    Japanese: "\u30c6\u30c7\u30a3",
                    Spanish: "Peluche",
                    Russian: "\u0422\u0435\u0434\u0434\u0438"
                }, {
                    Key: "guardian-72",
                    English: "Koala",
                    "Simplified Chinese": "\u5927\u8033\u8003\u62c9",
                    "Traditional Chinese": "\u5927\u8033\u8003\u62c9",
                    Japanese: "\u30b3\u30a2\u30e9",
                    Spanish: "Coala",
                    Russian: "\u041a\u043e\u0430\u043b\u0430"
                }, {
                    Key: "guardian-73",
                    English: "Wombat",
                    "Simplified Chinese": "\u888b\u718a\u52c7\u58eb",
                    "Traditional Chinese": "\u888b\u718a\u52c7\u58eb",
                    Japanese: "\u30a6\u30a9\u30f3\u30d0\u30c3\u30c8",
                    Spanish: "Wombat",
                    Russian: "\u0412\u043e\u043c\u0431\u0430\u0442"
                }, {
                    Key: "guardian-74",
                    English: "Fenec",
                    "Simplified Chinese": "\u8033\u5ed3\u72d0\u4ed9",
                    "Traditional Chinese": "\u8033\u5ed3\u72d0\u4ed9",
                    Japanese: "\u30d5\u30a7\u30cd\u30c3\u30af",
                    Spanish: "Fenec",
                    Russian: "\u0424\u0435\u043d\u0435\u043a"
                }, {
                    Key: "guardian-75",
                    English: "Platypus",
                    "Simplified Chinese": "\u9e2d\u5634\u6218\u58eb",
                    "Traditional Chinese": "\u9e2d\u5634\u6218\u58eb",
                    Japanese: "\u30d7\u30e9\u30c6\u30a3\u30d1\u30b9",
                    Spanish: "Ornitorrinco",
                    Russian: "\u0423\u0442\u043a\u043e\u043d\u043e\u0441"
                }]
            }
        });
        t.exports = i,
        cc._RF.pop()
    }
    , {}],
    DB_plant: [function(e, t) {
        "use strict";
        cc._RF.push(t, "99e9aR5Sl1LMJeZ/mf1FQay", "DB_plant");
        var i = cc.Class({
            name: "DB_plant",
            statics: {
                dataLen: 70,
                dataHead: '["level", "cd", "power", "skill", "offline", "price", "gem", "prefab", "shootPos", "steakColor", "head"]',
                data: '{"1":[1,1,10,"1|10",60,100,0,"01_58wdss","38,34","0xddff8d","01_58wdss",1,1,26,19,1,1],"2":[2,0.96,16,"2|10",28,1548,0,"63_80stwd","15,85","0xddff8d","63_80stwd",1,0,26,19,2,1.1],"3":[3,0.92,25,"3|5",13,6969,0,"35_75scss","20,45","0xddff8d","35_75scss",1,1,26,19,1,1],"4":[4,0.88,42,"1|11",6,18539,0,"02_29jqwd","35,45","0xffe400","02_29jqwd",0,1,26,19,1,1],"5":[5,0.84,75,"2|11",3,49314,0,"50_72yswdss","60,80","0xddff8d","50_72yswdss",1,1,25,35,1,1],"6":[6,0.81,140,"3|5.5",2,131176,0,"42_02aywd","40,58","0x9c00ff","42_02aywd",1,1,22,28,1,1],"7":[7,0.78,293,"1|12",11,348928,0,"33_28hywdss","30,78","0xffae00","33_28hywdss",1,1,22,26,1,1.1],"8":[8,0.75,601,"2|12",136,928149,0,"58_14dnwdss","31,71","0x00ff8a","58_14dnwdss",1,1,25,20,1,1],"9":[9,0.72,1214,"3|6",145,2468878,0,"18_30jgd","43,53","0x00fcff","18_30jgd",1,1,23,18,1,0.9],"10":[10,0.69,2536,"1|13",23,6567215,0,"38_55sxh","20,47","0xffffff","38_55sxh",1,1,20,29,1,1.1],"11":[11,0.67,5307,"2|13",76,17468797,6,"11_15dyg","33,53","0x7800ff","11_15dyg",1,1,18,23,1,1.1],"12":[12,0.65,11615,"3|6.5",113,46467000,8,"36_49qslm","30,50","0xffe400","36_49qslm",1,1,16,45,1,1],"13":[13,0.63,24392,"1|14",10,123602221,10,"13_70ymts","40,57","0xffe400","13_70ymts",1,1,24,12,1,1],"14":[14,0.61,51224,"2|14",25,328781909,13,"65_79mgck","40,57","0xffffff","65_79mgck",0,0,15,9,1,1],"15":[15,0.6,107572,"3|7",9,874559877,17,"15_11dxq","40,57","0xddff8d","15_11dxq",1,1,20,28,1,1],"16":[16,0.59,225903,"1|15",9,2326329273,22,"16_68yllj","26,73","0x7bbfff","16_68yllj",1,1,20,37,1,1],"17":[17,0.58,474396,"2|15",6,6188035867,30,"26_05blc","48,61","0x00fcff","26_05blc",1,1,17,40,1,0.9],"18":[18,0.57,996232,"3|7.5",8,16460175406,40,"05_25hxbss","29,44","0xffe400","05_25hxbss",0,1,20,29,1,1],"19":[19,0.56,2092088,"1|16",10,43784066580,50,"61_77mhs","30,46","0xff2c16","61_77mhs",0,1,23,12,1,1.1],"20":[20,0.55,4393386,"2|16",13,116465617103,60,"03_59xgts","25,80","0xddff8d","03_59xgts",1,1,26,18,1,1],"21":[21,0.54,9226110,"3|8",16,309798541495,80,"21_06bxg","25,80","0x00fcff","21_06bxg",1,1,26,18,1,1],"22":[22,0.53,19374831,"1|17",21,824064120378,100,"22_65xgjp","45,71","0xffc7ba","22_65xgjp",1,1,22,14,1,1],"23":[23,0.52,40687144,"2|17",10,2192010560204,130,"23_26hlc","54,73","0xff2c16","23_26hlc",1,1,22,29,1,0.9],"24":[24,0.51,85443003,"3|8.5",12,5830748090144,160,"24_34lbh","14,66","0xff92f6","24_34lbh",1,1,22,27,1,0.9],"25":[25,0.51,179430308,"1|17.5",16,15509789919784,200,"56_04bzg","45,52","0x20f3fa","56_04bzg",1,1,30,19,1,0.9],"26":[26,0.51,376803646,"2|17.5",20,41256041186627,240,"17_31jlmvw","49,44","0xffe400","17_31jlmvw",0,1,17,39,1,0.9],"27":[27,0.51,791287659,"3|8.5",25,109741069556429,290,"27_22hlbddc","41,54","0xffe400","27_22hlbddc",0,1,22,14,1,0.9],"28":[28,0.51,1661704084,"1|18",32,291911245020100,340,"44_32jfgl","75,63","0xddff8d","44_32jfgl",1,1,27,12,1,0.9],"29":[29,0.51,3489578577,"2|18",41,776483911753466,400,"52_13dlcl","52,60","0xff2751","52_13dlcl",0,1,26,15,1,0.9],"30":[30,0.51,7328115014,"3|9",52,2065447205264220,460,"06_46msg","15,115","0xffffff","06_46msg",1,1,21,14,2,0.9],"31":[31,0.51,15389041529,"1|18.5",25,5494089566002820,530,"31_35ljts","22,90","0xffd800","31_35ljts",1,1,29,14,1,1],"32":[32,0.51,32316987211,"2|18.5",31,14614278245567600,600,"32_60xrz","20,110","0xffd200","32_60xrz",1,1,11,32,1,1],"33":[33,0.51,67865673145,"3|9",40,38873980133209600,680,"20_03bj","10,100","0xccf824","20_03bj",1,1,18,16,1,1],"34":[34,0.51,142517913605,"1|19",51,103404787154336000,760,"34_54sjl","15,48","0x00fcff","34_54sjl",1,1,22,19,1,1],"35":[35,0.51,299287618570,"2|19",64,275056733830537000,850,"29_19hbg","22,50","0x00fcff","29_19hbg",1,1,26,39,1,0.85],"36":[36,0.51,628503998998,"3|9.5",81,731650911989229000,940,"14_66yzjlp","25,60","0xff2c16","14_66yzjlp",0,1,26,12,1,1],"37":[37,0.51,1319858397895,"1|19.5",103,1946191425891390000,1040,"37_41llys","62,108","0x00fcff","37_41llys",1,1,26,14,1,0.9],"38":[38,0.51,2771702635582,"2|19.5",131,5176869192871100000,1140,"62_69ymts","40,50","0xff00cc","62_69ymts",1,1,22,22,1,0.9],"39":[39,0.51,5820575534722,"3|9.5",166,13770472053037099008,1250,"39_18ffc","45,80","0xff2c16","39_18ffc",1,1,26,23,1,1],"40":[40,0.51,12223208622916,"1|20",210,36629455661078601728,1360,"40_67yylk","35,65","0x00fcff","40_67yylk",0,1,18,21,1,0.9],"41":[41,0.51,25668738108123,"2|20",267,97434352058469007360,1480,"10_12djlm","35,50","0x32ceff","10_12djlm",1,1,14,32,1,1],"42":[42,0.51,53904350027060,"3|10",338,259175376475526987776,1600,"08_38lo","30,70","0x00f0ff","08_38lo",1,1,24,37,1,1],"43":[43,0.51,113199135056826,"1|20.5",428,689406501424900997120,1730,"43_40lrcts","30,60","0xff2c16","43_40lrcts",0,1,26,20,1,1],"44":[44,0.51,237718183619334,"2|20.5",542,1833821293790229954560,1860,"28_36llc","25,90","0x00fcff","28_36llc",1,1,26,17,1,1],"45":[45,0.51,499208185600602,"3|10",687,4877964641482029662208,2000,"53_50jzrz","25,95","0xddff8d","53_50jzrz",0,1,26,36,1,1],"46":[46,0.51,1048337189761260,"1|21",871,12975385946342199132160,2140,"46_61xmgs","0,110","0x00fcff","46_61xmgs",1,0,0,0,2,1],"47":[47,0.51,2201508098498650,"2|21",1103,34514526617270298345472,2290,"25_47pgpjp","30,90","0xff2c16","25_47pgpjp",1,1,26,10,1,1],"48":[48,0.51,4623167006847160,"3|10.5",1397,91808640801938899730432,2440,"48_73zsf","25,55","0xafff00","48_73zsf",0,1,17,11,1,1],"49":[49,0.51,9708650714379030,"1|21.5",1770,244210984533157014929408,2600,"49_74zrsk","30,50","0xffe400","49_74zrsk",0,1,22,35,1,1],"50":[50,0.51,20388166500196000,"2|21.5",2242,649601218858199050878976,2760,"12_09cfjl","45,55","0xffe400","12_09cfjl",1,1,18,17,1,1],"51":[51,0.51,42815149650411500,"3|10.5",2840,1727939242162809982681088,2930,"51_48pgy","15,65","0xfdffe5","51_48pgy",0,1,24,23,1,1],"52":[52,0.51,89911814265864100,"1|22",3598,4596318384153069807992832,3100,"04_71yjxhs","45,50","0xff2c16","04_71yjxhs",1,1,22,15,1,1],"53":[53,0.51,188814809958315000,"2|22",4557,12226206901847200714719232,3280,"09_21hzh","30,55","0xef42ff","09_21hzh",0,1,12,41,1,1],"54":[54,0.51,396511100912460000,"3|11",5773,32521710358913501416652800,3460,"54_23hjbxz","30,65","0x00fcff","54_23hjbxz",0,1,20,26,1,1],"55":[55,0.51,832673311916168000,"1|22.5",7312,86507749554709900883394560,3650,"55_76hchqs","30,65","0x9c00ff","55_76hchqs",0,0,0,0,1,1],"56":[56,0.51,1748613955023950000,"2|22.5",9262,230110613815527994470432768,3840,"19_53sqsg","20,65","0xff2c16","19_53sqsg",1,1,19,19,1,1],"57":[57,0.51,3672089305550300000,"3|11",11729,612094232749305026729476096,4040,"57_42mwc","50,80","0x00fcff","57_42mwc",1,1,20,13,1,1],"58":[58,0.51,7711387541655640000,"1|23",14861,1628170659113149875764592640,4240,"66_78dwh","25,65","0x00ff8a","66_78dwh",1,1,32,26,1,1],"59":[59,0.51,16193913837476800512,"2|23",18824,4330933953240979741557653504,4350,"59_27hyhvw","25,65","0xffb400","59_27hyhvw",1,1,23,48,1,1],"60":[60,0.51,34007219058701398016,"3|11.5",23844,11520284315620999911297777664,4460,"60_07cw","20,65","0xddff8d","60_07cw",0,0,27,28,1,1], "61":[61,0.51,71443737518280200000,"1|23.5",30202,30720758174989333096794073770,4574,"evo_61","25,55","0x61423A","evo_61",0,0,27,28,1,1], "62":[62,0.51,150091885542605462184,"2|23.5",36242,81922021799971554924784196720,4691,"evo_62","25,45","0xECCDA0","evo_62",0,0,27,28,1,1], "63":[63,0.51,315319087274381223075,"3|12",43490,218458724799924146466091191253,4811,"evo_63","40,45","0xddff8d","evo_63",0,0,27,28,1,1], "64":[64,0.51,662435057299120216544,"1|24",52188,582556599466464390576243176674,4934,"evo_64","25,55","0x2173B4","evo_64",0,0,27,28,1,1], "65":[65,0.51,1391670288443529866689,"2|24",62625,1553484265243905041536648471130,5060,"evo_65","30,75","0xddff8d","evo_65",0,0,27,28,1,1], "66":[66,0.51,2923677076562037535060,"3|12.5",75150,4142624707317080110764395923013,5189,"evo_66","25,45","0x773F3F","evo_66",0,0,27,28,1,1], "67":[67,0.51,6142178732273188098865,"1|24.5",90180,11046999219512213628705055794701,5322,"evo_67","30,45","0xddff8d","evo_67",0,0,27,28,1,1], "68":[68,0.51,12903736832506697686691,"2|24.5",108216,29458664585365903009880148785869,5458,"evo_68","25,105","0xddff8d","evo_68",0,0,27,28,1,1], "69":[69,0.51,27108690824593902703132,"3|13",129859,78556438894309074693013730095650,5597,"evo_69","30,45","0xddff8d","evo_69",0,0,27,28,1,1], "70":[70,0.51,56951031144104837611621,"1|25",155830,209483837051490865848036613588400,5740,"evo_70","50,85","0xD824CA","evo_70",0,0,27,28,1,1], "71":[71,0.51,119597165402620158984404,"2|25",185437,557227006556965703155777392145144,5883,"evo_71","40,50","0xD12323","evo_71",0,0,27,28,1,1], "72":[72,0.51,251154047345502333867248,"3|14",220670,1482223837441528770394367863106083,6000,"evo_72","40,65","0x756E6E","evo_72",0,0,27,28,1,1], "73":[73,0.51,527423499425554901121220,"1|26",262597,3853781977347974803025356444075815,6120,"evo_73","40,65","0x815151","evo_73",0,0,27,28,1,1], "74":[74,0.51,1107589348793665292354562,"2|26",312490,10019833141104734487865926754597119,6242,"evo_74","50,85","0x815151","evo_74",0,0,27,28,1,1], "75":[75,0.51,2325937632466697113944580,"3|15",371863,26051566166872309668451409561952509,6366,"evo_75","50,65","0xC5961C","evo_75",0,0,27,28,1,1]}'
            }
        });
        t.exports = i,
        cc._RF.pop()
    }
    , {}],
    DB_shopSort: [function(e, t) {
        "use strict";
        cc._RF.push(t, "9a5a8nSkuJIDZKd0H4hanXD", "DB_shopSort");
        var i = cc.Class({
            name: "DB_shopSort",
            statics: {
                dataLen: 70,
                dataHead: '["level", "MAX", "MAX_1", "MAX_2", "MAX_3", "MAX_4", "MAX_5", "MAX_6", "MAX_7", "MAX_8"]',
                data: '{"1":[1,"M","","","","","","","",""],"2":[2,"U","M","","","","","","",""],"3":[3,"U","U","M","","","","","",""],"4":[4,"U","U","M","M","","","","",""],"5":[5,"U","U","AD","M","M","","","",""],"6":[6,"U","U","AD","M","M","M","","",""],"7":[7,"U","U","AD","M","M","M","M","",""],"8":[8,"U","U","AD","M","M","M","M","M",""],"9":[9,"U","U","AD","M","M","M","M","M","M"],"10":[10,"U","U","AD","M","M","M","M","M","M"],"11":[11,"U","U","AD","M","M","M","M","M","M"],"12":[12,"U","U","M","AD","M","M","M","M","M"],"13":[13,"U","U","G","M","AD","M","M","M","M"],"14":[14,"U","U","G","G","M","AD","M","M","M"],"15":[15,"U","U","G","G","M","AD","M","M","M"],"16":[16,"U","U","G","G","M","AD","M","M","M"],"17":[17,"U","U","G","G","M","AD","M","M","M"],"18":[18,"U","U","G","G","M","AD","M","M","M"],"19":[19,"U","U","G","G","M","AD","M","M","M"],"20":[20,"U","U","G","G","M","AD","M","M","M"],"21":[21,"U","U","G","G","M","AD","M","M","M"],"22":[22,"U","U","G","G","M","AD","M","M","M"],"23":[23,"U","U","G","G","M","M","AD","M","M"],"24":[24,"U","U","G","G","M","M","AD","M","M"],"25":[25,"U","U","G","G","M","M","AD","M","M"],"26":[26,"U","U","G","G","M","M","AD","M","M"],"27":[27,"U","U","G","G","M","M","AD","M","M"],"28":[28,"U","U","G","G","M","M","AD","M","M"],"29":[29,"U","U","G","G","M","M","AD","M","M"],"30":[30,"U","U","G","G","M","M","AD","M","M"],"31":[31,"U","U","G","G","M","M","M","AD","M"],"32":[32,"U","U","G","G","M","M","M","AD","M"],"33":[33,"U","U","G","G","M","M","M","AD","M"],"34":[34,"U","U","G","G","M","M","M","AD","M"],"35":[35,"U","U","G","G","M","M","M","AD","M"],"36":[36,"U","U","G","G","M","M","M","AD","M"],"37":[37,"U","U","G","G","M","M","M","AD","M"],"38":[38,"U","U","G","G","M","M","M","AD","M"],"39":[39,"U","U","G","G","M","M","M","AD","M"],"40":[40,"U","U","G","G","M","M","M","AD","M"],"41":[41,"U","U","G","G","M","M","M","AD","M"],"42":[42,"U","U","G","G","M","M","M","AD","M"],"43":[43,"U","U","G","G","M","M","M","AD","M"],"44":[44,"U","U","G","G","M","M","M","AD","M"],"45":[45,"U","U","G","G","M","M","M","AD","M"],"46":[46,"U","U","G","G","M","M","M","AD","M"],"47":[47,"U","U","G","G","M","M","M","AD","M"],"48":[48,"U","U","G","G","M","M","M","AD","M"],"49":[49,"U","U","G","G","M","M","M","AD","M"],"50":[50,"U","U","G","G","M","M","M","AD","M"],"51":[51,"U","U","G","G","M","M","M","AD","M"],"52":[52,"U","U","G","G","M","M","M","AD","M"],"53":[53,"U","U","G","G","M","M","M","AD","M"],"54":[54,"U","U","G","G","M","M","M","AD","M"],"55":[55,"U","U","G","G","M","M","M","AD","M"],"56":[56,"U","U","G","G","M","M","M","AD","M"],"57":[57,"U","U","G","G","M","M","M","AD","M"],"58":[58,"U","U","G","G","M","M","M","AD","M"],"59":[59,"U","U","G","G","M","M","M","AD","M"],"60":[60,"U","U","G","G","M","M","M","AD","M"],"61":[61,"U","U","G","G","M","M","M","AD","M"],"62":[62,"U","U","G","G","M","M","M","AD","M"],"63":[63,"U","U","G","G","M","M","M","AD","M"],"64":[64,"U","U","G","G","M","M","M","AD","M"],"65":[65,"U","U","G","G","M","M","M","AD","M"],"66":[66,"U","U","G","G","M","M","M","AD","M"],"67":[67,"U","U","G","G","M","M","M","AD","M"],"68":[68,"U","U","G","G","M","M","M","AD","M"],"69":[69,"U","U","G","G","M","M","M","AD","M"],"70":[70,"U","U","G","G","M","M","M","AD","M"], "71":[71,"U","U","G","G","M","M","M","AD","M"], "72":[72,"U","U","G","G","M","M","M","AD","M"], "73":[73,"U","U","G","G","M","M","M","AD","M"], "74":[74,"U","U","G","G","M","M","M","AD","M"], "75":[75,"U","U","G","G","M","M","M","AD","M"]}'
            }
        });
        t.exports = i,
        cc._RF.pop()
    }
    , {}],
    DB_spinLevel: [function(e, t) {
        "use strict";
        cc._RF.push(t, "302f5cxMGlNfIdmeDXrd5KP", "DB_spinLevel");
        var i = cc.Class({
            name: "DB_spinLevel",
            statics: {
                dataLen: 70,
                dataHead: '["Level", "SpinS", "SpinA", "SpinB", "SpinC"]',
                data: '{"1":[1,1,1,1,1],"2":[2,1,1,1,1],"3":[3,1,1,1,1],"4":[4,2,2,1,1],"5":[5,3,3,2,1],"6":[6,4,3,3,2],"7":[7,5,4,3,2],"8":[8,6,5,4,3],"9":[9,6,5,4,3],"10":[10,7,6,5,4],"11":[11,7,6,5,4],"12":[12,8,7,6,5],"13":[13,9,8,7,6],"14":[14,10,9,8,7],"15":[15,11,10,9,8],"16":[16,12,11,10,9],"17":[17,13,12,11,10],"18":[18,14,13,12,11],"19":[19,15,14,13,12],"20":[20,16,15,14,13],"21":[21,17,16,15,14],"22":[22,18,17,16,15],"23":[23,19,18,17,16],"24":[24,20,19,18,17],"25":[25,21,20,19,18],"26":[26,22,21,20,19],"27":[27,23,22,21,20],"28":[28,24,23,22,21],"29":[29,25,24,23,22],"30":[30,26,25,24,23],"31":[31,27,26,25,24],"32":[32,28,27,26,25],"33":[33,29,28,27,26],"34":[34,30,29,28,27],"35":[35,31,30,29,28],"36":[36,32,31,30,29],"37":[37,33,32,31,30],"38":[38,34,33,32,31],"39":[39,35,34,33,32],"40":[40,36,35,34,33],"41":[41,37,36,35,34],"42":[42,38,37,36,35],"43":[43,39,38,37,36],"44":[44,40,39,38,37],"45":[45,41,40,39,38],"46":[46,42,41,40,39],"47":[47,43,42,41,40],"48":[48,44,43,42,41],"49":[49,45,44,43,42],"50":[50,46,45,44,43],"51":[51,47,46,45,44],"52":[52,48,47,46,45],"53":[53,49,48,47,46],"54":[54,50,49,48,47],"55":[55,51,50,49,48],"56":[56,52,51,50,49],"57":[57,53,52,51,50],"58":[58,54,53,52,51],"59":[59,55,54,53,52],"60":[60,56,55,54,53],"61":[61,57,56,55,54],"62":[62,58,57,56,55],"63":[63,59,58,57,56],"64":[64,60,59,58,57],"65":[65,61,60,59,58],"66":[66,62,61,60,59],"67":[67,63,62,61,60],"68":[68,64,63,62,61],"69":[69,65,64,63,62],"70":[70,66,65,64,63], "71":[71,67,66,65,64], "72":[72,68,67,66,65], "73":[73,69,68,67,66], "74":[74,70,69,68,67], "75":[75,71,70,69,68]}'
            }
        });
        t.exports = i,
        cc._RF.pop()
    }
    , {}],
    DB_turntable: [function(e, t) {
        "use strict";
        cc._RF.push(t, "64065XfzjJKvKlrh0erRkH1", "DB_turntable");
        var i = cc.Class({
            name: "DB_turntable",
            statics: {
                dataLen: 11,
                dataHead: '["id", "type", "rarity", "weight", "rewards"]',
                data: '{"1":[1,"coin","C",8,-7.0],"2":[2,"coin","B",4,-6.0],"3":[3,"coin","A",2,-5.0],"4":[4,"coin","S",1,-4.0],"5":[5,"plant","C",8,-7.0],"6":[6,"plant","B",4,-6.0],"7":[7,"plant","A",2,-5.0],"8":[8,"plant","S",1,-4.0],"9":[9,"gem","S",2,10.0],"10":[10,"buff","A",2,300.0],"11":[11,"drone","C",8,1.0]}'
            }
        });
        t.exports = i,
        cc._RF.pop()
    }
    , {}],
    DataType: [function(e, t) {
        "use strict";
        cc._RF.push(t, "2a3879x5LpJ54fBTMS3SwQx", "DataType");
        var i = cc.Enum({
            InviteData: 1,
            AchievementData: 2,
            AirDropData: 3,
            BuyButtonData: 4,
            DroneData: 5,
            LevelGemData: 6,
            LevelData: 7,
            PlantData: 8,
            ZombieData: 9,
            TurnTableData: 10,
            ShopData: 11,
            SpinLevelData: 12,
            Translation: 13
        });
        t.exports = i,
        cc._RF.pop()
    }
    , {}],
    DragonMgr: [function(e, t) {
        "use strict";
        cc._RF.push(t, "9bb9bftkmpNaoona8Evtxim", "DragonMgr"),
        e("DragonType");
        var i = cc.Class({
            extends: cc.Component,
            statics: {
                handles_: {},
                create: function(e, t) {
                    this.handles_[e] = this.handles_[e] || [],
                    this.handles_[e].indexOf(t) > -1 || this.handles_[e].push(t)
                },
                playAnimation: function(e, t, i, a, n) {
                    void 0 === n && (n = 1);
                    var c = this.handles_[e].indexOf(t);
                    c > -1 && (this.handles_[e][c].timeScale = n,
                    this.handles_[e][c].playAnimation(i, a ? -1 : 1))
                },
                playPlantAcelerate: function(e, t, i) {
                    var a = this.handles_[e].indexOf(t);
                    a > -1 && (this.handles_[e][a].timeScale = i)
                },
                deleteDragon: function(e, t) {
                    var i = this.handles_[e].indexOf(t);
                    i > -1 && this.handles_[e].splice(i, 1)
                }
            }
        });
        t.exports = i,
        cc._RF.pop()
    }
    , {
        DragonType: "DragonType"
    }],
    DragonType: [function(e, t) {
        "use strict";
        cc._RF.push(t, "91396qbrO5F5ZWqnE3aqawU", "DragonType");
        var i = cc.Enum({
            Plant: "plant",
            Zombie: "zombie"
        });
        t.exports = i,
        cc._RF.pop()
    }
    , {}],
    DroneData: [function(e, t) {
        "use strict";
        cc._RF.push(t, "b67ecaEfp5L/47VzFlSQybx", "DroneData");
        var i = cc.Class({
            name: "DroneData",
            properties: {
                Level: 1,
                Drone: 1
            }
        });
        t.exports = i,
        cc._RF.pop()
    }
    , {}],
    DroneMapMgr: [function(e, t) {
        "use strict";
        cc._RF.push(t, "61bffcDoHpFLrMFuuEK2ldR", "DroneMapMgr");
        var i = e("DroneData")
          , a = e("DB_droneRewards")
          , n = cc.Class({
            extends: cc.Component,
            properties: {
                dataList: {
                    default: [],
                    type: [i]
                }
            },
            DecodeJson: function() {
                var e = JSON.parse(a.data);
                for (var t in e) {
                    var n = new i;
                    n.Level = e[t][0],
                    n.Drone = e[t][1],
                    this.dataList[t] = n
                }
            },
            getDataByKey: function(e) {
                return this.dataList[e]
            }
        });
        t.exports = n,
        cc._RF.pop()
    }
    , {
        DB_droneRewards: "DB_droneRewards",
        DroneData: "DroneData"
    }],
    EffectMgr: [function(e, t) {
        "use strict";
        cc._RF.push(t, "3a004OjyE9KIIcGLjt8QicQ", "EffectMgr");
        var i = e("EffectType")
          , a = cc.Class({
            extends: cc.Component,
            properties: {
                obCoinPre: cc.Prefab,
                obCrickPre: cc.Prefab,
                obVertigoPre: cc.Prefab,
                obDieSmokePre: cc.Prefab,
                mergePre: cc.Prefab,
                flowerOpenPre: cc.Prefab,
                tipMoveAttackPre: cc.Prefab
            },
            InitPool: function() {
                var e = this;
                this.coinFlyPool = new cc.NodePool,
                cc.loader.loadRes("prefab/effect/coinFly", function(t, i) {
                    if (t)
                        cc.error(t.message || t);
                    else {
                        e.obCoinPre = i;
                        for (var a = 0; a < 8; a++) {
                            var n = cc.instantiate(i);
                            e.coinFlyPool.put(n)
                        }
                    }
                }),
                this.crickPool = new cc.NodePool,
                cc.loader.loadRes("prefab/effect/crick", function(t, i) {
                    if (t)
                        cc.error(t.message || t);
                    else {
                        e.obCrickPre = i;
                        for (var a = 0; a < 12; a++) {
                            var n = cc.instantiate(i);
                            e.crickPool.put(n)
                        }
                    }
                }),
                this.dieSmokePool = new cc.NodePool,
                cc.loader.loadRes("prefab/effect/dieSmoke", function(t, i) {
                    if (t)
                        cc.error(t.message || t);
                    else {
                        e.obDieSmokePre = i;
                        for (var a = 0; a < 8; a++) {
                            var n = cc.instantiate(i);
                            e.dieSmokePool.put(n)
                        }
                    }
                }),
                this.mergeEffectPool = new cc.NodePool,
                cc.loader.loadRes("prefab/effect/merge", function(t, i) {
                    if (t)
                        cc.error(t.message || t);
                    else {
                        e.mergePre = i;
                        for (var a = 0; a < 3; a++) {
                            var n = cc.instantiate(i);
                            e.mergeEffectPool.put(n)
                        }
                    }
                }),
                this.flowerOpenPool = new cc.NodePool,
                cc.loader.loadRes("prefab/effect/FlowerOpen", function(t, i) {
                    if (t)
                        cc.error(t.message || t);
                    else {
                        e.flowerOpenPre = i;
                        for (var a = 0; a < 3; a++) {
                            var n = cc.instantiate(i);
                            e.flowerOpenPool.put(n)
                        }
                    }
                }),
                this.tipMoveAttackPool = new cc.NodePool,
                cc.loader.loadRes("prefab/effect/tipMoveAttack", function(t, i) {
                    if (t)
                        cc.error(t.message || t);
                    else {
                        e.tipMoveAttackPre = i;
                        for (var a = 0; a < 1; a++) {
                            var n = cc.instantiate(i);
                            e.tipMoveAttackPool.put(n)
                        }
                    }
                })
            },
            clearList: function() {
                this.coinFlyPool.clear(),
                this.crickPool.clear(),
                this.dieSmokePool.clear(),
                this.mergeEffectPool.clear(),
                this.flowerOpenPool.clear(),
                this.tipMoveAttackPool.clear()
            },
            getObFromPool: function(e) {
                var t = null;
                return e == i.CoinFly ? this.coinFlyPool.size() > 0 ? (t = this.coinFlyPool.get()).active = !0 : t = cc.instantiate(this.obCoinPre) : e == i.Crick ? this.crickPool.size() > 0 ? (t = this.crickPool.get()).active = !0 : t = cc.instantiate(this.obCrickPre) : e == i.DieSmoke ? this.dieSmokePool.size() > 0 ? (t = this.dieSmokePool.get()).active = !0 : t = cc.instantiate(this.obDieSmokePre) : e == i.Merge ? this.mergeEffectPool.size() > 0 ? (t = this.mergeEffectPool.get()).active = !0 : t = cc.instantiate(this.mergePre) : e == i.flowerPotOpen ? this.flowerOpenPool.size() > 0 ? (t = this.flowerOpenPool.get()).active = !0 : t = cc.instantiate(this.flowerOpenPre) : e == i.TipMoveAttack && (this.tipMoveAttackPool.size() > 0 ? (t = this.tipMoveAttackPool.get()).active = !0 : t = cc.instantiate(this.tipMoveAttackPre)),
                t
            },
            ObBackToPool: function(e, t) {
                t == i.CoinFly ? this.coinFlyPool.put(e) : t == i.Crick ? this.crickPool.put(e) : t == i.Vertigo ? cc.log("") : t == i.DieSmoke ? this.dieSmokePool.put(e) : t == i.Merge ? this.mergeEffectPool.put(e) : t == i.flowerPotOpen ? this.flowerOpenPool.put(e) : t == i.TipMoveAttack && this.tipMoveAttackPool.put(e)
            }
        });
        t.exports = a,
        cc._RF.pop()
    }
    , {
        EffectType: "EffectType"
    }],
    EffectType: [function(e, t) {
        "use strict";
        cc._RF.push(t, "4fd9dB2EGZK2Y6US5aNEfsv", "EffectType");
        var i = cc.Enum({
            CoinFly: 1,
            Crick: 2,
            Vertigo: 3,
            DieSmoke: 4,
            Merge: 5,
            flowerPotOpen: 6,
            TipMoveAttack: 7
        });
        t.exports = i,
        cc._RF.pop()
    }
    , {}],
    EnjoyNature: [function(e, t) {
        "use strict";
        cc._RF.push(t, "46e48KofmpFY77X0mRlQerm", "EnjoyNature"),
        cc.Class({
            extends: cc.Component,
            properties: {
                des: cc.Label,
                content: cc.Node,
                blurBg: cc.Node,
                title: cc.Label,
                btnLabel: cc.Label,
                btnLabel2: cc.Label,
                alreadyBtn: cc.Node,
                alreadyLabel: cc.Label,
                uavNode: cc.Node
            },
            start: function() {
                this.title.string = cc.Mgr.Utils.getTranslation("enjoyNature-title"),
                this.des.string = cc.Mgr.Utils.getTranslation("enjoyNature-tip"),
                this.btnLabel2.string = cc.Mgr.Utils.getTranslation("enjoyNature-rate-now"),
                this.btnLabel.string = cc.Mgr.Utils.getTranslation("enjoyNature-next-time"),
                this.alreadyLabel.string = cc.Mgr.Utils.getTranslation("enjoyNature-rated"),
                this.limitClick = this.node.getComponent("LimitClick")
            },
            rateNow: function() {
                if (0 != this.limitClick.clickTime()) {
                    cc.Mgr.Utils.openRating(),
                    1 === cc.Mgr.game.rateState ? cc.Mgr.game.rateState = 2 : (cc.Mgr.game.rateState = 1,
                    !0 === cc.Mgr.game.hasShowRate && (cc.Mgr.game.rateState = 2));
                    var e = {};
                    e.elapsed = cc.Mgr.Utils.getDate9(!0),
                    cc.Mgr.analytics.logEvent("askForRating_love", JSON.stringify(e)),
                    cc.Mgr.TEA.collectEvent("askForRating_love", {
                        elapsed: cc.Mgr.Utils.getDate9(!0)
                    }),
                    this.closeUI(!0)
                }
            },
            showUI: function() {
                this.blurBg.opacity = 0,
                this.content.opacity = 0,
                this.content.setScale(.5),
                cc.tween(this.blurBg).to(.05, {
                    opacity: 255
                }).call().start(),
                cc.tween(this.content).to(.15, {
                    opacity: 255,
                    scale: 1
                }).start(),
                this.alreadyBtn.active = 1 === cc.Mgr.game.rateState,
                this.left2Right()
            },
            left2Right: function() {
                var e = this;
                this.uavNode.x = -200,
                this.uavNode.scaleX = 1,
                cc.tween(this.uavNode).to(10, {
                    position: cc.v2(200, 100)
                }, {
                    easing: "sineOut"
                }).call(function() {
                    e.right2Left()
                }).start()
            },
            right2Left: function() {
                var e = this;
                this.uavNode.x = 200,
                this.uavNode.scaleX = -1,
                cc.tween(this.uavNode).to(10, {
                    position: cc.v2(-200, 100)
                }, {
                    easing: "sineOut"
                }).call(function() {
                    e.left2Right()
                }).start()
            },
            alreadyRate: function() {
                if (0 != this.limitClick.clickTime()) {
                    1 === cc.Mgr.game.rateState ? cc.Mgr.game.rateState = 2 : (cc.Mgr.game.rateState = 1,
                    !0 === cc.Mgr.game.hasShowRate && (cc.Mgr.game.rateState = 2));
                    var e = {};
                    e.elapsed = cc.Mgr.Utils.getDate9(!0),
                    cc.Mgr.analytics.logEvent("askForRating_no", JSON.stringify(e)),
                    cc.Mgr.TEA.collectEvent("askForRating_no", {
                        elapsed: cc.Mgr.Utils.getDate9(!0)
                    }),
                    this.closeUI(!0)
                }
            },
            closeUI: function(e) {
                if (!0 !== e) {
                    var t = {};
                    t.elapsed = cc.Mgr.Utils.getDate9(!0),
                    cc.Mgr.analytics.logEvent("askForRating_no", JSON.stringify(t)),
                    cc.Mgr.TEA.collectEvent("askForRating_no", {
                        elapsed: cc.Mgr.Utils.getDate9(!0)
                    })
                }
                cc.Mgr.AudioMgr.playSFX("click");
                var i = this;
                cc.tween(this.blurBg).to(.15, {
                    opacity: 0
                }).start(),
                cc.tween(this.content).to(.15, {
                    opacity: 0,
                    scale: .5
                }).call(function() {
                    i.node.active = !1
                }).start(),
                cc.Mgr.game.hasShowRate = !0,
                cc.Mgr.UIMgr.reduceShowUICount("enjoyNature")
            }
        }),
        cc._RF.pop()
    }
    , {}],
    Event: [function(e, t) {
        "use strict";
        cc._RF.push(t, "bf1b7bGpDxFNZxQSrgXQdYl", "Event");
        var i = cc.Class({
            extends: cc.Component,
            statics: {
                ParseFinish: "ParseFinish",
                BuyPlantInShop: "BuyPlantInShop",
                defense: "defense",
                flowerPotOpen: "flowerPotOpen",
                BuyPlant: "BuyPlant",
                unlockGird: "unlockGird",
                checkMissionAndAchieve: "checkMissionAndAchieve",
                singleGuideComplete: "guideComplete",
                AllGuideComplete: "AllGuideComplete",
                showSingleGuide: "showSingleGuide"
            }
        });
        t.exports = i,
        cc._RF.pop()
    }
    , {}],
    FirstUI: [function(e, t) {
        "use strict";
        cc._RF.push(t, "91e9eK5t0dKr6/q8pu3GgS4", "FirstUI"),
        cc.Class({
            extends: cc.Component,
            properties: {
                progressSprite: cc.Sprite,
                monsterNode: cc.Node,
                progressNode: cc.Node,
                title: cc.Node
            },
            start: function() {
                this.title.active = !0,
                this.logoNode = this.title,
                this.node.zIndex = 130,
                this.startUpdate = !1,
                this.startUpdate = !0,
                cc.Mgr.GameCenterCtrl.init(),
                this.winSize = cc.view.getVisibleSize(),
                this.logoNode.y > this.winSize.height / 2 && (this.logoNode.y = this.winSize.height / 2 - this.logoNode.height / 2 - 10),
                this.progressNode.y < this.winSize.height / 2 * -1 && (this.progressNode.y = this.winSize.height / 2 * -1 + this.progressNode.height / 2 + 10)
            },
            updateProgress: function(e) {
                this.progressSprite.fillRange = e,
                this.monsterNode.x = 450 * e - 235,
                1 === e && (this.node.destroy(),
                this.monsterNode.destroy())
            }
        }),
        cc._RF.pop()
    }
    , {}],
    FontManager: [function(e, t) {
        "use strict";
        cc._RF.push(t, "659564nzoZAT6EIT6rWv59K", "FontManager"),
        cc.Class({
            extends: cc.Component,
            properties: {
                font_en: cc.Font,
                font_en_noStroke: cc.Font
            },
            start: function() {
                cc.Mgr.fontManager = this
            }
        }),
        cc._RF.pop()
    }
    , {}],
    GameCenterCtrl: [function(e, t) {
        "use strict";
        cc._RF.push(t, "0ee76vQB/lLLJdwvoDjxLfA", "GameCenterCtrl");
        var i = e("Event")
          , a = e("DataType")
          , n = e("MyEnum")
          , c = e("MissionType")
          , s = e("js-big-decimal");
        cc.Class({
            extends: cc.Component,
            properties: {
                _type: -1,
                rubbishLabel: cc.Label,
                loadScreen: cc.Node,
                gameBg: cc.Node,
                gameFront: cc.Node,
                unitsContainer: cc.Node,
                rubbishNode: cc.Node
            },
            zoomIn: function() {
                var e;
                cc.Mgr.game.zoomIn = cc.Mgr.game.isZoomIn = !0,
                cc.tween(this.gameBg).to(.2, {
                    scale: 1.2
                }).start(),
                cc.tween(this.gameBg).to(.2, {
                    position: cc.v2(50, 0)
                }).start(),
                cc.tween(this.gameFront).to(.2, {
                    scale: 1.2
                }).start(),
                cc.tween(this.unitsContainer).to(.2, {
                    scale: 1.2
                }).start(),
                cc.tween(this.unitsContainer).to(.2, {
                    position: cc.v2(50, 0)
                }).start(),
                cc.tween(this.gameFront).to(.2, {
                    position: cc.v2(248, 176)
                }).start(),
                e = !1 === cc.Mgr.UIMgr.InGameUI.doubleCoinNode.active ? -280 : -150,
                cc.tween(this.rubbishNode).to(.2, {
                    scale: .83
                }).start();
                var t = cc.Mgr.game.isPad ? -253 - .83 * cc.Mgr.game.ratioOffsetX : -253;
                t < -340 && (t = -340),
                cc.tween(this.rubbishNode).to(.2, {
                    position: cc.v2(t, e)
                }).start()
            },
            zoomOut: function() {
                var e;
                cc.Mgr.game.zoomIn = cc.Mgr.game.isZoomIn = !1,
                cc.tween(this.gameBg).to(.2, {
                    scale: 1
                }).start(),
                cc.tween(this.gameBg).to(.2, {
                    position: cc.v2(0, 0)
                }).start(),
                cc.tween(this.gameFront).to(.2, {
                    scale: 1
                }).start(),
                cc.tween(this.unitsContainer).to(.2, {
                    scale: 1
                }).start(),
                cc.tween(this.unitsContainer).to(.2, {
                    position: cc.v2(0, 0)
                }).start(),
                cc.tween(this.gameFront).to(.2, {
                    position: cc.v2(169, 154)
                }).start(),
                e = !1 === cc.Mgr.UIMgr.InGameUI.doubleCoinNode.active ? -335 : -185,
                cc.tween(this.rubbishNode).to(.2, {
                    scale: 1
                }).start();
                var t = cc.Mgr.game.isPad ? -268 - .83 * cc.Mgr.game.ratioOffsetX : -253;
                t < -360 && (t = -360),
                cc.tween(this.rubbishNode).to(.2, {
                    position: cc.v2(t, e)
                }).start()
            },
            setLanguage: function() {
                !0 !== cc.Mgr.Config.isFacebook ? "" === cc.Mgr.game.setLanguageManually ? cc.sys.os === cc.sys.OS_ANDROID ? cc.Mgr.Config.language = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/utils/Utils", "getCurrentLanguage", "()Ljava/lang/String;") : cc.sys.os === cc.sys.OS_IOS && (cc.Mgr.Config.language = jsb.reflection.callStaticMethod("Utils", "getCurrentLanguage")) : cc.Mgr.Config.language = cc.Mgr.game.setLanguageManually : cc.Mgr.Config.language = "" === cc.Mgr.game.setLanguageManually ? "English" : cc.Mgr.game.setLanguageManually
            },
            start: function() {
                if (cc.Mgr.GameCenterCtrl = this,
                cc.director.GlobalEvent.on(i.defense, this.defense, this),
                cc.director.GlobalEvent.on(i.AllGuideComplete, this.AllGuideComplete, this),
                cc.Mgr.game.enterGameTimeStamp = cc.Mgr.Utils.GetSysTime(),
                cc.Mgr.UserDataMgr.initData(),
                this.setLanguage(),
                cc.Mgr.game.enterBackgroundTimer = 0,
                cc.game.on(cc.game.EVENT_HIDE, function() {
                    cc.Mgr.admob.isPlayingAd || (cc.Mgr.game.enterBackgroundTimer = Date.now(),
                    cc.Mgr.game.pauseGame())
                }),
                cc.game.on(cc.game.EVENT_SHOW, function() {
                    cc.Mgr.admob.adClicked && !1 === cc.Mgr.admob.hasShowPopup_banner && (cc.Mgr.admob.openRemoveAdBundle(),
                    cc.Mgr.UIMgr.openRemoveAdBundle(),
                    cc.Mgr.admob.hasShowPopup_banner = !0),
                    cc.Mgr.admob.adClicked = !1,
                    cc.Mgr.game.enterGameTimeStamp = cc.Mgr.Utils.GetSysTime(),
                    cc.Mgr.admob.isPlayingAd || (cc.Mgr.game.resumeGame(),
                    cc.Mgr.game.enterBackgroundTimer > 0 && Date.now() - cc.Mgr.game.enterBackgroundTimer >= 6e5 && (cc.Mgr.game.enterBackgroundTimer = 0,
                    cc.Mgr.AudioMgr.stopAll(),
                    cc.Mgr.admob.hideBanner("all"),
                    cc.game.restart()))
                }),
                this.isInit = !1,
                cc.Mgr.Utils.setUUID(),
                cc.Mgr.Utils.downloadRanking(),
                cc.Mgr.game.sendFirstInstall) {
                    cc.Mgr.TEA.collectEvent("first_install", {
                        elapsed: cc.Mgr.Utils.getDate9(!0),
                        date: cc.Mgr.Utils.getDate9(),
                        version: cc.Mgr.Config.version,
                        Internal_version: cc.Mgr.Config.version
                    });
                    var e = {};
                    e.elapsed = cc.Mgr.Utils.getDate9(!0),
                    e.date = cc.Mgr.Utils.getDate9(),
                    e.version = cc.Mgr.Config.version,
                    e.Internal_version = cc.Mgr.Config.version,
                    cc.Mgr.analytics.logEvent("first_install", JSON.stringify(e))
                }
                cc.Mgr.game.vipExpire > 0 && this.scheduleOnce(function() {
                    if (cc.Mgr.game.isVIP = cc.Mgr.game.vipExpire > Date.now(),
                    !0 === cc.Mgr.game.isVIP && cc.Mgr.game.vipStartTimer > 0 && Date.now() - cc.Mgr.game.vipStartTimer > 6048e5) {
                        cc.Mgr.TEA.collectEvent("vip_subscription", {
                            elapsed: cc.Mgr.Utils.getDate9(!0),
                            state: "convert"
                        });
                        var e = {};
                        e.elapsed = cc.Mgr.Utils.getDate9(!0),
                        e.state = "convert",
                        cc.Mgr.analytics.logEvent("vip_subscription", JSON.stringify(e)),
                        cc.Mgr.game.openSpecialGridCount = 0
                    } else if (!1 === cc.Mgr.game.isVIP) {
                        cc.Mgr.TEA.collectEvent("vip_subscription", {
                            elapsed: cc.Mgr.Utils.getDate9(!0),
                            state: "unsubscribed"
                        });
                        var t = {};
                        t.elapsed = cc.Mgr.Utils.getDate9(!0),
                        t.state = "unsubscribed",
                        cc.Mgr.analytics.logEvent("vip_subscription", JSON.stringify(t)),
                        cc.Mgr.game.vipExpire = 0
                    }
                }, 300),
                cc.Mgr.game.vip = cc.Mgr.game.isVIP ? "active" : "inactive",
                this.checkTimer = 0
            },
            defense: function(e) {
                cc.Mgr.plantMgr.hideTipAttackNode();
                var t = cc.Mgr.Config.normalWaveWaitTime
                  , i = 0
                  , n = !1
                  , o = !1;
                this.clearZombiePool = !1;
                var r, l = cc.Mgr.game.level > 60 ? cc.Mgr.game.level % 60 + "_" + cc.Mgr.game.curBoshu : cc.Mgr.game.level + "_" + cc.Mgr.game.curBoshu, g = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(a.LevelData, l);
                e.state ? (cc.Mgr.game.updateMissionProgressById(c.DefenseSuc),
                cc.Mgr.game.curBoshu == g.waveCount ? (t = cc.Mgr.Config.lastWaveWaitTime + 2,
                n = !0,
                i = (r = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(a.ZombieData, g.zombieID1)).money * BigInt(Math.round(100 * (.8 + .4 * Math.random()))) / BigInt(100),
                cc.Mgr.game.level++,
                cc.Mgr.game.curBoshu = 1,
                cc.Mgr.Utils.trackEvent_adjust("2i8f03")) : (cc.Mgr.game.curBoshu++,
                cc.Mgr.game.curBoshu == g.waveCount && (o = !0))) : (cc.Mgr.game.curBoshu == g.waveCount && (i = (r = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(a.ZombieData, g.zombieID1)).money * BigInt(Math.round(100 * (1 - s.divide(e.zhp.toString(), r.hp.toString(), 2)))) / BigInt(100),
                n = !0),
                cc.Mgr.game.curBoshu = 1);
                n && e.state && (this.clearZombiePool = !0),
                n ? cc.Mgr.UIMgr.showBigResult(e.state, i) : (cc.Mgr.UIMgr.showSmallResult(e.state),
                !0 === e.state && 4 === cc.Mgr.game.curBoshu && g.waveCount >= 5 ? setTimeout(function() {
                    cc.Mgr.admob.showInterstitial("win", null, !1)
                }, 2200) : !1 === e.state && setTimeout(function() {
                    cc.Mgr.admob.showInterstitial("defeat", null, !1)
                }, 2200)),
                o && this.scheduleOnce(function() {
                    cc.Mgr.UIMgr.showBossComing(g.zombieID1),
                    cc.Mgr.UIMgr.InGameUI.showBuffTip()
                }, 2),
                this.createCallback = function() {
                    this.createZoombie()
                }
                ,
                n || this.scheduleOnce(this.createCallback, t)
            },
            unschedduleCreateCallBack: function(e) {
                void 0 === e && (e = !0),
                this.unschedule(this.createCallback),
                0 != e && this.scheduleOnce(function() {
                    this.clearZombiePool && cc.Mgr.ZombieMgr.clearZombiesPool(),
                    this.createZoombie()
                }, 1)
            },
            AllGuideComplete: function() {
                this.createZoombie(),
                cc.Mgr.plantMgr.checkHasAnySpaceGird(!0) && cc.Mgr.UIMgr.InGameUI.showTipBuyTimesNode(!0)
            },
            rebornToLvLastWave: function() {
                var e = cc.Mgr.game.level > 60 ? cc.Mgr.game.level % 60 + "_" + cc.Mgr.game.curBoshu : cc.Mgr.game.level + "_" + cc.Mgr.game.curBoshu
                  , t = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(a.LevelData, e);
                cc.Mgr.game.curBoshu = t.waveCount,
                cc.Mgr.UIMgr.InGameUI.RefreshLvData(),
                this.scheduleOnce(function() {
                    this.clearZombiePool && cc.Mgr.ZombieMgr.clearZombiesPool(),
                    this.createZoombie()
                }, 1)
            },
            checkIpad: function() {
                if (cc.Mgr.game.isFacebook || (cc.Mgr.game.isFacebook = cc.Mgr.Config.isFacebook),
                !0 !== cc.Mgr.game.isFacebook)
                    switch (this.isPad = !1,
                    cc.sys.os) {
                    case cc.sys.OS_IOS:
                        this.isPad = jsb.reflection.callStaticMethod("Utils", "getIsIpad")
                    }
                else
                    this.isPad = !1
            },
            checkIphoneX: function() {
                if (!0 === cc.Mgr.game.isFacebook)
                    return !1;
                var e = !1;
                switch (cc.sys.os) {
                case cc.sys.OS_IOS:
                    e = jsb.reflection.callStaticMethod("Utils", "isIphoneX")
                }
                return e
            },
            init: function() {
                if (!this.isInit) {
                    this.connectionList = ["https://us-central1-gct-defense-game.cloudfunctions.net/app", "https://europe-west6-gct-defense-game.cloudfunctions.net/appEuropeW6", "https://australia-southeast1-gct-defense-game.cloudfunctions.net/appAustraliaS1", "https://asia-southeast2-gct-defense-game.cloudfunctions.net/appAssiaS2", "https://asia-northeast1-gct-defense-game.cloudfunctions.net/appAssiaN1"],
                    this.connectionRegion = ["app", "appEuropeW6", "appAustraliaS1", "appAssiaS2", "appAssiaN1"],
                    this.connectionTest(),
                    cc.Mgr.game.winSize = cc.view.getVisibleSize(),
                    this.isIphoneX = this.checkIphoneX(),
                    cc.Mgr.admob.isInit = !0,
                    cc.Mgr.admob.preloadAds_mopub();
                    var e = this;
                    cc.Mgr.MapDataMgr.initMaps(),
                    setTimeout(function() {
                        cc.Mgr.notification.init()
                    }, 15e3);
                    var t = {};
                    t.elapsed = cc.Mgr.Utils.getDate9(!0),
                    t.first = cc.Mgr.game.analytics_isFirst,
                    cc.Mgr.analytics.logEvent("start_loading", JSON.stringify(t)),
                    cc.Mgr.TEA.collectEvent("start_loading", {
                        elapsed: cc.Mgr.Utils.getDate9(!0),
                        first: cc.Mgr.game.analytics_isFirst
                    }),
                    cc.Mgr.payment.getProductsInfo(),
                    this.curProgress = 0,
                    this.targetProgress = .2,
                    cc.Mgr.flowerPotMgr.init(function() {
                        e.targetProgress = .5,
                        cc.Mgr.plantMgr.init(function() {
                            e.targetProgress = .8,
                            cc.Mgr.ZombieMgr.InitZombiesMgr(),
                            e.showGameUI()
                        })
                    }),
                    cc.Mgr.Utils.getDays(cc.Mgr.Utils.GetSysTime()) - cc.Mgr.Utils.getDays(cc.Mgr.UserDataMgr.lastPlayTime) >= 1 && (cc.Mgr.game.clearMissionDataToNextDay(),
                    cc.Mgr.game.currentExchangeCount = 0,
                    cc.Mgr.game.vipDailyBonus = !0,
                    cc.Mgr.game.first_daily = !0,
                    cc.Mgr.game.paymentAdCount = 5,
                    cc.Mgr.game.coinBundleFlag = !0,
                    cc.Mgr.game.paymentAdCountList = [1, 1, 1, 2, 2, 2, 3, 3, 3]),
                    cc.Mgr.Utils.GetSysTime() - cc.Mgr.UserDataMgr.lastPlayTime >= 7200 && (cc.Mgr.game.spinADResetTime = 0,
                    cc.Mgr.game.spinUseGemTime = 0,
                    cc.Mgr.game.level <= 10 ? cc.Mgr.game.uavAdsCount = 5 : cc.Mgr.game.level <= 20 ? cc.Mgr.game.uavAdsCount = 5 : cc.Mgr.game.level <= 30 ? cc.Mgr.game.uavAdsCount = 5 : cc.Mgr.game.level <= 40 ? cc.Mgr.game.uavAdsCount = 5 : (cc.Mgr.game.level,
                    cc.Mgr.game.uavAdsCount = 5));
                    var i = 100 * cc.Mgr.game.level + cc.Mgr.game.curBoshu;
                    cc.Mgr.game.lastMaxWave = i,
                    cc.Mgr.game.updateMissionProgressById(c.Login),
                    this.rubbishLabel.string = cc.Mgr.Utils.getTranslation("main-rubbishTip"),
                    this.isInit = !0
                }
            },
            checkUpdate: function() {
                if (!0 === cc.Mgr.game.vipdiscount && 0 === cc.Mgr.game.vipSaleTimer && !1 === cc.Mgr.game.hasLockGrid && cc.Mgr.game.plantsPK[12].type === n.GridState.vipLock && (cc.Mgr.game.vipEnterGameCount++,
                cc.Mgr.game.vipEnterGameCount >= 2 && (cc.Mgr.game.vipEnterGameCount = 0,
                cc.Mgr.game.vipSaleTimer = Date.now() + 2592e5)),
                !0 !== cc.Mgr.game.isFacebook) {
                    var e = cc.Mgr.abTest.getABtest("version");
                    "" !== e && this.compareVersion(cc.Mgr.Config.version, e) ? cc.Mgr.UIMgr.openUpdateAvailable() : cc.Mgr.game.vipSaleTimer > Date.now() && !1 === cc.Mgr.game.isVIP ? cc.Mgr.UIMgr.openVipUI("enterGame") : this.startGame()
                } else
                    cc.Mgr.game.vipSaleTimer > Date.now() && !1 === cc.Mgr.game.isVIP ? cc.Mgr.UIMgr.openVipUI("enterGame") : this.startGame()
            },
            compareVersion: function(e, t) {
                var i = e.split(".")
                  , a = t.split(".");
                return 100 * parseInt(i[0]) + 10 * parseInt(i[1]) + 1 * parseInt(i[2]) < 100 * parseInt(a[0]) + 10 * parseInt(a[1]) + 1 * parseInt(a[2])
            },
            caculateOfflineAsset: function() {
                var e = Math.floor((cc.Mgr.Utils.GetSysTime() - cc.Mgr.game.lastOfflineTime) / 60);
                if (!(e < 1)) {
                    var t = Math.floor(e / 60)
                      , i = Math.floor(e % 60);
                    (cc.Mgr.Utils.GetSysTime() - cc.Mgr.game.lastOfflineTime) % 60 >= 30 && (e += .5,
                    i += .5);
                    var c = 0
                      , s = 0
                      , o = 0;
                    t < 1 ? o = .83 : t < 2 ? o = .49 : t < 3 ? o = .34 : t < 4 ? o = .25 : t < 5 ? o = .16 : t < 6 ? o = .08 : t < 7 ? o = .05 : t < 8 ? o = .03 : (i = e - 480,
                    o = .0167);
                    for (var r = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(a.PlantData, cc.Mgr.game.plantMaxLv).offline, l = 0; l < cc.Mgr.game.plantsPK.length; l++)
                        if (cc.Mgr.game.plantsPK[l].type == n.GridState.plant) {
                            var g = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(a.PlantData, cc.Mgr.game.plantsPK[l].level)
                              , h = Math.floor(r * Math.pow(2.1, g.level - 1));
                            c += h,
                            s += h * o * i
                        }
                    console.log("offlineMoney = " + r + "  hours = " + t + "  money = " + c);
                    var d = 0;
                    t <= 1 ? d = Math.floor(c * e * .83) : t < 2 ? d = Math.floor(49.8 * c + s) : t < 3 ? d = Math.floor(60 * c * (.83 + .49) + s) : t < 4 ? d = Math.floor(99.6 * c + s) : t < 5 ? d = Math.floor(114.6 * c + s) : t < 6 ? d = Math.floor(60 * 2.07 * c + s) : t < 7 ? d = Math.floor(129 * c + s) : t < 8 ? d = Math.floor(60 * c * (2.15 + .05) + s) : (d = Math.floor(60 * c * (2.15 + .05 + .03) + s),
                    console.log("offlineMoney = " + r + "  hours = " + t + "  money = " + c + " outMoney = " + d)),
                    (d = Math.round(.8 * d)) > 0 && cc.Mgr.UIMgr.openOfflineAssetsUI(BigInt(d))
                }
            },
            getChannel: function() {
                if (!0 === cc.Mgr.game.isFacebook)
                    return "";
                var e;
                switch (cc.sys.os) {
                case cc.sys.OS_ANDROID:
                    e = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/notification/Notification", "getChannel", "()Ljava/lang/String;");
                    break;
                case cc.sys.OS_IOS:
                    e = jsb.reflection.callStaticMethod("Notification", "getCurrentLaunch")
                }
                return e
            },
            showGameUI: function() {
                var e = this;
                cc.Mgr.UIMgr.openGameInUI(function() {
                    cc.Mgr.UIMgr.InGameUI.checkSignState(),
                    e.targetProgress = 1,
                    cc.Mgr.game.isZoomIn && e.zoomIn()
                }),
                cc.Mgr.TEA.collectEvent("enter_game", {
                    elapsed: cc.Mgr.Utils.getDate9(!0),
                    first: cc.Mgr.game.analytics_isFirst,
                    first_daily: cc.Mgr.game.first_daily,
                    channel: this.getChannel()
                });
                var t = {};
                t.elapsed = cc.Mgr.Utils.getDate9(!0),
                t.first = cc.Mgr.game.analytics_isFirst,
                t.first_daily = cc.Mgr.game.first_daily,
                t.channel = this.getChannel(),
                cc.Mgr.analytics.logEvent("enter_game", JSON.stringify(t)),
                cc.Mgr.game.first_daily = !1
            },
            startGame: function() {
                var e = this;
                cc.Mgr.iCloud.getGameData(function() {
                    e.SaveUserDataSchedule()
                }),
                1 == cc.Mgr.Config.isGameSnacks && (GAMESNACKS.isAudioEnabled() && cc.Mgr.AudioMgr.playBGM("bgm"),
                GAMESNACKS.subscribeToAudioUpdates(function(e) {
                    e ? cc.Mgr.AudioMgr.resumeAll() : cc.Mgr.AudioMgr.pauseAll()
                }),
                GAMESNACKS.gameReady()),
                this.createPlant(),
                cc.Mgr.game.needGuide || setTimeout(function() {
                    var t = "";
                    if ("false" == cc.Mgr.abTest.getABtest("enable_local_compensation") && (t = cc.Mgr.abTest.getABtest("compensation_2")),
                    cc.Mgr.Utils.checkUserData(),
                    "" !== t) {
                        var i = JSON.parse(t)
                          , a = i.version;
                        if (e.compareVersion(cc.Mgr.game.first_version, a)) {
                            var n = i.target.split(";");
                            null == cc.Mgr.game.compensation[i.id] && ("all_users" == i.target || n.indexOf(cc.Mgr.game.UUID) >= 0) ? cc.Mgr.UIMgr.openCompensationUI(i) : null != cc.Mgr.Utils.preUpdateData ? cc.Mgr.UIMgr.openCompensationUI(null) : e.caculateOfflineAsset()
                        } else
                            null != cc.Mgr.Utils.preUpdateData ? cc.Mgr.UIMgr.openCompensationUI(null) : e.caculateOfflineAsset()
                    } else
                        null != cc.Mgr.Utils.preUpdateData ? cc.Mgr.UIMgr.openCompensationUI(null) : e.caculateOfflineAsset()
                }, 5e3)
            },
            unscheduleSaveData: function() {
                this.unschedule(this.SaveUserData)
            },
            SaveUserDataSchedule: function() {
                this.schedule(this.SaveUserData, 2, cc.macro.REPEAT_FOREVER, 5)
            },
            SaveUserData: function() {
                cc.Mgr.UserDataMgr.SaveUserData()
            },
            createPlant: function() {
                cc.Mgr.plantMgr.initPlants(),
                cc.Mgr.game.needGuide ? (cc.Mgr.UIMgr.openGuide(),
                cc.Mgr.Utils.trackEvent_adjust("yrknbw")) : this.createZoombie()
            },
            createZoombie: function() {
                cc.Mgr.ZombieMgr.getOneWaveZombies(cc.Mgr.game.level, cc.Mgr.game.curBoshu)
            },
            connectionTest: function() {
                if (1 != cc.Mgr.Config.isFacebook) {
                    cc.Mgr.game.paymentVerificationURL = this.connectionList[0],
                    cc.Mgr.game.paymentRegion = this.connectionRegion[0];
                    var e = this;
                    this.minTimer = null,
                    this.startTimer = Date.now();
                    for (var t = 0; t < this.connectionList.length; t++)
                        (function(t) {
                            cc.Mgr.http.httpGets(e.connectionList[t] + "/conn", function(i, a) {
                                1 != i && 0 === JSON.parse(a.response).status && (null == e.minTimer ? (e.minTimer = Date.now() - e.startTimer,
                                cc.Mgr.game.paymentVerificationURL = e.connectionList[t],
                                cc.Mgr.game.paymentRegion = e.connectionRegion[t]) : Date.now() - e.startTimer < e.minTimer && (e.minTimer = Date.now() - e.startTimer,
                                cc.Mgr.game.paymentVerificationURL = e.connectionList[t],
                                cc.Mgr.game.paymentRegion = e.connectionRegion[t]),
                                console.log("timer: " + (Date.now() - e.startTimer)),
                                console.log("url: " + e.connectionList[t]),
                                console.log("cc.Mgr.game.paymentVerificationURL: " + cc.Mgr.game.paymentVerificationURL))
                            })
                        }
                        )(t)
                }
            },
            update: function() {
                if (Date.now() - this.checkTimer >= 5e3) {
                    var e = (new Date).getHours();
                    cc.Mgr.game.isFreeDoubleDaily = e <= 23 && e >= 17,
                    this.checkTimer = Date.now()
                }
                null != this.loadScreen && !1 !== this.loadScreen.getComponent("FirstUI").startUpdate && (this.curProgress += .05,
                this.curProgress >= this.targetProgress && (this.curProgress = this.targetProgress),
                this.loadScreen.getComponent("FirstUI").updateProgress(this.curProgress),
                this.curProgress >= 1 && (this.loadScreen = null,
                this.checkUpdate()))
            }
        }),
        cc._RF.pop()
    }
    , {
        DataType: "DataType",
        Event: "Event",
        MissionType: "MissionType",
        MyEnum: "MyEnum",
        "js-big-decimal": "js-big-decimal"
    }],
    GlobalEvent: [function(e, t) {
        "use strict";
        cc._RF.push(t, "b5a94AUBhhFQKkBpmCdMQ6J", "GlobalEvent"),
        cc.director.GlobalEvent = {
            handles_: {},
            emit: function(e, t) {
                var i = [];
                for (var a in t.eventName = e,
                this.handles_)
                    if (a == e)
                        for (var n = 0; n < this.handles_[a].length; n++)
                            if (this.handles_[a][n]) {
                                var c = this.handles_[a][n](t);
                                i.push(c)
                            }
                return i
            },
            on: function(e, t, i) {
                this.handles_[e] = this.handles_[e] || [],
                this.handles_[e].push(t.bind(i))
            },
            off: function(e) {
                if (this.handles_[e])
                    for (var t = 0; t < this.handles_[e].length; t++)
                        this.handles_[e][t] = null
            },
            clear: function() {
                for (var e in this.handles_)
                    for (var t = 0; t < this.handles_[e].length; t++)
                        this.handles_[e][t] = null
            }
        },
        cc._RF.pop()
    }
    , {}],
    GoodMapDecoder: [function(e, t) {
        "use strict";
        cc._RF.push(t, "1cc1e0yXE5O8avRRE3Olzp4", "GoodMapDecoder");
        var i = e("GoodsData")
          , a = cc.Class({
            extends: cc.Component,
            properties: {
                jsonName: "goods",
                goodsList: {
                    default: [],
                    type: [i]
                }
            },
            DecodeJson: function(e) {
                var t = this;
                t.reCb = e,
                cc.loader.loadRes("json/" + t.jsonName, function(e, a) {
                    if (e)
                        t.reCb(!1);
                    else {
                        for (var n = a.json.goods, c = 0; c < n.length; c++) {
                            var s = new i;
                            s.Id = n[c].goodsId,
                            s.icon = n[c].icon,
                            s.name = n[c].name,
                            s.price = n[c].price,
                            t.goodsList[c] = s
                        }
                        t.reCb(!0)
                    }
                })
            },
            getDataByName: function(e) {
                for (var t = null, i = this.goodsList.length - 1; i >= 0; i--)
                    if (e == this.goodsList[i].name) {
                        t = this.goodsList[i];
                        break
                    }
                return t
            },
            getDataById: function(e) {
                for (var t = null, i = this.goodsList.length - 1; i >= 0; i--)
                    if (e == this.goodsList[i].Id) {
                        t = this.goodsList[i];
                        break
                    }
                return t
            },
            getJsonLength: function() {
                return this.goodsList.length
            },
            getDataList: function() {
                return this.goodsList
            }
        });
        t.exports = a,
        cc._RF.pop()
    }
    , {
        GoodsData: "GoodsData"
    }],
    GoodsData: [function(e, t) {
        "use strict";
        cc._RF.push(t, "3181a0eu+BDhoNZrrSBRV5p", "GoodsData");
        var i = cc.Class({
            name: "GoodsData",
            properties: {
                icon: "",
                name: "",
                Id: 1,
                price: 0
            }
        });
        t.exports = i,
        cc._RF.pop()
    }
    , {}],
    Guides: [function(e, t) {
        "use strict";
        cc._RF.push(t, "bc93dAJV3hAEIAHRtOiz5mx", "Guides");
        var i = e("MyEnum")
          , a = e("Event")
          , n = e("uiConfig");
        cc.Class({
            extends: cc.Component,
            properties: {
                guideNodes: [cc.Node],
                guideLbls: [cc.Label]
            },
            start: function() {
                if (this.guideList = [i.GuideType.guide3, i.GuideType.guide4, i.GuideType.guide5, i.GuideType.guide6],
                cc.director.GlobalEvent.on(a.singleGuideComplete, this.singleGuideComplete, this),
                cc.director.GlobalEvent.on(a.showSingleGuide, this.showSingleGuide, this),
                this.guideStepList = ["", "", "", "tutorial_merge_guardian", "tutorial_claim_coins", "tutorial_move_guardian", "tutorial_open_pot"],
                0 === cc.Mgr.game.curGuide) {
                    var e = {};
                    e.elapsed = cc.Mgr.Utils.getDate9(!0),
                    cc.Mgr.analytics.logEvent("tutorial_begin", JSON.stringify(e)),
                    cc.Mgr.TEA.collectEvent("tutorial_begin", {
                        elapsed: cc.Mgr.Utils.getDate9(!0)
                    })
                }
                this.curStep = this.guideList[cc.Mgr.game.curGuide],
                this.guideNodes[this.curStep].active = !0,
                cc.Mgr.game.curGuideStep = this.curStep,
                this.node.zIndex = n.guide.Layer;
                for (var t = 2; t < 6; t++) {
                    var c = "guide-" + (t + 1);
                    this.guideLbls[t].string = cc.Mgr.Utils.getTranslation(c)
                }
                this.showSingleGuide({
                    step: this.curStep
                })
            },
            singleGuideComplete: function(e) {
                var t = {};
                t.elapsed = cc.Mgr.Utils.getDate9(!0),
                t.step = this.guideStepList[e.step + 1],
                cc.Mgr.analytics.logEvent("tutorial_step", JSON.stringify(t)),
                cc.Mgr.TEA.collectEvent("tutorial_step", {
                    elapsed: cc.Mgr.Utils.getDate9(!0),
                    step: this.guideStepList[e.step + 1]
                });
                var i = e.step;
                this.guideNodes[i].active = !1,
                cc.Mgr.game.curGuide++,
                3 == cc.Mgr.game.curGuide && (cc.Mgr.flowerPotMgr.addDropFlowerFot(1),
                cc.Mgr.plantMgr.checkSpaceGird()),
                4 === cc.Mgr.game.curGuide && (cc.director.GlobalEvent.emit(a.AllGuideComplete, {}),
                cc.Mgr.game.needGuide = !1,
                (t = {}).elapsed = cc.Mgr.Utils.getDate9(!0),
                cc.Mgr.analytics.logEvent("tutorial_complete", JSON.stringify(t)),
                cc.Mgr.TEA.collectEvent("tutorial_complete", {
                    elapsed: cc.Mgr.Utils.getDate9(!0)
                }),
                cc.Mgr.Utils.trackEvent_adjust("hsae6k"))
            },
            showSingleGuide: function(e) {
                for (var t = this, a = 0; a < this.guideNodes.length; a++)
                    null != this.guideNodes[a] && (this.guideNodes[a].active = !1);
                var n = e.step;
                3 === cc.Mgr.game.curGuide ? setTimeout(function() {
                    t.guideNodes[n].active = !0
                }, 600) : this.guideNodes[n].active = !0,
                n == i.GuideType.guide3 && cc.Mgr.plantMgr.guideStep3Run(),
                cc.Mgr.game.curGuideStep = n
            }
        }),
        cc._RF.pop()
    }
    , {
        Event: "Event",
        MyEnum: "MyEnum",
        uiConfig: "uiConfig"
    }],
    HttpUtils: [function(e, t) {
        "use strict";
        cc._RF.push(t, "386c4NxWj9BW7Z2xUnfIPgq", "HttpUtils");
        var i = cc.Class({
            extends: cc.Component,
            properties: {},
            statics: {
                instance: null
            },
            onLoad: function() {},
            httpGets: function(e, t, i) {
                var a = cc.loader.getXMLHttpRequest();
                console.log("Status: Send Get Request to " + e),
                a.open("GET", e, !0),
                null != i && (a.setRequestHeader("signature", i.signature),
                a.setRequestHeader("reqtime", i.reqTime)),
                a.onreadystatechange = function() {
                    if (4 == a.readyState && a.status >= 200 && a.status <= 207) {
                        var e = a.statusText;
                        console.log("Status: Got GET response! " + e),
                        t(!1, a)
                    } else
                        t(!0, a)
                }
                ,
                a.send()
            },
            httpPost: function(e, t, i) {
                var a = arguments.length;
                2 == a && (i = arguments[1],
                t = "");
                var n = cc.loader.getXMLHttpRequest();
                n.open("POST", e),
                n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                n.onreadystatechange = function() {
                    var e;
                    if (4 == n.readyState) {
                        e = !(n.status >= 200 && n.status <= 207);
                        var t = n.responseText;
                        i(e, t)
                    }
                }
                ,
                n.send(t)
            }
        });
        t.exports = i,
        cc._RF.pop()
    }
    , {}],
    ICloud: [function(e, t) {
        "use strict";
        cc._RF.push(t, "6e669h89bZNZb8XzopX7HG4", "ICloud"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {
                cc.Mgr.iCloud = this
            },
            getGameData: function(e) {
                if (this.callback = e,
                !0 === cc.Mgr.game.isFacebook || cc.sys.os !== cc.sys.OS_IOS)
                    return this.gameData = null,
                    void (null != this.callback && this.callback());
                switch (cc.sys.os) {
                case cc.sys.OS_ANDROID:
                    break;
                case cc.sys.OS_IOS:
                    jsb.reflection.callStaticMethod("ICloud", "getData")
                }
            },
            getGameDataFromICloud: function(e) {
                this.gameData = "" == e ? null : JSON.parse(e),
                null != this.callback && this.callback()
            },
            updateData: function(e) {
                if (!0 !== cc.Mgr.game.isFacebook) {
                    var t = JSON.stringify(e);
                    switch (cc.sys.os) {
                    case cc.sys.OS_ANDROID:
                        break;
                    case cc.sys.OS_IOS:
                        jsb.reflection.callStaticMethod("ICloud", "updateData:", t)
                    }
                }
            }
        }),
        cc._RF.pop()
    }
    , {}],
    InGameUI: [function(e, t) {
        "use strict";
        cc._RF.push(t, "2e531d48NJLnoC37E1mziCK", "InGameUI");
        var i = e("DataType")
          , a = e("Event")
          , n = e("AtlasType")
          , c = e("MySprite")
          , s = e("MyEnum")
          , o = e("uav")
          , r = cc.Class({
            extends: cc.Component,
            properties: {
                curLvLbl: cc.Label,
                waveCountLbl: cc.Label,
                coinNumLbl: cc.Label,
                diamondNumLbl: cc.Label,
                coinNumEffect: cc.Node,
                gemNumEffect: cc.Node,
                coinSpriteNode: cc.Node,
                gemSpriteNode: cc.Node,
                topNode: cc.Node,
                buyCostLbl: cc.Label,
                plantHead: c,
                buffTip: cc.Node,
                doubleCoinTimeLbl: cc.Label,
                doubleCoinNode: cc.Node,
                doubleCoinLabel: cc.Node,
                uav: o,
                buyButtonScprit: cc.Button,
                missionTip: cc.Node,
                turntableTip: cc.Node,
                signTip: cc.Node,
                tipBuyTimesNode: cc.Node,
                shopTip: cc.Node,
                levelLabel: cc.Label,
                taskLabel: cc.Label,
                signInLabel: cc.Label,
                rankLabel: cc.Label,
                rouletteLabel: cc.Label,
                vipLabel: cc.Label,
                doubleLabel: cc.Label,
                exchangeLabel: cc.Label,
                rageLabel: cc.Label,
                shopLabel: cc.Label,
                guideBuyPlant: cc.Label,
                rageTipLabel: cc.Label,
                vipNode: cc.Node,
                vipIcon: cc.Node,
                vipEffect: cc.Node,
                spriteBtn: cc.Sprite,
                nomarlM: cc.Material,
                grayM: cc.Material,
                zoomInBtn: cc.Node,
                zoomOutBtn: cc.Node,
                starterBundleEffect: cc.Node,
                starterBundleBg: cc.Node,
                starterBundleNode: cc.Node,
                showTipList: [cc.Node],
                showTipLabelList: [cc.Label],
                vipStarterBundleNode: cc.Node,
                auto_on: cc.Node,
                auto_off: cc.Node,
                rage_on: cc.Node,
                rage_off: cc.Node,
                fire_on: cc.Node,
                fire_off: cc.Node,
                ice_on: cc.Node,
                ice_off: cc.Node,
                crit_on: cc.Node,
                crit_off: cc.Node,
                leftNode: cc.Node,
                rightNode: cc.Node,
                coinBonusNode: cc.Node,
                bottomNode: cc.Node,
                autoTimerLabel: cc.Label,
                rageTimerLabel: cc.Label,
                iceTimerLabel: cc.Label,
                fireTimerLabel: cc.Label,
                critTimerLabel: cc.Label,
                autoOffNode: cc.Node,
                rageOffNode: cc.Node,
                iceOffNode: cc.Node,
                fireOffNode: cc.Node,
                critOffNode: cc.Node,
                autoOnNode: cc.Node,
                rageOnNode: cc.Node,
                iceOnNode: cc.Node,
                fireOnNode: cc.Node,
                critOnNode: cc.Node,
                buffBtn: cc.Node,
                shopBtn: cc.Node
            },
            showBtnTip: function() {
                if (!(cc.Mgr.game.btnTipList.indexOf(0) < 0))
                    for (var e = 0; e < cc.Mgr.game.btnTipList.length; e++)
                        if (0 == cc.Mgr.game.btnTipList[e]) {
                            this.showTipList[e].active = !0;
                            break
                        }
            },
            zoomIn: function() {
                var e = this;
                cc.Mgr.game.needGuide ? cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("need-to-complete-guide"), "", this.node) : (cc.Mgr.GameCenterCtrl.zoomIn(),
                this.zoomInBtn.active = !1,
                this.zoomOutBtn.active = !0,
                cc.Mgr.game.needGuide || (cc.Mgr.game.btnTipList[2] = 1,
                this.showTipList[2].active = !1,
                setTimeout(function() {
                    e.showBtnTip()
                }, 500),
                cc.Mgr.game.btnTipList.indexOf(0) < 0 && this.unschedule(this.loopBtnTip)))
            },
            zoomOut: function() {
                cc.Mgr.game.needGuide ? cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("need-to-complete-guide"), "", this.node) : (cc.Mgr.GameCenterCtrl.zoomOut(),
                this.zoomInBtn.active = !0,
                this.zoomOutBtn.active = !1,
                cc.Mgr.game.needGuide || (cc.Mgr.game.btnTipList[2] = 1,
                this.showTipList[2].active = !1,
                this.showBtnTip()))
            },
            start: function() {
                this.zoomInBtn.active = !cc.Mgr.game.isZoomIn,
                this.zoomOutBtn.active = cc.Mgr.game.isZoomIn,
                this.limitClick = this.node.getComponent("LimitClick"),
                this.levelLabel.string = cc.Mgr.Utils.getTranslation("main-level"),
                this.taskLabel.string = cc.Mgr.Utils.getTranslation("main-task"),
                this.signInLabel.string = cc.Mgr.Utils.getTranslation("main-signIn"),
                this.rankLabel.string = cc.Mgr.Utils.getTranslation("main-rank"),
                this.rouletteLabel.string = cc.Mgr.Utils.getTranslation("main-roulette"),
                this.vipLabel.string = cc.Mgr.Utils.getTranslation("main-vip"),
                this.doubleLabel.string = cc.Mgr.Utils.getTranslation("main-treble"),
                this.exchangeLabel.string = cc.Mgr.Utils.getTranslation("main-offline"),
                this.rageLabel.string = cc.Mgr.Utils.getTranslation("main-buff"),
                this.shopLabel.string = cc.Mgr.Utils.getTranslation("main-shop"),
                this.guideBuyPlant.string = cc.Mgr.Utils.getTranslation("main-buy-plant-tip"),
                this.rageTipLabel.string = cc.Mgr.Utils.getTranslation("main-rage-tip"),
                this.showTipLabelList[0].string = cc.Mgr.Utils.getTranslation("dailyBonusTip"),
                this.showTipLabelList[1].string = cc.Mgr.Utils.getTranslation("taskTip"),
                this.showTipLabelList[2].string = cc.Mgr.Utils.getTranslation("zoomTip"),
                this.uav.node.active = !1,
                cc.director.GlobalEvent.on(a.checkMissionAndAchieve, function() {
                    this.checkMissionAchieveTip()
                }, this),
                this.recordState = 0,
                this.isInitMoney = !1,
                this.isInitGem = !1,
                this.showStarterBundleEffect = !0,
                cc.Mgr.game.showStarterBundleEffectFlag ? (this.starterBundleEffect.active = !0,
                this.starterBundleNode.getComponent(cc.Button).target = this.starterBundleEffect,
                this.starterBundleBg.active = !1) : (this.starterBundleEffect.active = !1,
                this.starterBundleBg.active = !0,
                this.starterBundleNode.getComponent(cc.Button).target = this.starterBundleBg),
                this.showVipIconEffect = !0,
                cc.Mgr.game.showStarterBundleEffectFlag && !cc.Mgr.game.isVIP ? (this.vipIcon.active = !1,
                this.vipEffect.active = !0,
                this.vipNode.getComponent(cc.Button).target = this.vipEffect) : (this.vipIcon.active = !0,
                this.vipNode.getComponent(cc.Button).target = this.vipIcon,
                this.vipEffect.active = !1),
                !0 === cc.Mgr.Config.isChina ? this.vipStarterBundleNode.active = !1 : this.vipStarterBundleNode.active = !0,
                !0 === cc.Mgr.game.isPad && (this.leftNode.removeComponent(cc.Widget),
                this.rightNode.removeComponent(cc.Widget),
                this.doubleCoinNode.removeComponent(cc.Widget),
                this.coinBonusNode.removeComponent(cc.Widget),
                this.leftNode.x = -40 - cc.Mgr.game.ratioOffsetX,
                this.leftNode.x < -150 && (this.leftNode.x = -150),
                this.rightNode.x = 240 + cc.Mgr.game.ratioOffsetX,
                this.rightNode.x > 350 && (this.rightNode.x = 350),
                this.doubleCoinNode.x = -245 - cc.Mgr.game.ratioOffsetX,
                this.doubleCoinNode.x < -350 && (this.doubleCoinNode.x = -350),
                this.coinBonusNode.x = 370 + cc.Mgr.game.ratioOffsetX,
                this.coinBonusNode.x > 500 && (this.coinBonusNode.x = 500),
                this.buffBtn.x = -223 - cc.Mgr.game.ratioOffsetX,
                this.buffBtn.x < -350 && (this.buffBtn.x = -350),
                this.shopBtn.x = 217 + cc.Mgr.game.ratioOffsetX,
                this.shopBtn.x > 350 && (this.shopBtn.x = 350)),
                !0 === cc.Mgr.GameCenterCtrl.isIphoneX && (this.topNode.getComponent(cc.Widget).top -= 30),
                this.whiteColor = new cc.Color(255,255,255),
                this.greenColor = new cc.Color(59,218,52)
            },
            onClickVIP: function() {
                this.showVipIconEffect && cc.Mgr.game.showStarterBundleEffectFlag && (this.showVipIconEffect = !1,
                this.vipIcon.active = !0,
                this.vipNode.getComponent(cc.Button).target = this.vipIcon,
                this.vipEffect.active = !1),
                cc.Mgr.UIMgr.openVipUI()
            },
            showTipBuyTimesNode: function(e) {
                var t = this;
                void 0 === e && (e = !1),
                this.tipBuyTimesNode.active != e && (this.tipBuyTimesNode.active = e,
                e || (cc.Mgr.game.tipBuyTimes = 5),
                e || (cc.Mgr.plantMgr.otherTipCount > 0 ? this.schedule(this.loopBtnTip, 30) : setTimeout(function() {
                    t.showBtnTip()
                }, 6e4)))
            },
            loopBtnTip: function() {
                cc.Mgr.plantMgr.otherTipCount <= 0 && this.showBtnTip()
            },
            caculateShopHasAds: function() {
                if (cc.Mgr.game.plantMaxLv <= 4)
                    return !1;
                for (var e = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(i.ShopData, cc.Mgr.game.plantMaxLv), t = 0; t < 9; t++) {
                    var a = "";
                    switch (t) {
                    case 0:
                        a = e.MAX;
                        break;
                    case 1:
                        a = e.MAX_1;
                        break;
                    case 2:
                        a = e.MAX_2;
                        break;
                    case 3:
                        a = e.MAX_3;
                        break;
                    case 4:
                        a = e.MAX_4;
                        break;
                    case 5:
                        a = e.MAX_5;
                        break;
                    case 6:
                        a = e.MAX_6;
                        break;
                    case 7:
                        a = e.MAX_7;
                        break;
                    case 8:
                        a = e.MAX_8
                    }
                    if (a == s.ShopItemType.Ads && cc.Mgr.Utils.GetSysTime() - cc.Mgr.game.lastAdsGetPlantTime >= 60)
                        return !0
                }
                return !1
            },
            checkShopTipState: function() {
                this.caculateShopHasAds() ? this.shopTip.opacity = 255 : this.shopTip.opacity = 0
            },
            checkTurnTableLeftTime: function() {
                0 !== cc.Mgr.game.spinADTimeCount && cc.Mgr.game.spinADTimeCount <= cc.Mgr.Utils.GetSysTime() && (cc.Mgr.game.freeFlag.TurnTable = !0,
                cc.Mgr.game.spinADTimeCount = 0,
                cc.Mgr.game.spinADResetTime = 0)
            },
            showUav: function() {
                this.uav.node.active = !0,
                this.uav.show()
            },
            closeUav: function() {
                1 == this.uav.node.active && this.uav.uavOutScreen()
            },
            unscheduleShowUav: function() {
                this.unschedule(this.showUav)
            },
            showUavNextTime: function(e) {
                cc.Mgr.game.plantMaxLv < 5 || this.scheduleOnce(this.showUav, e)
            },
            subDoubleCoin: function() {
                if (cc.Mgr.game.doubleCoinLeftTime <= 0)
                    return cc.Mgr.game.doubleCoinState = !1,
                    void this.unschedule(this.subDoubleCoin);
                cc.Mgr.game.doubleCoinLeftTime -= 1,
                this.doubleCoinTimeLbl.string = cc.Mgr.Utils.FormatNumToTime(cc.Mgr.game.doubleCoinLeftTime, !0),
                this.doubleCoinTimeLbl.node.active = !0,
                this.doubleCoinLabel.active = !1,
                cc.Mgr.game.doubleCoinLeftTime <= 0 && (this.doubleCoinTimeLbl.node.active = !1,
                this.doubleCoinLabel.active = !0,
                cc.Mgr.game.doubleCoinState = !1,
                this.showDoubleCoinBtn(!1),
                this.unschedule(this.subDoubleCoin),
                cc.Mgr.game.doubleBtnIntervalTime = 300,
                this.startCaculateIntervalDou())
            },
            startDoubleCoinState: function() {
                cc.Mgr.game.doubleCoinLeftTime = 100,
                cc.Mgr.game.doubleCoinState = !0,
                this.schedule(this.subDoubleCoin, 1, 100, .1)
            },
            adsDoubleCoin: function() {
                cc.Mgr.game.doubleCoinLeftTime > 0 ? cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("is-treble-now"), "", this.node) : cc.Mgr.UIMgr.openDoubleCoinUI()
            },
            subIntervalDoubleCoin: function() {
                cc.Mgr.game.doubleBtnIntervalTime -= 1,
                cc.Mgr.game.doubleBtnIntervalTime <= 0 && (this.unschedule(this.subIntervalDoubleCoin),
                this.showDoubleCoinBtn(!0))
            },
            startCaculateIntervalDou: function() {
                var e = cc.Mgr.game.doubleBtnIntervalTime;
                this.schedule(this.subIntervalDoubleCoin, 1, e, .1)
            },
            updateDoubleCoinBtn: function() {
                this.checkAvailabelAds = cc.Mgr.admob.checkAvailableRewardedAd(),
                0 == this.checkAvailabelAds && this.showDoubleCoinBtn(!1)
            },
            showDoubleCoinBtn: function(e) {
                if (cc.Mgr.admob.preloadRewarded(),
                e = cc.Mgr.admob.checkAvailableRewardedAd() && e,
                cc.Mgr.game.doubleCoinLeftTime <= 0 ? (this.doubleCoinTimeLbl.node.active = !1,
                this.doubleCoinLabel.active = !0) : (this.doubleCoinTimeLbl.node.active = !0,
                this.doubleCoinLabel.active = !1),
                this.doubleCoinNode.active = e,
                !1 === this.hasSetPos) {
                    var t = this.doubleCoinNode.convertToWorldSpaceAR(cc.Mgr.plantMgr.rubbishNode.position);
                    cc.Mgr.game.localPoint_doubleCoinNode = cc.Mgr.plantMgr.rubbishNode.convertToNodeSpaceAR(t),
                    this.hasSetPos = !0
                }
                var i;
                e ? !0 === cc.Mgr.game.zoomIn ? cc.Mgr.plantMgr.rubbishNode.y = -150 : cc.Mgr.plantMgr.rubbishNode.y = -185 : !0 === cc.Mgr.game.zoomIn ? cc.Mgr.plantMgr.rubbishNode.y = -280 : cc.Mgr.plantMgr.rubbishNode.y = -335,
                !0 === cc.Mgr.game.zoomIn ? ((i = cc.Mgr.game.isPad ? -238 - .83 * cc.Mgr.game.ratioOffsetX : -253) < -340 && (i = -340),
                cc.Mgr.plantMgr.rubbishNode.x = i) : ((i = cc.Mgr.game.isPad ? -268 - .83 * cc.Mgr.game.ratioOffsetX : -253) < -360 && (i = -360),
                cc.Mgr.plantMgr.rubbishNode.x = i),
                i < -360 && (i = -360),
                cc.Mgr.plantMgr.rubbishNode.x = i
            },
            showTopNode: function(e) {
                void 0 === e && (e = !0),
                this.topNode.active = e
            },
            showPayment: function() {
                cc.Mgr.UIMgr.openPaymentUI(!0)
            },
            showCoinExchange: function() {
                cc.Mgr.UIMgr.openExchangeCoinUI()
            },
            init: function() {
                cc.Mgr.UIMgr.InGameUI = this,
                cc.Mgr.UIMgr.topCoinNode = this.coinNumLbl.node,
                cc.Mgr.UIMgr.topGemNode = this.diamondNumLbl.node,
                this.hasSetPos = !1,
                this.scheduleOnce(function() {
                    this.RefreshLvData(),
                    this.checkMissionAchieveTip(),
                    this.checkShopTipState()
                }, .5),
                cc.director.GlobalEvent.on(a.defense, function() {
                    this.RefreshLvData()
                }, this),
                this.RefreshAssetData(!0, "money"),
                this.RefreshAssetData(!0, "gem"),
                this.RefreshBuyButtonAll(),
                cc.Mgr.game.resetKeepInGameTime(),
                0 !== cc.Mgr.game.spinADTimeCount && cc.Mgr.game.spinADTimeCount < cc.Mgr.Utils.GetSysTime() && (cc.Mgr.game.freeFlag.TurnTable = !0,
                cc.Mgr.game.spinADTimeCount = 0,
                cc.Mgr.game.spinADResetTime = 0),
                this.checkShopTipState(),
                this.schedule(function() {
                    this.checkTurnTableLeftTime(),
                    this.checkShopTipState(),
                    this.checkKeepInGameTime(),
                    this.checkSignState()
                }, 1),
                this.showUavNextTime(30),
                cc.Mgr.game.doubleBtnIntervalTime > 0 ? (this.showDoubleCoinBtn(!1),
                this.startCaculateIntervalDou()) : cc.Mgr.game.plantMaxLv >= 6 ? this.showDoubleCoinBtn(!0) : this.showDoubleCoinBtn(!1),
                cc.Mgr.game.needGuide || this.schedule(this.loopBtnTip, 30)
            },
            checkKeepInGameTime: function() {
                cc.Mgr.game.keepInGameTime += 1,
                cc.Mgr.game.dailyMissions[4].progress = cc.Mgr.game.keepInGameTime,
                (300 == cc.Mgr.game.keepInGameTime && 0 == cc.Mgr.game.dailyMissions[4].checklv || 600 == cc.Mgr.game.keepInGameTime && cc.Mgr.game.dailyMissions[4].checklv <= 1 || 1200 == cc.Mgr.game.keepInGameTime && 0 == cc.Mgr.game.dailyMissions[4].claimed) && (this.missionTip.active = !0)
            },
            checkMissionAchieveTip: function() {
                cc.Mgr.game.checkOutAchieveDataIsFinished() || cc.Mgr.game.checkOutMissionIsFinished() ? this.missionTip.active = !0 : this.missionTip.active = !1
            },
            setTopNodeLayer: function() {},
            RefreshAssetData: function(e, t) {
                if ("money" === t) {
                    var i = cc.Mgr.Utils.getNumStr2(cc.Mgr.game.money);
                    this.coinNumEffect.getComponent("NumEffect").setNumber(i, e),
                    this.RefreshBuyButtonMergeAll()
                } else {
                    var a = cc.Mgr.Utils.getNumStr(cc.Mgr.game.gems);
                    this.gemNumEffect.getComponent("NumEffect").setNumber(a, e)
                }
            },
            RefreshLvData: function() {
                this.curLvLbl.string = cc.Mgr.game.level;
                var e = cc.Mgr.game.level > 60 ? cc.Mgr.game.level % 60 + "_" + cc.Mgr.game.curBoshu : cc.Mgr.game.level + "_" + cc.Mgr.game.curBoshu
                  , t = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(i.LevelData, e);
                this.waveCountLbl.string = cc.Mgr.game.curBoshu + "/" + t.waveCount
            },
            RefreshBuyButtonAll: function() {
                var e = this.caculateBuyPlantPrice();
                e.needRefresh && this.RefreshBuyButton(e.interactable)
            },
            RefreshBuyButtonMergeAll: function() {
                var e = this.caculateBuyPlantPrice(!0);
                e.needRefresh && this.RefreshBuyButton(e.interactable)
            },
            buyButton: function() {
                if (cc.Mgr.game.needGuide)
                    cc.Mgr.AudioMgr.playSFX(s.AudioType.click);
                else if (this.showTipBuyTimesNode(!1),
                cc.Mgr.plantMgr.checkHasAnySpaceGird()) {
                    var e = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(i.PlantData, cc.Mgr.game.canBuyPlantId)
                      , t = cc.Mgr.game.plantBuyRecord[cc.Mgr.game.canBuyPlantId];
                    t = t || 0;
                    var n;
                    if (n = cc.Mgr.game.canBuyPlantId >= 1 && cc.Mgr.game.canBuyPlantId <= 20 ? e.price * BigInt(Math.floor(Math.pow(1.1, t))) : e.price * BigInt(Math.floor(Math.pow(1.2, t))),
                    cc.Mgr.game.money >= n)
                        cc.director.GlobalEvent.emit(a.BuyPlant, {
                            money: n
                        }),
                        this.RefreshBuyButtonAll();
                    else {
                        if (cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("NoCoins"), "coin", this.node),
                        cc.Mgr.game.plantMaxLv >= cc.Mgr.game.exchangeCoinConfig.openLevel && cc.Mgr.game.needShowExchangeCoinCount++,
                        cc.Mgr.game.needShowExchangeCoinCount >= 3 && cc.Mgr.game.plantMaxLv >= cc.Mgr.game.exchangeCoinConfig.openLevel) {
                            var c = cc.Mgr.UIMgr.gemNum();
                            if (cc.Mgr.game.currentExchangeCount < cc.Mgr.game.exchangeCoinConfig.maxExchangeNum && cc.Mgr.game.gems >= c)
                                cc.Mgr.UIMgr.openExchangeCoinUI(!0);
                            else if (cc.Mgr.game.coinBundleFlag) {
                                var o = cc.Mgr.UIMgr.getCoinNumber() * BigInt(30);
                                o = o < BigInt(1e6) ? BigInt(1e6) : o,
                                o *= BigInt(2),
                                cc.Mgr.UIMgr.openCoinBundle(o, !0)
                            }
                            cc.Mgr.game.needShowExchangeCoinCount = 0
                        }
                        this.buyBtnInteractable = !1,
                        this.spriteBtn.setMaterial(0, this.grayM)
                    }
                } else
                    cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("NoSpaceForPlant"), "", this.node)
            },
            RefreshBuyButton: function(e) {
                void 0 === e && (e = !1),
                this.buyBtnInteractable = e,
                e ? this.spriteBtn.setMaterial(0, this.nomarlM) : this.spriteBtn.setMaterial(0, this.grayM)
            },
            caculateCanBuyPlant: function() {
                if (cc.Mgr.game.plantMaxLv <= 5)
                    return cc.Mgr.game.plantMaxLv - 2 >= 1 ? cc.Mgr.game.plantMaxLv - 2 : 1;
                var e = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(i.ShopData, cc.Mgr.game.plantMaxLv)
                  , t = 0;
                for (var a in e) {
                    var n = e[a];
                    if (n == s.ShopItemType.Money || n == s.ShopItemType.Ads)
                        return cc.Mgr.game.plantMaxLv - t + 1;
                    t += 1
                }
                return cc.Mgr.game.plantMaxLv - 2
            },
            pickCanBuyPlantData: function(e) {
                void 0 === e && (e = !1);
                var t = this.caculateCanBuyPlant()
                  , a = [];
                if (cc.Mgr.game.plantMaxLv <= 5)
                    for (var n = 1; n <= t; n++)
                        a.push(n);
                else {
                    var c = 3;
                    for (n = 0; n <= 3; n++)
                        if (t - n == 1) {
                            c = n;
                            break
                        }
                    for (n = t - c; n <= t; n++)
                        a.push(n)
                }
                var s = {};
                s.plantId = a[0];
                var o = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(i.PlantData, a[0]);
                if (s.plantData = o,
                s.price = o.price,
                s.hasOne = !0,
                e) {
                    for (n = a.length - 1; n >= 0; n--)
                        if (cc.Mgr.game.canBuyPlantId == a[n]) {
                            var r = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(i.PlantData, a[n])
                              , l = cc.Mgr.game.plantBuyRecord[a[n]]
                              , g = cc.Mgr.game.caculatePlantPrice(a[n], l);
                            return s.plantId = cc.Mgr.game.canBuyPlantId,
                            s.price = g,
                            cc.Mgr.game.money < g && (s.hasOne = !1),
                            s.plantData = r,
                            s
                        }
                    for (n = a.length - 1; n >= 0; n--) {
                        if (r = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(i.PlantData, a[n]),
                        l = cc.Mgr.game.plantBuyRecord[a[n]],
                        g = cc.Mgr.game.caculatePlantPrice(a[n], l),
                        1 == a[n] || 0 == n)
                            return cc.Mgr.game.money > g ? (s.plantId = a[n],
                            s.price = g,
                            s.hasOne = !0,
                            s.plantData = r,
                            s) : (s.plantId = a[n],
                            s.price = g,
                            s.hasOne = !1,
                            s.plantData = r,
                            s);
                        if (cc.Mgr.game.money > g)
                            return s.plantId = a[n],
                            s.price = g,
                            s.hasOne = !0,
                            s.plantData = r,
                            s
                    }
                } else
                    for (n = a.length - 1; n >= 0; n--) {
                        if (r = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(i.PlantData, a[n]),
                        l = cc.Mgr.game.plantBuyRecord[a[n]],
                        g = cc.Mgr.game.caculatePlantPrice(a[n], l),
                        1 == a[n] || 0 == n)
                            return cc.Mgr.game.money > g ? (s.plantId = a[n],
                            s.price = g,
                            s.hasOne = !0,
                            s.plantData = r,
                            s) : (s.plantId = a[n],
                            s.price = g,
                            s.hasOne = !1,
                            s.plantData = r,
                            s);
                        if (cc.Mgr.game.money > g)
                            return s.plantId = a[n],
                            s.price = g,
                            s.hasOne = !0,
                            s.plantData = r,
                            s
                    }
                return s
            },
            caculateBuyPlantPrice: function(e) {
                void 0 === e && (e = !1);
                var t = this.pickCanBuyPlantData(e)
                  , i = t.plantId
                  , a = t.plantData;
                this.plantHead.setSprite(n.PlantHead, a.head);
                var c = cc.Mgr.Utils.getNumStr2(t.price);
                this.buyCostLbl.string = c;
                var s = {};
                return s.plantData = t.plantData,
                cc.Mgr.game.canBuyPlantId = i,
                s.needRefresh = !1,
                s.interactable = !0,
                this.buyBtnInteractable && !t.hasOne ? (s.needRefresh = !0,
                s.interactable = !1) : !this.buyBtnInteractable && t.hasOne && (s.needRefresh = !0,
                s.interactable = !0),
                s
            },
            openMissionUI: function() {
                var e = this;
                cc.Mgr.UIMgr.openMissionUI(),
                cc.Mgr.game.needGuide || (cc.Mgr.game.btnTipList[1] = 1,
                this.showTipList[1].active = !1,
                setTimeout(function() {
                    e.showBtnTip()
                }, 500),
                cc.Mgr.game.btnTipList.indexOf(0) < 0 && this.unschedule(this.loopBtnTip))
            },
            openStarterBundle: function() {
                this.showStarterBundleEffect && cc.Mgr.game.showStarterBundleEffectFlag && (this.showStarterBundleEffect = !1,
                this.starterBundleEffect.active = !1,
                this.starterBundleBg.active = !0,
                this.starterBundleNode.getComponent(cc.Button).target = this.starterBundleBg),
                cc.Mgr.UIMgr.openStarterBundle()
            },
            openSignUI: function() {
                var e = this;
                cc.Mgr.UIMgr.openSignUI(),
                cc.Mgr.game.needGuide || (cc.Mgr.game.btnTipList[0] = 1,
                this.showTipList[0].active = !1,
                setTimeout(function() {
                    e.showBtnTip()
                }, 500),
                cc.Mgr.game.btnTipList.indexOf(0) < 0 && this.unschedule(this.loopBtnTip))
            },
            openBuffUI: function() {
                cc.Mgr.UIMgr.openBuffUI()
            },
            openSetUI: function() {
                cc.Mgr.UIMgr.openSetting()
            },
            onClickRank: function() {
                cc.sys.os === cc.sys.OS_ANDROID ? jsb.reflection.callStaticMethod("org/cocos2dx/javascript/utils/Utils", "downloadRanking", "()V") : cc.Mgr.UIMgr.openRankingUI()
            },
            openTurnTableUI: function() {
                cc.Mgr.UIMgr.openTurnTableUI()
            },
            openShopUI: function() {
                cc.Mgr.UIMgr.openPaymentUI(!1)
            },
            updateBuffShow: function() {
                this.auto_on.active = cc.Mgr.game.autoTimer > 0,
                this.auto_off.active = cc.Mgr.game.autoTimer <= 0,
                this.rage_on.active = cc.Mgr.game.rageTimer > 0,
                this.rage_off.active = cc.Mgr.game.rageTimer <= 0,
                this.fire_on.active = cc.Mgr.game.fireTimer > 0,
                this.fire_off.active = cc.Mgr.game.fireTimer <= 0,
                this.ice_on.active = cc.Mgr.game.iceTimer > 0,
                this.ice_off.active = cc.Mgr.game.iceTimer <= 0,
                this.crit_on.active = cc.Mgr.game.critTimer > 0,
                this.crit_off.active = cc.Mgr.game.critTimer <= 0
            },
            updateBuffTimer: function() {
                cc.Mgr.game.autoTimer > 0 ? (this.autoTimerLabel.string = cc.Mgr.Utils.FormatNumToTime(cc.Mgr.game.autoTimer),
                this.autoOffNode.active = !1,
                this.autoOnNode.active = !0,
                this.autoTimerLabel.node.color = this.greenColor) : (this.autoTimerLabel.string = "00:00",
                this.autoOffNode.active = !0,
                this.autoOnNode.active = !1,
                this.autoTimerLabel.node.color = this.whiteColor),
                cc.Mgr.game.rageTimer > 0 ? (this.rageTimerLabel.string = cc.Mgr.Utils.FormatNumToTime(cc.Mgr.game.rageTimer),
                this.rageOffNode.active = !1,
                this.rageOnNode.active = !0,
                this.rageTimerLabel.node.color = this.greenColor) : (this.rageTimerLabel.string = "00:00",
                this.rageOffNode.active = !0,
                this.rageOnNode.active = !1,
                this.rageTimerLabel.node.color = this.whiteColor),
                cc.Mgr.game.fireTimer > 0 ? (this.fireTimerLabel.string = cc.Mgr.Utils.FormatNumToTime(cc.Mgr.game.fireTimer),
                this.fireOffNode.active = !1,
                this.fireOnNode.active = !0,
                this.fireTimerLabel.node.color = this.greenColor) : (this.fireTimerLabel.string = "00:00",
                this.fireOffNode.active = !0,
                this.fireOnNode.active = !1,
                this.fireTimerLabel.node.color = this.whiteColor),
                cc.Mgr.game.iceTimer > 0 ? (this.iceTimerLabel.string = cc.Mgr.Utils.FormatNumToTime(cc.Mgr.game.iceTimer),
                this.iceOffNode.active = !1,
                this.iceOnNode.active = !0,
                this.iceTimerLabel.node.color = this.greenColor) : (this.iceTimerLabel.string = "00:00",
                this.iceOffNode.active = !0,
                this.iceOnNode.active = !1,
                this.iceTimerLabel.node.color = this.whiteColor),
                cc.Mgr.game.critTimer > 0 ? (this.critTimerLabel.string = cc.Mgr.Utils.FormatNumToTime(cc.Mgr.game.critTimer),
                this.critOffNode.active = !1,
                this.critOnNode.active = !0,
                this.critTimerLabel.node.color = this.greenColor) : (this.critTimerLabel.string = "00:00",
                this.critOffNode.active = !0,
                this.critOnNode.active = !1,
                this.critTimerLabel.node.color = this.whiteColor)
            },
            checkAnyBuff: function() {
                return cc.Mgr.game.rageTimer > 0 || cc.Mgr.game.autoTimer > 0 || cc.Mgr.game.fireTimer > 0 || cc.Mgr.game.iceTimer > 0 || cc.Mgr.game.critTimer > 0
            },
            showBuffTip: function() {
                var e = this;
                cc.Mgr.game.level > 3 || this.checkAnyBuff() || cc.Mgr.plantMgr.otherTipCount > 0 || !0 !== this.buffTip.active && (cc.Mgr.plantMgr.otherTipCount++,
                this.buffTip.active = !0,
                this.buffTipTimeout = setTimeout(function() {
                    e.buffTip.active = !1,
                    cc.Mgr.plantMgr.otherTipCount--
                }, 5e3))
            },
            openBuff: function() {
                cc.Mgr.UIMgr.openBuffUI(),
                clearTimeout(this.buffTipTimeout),
                this.buffTip.active = !1,
                cc.Mgr.plantMgr.otherTipCount--
            },
            checkSignState: function() {
                cc.Mgr.Utils.getDays(cc.Mgr.Utils.GetSysTime()) - cc.Mgr.Utils.getDays(cc.Mgr.game.lastSignDate) < 1 ? this.signTip.active = !1 : this.signTip.active = !0
            },
            updateVIPIcon: function() {
                for (var e = !1, t = 0; t < 12; t++)
                    if (cc.Mgr.plantMgr.grids[t].type == s.GridState.lock) {
                        e = !0;
                        break
                    }
                this.vipNode.active = !e,
                cc.Mgr.game.isVIP ? (this.vipIcon.active = !0,
                this.vipEffect.active = !1) : (this.vipIcon.active = !1,
                this.vipEffect.active = !0,
                this.vipNode.getComponent(cc.Button).target = this.vipIcon)
            }
        });
        t.exports = r,
        cc._RF.pop()
    }
    , {
        AtlasType: "AtlasType",
        DataType: "DataType",
        Event: "Event",
        MyEnum: "MyEnum",
        MySprite: "MySprite",
        uav: "uav"
    }],
    InviteData: [function(e, t) {
        "use strict";
        cc._RF.push(t, "70fb2utf5pFXYNY0RBXagKj", "InviteData");
        var i = cc.Class({
            name: "InviteData",
            properties: {
                id: 1,
                invitePeople: 0,
                gem: 0
            }
        });
        t.exports = i,
        cc._RF.pop()
    }
    , {}],
    InviteMapMgr: [function(e, t) {
        "use strict";
        cc._RF.push(t, "d47cdT4kWBIIYTHDLKElrOS", "InviteMapMgr");
        var i = e("DB_invite")
          , a = e("InviteData")
          , n = cc.Class({
            extends: cc.Component,
            properties: {
                dataList: {
                    default: [],
                    type: [a]
                }
            },
            DecodeJson: function() {
                var e = JSON.parse(i.data);
                for (var t in e) {
                    var n = new a;
                    n.id = e[t][0],
                    n.invitePeople = e[t][1],
                    n.gem = e[t][2],
                    this.dataList[t] = n
                }
            },
            getDataByKey: function(e) {
                return this.dataList[e]
            }
        });
        t.exports = n,
        cc._RF.pop()
    }
    , {
        DB_invite: "DB_invite",
        InviteData: "InviteData"
    }],
    LanguageItem: [function(e, t) {
        "use strict";
        cc._RF.push(t, "ab130wLTxdDaYDsqXpiXCdW", "LanguageItem"),
        cc.Class({
            extends: cc.Component,
            properties: {
                nameLabel: cc.Label
            },
            start: function() {},
            getLanguageLabel: function(e) {
                switch (e) {
                case "English":
                    this.nameLabel.string = cc.Mgr.Utils.getTranslation("language-en");
                    break;
                case "Simplified Chinese":
                    this.nameLabel.string = cc.Mgr.Utils.getTranslation("language-cn");
                    break;
                case "Traditional Chinese":
                    this.nameLabel.string = cc.Mgr.Utils.getTranslation("language-tc");
                    break;
                case "Japanese":
                    this.nameLabel.string = cc.Mgr.Utils.getTranslation("language-jp");
                    break;
                case "Russian":
                    this.nameLabel.string = cc.Mgr.Utils.getTranslation("language-ru")
                }
            },
            setContent: function(e, t) {
                this.getLanguageLabel(e),
                this.selectName = e,
                this.parentCtrl = t
            },
            onClick: function() {
                this.parentCtrl.updateLanguage(this.selectName)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    LanguageSelector: [function(e, t) {
        "use strict";
        cc._RF.push(t, "050b2huWwtBfZaYz65iSOe5", "LanguageSelector"),
        cc.Class({
            extends: cc.Component,
            properties: {
                container: cc.Node,
                currentNameLabel: cc.Label,
                languageItem: cc.Prefab
            },
            start: function() {
                this.getLanguageLabel(),
                this.languageList = ["English", "Simplified Chinese", "Traditional Chinese", "Japanese", "Russian"];
                for (var e = 0; e < this.languageList.length; e++)
                    if (this.languageList[e] !== cc.Mgr.Config.language) {
                        var t = cc.instantiate(this.languageItem);
                        t.parent = this.container,
                        t.getComponent("LanguageItem").setContent(this.languageList[e], this)
                    }
                this.container.active = !1
            },
            getLanguageLabel: function() {
                switch (cc.Mgr.Config.language) {
                case "English":
                    this.currentNameLabel.string = cc.Mgr.Utils.getTranslation("language-en");
                    break;
                case "Simplified Chinese":
                    this.currentNameLabel.string = cc.Mgr.Utils.getTranslation("language-cn");
                    break;
                case "Traditional Chinese":
                    this.currentNameLabel.string = cc.Mgr.Utils.getTranslation("language-tc");
                    break;
                case "Japanese":
                    this.currentNameLabel.string = cc.Mgr.Utils.getTranslation("language-jp");
                    break;
                case "Russian":
                    this.currentNameLabel.string = cc.Mgr.Utils.getTranslation("language-ru")
                }
            },
            onClick: function() {
                this.container.active = !0
            },
            hideContainer: function() {
                this.container.active = !1
            },
            updateLanguage: function(e) {
                cc.Mgr.notification.clearNotifications(),
                this.currentNameLabel.string = e,
                cc.Mgr.game.setLanguageManually = e,
                cc.Mgr.UserDataMgr.SaveUserData(),
                this.hideContainer(),
                setTimeout(function() {
                    cc.Mgr.AudioMgr.stopAll(),
                    cc.Mgr.admob.hideBanner("all"),
                    cc.game.restart()
                }, 300)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    LevelData: [function(e, t) {
        "use strict";
        cc._RF.push(t, "25d1asmftRCPKX2JxuFi504", "LevelData");
        var i = cc.Class({
            name: "LevelData",
            properties: {
                level: 1,
                wave: 0,
                waveCount: 0,
                zombieID1: 0,
                zombieCount1: 0,
                zombieID2: 0,
                zombieCount2: 0
            }
        });
        t.exports = i,
        cc._RF.pop()
    }
    , {}],
    LevelMapMgr: [function(e, t) {
        "use strict";
        cc._RF.push(t, "4d560IPvYdOCYWNj7c9Kpad", "LevelMapMgr");
        var i = e("DB_level")
          , a = e("LevelData")
          , n = cc.Class({
            extends: cc.Component,
            properties: {
                dataList: {
                    default: [],
                    type: [a]
                }
            },
            DecodeJson: function() {
                var e = JSON.parse(i.data);
                for (var t in e)
                    if (null != e[t] && "undefined" != e[t]) {
                        var n = new a;
                        n.level = e[t][0],
                        n.wave = e[t][1],
                        n.waveCount = e[t][2],
                        n.zombieID1 = e[t][3],
                        n.zombieCount1 = e[t][4],
                        n.zombieID2 = e[t][5],
                        n.zombieCount2 = e[t][6],
                        this.dataList[t] = n
                    }
            },
            getDataByKey: function(e) {
                return this.dataList[e]
            }
        });
        t.exports = n,
        cc._RF.pop()
    }
    , {
        DB_level: "DB_level",
        LevelData: "LevelData"
    }],
    LimitClick: [function(e, t) {
        "use strict";
        cc._RF.push(t, "6ce7bccdcBMzr0bYa48AYZq", "LimitClick"),
        cc.Class({
            extends: cc.Component,
            properties: {
                _startTimer: 0,
                _allowClick: !0
            },
            onLoad: function() {
                this.time = 300
            },
            clickTime: function(e) {
                return null != e && null != e && (this.time = e),
                !1 !== this._allowClick && (this._startTimer = Date.now(),
                this._allowClick = !1,
                !0)
            },
            update: function() {
                Date.now() - this._startTimer >= this.time && (this._allowClick = !0)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    LvUpGemData: [function(e, t) {
        "use strict";
        cc._RF.push(t, "571185Rw9NGRrNhUzy68oDh", "LvUpGemData");
        var i = cc.Class({
            name: "LvUpGemData",
            properties: {
                level: 1,
                gem: 1
            }
        });
        t.exports = i,
        cc._RF.pop()
    }
    , {}],
    LvUpGemMapMgr: [function(e, t) {
        "use strict";
        cc._RF.push(t, "d1d42gSEgFOEqIDI4OwcpbC", "LvUpGemMapMgr");
        var i = e("DB_levelupGem")
          , a = e("LvUpGemData");
        cc.Class({
            extends: cc.Component,
            properties: {
                dataList: {
                    default: [],
                    type: [a]
                }
            },
            DecodeJson: function() {
                var e = JSON.parse(i.data);
                for (var t in e) {
                    var n = new a;
                    n.level = e[t][0],
                    n.gem = e[t][1],
                    this.dataList[t] = n
                }
            },
            getDataByKey: function(e) {
                return this.dataList[e]
            }
        }),
        cc._RF.pop()
    }
    , {
        DB_levelupGem: "DB_levelupGem",
        LvUpGemData: "LvUpGemData"
    }],
    MapDataMgr: [function(e, t) {
        "use strict";
        cc._RF.push(t, "4cf54GTOt5F3rbUgATuyqq9", "MapDataMgr");
        var i = e("DataType")
          , a = e("PlantMapMgr")
          , n = e("ZombieMapMgr")
          , c = e("LevelMapMgr")
          , s = e("AchieveMapMgr")
          , o = e("AirDropMapMgr")
          , r = e("InviteMapMgr")
          , l = e("TurnTableMapMgr")
          , g = e("ShopMapMgr")
          , h = e("SpinLvMapMgr")
          , d = e("LvUpGemMapMgr")
          , u = e("BuyButtonMapMgr")
          , p = e("DroneMapMgr")
          , m = e("TransMapMgr")
          , f = cc.Class({
            extends: cc.Component,
            properties: {
                goodsMap: null,
                decodeAll: 0
            },
            checkInitMapSuc: function() {
                this.decodeAll
            },
            initMaps: function() {
                cc.Mgr.Parse = !1,
                this.plantMap = new a,
                this.plantMap.DecodeJson(),
                this.zombieMap = new n,
                this.zombieMap.DecodeJson(),
                this.levelMap = new c,
                this.levelMap.DecodeJson(),
                this.achieveMap = new s,
                this.achieveMap.DecodeJson(),
                this.airdropMap = new o,
                this.airdropMap.DecodeJson(),
                this.inviteMap = new r,
                this.inviteMap.DecodeJson(),
                this.turnMap = new l,
                this.turnMap.DecodeJson(),
                this.shopMap = new g,
                this.shopMap.DecodeJson(),
                this.spinMap = new h,
                this.spinMap.DecodeJson(),
                this.lvupgemMap = new d,
                this.lvupgemMap.DecodeJson(),
                this.buttonMap = new u,
                this.buttonMap.DecodeJson(),
                this.droneMap = new p,
                this.droneMap.DecodeJson(),
                this.transMap = new m,
                this.transMap.DecodeJson()
            },
            getDataByDataTypeAndKey: function(e, t) {
                var a = null;
                switch (e) {
                case i.InviteData:
                    a = this.inviteMap.getDataByKey(t);
                    break;
                case i.AchievementData:
                    a = this.achieveMap.getDataByKey(t);
                    break;
                case i.AirDropData:
                    a = this.airdropMap.getDataByKey(t);
                    break;
                case i.BuyButtonData:
                    a = this.buttonMap.getDataByKey(t);
                    break;
                case i.DroneData:
                    a = this.droneMap.getDataByKey(t);
                    break;
                case i.LevelGemData:
                    a = this.lvupgemMap.getDataByKey(t);
                    break;
                case i.LevelData:
                    a = this.levelMap.getDataByKey(t);
                    break;
                case i.PlantData:
                    a = this.plantMap.getDataByKey(t);
                    break;
                case i.ZombieData:
                    a = this.zombieMap.getDataByKey(t);
                    break;
                case i.TurnTableData:
                    a = this.turnMap.getDataByKey(t);
                    break;
                case i.ShopData:
                    a = this.shopMap.getDataByKey(t);
                    break;
                case i.SpinLevelData:
                    a = this.spinMap.getDataByKey(t);
                    break;
                case i.Translation:
                    a = this.transMap.getDataByKey(t)
                }
                return a
            },
            getDataListByDataType: function(e) {
                var t = null;
                switch (e) {
                case i.InviteData:
                    t = this.inviteMap.dataList;
                    break;
                case i.AchievementData:
                    t = this.achieveMap.dataList;
                    break;
                case i.AirDropData:
                    t = this.airdropMap.dataList;
                    break;
                case i.BuyButtonData:
                    t = this.buttonMap.dataList;
                    break;
                case i.DroneData:
                    t = this.droneMap.dataList;
                    break;
                case i.LevelGemData:
                    t = this.lvupgemMap.dataList;
                    break;
                case i.LevelData:
                    t = this.levelMap.dataList;
                    break;
                case i.PlantData:
                    t = this.plantMap.dataList;
                    break;
                case i.ZombieData:
                    t = this.zombieMap.dataList;
                    break;
                case i.TurnTableData:
                    t = this.turnMap.dataList;
                    break;
                case i.ShopData:
                    t = this.shopMap.dataList;
                    break;
                case i.SpinLevelData:
                    t = this.spinMap.dataList;
                    break;
                case i.Translation:
                    t = this.transMap.dataList
                }
                return t
            }
        });
        t.exports = f,
        cc._RF.pop()
    }
    , {
        AchieveMapMgr: "AchieveMapMgr",
        AirDropMapMgr: "AirDropMapMgr",
        BuyButtonMapMgr: "BuyButtonMapMgr",
        DataType: "DataType",
        DroneMapMgr: "DroneMapMgr",
        InviteMapMgr: "InviteMapMgr",
        LevelMapMgr: "LevelMapMgr",
        LvUpGemMapMgr: "LvUpGemMapMgr",
        PlantMapMgr: "PlantMapMgr",
        ShopMapMgr: "ShopMapMgr",
        SpinLvMapMgr: "SpinLvMapMgr",
        TransMapMgr: "TransMapMgr",
        TurnTableMapMgr: "TurnTableMapMgr",
        ZombieMapMgr: "ZombieMapMgr"
    }],
    MaxLevel: [function(e, t) {
        "use strict";
        cc._RF.push(t, "45f54P5HHNH+KvPX7SfBVId", "MaxLevel"),
        cc.Class({
            extends: cc.Component,
            properties: {
                blurBg: cc.Node,
                content: cc.Node,
                db: dragonBones.ArmatureDisplay,
                btnLabel: cc.Label,
                tipLabel: cc.Label
            },
            start: function() {},
            showUI: function() {
                this.btnLabel.string = cc.Mgr.Utils.getTranslation("btn-ok"),
                this.tipLabel.string = cc.Mgr.Utils.getTranslation("beCleared-tip"),
                this.blurBg.opacity = 0,
                this.content.opacity = 0,
                this.content.setScale(.5),
                cc.tween(this.blurBg).to(.05, {
                    opacity: 255
                }).call().start(),
                cc.tween(this.content).to(.15, {
                    opacity: 255,
                    scale: 1
                }).start(),
                this.db.playAnimation("Congratsstar", 1)
            },
            onClickClose: function() {
                cc.Mgr.AudioMgr.playSFX("click");
                var e = this;
                cc.tween(this.blurBg).to(.15, {
                    opacity: 0
                }).start(),
                cc.tween(this.content).to(.15, {
                    opacity: 0,
                    scale: .5
                }).call(function() {
                    e.node.active = !1
                }).start(),
                cc.Mgr.UIMgr.reduceShowUICount("maxLevel")
            }
        }),
        cc._RF.pop()
    }
    , {}],
    MissionType: [function(e, t) {
        "use strict";
        cc._RF.push(t, "4e56cYefANMC4Hw3D/WIzMB", "MissionType");
        var i = cc.Enum({
            Login: 0,
            MergePlant: 1,
            DefenseSuc: 2,
            AdsShow: 3,
            InGameTime: 4
        });
        t.exports = i,
        cc._RF.pop()
    }
    , {}],
    MyEnum: [function(e, t) {
        "use strict";
        cc._RF.push(t, "997fa36ynpLP5/qt8XTSFdw", "MyEnum");
        var i = cc.Class({
            extends: cc.Component,
            statics: {
                PlantState: {
                    idle: 0,
                    cd: 1,
                    attacking: 2
                },
                GridState: {
                    none: 0,
                    plant: 1,
                    flowerPot: 2,
                    lock: 3,
                    vip: 4,
                    vipLock: 5
                },
                DragonType: {
                    plant: 1,
                    zombie: 2,
                    jinggai: 3
                },
                BulletType: {
                    Straight: 1,
                    Curve: 2
                },
                NodeGroup: {
                    Zombie: "zombie",
                    Bullet: "bullet",
                    UI: "ui"
                },
                BulletSkillType: {
                    Null: 0,
                    Slow: 1,
                    DouKill: 2,
                    Vertigo: 3
                },
                FlowerPotType: {
                    Drop: 0,
                    Drone: 1,
                    Buy: 2,
                    Shop: 3
                },
                AudioType: {
                    bgm: "bgm",
                    click: "click",
                    coin: "coin",
                    dog: "dog",
                    fail: "fail",
                    flower_pot_land: "flower-pot-land",
                    flower_pot_tap: "flower-pot-tap",
                    gem: "gem",
                    hit: "hit",
                    merge: "merge",
                    pig: "pig",
                    plane: "plane",
                    skill_crit: "skill-crit",
                    skill_freeze: "skill-freeze",
                    skill_slow: "skill-slow",
                    spin: "spin",
                    success1: "success1",
                    success2: "success2",
                    zombie_lady: "zombie-lady",
                    zombie_man: "zombie-man"
                },
                ShopItemType: {
                    Lock: "U",
                    Gem: "G",
                    Ads: "AD",
                    Money: "M",
                    Null: ""
                },
                GuideType: {
                    none: -1,
                    guide1: 0,
                    guide2: 1,
                    guide3: 2,
                    guide4: 3,
                    guide5: 4,
                    guide6: 5,
                    guide7: 6,
                    guide8: 7
                }
            }
        });
        t.exports = i,
        cc._RF.pop()
    }
    , {}],
    MySprite: [function(e, t) {
        "use strict";
        cc._RF.push(t, "fb117FyR/NJxb6webpK3JtQ", "MySprite");
        var i = cc.Class({
            extends: cc.Sprite,
            properties: {},
            setSprite: function(e, t) {
                this.atlas = cc.Mgr.AtlasMgr.getSpriteAtlas(e),
                this.spriteFrame = this.atlas.getSpriteFrame(t)
            }
        });
        t.exports = i,
        cc._RF.pop()
    }
    , {}],
    NoticeText: [function(e, t) {
        "use strict";
        cc._RF.push(t, "6e728mTT3BL/ZbAzEukPxcK", "NoticeText"),
        cc.director.NoticeText = {
            Trans_1: "\u4f60\u600e\u4e48\u73b0\u5728\u624d\u6765\uff1f\u6211\u8017\u5c3d\u4e86\u6574\u4e2a\u9752\u6625\u4e00\u76f4\u5728\u8fd9\u91cc\u7b49\u4f60\u3002"
        },
        cc._RF.pop()
    }
    , {}],
    Notification: [function(e, t) {
        "use strict";
        cc._RF.push(t, "bd7ebbMo7BILr1+AWak+fxq", "Notification"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {},
            start: function() {
                cc.Mgr.notification = this
            },
            init: function() {
                0 !== cc.Mgr.game.lastNotificationTimer && (this.isToday(cc.Mgr.game.lastNotificationTimer) || cc.Mgr.game.notificationIndex++),
                cc.Mgr.game.lastNotificationTimer = Date.now();
                for (var e = [1, 2, 3, 4, 5], t = [], i = 0; i < 7; i++) {
                    var a = {};
                    a.title = cc.Mgr.Utils.getTranslation("notification-title-" + (i + 1)),
                    a.content = cc.Mgr.Utils.getTranslation("notification-content-" + (i + 1)),
                    t.push(a)
                }
                if (!0 !== cc.Mgr.game.isFacebook) {
                    cc.Mgr.game.notificationIndex >= 7 && (cc.Mgr.game.notificationIndex = 0);
                    for (var n = cc.Mgr.game.notificationIndex, c = 0; c < e.length; c++)
                        this.sendNotification("" + c, t[n].title, t[n].content, 86400 * e[c] + 1200),
                        ++n >= 7 && (n = 0)
                }
            },
            sendNotification: function(e, t, i, a) {
                switch (cc.sys.os) {
                case cc.sys.OS_ANDROID:
                    jsb.reflection.callStaticMethod("org/cocos2dx/javascript/notification/Notification", "pushNotification", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", "" + e, t, t, i, "" + a);
                    break;
                case cc.sys.OS_IOS:
                    jsb.reflection.callStaticMethod("Notification", "pushNotification:title:content:interval:", e, t, i, a)
                }
            },
            clearNotifications: function() {
                cc.sys.os === cc.sys.OS_IOS ? jsb.reflection.callStaticMethod("Notification", "clearNotifications") : cc.sys.os === cc.sys.OS_ANDROID && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/notification/Notification", "clearNotifications", "()V")
            },
            isToday: function(e) {
                return (new Date).toDateString() === new Date(e).toDateString()
            }
        }),
        cc._RF.pop()
    }
    , {}],
    NumEffect: [function(e, t) {
        "use strict";
        cc._RF.push(t, "c702cSKBmVIbLe8hXIT1ay/", "NumEffect"),
        cc.Class({
            extends: cc.Component,
            properties: {
                numColNodeList: [cc.Node],
                numColPrefab: cc.Prefab,
                container: cc.Node,
                symbolNode: cc.Node,
                unitLabel: cc.Label,
                offsetY: 18,
                scaleNumer: 1.5
            },
            start: function() {
                this.currentNumber = ""
            },
            setNumber: function(e, t) {
                if (this.currentNumber !== e) {
                    this.currentNumber = e,
                    e = "" + e,
                    this.symbolNode.parent = null,
                    this.unitLabel.node.parent = null;
                    for (var i = 0; i < this.numColNodeList.length; i++)
                        this.numColNodeList[i].parent = null;
                    for (var a = 0, n = 0; n < e.length; n++) {
                        var c = e[n]
                          , s = Number(c);
                        if (isNaN(s))
                            "." === c ? this.symbolNode.parent = this.container : (this.unitLabel.string = c,
                            this.unitLabel.node.parent = this.container);
                        else {
                            a++;
                            var o = void 0;
                            n >= this.numColNodeList.length ? ((o = cc.instantiate(this.numColPrefab)).setPosition(0, this.offsetY),
                            o.parent = this.container,
                            o.getComponent("NumberCol").init(s, a),
                            this.numColNodeList.push(o)) : ((o = this.numColNodeList[n]).parent = this.container,
                            t ? o.getComponent("NumberCol").init(s, a) : o.getComponent("NumberCol").changeNum(s, a))
                        }
                    }
                    cc.tween(this.node).to(.2, {
                        scale: this.scaleNumer
                    }).to(.2, {
                        scale: 1
                    }).start()
                }
            }
        }),
        cc._RF.pop()
    }
    , {}],
    NumberCol: [function(e, t) {
        "use strict";
        cc._RF.push(t, "9f3215Yjr1M/bjS24jTsooT", "NumberCol"),
        cc.Class({
            extends: cc.Component,
            properties: {
                offsetY: 18,
                intervalY: 35,
                duration: .3,
                intervalTime: .05
            },
            onLoad: function() {},
            start: function() {},
            init: function(e) {
                this.node.y = e * this.intervalY + this.offsetY
            },
            changeNum: function(e, t) {
                var i = this;
                if (e == this.lastNum) {
                    var a = e > 4 ? 0 : 9;
                    this.node.y = a * this.intervalY + this.offsetY,
                    this.scheduleOnce(function() {
                        cc.tween(i.node).to(i.duration, {
                            position: cc.v2(0, e * i.intervalY + i.offsetY)
                        }).start()
                    }, t * i.intervalTime)
                } else
                    this.scheduleOnce(function() {
                        cc.tween(i.node).to(i.duration, {
                            position: cc.v2(0, e * i.intervalY + i.offsetY)
                        }).start()
                    }, t * i.intervalTime);
                this.lastNum = e
            }
        }),
        cc._RF.pop()
    }
    , {}],
    OfflineBundle: [function(e, t) {
        "use strict";
        cc._RF.push(t, "f59f3dCemFCaZ6HPxJFHXbn", "OfflineBundle"),
        cc.Class({
            extends: cc.Component,
            properties: {
                content: cc.Node,
                blurBg: cc.Node,
                btnLabel: cc.Label,
                priceSaleLabel: cc.Label,
                priceLabel: cc.Label,
                singlePriceLabel: cc.Label,
                saleNode: cc.Node,
                priceNode: cc.Node,
                desLabel: cc.Label,
                saleSprite: cc.Node,
                title: cc.Node,
                title_zh: cc.Node,
                title_ja: cc.Node,
                title_ru: cc.Node
            },
            onLoad: function() {
                this.limitClick = this.node.getComponent("LimitClick")
            },
            start: function() {
                this.btnLabel.string = cc.Mgr.Utils.getTranslation("btn-get"),
                this.desLabel.string = cc.Mgr.Utils.getTranslation("offlineBundle-tip"),
                this.title.active = !1,
                this.title_zh.active = !1,
                this.title_ja.active = !1,
                this.title_ru.active = !1,
                "Japanese" === cc.Mgr.Config.language ? this.title_ja.active = !0 : "Simplified Chinese" === cc.Mgr.Config.language || "Traditional Chinese" === cc.Mgr.Config.language ? this.title_zh.active = !0 : "Russian" === cc.Mgr.Config.language ? this.title_ru.active = !0 : this.title.active = !0
            },
            showUI: function(e) {
                cc.Mgr.game.localPriceList && cc.Mgr.game.localPriceList.length > 0 ? this.singlePriceLabel.string = cc.Mgr.game.localPriceList[10] : this.singlePriceLabel.string = "$" + cc.Mgr.payment.priceList[10],
                this.saleSprite.width = this.priceLabel.node.width,
                this.blurBg.opacity = 0,
                this.content.opacity = 0,
                this.content.setScale(.5),
                cc.tween(this.blurBg).to(.05, {
                    opacity: 255
                }).call().start(),
                cc.tween(this.content).to(.15, {
                    opacity: 255,
                    scale: 1
                }).start(),
                this.saleNode.active = e,
                this.priceNode.active = !e,
                cc.Mgr.admob.showBanner("offlineBunlde")
            },
            onClickClose: function() {
                cc.Mgr.AudioMgr.playSFX("click"),
                cc.Mgr.admob.hideBanner("offlineBunlde");
                var e = this;
                cc.tween(this.blurBg).to(.15, {
                    opacity: 0
                }).start(),
                cc.tween(this.content).to(.15, {
                    opacity: 0,
                    scale: .5
                }).call(function() {
                    e.node.active = !1
                }).start(),
                cc.Mgr.UIMgr.reduceShowUICount("offlineBundle")
            },
            onClickGet: function() {
                var e = this;
                cc.Mgr.payment.purchaseByIndex(10, function() {
                    cc.Mgr.game.offlineDouble = !0,
                    e.onClickClose()
                }, cc.Mgr.UIMgr.tipRoot)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    ParticleMgr: [function(e, t) {
        "use strict";
        cc._RF.push(t, "f06e8LLZ2pA1oa9LK9HtksI", "ParticleMgr");
        var i = cc.Class({
            extends: cc.Component,
            statics: {
                handles_: [],
                create: function(e) {
                    this.handles_.indexOf(e) > -1 || this.handles_.push(e)
                },
                playParticle: function(e) {
                    var t = this.handles_.indexOf(e);
                    t > -1 && (this.handles_[t].active = !0,
                    this.handles_[t].resetSystem())
                },
                stopParticle: function() {
                    var e = this.handles_.indexOf(particle);
                    e > -1 && (this.handles_[e].active = !1,
                    this.handles_[e].stopSystem())
                },
                deleteParticle: function(e) {
                    var t = this.handles_.indexOf(e);
                    t > -1 && this.handles_.splice(t, 1)
                }
            }
        });
        t.exports = i,
        cc._RF.pop()
    }
    , {}],
    PaymentUI: [function(e, t) {
        "use strict";
        cc._RF.push(t, "c351eLEuy5NcKxkj+TyHqCh", "PaymentUI"),
        cc.Class({
            extends: cc.Component,
            properties: {
                toggleGems: cc.Toggle,
                toggleShop: cc.Toggle,
                bottomBg: cc.Node,
                shopItemListView: cc.Node,
                shopView: cc.Node,
                paymentView: cc.Node,
                toggleShopLabel: cc.Label,
                toggleShopLabel_2: cc.Label,
                toggleGemLabel: cc.Label,
                toggleGemLabel_2: cc.Label,
                freeLabel: cc.Label,
                getLabel: cc.Label,
                adCountLabel: cc.Label,
                content: cc.Node,
                blurBg: cc.Node,
                vipDailyBonusBtn: cc.Button,
                spriteBtn: cc.Sprite,
                nomarlM: cc.Material,
                grayM: cc.Material,
                spriteCoin: cc.Sprite,
                priceLabelList: [cc.Label],
                topNode: cc.Node,
                topNode2: cc.Node,
                middleNode: cc.Node,
                middleNode2: cc.Node,
                bottomNode: cc.Node,
                bottomNode2: cc.Node,
                adCountLabelList: [cc.Label],
                spriteCoinList: [cc.Sprite],
                adFreeLabellist: [cc.Label],
                title: cc.Node,
                title_zh: cc.Node,
                title_ja: cc.Node,
                title_ru: cc.Node
            },
            onLoad: function() {
                this._scrollViewComponent = this.shopItemListView.getComponent("WaterfallFlow"),
                this.shopItemDataList = [];
                for (var e = 1; e <= cc.Mgr.Config.allPlantCount; e++)
                    this.shopItemDataList.push({
                        lv: e
                    });
                this.shopItemDataList.push({
                    lv: cc.Mgr.Config.allPlantCount + 1
                }),
                this._scrollViewComponent.setBaseInfo(this.shopItemDataList.length, 4, 12, 140, this.setShopList.bind(this)),
                this.limitClick = this.node.getComponent("LimitClick"),
                this.adGetGemsList = [5, 5, 5, 4, 4, 4, 3, 3, 3]
            },
            start: function() {
                this.toggleShopLabel.string = this.toggleShopLabel_2.string = cc.Mgr.Utils.getTranslation("payment-shop"),
                this.toggleGemLabel.string = this.toggleGemLabel_2.string = cc.Mgr.Utils.getTranslation("payment-gem"),
                this.freeLabel.string = cc.Mgr.Utils.getTranslation("btn-free"),
                this.getLabel.string = cc.Mgr.Utils.getTranslation("btn-claim");
                for (var e = 0; e < this.adFreeLabellist.length; e++)
                    this.adFreeLabellist[e].string = cc.Mgr.Utils.getTranslation("btn-free");
                this.title.active = !1,
                this.title_zh.active = !1,
                this.title_ja.active = !1,
                this.title_ru.active = !1,
                "Japanese" === cc.Mgr.Config.language ? this.title_ja.active = !0 : "Simplified Chinese" === cc.Mgr.Config.language || "Traditional Chinese" === cc.Mgr.Config.language ? this.title_zh.active = !0 : "Russian" === cc.Mgr.Config.language ? this.title_ru.active = !0 : this.title.active = !0
            },
            showShop: function() {
                this._scrollViewComponent.clear(),
                this._scrollViewComponent.scrollTo(cc.Mgr.game.plantMaxLv - 2),
                !1 === this.toggleShop.isChecked ? this.toggleShop.isChecked = !0 : this.onClickShop()
            },
            setShopList: function(e, t, i) {
                var a;
                if (null == t && (t = -1),
                this.shopItemDataList.length <= 4)
                    a = this.shopItemDataList;
                else {
                    var n = -1 == t ? 4 * e : 4 * t
                      , c = -1 == t ? n + 4 : n + 4 * i;
                    a = this.shopItemDataList.slice(n, c)
                }
                this._scrollViewComponent.updateShowList(a, "shopItem", this)
            },
            showPayment: function() {
                !1 === this.toggleGems.isChecked ? this.toggleGems.isChecked = !0 : this.onClickGems()
            },
            showUI: function(e) {
                if (cc.Mgr.admob.preloadRewarded(this),
                e ? this.showPayment() : this.showShop(),
                this.blurBg.opacity = 0,
                this.content.opacity = 0,
                this.content.setScale(.5),
                cc.tween(this.blurBg).to(.05, {
                    opacity: 255
                }).call().start(),
                cc.tween(this.content).to(.15, {
                    opacity: 255,
                    scale: 1
                }).start(),
                this.adCountLabel.string = cc.Mgr.game.paymentAdCount + "/5",
                cc.Mgr.game.isVIP && cc.Mgr.game.vipDailyBonus ? (this.spriteBtn.setMaterial(0, this.nomarlM),
                this.getLabel.string = cc.Mgr.Utils.getTranslation("btn-claim")) : cc.Mgr.game.isVIP && !cc.Mgr.game.vipDailyBonus ? (this.getLabel.string = cc.Mgr.Utils.getTranslation("btn-claimed"),
                this.spriteBtn.setMaterial(0, this.grayM)) : (this.spriteBtn.setMaterial(0, this.nomarlM),
                this.getLabel.string = cc.Mgr.Utils.getTranslation("btn-claim")),
                cc.Mgr.game.localPriceList && cc.Mgr.game.localPriceList.length > 0)
                    for (var t = 0; t < this.priceLabelList.length; t++)
                        this.priceLabelList[t].string = cc.Mgr.game.localPriceList[t];
                else
                    for (var i = 0; i < this.priceLabelList.length; i++)
                        this.priceLabelList[i].string = "$" + cc.Mgr.payment.priceList[i];
                if (this.checkAvailabelAds = cc.Mgr.admob.checkAvailableRewardedAd(),
                this.checkAvailabelAds ? this.spriteCoin.setMaterial(0, this.nomarlM) : this.spriteCoin.setMaterial(0, this.grayM),
                "JP" == cc.Mgr.game.version || !0 === cc.Mgr.Config.isChina) {
                    this.topNode.active = !1,
                    this.middleNode.active = !1,
                    this.topNode2.active = !0,
                    this.middleNode2.active = !0,
                    this.bottomNode.active = !1 === cc.Mgr.Config.isChina,
                    this.bottomNode2.active = !0 === cc.Mgr.Config.isChina,
                    this.checkAvailabelAds = cc.Mgr.admob.checkAvailableRewardedAd();
                    for (var a = 0; a < this.adCountLabelList.length; a++) {
                        var n;
                        n = a <= 2 ? "1" : a <= 5 ? "2" : "3",
                        this.adCountLabelList[a].string = cc.Mgr.game.paymentAdCountList[a] + "/" + n,
                        this.checkAvailabelAds && cc.Mgr.game.paymentAdCountList[a] > 0 ? this.spriteCoinList[a].setMaterial(0, this.nomarlM) : this.spriteCoinList[a].setMaterial(0, this.grayM)
                    }
                } else
                    this.topNode.active = !0,
                    this.middleNode.active = !0,
                    this.topNode2.active = !1,
                    this.middleNode2.active = !1,
                    this.bottomNode.active = !0,
                    this.bottomNode2.active = !1
            },
            updateItems: function() {
                this._scrollViewComponent.refreshAtCurPosition()
            },
            onClickShop: function() {
                this.toggleShop.node.zIndex = 3,
                this.bottomBg.zIndex = 2,
                this.toggleGems.node.zIndex = 1,
                this.shopView.active = !0,
                this.paymentView.active = !1,
                this._scrollViewComponent.clear(),
                this._scrollViewComponent.scrollTo(cc.Mgr.game.plantMaxLv - 2)
            },
            onClickGems: function() {
                this.toggleGems.node.zIndex = 3,
                this.bottomBg.zIndex = 2,
                this.toggleShop.node.zIndex = 1,
                this.shopView.active = !1,
                this.paymentView.active = !0
            },
            onClickClose: function() {
                cc.Mgr.AudioMgr.playSFX("click");
                var e = this;
                cc.tween(this.blurBg).to(.15, {
                    opacity: 0
                }).start(),
                cc.tween(this.content).to(.15, {
                    opacity: 0,
                    scale: .5
                }).call(function() {
                    e.node.active = !1
                }).start(),
                cc.Mgr.UIMgr.reduceShowUICount("payment")
            },
            onClickAd: function(e, t) {
                if (0 != this.limitClick.clickTime())
                    if (!1 !== this.checkAvailabelAds)
                        if (cc.Mgr.game.paymentAdCountList[t] > 0) {
                            var i = this;
                            cc.Mgr.admob.showRewardedVideoAd(function(e) {
                                var a;
                                e && (cc.Mgr.game.paymentAdCountList[t]--,
                                a = t <= 2 ? "1" : t <= 5 ? "2" : "3",
                                i.adCountLabelList[t].string = cc.Mgr.game.paymentAdCountList[t] + "/" + a,
                                cc.Mgr.game.paymentAdCountList[t] > 0 ? i.spriteCoinList[t].setMaterial(0, i.nomarlM) : i.spriteCoinList[t].setMaterial(0, i.grayM),
                                cc.Mgr.UIMgr.openAssetGetUI("gem", i.adGetGemsList[t], "payment_ads"))
                            }, this.node, "payment", this)
                        } else
                            this.spriteCoinList[t].setMaterial(0, this.grayM),
                            cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("payment-max-ad-count-tip"), "", this.node);
                    else
                        cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("ad-tip-3"), "", this.node)
            },
            onClickPurchase: function(e, t) {
                var i = this;
                0 != this.limitClick.clickTime() && cc.Mgr.payment.purchaseByIndex(t, function(e) {
                    var t = i;
                    cc.tween(i.blurBg).to(.15, {
                        opacity: 0
                    }).start(),
                    cc.tween(i.content).to(.15, {
                        opacity: 0,
                        scale: .5
                    }).call(function() {
                        t.node.active = !1,
                        cc.Mgr.UIMgr.openAssetGetUI("gem", e, "payment")
                    }).start()
                }, this.node)
            },
            onClickWatchAd: function() {
                if (0 != this.limitClick.clickTime())
                    if (!1 !== this.checkAvailabelAds)
                        if (cc.Mgr.game.paymentAdCount > 0) {
                            var e = this;
                            cc.Mgr.admob.showRewardedVideoAd(function(t) {
                                t && (cc.Mgr.game.paymentAdCount--,
                                e.adCountLabel.string = cc.Mgr.game.paymentAdCount + "/5",
                                cc.Mgr.UIMgr.openAssetGetUI("gem", 3, "payment_ads"),
                                e.checkAvailabelAds = cc.Mgr.admob.checkAvailableRewardedAd(),
                                e.checkAvailabelAds ? e.spriteCoin.setMaterial(0, e.nomarlM) : e.spriteCoin.setMaterial(0, e.grayM))
                            }, this.node, "payment", this)
                        } else
                            cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("payment-max-ad-count-tip"), "", this.node);
                    else
                        cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("ad-tip-3"), "", this.node)
            },
            updateAdsBtnState: function() {
                this.checkAvailabelAds = cc.Mgr.admob.checkAvailableRewardedAd(),
                this.checkAvailabelAds ? this.spriteCoin.setMaterial(0, this.nomarlM) : this.spriteCoin.setMaterial(0, this.grayM)
            },
            onClickVIP: function() {
                if (!cc.Mgr.game.isVIP) {
                    cc.Mgr.UIMgr.openVipUI();
                    var e = this;
                    return cc.tween(this.blurBg).to(.15, {
                        opacity: 0
                    }).start(),
                    void cc.tween(this.content).to(.15, {
                        opacity: 0,
                        scale: .5
                    }).call(function() {
                        e.node.active = !1
                    }).start()
                }
                !cc.Mgr.game.isVIP || cc.Mgr.game.vipDailyBonus ? (this.spriteBtn.setMaterial(0, this.grayM),
                this.getLabel.string = cc.Mgr.Utils.getTranslation("btn-claimed"),
                cc.Mgr.UIMgr.openAssetGetUI("gem", 30, "payment"),
                cc.Mgr.game.vipDailyBonus = !1) : cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("vip-tip"), "", this.node)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    Payment: [function(e, t) {
        "use strict";
        cc._RF.push(t, "4c4f36LLxVCurrK8mdoIMZq", "Payment");
        var i = e("js-base64").Base64;
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                cc.Mgr.payment = this,
                this.productsIDList = ["jp.co.digitalwill.naturestrikesback.gem_01", "jp.co.digitalwill.naturestrikesback.gem_02", "jp.co.digitalwill.naturestrikesback.gem_03", "jp.co.digitalwill.naturestrikesback.gem_04", "jp.co.digitalwill.naturestrikesback.gem_05", "jp.co.digitalwill.naturestrikesback.gem_06", "jp.co.digitalwill.naturestrikesback.vip_subscription_01", "jp.co.digitalwill.naturestrikesback.coin_01", "jp.co.digitalwill.naturestrikesback.special_grid", "jp.co.digitalwill.naturestrikesback.remove_ad", "jp.co.digitalwill.naturestrikesback.double_offline", "jp.co.digitalwill.naturestrikesback.coin_02", "jp.co.digitalwill.naturestrikesback.special_grid_02", "jp.co.digitalwill.naturestrikesback.remove_ad_02", "jp.co.digitalwill.naturestrikesback.vip_subscription_02"],
                this.getGems = [30, 180, 420, 960, 2550, 5700, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                this.priceList = [.99, 4.99, 9.99, 19.99, 49.99, 99.99, 7.99, 1.99, 9.99, 2.99, .99, .99, 5.99, .99, 3.99]
            },
            start: function() {
                cc.sys.os === cc.sys.OS_ANDROID && 0 == cc.Mgr.game.isFacebook && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/payment/Payment", "updatePurchase", "()V"),
                this.purchaseTimer = 0,
                this.verifyTimer = 0
            },
            setVersion: function(e) {
                cc.Mgr.game.version = e
            },
            getProductsInfo: function() {
                var e = this;
                if (!0 !== cc.Mgr.game.isFacebook && (null == cc.Mgr.game.localPriceList || 15 != cc.Mgr.game.localPriceList.length || null == cc.Mgr.game.localPriceValueList || 15 != cc.Mgr.game.localPriceValueList.length)) {
                    cc.Mgr.game.localPriceList = [],
                    cc.Mgr.game.localPriceValueList = [];
                    var t = this.productsIDList.join(",");
                    switch (cc.sys.os) {
                    case cc.sys.OS_ANDROID:
                        cc.Mgr.http.httpGets("https://www.google.com", function(i) {
                            1 != i && (jsb.reflection.callStaticMethod("org/cocos2dx/javascript/payment/Payment", "getProductsInfo", "(Ljava/lang/String;)V", t),
                            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/payment/Payment", "getSubscriptionInfo", "(Ljava/lang/String;)V", e.productsIDList[6]),
                            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/payment/Payment", "getSubscriptionInfo_sale", "(Ljava/lang/String;)V", e.productsIDList[14]))
                        });
                        break;
                    case cc.sys.OS_IOS:
                        jsb.reflection.callStaticMethod("PaymentController", "getProductsInfo:", t)
                    }
                }
            },
            dealWithProductsPrice: function(e) {
                for (var t = e.split("|"), i = 0; i < t.length; i++) {
                    var a = t[i].split(":")
                      , n = this.productsIDList.indexOf(a[0]);
                    cc.Mgr.game.localPriceList[n] = a[1]
                }
            },
            getProductsPrice: function(e) {
                for (var t = e.split("|"), i = 0; i < t.length; i++) {
                    var a = t[i].split(":")
                      , n = this.productsIDList.indexOf(a[0]);
                    cc.Mgr.game.localPriceValueList[n] = a[1]
                }
            },
            dealWithSubscriptionPrice: function(e, t) {
                cc.Mgr.game.localPriceList[6] = e,
                cc.Mgr.game.localPriceValueList[6] = t
            },
            dealWithSubscriptionPrice_sale: function(e, t) {
                cc.Mgr.game.localPriceList[14] = e,
                cc.Mgr.game.localPriceValueList[14] = t
            },
            purchaseByIndex: function(e, t, i) {
                this.tipParent = i,
                this.index = e;
                var a = this.productsIDList[e];
                this.callback = t,
                !0 !== cc.Mgr.game.isFacebook ? this.purchase(a) : this.callback(this.getGems[this.index])
            },
            prePurchase: function(e) {
                var t = this;
                this.purchaseTimer = Date.now(),
                this.canPurchase = !1,
                this.purchaseProductID = e,
                cc.Mgr.UIMgr.showLoading(!0),
                cc.Mgr.http.httpGets("https://www.google.com", function(e) {
                    1 != e && (t.canPurchase = !0)
                })
            },
            purchase: function(e) {
                this.reportEvent("purchase_start"),
                cc.Mgr.UIMgr.showLoading(!0),
                this.purchaseProductID = e,
                setTimeout(function() {
                    switch (cc.sys.os) {
                    case cc.sys.OS_ANDROID:
                        "jp.co.digitalwill.naturestrikesback.vip_subscription_01" === e || "jp.co.digitalwill.naturestrikesback.vip_subscription_02" === e ? jsb.reflection.callStaticMethod("org/cocos2dx/javascript/payment/Payment", "subscribe", "(Ljava/lang/String;)V", e) : jsb.reflection.callStaticMethod("org/cocos2dx/javascript/payment/Payment", "purchase", "(Ljava/lang/String;)V", e);
                        break;
                    case cc.sys.OS_IOS:
                        jsb.reflection.callStaticMethod("PaymentController", "purchaseProduct:", e)
                    }
                    cc.Mgr.game.pauseGame()
                }, 500)
            },
            purchaseComplete: function(e, t) {
                var a = this;
                if (cc.Mgr.game.resumeGame(),
                this.receipt = e,
                this.signature = t || "",
                e = i.decode(e),
                t && (t = i.decode(t)),
                e = encodeURIComponent(e),
                t && (t = encodeURIComponent(t)),
                null != this.callback) {
                    this.verifyTimer = Date.now();
                    var n = cc.sys.os === cc.sys.OS_IOS ? cc.Mgr.game.paymentVerificationURL + "/verify/ios" : cc.Mgr.game.paymentVerificationURL + "/verify/gp"
                      , c = cc.sys.os === cc.sys.OS_IOS ? "signedData=" + e + "&userId=" + cc.Mgr.game.UUID + "&deviceId=" + cc.Mgr.Utils.deviceId + "&region=" + cc.Mgr.game.paymentRegion : "purchaseData=" + e + "&signature=" + t + "&userId=" + cc.Mgr.game.UUID + "&deviceId=" + cc.Mgr.Utils.deviceId + "&region=" + cc.Mgr.game.paymentRegion;
                    cc.Mgr.http.httpPost(n, c, function(e, t) {
                        if (1 == e)
                            return a.callback = null,
                            void cc.Mgr.UIMgr.hideLoading();
                        a.purchaseCompleteHandle(t),
                        console.log("response:    " + t),
                        a.verifyTimer = 0
                    })
                }
            },
            purchaseCompleteHandle: function(e) {
                console.log(e);
                var t = JSON.parse(e);
                if (0 === t.status)
                    this.callback && (cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("payment-successful"), "", this.tipParent),
                    this.callback(this.getGems[this.index]),
                    cc.Mgr.game.isPayingUser = !0,
                    cc.Mgr.game.ltv += this.priceList[this.index],
                    this.reportEvent("purchase_success", ""),
                    cc.Mgr.Utils.trackRevenueEvent_adjust(this.priceList[this.index], this.productsIDList[this.index]));
                else {
                    cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("payment-failed"), "", this.tipParent),
                    cc.Mgr.TEA.collectEvent("verification_failed", {
                        elapsed: cc.Mgr.Utils.getDate9(!0),
                        product_name: this.purchaseProductID,
                        receipt: this.receipt,
                        signature: this.signature,
                        reason: t.status
                    });
                    var i = {};
                    i.elapsed = cc.Mgr.Utils.getDate9(!0),
                    i.product_name = this.purchaseProductID,
                    i.receipt = this.receipt,
                    i.signature = this.signature,
                    i.reason = t.status,
                    cc.Mgr.analytics.logEvent("verification_failed", JSON.stringify(i))
                }
                cc.Mgr.UIMgr.hideLoading(),
                this.callback = null
            },
            closeHandle: function() {
                cc.Mgr.game.resumeGame(),
                cc.Mgr.UIMgr.hideLoading(),
                cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("payment-failed"), "", this.tipParent)
            },
            reportEvent: function(e, t) {
                var i = e
                  , a = e;
                "purchase_verify_failed" === e && (i = "purchase_failed",
                a = "verify_failed"),
                "purchase_cancel" === e && (i = "purchase_failed",
                a = "purchase_cancel"),
                t && (a = t);
                var n = this.productsIDList[this.index]
                  , c = "jp.co.digitalwill.naturestrikesback.vip_subscription_01" === n || "jp.co.digitalwill.naturestrikesback.vip_subscription_02" === n ? 0 : this.priceList[this.index];
                "purchase_success" === e && cc.Mgr.TEA.collectEvent_revenue("af_purchase", {
                    elapsed: cc.Mgr.Utils.getDate9(!0),
                    af_content_id: n,
                    af_revenue: c,
                    af_currency: "USD"
                }),
                cc.Mgr.TEA.collectEvent(i, {
                    elapsed: cc.Mgr.Utils.getDate9(!0),
                    product_name: n,
                    price: c,
                    reason: a
                });
                var s = {};
                s.elapsed = cc.Mgr.Utils.getDate9(!0),
                s.product_name = n,
                s.price = c,
                s.reason = a,
                cc.Mgr.analytics.logEvent(i, JSON.stringify(s))
            },
            canclePayment: function() {
                cc.Mgr.game.resumeGame(),
                cc.Mgr.UIMgr.hideLoading()
            },
            updateVIPState: function(e) {
                if (cc.Mgr.game.vipExpire = parseInt(e),
                cc.Mgr.game.isVIP = cc.Mgr.game.vipExpire > Date.now(),
                cc.Mgr.game.vip = cc.Mgr.game.isVIP ? "active" : "inactive",
                !0 === cc.Mgr.game.isVIP && cc.Mgr.game.vipStartTimer > 0 && Date.now() - cc.Mgr.game.vipStartTimer > 6048e5) {
                    cc.Mgr.TEA.collectEvent("vip_subscription", {
                        elapsed: cc.Mgr.Utils.getDate9(!0),
                        state: "convert"
                    });
                    var t = {};
                    t.elapsed = cc.Mgr.Utils.getDate9(!0),
                    t.state = "convert",
                    cc.Mgr.analytics.logEvent("vip_subscription", JSON.stringify(t)),
                    cc.Mgr.game.openSpecialGridCount = 0
                } else if (!1 === cc.Mgr.game.isVIP && cc.Mgr.game.vipStartTimer > 0) {
                    cc.Mgr.TEA.collectEvent("vip_subscription", {
                        elapsed: cc.Mgr.Utils.getDate9(!0),
                        state: "unsubscribed"
                    });
                    var i = {};
                    i.elapsed = cc.Mgr.Utils.getDate9(!0),
                    i.state = "unsubscribed",
                    cc.Mgr.analytics.logEvent("vip_subscription", JSON.stringify(i)),
                    cc.Mgr.game.vipExpire = 0
                } else if (!0 === cc.Mgr.game.isVip && cc.Mgr.game.vipStartTimer > 0 && Date.now() - cc.Mgr.game.vipStartTimer <= 6048e5) {
                    cc.Mgr.TEA.collectEvent("vip_subscription", {
                        elapsed: cc.Mgr.Utils.getDate9(!0),
                        state: "subscribed"
                    });
                    var a = {};
                    a.elapsed = cc.Mgr.Utils.getDate9(!0),
                    a.state = "subscribed",
                    cc.Mgr.analytics.logEvent("vip_subscription", JSON.stringify(a))
                }
            },
            update: function() {
                if (this.verifyTimer > 0 && this.verifyTimer > 0 && Date.now() - this.verifyTimer > 2e4 && (this.verifyTimer = 0,
                this.callback && (cc.Mgr.UIMgr.hideLoading(),
                cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("payment-successful"), "", this.tipParent),
                this.callback(this.getGems[this.index]),
                cc.Mgr.game.isPayingUser = !0,
                cc.Mgr.game.ltv += this.priceList[this.index],
                this.reportEvent("purchase_success", "verification_timeout"),
                cc.Mgr.Utils.trackRevenueEvent_adjust(this.priceList[this.index], this.productsIDList[this.index]),
                this.callback = null)),
                !(this.purchaseTimer <= 0) && (1 == this.canPurchase && (this.purchaseTimer = 0,
                this.purchase(this.purchaseProductID)),
                this.purchaseTimer > 0 && Date.now() - this.purchaseTimer > 5e3)) {
                    this.purchaseTimer = 0,
                    this.canPurchase = !1,
                    cc.Mgr.UIMgr.hideLoading(),
                    cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("bad-connection"), "", this.tipParent),
                    cc.Mgr.TEA.collectEvent("purchase_failed", {
                        elapsed: cc.Mgr.Utils.getDate9(!0),
                        product_name: this.purchaseProductID,
                        reason: "network_connection_unstable"
                    });
                    var e = {};
                    e.elapsed = cc.Mgr.Utils.getDate9(!0),
                    e.product_name = this.purchaseProductID,
                    e.reason = "network_connection_unstable",
                    cc.Mgr.analytics.logEvent("purchase_failed", JSON.stringify(e))
                }
            }
        }),
        cc._RF.pop()
    }
    , {
        "js-base64": 1
    }],
    PlantData: [function(e, t) {
        "use strict";
        cc._RF.push(t, "ad2c8o+O7RKoKfbH/FLJ4Up", "PlantData");
        var i = cc.Class({
            name: "PlantData",
            properties: {
                level: 1,
                cd: 1,
                power: 0,
                skill: "",
                offline: 0,
                price: 0,
                gem: 0,
                prefab: "",
                shootPos: {
                    default: [],
                    type: [cc.v2]
                },
                steakColor: "",
                head: "",
                sNeedMask: !1,
                isNeedTrail: !1,
                bulletHeight: 0,
                bulletNearLeftDis: 0
            }
        });
        t.exports = i,
        cc._RF.pop()
    }
    , {}],
    PlantMapMgr: [function(e, t) {
        "use strict";
        cc._RF.push(t, "27a04/1jZVBJqiEkTfllLyt", "PlantMapMgr");
        var i = e("DB_plant")
          , a = e("PlantData")
          , n = cc.Class({
            extends: cc.Component,
            properties: {
                dataList: {
                    default: [],
                    type: [a]
                }
            },
            DecodeJson: function() {
                var e = JSON.parse(i.data);
                for (var t in e) {
                    var n = new a;
                    n.level = e[t][0],
                    n.cd = e[t][1],
                    n.power = BigInt(e[t][2]),
                    n.skill = e[t][3],
                    n.offline = e[t][4],
                    n.price = BigInt(e[t][5]),
                    n.gem = e[t][6],
                    n.prefab = e[t][7];
                    var c = e[t][8].split(",");
                    2 == c.length ? n.shootPos[0] = cc.v2(parseInt(c[0]), parseInt(c[1])) : 4 == c.length ? (n.shootPos[0] = cc.v2(parseInt(c[0]), parseInt(c[1])),
                    n.shootPos[1] = cc.v2(parseInt(c[2]), parseInt(c[3]))) : 6 == c.length ? (n.shootPos[0] = cc.v2(parseInt(c[0]), parseInt(c[1])),
                    n.shootPos[1] = cc.v2(parseInt(c[2]), parseInt(c[3])),
                    n.shootPos[2] = cc.v2(parseInt(c[4]), parseInt(c[5]))) : 8 == c.length ? (n.shootPos[0] = cc.v2(parseInt(c[0]), parseInt(c[1])),
                    n.shootPos[1] = cc.v2(parseInt(c[2]), parseInt(c[3])),
                    n.shootPos[2] = cc.v2(parseInt(c[4]), parseInt(c[5])),
                    n.shootPos[3] = cc.v2(parseInt(c[6]), parseInt(c[7]))) : 10 == c.length && (n.shootPos[0] = cc.v2(parseInt(c[0]), parseInt(c[1])),
                    n.shootPos[1] = cc.v2(parseInt(c[2]), parseInt(c[3])),
                    n.shootPos[2] = cc.v2(parseInt(c[4]), parseInt(c[5])),
                    n.shootPos[3] = cc.v2(parseInt(c[6]), parseInt(c[7])),
                    n.shootPos[3] = cc.v2(parseInt(c[8]), parseInt(c[9]))),
                    n.steakColor = e[t][9],
                    n.head = e[t][10],
                    n.isNeedMask = e[t][11],
                    n.isNeedTrail = e[t][12],
                    n.bulletHeight = e[t][13],
                    n.bulletNearLeftDis = e[t][14],
                    n.bulletType = e[t][15],
                    n.zoom = e[t][16],
                    this.dataList[t] = n
                }
            },
            getDataByKey: function(e) {
                return this.dataList[e]
            }
        });
        t.exports = n,
        cc._RF.pop()
    }
    , {
        DB_plant: "DB_plant",
        PlantData: "PlantData"
    }],
    PlantMergeGuide: [function(e, t) {
        "use strict";
        cc._RF.push(t, "cdff6UHrAFIUZmUjZQtWBGJ", "PlantMergeGuide"),
        cc.Class({
            extends: cc.Component,
            properties: {
                circle: cc.Sprite,
                finger: cc.Sprite
            },
            startMove: function(e, t) {
                this.move(e, t)
            },
            stopMove: function() {
                null != this.fingerTween && this.fingerTween.stop(),
                null != this.circleTween && this.circleTween.stop()
            },
            move: function(e, t) {
                var i = this;
                this.finger.node.position = e,
                this.finger.node.opacity = 255,
                this.circle.node.position = e,
                this.circle.node.opacity = 255,
                this.circle.node.scale = 1,
                this.fingerTween = cc.tween(this.finger.node).to(1, {
                    position: t
                }).to(.3, {
                    opacity: 0
                }).call(function() {
                    i.move(e, t)
                }),
                this.fingerTween.start(),
                this.circleTween = cc.tween(this.circle.node).to(.5, {
                    scale: 2,
                    opacity: 0
                }),
                this.circleTween.start()
            },
            start: function() {}
        }),
        cc._RF.pop()
    }
    , {}],
    RankingItem: [function(e, t) {
        "use strict";
        cc._RF.push(t, "47a0fdishVEV5K2tJnFNkST", "RankingItem");
        var i = e("MySprite")
          , a = e("DataType")
          , n = e("AtlasType");
        cc.Class({
            extends: cc.Component,
            properties: {
                rankingLabel: cc.Label,
                rankingImg_1: cc.Node,
                rankingImg_2: cc.Node,
                rankingImg_3: cc.Node,
                playerName: cc.Node,
                plantLevel: cc.Label,
                plantPhoto: i,
                isSelfNode: cc.Node
            },
            start: function() {},
            setParent: function(e) {
                this.Parent = e
            },
            setContent: function(e) {
                switch (e.ranking) {
                case 1:
                    this.rankingLabel.node.active = !1,
                    this.rankingImg_1.active = !0,
                    this.rankingImg_2.active = !1,
                    this.rankingImg_3.active = !1;
                    break;
                case 2:
                    this.rankingLabel.node.active = !1,
                    this.rankingImg_1.active = !1,
                    this.rankingImg_2.active = !0,
                    this.rankingImg_3.active = !1;
                    break;
                case 3:
                    this.rankingLabel.node.active = !1,
                    this.rankingImg_1.active = !1,
                    this.rankingImg_2.active = !1,
                    this.rankingImg_3.active = !0;
                    break;
                default:
                    this.rankingLabel.node.active = !0,
                    this.rankingImg_1.active = !1,
                    this.rankingImg_2.active = !1,
                    this.rankingImg_3.active = !1,
                    this.rankingLabel.string = e.ranking
                }
                this.playerName.getComponent("ScrollLabel").setLabel(e.playerName),
                this.plantLevel.string = "lv." + e.plantLevel;
                var t = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(a.PlantData, e.plantLevel.toString());
                this.plantPhoto.setSprite(n.PlantHead, t.head),
                this.isSelfNode.active = "YES" === e.isSelf
            }
        }),
        cc._RF.pop()
    }
    , {
        AtlasType: "AtlasType",
        DataType: "DataType",
        MySprite: "MySprite"
    }],
    RankingUI: [function(e, t) {
        "use strict";
        cc._RF.push(t, "374038PtZhFmrPZHJNBl45z", "RankingUI"),
        cc.Class({
            extends: cc.Component,
            properties: {
                content: cc.Node,
                blurBg: cc.Node,
                title: cc.Node,
                title_zh: cc.Node,
                title_ja: cc.Node,
                title_ru: cc.Node,
                rankItemListView: cc.Node,
                rankLabel: cc.Label,
                iconLabel: cc.Label,
                nameLabel: cc.Label,
                topLabel: cc.Label
            },
            onLoad: function() {
                this._scrollViewComponent = this.rankItemListView.getComponent("WaterfallFlow"),
                this.rankingData = cc.Mgr.Utils.rankingData
            },
            start: function() {
                this.rankLabel.string = cc.Mgr.Utils.getTranslation("rank-ranking"),
                this.iconLabel.string = cc.Mgr.Utils.getTranslation("rank-icon"),
                this.nameLabel.string = cc.Mgr.Utils.getTranslation("rank-name"),
                this.topLabel.string = cc.Mgr.Utils.getTranslation("rank-top"),
                this.title.active = !1,
                this.title_zh.active = !1,
                this.title_ja.active = !1,
                this.title_ru.active = !1,
                "Japanese" === cc.Mgr.Config.language ? this.title_ja.active = !0 : "Simplified Chinese" === cc.Mgr.Config.language || "Traditional Chinese" === cc.Mgr.Config.language ? this.title_zh.active = !0 : "Russian" === cc.Mgr.Config.language ? this.title_ru.active = !0 : this.title.active = !0
            },
            showUI: function() {
                this.blurBg.opacity = 0,
                this.content.opacity = 0,
                this.content.setScale(.5),
                cc.tween(this.blurBg).to(.05, {
                    opacity: 255
                }).call().start(),
                cc.tween(this.content).to(.15, {
                    opacity: 255,
                    scale: 1
                }).start(),
                "Japanese" === cc.Mgr.Config.language ? this.rankLabel.fontSize = this.iconLabel.fontSize = this.nameLabel.fontSize = this.topLabel.fontSize = 16 : "Russian" === cc.Mgr.Config.language && (this.rankLabel.fontSize = this.iconLabel.fontSize = this.nameLabel.fontSize = this.topLabel.fontSize = 13),
                this.rankingData = cc.Mgr.Utils.rankingData,
                this.rankingData && this._scrollViewComponent.setBaseInfo(this.rankingData.length, 5, 15, 85, this.setRankList.bind(this)),
                this._scrollViewComponent.clear(),
                this._scrollViewComponent.scrollTo(0)
            },
            setRankList: function(e, t, i) {
                var a;
                if (null == t && (t = -1),
                this.rankingData.length <= 5)
                    a = this.rankingData;
                else {
                    var n = -1 == t ? 5 * e : 5 * t
                      , c = -1 == t ? n + 5 : n + 5 * i;
                    a = this.rankingData.slice(n, c)
                }
                this._scrollViewComponent.updateShowList(a, "RankingItem", this)
            },
            closeUI: function() {
                cc.Mgr.AudioMgr.playSFX("click");
                var e = this;
                cc.tween(this.blurBg).to(.15, {
                    opacity: 0
                }).start(),
                cc.tween(this.content).to(.15, {
                    opacity: 0,
                    scale: .5
                }).call(function() {
                    e.node.active = !1
                }).start(),
                cc.Mgr.UIMgr.reduceShowUICount("ranking")
            }
        }),
        cc._RF.pop()
    }
    , {}],
    RemoveAdBundle: [function(e, t) {
        "use strict";
        cc._RF.push(t, "b79ceUFSsFFtaTD7X7hKzTv", "RemoveAdBundle"),
        cc.Class({
            extends: cc.Component,
            properties: {
                content: cc.Node,
                blurBg: cc.Node,
                btnLabel: cc.Label,
                priceSaleLabel: cc.Label,
                priceLabel: cc.Label,
                singlePriceLabel: cc.Label,
                saleNode: cc.Node,
                priceNode: cc.Node,
                desLabel: cc.Label,
                saleSprite: cc.Node,
                saleSprite2: cc.Node,
                timeNode: cc.Node,
                timeLabel: cc.Label,
                timeTip: cc.Label,
                title: cc.Node,
                title_zh: cc.Node,
                title_ja: cc.Node,
                title_ru: cc.Node
            },
            onLoad: function() {
                this.limitClick = this.node.getComponent("LimitClick")
            },
            start: function() {
                this.btnLabel.string = cc.Mgr.Utils.getTranslation("btn-get"),
                this.timeTip.string = cc.Mgr.Utils.getTranslation("bundle-time-tip"),
                this.title.active = !1,
                this.title_zh.active = !1,
                this.title_ja.active = !1,
                this.title_ru.active = !1,
                "Japanese" === cc.Mgr.Config.language ? this.title_ja.active = !0 : "Simplified Chinese" === cc.Mgr.Config.language || "Traditional Chinese" === cc.Mgr.Config.language ? this.title_zh.active = !0 : "Russian" === cc.Mgr.Config.language ? this.title_ru.active = !0 : this.title.active = !0
            },
            showUI: function() {
                cc.Mgr.game.localPriceList && cc.Mgr.game.localPriceList.length > 0 ? (this.priceLabel.string = cc.Mgr.game.localPriceList[9],
                this.priceSaleLabel.string = cc.Mgr.game.localPriceList[13],
                this.singlePriceLabel.string = cc.Mgr.game.localPriceList[9]) : (this.priceLabel.string = "$" + cc.Mgr.payment.priceList[9],
                this.priceSaleLabel.string = "$" + cc.Mgr.payment.priceList[13],
                this.singlePriceLabel.string = "$" + cc.Mgr.payment.priceList[9]),
                this.saleSprite.width = this.saleSprite2.width = 16 * this.priceLabel.string.length,
                this.blurBg.opacity = 0,
                this.content.opacity = 0,
                this.content.setScale(.5),
                cc.tween(this.blurBg).to(.05, {
                    opacity: 255
                }).call().start(),
                cc.tween(this.content).to(.15, {
                    opacity: 255,
                    scale: 1
                }).start(),
                this.refreshUI(),
                cc.Mgr.admob.showBanner("removeAdBunlde"),
                this.startTimeCount()
            },
            refreshUI: function() {
                this.isSale = 0 !== cc.Mgr.game.removeAdStartTimer && Date.now() - cc.Mgr.game.removeAdStartTimer < 864e5,
                this.saleNode.active = this.isSale,
                this.priceNode.active = !this.isSale,
                this.timeNode.active = this.isSale,
                this.isSale ? this.desLabel.string = cc.Mgr.Utils.getTranslation("removeAdBundle-tip2") : this.desLabel.string = cc.Mgr.Utils.getTranslation("removeAdBundle-tip")
            },
            startTimeCount: function() {
                if (this.unschedule(this.countTime),
                !1 !== this.isSale && (this.seconds = Math.floor((cc.Mgr.game.removeAdStartTimer + 864e5 - Date.now()) / 1e3),
                this.seconds > 0)) {
                    this.timeNode.active = !0;
                    var e = cc.Mgr.Utils.FormatNumToTime(this.seconds);
                    this.timeLabel.string = e,
                    this.schedule(this.countTime, 1)
                }
            },
            countTime: function() {
                if (this.seconds -= 1,
                this.seconds < 0)
                    return this.unschedule(this.countTime),
                    void this.refreshUI();
                var e = cc.Mgr.Utils.FormatNumToTime(this.seconds);
                this.timeLabel.string = e
            },
            onClickClose: function() {
                cc.Mgr.AudioMgr.playSFX("click"),
                cc.Mgr.admob.hideBanner("removeAdBunlde");
                var e = this;
                cc.tween(this.blurBg).to(.15, {
                    opacity: 0
                }).start(),
                cc.tween(this.content).to(.15, {
                    opacity: 0,
                    scale: .5
                }).call(function() {
                    e.node.active = !1,
                    cc.Mgr.UIMgr.starterBundleNode && cc.Mgr.UIMgr.starterBundleNode.active && cc.Mgr.UIMgr.starterBundleNode.getComponent("StarterBundle").refreshUI()
                }).start(),
                cc.Mgr.UIMgr.reduceShowUICount("removeAdBundle")
            },
            onClickGet: function() {
                var e = this;
                if (0 != this.limitClick.clickTime()) {
                    var t = this.isSale ? 13 : 9;
                    cc.Mgr.payment.purchaseByIndex(t, function() {
                        cc.Mgr.game.removeAd = !0,
                        cc.Mgr.admob.hideBanner("all"),
                        e.onClickClose(),
                        cc.Mgr.game.removeAdStartTimer = 0,
                        e.refreshUI()
                    }, cc.Mgr.UIMgr.tipRoot)
                }
            }
        }),
        cc._RF.pop()
    }
    , {}],
    SButton: [function(e, t) {
        "use strict";
        cc._RF.push(t, "d1280/UdJ5LGbvbtRXd3/54", "SButton");
        var i = cc.Class({
            extends: cc.Button,
            properties: {},
            start: function() {
                this.node.on(cc.Node.EventType.TOUCH_START, function() {
                    this.node.runAction(cc.scaleTo(.1, 1.2))
                }, this),
                this.node.on(cc.Node.EventType.TOUCH_END, function() {
                    this.node.runAction(cc.scaleTo(.1, 1))
                }, this),
                this.node.on(cc.Node.EventType.TOUCH_CANCEL, function() {
                    this.node.runAction(cc.scaleTo(.1, 1))
                }, this)
            }
        });
        t.exports = i,
        cc._RF.pop()
    }
    , {}],
    ScrollLabel: [function(e, t) {
        "use strict";
        cc._RF.push(t, "071dehrdAFJ7ZV3XhnslGjy", "ScrollLabel"),
        cc.Class({
            extends: cc.Component,
            properties: {
                label: cc.Label
            },
            onLoad: function() {
                this.label.node.x = -1 * this.node.width / 2,
                this.isInit = !1
            },
            start: function() {},
            setLabel: function(e) {
                var t = this;
                this.label.string = e,
                this.label.node.x = -1 * this.node.width / 2,
                this.isInit = !1,
                this.minPosX = -1 * this.node.width / 2,
                this.isRight = !0,
                setTimeout(function() {
                    t.intervalTimer = Date.now(),
                    t.currentTimer = Date.now(),
                    t.maxPosX = -1 * t.node.width / 2 - (t.label.node.width - t.node.width),
                    t.isInit = !0
                }, 1e3)
            },
            update: function() {
                if (0 != this.isInit && !(this.label.node.width <= this.node.width)) {
                    if (this.intervalTimer > 0) {
                        if (!(Date.now() - this.intervalTimer >= 3e3))
                            return;
                        this.intervalTimer = 0
                    }
                    Date.now() - this.currentTimer >= 100 && (this.currentTimer = Date.now(),
                    this.isRight ? (this.label.node.x -= 2,
                    this.label.node.x <= this.maxPosX && (this.label.node.x = this.maxPosX,
                    this.intervalTimer = Date.now(),
                    this.isRight = !1)) : (this.label.node.x += 2,
                    this.label.node.x >= this.minPosX && (this.label.node.x = this.minPosX,
                    this.intervalTimer = Date.now(),
                    this.isRight = !0)))
                }
            }
        }),
        cc._RF.pop()
    }
    , {}],
    ShopData: [function(e, t) {
        "use strict";
        cc._RF.push(t, "9b01bjGPhpLoKlNNRFgM+s1", "ShopData");
        var i = cc.Class({
            name: "ShopData",
            properties: {
                level: 1,
                MAX: "",
                MAX_1: "",
                MAX_2: "",
                MAX_3: "",
                MAX_4: "",
                MAX_5: "",
                MAX_6: "",
                MAX_7: "",
                MAX_8: ""
            }
        });
        t.exports = i,
        cc._RF.pop()
    }
    , {}],
    ShopMapMgr: [function(e, t) {
        "use strict";
        cc._RF.push(t, "4bce0Hptr1HUJByRULsz4t9", "ShopMapMgr");
        var i = e("ShopData")
          , a = e("DB_shopSort")
          , n = cc.Class({
            extends: cc.Component,
            properties: {
                dataList: {
                    default: [],
                    type: [i]
                }
            },
            DecodeJson: function() {
                var e = JSON.parse(a.data);
                for (var t in e) {
                    var n = new i;
                    n.level = e[t][0],
                    n.MAX = e[t][1],
                    n.MAX_1 = e[t][2],
                    n.MAX_2 = e[t][3],
                    n.MAX_3 = e[t][4],
                    n.MAX_4 = e[t][5],
                    n.MAX_5 = e[t][6],
                    n.MAX_6 = e[t][7],
                    n.MAX_7 = e[t][8],
                    n.MAX_8 = e[t][9],
                    this.dataList[t] = n
                }
            },
            getDataByKey: function(e) {
                return this.dataList[e]
            }
        });
        t.exports = n,
        cc._RF.pop()
    }
    , {
        DB_shopSort: "DB_shopSort",
        ShopData: "ShopData"
    }],
    SpecialGridBundle: [function(e, t) {
        "use strict";
        cc._RF.push(t, "c67e1/8wFlB0qVZorv8ABqJ", "SpecialGridBundle"),
        cc.Class({
            extends: cc.Component,
            properties: {
                content: cc.Node,
                blurBg: cc.Node,
                btnLabel: cc.Label,
                btnLabel2: cc.Label,
                priceSaleLabel: cc.Label,
                priceLabel: cc.Label,
                singlePriceLabel: cc.Label,
                saleNode: cc.Node,
                priceNode: cc.Node,
                desLabel: cc.Label,
                saleSprite: cc.Node,
                saleSprite2: cc.Node,
                timeNode: cc.Node,
                timeLabel: cc.Label,
                timeTip: cc.Label,
                gemNode: cc.Node,
                getBtn: cc.Node,
                getByGemsBtn: cc.Node,
                title: cc.Node,
                title_zh: cc.Node,
                title_ja: cc.Node,
                title_ru: cc.Node
            },
            onLoad: function() {
                this.limitClick = this.node.getComponent("LimitClick")
            },
            start: function() {
                this.btnLabel.string = cc.Mgr.Utils.getTranslation("btn-get"),
                this.btnLabel2.string = cc.Mgr.Utils.getTranslation("btn-get"),
                this.timeTip.string = cc.Mgr.Utils.getTranslation("bundle-time-tip"),
                this.title.active = !1,
                this.title_zh.active = !1,
                this.title_ja.active = !1,
                this.title_ru.active = !1,
                "Japanese" === cc.Mgr.Config.language ? this.title_ja.active = !0 : "Simplified Chinese" === cc.Mgr.Config.language || "Traditional Chinese" === cc.Mgr.Config.language ? this.title_zh.active = !0 : "Russian" === cc.Mgr.Config.language ? this.title_ru.active = !0 : this.title.active = !0,
                this.allowShow = !0
            },
            showUI: function(e) {
                this.gemNode.active = !1,
                this.getByGemsBtn.active = !1,
                !0 === cc.Mgr.Config.isChina ? (this.saleNode.active = !1,
                this.priceNode.active = !1,
                this.timeNode.active = !1,
                this.gemNode.active = !0,
                this.getBtn.active = !1,
                this.getByGemsBtn.active = !0,
                this.desLabel.string = cc.Mgr.Utils.getTranslation("specialGridBundle-tip")) : (cc.Mgr.game.localPriceList && cc.Mgr.game.localPriceList.length > 0 ? (this.priceLabel.string = cc.Mgr.game.localPriceList[8],
                this.priceSaleLabel.string = cc.Mgr.game.localPriceList[12],
                this.singlePriceLabel.string = cc.Mgr.game.localPriceList[8]) : (this.priceLabel.string = "$" + cc.Mgr.payment.priceList[8],
                this.priceSaleLabel.string = "$" + cc.Mgr.payment.priceList[12],
                this.singlePriceLabel.string = "$" + cc.Mgr.payment.priceList[8]),
                this.saleSprite.width = this.saleSprite2.width = 16 * this.priceLabel.string.length,
                (0 === cc.Mgr.game.specialGridStartTimer || 0 != cc.Mgr.game.specialGridStartTimer && Date.now() - cc.Mgr.game.specialGridStartTimer >= 864e5) && e && (cc.Mgr.game.specialGridStartTimer = Date.now()),
                this.refreshUI(),
                this.startTimeCount()),
                this.blurBg.opacity = 0,
                this.content.opacity = 0,
                this.content.setScale(.5),
                cc.tween(this.blurBg).to(.05, {
                    opacity: 255
                }).call().start(),
                cc.tween(this.content).to(.15, {
                    opacity: 255,
                    scale: 1
                }).start(),
                cc.Mgr.admob.showBanner("specialGridBunlde")
            },
            refreshUI: function() {
                this.isSale = 0 !== cc.Mgr.game.specialGridStartTimer && Date.now() - cc.Mgr.game.specialGridStartTimer < 864e5,
                this.saleNode.active = this.isSale,
                this.priceNode.active = !this.isSale,
                this.timeNode.active = this.isSale,
                this.isSale ? this.desLabel.string = cc.Mgr.Utils.getTranslation("specialGridBundle-tip2") : this.desLabel.string = cc.Mgr.Utils.getTranslation("specialGridBundle-tip")
            },
            startTimeCount: function() {
                if (this.unschedule(this.countTime),
                !1 !== this.isSale && (this.seconds = Math.floor((cc.Mgr.game.specialGridStartTimer + 864e5 - Date.now()) / 1e3),
                this.seconds > 0)) {
                    this.timeNode.active = !0;
                    var e = cc.Mgr.Utils.FormatNumToTime(this.seconds);
                    this.timeLabel.string = e,
                    this.schedule(this.countTime, 1)
                }
            },
            countTime: function() {
                if (this.seconds -= 1,
                this.seconds < 0)
                    return this.unschedule(this.countTime),
                    void this.refreshUI();
                var e = cc.Mgr.Utils.FormatNumToTime(this.seconds);
                this.timeLabel.string = e
            },
            onClickClose: function() {
                cc.Mgr.AudioMgr.playSFX("click"),
                cc.Mgr.admob.hideBanner("specialGridBunlde");
                var e = this;
                cc.tween(this.blurBg).to(.15, {
                    opacity: 0
                }).start(),
                cc.tween(this.content).to(.15, {
                    opacity: 0,
                    scale: .5
                }).call(function() {
                    e.node.active = !1,
                    cc.Mgr.game.unlockSpecialGrid && cc.Mgr.plantMgr.activateSpecialGrid(),
                    !1 === cc.Mgr.Config.isChina && cc.Mgr.UIMgr.starterBundleNode && cc.Mgr.UIMgr.starterBundleNode.active && cc.Mgr.UIMgr.starterBundleNode.getComponent("StarterBundle").refreshUI()
                }).start(),
                cc.Mgr.UIMgr.reduceShowUICount("specialGrid")
            },
            onClickGet: function() {
                var e = this;
                if (0 != this.limitClick.clickTime()) {
                    var t = this.isSale ? 12 : 8;
                    cc.Mgr.payment.purchaseByIndex(t, function() {
                        cc.Mgr.game.unlockSpecialGrid = !0,
                        e.onClickClose(),
                        cc.Mgr.game.specialGridStartTimer = 0,
                        e.refreshUI()
                    }, cc.Mgr.UIMgr.tipRoot)
                }
            },
            onClickGetByGems: function() {
                var e = this;
                if (0 != this.limitClick.clickTime()) {
                    if (cc.Mgr.game.gems < 300)
                        return cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("NoGems"), "gem", this.node),
                        void (!0 === this.allowShow && (this.allowShow = !1,
                        setTimeout(function() {
                            cc.Mgr.UIMgr.openPaymentUI(!0),
                            e.allowShow = !0,
                            e.onClickClose()
                        }, 300)));
                    cc.Mgr.game.unlockSpecialGrid = !0,
                    this.onClickClose()
                }
            }
        }),
        cc._RF.pop()
    }
    , {}],
    SpinLvData: [function(e, t) {
        "use strict";
        cc._RF.push(t, "c11daDNO4hF3ZGjnp4xE3Ne", "SpinLvData"),
        cc.Class({
            name: "SpinLvData",
            properties: {
                Level: 1,
                SpinS: 1,
                SpinA: 2,
                SpinB: 3,
                SpinC: 4
            }
        }),
        cc._RF.pop()
    }
    , {}],
    SpinLvMapMgr: [function(e, t) {
        "use strict";
        cc._RF.push(t, "5afe8Z/96hIVKMMxRn/Ab3l", "SpinLvMapMgr");
        var i = e("DB_spinLevel")
          , a = e("SpinLvData")
          , n = cc.Class({
            extends: cc.Component,
            properties: {
                dataList: {
                    default: [],
                    type: [a]
                }
            },
            DecodeJson: function() {
                var e = JSON.parse(i.data);
                for (var t in e) {
                    var n = new a;
                    n.Level = e[t][0],
                    n.SpinS = e[t][1],
                    n.SpinA = e[t][2],
                    n.SpinB = e[t][3],
                    n.SpinC = e[t][4],
                    this.dataList[t] = n
                }
            },
            getDataByKey: function(e) {
                return this.dataList[e]
            }
        });
        t.exports = n,
        cc._RF.pop()
    }
    , {
        DB_spinLevel: "DB_spinLevel",
        SpinLvData: "SpinLvData"
    }],
    StarterBundle: [function(e, t) {
        "use strict";
        cc._RF.push(t, "0a2bf9j3g9Ibo3JFZ8ppLyV", "StarterBundle"),
        e("DataType"),
        e("MyEnum"),
        cc.Class({
            extends: cc.Component,
            properties: {
                blurBg: cc.Node,
                content: cc.Node,
                titleLabel: cc.Label,
                coinlabel: cc.Label,
                priceLabelList: [cc.Label],
                effectList: [cc.Node],
                moduleList: [cc.Node],
                content_en_coin: cc.Node,
                content_zh_coin: cc.Node,
                content_ja_coin: cc.Node,
                content_ru_coin: cc.Node,
                content_en_unlock: cc.Node,
                content_zh_unlock: cc.Node,
                content_ja_unlock: cc.Node,
                content_ru_unlock: cc.Node,
                content_en_removeAd: cc.Node,
                content_zh_removeAd: cc.Node,
                content_ja_removeAd: cc.Node,
                content_ru_removeAd: cc.Node,
                content_en_offline: cc.Node,
                content_zh_offline: cc.Node,
                content_ja_offline: cc.Node,
                content_ru_offline: cc.Node
            },
            start: function() {
                this.limitClick = this.node.getComponent("LimitClick"),
                this.content_en_coin.active = !1,
                this.content_zh_coin.active = !1,
                this.content_ja_coin.active = !1,
                this.content_ru_coin.active = !1,
                this.content_en_unlock.active = !1,
                this.content_zh_unlock.active = !1,
                this.content_ja_unlock.active = !1,
                this.content_ru_unlock.active = !1,
                this.content_en_removeAd.active = !1,
                this.content_zh_removeAd.active = !1,
                this.content_ja_removeAd.active = !1,
                this.content_ru_removeAd.active = !1,
                this.content_en_offline.active = !1,
                this.content_zh_offline.active = !1,
                this.content_ja_offline.active = !1,
                this.content_ru_offline.active = !1,
                "Japanese" === cc.Mgr.Config.language ? (this.content_ja_coin.active = !0,
                this.content_ja_unlock.active = !0,
                this.content_ja_removeAd.active = !0,
                this.content_ja_offline.active = !0) : "Simplified Chinese" === cc.Mgr.Config.language || "Traditional Chinese" === cc.Mgr.Config.language ? (this.content_zh_coin.active = !0,
                this.content_zh_unlock.active = !0,
                this.content_zh_removeAd.active = !0,
                this.content_zh_offline.active = !0) : "Russian" === cc.Mgr.Config.language ? (this.content_ru_coin.active = !0,
                this.content_ru_unlock.active = !0,
                this.content_ru_removeAd.active = !0,
                this.content_ru_offline.active = !0) : (this.content_en_coin.active = !0,
                this.content_en_unlock.active = !0,
                this.content_en_removeAd.active = !0,
                this.content_en_offline.active = !0)
            },
            getCoin: function() {
                0 != this.limitClick.clickTime() && cc.Mgr.UIMgr.openCoinBundle(this.coinNumber, !1)
            },
            getSpecialGrid: function() {
                0 != this.limitClick.clickTime() && (cc.Mgr.game.isVIP ? cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("already-subscribed-vip"), "", this.node) : cc.Mgr.game.unlockSpecialGrid ? cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("already-subscribed"), "", this.node) : cc.Mgr.UIMgr.openSpecialGridBundle(!1))
            },
            removeAd: function() {
                0 != this.limitClick.clickTime() && (cc.Mgr.game.isVIP ? cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("already-subscribed-vip"), "", this.node) : cc.Mgr.game.removeAd ? cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("already-subscribed"), "", this.node) : cc.Mgr.UIMgr.openRemoveAdBundle())
            },
            getDoubleInOffline: function() {
                0 != this.limitClick.clickTime() && (cc.Mgr.game.isVIP ? cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("already-subscribed-vip"), "", this.node) : cc.Mgr.game.offlineDouble ? cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("already-subscribed"), "", this.node) : cc.Mgr.UIMgr.openOfflineBundle(!1))
            },
            refreshUI: function() {
                var e;
                this.effectList[0].active = 0 !== cc.Mgr.game.coinBundleStartTimer && Date.now() - cc.Mgr.game.coinBundleStartTimer < 864e5,
                this.effectList[1].active = 0 !== cc.Mgr.game.specialGridStartTimer && Date.now() - cc.Mgr.game.specialGridStartTimer < 864e5,
                this.effectList[2].active = 0 !== cc.Mgr.game.removeAdStartTimer && Date.now() - cc.Mgr.game.removeAdStartTimer < 864e5,
                e = cc.Mgr.game.localPriceList && cc.Mgr.game.localPriceList.length > 0 ? cc.Mgr.game.localPriceList : cc.Mgr.payment.priceList;
                for (var t = 0; t < this.priceLabelList.length; t++)
                    this.priceLabelList[t].string = cc.Mgr.game.localPriceList && cc.Mgr.game.localPriceList.length > 0 ? e[t + 7] : "$" + e[t + 7];
                0 !== cc.Mgr.game.coinBundleStartTimer && Date.now() - cc.Mgr.game.coinBundleStartTimer < 864e5 && (this.priceLabelList[0].string = cc.Mgr.game.localPriceList && cc.Mgr.game.localPriceList.length > 0 ? e[11] : "$" + e[11]),
                0 !== cc.Mgr.game.specialGridStartTimer && Date.now() - cc.Mgr.game.specialGridStartTimer < 864e5 && (this.priceLabelList[1].string = cc.Mgr.game.localPriceList && cc.Mgr.game.localPriceList.length > 0 ? e[12] : "$" + e[12]),
                0 !== cc.Mgr.game.removeAdStartTimer && Date.now() - cc.Mgr.game.removeAdStartTimer < 864e5 && (this.priceLabelList[2].string = cc.Mgr.game.localPriceList && cc.Mgr.game.localPriceList.length > 0 ? e[13] : "$" + e[13])
            },
            showUI: function() {
                this.titleLabel.string = cc.Mgr.Utils.getTranslation("starterBundles0title"),
                this.blurBg.opacity = 0,
                this.content.opacity = 0,
                this.content.setScale(.5),
                cc.tween(this.blurBg).to(.05, {
                    opacity: 255
                }).call().start(),
                cc.tween(this.content).to(.15, {
                    opacity: 255,
                    scale: 1
                }).start(),
                this.coinNumber = cc.Mgr.UIMgr.getCoinNumber() * BigInt(30),
                this.coinNumber = this.coinNumber < BigInt(1e6) ? BigInt(1e6) : this.coinNumber,
                this.coinNumber = this.coinNumber * BigInt(2),
                this.coinlabel.string = cc.Mgr.Utils.getNumStr2(this.coinNumber),
                cc.Mgr.admob.showBanner("starterBundle"),
                this.refreshUI(),
                "JP" === cc.Mgr.game.version ? (this.moduleList[0].active = !1,
                this.moduleList[1].setPosition(-118, 85),
                this.moduleList[2].setPosition(118, 85),
                this.moduleList[3].setPosition(-118, -130)) : (this.moduleList[0].active = !0,
                this.moduleList[0].setPosition(-118, 85),
                this.moduleList[1].setPosition(118, 85),
                this.moduleList[2].setPosition(-118, -130),
                this.moduleList[3].setPosition(118, -130))
            },
            onClickClose: function() {
                cc.Mgr.AudioMgr.playSFX("click"),
                cc.Mgr.admob.hideBanner("starterBundle");
                var e = this;
                cc.tween(this.blurBg).to(.15, {
                    opacity: 0
                }).start(),
                cc.tween(this.content).to(.15, {
                    opacity: 0,
                    scale: .5
                }).call(function() {
                    e.node.active = !1
                }).start(),
                cc.Mgr.UIMgr.reduceShowUICount("starterBundle")
            }
        }),
        cc._RF.pop()
    }
    , {
        DataType: "DataType",
        MyEnum: "MyEnum"
    }],
    SwitchFont: [function(e, t) {
        "use strict";
        cc._RF.push(t, "b9bc9BbubJI4KZQrJuCE6z/", "SwitchFont"),
        cc.Class({
            extends: cc.Component,
            properties: {
                isStroke: !0,
                offsetY: 0
            },
            start: function() {
                this.label = this.node.getComponent(cc.Label),
                this.originalY = this.node.y,
                cc.Mgr.Config.language = "English",
                this.isStroke ? this.label.font = cc.Mgr.fontManager.font_en : this.label.font = cc.Mgr.fontManager.font_en_noStroke,
                this.node.y = this.originalY
            }
        }),
        cc._RF.pop()
    }
    , {}],
    TEA: [function(e, t) {
        "use strict";
        cc._RF.push(t, "0bfa5EilmlNWpcp9cHoYf84", "TEA");
        var i = e("MyEnum");
        cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {
                cc.Mgr.TEA = this,
                this.lastTimer = 0
            },
            getUserProperties: function() {
                var e, t;
                if (this.userProperties = {},
                cc.Mgr.game.isFacebook || cc.Mgr.game.UUID,
                this.userProperties.game_id = cc.Mgr.game.UUID,
                this.userProperties.internal_version = cc.Mgr.Config.version,
                cc.Mgr.game.isFacebook)
                    this.userProperties.is_subscribed = !1;
                else
                    switch (cc.sys.os) {
                    case cc.sys.OS_ANDROID:
                        this.userProperties.is_subscribed = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/notification/Notification", "isNotificationEnabled", "()Z");
                        break;
                    case cc.sys.OS_IOS:
                        this.userProperties.is_subscribed = jsb.reflection.callStaticMethod("Notification", "isUserNotificationEnable")
                    }
                this.userProperties.platform = cc.Mgr.Config.platform,
                this.userProperties.session_ct = "" + cc.Mgr.game.session_ct,
                this.userProperties.ltv = "" + cc.Mgr.game.ltv,
                e = !1 === cc.Mgr.game.removeAd && !1 === cc.Mgr.game.isVIP ? cc.Mgr.game.needShowInterstitial ? "active" : "inactive" : "removed",
                t = !1 === cc.Mgr.game.removeAd && !1 === cc.Mgr.game.isVIP ? cc.Mgr.game.needShowBanner ? "active" : "inactive" : "removed",
                this.userProperties.interstitial = "" + e,
                this.userProperties.banner = "" + t,
                this.userProperties.offlineDouble = !1 === cc.Mgr.game.offlineDouble && !1 === cc.Mgr.game.isVIP ? "inactive" : "active",
                this.userProperties.vip = "" + cc.Mgr.game.vip,
                this.userProperties.days_inactive = "" + cc.Mgr.game.days_inactive,
                this.userProperties.days_installed = "" + cc.Mgr.game.days_installed,
                this.userProperties.days_engaged = "" + cc.Mgr.game.days_engaged,
                this.userProperties.first_date = "" + cc.Mgr.Utils.dateFormat("YYYY-mm-dd", cc.Mgr.game.firstTime),
                this.userProperties.first_version = "" + cc.Mgr.game.first_version,
                this.userProperties.first_internal_version = "" + cc.Mgr.game.first_internal_version,
                this.userProperties.rewarded_ct = "" + cc.Mgr.game.rewarded_ct,
                this.userProperties.Interstitial_ct = "" + cc.Mgr.game.Interstitial_ct,
                this.userProperties.banner_ct = "" + cc.Mgr.game.banner_ct,
                this.userProperties.stage = "" + cc.Mgr.game.level,
                this.userProperties.wave = "" + cc.Mgr.game.curBoshu,
                this.userProperties.coin_owns = "" + cc.Mgr.game.money,
                this.userProperties.coin_gained_total = "" + cc.Mgr.game.coin_gained_total.toString(),
                this.userProperties.gem_owns = "" + cc.Mgr.game.gems,
                this.userProperties.gem_gained_total = "" + cc.Mgr.game.gem_gained_total,
                this.userProperties.guardian_max_level = "" + cc.Mgr.game.plantMaxLv,
                this.userProperties.is_mopub = "" + cc.Mgr.Config.isMopub;
                for (var a = [], n = 0; n < cc.Mgr.game.plantsPK.length - 1; n++) {
                    var c = cc.Mgr.game.plantsPK[n];
                    c.type === i.GridState.none ? a.push("empty") : c.type === i.GridState.lock ? a.push("locked") : a.push(c.level)
                }
                return this.userProperties.grid1_grid12 = a.join(","),
                cc.Mgr.game.plantsPK && cc.Mgr.game.plantsPK.length > 0 && (cc.Mgr.game.plantsPK[12].type === i.GridState.vip ? this.userProperties.fort = "locked" : cc.Mgr.game.plantsPK[12].type === i.GridState.vipLock ? this.userProperties.fort = "arrow" : cc.Mgr.game.plantsPK[12].type === i.GridState.none ? this.userProperties.fort = "empty" : this.userProperties.fort = cc.Mgr.game.plantsPK[12].level),
                this.userProperties.timestamp = cc.Mgr.Utils.getDate9(!0),
                this.userProperties.session_elapsed = "" + (cc.Mgr.Utils.GetSysTime() - cc.Mgr.game.firstTime),
                this.userProperties
            },
            collectEvent: function(e, t) {
                var i = {};
                for (var a in t)
                    i[a] = t[a];
                this.reportProperties()
            },
            collectEvent_revenue: function(e, t) {
                var i = {};
                for (var a in t)
                    i[a] = t[a];
                this.reportProperties()
            },
            update: function() {},
            reportProperties: function() {
                this.getUserProperties(),
                cc.Mgr.Config.isGameSnacks
            }
        }),
        cc._RF.pop()
    }
    , {
        MyEnum: "MyEnum"
    }],
    TransData: [function(e, t) {
        "use strict";
        cc._RF.push(t, "598baAWuoNIupoBDWIiiRz6", "TransData");
        var i = cc.Class({
            name: "TransData",
            properties: {
                en_US: "",
                zh_CN: "",
                zh_TW: "",
                zh_HK: "",
                de_DE: ""
            }
        });
        t.exports = i,
        cc._RF.pop()
    }
    , {}],
    TransMapMgr: [function(e, t) {
        "use strict";
        cc._RF.push(t, "529c73Po5RAs4wgPM965snk", "TransMapMgr");
        var i = e("DB_i18n")
          , a = cc.Class({
            extends: cc.Component,
            properties: {},
            DecodeJson: function() {
                this.data = {};
                for (var e = i.data, t = 0; t < e.length; t++) {
                    var a = e[t];
                    this.data[a.Key] = a
                }
            },
            getDataByKey: function(e) {
                return this.data[e][cc.Mgr.Config.language]
            }
        });
        t.exports = a,
        cc._RF.pop()
    }
    , {
        DB_i18n: "DB_i18n"
    }],
    TurnTableData: [function(e, t) {
        "use strict";
        cc._RF.push(t, "297c50BAC1IA7ZaQchA8S1h", "TurnTableData");
        var i = cc.Class({
            name: "TurnTableData",
            properties: {
                id: 1,
                type: 0,
                rarity: 0,
                weight: 0,
                rewards: 0
            }
        });
        t.exports = i,
        cc._RF.pop()
    }
    , {}],
    TurnTableGetType: [function(e, t) {
        "use strict";
        cc._RF.push(t, "389343LkklJs7LTf6CZOC26", "TurnTableGetType");
        var i = cc.Enum({
            coin: "coin",
            plant: "plant",
            gem: "gem",
            buff: "buff",
            drone: "drone"
        });
        t.exports = i,
        cc._RF.pop()
    }
    , {}],
    TurnTableMapMgr: [function(e, t) {
        "use strict";
        cc._RF.push(t, "3e58ductqhBvLFQAsyGGttW", "TurnTableMapMgr");
        var i = e("DB_turntable")
          , a = e("TurnTableData")
          , n = cc.Class({
            extends: cc.Component,
            properties: {
                dataList: {
                    default: [],
                    type: [a]
                }
            },
            DecodeJson: function() {
                var e = JSON.parse(i.data);
                for (var t in e) {
                    var n = new a;
                    n.id = e[t][0],
                    n.type = e[t][1],
                    n.rarity = e[t][2],
                    n.weight = e[t][3],
                    n.rewards = e[t][4],
                    this.dataList[t] = n
                }
            },
            getDataByKey: function(e) {
                return this.dataList[e]
            }
        });
        t.exports = n,
        cc._RF.pop()
    }
    , {
        DB_turntable: "DB_turntable",
        TurnTableData: "TurnTableData"
    }],
    UIMgr: [function(e, t) {
        "use strict";
        cc._RF.push(t, "17061XGCOJL+qzfTLX/yjSj", "UIMgr");
        var i = e("uiConfig")
          , a = e("DataType")
          , n = e("EffectType")
          , c = e("MyEnum")
          , s = cc.Class({
            extends: cc.Component,
            properties: {
                uiRoot: cc.Node,
                tipTrashBackNode: cc.Node,
                trashBoxNode: cc.Node,
                tipRoot: cc.Node,
                loading: cc.Node
            },
            addShowUICount: function(e) {
                /*this.openUINameList || (this.openUINameList = []),
                this.openUINameList.indexOf(e) >= 0 || (this.openUINameList.push(e),
                this.currentShowUICount++,
                console.log("cc.Mgr.UIMgr.currentShowUICount: " + cc.Mgr.UIMgr.currentShowUICount))*/
            },
            reduceShowUICount: function(e) {
                /*this.currentShowUICount--,
                this.currentShowUICount;
                var t = this.openUINameList.indexOf(e);
                t >= 0 && this.openUINameList.splice(t, 1),
                cc.Mgr.UIMgr.currentShowUICount <= 0 && cc.Mgr.plantMgr.autoMerge(),
                console.log("cc.Mgr.UIMgr.currentShowUICount: " + cc.Mgr.UIMgr.currentShowUICount)*/
            },
            showLoading: function(e) {
                if (e || cc.Mgr.game.isFacebook) {
                    this.loading.opacity = 0,
                    this.loading.active = !0;
                    var t = cc.fadeIn(.5);
                    this.loading.runAction(t)
                }
            },
            hideLoading: function() {
                this.loading.stopAllActions(),
                this.loading.active = !1
            },
            statics: {
                instance: null
            },
            onLoad: function() {
                s.instance = this,
                this.currentShowUICount = 0
            },
            start: function() {
                var e = this;
                cc.loader.loadRes("prefab/uiPrefab/" + i.promptUI.Name, cc.Prefab, function(t, i) {
                    t ? cc.error(t.message || t) : e.promptPre = i
                })
            },
            showTrashBoxNode: function(e) {
                void 0 === e && (e = !0),
                this.trashBoxNode.active = e
            },
            showTipToTrash: function(e) {
                this.tipTrashBackNode.active !== e && (e && cc.Mgr.plantMgr.otherTipCount > 0 || (this.tipTrashBackNode.active = e,
                e ? cc.Mgr.plantMgr.otherTipCount++ : cc.Mgr.plantMgr.otherTipCount--))
            },
            playCoinFlyForRecovery: function(e) {
                var t = cc.Mgr.EffectMgr.getObFromPool(n.CoinFly);
                null != t && (t.parent = this.trashBoxNode,
                t.active = !0,
                t.zIndex = 101,
                t.y = 60,
                t.x = 0,
                t.getComponent("coinFly").setData(cc.Mgr.Utils.getNumStr2(e)),
                t.scale = 1,
                cc.tween(t).to(.1, {
                    position: cc.v2(0, 90),
                    scale: .8
                }).to(.5, {
                    position: cc.v2(0, 100)
                }).call(function() {
                    cc.Mgr.game.money += e,
                    cc.Mgr.game.coin_gained_total += e,
                    cc.Mgr.UIMgr.InGameUI.RefreshAssetData(!1, "money"),
                    cc.Mgr.EffectMgr.ObBackToPool(t, n.CoinFly)
                }).start())
            },
            openSetting: function() {
                var e = this;
                cc.Mgr.AudioMgr.playSFX("click"),
                cc.Mgr.game.needGuide ? cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("need-to-complete-guide"), "", this.uiRoot) : (this.clearPrompt(),
                this.setUI ? (this.addShowUICount("setting"),
                this.setUI.active = !0,
                e.setUI.getComponent("setPanel").showUI(),
                this.setUI.zIndex = i.setUI.Layer) : (this.setUI = null,
                this.showLoading(),
                cc.loader.loadRes("prefab/uiPrefab/" + i.setUI.Name, cc.Prefab, function(t, a) {
                    t ? cc.error(t.message || t) : (e.addShowUICount("setting"),
                    e.hideLoading(),
                    e.setUI = cc.instantiate(a),
                    e.setUI.parent = e.uiRoot,
                    e.setUI.active = !0,
                    e.setUI.getComponent("setPanel").showUI(),
                    e.setUI.zIndex = i.setUI.Layer)
                })))
            },
            closeShop: function() {
                null != this.paymentUINode && this.paymentUINode.getComponent("PaymentUI").onClickClose()
            },
            openPlantGetUI: function(e, t, a) {
                void 0 === a && (a = !1),
                this.clearPrompt();
                var n = this;
                if (cc.Mgr.AudioMgr.playSFX("click"),
                this.plantGetUINode) {
                    this.addShowUICount("plantGet"),
                    this.plantGetUINode.active = !0,
                    this.plantGetUINode.opacity = 0;
                    var c = cc.fadeIn(.25);
                    this.plantGetUINode.getComponent("plantGetUI").showUI(e, t, a),
                    this.plantGetUINode.runAction(c),
                    this.plantGetUINode.zIndex = i.plantGetUI.Layer
                } else
                    this.plantGetUINode = null,
                    this.showLoading(),
                    cc.loader.loadRes("prefab/uiPrefab/" + i.plantGetUI.Name, cc.Prefab, function(c, s) {
                        if (c)
                            cc.error(c.message || c);
                        else {
                            n.addShowUICount("plantGet"),
                            n.hideLoading(),
                            n.plantGetUINode = cc.instantiate(s),
                            n.plantGetUINode.parent = n.uiRoot,
                            n.plantGetUINode.active = !0,
                            n.plantGetUINode.opacity = 0;
                            var o = cc.fadeIn(.25);
                            n.plantGetUINode.getComponent("plantGetUI").showUI(e, t, a),
                            n.plantGetUINode.runAction(o),
                            n.plantGetUINode.zIndex = i.plantGetUI.Layer
                        }
                    });
                "unlock" == e && 5 == t && cc.Mgr.UIMgr.InGameUI.showUavNextTime(.5)
            },
            openDoubleCoinUI: function() {
                this.clearPrompt();
                var e = this;
                if (cc.Mgr.AudioMgr.playSFX("click"),
                this.doubleCoinUI) {
                    this.addShowUICount("doubleCoin"),
                    this.doubleCoinUI.active = !0,
                    this.doubleCoinUI.opacity = 0;
                    var t = cc.fadeIn(.25);
                    this.doubleCoinUI.getComponent("doubleCoinUI").showUI(),
                    this.doubleCoinUI.runAction(t),
                    this.doubleCoinUI.zIndex = i.doubleCoinUI.Layer
                } else
                    this.doubleCoinUI = null,
                    this.showLoading(),
                    cc.loader.loadRes("prefab/uiPrefab/" + i.doubleCoinUI.Name, cc.Prefab, function(t, a) {
                        if (t)
                            cc.error(t.message || t);
                        else {
                            e.addShowUICount("doubleCoin"),
                            e.hideLoading(),
                            e.doubleCoinUI = cc.instantiate(a),
                            e.doubleCoinUI.parent = e.uiRoot,
                            e.doubleCoinUI.active = !0,
                            e.doubleCoinUI.opacity = 0;
                            var n = cc.fadeIn(.25);
                            e.doubleCoinUI.getComponent("doubleCoinUI").showUI(),
                            e.doubleCoinUI.runAction(n),
                            e.doubleCoinUI.zIndex = i.doubleCoinUI.Layer
                        }
                    })
            },
            clearPrompt: function() {
                null != this.currentTip && (this.currentTip.stopAllActions(),
                this.currentTip.destroy(),
                this.currentTip = null),
                null != this.lastTip && (this.lastTip.stopAllActions(),
                this.lastTip.destroy(),
                this.lastTip = null)
            },
            showPrompt: function(e, t, a) {
                var n = this
                  , c = this;
                if (null != this.currentTip) {
                    this.lastTip = this.currentTip,
                    this.lastTip.stopAllActions();
                    var s = cc.moveBy(.2, 0, 150)
                      , o = cc.fadeOut(.2);
                    this.lastTip.runAction(cc.sequence(cc.spawn(s, o), cc.callFunc(function() {
                        null != n.lastTip && n.lastTip.destroy(),
                        n.lastTip = n.currentTip
                    })))
                }
                if (null == this.promptPre)
                    cc.loader.loadRes("prefab/uiPrefab/" + i.promptUI.Name, cc.Prefab, function(n, s) {
                        if (n)
                            cc.error(n.message || n);
                        else {
                            c.promptPre = s,
                            c.currentTip = cc.instantiate(s),
                            c.currentTip.y = 100 - c.currentTip.height / 2,
                            c.currentTip.parent = a || c.uiRoot,
                            c.currentTip.zIndex = i.promptUI.Layer,
                            c.currentTip.getComponent("promptUI").showDes(e, t);
                            var o = cc.moveBy(.2, 0, 150)
                              , r = cc.moveBy(1, 0, 0)
                              , l = cc.moveBy(.2, 0, 150)
                              , g = cc.fadeOut(.2);
                            c.currentTip.runAction(cc.sequence(o, r, cc.callFunc(function() {
                                c.currentTip.runAction(cc.sequence(cc.spawn(l, g), cc.callFunc(function() {
                                    null != c.currentTip && (c.currentTip.destroy(),
                                    c.currentTip = null)
                                })))
                            })))
                        }
                    });
                else {
                    c.currentTip = cc.instantiate(this.promptPre),
                    c.currentTip.y = 100 - c.currentTip.height / 2,
                    c.currentTip.parent = a || c.uiRoot,
                    c.currentTip.zIndex = i.promptUI.Layer,
                    c.currentTip.getComponent("promptUI").showDes(e, t);
                    var r = cc.moveBy(.2, 0, 150)
                      , l = cc.moveBy(1, 0, 0);
                    s = cc.moveBy(.2, 0, 150),
                    o = cc.fadeOut(.2),
                    c.currentTip.runAction(cc.sequence(r, l, cc.callFunc(function() {
                        c.currentTip.runAction(cc.sequence(cc.spawn(s, o), cc.callFunc(function() {
                            null != c.currentTip && (c.currentTip.destroy(),
                            c.currentTip = null)
                        })))
                    })))
                }
            },
            showSmallResult: function(e) {
                var t = this;
                this.smallResultNode ? (this.smallResultNode.active = !0,
                this.smallResultNode.scaleY = .1,
                this.smallResultNode.getComponent("smallResult").show(e),
                this.smallResultNode.runAction(cc.scaleTo(.25, 1, 1)),
                this.smallResultNode.zIndex = i.smallResult.Layer,
                this.smallResultNode.y = 200) : (this.smallResultNode = null,
                cc.loader.loadRes("prefab/uiPrefab/" + i.smallResult.Name, cc.Prefab, function(a, n) {
                    a ? cc.error(a.message || a) : (t.smallResultNode = cc.instantiate(n),
                    t.smallResultNode.parent = t.uiRoot,
                    t.smallResultNode.active = !0,
                    t.smallResultNode.scaleY = .1,
                    t.smallResultNode.getComponent("smallResult").show(e),
                    t.smallResultNode.runAction(cc.scaleTo(.25, 1, 1)),
                    t.smallResultNode.zIndex = i.smallResult.Layer,
                    t.smallResultNode.y = 200)
                }))
            },
            showBigResult: function(e, t) {
                this.clearPrompt();
                var a = this;
                this.bigResultNode ? (this.addShowUICount("bigResult"),
                this.bigResultNode.active = !0,
                this.bigResultNode.getComponent("bigResult").show(e, t),
                this.bigResultNode.zIndex = i.bigResult.Layer) : (this.bigResultNode = null,
                this.showLoading(),
                cc.loader.loadRes("prefab/uiPrefab/" + i.bigResult.Name, cc.Prefab, function(n, c) {
                    n ? cc.error(n.message || n) : (a.addShowUICount("bigResult"),
                    a.hideLoading(),
                    a.bigResultNode = cc.instantiate(c),
                    a.bigResultNode.parent = a.uiRoot,
                    a.bigResultNode.active = !0,
                    a.bigResultNode.getComponent("bigResult").show(e, t),
                    a.bigResultNode.zIndex = i.bigResult.Layer)
                }))
            },
            showBossComing: function(e) {
                var t = this;
                this.bossComingNode ? (this.bossComingNode.active = !0,
                this.bossComingNode.getComponent("bossComing").playAnimation(e),
                this.bossComingNode.zIndex = i.bossComing.Layer,
                this.bossComingNode.setScale(cc.Mgr.game.isPad ? 1.35 : 1)) : (this.bossComingNode = null,
                cc.loader.loadRes("prefab/uiPrefab/" + i.bossComing.Name, cc.Prefab, function(a, n) {
                    a ? cc.error(a.message || a) : (t.bossComingNode = cc.instantiate(n),
                    t.bossComingNode.parent = t.uiRoot,
                    t.bossComingNode.active = !0,
                    t.bossComingNode.getComponent("bossComing").playAnimation(e),
                    t.bossComingNode.zIndex = i.bossComing.Layer,
                    t.bossComingNode.setScale(cc.Mgr.game.isPad ? 1.35 : 1))
                }))
            },
            openBuffUI: function() {
                if (cc.Mgr.AudioMgr.playSFX("click"),
                cc.Mgr.game.needGuide)
                    cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("need-to-complete-guide"), "", this.uiRoot);
                else {
                    this.clearPrompt();
                    var e = this;
                    this.buffUINode ? (this.addShowUICount("buff"),
                    this.buffUINode.active = !0,
                    this.buffUINode.getComponent("BuffUI").showUI(),
                    this.buffUINode.zIndex = i.buffUI.Layer) : (this.buffUINode = null,
                    this.showLoading(),
                    cc.loader.loadRes("prefab/uiPrefab/" + i.buffUI.Name, cc.Prefab, function(t, a) {
                        t ? cc.error(t.message || t) : (e.addShowUICount("buff"),
                        e.hideLoading(),
                        e.buffUINode = cc.instantiate(a),
                        e.buffUINode.parent = e.uiRoot,
                        e.buffUINode.active = !0,
                        e.buffUINode.getComponent("BuffUI").showUI(),
                        e.buffUINode.zIndex = i.buffUI.Layer)
                    }))
                }
            },
            openTurnTableUI: function() {
                if (cc.Mgr.AudioMgr.playSFX("click"),
                cc.Mgr.game.needGuide)
                    cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("need-to-complete-guide"), "", this.uiRoot);
                else {
                    this.clearPrompt();
                    var e = this;
                    this.turnTableUINode ? (this.addShowUICount("turnTable"),
                    this.turnTableUINode.active = !0,
                    this.turnTableUINode.getComponent("turnTableUI").showUI(),
                    this.turnTableUINode.zIndex = i.turnTableUI.Layer) : (this.turnTableUINode = null,
                    this.showLoading(),
                    cc.loader.loadRes("prefab/uiPrefab/" + i.turnTableUI.Name, cc.Prefab, function(t, a) {
                        t ? cc.error(t.message || t) : (e.addShowUICount("turnTable"),
                        e.hideLoading(),
                        e.turnTableUINode = cc.instantiate(a),
                        e.turnTableUINode.parent = e.uiRoot,
                        e.turnTableUINode.active = !0,
                        e.turnTableUINode.getComponent("turnTableUI").showUI(),
                        e.turnTableUINode.zIndex = i.turnTableUI.Layer)
                    })),
                    cc.Mgr.UIMgr.InGameUI.setTopNodeLayer(this.turnTableUINode)
                }
            },
            openAssetGetUI: function(e, t, a, n) {
                void 0 === a && (a = ""),
                void 0 === n && (n = null),
                this.clearPrompt();
                var c = this;
                this.assetGetUINode ? (this.addShowUICount("assetGet"),
                this.assetGetUINode.active = !0,
                this.assetGetUINode.getComponent("assetGetUI").showUI(e, t, a, n),
                this.assetGetUINode.zIndex = i.assetGetUI.Layer) : (this.assetGetUINode = null,
                this.showLoading(),
                cc.loader.loadRes("prefab/uiPrefab/" + i.assetGetUI.Name, cc.Prefab, function(s, o) {
                    s ? cc.error(s.message || s) : (c.addShowUICount("assetGet"),
                    c.hideLoading(),
                    c.assetGetUINode = cc.instantiate(o),
                    c.assetGetUINode.parent = c.uiRoot,
                    c.assetGetUINode.active = !0,
                    c.assetGetUINode.getComponent("assetGetUI").showUI(e, t, a, n),
                    c.assetGetUINode.zIndex = i.assetGetUI.Layer)
                }))
            },
            openStarterBundle: function() {
                if (cc.Mgr.AudioMgr.playSFX("click"),
                cc.Mgr.game.needGuide)
                    cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("need-to-complete-guide"), "", this.uiRoot);
                else {
                    this.clearPrompt();
                    var e = this;
                    this.starterBundleNode ? (this.addShowUICount("starterBundle"),
                    this.starterBundleNode.active = !0,
                    e.starterBundleNode.getComponent("StarterBundle").showUI(),
                    this.starterBundleNode.zIndex = i.starterBundleUI.Layer) : (this.starterBundleNode = null,
                    this.showLoading(),
                    cc.loader.loadRes("prefab/uiPrefab/" + i.starterBundleUI.Name, cc.Prefab, function(t, a) {
                        t ? cc.error(t.message || t) : (e.addShowUICount("starterBundle"),
                        e.hideLoading(),
                        e.starterBundleNode = cc.instantiate(a),
                        e.starterBundleNode.parent = e.uiRoot,
                        e.starterBundleNode.active = !0,
                        e.starterBundleNode.getComponent("StarterBundle").showUI(),
                        e.starterBundleNode.zIndex = i.starterBundleUI.Layer)
                    }))
                }
            },
            openCoinBundle: function(e, t) {
                if (cc.Mgr.AudioMgr.playSFX("click"),
                cc.Mgr.game.needGuide)
                    cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("need-to-complete-guide"), "", this.uiRoot);
                else if ("EN" === cc.Mgr.game.version && !0 !== cc.Mgr.Config.isChina) {
                    this.clearPrompt();
                    var a = this;
                    this.coinBundleNode ? (this.addShowUICount("coinBundle"),
                    this.coinBundleNode.active = !0,
                    a.coinBundleNode.getComponent("CoinBundle").showUI(e, t),
                    this.coinBundleNode.zIndex = i.coinBundle.Layer) : (this.coinBundleNode = null,
                    this.showLoading(),
                    cc.loader.loadRes("prefab/uiPrefab/" + i.coinBundle.Name, cc.Prefab, function(n, c) {
                        n ? cc.error(n.message || n) : (a.addShowUICount("coinBundle"),
                        a.hideLoading(),
                        a.coinBundleNode = cc.instantiate(c),
                        a.coinBundleNode.parent = a.uiRoot,
                        a.coinBundleNode.active = !0,
                        a.coinBundleNode.getComponent("CoinBundle").showUI(e, t),
                        a.coinBundleNode.zIndex = i.coinBundle.Layer)
                    }))
                }
            },
            openOfflineBundle: function(e) {
                if (cc.Mgr.AudioMgr.playSFX("click"),
                cc.Mgr.game.needGuide)
                    cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("need-to-complete-guide"), "", this.uiRoot);
                else if (!0 !== cc.Mgr.Config.isChina) {
                    this.clearPrompt();
                    var t = this;
                    this.offlineBundleNode ? (this.addShowUICount("offlineBundle"),
                    this.offlineBundleNode.active = !0,
                    t.offlineBundleNode.getComponent("OfflineBundle").showUI(e),
                    this.offlineBundleNode.zIndex = i.offlineBundle.Layer) : (this.offlineBundleNode = null,
                    this.showLoading(),
                    cc.loader.loadRes("prefab/uiPrefab/" + i.offlineBundle.Name, cc.Prefab, function(a, n) {
                        a ? cc.error(a.message || a) : (t.addShowUICount("offlineBundle"),
                        t.hideLoading(),
                        t.offlineBundleNode = cc.instantiate(n),
                        t.offlineBundleNode.parent = t.uiRoot,
                        t.offlineBundleNode.active = !0,
                        t.offlineBundleNode.getComponent("OfflineBundle").showUI(e),
                        t.offlineBundleNode.zIndex = i.offlineBundle.Layer)
                    }))
                }
            },
            openRemoveAdBundle: function() {
                if (cc.Mgr.AudioMgr.playSFX("click"),
                cc.Mgr.game.needGuide)
                    cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("need-to-complete-guide"), "", this.uiRoot);
                else if (!0 !== cc.Mgr.Config.isChina) {
                    this.clearPrompt();
                    var e = this;
                    this.removeAdBundleNode ? (this.addShowUICount("removeAdBundle"),
                    this.removeAdBundleNode.active = !0,
                    e.removeAdBundleNode.getComponent("RemoveAdBundle").showUI(),
                    this.removeAdBundleNode.zIndex = i.removeAdBundle.Layer) : (this.removeAdBundleNode = null,
                    this.showLoading(),
                    cc.loader.loadRes("prefab/uiPrefab/" + i.removeAdBundle.Name, cc.Prefab, function(t, a) {
                        t ? cc.error(t.message || t) : (e.addShowUICount("removeAdBundle"),
                        e.hideLoading(),
                        e.removeAdBundleNode = cc.instantiate(a),
                        e.removeAdBundleNode.parent = e.uiRoot,
                        e.removeAdBundleNode.active = !0,
                        e.removeAdBundleNode.getComponent("RemoveAdBundle").showUI(),
                        e.removeAdBundleNode.zIndex = i.removeAdBundle.Layer)
                    }))
                }
            },
            openSpecialGridBundle: function(e) {
                if (cc.Mgr.AudioMgr.playSFX("click"),
                cc.Mgr.game.needGuide)
                    cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("need-to-complete-guide"), "", this.uiRoot);
                else {
                    this.clearPrompt();
                    var t = this;
                    this.specialGridBundleNode ? (this.addShowUICount("specialGrid"),
                    this.specialGridBundleNode.active = !0,
                    t.specialGridBundleNode.getComponent("SpecialGridBundle").showUI(e),
                    this.specialGridBundleNode.zIndex = i.specialGridBundle.Layer) : (this.specialGridBundleNode = null,
                    this.showLoading(),
                    cc.loader.loadRes("prefab/uiPrefab/" + i.specialGridBundle.Name, cc.Prefab, function(a, n) {
                        a ? cc.error(a.message || a) : (t.addShowUICount("specialGrid"),
                        t.hideLoading(),
                        t.specialGridBundleNode = cc.instantiate(n),
                        t.specialGridBundleNode.parent = t.uiRoot,
                        t.specialGridBundleNode.active = !0,
                        t.specialGridBundleNode.getComponent("SpecialGridBundle").showUI(e),
                        t.specialGridBundleNode.zIndex = i.specialGridBundle.Layer)
                    }))
                }
            },
            openSignUI: function() {
                if (cc.Mgr.AudioMgr.playSFX("click"),
                cc.Mgr.game.needGuide)
                    cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("need-to-complete-guide"), "", this.uiRoot);
                else {
                    this.clearPrompt();
                    var e = this;
                    this.signUINode ? (this.addShowUICount("sign"),
                    this.signUINode.active = !0,
                    this.signUINode.getComponent("signUI").showUI(),
                    this.signUINode.zIndex = i.signUI.Layer) : (this.signUINode = null,
                    this.showLoading(),
                    cc.loader.loadRes("prefab/uiPrefab/" + i.signUI.Name, cc.Prefab, function(t, a) {
                        t ? cc.error(t.message || t) : (e.addShowUICount("sign"),
                        e.hideLoading(),
                        e.signUINode = cc.instantiate(a),
                        e.signUINode.parent = e.uiRoot,
                        e.signUINode.active = !0,
                        e.signUINode.getComponent("signUI").showUI(),
                        e.signUINode.zIndex = i.signUI.Layer)
                    }))
                }
            },
            openMissionUI: function() {
                if (cc.Mgr.AudioMgr.playSFX("click"),
                cc.Mgr.game.needGuide)
                    cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("need-to-complete-guide"), "", this.uiRoot);
                else {
                    this.clearPrompt();
                    var e = this;
                    this.missionUINode ? (this.addShowUICount("mission"),
                    this.missionUINode.active = !0,
                    this.missionUINode.getComponent("missionUI").showUI(),
                    this.missionUINode.zIndex = i.missionUI.Layer) : (this.missionUINode = null,
                    this.showLoading(),
                    cc.loader.loadRes("prefab/uiPrefab/" + i.missionUI.Name, cc.Prefab, function(t, a) {
                        t ? cc.error(t.message || t) : (e.addShowUICount("mission"),
                        e.hideLoading(),
                        e.missionUINode = cc.instantiate(a),
                        e.missionUINode.parent = e.uiRoot,
                        e.missionUINode.active = !0,
                        e.missionUINode.getComponent("missionUI").showUI(),
                        e.missionUINode.zIndex = i.missionUI.Layer)
                    }))
                }
            },
            openPaymentUI: function(e) {
                if (1 != cc.Mgr.Config.isGameSnacks || 1 != e)
                    if (cc.Mgr.AudioMgr.playSFX("click"),
                    cc.Mgr.game.needGuide)
                        cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("need-to-complete-guide"), "", this.uiRoot);
                    else {
                        this.clearPrompt();
                        var t = this;
                        this.paymentUINode ? (this.addShowUICount("payment"),
                        this.paymentUINode.active = !0,
                        this.paymentUINode.getComponent("PaymentUI").showUI(e),
                        this.paymentUINode.zIndex = i.paymentUI.Layer) : (this.paymentUINode = null,
                        this.showLoading(),
                        cc.loader.loadRes("prefab/uiPrefab/" + i.paymentUI.Name, cc.Prefab, function(a, n) {
                            a ? cc.error(a.message || a) : (t.addShowUICount("payment"),
                            t.hideLoading(),
                            t.paymentUINode = cc.instantiate(n),
                            t.paymentUINode.parent = t.uiRoot,
                            t.paymentUINode.active = !0,
                            t.paymentUINode.getComponent("PaymentUI").showUI(e),
                            t.paymentUINode.zIndex = i.paymentUI.Layer)
                        }))
                    }
            },
            openMaxLevelUI: function() {
                if (cc.Mgr.AudioMgr.playSFX("click"),
                cc.Mgr.game.needGuide)
                    cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("need-to-complete-guide"), "", this.uiRoot);
                else {
                    this.clearPrompt();
                    var e = this;
                    this.maxLevelNode ? (this.addShowUICount("maxLevel"),
                    this.maxLevelNode.active = !0,
                    this.maxLevelNode.getComponent("MaxLevel").showUI(),
                    this.maxLevelNode.zIndex = i.maxLevel.Layer) : (this.maxLevelNode = null,
                    this.showLoading(),
                    cc.loader.loadRes("prefab/uiPrefab/" + i.maxLevel.Name, cc.Prefab, function(t, a) {
                        t ? cc.error(t.message || t) : (e.addShowUICount("maxLevel"),
                        e.hideLoading(),
                        e.maxLevelNode = cc.instantiate(a),
                        e.maxLevelNode.parent = e.uiRoot,
                        e.maxLevelNode.active = !0,
                        e.maxLevelNode.getComponent("MaxLevel").showUI(),
                        e.maxLevelNode.zIndex = i.maxLevel.Layer)
                    }))
                }
            },
            openUpdateAvailable: function() {
                cc.Mgr.AudioMgr.playSFX("click"),
                this.clearPrompt();
                var e = this;
                this.updateAvailableNode ? (this.addShowUICount("updateAvailable"),
                this.updateAvailableNode.active = !0,
                this.updateAvailableNode.getComponent("UpdateAvailable").showUI(),
                this.updateAvailableNode.zIndex = i.updateAvailable.Layer) : (this.updateAvailableNode = null,
                this.showLoading(),
                cc.loader.loadRes("prefab/uiPrefab/" + i.updateAvailable.Name, cc.Prefab, function(t, a) {
                    t ? cc.error(t.message || t) : (e.addShowUICount("updateAvailable"),
                    e.hideLoading(),
                    e.updateAvailableNode = cc.instantiate(a),
                    e.updateAvailableNode.parent = e.uiRoot,
                    e.updateAvailableNode.active = !0,
                    e.updateAvailableNode.getComponent("UpdateAvailable").showUI(),
                    e.updateAvailableNode.zIndex = i.updateAvailable.Layer)
                }))
            },
            openEnjoyNature: function() {
                if (1 != cc.Mgr.Config.isGameSnacks)
                    if (cc.Mgr.AudioMgr.playSFX("click"),
                    cc.Mgr.game.needGuide)
                        cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("need-to-complete-guide"), "", this.uiRoot);
                    else {
                        this.clearPrompt();
                        var e = this;
                        this.enjoyNatureNode ? (this.addShowUICount("enjoyNature"),
                        this.enjoyNatureNode.active = !0,
                        this.enjoyNatureNode.getComponent("EnjoyNature").showUI(),
                        this.enjoyNatureNode.zIndex = i.enjoyNature.Layer) : (this.enjoyNatureNode = null,
                        this.showLoading(),
                        cc.loader.loadRes("prefab/uiPrefab/" + i.enjoyNature.Name, cc.Prefab, function(t, a) {
                            t ? cc.error(t.message || t) : (e.addShowUICount("enjoyNature"),
                            e.hideLoading(),
                            e.enjoyNatureNode = cc.instantiate(a),
                            e.enjoyNatureNode.parent = e.uiRoot,
                            e.enjoyNatureNode.active = !0,
                            e.enjoyNatureNode.getComponent("EnjoyNature").showUI(),
                            e.enjoyNatureNode.zIndex = i.enjoyNature.Layer)
                        }))
                    }
            },
            openVipUI: function(e) {
                if (cc.Mgr.AudioMgr.playSFX("click"),
                cc.Mgr.game.needGuide)
                    cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("need-to-complete-guide"), "", this.uiRoot);
                else {
                    this.clearPrompt();
                    var t = this;
                    this.vipNode ? (this.addShowUICount("vip"),
                    this.vipNode.active = !0,
                    this.vipNode.getComponent("Vip").showUI(e),
                    this.vipNode.zIndex = i.vipUI.Layer) : (this.vipNode = null,
                    this.showLoading(),
                    cc.loader.loadRes("prefab/uiPrefab/" + i.vipUI.Name, cc.Prefab, function(a, n) {
                        a ? cc.error(a.message || a) : (t.addShowUICount("vip"),
                        t.hideLoading(),
                        t.vipNode = cc.instantiate(n),
                        t.vipNode.parent = t.uiRoot,
                        t.vipNode.active = !0,
                        t.vipNode.getComponent("Vip").showUI(e),
                        t.vipNode.zIndex = i.vipUI.Layer)
                    }))
                }
            },
            openOfflineAssetsUI: function(e) {
                if (cc.Mgr.AudioMgr.playSFX("click"),
                cc.Mgr.game.needGuide)
                    cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("need-to-complete-guide"), "", this.uiRoot);
                else {
                    this.clearPrompt();
                    var t = this;
                    this.offlineAssetUINode ? (this.addShowUICount("offlineAssets"),
                    this.offlineAssetUINode.active = !0,
                    this.offlineAssetUINode.getComponent("offlineAssetUI").showUI(e),
                    this.offlineAssetUINode.zIndex = i.offlineAssetUI.Layer) : (this.offlineAssetUINode = null,
                    this.showLoading(),
                    cc.loader.loadRes("prefab/uiPrefab/" + i.offlineAssetUI.Name, cc.Prefab, function(a, n) {
                        a ? cc.error(a.message || a) : (t.addShowUICount("offlineAssets"),
                        t.hideLoading(),
                        t.offlineAssetUINode = cc.instantiate(n),
                        t.offlineAssetUINode.parent = t.uiRoot,
                        t.offlineAssetUINode.active = !0,
                        t.offlineAssetUINode.getComponent("offlineAssetUI").showUI(e),
                        t.offlineAssetUINode.zIndex = i.offlineAssetUI.Layer)
                    }))
                }
            },
            openGameInUI: function(e) {
                void 0 === e && (e = null),
                this.callback = e;
                var t = this;
                cc.loader.loadRes("prefab/uiPrefab/" + i.gameInUI.Name, cc.Prefab, function(e, a) {
                    e ? cc.error(e.message || e) : (t.GameInUINode = cc.instantiate(a),
                    t.GameInUINode.parent = t.uiRoot,
                    t.GameInUINode.active = !0,
                    t.GameInUINode.getComponent("InGameUI").init(),
                    t.GameInUINode.zIndex = i.gameInUI.Layer,
                    t.callback && t.callback())
                })
            },
            showJibEffect: function(e) {
                var t = this;
                cc.loader.loadRes("prefab/uiPrefab/jinbis", function(a, n) {
                    if (a)
                        cc.error(a.message || a);
                    else {
                        var c = cc.instantiate(n);
                        c.parent = t.uiRoot,
                        c.zIndex = i.jinbi.Layer,
                        c.getComponent("jinbiCtrl").showUI(e)
                    }
                })
            },
            showGemsEffect: function(e) {
                var t = this;
                cc.loader.loadRes("prefab/uiPrefab/gems", function(a, n) {
                    if (a)
                        cc.error(a.message || a);
                    else {
                        var c = cc.instantiate(n);
                        c.parent = t.uiRoot,
                        c.zIndex = i.jinbi.Layer,
                        c.getComponent("jinbiCtrl").showUI(e)
                    }
                })
            },
            openGuide: function() {
                var e = this;
                cc.loader.loadRes("prefab/uiPrefab/Guides", function(t, i) {
                    if (t)
                        cc.error(t.message || t);
                    else {
                        var a = cc.instantiate(i);
                        a.parent = e.uiRoot,
                        e.guideNode = a
                    }
                })
            },
            openUavUI: function() {
                cc.Mgr.AudioMgr.playSFX("click");
                var e = this;
                this.clearPrompt(),
                this.uavUINode ? (this.addShowUICount("uav"),
                this.uavUINode.active = !0,
                this.uavUINode.getComponent("uavUI").showUI(),
                this.uavUINode.zIndex = i.uavUI.Layer) : (this.uavUINode = null,
                this.showLoading(),
                cc.loader.loadRes("prefab/uiPrefab/" + i.uavUI.Name, cc.Prefab, function(t, a) {
                    t ? cc.error(t.message || t) : (e.addShowUICount("uav"),
                    e.hideLoading(),
                    e.uavUINode = cc.instantiate(a),
                    e.uavUINode.parent = e.uiRoot,
                    e.uavUINode.active = !0,
                    e.uavUINode.getComponent("uavUI").showUI(),
                    e.uavUINode.zIndex = i.uavUI.Layer)
                }))
            },
            openCompensationUI: function(e) {
                cc.Mgr.AudioMgr.playSFX("click");
                var t = this;
                this.clearPrompt(),
                this.compensationUINode ? (this.addShowUICount("compensation"),
                this.compensationUINode.active = !0,
                this.compensationUINode.getComponent("Compensation").showUI(e),
                this.compensationUINode.zIndex = i.compensationUI.Layer) : (this.compensationUINode = null,
                this.showLoading(),
                cc.loader.loadRes("prefab/uiPrefab/" + i.compensationUI.Name, cc.Prefab, function(a, n) {
                    a ? cc.error(a.message || a) : (t.addShowUICount("compensation"),
                    t.hideLoading(),
                    t.compensationUINode = cc.instantiate(n),
                    t.compensationUINode.parent = t.uiRoot,
                    t.compensationUINode.active = !0,
                    t.compensationUINode.getComponent("Compensation").showUI(e),
                    t.compensationUINode.zIndex = i.compensationUI.Layer)
                }))
            },
            gemNum: function() {
                return [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 20][cc.Mgr.game.currentExchangeCount]
            },
            getCoinNumber: function() {
                var e = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(a.ShopData, cc.Mgr.game.plantMaxLv)
                  , t = 0
                  , i = {}
                  , n = (t = 0,
                0);
                for (var s in e)
                    e[s] == c.ShopItemType.Money && (i[n] = cc.Mgr.game.plantMaxLv - t + 1,
                    n++),
                    t++;
                i[0] && i[1] || (i[0] = 2,
                i[1] = 1);
                var o = cc.Mgr.game.plantBuyRecord[i[0]]
                  , r = cc.Mgr.game.caculatePlantPrice(i[0], o)
                  , l = (o = cc.Mgr.game.plantBuyRecord[i[1]],
                cc.Mgr.game.caculatePlantPrice(i[1], o))
                  , g = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(a.PlantData, i[0])
                  , h = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(a.PlantData, i[1])
                  , d = 30;
                return g.gem > 0 && h.gem > 0 && (d = g.gem + h.gem),
                (r + l) / BigInt(d)
            },
            openExchangeCoinUI: function(e) {
                if (!(this.gemNum() > cc.Mgr.game.gems || cc.Mgr.game.currentExchangeCount >= cc.Mgr.game.exchangeCoinConfig.maxExchangeNum) || !e)
                    if (cc.Mgr.AudioMgr.playSFX("click"),
                    cc.Mgr.game.plantMaxLv < cc.Mgr.game.exchangeCoinConfig.openLevel)
                        this.showPrompt(cc.Mgr.Utils.getTranslation("exchange-tip"), "", this.uiRoot);
                    else {
                        this.clearPrompt();
                        var t = this;
                        this.exchangeUINode ? (this.addShowUICount("exchange"),
                        this.exchangeUINode.active = !0,
                        this.exchangeUINode.getComponent("exchangeCoinUI").showUI(),
                        this.exchangeUINode.zIndex = i.exchangeCoinUI.Layer) : (this.exchangeUINode = null,
                        this.showLoading(),
                        cc.loader.loadRes("prefab/uiPrefab/" + i.exchangeCoinUI.Name, cc.Prefab, function(e, a) {
                            e ? cc.error(e.message || e) : (t.addShowUICount("exchange"),
                            t.hideLoading(),
                            t.exchangeUINode = cc.instantiate(a),
                            t.exchangeUINode.parent = t.uiRoot,
                            t.exchangeUINode.active = !0,
                            t.exchangeUINode.getComponent("exchangeCoinUI").showUI(),
                            t.exchangeUINode.zIndex = i.exchangeCoinUI.Layer)
                        }))
                    }
            },
            openRecordUI: function() {
                this.clearPrompt(),
                cc.Mgr.AudioMgr.playSFX("click");
                var e = this;
                this.newRecordUINode ? (this.addShowUICount("record"),
                this.newRecordUINode.active = !0,
                this.newRecordUINode.getComponent("newRecordUI").showUI(),
                this.newRecordUINode.zIndex = i.newRecordUI.Layer) : (this.newRecordUINode = null,
                cc.loader.loadRes("prefab/uiPrefab/" + i.newRecordUI.Name, cc.Prefab, function(t, a) {
                    t ? cc.error(t.message || t) : (e.addShowUICount("record"),
                    e.newRecordUINode = cc.instantiate(a),
                    e.newRecordUINode.parent = e.uiRoot,
                    e.newRecordUINode.active = !0,
                    e.newRecordUINode.getComponent("newRecordUI").showUI(),
                    e.newRecordUINode.zIndex = i.newRecordUI.Layer)
                }))
            },
            openRankingUI: function() {
                if (cc.Mgr.AudioMgr.playSFX("click"),
                cc.Mgr.game.needGuide)
                    cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("need-to-complete-guide"), "", this.uiRoot);
                else if (!0 !== cc.Mgr.Config.isChina) {
                    this.clearPrompt();
                    var e = this;
                    this.rankingUINode ? (this.addShowUICount("ranking"),
                    this.rankingUINode.active = !0,
                    e.rankingUINode.getComponent("RankingUI").showUI(),
                    this.rankingUINode.zIndex = i.rankingUI.Layer) : (this.rankingUINode = null,
                    this.showLoading(),
                    cc.loader.loadRes("prefab/uiPrefab/" + i.rankingUI.Name, cc.Prefab, function(t, a) {
                        t ? cc.error(t.message || t) : (e.addShowUICount("ranking"),
                        e.hideLoading(),
                        e.rankingUINode = cc.instantiate(a),
                        e.rankingUINode.parent = e.uiRoot,
                        e.rankingUINode.active = !0,
                        e.rankingUINode.getComponent("RankingUI").showUI(),
                        e.rankingUINode.zIndex = i.rankingUI.Layer)
                    }))
                } else
                    cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("not-supported"), "", this.uiRoot)
            },
            update: function() {}
        });
        t.exports = s,
        cc._RF.pop()
    }
    , {
        DataType: "DataType",
        EffectType: "EffectType",
        MyEnum: "MyEnum",
        uiConfig: "uiConfig"
    }],
    UnlockTip: [function(e, t) {
        "use strict";
        cc._RF.push(t, "7332asFQ5dI7azgohNiqTy+", "UnlockTip"),
        cc.Class({
            extends: cc.Component,
            properties: {
                desLabel: cc.Label
            },
            start: function() {
                this.desLabel.string = cc.Mgr.Utils.getTranslation("guide-unlock-tip")
            },
            closeTip: function() {
                this.node.active = !1,
                this.node.destroy()
            }
        }),
        cc._RF.pop()
    }
    , {}],
    UpdateAvailable: [function(e, t) {
        "use strict";
        cc._RF.push(t, "1aed55OlqNCU41OoraL5fm7", "UpdateAvailable"),
        cc.Class({
            extends: cc.Component,
            properties: {
                des: cc.Label,
                content: cc.Node,
                blurBg: cc.Node,
                btnLabel: cc.Label,
                btnLabel2: cc.Label,
                title: cc.Node,
                title_zh: cc.Node,
                title_ja: cc.Node,
                title_ru: cc.Node
            },
            start: function() {
                this.des.string = cc.Mgr.Utils.getTranslation("updateAvailable-tip").format(cc.Mgr.Config.platform),
                this.btnLabel2.string = cc.Mgr.Utils.getTranslation("updateAvailable-update-now"),
                this.btnLabel.string = cc.Mgr.Utils.getTranslation("updateAvailable-next-time"),
                this.title.active = !1,
                this.title_zh.active = !1,
                this.title_ja.active = !1,
                this.title_ru.active = !1,
                "Japanese" === cc.Mgr.Config.language ? this.title_ja.active = !0 : "Simplified Chinese" === cc.Mgr.Config.language || "Traditional Chinese" === cc.Mgr.Config.language ? this.title_zh.active = !0 : "Russian" === cc.Mgr.Config.language ? this.title_ru.active = !0 : this.title.active = !0
            },
            updateNow: function() {
                if (!0 !== cc.Mgr.game.isFacebook)
                    switch (cc.sys.os) {
                    case cc.sys.OS_ANDROID:
                        jsb.reflection.callStaticMethod("org/cocos2dx/javascript/utils/Utils", "updateGame", "()V");
                        break;
                    case cc.sys.OS_IOS:
                        jsb.reflection.callStaticMethod("Utils", "updateGame")
                    }
            },
            showUI: function() {
                this.blurBg.opacity = 0,
                this.content.opacity = 0,
                this.content.setScale(.5),
                cc.tween(this.blurBg).to(.05, {
                    opacity: 255
                }).call().start(),
                cc.tween(this.content).to(.15, {
                    opacity: 255,
                    scale: 1
                }).start()
            },
            closeUI: function() {
                cc.Mgr.AudioMgr.playSFX("click");
                var e = this;
                cc.tween(this.blurBg).to(.15, {
                    opacity: 0
                }).start(),
                cc.tween(this.content).to(.15, {
                    opacity: 0,
                    scale: .5
                }).call(function() {
                    e.node.active = !1,
                    cc.Mgr.game.vipSaleTimer > Date.now() && !1 === cc.Mgr.game.isVIP ? cc.Mgr.UIMgr.openVipUI("enterGame") : cc.Mgr.GameCenterCtrl.startGame()
                }).start(),
                cc.Mgr.UIMgr.reduceShowUICount("updateAvailable")
            }
        }),
        cc._RF.pop()
    }
    , {}],
    UserDataMgr: [function(e, t) {
        "use strict";
        cc._RF.push(t, "d200aUEaNBB3IdNzh1nSm20", "UserDataMgr");
        var i = e("Config")
          , a = e("MyEnum")
          , n = cc.Class({
            extends: cc.Component,
            properties: {
                jsName: "userdata"
            },
            initData: function() {
                cc.Mgr.initData = !1;
                var e = cc.sys.localStorage.getItem(this.jsName);
                if (e = null == e || "" == e ? {} : JSON.parse(e),
                cc.Mgr.game.needGuide = e.needGuide = null == e.needGuide || e.needGuide,
                cc.Mgr.game.curGuide = e.curGuide = null == e.curGuide ? 0 : e.curGuide,
                cc.Mgr.game.curGuide <= 1 ? (cc.sys.localStorage.clear(),
                e = {},
                cc.Mgr.game.needGuide = e.needGuide = null == e.needGuide || e.needGuide,
                cc.Mgr.game.curGuide = e.curGuide = null == e.curGuide ? 0 : e.curGuide) : 3 == cc.Mgr.game.curGuide && (cc.Mgr.game.needGuide = !1),
                cc.Mgr.game.btnTipList = e.btnTipList = null == e.btnTipList ? [0, 0, 0] : e.btnTipList,
                cc.Mgr.game.UUID = e.UUID = null == e.UUID ? "" : e.UUID,
                cc.Mgr.game.isFirstEnter = e.isFirstEnter = null == e.isFirstEnter || e.isFirstEnter,
                cc.Mgr.game.firstTime = e.firstTime = null == e.firstTime ? cc.Mgr.Utils.GetSysTime() : e.firstTime,
                cc.Mgr.game.isPayingUser = e.isPayingUser = null != e.isPayingUser && e.isPayingUser,
                cc.Mgr.game.isZoomIn = e.isZoomIn = null == e.isZoomIn || e.isZoomIn,
                cc.Mgr.game.analytics_isFirst = !1,
                cc.Mgr.game.isFirstEnter ? (cc.Mgr.game.analytics_isFirst = !0,
                cc.Mgr.game.checkDoubleReward = !1,
                cc.Mgr.game.isFirstEnter = !1,
                cc.Mgr.game.sendFirstInstall = !0) : cc.Mgr.game.checkDoubleReward = !cc.Mgr.game.isPayingUser,
                cc.Mgr.game.refreshList = e.refreshList = null == e.refreshList ? {} : e.refreshList,
                !0 !== cc.Mgr.game.refreshList[cc.Mgr.Config.version] ? (cc.Mgr.game.localPriceList = null,
                cc.Mgr.game.localPriceValueList = null,
                cc.Mgr.game.refreshList[cc.Mgr.Config.version] = !0) : (cc.Mgr.game.localPriceList = e.localPriceList = null == e.localPriceList ? null : e.localPriceList,
                cc.Mgr.game.localPriceValueList = e.localPriceValueList = null == e.localPriceValueList ? null : e.localPriceValueList),
                cc.Mgr.game.version = e.version = null == e.version ? "EN" : e.version,
                null == e.paymentAdCountList || e.paymentAdCountList && e.paymentAdCountList.length < 9 ? cc.Mgr.game.paymentAdCountList = [1, 1, 1, 2, 2, 2, 3, 3, 3] : cc.Mgr.game.paymentAdCountList = e.paymentAdCountList,
                cc.Mgr.game.isFacebook = e.isFacebook = null == e.isFacebook ? cc.Mgr.Config.isFacebook : e.isFacebook,
                cc.Mgr.game.lastNotificationTimer = e.lastNotificationTimer = null == e.lastNotificationTimer ? 0 : e.lastNotificationTimer,
                cc.Mgr.game.notificationIndex = e.notificationIndex = null == e.notificationIndex ? 0 : e.notificationIndex,
                cc.Mgr.game.first_version = e.first_version = null == e.first_version ? cc.Mgr.Config.version : e.first_version,
                cc.Mgr.game.first_internal_version = cc.Mgr.game.first_version,
                cc.Mgr.game.rewarded_ct = e.rewarded_ct = null == e.rewarded_ct ? 0 : e.rewarded_ct,
                cc.Mgr.game.Interstitial_ct = e.Interstitial_ct = null == e.Interstitial_ct ? 0 : e.Interstitial_ct,
                cc.Mgr.game.banner_ct = e.banner_ct = null == e.banner_ct ? 0 : e.banner_ct,
                cc.Mgr.game.gem_gained_total = e.gem_gained_total = null == e.gem_gained_total ? 0 : e.gem_gained_total,
                cc.Mgr.game.isManualSetting_payingUser = e.isManualSetting_payingUser = null != e.isManualSetting_payingUser && e.isManualSetting_payingUser,
                cc.Mgr.game.isVIP = e.isVIP = null != e.isVIP && e.isVIP,
                cc.Mgr.game.vipExpire = e.vipExpire = null == e.vipExpire ? 0 : e.vipExpire,
                cc.Mgr.game.vipStartTimer = e.vipStartTimer = null == e.vipStartTimer ? 0 : e.vipStartTimer,
                cc.Mgr.game.vipDailyBonus = e.vipDailyBonus = null == e.vipDailyBonus || e.vipDailyBonus,
                cc.Mgr.game.paymentAdCount = e.paymentAdCount = e.paymentAdCount || 5,
                cc.Mgr.game.level = e.level = e.level || 1,
                cc.Mgr.game.compensation = e.compensation = null == e.compensation ? {} : e.compensation,
                null == e.uavAdsCount ? cc.Mgr.game.level <= 10 ? cc.Mgr.game.uavAdsCount = 5 : cc.Mgr.game.level <= 20 ? cc.Mgr.game.uavAdsCount = 5 : cc.Mgr.game.level <= 30 ? cc.Mgr.game.uavAdsCount = 5 : cc.Mgr.game.level <= 40 ? cc.Mgr.game.uavAdsCount = 5 : (cc.Mgr.game.level,
                cc.Mgr.game.uavAdsCount = 5) : cc.Mgr.game.uavAdsCount = e.uavAdsCount,
                cc.Mgr.game.uavAdsTimeCount = e.uavAdsTimeCount = null == e.uavAdsTimeCount ? 0 : e.uavAdsTimeCount,
                cc.Mgr.game.needShowUavTip = cc.Mgr.game.level <= 10,
                cc.Mgr.game.needUpdateMoneyInGame = e.needUpdateMoneyInGame = null == e.needUpdateMoneyInGame || e.needUpdateMoneyInGame,
                e.coin_gained_total) {
                    if (!0 === cc.Mgr.game.needUpdateMoneyInGame) {
                        e.coin_gained_total = Math.round(e.coin_gained_total);
                        var t = e.coin_gained_total.toLocaleString();
                        (t = t.replace(/[,]/g, "")).length > 30 && (e.coin_gained_total = t.substring(0, 30))
                    }
                    cc.Mgr.game.coin_gained_total = BigInt(e.coin_gained_total)
                } else
                    cc.Mgr.game.coin_gained_total = BigInt(0),
                    e.coin_gained_total = cc.Mgr.game.coin_gained_total.toString();
                if (e.onlineCoinNum) {
                    if (!0 === cc.Mgr.game.needUpdateMoneyInGame) {
                        e.onlineCoinNum = Math.round(e.onlineCoinNum);
                        var n = e.onlineCoinNum.toLocaleString();
                        (n = n.replace(/[,]/g, "")).length > 30 && (e.onlineCoinNum = n.substring(0, 30))
                    }
                    cc.Mgr.game.onlineCoinNum = BigInt(e.onlineCoinNum)
                } else
                    cc.Mgr.game.onlineCoinNum = BigInt(0),
                    e.onlineCoinNum = cc.Mgr.game.onlineCoinNum.toString();
                if (e.money) {
                    if (!0 === cc.Mgr.game.needUpdateMoneyInGame) {
                        e.money = Math.round(e.money);
                        var c = e.money.toLocaleString();
                        (c = c.replace(/[,]/g, "")).length > 30 && (e.money = c.substring(0, 30)),
                        cc.Mgr.game.needUpdateMoneyInGame = !1
                    }
                    cc.Mgr.game.money = BigInt(e.money)
                } else
                    cc.Mgr.game.money = i.initMoney,
                    e.money = cc.Mgr.game.money.toString();
                if (cc.Mgr.game.gems = e.gems = e.gems || 0,
                cc.Mgr.game.spinADResetTime = e.spinADResetTime = e.spinADResetTime || 0,
                cc.Mgr.game.spinADTimeCount = e.spinADTimeCount = e.spinADTimeCount || 0,
                cc.Mgr.game.plantMaxLv = e.plantMaxLv = e.plantMaxLv || 1,
                cc.Mgr.game.lastAdsGetPlantTime = e.lastAdsGetPlantTime = e.lastAdsGetPlantTime || 0,
                cc.Mgr.game.tipBuyTimes = e.tipBuyTimes = e.tipBuyTimes || 0,
                cc.Mgr.game.needShowExchangeCoinCount = e.needShowExchangeCoinCount = e.needShowExchangeCoinCount || 0,
                cc.Mgr.game.currentExchangeCount = e.currentExchangeCount = e.currentExchangeCount || 0,
                cc.Mgr.game.unlockSpecialGrid = e.unlockSpecialGrid = null != e.unlockSpecialGrid && e.unlockSpecialGrid,
                cc.Mgr.game.removeAd = e.removeAd = null != e.removeAd && e.removeAd,
                cc.Mgr.game.offlineDouble = e.offlineDouble = null != e.offlineDouble && e.offlineDouble,
                cc.Mgr.game.updateUsersDataRecord = e.updateUsersDataRecord = null == e.updateUsersDataRecord ? {} : e.updateUsersDataRecord,
                cc.Mgr.game.session_ct = e.session_ct = null == e.session_ct ? 0 : e.session_ct,
                cc.Mgr.game.session_ct++,
                cc.Mgr.game.ltv = e.ltv = null == e.ltv ? 0 : e.ltv,
                cc.Mgr.game.showStarterBundleEffectFlag = e.showStarterBundleEffectFlag = null != e.showStarterBundleEffectFlag,
                cc.Mgr.game.first_daily = e.first_daily = null == e.first_daily || e.first_daily,
                cc.Mgr.game.hasShowLevel8 = e.hasShowLevel8 = null != e.hasShowLevel8 && e.hasShowLevel8,
                cc.Mgr.game.hasShowLevel14 = e.hasShowLevel14 = null != e.hasShowLevel14 && e.hasShowLevel14,
                cc.Mgr.game.hasShowLevel28 = e.hasShowLevel28 = null != e.hasShowLevel28 && e.hasShowLevel28,
                cc.Mgr.game.rateState = e.rateState = null == e.rateState ? 0 : e.rateState,
                cc.Mgr.game.hasShowRate = e.hasShowRate = null != e.hasShowRate && e.rateState,
                e.plantBuyRecord || cc.Mgr.game.resetplantBuyRecord(),
                cc.Mgr.game.plantBuyRecord = e.plantBuyRecord = e.plantBuyRecord || cc.Mgr.game.plantBuyRecord,
                !e.dailyMissions) {
                    e.dailyMissions = [];
                    for (var s = 0; s < i.missionDataList.length; s++) {
                        var o = i.missionDataList[s]
                          , r = {};
                        r.id = o.id,
                        r.checkType = o.checkType,
                        r.misType = o.misType,
                        r.checkNum = o.checkNum,
                        r.progress = o.progress,
                        r.checklv = null == o.checklv || "" == o.checklv ? 0 : o.checklv,
                        r.rewardType = o.rewardType,
                        r.claimed = 0,
                        e.dailyMissions.push(r)
                    }
                }
                if (cc.Mgr.game.dailyMissions = e.dailyMissions,
                null == cc.Mgr.game.dailyMissions[4] || "" == cc.Mgr.game.dailyMissions[4]) {
                    var l = i.missionDataList[4]
                      , g = {};
                    g.id = l.id,
                    g.checklv = l.checklv,
                    g.checkType = l.checkType,
                    g.misType = l.misType,
                    g.checkNum = l.checkNum,
                    g.progress = l.progress,
                    g.rewardType = l.rewardType,
                    g.claimed = 0,
                    cc.Mgr.game.dailyMissions[4] = e.dailyMissions[4] = g
                }
                if (!e.achievementProgress) {
                    e.achievementProgress = [];
                    for (var h = 0; h < i.achieveDataList.length; h++) {
                        var d = i.achieveDataList[h]
                          , u = {};
                        u.id = d.id,
                        u.checkType = d.checkType,
                        u.level = d.level,
                        u.checklv = d.checklv,
                        u.progress = d.progress,
                        u.finished = 0,
                        e.achievementProgress.push(u)
                    }
                }
                if (cc.Mgr.game.achievementProgress = e.achievementProgress,
                this.claimedColumn = e.claimedColumn = e.claimedColumn || [],
                cc.Mgr.game.dronePot = e.dronePot = e.dronePot || [],
                cc.Mgr.game.turntablePot = e.turntablePot = e.turntablePot || [],
                cc.Mgr.game.shopBuyPot = e.shopBuyPot = e.shopBuyPot || [],
                !e.plantsOwn) {
                    e.plantsOwn = [];
                    for (var p = 0; p < cc.Mgr.Config.allPlantCount; p++) {
                        var m = {};
                        m.lv = p + 1,
                        m.ownNum = 0,
                        e.plantsOwn.push(m)
                    }
                }
                cc.Mgr.game.plantsOwn = e.plantsOwn;
                var f = [3069e3, 1767e3, 344163, 73785, 10560, 1500, 100, 1, 1, 0, 0, 0, -1];
                if (cc.Mgr.game.hasLockGrid = !1,
                null == e.plantsPK) {
                    e.plantsPK = [];
                    for (var M = 0; M < f.length; M++) {
                        var v = {}
                          , b = f[M];
                        b > 1 ? (v.type = a.GridState.lock,
                        v.level = b) : 1 === b ? (v.type = a.GridState.plant,
                        v.level = b) : v.type = -1 === b ? a.GridState.vip : a.GridState.none,
                        v.index = M,
                        e.plantsPK.push(v)
                    }
                } else
                    for (var y = 0; y < e.plantsPK.length; y++)
                        if (e.plantsPK[y].type === a.GridState.lock) {
                            cc.Mgr.game.hasLockGrid = !0;
                            break
                        }
                cc.Mgr.game.needShowBanner = cc.Mgr.game.plantMaxLv >= 6,
                cc.Mgr.game.needShowInterstitial = cc.Mgr.game.plantMaxLv >= 6,
                cc.Mgr.game.openSpecialGridCount = e.openSpecialGridCount = null == e.openSpecialGridCount ? 0 : e.openSpecialGridCount,
                cc.Mgr.game.openRemoveAdCount = e.openRemoveAdCount = null == e.openRemoveAdCount ? 0 : e.openRemoveAdCount,
                cc.Mgr.game.openRemoveAdCount_interstitial = e.openRemoveAdCount_interstitial = null == e.openRemoveAdCount_interstitial ? 0 : e.openRemoveAdCount_interstitial,
                cc.Mgr.game.specialGridStartTimer = e.specialGridStartTimer = null == e.specialGridStartTimer ? 0 : e.specialGridStartTimer,
                cc.Mgr.game.removeAdStartTimer = e.removeAdStartTimer = null == e.removeAdStartTimer ? 0 : e.removeAdStartTimer,
                cc.Mgr.game.coinBundleStartTimer = e.coinBundleStartTimer = null == e.coinBundleStartTimer ? 0 : e.coinBundleStartTimer,
                cc.Mgr.game.coinBundleFlag = e.coinBundleFlag = null == e.coinBundleFlag || e.coinBundleFlag,
                cc.Mgr.game.setLanguageManually = e.setLanguageManually = null == e.setLanguageManually ? "" : e.setLanguageManually,
                cc.Mgr.game.vipSaleTimer = e.vipSaleTimer = null == e.vipSaleTimer ? 0 : e.vipSaleTimer,
                cc.Mgr.game.vipSaleTimer < Date.now() && (cc.Mgr.game.vipSaleTimer = 0),
                cc.Mgr.game.vipSaleTimer > 0 || cc.Mgr.game.isVIP ? (cc.Mgr.game.vipCloseCount = 0,
                cc.Mgr.game.vipEnterGameCount = 0) : (cc.Mgr.game.vipCloseCount = e.vipCloseCount = null == e.vipCloseCount ? 0 : e.vipCloseCount,
                cc.Mgr.game.vipEnterGameCount = e.vipEnterGameCount = null == e.vipEnterGameCount ? 0 : e.vipEnterGameCount),
                cc.Mgr.game.plantsPK = e.plantsPK,
                e.freeFlag || (e.freeFlag = {},
                e.freeFlag.TurnTable = !0),
                cc.Mgr.game.freeFlag = e.freeFlag,
                e.lastPlayTime ? cc.Mgr.game.days_inactive = cc.Mgr.Utils.getDays(cc.Mgr.Utils.GetSysTime()) - cc.Mgr.Utils.getDays(e.lastPlayTime) : cc.Mgr.game.days_inactive = 1,
                cc.Mgr.game.days_installed = cc.Mgr.Utils.getDays(cc.Mgr.Utils.GetSysTime()) - cc.Mgr.Utils.getDays(e.firstTime),
                this.lastPlayTime = e.lastPlayTime = e.lastPlayTime || cc.Mgr.Utils.GetSysTime(),
                cc.Mgr.game.lastOfflineTime = e.lastOfflineTime = null == e.lastOfflineTime ? this.lastPlayTime : e.lastOfflineTime,
                cc.Mgr.game.days_engaged = e.days_engaged = null == e.days_engaged ? 1 : e.days_engaged,
                cc.Mgr.Utils.getDays(cc.Mgr.Utils.GetSysTime()) - cc.Mgr.Utils.getDays(cc.Mgr.UserDataMgr.lastPlayTime) >= 1 && cc.Mgr.game.days_engaged++,
                cc.Mgr.game.spinUseGemTime = e.spinUseGemTime = e.spinUseGemTime || 0,
                cc.Mgr.game.lastSignDate = e.lastSignDate = e.lastSignDate || 0,
                cc.Mgr.game.hasSignDayNum = e.hasSignDayNum = e.hasSignDayNum || 0,
                cc.Mgr.game.doubleBtnIntervalTime = e.doubleBtnIntervalTime = e.doubleBtnIntervalTime || 0,
                cc.Mgr.game.vipdiscount = e.vipdiscount = null == e.vipdiscount ? null : e.vipdiscount,
                cc.Mgr.game.vipdiscount = !0,
                cc.Mgr.game.ab_countdown = e.ab_countdown = null == e.ab_countdown ? null : e.ab_countdown,
                cc.Mgr.game.ab_countdown = "control",
                cc.sys.localStorage.setItem(this.jsName, JSON.stringify(e)),
                cc.Mgr.initData = !0
            },
            SaveUserData: function(e) {
                if (e)
                    cc.sys.localStorage.setItem(this.jsName, JSON.stringify(e));
                else {
                    var t = {};
                    t.UUID = cc.Mgr.game.UUID,
                    t.btnTipList = cc.Mgr.game.btnTipList,
                    t.curGuide = cc.Mgr.game.curGuide,
                    t.needGuide = cc.Mgr.game.needGuide,
                    t.level = cc.Mgr.game.level,
                    t.isManualSetting_payingUser = cc.Mgr.game.isManualSetting_payingUser,
                    t.isVIP = cc.Mgr.game.isVIP,
                    t.vipExpire = cc.Mgr.game.vipExpire,
                    t.vipStartTimer = cc.Mgr.game.vipStartTimer,
                    t.vipDailyBonus = cc.Mgr.game.vipDailyBonus,
                    t.isPayingUser = cc.Mgr.game.isPayingUser,
                    t.isZoomIn = cc.Mgr.game.isZoomIn,
                    t.isFirstEnter = cc.Mgr.game.isFirstEnter,
                    t.paymentAdCount = cc.Mgr.game.paymentAdCount,
                    t.money = cc.Mgr.game.money.toString(),
                    t.gems = cc.Mgr.game.gems,
                    t.spinADResetTime = cc.Mgr.game.spinADResetTime,
                    t.spinADTimeCount = cc.Mgr.game.spinADTimeCount,
                    t.plantMaxLv = cc.Mgr.game.plantMaxLv,
                    t.plantBuyRecord = cc.Mgr.game.plantBuyRecord,
                    t.dailyMissions = cc.Mgr.game.dailyMissions,
                    t.achievementProgress = cc.Mgr.game.achievementProgress,
                    t.claimedColumn = this.claimedColumn,
                    t.needShowExchangeCoinCount = cc.Mgr.game.needShowExchangeCoinCount,
                    t.currentExchangeCount = cc.Mgr.game.currentExchangeCount,
                    t.lastOfflineTime = cc.Mgr.game.lastOfflineTime,
                    t.lastNotificationTimer = cc.Mgr.game.lastNotificationTimer,
                    t.notificationIndex = cc.Mgr.game.notificationIndex,
                    t.unlockSpecialGrid = cc.Mgr.game.unlockSpecialGrid,
                    t.removeAd = cc.Mgr.game.removeAd,
                    t.offlineDouble = cc.Mgr.game.offlineDouble,
                    t.updateUsersDataRecord = cc.Mgr.game.updateUsersDataRecord,
                    t.uavAdsCount = cc.Mgr.game.uavAdsCount,
                    t.uavAdsTimeCount = cc.Mgr.game.uavAdsTimeCount,
                    t.rateState = cc.Mgr.game.rateState,
                    t.hasShowRate = cc.Mgr.game.hasShowRate,
                    t.session_ct = cc.Mgr.game.session_ct,
                    t.ltv = cc.Mgr.game.ltv,
                    t.days_engaged = cc.Mgr.game.days_engaged,
                    t.rewarded_ct = cc.Mgr.game.rewarded_ct,
                    t.Interstitial_ct = cc.Mgr.game.Interstitial_ct,
                    t.banner_ct = cc.Mgr.game.banner_ct,
                    t.first_daily = cc.Mgr.game.first_daily,
                    t.coin_gained_total = cc.Mgr.game.coin_gained_total.toString(),
                    t.gem_gained_total = cc.Mgr.game.gem_gained_total,
                    t.showStarterBundleEffectFlag = cc.Mgr.game.showStarterBundleEffectFlag,
                    t.spinUseGemTime = cc.Mgr.game.spinUseGemTime,
                    t.dronePot = cc.Mgr.game.getDronePot(),
                    t.turntablePot = cc.Mgr.game.getTurntablePot(),
                    t.shopBuyPot = cc.Mgr.game.getShopBuyPot(),
                    t.plantsOwn = cc.Mgr.game.plantsOwn,
                    t.plantsPK = cc.Mgr.game.getPlantsPK(),
                    t.freeFlag = cc.Mgr.game.freeFlag,
                    t.lastPlayTime = cc.Mgr.Utils.GetSysTime(),
                    t.lastAdsGetPlantTime = cc.Mgr.game.lastAdsGetPlantTime,
                    t.tipBuyTimes = cc.Mgr.game.tipBuyTimes,
                    t.onlineCoinNum = cc.Mgr.game.onlineCoinNum.toString(),
                    t.lastSignDate = cc.Mgr.game.lastSignDate,
                    t.hasSignDayNum = cc.Mgr.game.hasSignDayNum,
                    t.hasShowLevel8 = cc.Mgr.game.hasShowLevel8,
                    t.hasShowLevel14 = cc.Mgr.game.hasShowLevel14,
                    t.hasShowLevel28 = cc.Mgr.game.hasShowLevel28,
                    t.first_version = cc.Mgr.game.first_version,
                    t.firstTime = cc.Mgr.game.firstTime,
                    t.compensation = cc.Mgr.game.compensation,
                    t.openSpecialGridCount = cc.Mgr.game.openSpecialGridCount,
                    t.specialGridStartTimer = cc.Mgr.game.specialGridStartTimer,
                    t.removeAdStartTimer = cc.Mgr.game.removeAdStartTimer,
                    t.coinBundleStartTimer = cc.Mgr.game.coinBundleStartTimer,
                    t.coinBundleFlag = cc.Mgr.game.coinBundleFlag,
                    t.localPriceList = cc.Mgr.game.localPriceList,
                    t.localPriceValueList = cc.Mgr.game.localPriceValueList,
                    t.version = cc.Mgr.game.version,
                    t.refreshList = cc.Mgr.game.refreshList,
                    t.paymentAdCountList = cc.Mgr.game.paymentAdCountList,
                    t.doubleBtnIntervalTime = cc.Mgr.game.doubleBtnIntervalTime,
                    t.isFacebook = cc.Mgr.game.isFacebook,
                    t.setLanguageManually = cc.Mgr.game.setLanguageManually,
                    t.vipSaleTimer = cc.Mgr.game.vipSaleTimer,
                    t.vipCloseCount = cc.Mgr.game.vipCloseCount,
                    t.vipEnterGameCount = cc.Mgr.game.vipEnterGameCount,
                    t.needUpdateMoneyInGame = cc.Mgr.game.needUpdateMoneyInGame,
                    t.vipdiscount = cc.Mgr.game.vipdiscount,
                    t.ab_countdown = cc.Mgr.game.ab_countdown,
                    cc.sys.localStorage.setItem(this.jsName, JSON.stringify(t)),
                    null != cc.Mgr.iCloud.gameData ? cc.Mgr.iCloud.gameData.UUID == cc.Mgr.game.UUID && cc.Mgr.iCloud.updateData(t) : cc.Mgr.iCloud.updateData(t)
                }
            }
        });
        t.exports = n,
        cc._RF.pop()
    }
    , {
        Config: "Config",
        MyEnum: "MyEnum"
    }],
    Utils: [function(e, t) {
        "use strict";
        cc._RF.push(t, "8fde9BkXa9PRJVejPBOOoTq", "Utils");
        var i = e("DataType")
          , a = [4, 7, 11, 15, 19, 23, 27, 31, 35, 39, 43, 47, 51, 55, 59, 63, 67]
          , n = ["CgkIooHd4-wCEAIQAQ", "CgkIooHd4-wCEAIQAg", "CgkIooHd4-wCEAIQAw", "CgkIooHd4-wCEAIQBA", "CgkIooHd4-wCEAIQBQ", "CgkIooHd4-wCEAIQBg", "CgkIooHd4-wCEAIQBw", "CgkIooHd4-wCEAIQCA", "CgkIooHd4-wCEAIQCQ", "CgkIooHd4-wCEAIQCg", "CgkIooHd4-wCEAIQCw", "CgkIooHd4-wCEAIQDA", "CgkIooHd4-wCEAIQDQ", "CgkIooHd4-wCEAIQDg", "CgkIooHd4-wCEAIQDw", "CgkIooHd4-wCEAIQEA", "CgkIooHd4-wCEAIQEQ"]
          , c = ["CgkIooHd4-wCEAIQFA", "CgkIooHd4-wCEAIQFQ", "CgkIooHd4-wCEAIQFg", "CgkIooHd4-wCEAIQFw", "CgkIooHd4-wCEAIQGA", "CgkIooHd4-wCEAIQGQ", "CgkIooHd4-wCEAIQGg", "CgkIooHd4-wCEAIQGw", "CgkIooHd4-wCEAIQHA", "CgkIooHd4-wCEAIQHQ", "CgkIooHd4-wCEAIQHg", "CgkIooHd4-wCEAIQHw", "CgkIooHd4-wCEAIQIA", "CgkIooHd4-wCEAIQIQ", "CgkIooHd4-wCEAIQIg", "CgkIooHd4-wCEAIQIw", "CgkIooHd4-wCEAIQJA"]
          , s = ["CgkIooHd4-wCEAIQJQ", "CgkIooHd4-wCEAIQJg", "CgkIooHd4-wCEAIQJw", "CgkIooHd4-wCEAIQKA", "CgkIooHd4-wCEAIQKQ", "CgkIooHd4-wCEAIQKg", "CgkIooHd4-wCEAIQKw", "CgkIooHd4-wCEAIQLA", "CgkIooHd4-wCEAIQLQ", "CgkIooHd4-wCEAIQLg", "CgkIooHd4-wCEAIQLw", "CgkIooHd4-wCEAIQMA", "CgkIooHd4-wCEAIQMQ", "CgkIooHd4-wCEAIQMg", "CgkIooHd4-wCEAIQMw", "CgkIooHd4-wCEAIQNA", "CgkIooHd4-wCEAIQNQ"]
          , o = ["CgkIooHd4-wCEAIQNg", "CgkIooHd4-wCEAIQNw", "CgkIooHd4-wCEAIQOA", "CgkIooHd4-wCEAIQOQ", "CgkIooHd4-wCEAIQOg", "CgkIooHd4-wCEAIQOw", "CgkIooHd4-wCEAIQPA", "CgkIooHd4-wCEAIQPQ", "CgkIooHd4-wCEAIQPg", "CgkIooHd4-wCEAIQPw", "CgkIooHd4-wCEAIQQA", "CgkIooHd4-wCEAIQQQ", "CgkIooHd4-wCEAIQQg", "CgkIooHd4-wCEAIQQw", "CgkIooHd4-wCEAIQRA", "CgkIooHd4-wCEAIQRQ", "CgkIooHd4-wCEAIQRg"]
          , r = cc.Class({
            extends: cc.Component,
            statics: {
                init: function() {
                    String.prototype.format || (String.prototype.format = function() {
                        var e = arguments;
                        return this.replace(/{(\d+)}/g, function(t, i) {
                            return void 0 !== e[i] ? e[i] : ""
                        })
                    }
                    )
                },
                FormatNumToTime: function(e, t) {
                    void 0 === t && (t = !1);
                    var i = Math.floor(e / 3600)
                      , a = Math.floor((e - 3600 * i) / 60)
                      , n = Math.floor(e - 3600 * i - 60 * a)
                      , c = i
                      , s = a
                      , o = n;
                    i < 10 && (c = "0" + i),
                    a < 10 && (s = "0" + a),
                    n < 10 && (o = "0" + n);
                    var r = c + ":" + s + ":" + o;
                    return t && (r = s + ":" + o),
                    i < 1 && (r = s + ":" + o),
                    r
                },
                GetSysTime: function() {
                    return Math.round(Date.now() / 1e3)
                },
                getDays: function(e) {
                    return Math.floor(e / 3600 / 24)
                },
                FormatNum: function(e) {
                    for (var t = "", i = (e += "").length - 1, a = 1; i >= 0; i--,
                    a++)
                        t += a % 3 != 0 || 0 == i ? e[i] : e[i] + ",";
                    var n = t.split("").reverse().join("");
                    return "," == n[0] ? n.splice(0, 1) : n
                },
                getTranslationLocal: function(e) {
                    for (var t in cc.director.NoticeText)
                        if (t.toString() == e)
                            return cc.director.NoticeText[t];
                    return "\u7ffb\u8bd1\u5b57\u6bb5null"
                },
                getTranslation: function(e, t) {
                    void 0 === t && (t = []);
                    var a = e
                      , n = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(i.Translation, e);
                    if ("" == n || null == n)
                        return e;
                    switch (cc.Mgr.Config.language) {
                    case "English":
                    case "Japanese":
                    case "Simplified Chinese":
                    case "Traditional Chinese":
                    case "Russian":
                        a = n
                    }
                    switch (t.length) {
                    case 0:
                        a = a;
                        break;
                    case 1:
                        a = a.format(t[0]);
                        break;
                    case 2:
                        a = a.format(t[0], t[1]);
                        break;
                    case 3:
                        a = a.format(t[0], t[1], t[2]);
                        break;
                    case 4:
                        a = a.format(t[0], t[1], t[2], t[3]);
                        break;
                    case 5:
                        a = a.format(t[0], t[1], t[2], t[3], t[4])
                    }
                    return a
                },
                decodeUnicode: function(e) {
                    return e = e.replace(/\\/g, "%"),
                    unescape(e)
                },
                hexToColor: function(e) {
                    e = e.replace(/^#?/, "0x");
                    var t = parseInt(e)
                      , i = t >> 16
                      , a = (65280 & t) >> 8
                      , n = 255 & t;
                    return cc.color(i, a, n)
                },
                pAdd: function(e, t) {
                    return cc.v2(e.x + t.x, e.y + t.y)
                },
                pDistance: function(e, t) {
                    var i = Math.abs(t.x - e.x)
                      , a = Math.abs(t.y - e.y);
                    return Math.sqrt(Math.pow(i, 2) + Math.pow(a, 2))
                },
                calculateAngle: function(e, t) {
                    var i = t.y - e.y
                      , a = t.x - e.x
                      , n = Math.abs(i / a)
                      , c = 180 * Math.atan(n) / Math.PI
                      , s = 0;
                    return i > 0 && a < 0 ? s = c - 90 : i > 0 && a > 0 ? s = 90 - c : i < 0 && a < 0 ? s = -c - 90 : i < 0 && a > 0 ? s = c + 90 : 0 == i && 0 != a ? s = a < 0 ? -90 : 90 : 0 == a && 0 != i && (s = i < 0 ? 180 : 0),
                    s
                },
                scientificNotationToString: function(e) {
                    var t = String(e);
                    if (!/e/.test(t))
                        return t;
                    var i = !0;
                    /e-/.test(t) && (i = !1);
                    var a = Number(t.match(/\d+$/)[0])
                      , n = t.match(/^[\d\.]+/)[0].replace(/\./, "");
                    return i ? n.padEnd(a + 1, 0) : n.padStart(a + n.length, 0).replace(/^0/, "0.")
                },
                formatLoclPrice: function(e) {
                    var t = (e = e.split(",").join("")).charAt(0);
                    e = e.split(t).join("");
                    var i = parseFloat(e);
                    return t + this.getNumStr(i)
                },
                numberFormat2: function(e) {
                    var t, i = {};
                    return e.toString().length <= 6 ? i = this.numberFormat(e.toString()) : (t = Math.floor((e.toString().length - 1) / 3),
                    i.value = (Number((e * BigInt(100) / BigInt(Math.pow(1e3, t))).toString()) / 100).toFixed(2),
                    i.unit = ["", "K", "M", "G", "T", "P", "E", "Z", "Y", "aa", "bb", "cc", "dd", "ee", "ff", "gg", "hh", "ii", "jj", "kk", "ll", "mm", "nn", "oo", "pp", "qq", "rr", "ss", "tt", "uu", "vv", "ww", "xx", "yy", "zz"][t]),
                    i
                },
                getNumStr2: function(e) {
                    var t = this.numberFormat2(e);
                    if ("" === t.unit)
                        return "" + t.value;
                    var i = "" + t.value
                      , a = i.indexOf(".");
                    if (a >= 0 && 3 !== a)
                        for (i = i.substring(0, 4); i.length > 0; ) {
                            var n = i[i.length - 1];
                            if ("0" != n && "." != n)
                                break;
                            if (i = i.substring(0, i.length - 1),
                            "." === n)
                                break
                        }
                    else
                        i = i.substring(0, 3);
                    return i + t.unit
                },
                numberFormat: function(e) {
                    var t, i = {};
                    return e < 1e3 ? (i.value = e,
                    i.unit = "") : (t = Math.floor(Math.log(e) / Math.log(1e3)),
                    i.value = (e / Math.pow(1e3, t)).toFixed(2),
                    i.unit = ["", "K", "M", "G", "T", "P", "E", "Z", "Y", "aa", "bb", "cc", "dd", "ee", "ff", "gg", "hh", "ii", "jj", "kk", "ll", "mm", "nn", "oo", "pp", "qq", "rr", "ss", "tt", "uu", "vv", "ww", "xx", "yy", "zz"][t]),
                    i
                },
                getNumStr: function(e) {
                    var t = this.numberFormat(e)
                      , i = "" + t.value
                      , a = i.indexOf(".");
                    if (a >= 0 && 3 !== a)
                        for (i = i.substring(0, 4); i.length > 0; ) {
                            var n = i[i.length - 1];
                            if ("0" != n && "." != n)
                                break;
                            if (i = i.substring(0, i.length - 1),
                            "." === n)
                                break
                        }
                    else
                        i = i.substring(0, 3);
                    return i + t.unit
                },
                getArrayItems: function(e, t) {
                    for (var i = new Array, a = 0; a < e.length; a++)
                        i.push(e[a]);
                    for (var n = new Array, c = 0; c < t && i.length > 0; c++) {
                        var s = Math.floor(Math.random() * i.length);
                        n[c] = i[s],
                        i.splice(s, 1)
                    }
                    return n
                },
                getArrayItemsAndChangeArr: function(e, t) {
                    for (var i = new Array, a = 0; a < t && e.length > 0; a++) {
                        var n = Math.floor(Math.random() * e.length);
                        i[a] = e[n],
                        e.splice(n, 1)
                    }
                    return i
                },
                dateFormat: function(e, t) {
                    var i, a = new Date(1e3 * t), n = {
                        "Y+": a.getFullYear().toString(),
                        "m+": (a.getMonth() + 1).toString(),
                        "d+": a.getDate().toString(),
                        "H+": a.getHours().toString(),
                        "M+": a.getMinutes().toString(),
                        "S+": a.getSeconds().toString()
                    };
                    for (var c in n)
                        (i = new RegExp("(" + c + ")").exec(e)) && (e = e.replace(i[1], 1 == i[1].length ? n[c] : n[c].padStart(i[1].length, "0")));
                    return e
                },
                setUUID: function() {
                    this.getDeviceId(),
                    "" === cc.Mgr.game.UUID && (cc.Mgr.game.UUID = this.generateUUID()),
                    !0 !== cc.Mgr.game.isFacebook && (cc.sys.os === cc.sys.OS_ANDROID ? jsb.reflection.callStaticMethod("org/cocos2dx/javascript/tea/TEA", "setUUID", "(Ljava/lang/String;)V", cc.Mgr.game.UUID) : cc.sys.os === cc.sys.OS_IOS && jsb.reflection.callStaticMethod("TEA", "setUUID:", cc.Mgr.game.UUID))
                },
                getDeviceId: function() {
                    this.deviceId = "",
                    !0 !== cc.Mgr.game.isFacebook && (cc.sys.os === cc.sys.OS_ANDROID ? this.deviceId = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/utils/Utils", "getDeviceId", "()Ljava/lang/String;") : cc.sys.os === cc.sys.OS_IOS && (this.deviceId = jsb.reflection.callStaticMethod("Utils", "getDeviceId")))
                },
                generateUUID: function() {
                    for (var e = [], t = "0123456789abcdef", i = "" !== this.deviceId ? this.deviceId.length > 16 ? this.deviceId.substring(0, 16) : this.deviceId + t.substring(0, 16 - this.deviceId.length + 1) : t, a = 0; a < 36; a++)
                        e[a] = i.substr(Math.floor(16 * Math.random()), 1);
                    return e[14] = "4",
                    e[19] = i.substr(3 & e[19] | 8, 1),
                    e[8] = e[13] = e[18] = e[23] = "-",
                    e.join("")
                },
                copyID: function() {
                    !0 !== cc.Mgr.game.isFacebook && (cc.sys.os === cc.sys.OS_ANDROID ? jsb.reflection.callStaticMethod("org/cocos2dx/javascript/utils/Utils", "copyID", "(Ljava/lang/String;)V", cc.Mgr.game.UUID) : cc.sys.os === cc.sys.OS_IOS && jsb.reflection.callStaticMethod("Utils", "copyID:", cc.Mgr.game.UUID))
                },
                openRating: function() {
                    !0 !== cc.Mgr.game.isFacebook && (cc.sys.os === cc.sys.OS_ANDROID ? jsb.reflection.callStaticMethod("org/cocos2dx/javascript/utils/Utils", "openRating", "()V") : cc.sys.os === cc.sys.OS_IOS && jsb.reflection.callStaticMethod("Utils", "openRating"))
                },
                getDate9: function(e) {
                    var t = (new Date).getTimezoneOffset()
                      , i = (new Date).getTime() + 6e4 * t - -324e5
                      , a = new Date(i);
                    return e ? a.toDateString() + " " + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds() : a.toDateString()
                },
                checkUserData: function() {
                    var e;
                    if (this.preUpdateData = null,
                    "" != (e = cc.Mgr.abTest.getABtest("users_data"))) {
                        var t = JSON.parse(e);
                        if (null != t)
                            for (var i = 0; i < t.content.length; i++)
                                for (var a = t.content[i].id, n = t.content[i].users, c = 0; c < n.length; c++) {
                                    var s = n[c];
                                    if (s.id === cc.Mgr.game.UUID && null == cc.Mgr.game.updateUsersDataRecord[a])
                                        for (var o in null == this.preUpdateData && (this.preUpdateData = {},
                                        this.preUpdateData.addGem = 0),
                                        this.preUpdateData[a] = {},
                                        s)
                                            this.preUpdateData[a][o] = s[o],
                                            "addGem" === o && (this.preUpdateData.addGem += s[o])
                                }
                    }
                },
                updateUsersData: function() {
                    if (null == this.preUpdateData)
                        return null;
                    var e = {
                        add_coin: 0,
                        add_gem: 0
                    };
                    for (var t in this.preUpdateData) {
                        var i = this.preUpdateData[t];
                        for (var a in i)
                            switch (a) {
                            case "addCoin":
                                cc.Mgr.game.money += i.addCoin,
                                e.add_coin += i.addCoin;
                                break;
                            case "addGem":
                                break;
                            case "isVIP":
                                cc.Mgr.game.isVIP = i.isVIP,
                                cc.Mgr.plantMgr.updateVipGrid(),
                                e.vip = i.isVip;
                                break;
                            case "vipExpire":
                                cc.Mgr.game.vipExpire = Date.now() + 864e5 * i.vipExpire,
                                e.vip_expire = cc.Mgr.game.vipExpire;
                                break;
                            case "unlockSpecialGrid":
                                cc.Mgr.game.unlockSpecialGrid = i.unlockSpecialGrid,
                                cc.Mgr.plantMgr.updateVipGrid();
                                break;
                            case "id":
                                break;
                            default:
                                cc.Mgr.game[a] = i[a],
                                e[a] = i[a]
                            }
                        cc.Mgr.game.updateUsersDataRecord[t] = !0
                    }
                    return e
                },
                trackEvent_adjust: function(e) {
                    !0 !== cc.Mgr.game.isFacebook && (cc.sys.os === cc.sys.OS_ANDROID ? jsb.reflection.callStaticMethod("org/cocos2dx/javascript/utils/Utils", "trackEvent_adjust", "(Ljava/lang/String;)V", e) : cc.sys.os === cc.sys.OS_IOS && jsb.reflection.callStaticMethod("Utils", "trackEvent_adjust:", e))
                },
                trackRevenueEvent_adjust: function(e, t) {
                    !0 !== cc.Mgr.game.isFacebook && (cc.sys.os === cc.sys.OS_ANDROID ? jsb.reflection.callStaticMethod("org/cocos2dx/javascript/utils/Utils", "trackRevenueEvent_adjust", "(Ljava/lang/String;Ljava/lang/String;)V", e, t) : cc.sys.os === cc.sys.OS_IOS && jsb.reflection.callStaticMethod("Utils", "trackRevenueEvent_adjust:", e))
                },
                uploadAchievment: function(e, t, i) {
                    var r = a.indexOf(t);
                    if (!(r < 0)) {
                        var l;
                        5 === i ? l = n : 20 === i ? l = c : 50 === i ? l = s : 100 === i && (l = o);
                        var g = l[r]
                          , h = 5 === i ? e : e + "_" + i;
                        !0 !== cc.Mgr.game.isFacebook && (cc.sys.os === cc.sys.OS_IOS ? jsb.reflection.callStaticMethod("Utils", "uploadAchievment:", h) : cc.sys.os === cc.sys.OS_ANDROID && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/utils/Utils", "uploadAchievment", "(Ljava/lang/String;)V", g))
                    }
                },
                reportScore: function(e) {
                    !0 !== cc.Mgr.game.isFacebook && (cc.sys.os === cc.sys.OS_IOS ? jsb.reflection.callStaticMethod("Utils", "reportScore:", e) : cc.sys.os === cc.sys.OS_ANDROID && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/utils/Utils", "reportScore", "(I)V", e))
                },
                downloadRanking: function() {
                    !0 !== cc.Mgr.game.isFacebook && cc.sys.os === cc.sys.OS_IOS && jsb.reflection.callStaticMethod("Utils", "downloadRanking")
                },
                parsePlayerPhoto: function() {},
                getRankingData: function(e) {
                    var t = decodeURI(e);
                    this.rankingData = JSON.parse(t),
                    this.rankingData = this.rankingData.ranking
                }
            }
        });
        t.exports = r,
        cc._RF.pop()
    }
    , {
        DataType: "DataType"
    }],
    Vip: [function(e, t) {
        "use strict";
        cc._RF.push(t, "d6b13/s4q5GFrbqCB2ytdsL", "Vip"),
        cc.Class({
            extends: cc.Component,
            properties: {
                titleLabel: cc.Label,
                btnLabel: cc.Label,
                content: cc.Node,
                blurBg: cc.Node,
                getBtn: cc.Button,
                vipIcon: cc.Node,
                priceLabel: cc.Label,
                priceLabel2: cc.Label,
                tipLabel: cc.Label,
                scrollView: cc.Node,
                policyAndService: cc.Node,
                policyLabel: cc.Label,
                andLabel: cc.Label,
                serviceLabel: cc.Label,
                scrollViewNode: cc.Node,
                recoveryBtnLabel: cc.Label,
                recoveryBtn: cc.Node,
                content_en: cc.Node,
                content_ja: cc.Node,
                content_zh: cc.Node,
                content_ru: cc.Node,
                normaleNode: cc.Node,
                saleNode: cc.Node,
                timeNode: cc.Node,
                timeLabel: cc.Label,
                timeTip: cc.Label,
                weekLabel: cc.Label,
                weekLabel2: cc.Label,
                originalPriceLabel: cc.Label,
                salePriceLabel: cc.Label,
                originalPriceNode: cc.Node,
                lineNode: cc.Node,
                saleLabel: cc.Label
            },
            start: function() {
                this.titleLabel.string = cc.Mgr.Utils.getTranslation("vip-title"),
                this.btnLabel.string = cc.Mgr.Utils.getTranslation("btn-get"),
                this.policyLabel.string = cc.Mgr.Utils.getTranslation("policy-label"),
                this.andLabel.string = cc.Mgr.Utils.getTranslation("and"),
                this.serviceLabel.string = cc.Mgr.Utils.getTranslation("service-label"),
                this.recoveryBtnLabel.string = cc.Mgr.Utils.getTranslation("btn-recovery"),
                this.timeTip.string = cc.Mgr.Utils.getTranslation("bundle-time-tip"),
                this.weekLabel.string = cc.Mgr.Utils.getTranslation("vip-week"),
                this.weekLabel2.string = cc.Mgr.Utils.getTranslation("vip-week"),
                this.limitClick = this.node.getComponent("LimitClick"),
                this.openSpecialCountList = [3, 5, 8, 10, 20, 30],
                this.content_en.active = !1,
                this.content_ja.active = !1,
                this.content_zh.active = !1,
                this.content_ru.active = !1,
                "Japanese" === cc.Mgr.Config.language ? this.content_ja.active = !0 : "Simplified Chinese" === cc.Mgr.Config.language || "Traditional Chinese" === cc.Mgr.Config.language ? this.content_zh.active = !0 : "Russian" === cc.Mgr.Config.language ? this.content_ru.active = !0 : this.content_en.active = !0
            },
            showUI: function(e) {
                var t = this;
                this.from = e,
                this.scrollViewNode.opacity = 0,
                this.blurBg.opacity = 0,
                this.content.opacity = 0,
                this.content.setScale(.5),
                cc.tween(this.blurBg).to(.05, {
                    opacity: 255
                }).call().start(),
                cc.tween(this.content).to(.15, {
                    opacity: 255,
                    scale: 1
                }).call(function() {
                    cc.tween(t.scrollViewNode).to(.15, {
                        opacity: 255
                    }).call().start()
                }).start(),
                !0 === cc.Mgr.game.vipdiscount && cc.Mgr.game.vipCloseCount >= 1 && 0 === cc.Mgr.game.vipSaleTimer && (cc.Mgr.game.vipCloseCount = 0,
                cc.Mgr.game.vipSaleTimer = Date.now() + 2592e5),
                this.refreshUI(),
                this.vipIcon.active = cc.Mgr.game.isVIP,
                cc.Mgr.plantMgr.hideVipTip(),
                cc.Mgr.iCloud.gameData && !cc.Mgr.game.isVIP && cc.Mgr.iCloud.gameData.UUID !== cc.Mgr.game.UUID && cc.sys.os === cc.sys.OS_IOS && !1 === cc.Mgr.game.isFacebook ? (this.recoveryBtn.active = !0,
                this.normaleNode.active = this.saleNode.active = !1) : this.recoveryBtn.active = !1,
                this.startTimeCount()
            },
            startTimeCount: function() {
                if (this.unschedule(this.countTime),
                !1 !== this.isSale && (this.seconds = Math.floor((cc.Mgr.game.vipSaleTimer - Date.now()) / 1e3),
                this.seconds > 0)) {
                    this.timeNode.active = !0;
                    var e = cc.Mgr.Utils.FormatNumToTime(this.seconds);
                    this.timeLabel.string = e,
                    this.schedule(this.countTime, 1)
                }
            },
            countTime: function() {
                if (this.seconds -= 1,
                this.seconds < 0)
                    return this.unschedule(this.countTime),
                    void this.refreshUI();
                var e = cc.Mgr.Utils.FormatNumToTime(this.seconds);
                this.timeLabel.string = e
            },
            refreshUI: function() {
                var e, t, i, a;
                this.isSale = cc.Mgr.game.vipSaleTimer > Date.now(),
                cc.Mgr.game.localPriceList && 15 == cc.Mgr.game.localPriceList.length && cc.Mgr.game.localPriceValueList && 15 == cc.Mgr.game.localPriceValueList.length ? (e = cc.Mgr.game.localPriceList[6],
                t = cc.Mgr.game.localPriceList[14],
                i = Number(cc.Mgr.game.localPriceValueList[6]),
                a = Number(cc.Mgr.game.localPriceValueList[14])) : (e = "$7.99",
                t = "$3.99",
                i = 7.99,
                a = 3.99),
                this.saleLabel.string = Math.ceil(a / i * 100) + "%OFF",
                this.originalPriceLabel.string = e,
                cc.Mgr.game.isVIP ? (this.normaleNode.active = !1,
                this.saleNode.active = !1) : (this.normaleNode.active = !this.isSale,
                this.saleNode.active = this.isSale),
                this.salePriceLabel.string = t,
                this.lineNode.width = this.originalPriceNode.width,
                this.priceLabel.string = cc.Mgr.Utils.getTranslation("vip-price").format(e),
                this.priceLabel2.string = cc.Mgr.Utils.getTranslation("vip-price").format(t),
                this.isSale ? this.tipLabel.string = cc.Mgr.Utils.getTranslation("vip-des").format(t, cc.Mgr.Config.platform, cc.Mgr.Config.platform) : this.tipLabel.string = cc.Mgr.Utils.getTranslation("vip-des").format(e, cc.Mgr.Config.platform, cc.Mgr.Config.platform)
            },
            onClickRecovery: function() {
                cc.Mgr.GameCenterCtrl.unscheduleSaveData(),
                cc.Mgr.UserDataMgr.SaveUserData(cc.Mgr.iCloud.gameData),
                cc.Mgr.AudioMgr.stopAll(),
                cc.Mgr.admob.hideBanner("all"),
                cc.game.restart()
            },
            onClickClose: function() {
                var e = this;
                cc.Mgr.AudioMgr.playSFX("click");
                var t = this;
                this.scrollViewNode.opacity = 0,
                cc.tween(this.blurBg).to(.15, {
                    opacity: 0
                }).start(),
                cc.tween(this.content).to(.15, {
                    opacity: 0,
                    scale: .5
                }).call(function() {
                    t.node.active = !1,
                    e.showUnlock && "enterGame" !== e.from ? (cc.Mgr.plantMgr.activateSpecialGrid(),
                    e.showUnlock = !1) : "fort" === e.from && !1 === cc.Mgr.game.isVIP && !1 === cc.Mgr.game.unlockSpecialGrid && (cc.Mgr.game.openSpecialGridCount++,
                    e.openSpecialCountList.indexOf(cc.Mgr.game.openSpecialGridCount) >= 0 && cc.Mgr.UIMgr.openSpecialGridBundle(!0)),
                    0 === cc.Mgr.game.vipSaleTimer && !0 === cc.Mgr.game.vipdiscount && cc.Mgr.game.vipCloseCount++,
                    "enterGame" === e.from && cc.Mgr.GameCenterCtrl.startGame()
                }).start(),
                cc.Mgr.UIMgr.reduceShowUICount("vip")
            },
            onClickVIP: function() {
                var e = this;
                if (0 != this.limitClick.clickTime()) {
                    !0 === cc.Mgr.game.isFacebook && cc.Mgr.payment.updateVIPState(Date.now() + 6e5);
                    var t = this.isSale ? 14 : 6;
                    cc.Mgr.payment.purchaseByIndex(t, function() {
                        cc.Mgr.game.isVIP = !0,
                        cc.Mgr.admob.hideBanner("all"),
                        cc.Mgr.game.vip = "active",
                        e.updateVip(),
                        cc.Mgr.game.vipStartTimer = Date.now(),
                        cc.Mgr.TEA.collectEvent("vip_subscription", {
                            elapsed: cc.Mgr.Utils.getDate9(!0),
                            state: "subscribed"
                        });
                        var t = {};
                        t.elapsed = cc.Mgr.Utils.getDate9(!0),
                        t.state = "subscribed",
                        cc.Mgr.analytics.logEvent("vip_subscription", JSON.stringify(t))
                    }, this.node)
                }
            },
            updateVip: function() {
                this.vipIcon.active = cc.Mgr.game.isVIP,
                this.priceLabel.node.active = this.getBtn.node.active = !cc.Mgr.game.isVIP,
                this.showUnlock = cc.Mgr.game.isVIP,
                cc.Mgr.game.isVIP && (this.normaleNode.active = this.saleNode.active = !1)
            },
            gotoPolicy: function() {
                cc.sys.openURL("https://digitalwill.co.jp/privacy-policy/")
            },
            gotoService: function() {
                cc.sys.openURL("https://digitalwill.co.jp/terms-of-service/")
            }
        }),
        cc._RF.pop()
    }
    , {}],
    WaterfallFlow: [function(e, t) {
        "use strict";
        cc._RF.push(t, "250263WJHFKL601wrjygR3l", "WaterfallFlow"),
        cc.Class({
            extends: cc.Component,
            properties: {
                _curDir: 0,
                _curAppIndex: 0,
                _lastIndex: 0,
                _updateIdx: -1,
                _showIndexArr: [],
                _totalCount: 0,
                _onePageCount: 0,
                _onePageHeight: 0,
                _scrollViewHeight: 0,
                _totalShowCount: 0,
                _oneItemHeight: 0,
                _updateShowCallback: null,
                itemPrefab: cc.Prefab,
                _showItemArr: [],
                _showItemPool: []
            },
            onLoad: function() {
                this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoved, this),
                this.node.on(cc.Node.EventType.MOUSE_WHEEL, this.touchMoved, this)
            },
            touchMoved: function(e) {
                e.type == cc.Node.EventType.TOUCH_MOVE ? this._curDir = e.getDeltaY() > 0 ? 1 : -1 : this._curDir = e.getScrollY() < 0 ? 1 : -1
            },
            clear: function() {
                var e;
                if (this.content)
                    for (this._curAppIndex = 0,
                    this._lastIndex = 0,
                    this.content.y = 0,
                    this._showIndexArr = [],
                    this._showIndexArr.push(this._curAppIndex),
                    this._curDir = 0,
                    this._updateIdx = -1; this._showItemArr.length > 0; )
                        null != (e = this._showItemArr.pop()).parent && this.content.removeChild(e),
                        this._showItemPool.push(e)
            },
            refreshAtCurPosition: function() {
                this._refreshAtCurPosition = !0,
                this._updateIdx = this._showIndexArr.length > 0 ? this._showIndexArr[0] : 0,
                null != this._updateDataCallback && this._updateDataCallback(this._curAppIndex, this._updateIdx, this._showIndexArr.length)
            },
            setBaseInfo: function(e, t, i, a, n) {
                this._totalCount = e,
                this._onePageCount = t,
                this._scrollViewHeight = this.node.height,
                this.content = this.node.getComponent("cc.ScrollView").content,
                this.content.height = e * a,
                this._onePageHeight = this._onePageCount * a,
                this._totalShowCount = i,
                this._oneItemHeight = a,
                this._updateDataCallback = n,
                this._refreshAtCurPosition = !1
            },
            scrollTo: function(e) {
                if (this.content)
                    if (this._curAppIndex = Math.floor(e / this._onePageCount),
                    0 !== this._curAppIndex) {
                        var t = e % this._onePageCount
                          , i = this._curAppIndex * this._onePageHeight - (this._onePageCount - t) * this._oneItemHeight;
                        this.content.y = i,
                        this.content.y < 0 && (this.content.y = 0),
                        this._updateIdx = this._curAppIndex - 2,
                        this._updateIdx < 0 && (this._updateIdx = 0),
                        this._lastIndex = this._updateIdx,
                        this._showIndexArr = [this._updateIdx, this._updateIdx + 1, this._updateIdx + 2],
                        this._updateDataCallback(this._curAppIndex, this._updateIdx, this._showIndexArr.length)
                    } else
                        this._updateDataCallback(0)
            },
            update: function() {
                if (0 != this._curDir && this.content) {
                    var e = 1 == this._curDir ? this._scrollViewHeight : -1 * this._scrollViewHeight / 2;
                    this._curAppIndex = Math.floor((this.content.getPosition().y + e) / this._onePageHeight),
                    this._curAppIndex * this._onePageCount >= this._totalCount || this._curAppIndex < 0 || this._curAppIndex != this._lastIndex && this._showIndexArr.indexOf(this._curAppIndex) < 0 && (console.log("this.content.getPosition().y: " + this.content.getPosition().y),
                    this._showIndexArr.push(this._curAppIndex),
                    this._showIndexArr.sort(function(e, t) {
                        return e - t
                    }),
                    this._showIndexArr.length > 3 && (this._curAppIndex > this._lastIndex ? this._showIndexArr.shift() : this._showIndexArr.pop()),
                    null != this._updateDataCallback && (this.node.getComponent("cc.ScrollView").stopAutoScroll(),
                    this._updateDataCallback(this._curAppIndex, this._updateIdx, this._curDir)),
                    this._lastIndex = this._curAppIndex)
                }
            },
            updateShowList: function(e, t, i, a) {
                e.length;
                var n = -1 == this._updateIdx ? this._curAppIndex : this._updateIdx;
                if (this._showItemArr.length >= this._totalShowCount && 0 == this._refreshAtCurPosition)
                    for (var c = 0, s = 0 == n ? 0 : 1; c < this._onePageCount; )
                        1 == this._curDir ? (o = this._showItemArr.shift(),
                        1 == a && this._onePageCount,
                        c < e.length ? (o.setPosition(0, -1 * (n * this._onePageHeight + c * this._oneItemHeight)),
                        o.getComponent(t).setContent(e[c])) : (null != o.parent && o.parent.removeChild(o),
                        this._showItemPool.push(o)),
                        this._showItemArr.push(o)) : ((o = this._showItemArr.pop()).setPosition(0, -1 * (n * this._onePageHeight + c * this._oneItemHeight)),
                        null == o.parent && this.content.addChild(o),
                        o.getComponent(t).setContent(e[c]),
                        0 == c ? this._showItemArr.unshift(o) : this._showItemArr.splice(c, 0, o)),
                        c++;
                else {
                    if (1 == this._refreshAtCurPosition) {
                        for (var o; this._showItemArr.length > 0; )
                            null != (o = this._showItemArr.pop()).parent && e.length != this._showItemArr.length && this.content.removeChild(o),
                            this._showItemPool.push(o);
                        this._refreshAtCurPosition = !1
                    }
                    for (var r = -1 == this._updateIdx ? this._onePageCount : this._showIndexArr.length * this._onePageCount, l = (s = 0 == n ? 0 : 1,
                    0); l < r; l++)
                        (o = this._showItemPool.length > 0 ? this._showItemPool.pop() : cc.instantiate(this.itemPrefab)).getComponent(t).setParent(i),
                        (1 == a ? l + this._onePageCount * s : l) < e.length ? (o.setPosition(0, -1 * (n * this._onePageHeight + l * this._oneItemHeight)),
                        null == o.parent && this.content.addChild(o),
                        o.getComponent(t).setContent(e[l])) : (null != o.parent && o.parent.removeChild(o),
                        this._showItemPool.push(o)),
                        this._showItemArr.push(o)
                }
                if (1 == a)
                    for (var g = 0; g < this._showItemArr.length; g++)
                        (o = this._showItemArr[g]).parent = null,
                        g < e.length && (o.getComponent(t).setContent(e[g]),
                        null == o.parent && this.content.addChild(o));
                this._updateIdx = -1
            }
        }),
        cc._RF.pop()
    }
    , {}],
    ZomBieMgr: [function(e, t) {
        "use strict";
        cc._RF.push(t, "b6ae1gMNYVF6K2jPlzajm7R", "ZomBieMgr");
        var i = e("DataType")
          , a = e("Event")
          , n = e("MyEnum")
          , c = cc.Class({
            extends: cc.Component,
            properties: {
                waveZombieCount: 0,
                backToPoolCount: 0,
                shadow: cc.Prefab,
                _zombieIsEscape: !1
            },
            statics: {
                instance: null
            },
            onLoad: function() {},
            start: function() {
                cc.Mgr.ZombieMgr = this,
                this.zombiesParent = this.node
            },
            InitZombiesMgr: function() {
                this.zombieObjs = {}
            },
            unscheduleCreateZombieForCG: function() {
                this.unschedule(this.createZombieTimes)
            },
            getOneWaveZombies: function(e, t) {
                var a = e > 60 ? e % 60 + "_" + t : e + "_" + t
                  , c = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(i.LevelData, a);
                if (cc.Mgr.game.level > 60) {
                    var s = "60_" + t;
                    this.maxLevelData = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(i.LevelData, s)
                }
                cc.Mgr.game.level <= 5 && (this.attackTipTimeout && clearTimeout(this.attackTipTimeout),
                this.attackTipTimeout = setTimeout(function() {
                    cc.Mgr.plantMgr.showLaterTipAttack()
                }, 3)),
                this.backToPoolCount = 0,
                this.createZombieCount = 0,
                this.waveZombieCount = c.zombieCount1 + c.zombieCount2;
                var o = 0
                  , r = 0
                  , l = !0;
                this.zombieZIndex = 100,
                this.moveZIndex = 100,
                this.moveZIndex_2 = -100,
                this.zombieList = [];
                for (var g = 20, h = 0; h < c.zombieCount1; h++) {
                    o += r,
                    this.scheduleOnce(function() {
                        this.createZombies(c.zombieID1, "zombieID1")
                    }, o),
                    g > 23 && (g = 20);
                    var d = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(i.ZombieData, c.zombieID1);
                    r = 2,
                    l && (l = !1,
                    "male" == d.gender ? cc.Mgr.AudioMgr.playSFX(n.AudioType.zombie_man) : cc.Mgr.AudioMgr.playSFX(n.AudioType.zombie_lady))
                }
                for (var u = 0; u < c.zombieCount2; u++)
                    o += r,
                    this.scheduleOnce(function() {
                        this.createZombies(c.zombieID2, "zombieID2")
                    }, o),
                    r = 2;
                this._zombieIsEscape = !1
            },
            createZombies: function(e, t) {
                var a = this;
                this.createZombieCount++;
                var n = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(i.ZombieData, e.toString())
                  , c = {};
                if (cc.Mgr.game.level > 60) {
                    var s = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(i.ZombieData, this.maxLevelData[t]);
                    c.id = n.id,
                    c.hp = s.hp * BigInt(Math.round(Math.pow(2.15, cc.Mgr.game.level % 60))),
                    c.spd = n.spd,
                    c.money = s.money * BigInt(Math.round(Math.pow(2.15, cc.Mgr.game.level % 60))),
                    c.prefab = n.prefab,
                    c.gender = n.gender
                } else
                    c = n;
                this.zombieObjs[e.toString()] = this.zombieObjs[e.toString()] || [];
                var o = null;
                if (this.zombieObjs[e.toString()].length > 3) {
                    (o = this.zombieObjs[e.toString()].shift()).parent = this.node,
                    o.zIndex = this.zombieZIndex,
                    o.active = !0;
                    var r = o.getComponent("zombie");
                    r.isSetZIndex = !1,
                    c.id > cc.Mgr.Config.zBossLine || a.createZombieCount == a.waveZombieCount ? r.init(n, 1.1) : r.init(c),
                    r.moveToNextPos(),
                    this.zombieZIndex--
                } else
                    cc.loader.loadRes("prefab/zombiesnew/" + c.prefab, function(e, t) {
                        if (e)
                            cc.error(e.message || e);
                        else {
                            (o = cc.instantiate(t)).parent = a.node,
                            o.zIndex = a.zombieZIndex,
                            o.active = !0;
                            var i = o.getComponent("zombie");
                            c.id > cc.Mgr.Config.zBossLine || a.createZombieCount == a.waveZombieCount ? i.init(c, 1.1, cc.instantiate(a.shadow)) : i.init(c, .9, cc.instantiate(a.shadow)),
                            i.moveToNextPos(),
                            a.zombieZIndex--
                        }
                    })
            },
            zombieEscape: function() {
                this._zombieIsEscape = !0
            },
            clearZombiesPool: function() {
                for (var e in this.zombieList = [],
                this.zombieObjs) {
                    for (var t = 0; t < this.zombieObjs[e].length; t++)
                        this.zombieObjs[e][t].destroy();
                    this.zombieObjs[e] = []
                }
            },
            backToPool: function(e, t, i) {
                void 0 === i && (i = 0);
                var n = i || 0;
                e.active = !1,
                e.parent = null,
                this.zombieObjs[t.toString()].push(e),
                this.backToPoolCount += 1,
                this.backToPoolCount == this.waveZombieCount && this.scheduleOnce(function() {
                    cc.director.GlobalEvent.emit(a.defense, {
                        state: !this._zombieIsEscape,
                        zhp: n
                    }),
                    this.backToPoolCount = 0
                }, .6)
            }
        });
        t.exports = c,
        cc._RF.pop()
    }
    , {
        DataType: "DataType",
        Event: "Event",
        MyEnum: "MyEnum"
    }],
    ZombieData: [function(e, t) {
        "use strict";
        cc._RF.push(t, "04f933F5qNLo7aVuZQFPjou", "ZombieData");
        var i = cc.Class({
            name: "ZombieData",
            properties: {
                id: 0,
                hp: 100,
                spd: 0,
                money: 0,
                prefab: "",
                gender: ""
            }
        });
        t.exports = i,
        cc._RF.pop()
    }
    , {}],
    ZombieMapMgr: [function(e, t) {
        "use strict";
        cc._RF.push(t, "33dc4CiL0lCtYUxFPR0imk2", "ZombieMapMgr");
        var i = e("db_zombie")
          , a = e("ZombieData")
          , n = cc.Class({
            extends: cc.Component,
            properties: {
                dataList: {
                    default: [],
                    type: [a]
                }
            },
            DecodeJson: function() {
                var e = JSON.parse(i.data);
                for (var t in e) {
                    var n = new a;
                    n.id = e[t][0],
                    n.hp = BigInt(e[t][1]),
                    n.spd = e[t][2],
                    n.money = BigInt(e[t][3]),
                    n.prefab = e[t][4],
                    n.gender = e[t][5],
                    this.dataList[t] = n
                }
            },
            getDataByKey: function(e) {
                return this.dataList[e]
            }
        });
        t.exports = n,
        cc._RF.pop()
    }
    , {
        ZombieData: "ZombieData",
        db_zombie: "db_zombie"
    }],
    achieveItem: [function(e, t) {
        "use strict";
        cc._RF.push(t, "334e7W+zrZDHrsD+AtXWr48", "achieveItem");
        var i = e("DataType")
          , a = [5, 20, 50, 100]
          , n = cc.Class({
            extends: cc.Component,
            properties: {
                rewardIcon: cc.Sprite,
                claimBtn: cc.Node,
                proBar: cc.ProgressBar,
                desLbl: cc.Label,
                numLbl: cc.Label,
                sliderLbl: cc.Label,
                rewardNum: 5,
                rewardType: "gem",
                acId: 0,
                receiveBtnLabel: cc.Label
            },
            onLoad: function() {
                this.limitClick = this.node.getComponent("LimitClick")
            },
            setData: function(e) {
                this.acData = e,
                this.acId = e.id,
                this.receiveBtnLabel.string = cc.Mgr.Utils.getTranslation("btn-claim");
                var t = a[e.checklv];
                this.rewardType = "gem";
                var n = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(i.AchievementData, e.id);
                this.desLbl.string = cc.Mgr.Utils.getTranslation("achieveItem-description", [t, n.Level]);
                var c = cc.Mgr.game.getPlantOwnsDataByLv(n.Level);
                c > t && (c = t),
                this.proBar.progress = c / t,
                this.claimBtn.active = !(c < t),
                this.sliderLbl.string = c + "/" + t,
                this.rewardNum = this.checkLvToGainGems(e.id, e.checklv),
                this.numLbl.string = "x" + this.rewardNum
            },
            checkLvToGainGems: function(e, t) {
                var a = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(i.AchievementData, e);
                return 0 == t ? a.Gain_5 : 1 == t ? a.Gain_20 : 2 == t ? a.Gain_50 : 3 == t ? a.Gain_100 : 4 == t ? a.Gain_200 : void 0
            },
            claim: function() {
                if (0 != this.limitClick.clickTime()) {
                    cc.Mgr.AudioMgr.playSFX("click"),
                    cc.Mgr.UIMgr.openAssetGetUI(this.rewardType, this.rewardNum, "achieve");
                    var e = {};
                    e.elapsed = cc.Mgr.Utils.getDate9(!0),
                    e.rewardCount = this.rewardNum,
                    e.rewardID = this.acId,
                    cc.Mgr.analytics.logEvent("achieveItem_gain", JSON.stringify(e)),
                    cc.Mgr.TEA.collectEvent("achieveItem_gain", {
                        elapsed: cc.Mgr.Utils.getDate9(!0),
                        reward_id: this.acId,
                        reward_count: this.rewardNum
                    }),
                    this.getRewardAndUpdateAchieve(),
                    cc.Mgr.UIMgr.missionUI.showUI(!0),
                    4 == this.acData.checklv && (this.node.active = !1)
                }
            },
            getRewardAndUpdateAchieve: function() {
                cc.Mgr.game.claimAchieveRewardById(this.acId)
            }
        });
        t.exports = n,
        cc._RF.pop()
    }
    , {
        DataType: "DataType"
    }],
    achieveMissonData: [function(e, t) {
        "use strict";
        cc._RF.push(t, "9607aun6k1Nz6/JIbzcJUtk", "achieveMissonData");
        var i = cc.Class({
            name: "achieveMissonData",
            properties: {
                id: 0,
                checkType: 0,
                misType: 0,
                achType: 0,
                level: 1,
                checkLv: 1,
                checkNum: 5,
                progress: 0
            }
        });
        t.exports = i,
        cc._RF.pop()
    }
    , {}],
    angryEffect: [function(e, t) {
        "use strict";
        cc._RF.push(t, "cb68atL+phPoKolRFrMhBzY", "angryEffect");
        var i = cc.Class({
            extends: cc.Component,
            properties: {
                angryNode: cc.Node
            },
            changeAngryState: function(e) {
                this.angryNode.active = !!e
            }
        });
        t.exports = i,
        cc._RF.pop()
    }
    , {}],
    angryUI: [function(e, t) {
        "use strict";
        cc._RF.push(t, "5f39dWdwcRL4Y3fVAf4L7Ir", "angryUI");
        var i = cc.Class({
            extends: cc.Component,
            properties: {
                angryLeftTimeLbl: cc.Label,
                progressbarMask: cc.Node,
                dragonNode: cc.Node,
                gemLabel: cc.Label,
                adsIconNode: cc.Node,
                freeLabelNode: cc.Label,
                tip_1: cc.Label,
                tip_2: cc.Label,
                title: cc.Label,
                content: cc.Node,
                blurBg: cc.Node,
                okLabel: cc.Label,
                spriteCoin: cc.Sprite,
                nomarlM: cc.Material,
                grayM: cc.Material
            },
            doTween: function() {
                this.dragonNode.opacity = 0,
                this.dragonNode.scale = 0,
                this.dragonNode.active = !0,
                cc.tween(this.dragonNode).to(.25, {
                    opacity: 255,
                    scale: 1
                }).call(function() {}).start()
            },
            start: function() {
                cc.Mgr.UIMgr.angryUI = this,
                this.title.string = cc.Mgr.Utils.getTranslation("rage-title"),
                this.tip_1.string = cc.Mgr.Utils.getTranslation("rage-speedup-tip-1"),
                this.tip_2.string = cc.Mgr.Utils.getTranslation("rage-speedup-tip-2"),
                this.okLabel.string = cc.Mgr.Utils.getTranslation("btn-ok"),
                this.limitClick = this.node.getComponent("LimitClick")
            },
            showUI: function() {
                cc.Mgr.admob.preloadRewarded(this),
                this.costGem = 3,
                this.node.width = cc.Mgr.Config.winSize.width,
                this.node.height = cc.Mgr.Config.winSize.height,
                this.refreshUI(),
                cc.Mgr.game.beAngryleftTime > 0 ? (this.angryLeftTimeLbl.string = cc.Mgr.Utils.FormatNumToTime(cc.Mgr.game.beAngryleftTime),
                this.schedule(this.cancelAngryCb, 1)) : this.angryLeftTimeLbl.string = "00:00",
                this.doTween(),
                this.gemLabel.string = this.costGem,
                this.adsIconNode.active = !0,
                this.freeLabelNode.node.x = 26.7,
                this.freeLabelNode.string = cc.Mgr.Utils.getTranslation("btn-get"),
                this.blurBg.opacity = 0,
                this.content.opacity = 0,
                this.content.setScale(.5),
                cc.tween(this.blurBg).to(.05, {
                    opacity: 255
                }).call().start(),
                cc.tween(this.content).to(.15, {
                    opacity: 255,
                    scale: 1
                }).start(),
                cc.Mgr.admob.showBanner("angry"),
                this.checkAvailabelAds = cc.Mgr.admob.checkAvailableRewardedAd(),
                this.checkAvailabelAds ? this.spriteCoin.setMaterial(0, this.nomarlM) : this.spriteCoin.setMaterial(0, this.grayM)
            },
            cancelAngryCb: function() {
                cc.Mgr.plantMgr.changePlantAngryState(!0),
                cc.Mgr.game.beAngryleftTime -= 1,
                this.progressbarMask.width = cc.Mgr.game.beAngryleftTime / 150 * 456,
                cc.Mgr.game.beAngryleftTime <= 0 ? (cc.Mgr.plantMgr.changePlantAngryState(!1),
                this.unschedule(this.cancelAngryCb),
                this.angryLeftTimeLbl.string = "00:00") : this.angryLeftTimeLbl.string = cc.Mgr.Utils.FormatNumToTime(cc.Mgr.game.beAngryleftTime)
            },
            adsGetMoreTime: function() {
                if (0 != this.limitClick.clickTime())
                    if (!1 !== this.checkAvailabelAds) {
                        var e = this;
                        cc.Mgr.admob.showRewardedVideoAd(function(t) {
                            !0 === t && (e.addMoreAngryTime(),
                            e.checkAvailabelAds = cc.Mgr.admob.checkAvailableRewardedAd(),
                            e.checkAvailabelAds ? e.spriteCoin.setMaterial(0, e.nomarlM) : e.spriteCoin.setMaterial(0, e.grayM))
                        }, this.node, "rage", this)
                    } else
                        cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("ad-tip-3"), "", this.node)
            },
            updateAdsBtnState: function() {
                this.checkAvailabelAds = cc.Mgr.admob.checkAvailableRewardedAd(),
                this.checkAvailabelAds ? this.spriteCoin.setMaterial(0, this.nomarlM) : this.spriteCoin.setMaterial(0, this.grayM)
            },
            refreshUI: function() {
                this.progressbarMask.width = cc.Mgr.game.beAngryleftTime / 150 * 456,
                this.angryLeftTimeLbl.string = cc.Mgr.Utils.FormatNumToTime(cc.Mgr.game.beAngryleftTime)
            },
            addMoreAngryTime: function() {
                this.unschedule(this.cancelAngryCb),
                cc.Mgr.game.beAngryleftTime += 30,
                cc.Mgr.game.beAngryleftTime > 150 && (cc.Mgr.game.beAngryleftTime = 150),
                this.refreshUI(),
                this.schedule(this.cancelAngryCb, 1)
            },
            gemsGetMoreTime: function() {
                if (cc.Mgr.game.beAngryleftTime >= 150)
                    cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("max-angry-time-150"), "", this.node);
                else if (cc.Mgr.game.gems >= this.costGem) {
                    cc.Mgr.game.gems -= this.costGem,
                    cc.Mgr.UIMgr.InGameUI.RefreshAssetData(!1, "gem");
                    var e = {};
                    e.elapsed = cc.Mgr.Utils.getDate9(!0),
                    e.costGems = this.costGem,
                    cc.Mgr.analytics.logEvent("angry_get_more_time", JSON.stringify(e)),
                    cc.Mgr.TEA.collectEvent("angry_get_more_time", {
                        elapsed: cc.Mgr.Utils.getDate9(!0),
                        cost_gems: this.costGem
                    }),
                    this.addMoreAngryTime()
                } else
                    cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("NoGems"), "gem", this.node),
                    cc.Mgr.game.needShowIAPCount++,
                    cc.Mgr.game.needShowIAPCount >= 1 && (cc.Mgr.UIMgr.openPaymentUI(!0),
                    cc.Mgr.game.needShowIAPCount = 0)
            },
            closeUI: function() {
                cc.Mgr.AudioMgr.playSFX("click"),
                cc.Mgr.admob.hideBanner("angry");
                var e = this;
                cc.tween(this.blurBg).to(.15, {
                    opacity: 0
                }).start(),
                cc.tween(this.content).to(.15, {
                    opacity: 0,
                    scale: .5
                }).call(function() {
                    e.unschedule(e.cancelAngryCb),
                    e.node.active = !1
                }).start(),
                cc.Mgr.UIMgr.reduceShowUICount()
            }
        });
        t.exports = i,
        cc._RF.pop()
    }
    , {}],
    assetGetUI: [function(e, t) {
        "use strict";
        cc._RF.push(t, "d2458R2d01H1LjhfQcxR5Df", "assetGetUI");
        var i = e("MySprite")
          , a = (e("AtlasType"),
        e("DataType"))
          , n = e("MyEnum")
          , c = cc.Class({
            extends: cc.Component,
            properties: {
                titleLbl: cc.Label,
                icon: i,
                numLbl: cc.Label,
                dragonParent: cc.Node,
                num: 1,
                btnNode: cc.Node,
                doubleGetNode: cc.Node,
                freeLabelNode: cc.Label,
                toggle: cc.Toggle,
                coinNode: cc.Node,
                gemNode: cc.Node,
                rageNode: cc.Node,
                autoNode: cc.Node,
                flameNode: cc.Node,
                freezeNode: cc.Node,
                critNode: cc.Node,
                smallCoinNode: cc.Node,
                smallGemNode: cc.Node,
                checkboxLabel: cc.Label,
                content: cc.Node,
                blurBg: cc.Node,
                blackBg: cc.Node,
                checkboxNode: cc.Node,
                vipNode: cc.Node,
                vipTip: cc.Label,
                numEffect: cc.Node,
                freeDoubleDailyLabel: cc.Label,
                getBtn: cc.Node,
                adsBtn: cc.Node,
                adsLabel: cc.Label,
                gemBtnlabel: cc.Label,
                noThanks: cc.Node,
                noThanksLabel: cc.Label
            },
            onLoad: function() {
                this.limitClick = this.node.getComponent("LimitClick")
            },
            updateReward: function() {
                var e;
                "payment" !== this.fromType && "compensation" !== this.fromType && (e = "money" == this.rtype ? !0 === this.toggle.isChecked && this.checkboxNode.active || cc.Mgr.game.isVIP && ("sign" === this.fromType || "mission" === this.fromType || "achieve" === this.fromType) ? this.num * BigInt(3) : this.num : !0 === this.toggle.isChecked && this.checkboxNode.active || cc.Mgr.game.isVIP && ("sign" === this.fromType || "mission" === this.fromType || "achieve" === this.fromType) ? 3 * this.num : this.num,
                "rage" == this.rtype || "auto" == this.rtype || "flame" == this.rtype || "freeze" == this.rtype || "crit" == this.rtype ? this.numEffect.getComponent("NumEffect").setNumber(e + "s") : "money" == this.rtype ? this.numEffect.getComponent("NumEffect").setNumber(cc.Mgr.Utils.getNumStr2(e)) : this.numEffect.getComponent("NumEffect").setNumber(cc.Mgr.Utils.getNumStr(e)),
                cc.Mgr.game.isManualSetting = cc.Mgr.game.isManualSetting_payingUser = this.toggle.isChecked,
                this.getBtn.active = !1,
                this.adsBtn.active = !1,
                this.checkboxNode.active && this.toggle.isChecked && (this.adsBtn.active = !0),
                (this.vipNode.active || this.checkboxNode.active && !this.toggle.isChecked) && (this.getBtn.active = !0))
            },
            doTween: function(e) {
                this.dragonParent.opacity = 0,
                this.coinNode.opacity = 0,
                this.coinNode.scale = 1,
                this.gemNode.opacity = 0,
                this.gemNode.scale = 1,
                "money" == e ? cc.tween(this.coinNode).to(.25, {
                    opacity: 255,
                    scale: 1.3
                }).to(.1, {
                    scale: 1
                }).start() : "gem" == e ? cc.tween(this.gemNode).to(.25, {
                    opacity: 255,
                    scale: 1.3
                }).to(.1, {
                    scale: 1
                }).start() : cc.tween(this.dragonParent).to(.25, {
                    opacity: 255,
                    scale: 1
                }).to(.1, {
                    scale: .75
                }).start()
            },
            showUI: function(e, t, i, c) {
                var s = this;
                void 0 === c && (c = null),
                cc.Mgr.admob.preloadRewarded(this),
                this.titleLbl.string = cc.Mgr.Utils.getTranslation("getReward-title"),
                this.freeLabelNode.string = cc.Mgr.Utils.getTranslation("btn-claim"),
                this.checkboxLabel.string = cc.Mgr.Utils.getTranslation("getReward-checkbox-treble"),
                this.vipTip.string = cc.Mgr.Utils.getTranslation("vip-treble-tip"),
                this.freeDoubleDailyLabel.string = cc.Mgr.Utils.getTranslation("free-treble-daily-tip"),
                this.adsLabel.string = cc.Mgr.Utils.getTranslation("btn-treble"),
                this.gemBtnlabel.string = cc.Mgr.Utils.getTranslation("btn-claim"),
                this.noThanksLabel.string = cc.Mgr.Utils.getTranslation("btn-no-thanks"),
                this.num = t,
                this.callback = c,
                this.node.width = cc.Mgr.Config.winSize.width,
                this.node.height = cc.Mgr.Config.winSize.height,
                this.icon.node.active = !1,
                this.dragonParent.active = !1,
                this.coinNode.active = !1,
                this.gemNode.active = !1,
                this.rageNode.active = !1,
                this.autoNode.active = !1,
                this.flameNode.active = !1,
                this.freezeNode.active = !1,
                this.critNode.active = !1,
                this.smallCoinNode.active = !1,
                this.smallGemNode.active = !1,
                this.freeDoubleDailyLabel.node.active = !1,
                this.fromType = i,
                cc.Mgr.game.plantMaxLv >= 6 && "countdown" === cc.Mgr.game.ab_countdown || "control" === cc.Mgr.game.ab_countdown || "sign" === i && cc.Mgr.game.isFreeDoubleDaily || cc.Mgr.game.isVIP && ("sign" === this.fromType || "mission" === this.fromType || "achieve" === this.fromType) ? (this.noThanks.opacity = 0,
                this.noThanks.active = !1) : (null == cc.Mgr.game.ab_countdown || "nocountdown" === cc.Mgr.game.ab_countdown || "countdown" === cc.Mgr.game.ab_countdown && cc.Mgr.game.plantMaxLv < 6) && (this.noThanks.opacity = 255,
                this.noThanks.active = !0),
                this.btnNode.active = !1,
                this.doubleGetNode.active = !1,
                this.rtype = e;
                var o, r = this;
                this.showBtnCounter && clearTimeout(this.showBtnCounter),
                "control" === cc.Mgr.game.ab_countdown && (cc.Mgr.game.isPayingUser ? (o = null == cc.Mgr.game.isManualSetting_payingUser ? cc.Mgr.game.checkDoubleReward : cc.Mgr.game.isManualSetting_payingUser,
                this.toggle.isChecked != o && (this.toggle.isChecked = o)) : (o = null == cc.Mgr.game.isManualSetting ? cc.Mgr.game.checkDoubleReward : cc.Mgr.game.isManualSetting,
                this.toggle.isChecked != o && (this.toggle.isChecked = o)));
                var l = cc.Mgr.admob.checkAvailableRewardedAd();
                if ("money" == e)
                    if (this.coinNode.active = !0,
                    "payment" == this.fromType || "exchange" == this.fromType || "compensation" === this.fromType ? this.btnNode.active = !0 : (this.doubleGetNode.active = !0,
                    cc.Mgr.game.plantMaxLv >= 6 && "countdown" === cc.Mgr.game.ab_countdown && (this.showBtnCounter = setTimeout(function() {
                        var e = cc.fadeIn(.5);
                        s.noThanks.active = !0,
                        s.noThanks.runAction(e)
                    }, 3e3))),
                    "control" === cc.Mgr.game.ab_countdown)
                        if ((this.doubleGetNode.active && this.toggle.isChecked && !0 === l || cc.Mgr.game.isVIP && ("sign" === this.fromType || "mission" === this.fromType || "achieve" === this.fromType)) && "payment" != this.fromType && "compensation" !== this.fromType && "exchange" != this.fromType) {
                            var g = t * BigInt(3);
                            this.numEffect.getComponent("NumEffect").setNumber(cc.Mgr.Utils.getNumStr2(g), !0)
                        } else
                            this.numEffect.getComponent("NumEffect").setNumber(cc.Mgr.Utils.getNumStr2(t), !0);
                    else if (!cc.Mgr.game.isVIP || "sign" !== this.fromType && "mission" !== this.fromType && "achieve" !== this.fromType)
                        this.numEffect.getComponent("NumEffect").setNumber(cc.Mgr.Utils.getNumStr2(t), !0);
                    else {
                        var h = t * BigInt(3);
                        this.numEffect.getComponent("NumEffect").setNumber(cc.Mgr.Utils.getNumStr2(h), !0)
                    }
                else if ("gem" == e)
                    if (this.gemNode.active = !0,
                    this.smallGemNode.active = !0,
                    "payment" == this.fromType || "compensation" === this.fromType ? this.btnNode.active = !0 : (this.doubleGetNode.active = !0,
                    !(cc.Mgr.game.plantMaxLv >= 6) || "sign" === this.fromType && cc.Mgr.game.isFreeDoubleDaily || "countdown" !== cc.Mgr.game.ab_countdown || cc.Mgr.game.isVIP && ("sign" === this.fromType || "mission" === this.fromType || "achieve" === this.fromType) || (this.showBtnCounter = setTimeout(function() {
                        var e = cc.fadeIn(.5);
                        s.noThanks.active = !0,
                        s.noThanks.runAction(e)
                    }, 3e3))),
                    "control" === cc.Mgr.game.ab_countdown)
                        if ((this.doubleGetNode.active && this.toggle.isChecked && !0 === l || cc.Mgr.game.isVIP && ("sign" === this.fromType || "mission" === this.fromType || "achieve" === this.fromType)) && "payment" != this.fromType && "compensation" !== this.fromType || "sign" === this.fromType && cc.Mgr.game.isFreeDoubleDaily) {
                            var d = 3 * t;
                            this.numEffect.getComponent("NumEffect").setNumber(cc.Mgr.Utils.getNumStr(d), !0)
                        } else
                            this.numEffect.getComponent("NumEffect").setNumber(cc.Mgr.Utils.getNumStr(t), !0);
                    else if (cc.Mgr.game.isVIP && ("sign" === this.fromType || "mission" === this.fromType || "achieve" === this.fromType) || "sign" === this.fromType && cc.Mgr.game.isFreeDoubleDaily) {
                        var u = 3 * t;
                        this.numEffect.getComponent("NumEffect").setNumber(cc.Mgr.Utils.getNumStr(u), !0)
                    } else
                        this.numEffect.getComponent("NumEffect").setNumber(cc.Mgr.Utils.getNumStr(t), !0);
                else if ("plant" == e) {
                    if (this.plantId = t,
                    this.num = 1,
                    "control" === cc.Mgr.game.ab_countdown)
                        if (this.toggle.isChecked && !0 === l) {
                            var p = 3 * this.num;
                            this.numEffect.getComponent("NumEffect").setNumber(cc.Mgr.Utils.getNumStr(p), !0)
                        } else
                            this.numEffect.getComponent("NumEffect").setNumber(cc.Mgr.Utils.getNumStr(this.num), !0);
                    else
                        this.numEffect.getComponent("NumEffect").setNumber(cc.Mgr.Utils.getNumStr(this.num), !0);
                    this.dragonParent.active = !0,
                    this.doubleGetNode.active = !0,
                    cc.Mgr.game.plantMaxLv >= 6 && "countdown" === cc.Mgr.game.ab_countdown && (this.showBtnCounter = setTimeout(function() {
                        var e = cc.fadeIn(.5);
                        s.noThanks.active = !0,
                        s.noThanks.runAction(e)
                    }, 3e3));
                    var m = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(a.PlantData, t);
                    cc.loader.loadRes("prefab/plant/" + m.prefab, function(e, t) {
                        e ? cc.error(e.message || e) : (r.plantNodeA = cc.instantiate(t),
                        r.plantNodeA.parent = r.dragonParent,
                        r.plantNodeA.group = n.NodeGroup.UI,
                        r.plantNodeA.position = cc.v2(0, 0),
                        r.plantNodeA.active = !0,
                        r.plantNodeA.setScale(.75),
                        r.plantNodeA.getComponent("plant").setShowDetailsInUI(2, "#ffffff", !0))
                    })
                } else if ("drone" == e) {
                    if (this.droneId = t,
                    this.num = 6,
                    this.doubleGetNode.active = !0,
                    cc.Mgr.game.plantMaxLv >= 6 && "countdown" === cc.Mgr.game.ab_countdown && (this.showBtnCounter = setTimeout(function() {
                        var e = cc.fadeIn(.5);
                        s.noThanks.active = !0,
                        s.noThanks.runAction(e)
                    }, 3e3)),
                    "control" === cc.Mgr.game.ab_countdown)
                        if (this.toggle.isChecked && !0 === l) {
                            var f = 3 * this.num;
                            this.numEffect.getComponent("NumEffect").setNumber(cc.Mgr.Utils.getNumStr(f), !0)
                        } else
                            this.numEffect.getComponent("NumEffect").setNumber(cc.Mgr.Utils.getNumStr(this.num), !0);
                    else
                        this.numEffect.getComponent("NumEffect").setNumber(cc.Mgr.Utils.getNumStr(this.num), !0);
                    this.dragonParent.active = !0,
                    cc.loader.loadRes("prefab/flowerPot/HuaPen_v1", function(e, t) {
                        e ? cc.error(e.message || e) : (r.plantNodeA = cc.instantiate(t),
                        r.plantNodeA.parent = r.dragonParent,
                        r.plantNodeA.group = n.NodeGroup.UI,
                        r.plantNodeA.position = cc.v2(0, 0),
                        r.plantNodeA.active = !0,
                        r.plantNodeA.getComponent("flowerPot").setShowDetailsInUI(2, "#ffffff", !0))
                    })
                } else if ("rage" == e || "auto" == e || "flame" == e || "freeze" == e || "crit" == e) {
                    switch (e) {
                    case "rage":
                        this.rageNode.active = !0;
                        break;
                    case "auto":
                        this.autoNode.active = !0;
                        break;
                    case "flame":
                        this.flameNode.active = !0;
                        break;
                    case "freeze":
                        this.freezeNode.active = !0;
                        break;
                    case "crit":
                        this.critNode.active = !0
                    }
                    "buff" == this.fromType ? this.btnNode.active = !0 : (this.doubleGetNode.active = !0,
                    cc.Mgr.game.plantMaxLv >= 6 && "countdown" === cc.Mgr.game.ab_countdown && (this.showBtnCounter = setTimeout(function() {
                        var e = cc.fadeIn(.5);
                        s.noThanks.active = !0,
                        s.noThanks.runAction(e)
                    }, 3e3))),
                    "control" === cc.Mgr.game.ab_countdown ? this.doubleGetNode.active && this.toggle.isChecked && !0 === l || cc.Mgr.game.isVIP && "turnTable" === this.fromType ? this.numEffect.getComponent("NumEffect").setNumber(3 * this.num + "s", !0) : this.numEffect.getComponent("NumEffect").setNumber(this.num + "s", !0) : cc.Mgr.game.isVIP && "turnTable" === this.fromType ? this.numEffect.getComponent("NumEffect").setNumber(3 * this.num + "s", !0) : this.numEffect.getComponent("NumEffect").setNumber(this.num + "s", !0)
                }
                this.isDouble = !1,
                this.doTween(e),
                this.blurBg.active = !1,
                this.blackBg.active = !1,
                this.blurBg.active = !0,
                this.blurBg.opacity = 0,
                cc.tween(this.blurBg).to(.05, {
                    opacity: 255
                }).call().start(),
                this.content.opacity = 0,
                this.content.setScale(.5),
                cc.tween(this.content).to(.15, {
                    opacity: 255,
                    scale: 1
                }).start(),
                cc.Mgr.admob.showBanner("getReward"),
                "control" === cc.Mgr.game.ab_countdown ? this.checkboxNode.active = !(cc.Mgr.game.isVIP && ("sign" === this.fromType || "mission" === this.fromType || "achieve" === this.fromType)) : this.checkboxNode.active = !1,
                !1 === l && (this.checkboxNode.active = !1),
                this.vipNode.active = cc.Mgr.game.isVIP && ("sign" === this.fromType || "mission" === this.fromType || "achieve" === this.fromType),
                "payment" != this.fromType && "exchange" != this.fromType && "compensation" !== this.fromType || (this.checkboxNode.active = !1,
                this.vipNode.active = !1),
                this.getBtn.active = !1,
                this.adsBtn.active = !1,
                "sign" === this.fromType && cc.Mgr.game.isFreeDoubleDaily ? (this.checkboxNode.active = !1,
                this.vipNode.active = !1,
                this.freeDoubleDailyLabel.node.active = !0,
                this.getBtn.active = !0) : "control" === cc.Mgr.game.ab_countdown ? (this.checkboxNode.active && this.toggle.isChecked && (this.adsBtn.active = !0),
                !this.vipNode.active && this.checkboxNode.active && this.toggle.isChecked || (this.getBtn.active = !0)) : !cc.Mgr.game.isVIP || "sign" !== this.fromType && "mission" !== this.fromType && "achieve" !== this.fromType ? this.adsBtn.active = !0 : this.getBtn.active = !0
            },
            updateAdsBtnState: function() {
                var e;
                this.icon.node.active = !1,
                this.dragonParent.active = !1,
                this.coinNode.active = !1,
                this.gemNode.active = !1,
                this.rageNode.active = !1,
                this.autoNode.active = !1,
                this.flameNode.active = !1,
                this.freezeNode.active = !1,
                this.critNode.active = !1,
                this.smallCoinNode.active = !1,
                this.smallGemNode.active = !1,
                this.freeDoubleDailyLabel.node.active = !1,
                this.btnNode.active = !1,
                this.doubleGetNode.active = !1,
                cc.Mgr.game.isPayingUser ? (e = null == cc.Mgr.game.isManualSetting_payingUser ? cc.Mgr.game.checkDoubleReward : cc.Mgr.game.isManualSetting_payingUser,
                this.toggle.isChecked != e && (this.toggle.isChecked = e)) : (e = null == cc.Mgr.game.isManualSetting ? cc.Mgr.game.checkDoubleReward : cc.Mgr.game.isManualSetting,
                this.toggle.isChecked != e && (this.toggle.isChecked = e));
                var t = cc.Mgr.admob.checkAvailableRewardedAd();
                if ("money" == this.rtype)
                    if (this.coinNode.active = !0,
                    this.smallCoinNode.active = !0,
                    this.doubleGetNode.active = !0,
                    "payment" == this.fromType || "exchange" == this.fromType || "compensation" === this.fromType ? this.btnNode.active = !0 : this.doubleGetNode.active = !0,
                    (this.toggle.isChecked && !0 === t || cc.Mgr.game.isVIP && ("sign" === this.fromType || "mission" === this.fromType || "achieve" === this.fromType)) && "payment" != this.fromType && "compensation" !== this.fromType) {
                        var i = this.num * BigInt(3);
                        this.numEffect.getComponent("NumEffect").setNumber(cc.Mgr.Utils.getNumStr2(i), !0)
                    } else
                        this.numEffect.getComponent("NumEffect").setNumber(cc.Mgr.Utils.getNumStr2(this.num), !0);
                else if ("gem" == this.rtype)
                    if (this.gemNode.active = !0,
                    this.smallGemNode.active = !0,
                    "payment" == this.fromType || "compensation" === this.fromType ? this.btnNode.active = !0 : this.doubleGetNode.active = !0,
                    (this.toggle.isChecked && !0 === t || cc.Mgr.game.isVIP && ("sign" === this.fromType || "mission" === this.fromType || "achieve" === this.fromType)) && "payment" != this.fromType && "compensation" !== this.fromType || "sign" === this.fromType && cc.Mgr.game.isFreeDoubleDaily) {
                        var a = 3 * this.num;
                        this.numEffect.getComponent("NumEffect").setNumber(cc.Mgr.Utils.getNumStr(a), !0)
                    } else
                        this.numEffect.getComponent("NumEffect").setNumber(cc.Mgr.Utils.getNumStr(this.num), !0);
                else if ("plant" == this.rtype)
                    if (this.num = 1,
                    this.dragonParent.active = !0,
                    this.doubleGetNode.active = !0,
                    this.toggle.isChecked && !0 === t) {
                        var n = 3 * this.num;
                        this.numEffect.getComponent("NumEffect").setNumber(cc.Mgr.Utils.getNumStr(n), !0)
                    } else
                        this.numEffect.getComponent("NumEffect").setNumber(cc.Mgr.Utils.getNumStr(this.num), !0);
                else if ("drone" == this.rtype)
                    if (this.num = 6,
                    this.doubleGetNode.active = !0,
                    this.dragonParent.active = !0,
                    this.toggle.isChecked && !0 === t) {
                        var c = 3 * this.num;
                        this.numEffect.getComponent("NumEffect").setNumber(cc.Mgr.Utils.getNumStr(c), !0)
                    } else
                        this.numEffect.getComponent("NumEffect").setNumber(cc.Mgr.Utils.getNumStr(this.num), !0);
                else if ("rage" == this.rtype || "auto" == this.rtype || "flame" == this.rtype || "freeze" == this.rtype || "crit" == this.rtype) {
                    switch (this.rtype) {
                    case "rage":
                        this.rageNode.active = !0;
                        break;
                    case "auto":
                        this.autoNode.active = !0;
                        break;
                    case "flame":
                        this.flameNode.active = !0;
                        break;
                    case "freeze":
                        this.freezeNode.active = !0;
                        break;
                    case "crit":
                        this.critNode.active = !0
                    }
                    "buff" == this.fromType ? this.btnNode.active = !0 : this.doubleGetNode.active = !0,
                    this.toggle.isChecked && !0 === t || cc.Mgr.game.isVIP && ("sign" === this.fromType || "mission" === this.fromType || "achieve" === this.fromType) ? this.numEffect.getComponent("NumEffect").setNumber(3 * this.num + "s", !0) : this.numEffect.getComponent("NumEffect").setNumber(this.num + "s", !0)
                }
                this.checkboxNode.active = !(cc.Mgr.game.isVIP && ("sign" === this.fromType || "mission" === this.fromType || "achieve" === this.fromType)),
                !1 === t && (this.checkboxNode.active = !1),
                this.vipNode.active = cc.Mgr.game.isVIP && ("sign" === this.fromType || "mission" === this.fromType || "achieve" === this.fromType),
                "payment" != this.fromType && "exchange" != this.fromType && "compensation" !== this.fromType || (this.checkboxNode.active = !1,
                this.vipNode.active = !1),
                this.getBtn.active = !1,
                this.adsBtn.active = !1,
                "sign" === this.fromType && cc.Mgr.game.isFreeDoubleDaily ? (this.checkboxNode.active = !1,
                this.vipNode.active = !1,
                this.freeDoubleDailyLabel.node.active = !0,
                this.getBtn.active = !0) : (this.checkboxNode.active && this.toggle.isChecked && (this.adsBtn.active = !0),
                !this.vipNode.active && this.checkboxNode.active && this.toggle.isChecked || (this.getBtn.active = !0))
            },
            doubleGetAds: function() {
                if (0 != this.limitClick.clickTime()) {
                    var e = this;
                    cc.Mgr.admob.showRewardedVideoAd(function(t) {
                        !0 === t ? ("money" == e.rtype ? e.num = e.num * BigInt(3) : e.num = 3 * e.num,
                        e.isDouble = !0) : e.isDouble = !1,
                        e.closeUI()
                    }, this.node, this.fromType, this)
                }
            },
            doubleGet: function() {
                0 != this.limitClick.clickTime() && (cc.Mgr.game.isVIP && ("sign" === this.fromType || "mission" === this.fromType || "achieve" === this.fromType) && "payment" != this.fromType && "compensation" !== this.fromType || "sign" === this.fromType && cc.Mgr.game.isFreeDoubleDaily ? ("money" == this.rtype ? this.num = this.num * BigInt(3) : this.num = 3 * this.num,
                this.isDouble = !0,
                this.closeUI()) : (this.isDouble = !1,
                this.closeUI()))
            },
            closeUI: function() {
                var e = this;
                cc.Mgr.AudioMgr.playSFX("click"),
                cc.Mgr.admob.hideBanner("getReward");
                var t = this;
                "payment" == this.fromType || "exchange" == this.fromType || "compensation" === this.fromType ? cc.tween(this.blackBg).to(.15, {
                    opacity: 0
                }).start() : cc.tween(this.blurBg).to(.15, {
                    opacity: 0
                }).start(),
                cc.tween(this.content).to(.15, {
                    opacity: 0,
                    scale: .5
                }).call(function() {
                    t.plantNodeA && e.plantNodeA.destroy(),
                    "gem" == t.rtype && (cc.Mgr.game.gems += t.num,
                    cc.Mgr.game.gem_gained_total += t.num,
                    cc.Mgr.UIMgr.InGameUI.RefreshAssetData(!1, "gem"),
                    cc.Mgr.UIMgr.showGemsEffect()),
                    "money" == t.rtype && (cc.Mgr.game.money += t.num,
                    cc.Mgr.game.coin_gained_total += t.num,
                    cc.Mgr.UIMgr.InGameUI.RefreshAssetData(!1, "money"),
                    cc.Mgr.UIMgr.showJibEffect()),
                    "plant" == t.rtype && cc.Mgr.flowerPotMgr.addTurnTableFlowerFot(e.plantId, t.num),
                    "rage" == t.rtype && (cc.Mgr.game.rageTimer += t.num,
                    cc.Mgr.game.rageTimer > 900 && (cc.Mgr.game.rageTimer = 900),
                    cc.Mgr.plantMgr.changePlantAngryState(!0)),
                    "auto" == t.rtype && (cc.Mgr.game.autoTimer += t.num,
                    cc.Mgr.game.autoTimer > 900 && (cc.Mgr.game.autoTimer = 900),
                    cc.Mgr.plantMgr.changePlantAutoState(!0)),
                    "flame" == t.rtype && (cc.Mgr.game.fireTimer += t.num,
                    cc.Mgr.game.fireTimer > 900 && (cc.Mgr.game.fireTimer = 900),
                    cc.Mgr.plantMgr.changePlantFireState(!0)),
                    "freeze" == t.rtype && (cc.Mgr.game.iceTimer += t.num,
                    cc.Mgr.game.iceTimer > 900 && (cc.Mgr.game.iceTimer = 900),
                    cc.Mgr.plantMgr.changePlantIceState(!0)),
                    "crit" == t.rtype && (cc.Mgr.game.critTimer += t.num,
                    cc.Mgr.game.critTimer > 900 && (cc.Mgr.game.critTimer = 900),
                    cc.Mgr.plantMgr.changePlantCritState(!0)),
                    "drone" == t.rtype && cc.Mgr.flowerPotMgr.addDroneFlowerFot(e.droneId, t.num),
                    "mission" !== t.fromType && "achieve" !== t.fromType && "sign" !== t.fromType || !0 !== t.isDouble && setTimeout(function() {
                        cc.Mgr.admob.showInterstitial(t.fromType, null, !0)
                    }, 1500),
                    t.node.active = !1,
                    null != t.callback && "function" == typeof t.callback && t.callback(),
                    null != cc.Mgr.UIMgr.turnTableUINode && 1 == cc.Mgr.UIMgr.turnTableUINode.active && cc.Mgr.UIMgr.turnTableUI.showBtns()
                }).start(),
                cc.Mgr.UIMgr.reduceShowUICount("assetGet")
            }
        });
        t.exports = c,
        cc._RF.pop()
    }
    , {
        AtlasType: "AtlasType",
        DataType: "DataType",
        MyEnum: "MyEnum",
        MySprite: "MySprite"
    }],
    attackEffect: [function(e, t) {
        "use strict";
        cc._RF.push(t, "12afeXFtapOmJg/9+UZnoXq", "attackEffect"),
        e("EffectType");
        var i = cc.Class({
            extends: cc.Component,
            properties: {
                dragon: dragonBones.ArmatureDisplay
            },
            start: function() {
                this.dragon.on(dragonBones.EventObject.COMPLETE, this.onAnimComplete, this)
            },
            onAnimComplete: function() {
                this.node.active = !1
            },
            playAnimation: function() {
                this.dragon.playAnimation("newAnimation", 1)
            }
        });
        t.exports = i,
        cc._RF.pop()
    }
    , {
        EffectType: "EffectType"
    }],
    bigResult: [function(e, t) {
        "use strict";
        cc._RF.push(t, "628bfJlNBlIuKAY/JH/YCGx", "bigResult");
        var i = e("MyEnum")
          , a = cc.Class({
            extends: cc.Component,
            properties: {
                sucNode: cc.Node,
                failNode: cc.Node,
                coinNode: cc.Node,
                coinLbl: cc.Label,
                timeLbl: cc.Label,
                failedToggle: cc.Toggle,
                winToggle: cc.Toggle,
                winCheckLabel: cc.Label,
                failedCheckLabel: cc.Label,
                rebornLabel: cc.Label,
                getRewardLabel: cc.Label,
                vipTip: cc.Label,
                content: cc.Node,
                blurBg: cc.Node,
                winDb: dragonBones.ArmatureDisplay,
                failedDb: dragonBones.ArmatureDisplay,
                checkboxNode: cc.Node,
                vipNode: cc.Node,
                failedCheckboxNode: cc.Node,
                failedVipNode: cc.Node,
                failed_adsLabel: cc.Label,
                win_getBtn: cc.Node,
                win_adsBtn: cc.Node,
                failed_adsBtn: cc.Node,
                win_adsLabel: cc.Label,
                numEffect: cc.Node,
                spriteCoin: cc.Sprite,
                nomarlM: cc.Material,
                grayM: cc.Material,
                noThanks: cc.Node,
                noThanksLabel: cc.Label
            },
            onLoad: function() {
                this.showVipCount = 0,
                this.limitClick = this.node.getComponent("LimitClick")
            },
            onClickToggle: function() {
                cc.Mgr.game.isManualSetting = cc.Mgr.game.isManualSetting_payingUser = this.winToggle.isChecked;
                var e = !0 === this.winToggle.isChecked && this.checkboxNode.active ? this.coin * BigInt(3) : this.coin;
                this.numEffect.getComponent("NumEffect").setNumber(cc.Mgr.Utils.getNumStr2(e)),
                this.win_getBtn.active = !1,
                this.win_adsBtn.active = !1,
                this.winToggle.isChecked && this.checkboxNode.active ? this.win_adsBtn.active = this.failed_adsBtn.active = !0 : this.win_getBtn.active = this.failed_adsBtn.active = !0
            },
            onClickFaileToggle: function() {},
            show: function(e, t) {
                var a, n = this;
                void 0 === e && (e = !1),
                cc.Mgr.admob.preloadRewarded(this),
                t || (t = BigInt(0)),
                this.winCheckLabel.string = cc.Mgr.Utils.getTranslation("getReward-checkbox-treble"),
                this.failedCheckLabel.string = cc.Mgr.Utils.getTranslation("bigResult-loss-checkbox"),
                this.rebornLabel.string = cc.Mgr.Utils.getTranslation("bigResult-loss-reborn"),
                this.getRewardLabel.string = cc.Mgr.Utils.getTranslation("btn-claim"),
                this.vipTip.string = cc.Mgr.Utils.getTranslation("vip-treble-tip"),
                this.failed_adsLabel.string = cc.Mgr.Utils.getTranslation("btn-retry"),
                this.win_adsLabel.string = cc.Mgr.Utils.getTranslation("btn-treble"),
                this.noThanksLabel.string = cc.Mgr.Utils.getTranslation("btn-no-thanks"),
                this.coin = t * BigInt(4) / BigInt(5),
                this.sucNode.active = e,
                this.failNode.active = !e,
                this.suc = e,
                this.coinNode.active = !1,
                this.timeLbl.node.active = !1,
                cc.Mgr.game.plantMaxLv >= 6 && "countdown" === cc.Mgr.game.ab_countdown || "control" === cc.Mgr.game.ab_countdown ? (this.noThanks.opacity = 0,
                this.noThanks.active = !1) : (null == cc.Mgr.game.ab_countdown || "nocountdown" === cc.Mgr.game.ab_countdown || "countdown" === cc.Mgr.game.ab_countdown && cc.Mgr.game.plantMaxLv < 6) && (this.noThanks.opacity = 255,
                this.noThanks.active = !0),
                this.showBtnCounter && clearTimeout(this.showBtnCounter),
                e ? (cc.Mgr.AudioMgr.playSFX(i.AudioType.success1),
                this.winDb.playAnimation("win", 1),
                this.showVipCount = 0,
                cc.Mgr.game.plantMaxLv >= 6 && "countdown" === cc.Mgr.game.ab_countdown && (this.showBtnCounter = setTimeout(function() {
                    var e = cc.fadeIn(.5);
                    n.noThanks.active = !0,
                    n.noThanks.runAction(e)
                }, 3e3))) : (cc.Mgr.AudioMgr.playSFX(i.AudioType.fail),
                this.failedDb.playAnimation("Defeat", 1),
                this.showVipCount++),
                this.showVipCount >= 10 && (cc.Mgr.plantMgr.showVipTip(),
                this.showVipCount = 0),
                this.blurBg.opacity = 0,
                this.content.opacity = 0,
                this.content.setScale(.5),
                cc.tween(this.blurBg).to(.05, {
                    opacity: 255
                }).call().start(),
                cc.tween(this.content).to(.15, {
                    opacity: 255,
                    scale: 1
                }).start(),
                this.countDown(),
                "control" === cc.Mgr.game.ab_countdown && (cc.Mgr.game.isPayingUser ? (a = null == cc.Mgr.game.isManualSetting_payingUser ? cc.Mgr.game.checkDoubleReward : cc.Mgr.game.isManualSetting_payingUser,
                this.winToggle.isChecked != a && (this.winToggle.isChecked = a)) : (a = null == cc.Mgr.game.isManualSetting ? cc.Mgr.game.checkDoubleReward : cc.Mgr.game.isManualSetting,
                this.winToggle.isChecked != a && (this.winToggle.isChecked = a))),
                this.checkAvailabelAds = cc.Mgr.admob.checkAvailableRewardedAd(),
                this.checkAvailabelAds ? (this.win_adsBtn.active = !0,
                this.failed_adsBtn.active = !0,
                this.spriteCoin.setMaterial(0, this.nomarlM)) : (this.spriteCoin.setMaterial(0, this.grayM),
                this.win_adsBtn.active = !1,
                this.failed_adsBtn.active = !1),
                this.checkboxNode.active = this.checkAvailabelAds,
                this.vipNode.active = !1,
                this.failedCheckboxNode.active = !1,
                this.failedVipNode.active = !1,
                this.win_getBtn.active = !1,
                this.win_adsBtn.active = !1,
                "control" === cc.Mgr.game.ab_countdown ? (this.numEffect.getComponent("NumEffect").setNumber(cc.Mgr.Utils.getNumStr2(this.coin), !0),
                this.winToggle.isChecked && this.checkboxNode.active ? (this.numEffect.getComponent("NumEffect").setNumber(cc.Mgr.Utils.getNumStr2(this.coin * BigInt(3)), !0),
                this.win_adsBtn.active = !0) : this.win_getBtn.active = !0) : (this.numEffect.getComponent("NumEffect").setNumber(cc.Mgr.Utils.getNumStr2(this.coin), !0),
                this.checkboxNode.active = !1,
                this.win_adsBtn.active = !0)
            },
            countDown: function() {
                this.count = 9,
                this.timeLbl.string = "00:0" + this.count,
                this.callback = function() {
                    0 == this.count && this.claim(),
                    this.timeLbl.string = "00:0" + this.count,
                    this.count--
                }
                ,
                this.timeLbl.node.active = !0,
                this.coinNode.active = !0,
                this.schedule(this.callback, 1)
            },
            claim: function() {
                this.unschedule(this.callback),
                cc.Mgr.GameCenterCtrl.unschedduleCreateCallBack(),
                cc.Mgr.game.money += this.coin,
                cc.Mgr.game.coin_gained_total += this.coin,
                cc.Mgr.UIMgr.InGameUI.RefreshAssetData(!1, "money"),
                cc.Mgr.UIMgr.showJibEffect(),
                cc.Mgr.TEA.collectEvent("stage_end", {
                    elapsed: cc.Mgr.Utils.getDate9(!0),
                    stage: cc.Mgr.game.level,
                    coin: this.coin.toString(),
                    is_win: this.suc ? "YES" : "NO",
                    double: "NO"
                });
                var e = {};
                e.elapsed = cc.Mgr.Utils.getDate9(!0),
                e.stage = cc.Mgr.game.level,
                e.coin = this.coin.toString(),
                e.is_win = this.suc ? "YES" : "NO",
                e.double = "NO",
                cc.Mgr.analytics.logEvent("stage_end", JSON.stringify(e)),
                1 != cc.Mgr.Config.isGameSnacks || this.suc || GAMESNACKS.gameOver(),
                this.closeUI()
            },
            closeUI: function() {
                var e = this
                  , t = this;
                cc.tween(this.blurBg).to(.15, {
                    opacity: 0
                }).start(),
                cc.tween(this.content).to(.15, {
                    opacity: 0,
                    scale: .5
                }).call(function() {
                    t.unscheduleAllCallbacks(),
                    t.node.active = !1;
                    var i = 100 * cc.Mgr.game.level + cc.Mgr.game.curBoshu;
                    if (i > cc.Mgr.game.lastMaxWave && e.suc) {
                        cc.Mgr.UIMgr.openRecordUI();
                        var a = {};
                        a.elapsed = cc.Mgr.Utils.getDate9(!0),
                        a.stage = cc.Mgr.game.level,
                        cc.Mgr.analytics.logEvent("level_up", JSON.stringify(a)),
                        cc.Mgr.TEA.collectEvent("level_up", {
                            elapsed: cc.Mgr.Utils.getDate9(!0),
                            stage: cc.Mgr.game.level
                        }),
                        1 == cc.Mgr.Config.isGameSnacks && (GAMESNACKS.sendScore(i),
                        GAMESNACKS.levelComplete(cc.Mgr.game.level - 1))
                    }
                    cc.Mgr.game.lastMaxWave = i
                }).start(),
                cc.Mgr.UIMgr.reduceShowUICount("bigResult")
            },
            doubleClaim: function() {
                cc.Mgr.GameCenterCtrl.unschedduleCreateCallBack(),
                cc.Mgr.game.money += BigInt(3) * this.coin,
                cc.Mgr.game.coin_gained_total += BigInt(3) * this.coin,
                cc.Mgr.TEA.collectEvent("stage_end", {
                    elapsed: cc.Mgr.Utils.getDate9(!0),
                    stage: cc.Mgr.game.level,
                    coin: (BigInt(3) * this.coin).toString(),
                    is_win: this.suc ? "YES" : "NO",
                    double: "YES"
                });
                var e = {};
                e.elapsed = cc.Mgr.Utils.getDate9(!0),
                e.stage = cc.Mgr.game.level,
                e.coin = (BigInt(3) * this.coin).toString(),
                e.is_win = this.suc ? "YES" : "NO",
                e.double = "YES",
                cc.Mgr.analytics.logEvent("stage_end", JSON.stringify(e)),
                cc.Mgr.UIMgr.InGameUI.RefreshAssetData(!1, "money"),
                cc.Mgr.UIMgr.showJibEffect(),
                this.closeUI()
            },
            reSchedule: function() {
                this.schedule(this.callback, 1)
            },
            adsDoubleClaim: function() {
                if (0 != this.limitClick.clickTime()) {
                    var e = this;
                    this.unschedule(this.callback),
                    cc.Mgr.admob.showRewardedVideoAd(function(t) {
                        t ? e.doubleClaim() : e.claim()
                    }, this.node, "win", this)
                }
            },
            updateAdsBtnState: function() {
                this.checkAvailabelAds = cc.Mgr.admob.checkAvailableRewardedAd(),
                this.checkAvailabelAds ? (this.win_adsBtn.active = !0,
                this.failed_adsBtn.active = !0,
                this.spriteCoin.setMaterial(0, this.nomarlM)) : (this.spriteCoin.setMaterial(0, this.grayM),
                this.win_adsBtn.active = !1,
                this.failed_adsBtn.active = !1),
                this.checkboxNode.active = this.checkAvailabelAds,
                this.vipNode.active = !1,
                this.failedCheckboxNode.active = !1,
                this.failedVipNode.active = !1,
                this.win_getBtn.active = !1,
                this.win_adsBtn.active = !1,
                this.numEffect.getComponent("NumEffect").setNumber(cc.Mgr.Utils.getNumStr2(this.coin), !0),
                this.winToggle.isChecked && this.checkboxNode.active ? (this.numEffect.getComponent("NumEffect").setNumber(cc.Mgr.Utils.getNumStr2(this.coin * BigInt(3)), !0),
                this.win_adsBtn.active = !0) : this.win_getBtn.active = !0
            },
            rebornToGameAds: function() {
                if (0 != this.limitClick.clickTime())
                    if (!1 !== this.checkAvailabelAds) {
                        this.unschedule(this.callback),
                        cc.Mgr.GameCenterCtrl.unschedduleCreateCallBack(!1);
                        var e = this;
                        cc.Mgr.admob.showRewardedVideoAd(function(t) {
                            if (t) {
                                cc.Mgr.game.rageTimer += 30,
                                cc.Mgr.game.rageTimer > 150 && (cc.Mgr.game.rageTimer = 150),
                                cc.Mgr.plantMgr.changePlantAngryState(!0),
                                cc.Mgr.TEA.collectEvent("stage_end", {
                                    elapsed: cc.Mgr.Utils.getDate9(!0),
                                    stage: cc.Mgr.game.level,
                                    coin: e.coin.toString(),
                                    is_win: "NO",
                                    double: "YES"
                                });
                                var i = {};
                                i.elapsed = cc.Mgr.Utils.getDate9(!0),
                                i.stage = cc.Mgr.game.level,
                                i.coin = e.coin.toString(),
                                i.is_win = "NO",
                                i.double = "YES",
                                cc.Mgr.analytics.logEvent("stage_end", JSON.stringify(i))
                            }
                            e.rebornHandler()
                        }, this.node, "failed", this)
                    } else
                        cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("ad-tip-3"), "", this.node)
            },
            rebornToGame: function() {
                0 != this.limitClick.clickTime() && this.claim()
            },
            rebornHandler: function() {
                cc.Mgr.game.hasUseFreeBorn = !0,
                cc.Mgr.GameCenterCtrl.rebornToLvLastWave(),
                cc.Mgr.game.money += this.coin,
                cc.Mgr.game.coin_gained_total += this.coin,
                cc.Mgr.UIMgr.InGameUI.RefreshAssetData(!1, "money"),
                cc.Mgr.UIMgr.showJibEffect(),
                this.closeUI()
            }
        });
        t.exports = a,
        cc._RF.pop()
    }
    , {
        MyEnum: "MyEnum"
    }],
    bossComing: [function(e, t) {
        "use strict";
        cc._RF.push(t, "d56ad/M+fdPwrBhL8ciRqVq", "bossComing");
        var i = e("DataType")
          , a = cc.Class({
            extends: cc.Component,
            properties: {
                dragon: dragonBones.ArmatureDisplay,
                box: cc.Node,
                monsterContainer: cc.Node
            },
            start: function() {
                1 == cc.Mgr.Config.isGameSnacks && 1 == cc.Mgr.game.isPad ? (this.box.width = 680,
                this.box.height = 1136) : (this.box.width = cc.Mgr.Config.winSize.width,
                this.box.height = cc.Mgr.Config.winSize.height),
                this.dragon.on(dragonBones.EventObject.COMPLETE, this.onAnimComplete, this)
            },
            onAnimComplete: function() {
                var e = this;
                setTimeout(function() {
                    e.zomObj.destroy(),
                    e.node.active = !1
                }, 1e3)
            },
            playAnimation: function(e) {
                var t = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(i.ZombieData, e.toString());
                this.monsterContainer.x = -400,
                this.box.opacity = 150,
                cc.tween(this.box).to(.2, {
                    opacity: 255
                }).to(.2, {
                    opacity: 150
                }).to(.2, {
                    opacity: 255
                }).to(.2, {
                    opacity: 150
                }).start(),
                this.dragon.playAnimation("boss", 1);
                var a = this;
                cc.loader.loadRes("prefab/zombiesnew/" + t.prefab, function(e, t) {
                    e ? cc.error(e.message || e) : (a.zomObj = cc.instantiate(t),
                    a.zomObj.parent = a.monsterContainer,
                    a.zomObj.getComponent("zombie").showComing(),
                    cc.tween(a.monsterContainer).to(1, {
                        position: cc.v2(-194, 350)
                    }, {
                        easing: "cubicOut"
                    }).start())
                })
            }
        });
        t.exports = a,
        cc._RF.pop()
    }
    , {
        DataType: "DataType"
    }],
    bullet: [function(e, t) {
        "use strict";
        cc._RF.push(t, "000862xnGpC8JWw9nOPnrjL", "bullet");
        var i = e("MyEnum")
          , a = cc.Class({
            extends: cc.Component,
            properties: {
                speed: .2,
                power: 100,
                Sp: cc.Sprite,
                Atlas: cc.SpriteAtlas,
                tuowei: cc.Sprite,
                mask: cc.Node,
                bulletSkill: 0
            },
            initData: function(e, t, a) {
                this.node.setScale(.8),
                this.plantNode = a,
                this.zombieNode = t,
                this.power = e.power,
                this.Sp.spriteFrame = this.Atlas.getSpriteFrame(e.spName),
                this.tuowei.node.color = e.color,
                this.node.position = e.pos,
                this.bulletType = e.bulletType;
                var n = e.skill.split("|");
                if (this.bulletSkill = 0,
                Math.random() <= ("3" === n[0] ? e.enter_ice ? 2 * parseInt(n[1]) : parseInt(n[1]) : "2" === n[0] && e.enter_crit ? 2 * parseInt(n[1]) : parseInt(n[1])) / 100 && (this.bulletSkill = parseInt(n[0])),
                this.isNeedMask = 1 == e.isNeedMask,
                this.isNeedTrail = this.bulletType == i.BulletType.Straight,
                this.tuowei.node.width = 25,
                this.mask.position = cc.v2(-5, 0),
                this.node.active = !0,
                this.tuowei.node.active = this.isNeedTrail,
                this.zombieComponent = this.zombieNode.getComponent("zombie"),
                this.plantLevel = e.level,
                this.startPos = this.node.position,
                this.plantNodePos = this.plantNode.node.position,
                this.bulletType == i.BulletType.Straight) {
                    this.durationTimer = 500;
                    var c = this.zombieComponent.getHitPosition();
                    this.node.angle = -1 * (cc.Mgr.Utils.calculateAngle(c, this.startPos) + 90),
                    this.isNeedTrail && (this.tuowei.node.position = cc.v2(90, 0),
                    cc.tween(this.tuowei.node).to(.3, {
                        position: cc.v2(0, 0)
                    }).start())
                } else
                    this.durationTimer = 1e3,
                    this.node.angle = 0,
                    this.lastPos = this.startPos,
                    this.t = 0;
                this.currentTimer = Date.now(),
                this.currentSpeedTimer = Date.now(),
                this.Sp.node.angle = 30
            },
            ObBackToPool: function(e) {
                if (e) {
                    var t = this;
                    setTimeout(function() {
                        cc.Mgr.BulletPool.ObBackToPool(t.node)
                    }, 1)
                } else
                    cc.Mgr.BulletPool.ObBackToPool(this.node)
            },
            twoBezier: function(e, t, i, a) {
                return [(1 - e) * (1 - e) * t.x + 2 * e * (1 - e) * i.x + e * e * a.x, (1 - e) * (1 - e) * t.y + 2 * e * (1 - e) * i.y + e * e * a.y]
            },
            update: function() {
                if (null != this.zombieNode && !1 !== this.zombieNode.activeInHierarchy) {
                    55 !== this.plantLevel && 56 !== this.plantLevel && 57 !== this.plantLevel && (this.Sp.node.angle += 20);
                    var e = this.zombieComponent.getHitPosition();
                    if (this.bulletType === i.BulletType.Straight)
                        this.node.x += .03 * (e.x - this.startPos.x),
                        this.node.y += .03 * (e.y - this.startPos.y),
                        this.node.angle = -1 * (cc.Mgr.Utils.calculateAngle(e, this.startPos) + 90);
                    else {
                        this.plantNodePos.y > this.zombieNode.position.y ? this.middlePos = cc.v2(this.plantNodePos.x, this.plantNodePos.y + 400) : this.middlePos = cc.v2(this.plantNodePos.x, this.zombieNode.position.y + 400);
                        var t = this.twoBezier(this.t, this.startPos, this.middlePos, e);
                        this.node.x = t[0],
                        this.node.y = t[1],
                        this.t += .017,
                        this.lastPos = this.node.position
                    }
                    Date.now() - this.currentSpeedTimer >= this.durationTimer && (this.zombieNode.getComponent("zombie").beAttack(this),
                    this.ObBackToPool()),
                    this.zombieNode.activeInHierarchy || this.ObBackToPool()
                } else
                    this.ObBackToPool()
            }
        });
        t.exports = a,
        cc._RF.pop()
    }
    , {
        MyEnum: "MyEnum"
    }],
    coinBonus: [function(e, t) {
        "use strict";
        cc._RF.push(t, "c6e3bT++eBMVYZwRfzIZcai", "coinBonus");
        var i = e("DataType")
          , a = cc.Class({
            extends: cc.Component,
            properties: {
                numLbl: cc.Label,
                proBar: cc.ProgressBar,
                coinNum: 0,
                durTime: 0,
                clickTimes: 1
            },
            start: function() {
                this.clickTimes = 1,
                this.init(!0),
                this.limitClick = this.node.getComponent("LimitClick")
            },
            init: function(e) {
                void 0 === e && (e = !1),
                this.coinNum = e ? cc.Mgr.game.onlineCoinNum : BigInt(0),
                this.numLbl.string = cc.Mgr.Utils.getNumStr2(this.coinNum),
                this.durTime = 0,
                this.proBar.progress = 0,
                this.schedule(this.caculateNum, .1)
            },
            caculateNum: function() {
                if (this.durTime += 1,
                this.durTime < 100) {
                    var e = cc.Mgr.Utils.getNumStr2(this.coinNum);
                    this.numLbl.string = e,
                    this.proBar.progress = this.durTime / 100
                } else {
                    var t = (cc.Mgr.game.level > 60 ? 60 : cc.Mgr.game.level) + "_1"
                      , a = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(i.LevelData, t)
                      , n = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(i.ZombieData, a.zombieID1)
                      , c = (cc.Mgr.game.level > 60 ? n.money * BigInt(Math.round(Math.pow(2.15, cc.Mgr.game.level % 60))) : n.money) / cc.Mgr.Config.onlineCoinRatio
                      , s = BigInt(1);
                    this.clickTimes % 3 == 0 && (s = BigInt(6) / BigInt(5)),
                    this.durTime % 100 == 0 && 0 != this.durTime && (this.coinNum += c * s * BigInt(4) / BigInt(5)),
                    this.durTime = 0,
                    cc.Mgr.game.onlineCoinNum = this.coinNum,
                    e = cc.Mgr.Utils.getNumStr2(this.coinNum),
                    this.numLbl.string = e,
                    this.proBar.progress = 0
                }
            },
            getCoin: function() {
                0 != this.limitClick.clickTime() && (this.coinNum <= 0 || cc.Mgr.game.needGuide || (this.unschedule(this.caculateNum),
                this.clickTimes += 1,
                cc.Mgr.game.money += this.coinNum,
                cc.Mgr.game.coin_gained_total += this.coinNum,
                cc.Mgr.UIMgr.InGameUI.RefreshAssetData(!1, "money"),
                cc.Mgr.UIMgr.showJibEffect(),
                this.init(!1)))
            }
        });
        t.exports = a,
        cc._RF.pop()
    }
    , {
        DataType: "DataType"
    }],
    coinFly: [function(e, t) {
        "use strict";
        cc._RF.push(t, "ed9d5mbKIFGBJ8c+nKAcyFh", "coinFly");
        var i = cc.Class({
            extends: cc.Component,
            properties: {
                numLbl: cc.Label
            },
            setData: function(e) {
                this.numLbl.string = "+" + e
            }
        });
        t.exports = i,
        cc._RF.pop()
    }
    , {}],
    db_zombie: [function(e, t) {
        "use strict";
        cc._RF.push(t, "22d9asu/gNEuoVZVF55gNfx", "db_zombie");
        var i = cc.Class({
            name: "db_zombie",
            statics: {
                dataLen: 160,
                dataHead: '["id", "hp", "spd", "money", "prefab", "gender"]',
                data: '{"1":[1,57,0.862529,137,"11jiangshi","male"],"2":[2,163,0.90565545,170,"12jiangshi","male"],"3":[3,413,0.9509382225,432,"18jiangshi","male"],"4":[4,705,0.998485133625,736,"21jiangshi","male"],"5":[5,1166,1.04840939081,1218,"19jiangshi","male"],"6":[6,1636,1.10082985969,1709,"22jiangshi","male"],"7":[7,2470,1.15587135329,2580,"23jiangshi","male"],"8":[8,3657,1.21366492019,3820,"20jiangshi","male"],"9":[9,8104,1.27434816625,8467,"01jiangshi","male"],"10":[10,17947,1.33806557522,18751,"02jiangshi","male"],"11":[11,39752,1.40496885378,41533,"03jiangshi","male"],"12":[12,88056,1.47521729581,92000,"04jiangshi","female"],"13":[13,195038,1.54897816091,203774,"05jiangshi","male"],"14":[14,419648,1.57995772459,438444,"06jiangshi","male"],"15":[15,902906,1.61155687837,943347,"07jiangshi","male"],"16":[16,1942629,1.64378801629,2029640,"08jiangshi","female"],"17":[17,4179527,1.67666377692,4366728,"09jiangshi","female"],"18":[18,8991989,1.71019705254,9394740,"10jiangshi","male"],"19":[19,19345313,1.74440099316,20211789,"13jiangshi","male"],"20":[20,41618614,1.77928901264,43482712,"14jiangshi","male"],"21":[21,89534672,1.81487479372,93544930,"32jiangshi","male"],"22":[22,192613493,1.85117228909,201240651,"15jiangshi","male"],"23":[23,414356456,1.88819573453,432915482,"28jiangshi","male"],"24":[24,891360763,1.92595964995,931284812,"16jiangshi","male"],"25":[25,1917454133,1.92595964995,2003336903,"29jiangshi","male"],"26":[26,4124664141,1.92595964995,4309407848,"27jiangshi","male"],"27":[27,8872467162,1.92595964995,9269864966,"30jiangshi","male"],"28":[28,19085013790,1.92595964995,19939831558,"17jiangshi","male"],"29":[29,41051864668,1.92595964995,42890577687,"31jiangshi","male"],"30":[30,88301015025,1.92595964995,92256017488,"26jiangshi","male"],"31":[31,189140774188,1.92595964995,197612389464,"34jiangshi","female"],"32":[32,405139538313,1.92595964995,423285738234,"45jiangshi","male"],"33":[33,867808891065,1.92595964995,906678051296,"24jiangshi","male"],"34":[34,1858846644666,1.92595964995,1942104385880,"25jiangshi","male"],"35":[35,3981649512877,1.92595964995,4159987594558,"35jiangshi","male"],"36":[36,8528693256581,1.92595964995,8910693427544,"33jiangshi","male"],"37":[37,18268460955598,1.92595964995,19086705321800,"37jiangshi","male"],"38":[38,39131043366891,1.92595964995,40883722799296,"36jiangshi","male"],"39":[39,83818694891880,1.92595964995,87572934236092,"43jiangshi","male"],"40":[40,179539644458409,1.92595964995,187581225133709,"42jiangshi","male"],"41":[41,384573918429912,1.92595964995,401798984236404,"44jiangshi","male"],"42":[42,823757333276871,1.92595964995,860653424234377,"46jiangshi","male"],"43":[43,1764488207879050,1.92595964995,1843519634710030,"47jiangshi","male"],"44":[44,3779533741276920,1.92595964995,3948819057548880,"48jiangshi","male"],"45":[45,8095761273815170,1.92595964995,8458370421269710,"49jiangshi","male"],"46":[46,17341120648512100,1.92595964995,18117829442359700,"50jiangshi","male"],"47":[47,37144680429112896,1.92595964995,38808390665534496,"51jiangshi","male"],"48":[48,79563905479159904,1.92595964995,83127572805574896,"52jiangshi","male"],"49":[49,170425885536360000,1.92595964995,178059260949540992,"49_enemy","male"],"50":[50,365052246818883968,1.92595964995,381402936953918016,"50_enemy","male"],"51":[51,781941912686050048,1.92595964995,816965090955292032,"51_enemy","male"],"52":[52,1674919576973519872,1.92595964995,1749939224826240000,"52_enemy","female"],"53":[53,3587677733877279744,1.92595964995,3748369819577800192,"53_enemy","male"],"54":[54,7684805705965119488,1.92595964995,8029008153535639552,"54_enemy","male"],"55":[55,16460853822177300480,1.92595964995,17198135464873299968,"55_enemy","male"],"56":[56,35259148887103799296,1.92595964995,36838406165758701568,"56_enemy","female"],"57":[57,75525096916176306176,1.92595964995,78907866007055106048,"57_enemy","female"],"58":[58,161774757594450001920,1.92595964995,169020648987112013824,"58_enemy","male"],"59":[59,346521530767310979072,1.92595964995,362042230130394005504,"59_enemy","male"],"60":[60,742249118903579967488,1.92595964995,775494456939304058880,"60_enemy","male"],"101":[101,1567,0.575019333672,1637,"11jiangshi","male"],"102":[102,2351,0.6037703,2456,"12jiangshi","male"],"103":[103,4231,0.633958815,4421,"18jiangshi","male"],"104":[104,7680,0.66565675575,8024,"21jiangshi","male"],"105":[105,14576,0.698939593538,15229,"19jiangshi","male"],"106":[106,29152,0.733886573468,30458,"22jiangshi","male"],"107":[107,61754,0.770580902192,64520,"23jiangshi","male"],"108":[108,137144,0.809109946794,143287,"20jiangshi","male"],"109":[109,303912,0.84956544383,317524,"01jiangshi","male"],"110":[110,673026,0.892043716478,703171,"02jiangshi","male"],"111":[111,1490720,0.93664590286,1557490,"03jiangshi","male"],"112":[112,3302124,0.983478197546,3450026,"04jiangshi","female"],"113":[113,7313952,1.03265210727,7641543,"05jiangshi","male"],"114":[114,15736814,1.05330514905,16441666,"06jiangshi","male"],"115":[115,33859002,1.07437125293,35375547,"07jiangshi","male"],"116":[116,72848617,1.09585867786,76111506,"08jiangshi","female"],"117":[117,156732268,1.11777585128,163752306,"09jiangshi","female"],"118":[118,337199614,1.14013136802,352302785,"10jiangshi","male"],"119":[119,725449247,1.16293399544,757942119,"13jiangshi","male"],"120":[120,1553912289,1.23411485973,1623512021,"14jiangshi","male"],"121":[121,3357550213,1.20991652847,3507934887,"32jiangshi","male"],"122":[122,7223005995,1.23411485973,7546524433,"15jiangshi","male"],"123":[123,15538367121,1.25879715703,16234330585,"28jiangshi","male"],"124":[124,33426028646,1.28397309997,34923180469,"16jiangshi","male"],"125":[125,71904529998,1.28397309997,75125133896,"29jiangshi","male"],"126":[126,154674905317,1.28397309997,161602794327,"27jiangshi","male"],"127":[127,332717518589,1.28397309997,347619936247,"30jiangshi","male"],"128":[128,715688017161,1.28397309997,747743683449,"17jiangshi","male"],"129":[129,1539444925073,1.28397309997,1608396663267,"31jiangshi","male"],"130":[130,3311288063449,1.28397309997,3459600655811,"26jiangshi","male"],"131":[131,7092779031898,1.28397309997,7410464604736,"34jiangshi","female"],"132":[132,15192732686449,1.28397309997,15873215183475,"45jiangshi","male"],"133":[133,32542833414490,1.28397309997,34000426923126,"24jiangshi","male"],"134":[134,69706749174357,1.28397309997,72828914469877,"25jiangshi","male"],"135":[135,149311856732109,1.28397309997,155999534795140,"35jiangshi","male"],"136":[136,319825997120177,1.28397309997,334151003531189,"33jiangshi","male"],"137":[137,685067285831420,1.28397309997,715751449563808,"37jiangshi","male"],"138":[138,1467414126250900,1.28397309997,1533139604965670,"36jiangshi","male"],"139":[139,3143201058429420,1.28397309997,3283985033836460,"43jiangshi","male"],"140":[140,6732736667155810,1.28397309997,7034295942477690,"42jiangshi","male"],"141":[141,14421521941047700,1.28397309997,15067461908787200,"44jiangshi","male"],"142":[142,30890899997724100,1.28397309997,32274503408622100,"46jiangshi","male"],"143":[143,66168307795125000,1.28397309997,69131986301268496,"47jiangshi","male"],"144":[144,141732515297158000,1.28397309997,148080714657316992,"48jiangshi","male"],"145":[145,303591047766512000,1.28397309997,317188890795972992,"49jiangshi","male"],"146":[146,650292024315868032,1.28397309997,679418604084974976,"50jiangshi","male"],"147":[147,1392925516084590080,1.28397309997,1455314649950020096,"51jiangshi","male"],"148":[148,2983646455453190144,1.28397309997,3117283980192929792,"52jiangshi","male"],"149":[149,6390970707580739584,1.28397309997,6677222285573260288,"49_enemy","male"],"150":[150,13689459255637899264,1.28397309997,14302610135697899520,"50_enemy","male"],"151":[151,29322821725576499200,1.28397309997,30636190910664998912,"51_enemy","male"],"152":[152,62809484136184799232,1.28397309997,65622720930644402176,"52_enemy","female"],"153":[153,134537915019708006400,1.28397309997,140563868233440002048,"53_enemy","male"],"154":[154,288180213972213989376,1.28397309997,301087805756029009920,"54_enemy","male"],"155":[155,617282018328482021376,1.28397309997,644930079929414057984,"55_enemy","male"],"156":[156,1322218083259610038272,1.28397309997,1381440231208799961088,"56_enemy","female"],"157":[157,2832191134342080102400,1.28397309997,2959044975249260019712,"57_enemy","female"],"158":[158,6066553409760740245504,1.28397309997,6338274336983910187008,"58_enemy","male"],"159":[159,12994557403707499085824,1.28397309997,13576583629819500036096,"59_enemy","male"],"160":[160,27834341958741498265600,1.28397309997,29081042135073498857472,"60_enemy","male"]}'
            }
        });
        t.exports = i,
        cc._RF.pop()
    }
    , {}],
    dieSmoke: [function(e, t) {
        "use strict";
        cc._RF.push(t, "34c08P1qOFNJZ2gubC9oYrD", "dieSmoke");
        var i = e("EffectType")
          , a = cc.Class({
            extends: cc.Component,
            properties: {
                dragon: dragonBones.ArmatureDisplay
            },
            start: function() {
                this.dragon.on(dragonBones.EventObject.COMPLETE, this.onAnimComplete, this)
            },
            onAnimComplete: function() {
                null != this.callback && this.callback(),
                cc.Mgr.EffectMgr.ObBackToPool(this.node, i.DieSmoke)
            },
            playAnimation: function(e) {
                this.callback = null,
                this.callback = e,
                this.dragon.playAnimation("Sprite", 1)
            }
        });
        t.exports = a,
        cc._RF.pop()
    }
    , {
        EffectType: "EffectType"
    }],
    doubleCoinUI: [function(e, t) {
        "use strict";
        cc._RF.push(t, "395acIAHrhPibXMtqOyXRVx", "doubleCoinUI");
        var i = cc.Class({
            extends: cc.Component,
            properties: {
                adsIconNode: cc.Node,
                freeLabelNode: cc.Label,
                desLabel: cc.Label,
                timeTipLabel: cc.Label,
                content: cc.Node,
                blurBg: cc.Node,
                spriteCoin: cc.Sprite,
                nomarlM: cc.Material,
                grayM: cc.Material,
                title: cc.Node,
                title_zh: cc.Node,
                title_ja: cc.Node,
                title_ru: cc.Node
            },
            onLoad: function() {
                this.limitClick = this.node.getComponent("LimitClick")
            },
            start: function() {
                this.title.active = !1,
                this.title_zh.active = !1,
                this.title_ja.active = !1,
                this.title_ru.active = !1,
                "Japanese" === cc.Mgr.Config.language ? this.title_ja.active = !0 : "Simplified Chinese" === cc.Mgr.Config.language || "Traditional Chinese" === cc.Mgr.Config.language ? this.title_zh.active = !0 : "Russian" === cc.Mgr.Config.language ? this.title_ru.active = !0 : this.title.active = !0
            },
            showUI: function() {
                this.desLabel.string = cc.Mgr.Utils.getTranslation("trebleCoin-des-1"),
                this.timeTipLabel.string = cc.Mgr.Utils.getTranslation("doubleCoin-des-2"),
                this.freeLabelNode.node.x = 20,
                this.freeLabelNode.string = cc.Mgr.Utils.getTranslation("btn-get"),
                this.blurBg.opacity = 0,
                this.content.opacity = 0,
                this.content.setScale(.5),
                cc.tween(this.blurBg).to(.05, {
                    opacity: 255
                }).call().start(),
                cc.tween(this.content).to(.15, {
                    opacity: 255,
                    scale: 1
                }).start(),
                cc.Mgr.admob.showBanner("getDoubleReward"),
                this.checkAvailabelAds = cc.Mgr.admob.checkAvailableRewardedAd(),
                this.checkAvailabelAds ? this.spriteCoin.setMaterial(0, this.nomarlM) : this.spriteCoin.setMaterial(0, this.grayM)
            },
            closeUI: function() {
                cc.Mgr.AudioMgr.playSFX("click"),
                cc.Mgr.admob.hideBanner("getDoubleReward");
                var e = this;
                cc.tween(this.blurBg).to(.15, {
                    opacity: 0
                }).start(),
                cc.tween(this.content).to(.15, {
                    opacity: 0,
                    scale: .5
                }).call(function() {
                    e.node.active = !1
                }).start(),
                cc.Mgr.UIMgr.reduceShowUICount("doubleCoin")
            },
            adsDouble: function() {
                0 != this.limitClick.clickTime() && (!1 !== this.checkAvailabelAds ? (cc.Mgr.admob.showRewardedVideoAd(function(e) {
                    e && cc.Mgr.UIMgr.InGameUI.startDoubleCoinState()
                }, this.node, "doubleCoin", this),
                this.closeUI()) : cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("ad-tip-3"), "", this.node))
            },
            updateAdsBtnState: function() {
                this.checkAvailabelAds = cc.Mgr.admob.checkAvailableRewardedAd(),
                this.checkAvailabelAds ? this.spriteCoin.setMaterial(0, this.nomarlM) : this.spriteCoin.setMaterial(0, this.grayM),
                cc.Mgr.UIMgr.InGameUI.showDoubleCoinBtn(!1)
            }
        });
        t.exports = i,
        cc._RF.pop()
    }
    , {}],
    exchangeCoinUI: [function(e, t) {
        "use strict";
        cc._RF.push(t, "38696cc7WhLl6WHE7OD+t4X", "exchangeCoinUI");
        var i = e("DataType")
          , a = e("MyEnum")
          , n = cc.Class({
            extends: cc.Component,
            properties: {
                coinLabel: cc.Label,
                lastNunDis: cc.Label,
                getBtnNode: cc.Node,
                gemLabel: cc.Label,
                maxNode: cc.Node,
                titleLabel: cc.Label,
                desLabel: cc.Label,
                maxCountLabel: cc.Label,
                content: cc.Node,
                blurBg: cc.Node
            },
            onLoad: function() {
                this.titleLabel.string = cc.Mgr.Utils.getTranslation("coinExchange-title"),
                this.desLabel.string = cc.Mgr.Utils.getTranslation("coinExchange-des"),
                this.maxCountLabel.string = cc.Mgr.Utils.getTranslation("coinExchange-max"),
                this.limitClick = this.node.getComponent("LimitClick"),
                this.allowShow = !0
            },
            coinNum: function() {
                var e = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(i.ShopData, cc.Mgr.game.plantMaxLv)
                  , t = 0
                  , n = {}
                  , c = (t = 0,
                0);
                for (var s in e)
                    e[s] == a.ShopItemType.Money && (n[c] = cc.Mgr.game.plantMaxLv - t + 1,
                    c++),
                    t++;
                var o = cc.Mgr.game.plantBuyRecord[n[0]]
                  , r = cc.Mgr.game.caculatePlantPrice(n[0], o)
                  , l = (o = cc.Mgr.game.plantBuyRecord[n[1]],
                cc.Mgr.game.caculatePlantPrice(n[1], o))
                  , g = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(i.PlantData, n[0])
                  , h = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(i.PlantData, n[1])
                  , d = 30;
                return g.gem > 0 && h.gem > 0 && (d = g.gem + h.gem),
                (r + l) / BigInt(d) * BigInt([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 20][cc.Mgr.game.currentExchangeCount])
            },
            showUI: function() {
                this.refreshUI(),
                cc.Mgr.admob.showBanner("exchangeCoin"),
                this.blurBg.opacity = 0,
                this.content.opacity = 0,
                this.content.setScale(.5),
                cc.tween(this.blurBg).to(.05, {
                    opacity: 255
                }).call().start(),
                cc.tween(this.content).to(.15, {
                    opacity: 255,
                    scale: 1
                }).start(),
                this.showPaymentCount = 0
            },
            refreshUI: function() {
                this.node.active = !0,
                this.exchangeCoinNum = this.coinNum(),
                this.exchangeGemNum = cc.Mgr.UIMgr.gemNum(),
                this.coinLabel.string = "x" + cc.Mgr.Utils.getNumStr2(this.exchangeCoinNum),
                this.gemLabel.string = this.exchangeGemNum;
                var e = "{0} / {1}".format(cc.Mgr.game.exchangeCoinConfig.maxExchangeNum - cc.Mgr.game.currentExchangeCount, cc.Mgr.game.exchangeCoinConfig.maxExchangeNum);
                this.lastNunDis.string = e,
                cc.Mgr.game.exchangeCoinConfig.maxExchangeNum == cc.Mgr.game.currentExchangeCount ? (this.maxNode.active = !0,
                this.getBtnNode.active = !1) : (this.maxNode.active = !1,
                this.getBtnNode.active = !0)
            },
            closeUI: function() {
                cc.Mgr.AudioMgr.playSFX("click"),
                cc.Mgr.admob.hideBanner("exchangeCoin");
                var e = this;
                cc.tween(this.blurBg).to(.15, {
                    opacity: 0
                }).start(),
                cc.tween(this.content).to(.15, {
                    opacity: 0,
                    scale: .5
                }).call(function() {
                    e.node.active = !1
                }).start(),
                cc.Mgr.UIMgr.reduceShowUICount("exchange")
            },
            exchangeButtonOnclick: function() {
                var e = this;
                if (cc.Mgr.game.currentExchangeCount >= cc.Mgr.game.exchangeCoinConfig.maxExchangeNum)
                    cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("max-exchange"), "", this.node);
                else {
                    if (this.exchangeGemNum > cc.Mgr.game.gems)
                        return cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("NoGems"), "gem", this.node),
                        void (cc.Mgr.Config.isChina ? !0 === this.allowShow && (this.allowShow = !1,
                        setTimeout(function() {
                            cc.Mgr.UIMgr.openPaymentUI(!0),
                            e.allowShow = !0
                        }, 300)) : cc.Mgr.game.coinBundleFlag && !0 === this.allowShow && (this.allowShow = !1,
                        setTimeout(function() {
                            var t = cc.Mgr.UIMgr.getCoinNumber() * BigInt(30);
                            t = t < BigInt(1e6) ? BigInt(1e6) : t,
                            t *= BigInt(2),
                            cc.Mgr.UIMgr.openCoinBundle(t, !0),
                            e.allowShow = !0
                        }, 300)));
                    cc.Mgr.game.gems -= this.exchangeGemNum,
                    cc.Mgr.UIMgr.InGameUI.RefreshAssetData(!1, "gem"),
                    cc.Mgr.game.currentExchangeCount++,
                    cc.Mgr.UIMgr.openAssetGetUI("money", this.exchangeCoinNum, "exchange"),
                    this.refreshUI()
                }
            }
        });
        t.exports = n,
        cc._RF.pop()
    }
    , {
        DataType: "DataType",
        MyEnum: "MyEnum"
    }],
    flowerPotManage: [function(e, t) {
        "use strict";
        cc._RF.push(t, "97b38ITPMpKiIEavRt8jNVV", "flowerPotManage");
        var i = e("MyEnum")
          , a = e("DataType")
          , n = cc.Class({
            extends: cc.Component,
            properties: {},
            statics: {
                instance: null
            },
            init: function(e) {
                var t = this;
                t.loadedPrefabNum = 0,
                t.loadedPrefabNum++,
                cc.loader.loadRes("prefab/flowerPot/HuaPen_v1", function(i, a) {
                    i ? cc.error(i.message || i) : (t.loadedPrefabNum--,
                    0 == t.loadedPrefabNum && e(),
                    t.airDropFlowerFot_Prefab = a)
                }),
                t.loadedPrefabNum++,
                cc.loader.loadRes("prefab/flowerPot/HuaPen_v2", function(i, a) {
                    i ? cc.error(i.message || i) : (t.loadedPrefabNum--,
                    0 == t.loadedPrefabNum && e(),
                    t.droneFlowerFot_Prefab = a)
                }),
                t.loadedPrefabNum++,
                cc.loader.loadRes("prefab/flowerPot/HuaPen_v3", function(i, a) {
                    i ? cc.error(i.message || i) : (t.loadedPrefabNum--,
                    0 == t.loadedPrefabNum && e(),
                    t.turnTableAndBuyFlowerFot_Prefab = a)
                }),
                this.droneFlowerFot = {},
                this.droneFlowerFot.num = cc.Mgr.game.dronePot.length,
                this.droneFlowerFot.type = i.FlowerPotType.Drone,
                this.droneFlowerFot.plantInfos = cc.Mgr.game.dronePot,
                this.turnTableFlowerFot = {},
                this.turnTableFlowerFot.type = i.FlowerPotType.Turntable,
                this.turnTableFlowerFot.num = cc.Mgr.game.turntablePot.length,
                this.turnTableFlowerFot.plantInfos = cc.Mgr.game.turntablePot,
                this.shopFlowerFot = {},
                this.shopFlowerFot.type = i.FlowerPotType.Shop,
                this.shopFlowerFot.num = cc.Mgr.game.shopBuyPot.length,
                this.shopFlowerFot.plantInfos = cc.Mgr.game.shopBuyPot;
                var a, n = cc.Mgr.Utils.GetSysTime() - cc.Mgr.UserDataMgr.lastPlayTime, c = cc.Mgr.game.getSpaceGirdNum() - this.droneFlowerFot.num - this.turnTableFlowerFot.num - this.shopFlowerFot.num, s = Math.floor(n / cc.Mgr.game.airDropTime);
                a = c <= 0 ? 0 : c >= s ? s : c,
                this.airDropFlowerFot = {},
                this.airDropFlowerFot.num = a,
                this.airDropFlowerFot.type = i.FlowerPotType.Drop,
                this.airDropFlowerFot.plantInfo = []
            },
            noneDropFlowerFotNun: function() {
                return this.turnTableFlowerFot.num + this.shopFlowerFot.num + this.droneFlowerFot.num + this.airDropFlowerFot.num
            },
            haveFlowerFot: function() {
                return this.turnTableFlowerFot.num + this.shopFlowerFot.num + this.droneFlowerFot.num + this.airDropFlowerFot.num > 0
            },
            addDropFlowerFot: function(e) {
                (0 == this.airDropFlowerFot.num && 0 == e || this.airDropFlowerFot.num < e) && this.airDropFlowerFot.num++
            },
            addDroneFlowerFot: function(e, t) {
                for (var i = 0; i < t; i++)
                    this.droneFlowerFot.plantInfos[this.droneFlowerFot.num] = e,
                    this.droneFlowerFot.num++
            },
            addTurnTableFlowerFot: function(e, t, i) {
                void 0 === t && (t = 1),
                void 0 === i && (i = null);
                for (var a = 0; a < t; a++)
                    this.turnTableFlowerFot.plantInfos[this.turnTableFlowerFot.num] = e,
                    this.turnTableFlowerFot.num++
            },
            addShopFlowerFot: function(e, t, i) {
                void 0 === t && (t = 1),
                void 0 === i && (i = null);
                for (var a = 0; a < t; a++)
                    this.shopFlowerFot.plantInfos[this.shopFlowerFot.num] = e,
                    this.shopFlowerFot.num++
            },
            getFlowerFot: function() {
                var e = null;
                if (this.turnTableFlowerFot.num > 0) {
                    this.turnTableFlowerFot.num--;
                    var t = (e = cc.instantiate(this.turnTableAndBuyFlowerFot_Prefab)).getComponent("flowerPot")
                      , i = this.turnTableFlowerFot.plantInfos[this.turnTableFlowerFot.num];
                    return t.setPlantInfo(i),
                    this.turnTableFlowerFot.plantInfos.length--,
                    e
                }
                if (this.shopFlowerFot.num > 0)
                    return this.shopFlowerFot.num--,
                    t = (e = cc.instantiate(this.turnTableAndBuyFlowerFot_Prefab)).getComponent("flowerPot"),
                    i = this.shopFlowerFot.plantInfos[this.shopFlowerFot.num],
                    t.setPlantInfo(i),
                    this.shopFlowerFot.plantInfos.length--,
                    e;
                if (this.droneFlowerFot.num > 0)
                    return this.droneFlowerFot.num--,
                    t = (e = cc.instantiate(this.droneFlowerFot_Prefab)).getComponent("flowerPot"),
                    i = this.droneFlowerFot.plantInfos[this.droneFlowerFot.num],
                    t.setPlantInfo(i),
                    this.droneFlowerFot.plantInfos.length--,
                    e;
                if (this.airDropFlowerFot.num > 0) {
                    this.airDropFlowerFot.num--,
                    e = cc.instantiate(this.airDropFlowerFot_Prefab);
                    var n = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(a.AirDropData, cc.Mgr.game.plantMaxLv);
                    return i = 0,
                    i = 0 == n.Plant2 ? n.Plant1 : Math.floor(100 * Math.random()) % 2 == 0 ? n.Plant1 : n.Plant2,
                    (t = e.getComponent("flowerPot")).setPlantInfo(i),
                    e
                }
                return null
            },
            onLoad: function() {
                n.instance = this
            },
            start: function() {}
        });
        t.exports = n,
        cc._RF.pop()
    }
    , {
        DataType: "DataType",
        MyEnum: "MyEnum"
    }],
    flowerPotOpen: [function(e, t) {
        "use strict";
        cc._RF.push(t, "a16c789/ntAX7ld24FiLTFs", "flowerPotOpen");
        var i = e("EffectType")
          , a = cc.Class({
            extends: cc.Component,
            properties: {
                dragon: dragonBones.ArmatureDisplay
            },
            start: function() {
                this.dragon.on(dragonBones.EventObject.COMPLETE, this.onAnimComplete, this)
            },
            onAnimComplete: function() {
                cc.Mgr.EffectMgr.ObBackToPool(this.node, i.flowerPotOpen)
            },
            playAnimation: function() {
                this.dragon.playAnimation("newAnimation", 1)
            }
        });
        t.exports = a,
        cc._RF.pop()
    }
    , {
        EffectType: "EffectType"
    }],
    flowerPot: [function(e, t) {
        "use strict";
        cc._RF.push(t, "9d715P7w+tAW4A78b3FtBtr", "flowerPot");
        var i = e("MyEnum")
          , a = e("Event")
          , n = cc.Class({
            extends: cc.Component,
            properties: {
                dragon: dragonBones.ArmatureDisplay
            },
            init: function(e, t) {
                var a = this;
                this.index = e,
                this.node.position = cc.v2(t.x, t.y + 200),
                cc.tween(this.node).to(.1, {
                    position: cc.v2(t.x, t.y)
                }, {
                    easing: "quadIn"
                }).call(function() {
                    cc.Mgr.game.needGuide || a.scheduleOnce(a.playDianji, 8)
                }).start(),
                this.node.zIndex = 50 + e,
                cc.Mgr.DragonMgr.create(i.DragonType.plant, this.dragon),
                cc.Mgr.DragonMgr.playAnimation(i.DragonType.plant, this.dragon, "idle", !0),
                this.dragon.on(dragonBones.EventObject.FRAME_EVENT, this.onFrameEvent, this),
                this.dragon.on(dragonBones.EventObject.COMPLETE, this.plantDestroy, this),
                this.node.on(cc.Node.EventType.TOUCH_START, function(e) {
                    this.TouchStart(e)
                }, this),
                cc.Mgr.AudioMgr.playSFX(i.AudioType.flower_pot_land),
                this.hasTouched = !1
            },
            setPlantInfo: function(e) {
                this.level = e
            },
            setShowDetailsInUI: function(e, t, i) {
                void 0 === i && (i = !0),
                this.node.getChildByName("shadow").active = !1,
                this.dragon.node.color = cc.Mgr.Utils.hexToColor(t),
                i && this.dragon.playAnimation("idle", -1),
                this.node.scale = e
            },
            playDianji: function() {
                this.hasTouched = !0,
                cc.Mgr.DragonMgr.playAnimation(i.DragonType.plant, this.dragon, "open", !1)
            },
            onFrameEvent: function(e) {
                if ("O" == e.name) {
                    var t = {};
                    t.level = this.level,
                    t.index = this.index,
                    cc.Mgr.plantMgr.flowerPotOpen(t)
                }
            },
            TouchStart: function() {
                !0 !== this.hasTouched && (this.hasTouched = !0,
                cc.Mgr.DragonMgr.playAnimation(i.DragonType.plant, this.dragon, "open", !1),
                this.unscheduleAllCallbacks())
            },
            plantDestroy: function() {
                cc.Mgr.DragonMgr.deleteDragon(i.DragonType.plant, this.dragon),
                this.node.destroy(),
                cc.Mgr.game.needGuide && cc.Mgr.game.curGuideStep == i.GuideType.guide6 && cc.director.GlobalEvent.emit(a.singleGuideComplete, {
                    step: i.GuideType.guide6
                })
            },
            start: function() {}
        });
        t.exports = n,
        cc._RF.pop()
    }
    , {
        Event: "Event",
        MyEnum: "MyEnum"
    }],
    game: [function(e, t) {
        "use strict";
        cc._RF.push(t, "3d2ceceV2lFhoeGwWKzLlSQ", "game");
        var i = e("MyEnum")
          , a = e("Config")
          , n = e("Event")
          , c = e("MissionType")
          , s = e("DataType")
          , o = cc.Class({
            ctor: function() {
                this.init()
            },
            properties: {
                level: 1,
                curBoshu: 1,
                curLevelMaxBoshu: 0,
                money: 0,
                gems: 0,
                plantMaxLv: 1,
                rageTimer: 0,
                autoTimer: 0,
                fireTimer: 0,
                iceTimer: 0,
                critTimer: 0,
                plantAttackRange: 400,
                bulletSpeed: 500,
                zombieSpeedCoefficient: 55,
                zombieDistance: 200,
                spinADResetTime: 0,
                spinADTimeCount: 0,
                spinUseGemTime: 0,
                coinPos: cc.Vec2,
                gemPos: cc.Vec2,
                curProgress: 0,
                needGuide: !1,
                curGuideStep: 0,
                plantMergeGuideTime: 20,
                plantMergeGuideHideTime: 20,
                airDropTime: 16,
                lastAdsGetPlantTime: 0,
                enterGameTimeStamp: 0,
                shareSwitch: !1,
                shareMaxNum: 10,
                doubleCoinLeftTime: 0,
                doubleBtnIntervalTime: 0,
                doubleCoinState: !1,
                keepInGameTime: 0,
                tipBuyTimes: 0,
                canBuyPlantId: 1,
                onlineCoinNum: 0,
                pickOutMaxLvPlant: -1,
                lastSignDate: 0,
                hasSignDayNum: 0,
                clearCg: !0
            },
            statics: {
                instance: null,
                getInstance: function() {
                    return null == o.instance && (o.instance = new o),
                    o.instance
                }
            },
            init: function() {
                this.plantBuyRecord = {},
                this.plantsPK = new Array,
                this.achievementProgress = new Array,
                this.dailyMissions = new Array,
                this.plantsOwn = new Array,
                this.exchangeCoinConfig = {},
                this.exchangeCoinConfig.openLevel = 4,
                this.exchangeCoinConfig.buyBuyButtonWight = 30,
                this.exchangeCoinConfig.wrongClickWight = 50,
                this.exchangeCoinConfig.maxExchangeNum = 20,
                this.exchangeCoinConfig.bannerUpNum = 3,
                this.freeFlag = {},
                this.freeFlag.TurnTable = !0,
                this.currentExchangeCount = 0,
                this.needShowExchangeCoinCount = 0,
                this.needShowIAPCount = 0,
                this.winSize = cc.view.getVisibleSize()
            },
            resetKeepInGameTime: function() {
                this.keepInGameTime = cc.Mgr.game.dailyMissions[4].progress
            },
            resetplantBuyRecord: function() {
                for (var e = 0; e < cc.Mgr.Config.allPlantCount; e++)
                    this.plantBuyRecord[e + 1] = 0
            },
            pauseGame: function() {
                cc.game.pause(),
                cc.Mgr.AudioMgr.pauseAll()
            },
            resumeGame: function() {
                cc.game.resume(),
                cc.Mgr.AudioMgr.resumeAll(),
                cc.Mgr.game.enterGameTimeStamp = cc.Mgr.Utils.GetSysTime(),
                null != cc.Mgr.UIMgr.bigResultNode && !0 === cc.Mgr.UIMgr.bigResultNode.active && cc.Mgr.UIMgr.bigResultNode.getComponent("bigResult").reSchedule()
            },
            updatePlantBuyRecord: function(e) {
                this.plantBuyRecord && this.plantBuyRecord[e] ? this.plantBuyRecord[e] += 1 : this.plantBuyRecord[e] = 0
            },
            getSpaceGirdNum: function() {
                for (var e = 0, t = 0; t < this.plantsPK.length; t++)
                    this.plantsPK[t].type == i.GridState.none && e++;
                return e
            },
            getPlantsPK: function() {
                for (var e = [], t = 0; t < cc.Mgr.plantMgr.grids.length; t++) {
                    var a = cc.Mgr.plantMgr.grids[t]
                      , n = {};
                    n.type = a.type,
                    n.type != i.GridState.plant && n.type != i.GridState.lock && n.type != i.GridState.flowerPot || (n.level = a.content.level,
                    n.index = a.content.index),
                    e.push(n)
                }
                return cc.Mgr.game.plantsPK = e,
                0 == e.length ? void 0 : e
            },
            getTGAPlantLayer: function() {
                for (var e = this.plantsPK, t = "", a = 0; a < e.length; a++) {
                    var n = e[a];
                    n.type == i.GridState.plant || n.type == i.GridState.flowerPot ? t += n.level : n.type == i.GridState.lock ? t += "-1" : t += "0",
                    a < e.length - 1 && (t += "_")
                }
                return t
            },
            getTGAPlantLayerByIndex: function(e) {
                var t;
                return null == cc.Mgr.plantMgr.grids || cc.Mgr.plantMgr.grids.length <= 0 ? (t = this.plantsPK[e]).type == i.GridState.plant || t.type == i.GridState.flowerPot ? t.level : t.type == i.GridState.lock ? -1 : 0 : (t = cc.Mgr.plantMgr.grids[e]).type == i.GridState.plant || t.type == i.GridState.flowerPot ? t.content.level : t.type == i.GridState.lock ? -1 : 0
            },
            getMissionProgressById: function(e) {
                for (var t = 0; t < this.dailyMissions.length; t++) {
                    var i = this.dailyMissions[t];
                    if (e == i.id)
                        return i
                }
                return this.dailyMissions[0]
            },
            updateMissionProgressById: function(e) {
                for (var t = 0; t < this.dailyMissions.length; t++)
                    if (e == this.dailyMissions[t].id)
                        return e < c.AdsShow && this.dailyMissions[t].progress < this.dailyMissions[t].checkNum ? this.dailyMissions[t].progress += 1 : e != c.AdsShow && e != c.InGameTime || (this.dailyMissions[t].checklv ? this.dailyMissions[t].checklv < cc.Mgr.Config.missionCheckList[e].length - 1 ? this.dailyMissions[t].progress += 1 : this.dailyMissions[t].progress < cc.Mgr.Config.missionCheckList[e][this.dailyMissions[t].checklv] && (this.dailyMissions[t].progress += 1) : (this.dailyMissions[t].checklv = 0,
                        this.dailyMissions[t].progress += 1)),
                        void cc.director.GlobalEvent.emit(n.checkMissionAndAchieve, {})
            },
            updateMissionProgressByType: function(e, t) {
                for (var i = 0; i < this.dailyMissions.length; i++)
                    if (e == this.dailyMissions[i].id)
                        return void (this.dailyMissions[i].progress = t)
            },
            claimMissionRewardById: function(e) {
                for (var t = 0; t < this.dailyMissions.length; t++)
                    if (e == this.dailyMissions[t].id)
                        return void (e < c.AdsShow ? (this.dailyMissions[t].claimed = 1,
                        this.dailyMissions[t].progress = 0) : e != c.AdsShow && e != c.InGameTime || (this.dailyMissions[t].checklv ? (this.dailyMissions[t].checklv += 1,
                        this.dailyMissions[t].checklv > cc.Mgr.Config.missionCheckList[e].length - 1 && (this.dailyMissions[t].claimed = 1,
                        this.dailyMissions[t].progress = 0)) : this.dailyMissions[t].checklv = 1))
            },
            clearMissionDataToNextDay: function() {
                for (var e = 0; e < a.missionDataList.length; e++)
                    a.missionDataList[e],
                    this.dailyMissions[e].progress = 0,
                    this.dailyMissions[e].checklv = 0,
                    this.dailyMissions[e].claimed = 0
            },
            getAchieveDataById: function(e) {
                for (var t = 0; t < this.achievementProgress.length; t++) {
                    var i = this.achievementProgress[t];
                    if (e == i.id)
                        return i
                }
                return this.achievementProgress[0]
            },
            claimAchieveRewardById: function(e) {
                for (var t = 0; t < this.achievementProgress.length; t++)
                    if (e == this.achievementProgress[t].id)
                        return this.achievementProgress[t].checklv += 1,
                        this.achievementProgress[t].progress = 0,
                        void (this.achievementProgress[t].checklv > 4 ? this.achievementProgress[t].finished = 1 : this.achievementProgress[t].finished = 0)
            },
            updatePlantOwnsByLv: function(e) {
                for (var t = 0; t < this.plantsOwn.length; t++)
                    if (e == this.plantsOwn[t].lv)
                        return this.plantsOwn[t].ownNum += 1,
                        void cc.director.GlobalEvent.emit(n.checkMissionAndAchieve, {})
            },
            getPlantOwnsDataByLv: function(e) {
                for (var t = 0; t < this.plantsOwn.length; t++)
                    if (e == this.plantsOwn[t].lv)
                        return this.plantsOwn[t].ownNum
            },
            updateAchievementProgressByPlant: function() {},
            getDronePot: function() {
                return this.dronePot = cc.Mgr.flowerPotMgr.droneFlowerFot.plantInfos,
                this.dronePot
            },
            getTurntablePot: function() {
                return this.turntablePot = cc.Mgr.flowerPotMgr.turnTableFlowerFot.plantInfos,
                this.turntablePot
            },
            getShopBuyPot: function() {
                return this.shopBuyPot = cc.Mgr.flowerPotMgr.shopFlowerFot.plantInfos,
                this.shopBuyPot
            },
            checkOutMissionIsFinished: function() {
                for (var e = 0; e < this.dailyMissions.length; e++) {
                    var t = this.dailyMissions[e];
                    if (t.misType < c.AdsShow) {
                        if (t.progress >= t.checkNum && 1 != t.claimed)
                            return !0
                    } else if (t.misType == c.AdsShow) {
                        if (0 == t.checklv && t.progress >= cc.Mgr.Config.missionCheckList[t.id][0] && 1 != t.claimed)
                            return !0;
                        if (1 == t.checklv && t.progress >= cc.Mgr.Config.missionCheckList[t.id][1] && 1 != t.claimed)
                            return !0
                    } else if (t.misType == c.InGameTime) {
                        if (0 == t.checklv && t.progress >= cc.Mgr.Config.missionCheckList[t.id][0] && 1 != t.claimed)
                            return !0;
                        if (1 == t.checklv && t.progress >= cc.Mgr.Config.missionCheckList[t.id][1] && 1 != t.claimed)
                            return !0;
                        if (2 == t.checklv && t.progress >= cc.Mgr.Config.missionCheckList[t.id][2] && 1 != t.claimed)
                            return !0
                    }
                }
                return !1
            },
            checkOutAchieveDataIsFinished: function() {
                for (var e = [5, 20, 50, 100], t = [], i = 0; i < this.achievementProgress.length; i++) {
                    var a = this.achievementProgress[i];
                    0 != this.checkLvToGainGems(a.id, a.checklv) && 0 == a.finished && t.length < 5 && t.push(a)
                }
                for (i = 0; i < t.length; i++) {
                    var n = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(s.AchievementData, t[i].id);
                    if (this.getPlantOwnsDataByLv(n.Level) >= e[t[i].checklv])
                        return !0
                }
                return !1
            },
            checkLvToGainGems: function(e, t) {
                var i = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(s.AchievementData, e);
                return 0 == t ? i.Gain_5 : 1 == t ? i.Gain_20 : 2 == t ? i.Gain_50 : 3 == t ? i.Gain_100 : 4 == t ? i.Gain_200 : void 0
            },
            caculatePlantPrice: function(e, t) {
                t = t || 0;
                var i = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(s.PlantData, e);
                return e >= 1 && e <= 20 ? i.price * BigInt(Math.round(100 * Math.pow(1.1, t))) / BigInt(100) : i.price * BigInt(Math.round(100 * Math.pow(1.2, t))) / BigInt(100)
            }
        });
        t.exports = o,
        cc._RF.pop()
    }
    , {
        Config: "Config",
        DataType: "DataType",
        Event: "Event",
        MissionType: "MissionType",
        MyEnum: "MyEnum"
    }],
    jinbiCtrl: [function(e, t) {
        "use strict";
        cc._RF.push(t, "ddceegtwodP3oU90zxYMfDB", "jinbiCtrl"),
        e("uiConfig");
        var i = e("MyEnum");
        cc.Class({
            extends: cc.Component,
            properties: {
                type: 0,
                jinbiEffectNode: cc.Node,
                jinbis: [cc.Node]
            },
            jinbiStart: function() {
                var e, t = this, i = this.jinbis[this.index].getComponent("jinbi");
                if (0 == this.type) {
                    var a = cc.Mgr.UIMgr.topCoinNode.convertToWorldSpaceAR(this.node)
                      , n = this.node.convertToNodeSpaceAR(a);
                    n.x -= 20,
                    e = n
                } else {
                    var c = cc.Mgr.UIMgr.topGemNode.convertToWorldSpaceAR(this.node)
                      , s = this.node.convertToNodeSpaceAR(c);
                    s.x -= 20,
                    e = s
                }
                var o = 0;
                this.flyout && (o = 200);
                var r = cc.v2(e.x, e.y + o);
                i.init(this.type, r),
                i.complete = function() {
                    if (t.completeNum++,
                    !t.jinbiEffectNode.active) {
                        var i = 0 == t.type ? 60 : 100
                          , a = cc.v2(e.x, r.y - i);
                        t.jinbiEffectNode.position = a,
                        t.jinbiEffectNode.active = !0
                    }
                    t.completeNum == t.jinbis.length && t.node.destroy()
                }
                ,
                this.index++
            },
            showUI: function(e) {
                this.flyout = e,
                this.completeNum = 0,
                this.index = 0;
                var t = 0
                  , a = 0;
                0 == this.type ? (a = .03,
                cc.Mgr.AudioMgr.playSFX(i.AudioType.coin)) : (a = .045,
                cc.Mgr.AudioMgr.playSFX(i.AudioType.gem));
                for (var n = 0; n < this.jinbis.length; n++)
                    this.scheduleOnce(function() {
                        this.jinbiStart()
                    }, t),
                    t += a
            },
            start: function() {}
        }),
        cc._RF.pop()
    }
    , {
        MyEnum: "MyEnum",
        uiConfig: "uiConfig"
    }],
    jinbi: [function(e, t) {
        "use strict";
        cc._RF.push(t, "12016hKCxdCV7ae7jferEYl", "jinbi"),
        cc.Class({
            extends: cc.Component,
            properties: {
                delayTime: 0
            },
            start: function() {},
            init: function(e, t) {
                var i = this;
                0 == e ? (this.node.scale = 0,
                cc.tween(this.node).to(.2, {
                    scale: 1
                }).by(.1, {
                    position: cc.v2(0, 20)
                }).to(.2, {
                    position: t
                }, {
                    easing: "sineInOut"
                }).call(function() {
                    i.complete()
                }).start()) : (this.node.opacity = 0,
                cc.tween(this.node).to(.2, {
                    opacity: 255
                }).to(.3, {
                    scale: 1.5,
                    position: t,
                    angle: 0
                }, {
                    easing: "sineInOut"
                }).call(function() {
                    i.complete()
                }).start())
            }
        }),
        cc._RF.pop()
    }
    , {}],
    jinggai: [function(e, t) {
        "use strict";
        cc._RF.push(t, "77f88UCtKdAyJKlLwU+XQHt", "jinggai");
        var i = e("MyEnum");
        cc.Class({
            extends: cc.Component,
            properties: {
                dragon: dragonBones.ArmatureDisplay
            },
            start: function() {
                cc.Mgr.DragonMgr.create(i.DragonType.jinggai, this.dragon)
            },
            onCollisionEnter: function(e) {
                "zombie" == e.node.group && 1 == e.tag && cc.Mgr.DragonMgr.playAnimation(i.DragonType.jinggai, this.dragon, "touch", !1, 1)
            },
            onCollisionExit: function(e) {
                "zombie" == e.node.group && e.tag
            }
        }),
        cc._RF.pop()
    }
    , {
        MyEnum: "MyEnum"
    }],
    "js-big-decimal": [function(e, t, i) {
        (function(e) {
            "use strict";
            var a, n;
            cc._RF.push(t, "b8742j7JClOIJ7HVJj3ykbg", "js-big-decimal"),
            a = e,
            n = function() {
                return function(e) {
                    var t = {};
                    function i(a) {
                        if (t[a])
                            return t[a].exports;
                        var n = t[a] = {
                            i: a,
                            l: !1,
                            exports: {}
                        };
                        return e[a].call(n.exports, n, n.exports, i),
                        n.l = !0,
                        n.exports
                    }
                    return i.m = e,
                    i.c = t,
                    i.d = function(e, t, a) {
                        i.o(e, t) || Object.defineProperty(e, t, {
                            enumerable: !0,
                            get: a
                        })
                    }
                    ,
                    i.r = function(e) {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                            value: "Module"
                        }),
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        })
                    }
                    ,
                    i.t = function(e, t) {
                        if (1 & t && (e = i(e)),
                        8 & t)
                            return e;
                        if (4 & t && "object" == typeof e && e && e.__esModule)
                            return e;
                        var a = Object.create(null);
                        if (i.r(a),
                        Object.defineProperty(a, "default", {
                            enumerable: !0,
                            value: e
                        }),
                        2 & t && "string" != typeof e)
                            for (var n in e)
                                i.d(a, n, function(t) {
                                    return e[t]
                                }
                                .bind(null, n));
                        return a
                    }
                    ,
                    i.n = function(e) {
                        var t = e && e.__esModule ? function() {
                            return e.default
                        }
                        : function() {
                            return e
                        }
                        ;
                        return i.d(t, "a", t),
                        t
                    }
                    ,
                    i.o = function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }
                    ,
                    i.p = "",
                    i(i.s = 6)
                }([function(e, t) {
                    function i(e) {
                        for (var t = "", i = e.length, a = e.split(".")[1], n = a ? a.length : 0, s = 0; s < i; s++)
                            e[s] >= "0" && e[s] <= "9" ? t += 9 - parseInt(e[s]) : t += e[s];
                        return c(t, n > 0 ? "0." + new Array(n).join("0") + "1" : "1")
                    }
                    function a(e) {
                        var t = e.split(".");
                        for (t[0] || (t[0] = "0"); "0" == t[0][0] && t[0].length > 1; )
                            t[0] = t[0].substring(1);
                        return t[0] + (t[1] ? "." + t[1] : "")
                    }
                    function n(e, t) {
                        var i = e.split(".")
                          , a = t.split(".")
                          , n = i[0].length
                          , c = a[0].length;
                        return n > c ? a[0] = new Array(Math.abs(n - c) + 1).join("0") + (a[0] ? a[0] : "") : i[0] = new Array(Math.abs(n - c) + 1).join("0") + (i[0] ? i[0] : ""),
                        n = i[1] ? i[1].length : 0,
                        c = a[1] ? a[1].length : 0,
                        (n || c) && (n > c ? a[1] = (a[1] ? a[1] : "") + new Array(Math.abs(n - c) + 1).join("0") : i[1] = (i[1] ? i[1] : "") + new Array(Math.abs(n - c) + 1).join("0")),
                        [e = i[0] + (i[1] ? "." + i[1] : ""), t = a[0] + (a[1] ? "." + a[1] : "")]
                    }
                    function c(e, t) {
                        var i;
                        e = (i = n(e, t))[0],
                        t = i[1];
                        for (var a = "", c = 0, s = e.length - 1; s >= 0; s--)
                            if ("." !== e[s]) {
                                var o = parseInt(e[s]) + parseInt(t[s]) + c;
                                a = o % 10 + a,
                                c = Math.floor(o / 10)
                            } else
                                a = "." + a;
                        return c ? c.toString() + a : a
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.pad = t.trim = t.add = void 0,
                    t.add = function(e, t) {
                        var s;
                        void 0 === t && (t = "0");
                        var o = 0
                          , r = -1;
                        "-" == e[0] && (o++,
                        r = 1,
                        (e = e.substring(1)).length),
                        "-" == t[0] && (o++,
                        r = 2,
                        (t = t.substring(1)).length),
                        e = a(e),
                        t = a(t),
                        e = (s = n(a(e), a(t)))[0],
                        t = s[1],
                        1 == o && (1 == r ? e = i(e) : t = i(t));
                        var l = c(e, t);
                        return o ? 2 == o ? "-" + a(l) : e.length < l.length ? a(l.substring(1)) : "-" + a(i(l)) : a(l)
                    }
                    ,
                    t.trim = a,
                    t.pad = n
                }
                , function(e, t, i) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.roundOff = void 0;
                    var a = i(2);
                    function n(e, t, i, n) {
                        if (!e || e === new Array(e.length + 1).join("0"))
                            return !1;
                        if (n === a.RoundingModes.DOWN || !i && n === a.RoundingModes.FLOOR || i && n === a.RoundingModes.CEILING)
                            return !1;
                        if (n === a.RoundingModes.UP || i && n === a.RoundingModes.FLOOR || !i && n === a.RoundingModes.CEILING)
                            return !0;
                        var c = "5" + new Array(e.length).join("0");
                        if (e > c)
                            return !0;
                        if (e < c)
                            return !1;
                        switch (n) {
                        case a.RoundingModes.HALF_DOWN:
                            return !1;
                        case a.RoundingModes.HALF_UP:
                            return !0;
                        case a.RoundingModes.HALF_EVEN:
                        default:
                            return parseInt(t[t.length - 1]) % 2 == 1
                        }
                    }
                    function c(e, t) {
                        void 0 === t && (t = 0),
                        t || (t = 1),
                        "number" == typeof e && e.toString();
                        for (var i = "", a = e.length - 1; a >= 0; a--) {
                            var n = parseInt(e[a]) + t;
                            10 == n ? (t = 1,
                            n = 0) : t = 0,
                            i += n
                        }
                        return t && (i += t),
                        i.split("").reverse().join("")
                    }
                    t.roundOff = function e(t, i, s) {
                        if (void 0 === i && (i = 0),
                        void 0 === s && (s = a.RoundingModes.HALF_EVEN),
                        s === a.RoundingModes.UNNECESSARY)
                            throw new Error("UNNECESSARY Rounding Mode has not yet been implemented");
                        "number" == typeof t && (t = t.toString());
                        var o = !1;
                        "-" === t[0] && (o = !0,
                        t = t.substring(1));
                        var r = t.split(".")
                          , l = r[0]
                          , g = r[1];
                        if (i < 0) {
                            if (i = -i,
                            l.length <= i)
                                return "0";
                            var h = l.substr(0, l.length - i);
                            return (o ? "-" : "") + (h = e(t = h + "." + l.substr(l.length - i) + g, 0, s)) + new Array(i + 1).join("0")
                        }
                        if (0 == i)
                            return l.length,
                            n(r[1], l, o, s) ? (o ? "-" : "") + c(l) : (o ? "-" : "") + l;
                        if (!r[1])
                            return (o ? "-" : "") + l + "." + new Array(i + 1).join("0");
                        if (r[1].length < i)
                            return (o ? "-" : "") + l + "." + r[1] + new Array(i - r[1].length + 1).join("0");
                        g = r[1].substring(0, i);
                        var d = r[1].substring(i);
                        return d && n(d, g, o, s) && (g = c(g)).length > i ? c(l, parseInt(g[0])) + "." + g.substring(1) : (o ? "-" : "") + l + "." + g
                    }
                }
                , function(e, t) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.RoundingModes = void 0,
                    function(e) {
                        e[e.CEILING = 0] = "CEILING",
                        e[e.DOWN = 1] = "DOWN",
                        e[e.FLOOR = 2] = "FLOOR",
                        e[e.HALF_DOWN = 3] = "HALF_DOWN",
                        e[e.HALF_EVEN = 4] = "HALF_EVEN",
                        e[e.HALF_UP = 5] = "HALF_UP",
                        e[e.UNNECESSARY = 6] = "UNNECESSARY",
                        e[e.UP = 7] = "UP"
                    }(t.RoundingModes || (t.RoundingModes = {}))
                }
                , function(e, t) {
                    function i(e) {
                        for (; "0" == e[0]; )
                            e = e.substr(1);
                        if (-1 != e.indexOf("."))
                            for (; "0" == e[e.length - 1]; )
                                e = e.substr(0, e.length - 1);
                        return "" == e || "." == e ? e = "0" : "." == e[e.length - 1] && (e = e.substr(0, e.length - 1)),
                        "." == e[0] && (e = "0" + e),
                        e
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.multiply = void 0,
                    t.multiply = function(e, t) {
                        e = e.toString(),
                        t = t.toString();
                        var a = 0;
                        "-" == e[0] && (a++,
                        e = e.substr(1)),
                        "-" == t[0] && (a++,
                        t = t.substr(1)),
                        e = i(e),
                        t = i(t);
                        var n = 0
                          , c = 0;
                        -1 != e.indexOf(".") && (n = e.length - e.indexOf(".") - 1),
                        -1 != t.indexOf(".") && (c = t.length - t.indexOf(".") - 1);
                        var s, o, r = n + c;
                        if (e = i(e.replace(".", "")),
                        t = i(t.replace(".", "")),
                        e.length < t.length) {
                            var l = e;
                            e = t,
                            t = l
                        }
                        if ("0" == t)
                            return "0";
                        for (var g = t.length, h = 0, d = [], u = g - 1, p = "", m = 0; m < g; m++)
                            d[m] = e.length - 1;
                        for (m = 0; m < 2 * e.length; m++) {
                            for (var f = 0, M = t.length - 1; M >= u && M >= 0; M--)
                                d[M] > -1 && d[M] < e.length && (f += parseInt(e[d[M]--]) * parseInt(t[M]));
                            f += h,
                            h = Math.floor(f / 10),
                            p = f % 10 + p,
                            u--
                        }
                        return p = i((s = p,
                        0 == (o = r) ? s : (s = o >= s.length ? new Array(o - s.length + 1).join("0") + s : s).substr(0, s.length - o) + "." + s.substr(s.length - o, o))),
                        1 == a && (p = "-" + p),
                        p
                    }
                }
                , function(e, t, i) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.divide = void 0;
                    var a = i(0)
                      , n = i(1);
                    t.divide = function(e, t, i) {
                        if (void 0 === i && (i = 8),
                        0 == t)
                            throw new Error("Cannot divide by 0");
                        if (e = e.toString(),
                        t = t.toString(),
                        e = e.replace(/(\.\d*?[1-9])0+$/g, "$1").replace(/\.0+$/, ""),
                        t = t.replace(/(\.\d*?[1-9])0+$/g, "$1").replace(/\.0+$/, ""),
                        0 == e)
                            return "0";
                        var c = 0;
                        "-" == t[0] && (t = t.substring(1),
                        c++),
                        "-" == e[0] && (e = e.substring(1),
                        c++);
                        var s = t.indexOf(".") > 0 ? t.length - t.indexOf(".") - 1 : -1;
                        if (t = a.trim(t.replace(".", "")),
                        s >= 0) {
                            var o = e.indexOf(".") > 0 ? e.length - e.indexOf(".") - 1 : -1;
                            if (-1 == o)
                                e = a.trim(e + new Array(s + 1).join("0"));
                            else if (s > o)
                                e = e.replace(".", ""),
                                e = a.trim(e + new Array(s - o + 1).join("0"));
                            else if (s < o) {
                                var r = (e = e.replace(".", "")).length - o + s;
                                e = a.trim(e.substring(0, r) + "." + e.substring(r))
                            } else
                                s == o && (e = a.trim(e.replace(".", "")))
                        }
                        var l = 0
                          , g = t.length
                          , h = ""
                          , d = e.indexOf(".") > -1 && e.indexOf(".") < g ? e.substring(0, g + 1) : e.substring(0, g);
                        if (e = e.indexOf(".") > -1 && e.indexOf(".") < g ? e.substring(g + 1) : e.substring(g),
                        d.indexOf(".") > -1) {
                            var u = d.length - d.indexOf(".") - 1;
                            g > (d = d.replace(".", "")).length && (u += g - d.length,
                            d += new Array(g - d.length + 1).join("0")),
                            l = u,
                            h = "0." + new Array(u).join("0")
                        }
                        for (i += 2; l <= i; ) {
                            for (var p = 0; parseInt(d) >= parseInt(t); )
                                d = a.add(d, "-" + t),
                                p++;
                            h += p,
                            e ? ("." == e[0] && (h += ".",
                            l++,
                            e = e.substring(1)),
                            d += e.substring(0, 1),
                            e = e.substring(1)) : (l || (h += "."),
                            l++,
                            d += "0")
                        }
                        return (1 == c ? "-" : "") + a.trim(n.roundOff(h, i - 2))
                    }
                }
                , function(e, t, i) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.negate = t.subtract = void 0;
                    var a = i(0);
                    function n(e) {
                        return "-" == e[0] ? e.substr(1) : "-" + e
                    }
                    t.subtract = function(e, t) {
                        return e = e.toString(),
                        t = n(t = t.toString()),
                        a.add(e, t)
                    }
                    ,
                    t.negate = n
                }
                , function(e, t, i) {
                    var a = i(0)
                      , n = i(1)
                      , c = i(3)
                      , s = i(4)
                      , o = i(7)
                      , r = i(8)
                      , l = i(5)
                      , g = i(2)
                      , h = function() {
                        function e(t) {
                            void 0 === t && (t = "0"),
                            this.value = e.validate(t)
                        }
                        return e.validate = function(e) {
                            if (e) {
                                if (e = e.toString(),
                                isNaN(e))
                                    throw Error("Parameter is not a number: " + e);
                                "+" == e[0] && (e = e.substring(1))
                            } else
                                e = "0";
                            if (/e/i.test(e)) {
                                var t = e.split(/[eE]/)
                                  , i = t[0]
                                  , n = t[1];
                                i = a.trim(i),
                                n = parseInt(n) + i.indexOf("."),
                                e = (i = i.replace(".", "")).length < n ? i + new Array(n - i.length + 1).join("0") : i.length >= n && n > 0 ? a.trim(i.substring(0, n)) + (i.length > n ? "." + i.substring(n) : "") : "0." + new Array(1 - n).join("0") + i
                            }
                            return e
                        }
                        ,
                        e.prototype.getValue = function() {
                            return this.value
                        }
                        ,
                        e.getPrettyValue = function(t, i, a) {
                            if (i || a) {
                                if (!i || !a)
                                    throw Error("Illegal Arguments. Should pass both digits and separator or pass none")
                            } else
                                i = 3,
                                a = ",";
                            var n = "-" == (t = e.validate(t)).charAt(0);
                            n && (t = t.substring(1));
                            for (var c = t.indexOf("."), s = "", o = c = c > 0 ? c : t.length; o > 0; )
                                o < i ? (i = o,
                                o = 0) : o -= i,
                                s = t.substring(o, o + i) + (o < c - i && o >= 0 ? a : "") + s;
                            return (n ? "-" : "") + s + t.substring(c)
                        }
                        ,
                        e.prototype.getPrettyValue = function(t, i) {
                            return e.getPrettyValue(this.value, t, i)
                        }
                        ,
                        e.round = function(t, i, a) {
                            if (void 0 === i && (i = 0),
                            void 0 === a && (a = g.RoundingModes.HALF_EVEN),
                            t = e.validate(t),
                            isNaN(i))
                                throw Error("Precision is not a number: " + i);
                            return n.roundOff(t, i, a)
                        }
                        ,
                        e.prototype.round = function(t, i) {
                            if (void 0 === t && (t = 0),
                            void 0 === i && (i = g.RoundingModes.HALF_EVEN),
                            isNaN(t))
                                throw Error("Precision is not a number: " + t);
                            return new e(n.roundOff(this.value, t, i))
                        }
                        ,
                        e.floor = function(t) {
                            return -1 === (t = e.validate(t)).indexOf(".") ? t : e.round(t, 0, g.RoundingModes.FLOOR)
                        }
                        ,
                        e.prototype.floor = function() {
                            return -1 === this.value.indexOf(".") ? new e(this.value) : new e(this.value).round(0, g.RoundingModes.FLOOR)
                        }
                        ,
                        e.ceil = function(t) {
                            return -1 === (t = e.validate(t)).indexOf(".") ? t : e.round(t, 0, g.RoundingModes.CEILING)
                        }
                        ,
                        e.prototype.ceil = function() {
                            return -1 === this.value.indexOf(".") ? new e(this.value) : new e(this.value).round(0, g.RoundingModes.CEILING)
                        }
                        ,
                        e.add = function(t, i) {
                            return t = e.validate(t),
                            i = e.validate(i),
                            a.add(t, i)
                        }
                        ,
                        e.prototype.add = function(t) {
                            return new e(a.add(this.value, t.getValue()))
                        }
                        ,
                        e.subtract = function(t, i) {
                            return t = e.validate(t),
                            i = e.validate(i),
                            l.subtract(t, i)
                        }
                        ,
                        e.prototype.subtract = function(t) {
                            return new e(l.subtract(this.value, t.getValue()))
                        }
                        ,
                        e.multiply = function(t, i) {
                            return t = e.validate(t),
                            i = e.validate(i),
                            c.multiply(t, i)
                        }
                        ,
                        e.prototype.multiply = function(t) {
                            return new e(c.multiply(this.value, t.getValue()))
                        }
                        ,
                        e.divide = function(t, i, a) {
                            return t = e.validate(t),
                            i = e.validate(i),
                            s.divide(t, i, a)
                        }
                        ,
                        e.prototype.divide = function(t, i) {
                            return new e(s.divide(this.value, t.getValue(), i))
                        }
                        ,
                        e.modulus = function(t, i) {
                            return t = e.validate(t),
                            i = e.validate(i),
                            o.modulus(t, i)
                        }
                        ,
                        e.prototype.modulus = function(t) {
                            return new e(o.modulus(this.value, t.getValue()))
                        }
                        ,
                        e.compareTo = function(t, i) {
                            return t = e.validate(t),
                            i = e.validate(i),
                            r.compareTo(t, i)
                        }
                        ,
                        e.prototype.compareTo = function(e) {
                            return r.compareTo(this.value, e.getValue())
                        }
                        ,
                        e.negate = function(t) {
                            return t = e.validate(t),
                            l.negate(t)
                        }
                        ,
                        e.prototype.negate = function() {
                            return new e(l.negate(this.value))
                        }
                        ,
                        e.RoundingModes = g.RoundingModes,
                        e
                    }();
                    e.exports = h
                }
                , function(e, t, i) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.modulus = void 0;
                    var a = i(4)
                      , n = i(1)
                      , c = i(3)
                      , s = i(5)
                      , o = i(2);
                    function r(e) {
                        if (-1 != e.indexOf("."))
                            throw new Error("Modulus of non-integers not supported")
                    }
                    t.modulus = function(e, t) {
                        if (0 == t)
                            throw new Error("Cannot divide by 0");
                        e = e.toString(),
                        t = t.toString(),
                        r(e),
                        r(t);
                        var i = "";
                        return "-" == e[0] && (i = "-",
                        e = e.substr(1)),
                        "-" == t[0] && (t = t.substr(1)),
                        i + s.subtract(e, c.multiply(t, n.roundOff(a.divide(e, t), 0, o.RoundingModes.FLOOR)))
                    }
                }
                , function(e, t, i) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.compareTo = void 0;
                    var a = i(0);
                    t.compareTo = function(e, t) {
                        var i, n = !1;
                        if ("-" == e[0] && "-" != t[0])
                            return -1;
                        if ("-" != e[0] && "-" == t[0])
                            return 1;
                        if ("-" == e[0] && "-" == t[0] && (e = e.substr(1),
                        t = t.substr(1),
                        n = !0),
                        e = (i = a.pad(e, t))[0],
                        t = i[1],
                        0 == e.localeCompare(t))
                            return 0;
                        for (var c = 0; c < e.length; c++)
                            if (e[c] != t[c])
                                return e[c] > t[c] ? n ? -1 : 1 : n ? 1 : -1;
                        return 0
                    }
                }
                ])
            }
            ,
            "object" == typeof i && "object" == typeof t ? t.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == typeof i ? i.bigDecimal = n() : a.bigDecimal = n(),
            cc._RF.pop()
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {}],
    lockGird: [function(e, t) {
        "use strict";
        cc._RF.push(t, "bae7c6iND1FHbrCShjS8zc1", "lockGird"),
        e("MyEnum");
        var i = e("Event")
          , a = (e("DataType"),
        cc.Class({
            extends: cc.Component,
            properties: {
                price: cc.Label
            },
            onLoad: function() {
                this.limitClick = this.node.getComponent("LimitClick")
            },
            init: function(e, t, i) {
                this.index = e,
                this.level = t,
                this.money = BigInt(t),
                this.price.string = cc.Mgr.Utils.getNumStr2(this.money),
                this.node.position = i,
                this.node.on(cc.Node.EventType.TOUCH_START, function(e) {
                    this.TouchStart(e)
                }, this)
            },
            setPlantInfo: function(e) {
                this.plantLevel = e
            },
            setShowDetailsInUI: function(e, t, i) {
                void 0 === i && (i = !0),
                this.node.getChildByName("shadow").active = !1,
                this.dragon.node.color = cc.Mgr.Utils.hexToColor(t),
                i && this.dragon.playAnimation("DaiJi", -1),
                this.node.scale = e
            },
            TouchStart: function() {
                if (0 != this.limitClick.clickTime())
                    if (cc.Mgr.game.needGuide)
                        cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("need-to-complete-guide"), "", cc.Mgr.UIMgr.uiRoot);
                    else if (cc.Mgr.game.money >= this.money) {
                        var e = {};
                        e.index = this.index,
                        cc.Mgr.game.money -= this.money,
                        cc.Mgr.UIMgr.InGameUI.RefreshAssetData(!1, "money"),
                        cc.director.GlobalEvent.emit(i.unlockGird, e)
                    } else if (cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("NoCoins"), "coin", cc.Mgr.UIMgr.uiRoot),
                    cc.Mgr.game.plantMaxLv >= cc.Mgr.game.exchangeCoinConfig.openLevel && cc.Mgr.game.needShowExchangeCoinCount++,
                    cc.Mgr.game.needShowExchangeCoinCount >= 3 && cc.Mgr.game.plantMaxLv >= cc.Mgr.game.exchangeCoinConfig.openLevel) {
                        var t = cc.Mgr.UIMgr.gemNum();
                        if (cc.Mgr.game.currentExchangeCount < cc.Mgr.game.exchangeCoinConfig.maxExchangeNum && cc.Mgr.game.gems >= t)
                            cc.Mgr.UIMgr.openExchangeCoinUI(!0);
                        else if (cc.Mgr.game.coinBundleFlag) {
                            var a = cc.Mgr.UIMgr.getCoinNumber() * BigInt(30);
                            a = a < BigInt(1e6) ? BigInt(1e6) : a,
                            a *= BigInt(2),
                            cc.Mgr.UIMgr.openCoinBundle(a, !0)
                        }
                        cc.Mgr.game.needShowExchangeCoinCount = 0
                    }
            },
            plantDestroy: function() {
                this.node.destroy()
            },
            start: function() {}
        }));
        t.exports = a,
        cc._RF.pop()
    }
    , {
        DataType: "DataType",
        Event: "Event",
        MyEnum: "MyEnum"
    }],
    missionItem: [function(e, t) {
        "use strict";
        cc._RF.push(t, "3adeb2YS/9NU6FhHeQCaYTD", "missionItem");
        var i = e("DataType")
          , a = e("MissionType")
          , n = ["mission-login-game", "mission-merge20-flowers", "mission-win10-times", "mission-watch3-videos", "mission-ingame-time"]
          , c = [[0], [0], [0], [5, 5], [2, 5, 5]]
          , s = cc.Class({
            extends: cc.Component,
            properties: {
                missionSp: cc.Sprite,
                missionIconList: [cc.SpriteFrame],
                rewardIcon: cc.Sprite,
                rewardIconList: [cc.SpriteFrame],
                claimBtn: cc.Node,
                proBar: cc.ProgressBar,
                desLbl: cc.Label,
                numLbl: cc.Label,
                sliderLbl: cc.Label,
                effect: cc.Node,
                rewardType: "money",
                rewardNum: 5,
                misId: 0,
                receiveBtnLabel: cc.Label
            },
            onLoad: function() {
                this.limitClick = this.node.getComponent("LimitClick")
            },
            pickOutDataLv: function(e) {
                for (var t = 0; t < 9; t++)
                    switch (t) {
                    case 0:
                        if ("M" == e.MAX)
                            return 0;
                        break;
                    case 1:
                        if ("M" == e.MAX_1)
                            return 1;
                        break;
                    case 2:
                        if ("M" == e.MAX_2)
                            return 2;
                        break;
                    case 3:
                        if ("M" == e.MAX_3)
                            return 3;
                        break;
                    case 4:
                        if ("M" == e.MAX_4)
                            return 4;
                        break;
                    case 5:
                        if ("M" == e.MAX_5)
                            return 5;
                        break;
                    case 6:
                        if ("M" == e.MAX_6)
                            return 6;
                        break;
                    case 7:
                        if ("M" == e.MAX_7)
                            return 7;
                        break;
                    case 8:
                        if ("M" == e.MAX_8)
                            return 8
                    }
                return 0
            },
            caculateMoneyPrice: function(e, t) {
                var i = cc.Mgr.game.plantBuyRecord[e];
                i = i || 0,
                this.price = t.price;
                var a = t.price * BigInt(Math.round(Math.pow(1.2, i) / 2 * 100)) / BigInt(100);
                return 1 == e && (a = t.price * BigInt(Math.round(Math.pow(1.1, i) / 2 * 100)) / BigInt(100)),
                this.price = a,
                a
            },
            setData: function(e) {
                if (this.receiveBtnLabel.string = cc.Mgr.Utils.getTranslation("btn-claim"),
                this.missionSp.spriteFrame = this.missionIconList[e.misType],
                this.misId = e.id,
                this.checklv = e.checklv,
                "coin" == e.rewardType) {
                    this.rewardType = "money";
                    var t = cc.Mgr.game.plantMaxLv - 3 > 0 ? cc.Mgr.game.plantMaxLv - 3 : 1
                      , s = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(i.PlantData, t);
                    this.rewardNum = this.caculateMoneyPrice(t, s) * BigInt(8) / BigInt(10),
                    this.numLbl.string = "x" + cc.Mgr.Utils.getNumStr2(this.rewardNum),
                    this.rewardIcon.spriteFrame = this.rewardIconList[0]
                } else
                    "gem" == e.rewardType && (this.rewardType = "gem",
                    e.checklv ? this.rewardNum = cc.Mgr.Config.missionRewardList[this.misId][e.checklv] : this.rewardNum = cc.Mgr.Config.missionRewardList[this.misId][0],
                    e.checklv ? this.rewardNum = c[this.misId][e.checklv] : this.rewardNum = c[this.misId][0],
                    this.numLbl.string = "x" + this.rewardNum,
                    this.rewardIcon.spriteFrame = this.rewardIconList[1]);
                this.unscheduleAllCallbacks();
                var o = e.checkNum;
                e.misType == a.AdsShow || e.misType == a.InGameTime ? (o = e.checklv ? cc.Mgr.Config.missionCheckList[this.misId][e.checklv] : cc.Mgr.Config.missionCheckList[this.misId][0],
                this.desLbl.string = cc.Mgr.Utils.getTranslation(n[e.misType], [o]),
                e.misType == a.InGameTime ? this.schedule(function() {
                    cc.Mgr.game.dailyMissions[e.misType].progress < o ? (this.sliderLbl.string = cc.Mgr.game.dailyMissions[e.misType].progress + "/" + o,
                    this.proBar.progress = cc.Mgr.game.dailyMissions[e.misType].progress / o,
                    this.effect.active = !1,
                    this.claimBtn.active = !1) : (this.sliderLbl.string = o + "/" + o,
                    this.proBar.progress = 1,
                    this.effect.active = !0,
                    this.claimBtn.active = !0)
                }, 1) : this.desLbl.string = cc.Mgr.Utils.getTranslation(n[e.misType], [o])) : (o = e.checkNum,
                this.desLbl.string = cc.Mgr.Utils.getTranslation(n[e.misType])),
                this.sliderLbl.string = e.progress + "/" + o,
                this.proBar.progress = e.progress / o,
                e.progress < o ? (this.effect.active = !1,
                this.claimBtn.active = !1) : (this.effect.active = !0,
                this.claimBtn.active = !0)
            },
            scheduleInGameTimeMission: function(e, t) {
                this.desLbl.string = cc.Mgr.Utils.getTranslation(n[t.misType]),
                cc.Mgr.game.dailyMissions[t.misType].progress < e ? (this.sliderLbl.string = cc.Mgr.game.dailyMissions[t.misType].progress + "/" + e,
                this.proBar.progress = cc.Mgr.game.dailyMissions[t.misType].progress / e,
                this.effect.active = !1,
                this.claimBtn.active = !1) : (this.sliderLbl.string = e + "/" + e,
                this.proBar.progress = 1,
                this.effect.active = !0,
                this.claimBtn.active = !0)
            },
            claim: function() {
                if (0 != this.limitClick.clickTime()) {
                    if (cc.Mgr.AudioMgr.playSFX("click"),
                    this.getRewardAndUpdateMission(),
                    cc.Mgr.UIMgr.openAssetGetUI(this.rewardType, this.rewardNum, "mission"),
                    "gem" === this.rewardType) {
                        var e = {};
                        e.elapsed = cc.Mgr.Utils.getDate9(!0),
                        e.getGems = this.rewardNum,
                        cc.Mgr.analytics.logEvent("mission_get_gems", JSON.stringify(e)),
                        cc.Mgr.TEA.collectEvent("mission_get_gems", {
                            elapsed: cc.Mgr.Utils.getDate9(!0),
                            get_gems: this.rewardNum
                        })
                    }
                    cc.Mgr.UIMgr.missionUI.showUI(!0)
                }
            },
            getRewardAndUpdateMission: function() {
                cc.Mgr.game.claimMissionRewardById(this.misId)
            }
        });
        t.exports = s,
        cc._RF.pop()
    }
    , {
        DataType: "DataType",
        MissionType: "MissionType"
    }],
    missionUI: [function(e, t) {
        "use strict";
        cc._RF.push(t, "64236pu20dCb46IDnvxndNR", "missionUI");
        var i = e("missionItem")
          , a = e("achieveItem")
          , n = (e("uiConfig"),
        e("MissionType"))
          , c = e("DataType")
          , s = cc.Class({
            extends: cc.Component,
            properties: {
                closeNode: cc.Node,
                newMItemParent: cc.Node,
                newAItemParent: cc.Node,
                misList: [i],
                achList: [a],
                missContent: cc.Node,
                achieveContent: cc.Node,
                missionToggle: cc.Toggle,
                achievementToggle: cc.Toggle,
                noMisTip: cc.Label,
                redAchieveTip: cc.Node,
                tabNode: cc.Node,
                missionLable_1: cc.Label,
                missionLabel_2: cc.Label,
                achievementLabel_1: cc.Label,
                achievementlabel_2: cc.Label,
                content: cc.Node,
                blurBg: cc.Node,
                title: cc.Node,
                title_zh: cc.Node,
                title_ja: cc.Node,
                title_ru: cc.Node
            },
            doTween: function() {
                this.closeNode.opacity = 0,
                this.closeNode.scale = 0,
                cc.tween(this.closeNode).to(.15, {
                    opacity: 255,
                    scale: 1
                }).start()
            },
            start: function() {
                cc.Mgr.UIMgr.missionUI = this,
                this.missionLabel_2.string = this.missionLable_1.string = cc.Mgr.Utils.getTranslation("mission-toggle-button"),
                this.achievementlabel_2.string = this.achievementLabel_1.string = cc.Mgr.Utils.getTranslation("achievement-toggle-button"),
                this.noMisTip.string = cc.Mgr.Utils.getTranslation("noMission-tip"),
                this.title.active = !1,
                this.title_zh.active = !1,
                this.title_ja.active = !1,
                this.title_ru.active = !1,
                "Japanese" === cc.Mgr.Config.language ? this.title_ja.active = !0 : "Simplified Chinese" === cc.Mgr.Config.language || "Traditional Chinese" === cc.Mgr.Config.language ? this.title_zh.active = !0 : "Russian" === cc.Mgr.Config.language ? this.title_ru.active = !0 : this.title.active = !0
            },
            pickOutAchieveDataList: function() {
                for (var e = [], t = 0; t < cc.Mgr.game.achievementProgress.length; t++) {
                    var i = cc.Mgr.game.achievementProgress[t];
                    i.finished || 0 == this.checkLvToGainGems(i.id, i.checklv) || e.length < 5 && e.push(i)
                }
                return e
            },
            pickOutMissionDataList: function() {
                for (var e = [], t = 0; t < cc.Mgr.game.dailyMissions.length; t++) {
                    var i = cc.Mgr.game.dailyMissions[t]
                      , a = {
                        needShow: !0
                    };
                    a.data = i,
                    1 == i.claimed && i.misType < n.AdsShow ? a.needShow = !1 : i.misType == n.AdsShow ? 1 == i.claimed && (a.needShow = !1) : i.misType == n.InGameTime && 1 == i.claimed && (a.needShow = !1),
                    e.push(a)
                }
                return e
            },
            checkLvToGainGems: function(e, t) {
                var i = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(c.AchievementData, e);
                return 0 == t ? i.Gain_5 : 1 == t ? i.Gain_20 : 2 == t ? i.Gain_50 : 3 == t ? i.Gain_100 : 4 == t ? i.Gain_200 : void 0
            },
            showUI: function(e) {
                this.node.width = cc.Mgr.Config.winSize.width,
                this.node.height = cc.Mgr.Config.winSize.height,
                this.redAchieveTip.active = !1,
                this.missionToggle.isChecked = !0;
                var t = this.pickOutMissionDataList();
                this.loadMissionItemsNew(t),
                this.loadAchieveItemsNew(),
                !0 !== e && (this.doTween(),
                this.blurBg.opacity = 0,
                this.content.opacity = 0,
                this.content.setScale(.5),
                cc.tween(this.blurBg).to(.05, {
                    opacity: 255
                }).call().start(),
                cc.tween(this.content).to(.15, {
                    opacity: 255,
                    scale: 1
                }).start(),
                cc.Mgr.admob.showBanner("mission"))
            },
            showMissionContent: function() {
                this.achieveContent.active = !1,
                this.missContent.active = !0,
                this.tabNode.x = 47
            },
            showAchieveContent: function() {
                this.redAchieveTip.active = !1,
                this.missContent.active = !1,
                this.achieveContent.active = !0,
                this.tabNode.x = 23
            },
            loadMissionItemsNew: function(e) {
                this.noMisTip.node.active = !1;
                for (var t = !1, i = 0; i < e.length; i++)
                    if (e[i].needShow) {
                        t = !0;
                        break
                    }
                if (t)
                    if (this.newMItemParent.active = !0,
                    0 == this.misList.length) {
                        var a = 0;
                        this.initMissionItems = function() {
                            if (a >= 5)
                                return this.unschedule(this.initMissionItems),
                                void (cc.Mgr.game.checkOutMissionIsFinished() && (this.showMissionContent(),
                                cc.Mgr.game.checkOutAchieveDataIsFinished() && (this.redAchieveTip.active = !0)));
                            var t = cc.instantiate(cc.Mgr.UIItemMgr.getMissionItemPre());
                            t.parent = this.newMItemParent;
                            var i = t.getComponent("missionItem");
                            1 == e[a].data.claimed ? t.active = !1 : t.active = !0;
                            var n = e[a].data;
                            1 == t.active && i.setData(n),
                            this.misList.push(i),
                            a += 1
                        }
                        ,
                        this.schedule(this.initMissionItems, .005, 5, .01)
                    } else {
                        for (i = 0; i < this.misList.length; i++)
                            this.misList[i].node.active = !1;
                        for (i = 0; i < e.length; i++)
                            if (e[i].needShow) {
                                this.misList[i].node.active = !0;
                                var n = e[i].data;
                                this.misList[i].setData(n)
                            }
                        cc.Mgr.game.checkOutMissionIsFinished() ? (this.showMissionContent(),
                        cc.Mgr.game.checkOutAchieveDataIsFinished() && (this.redAchieveTip.active = !0)) : cc.Mgr.game.checkOutAchieveDataIsFinished() && (this.redAchieveTip.active = !1,
                        this.achievementToggle.isChecked = !0)
                    }
                else
                    this.newMItemParent.active = !1,
                    this.noMisTip.node.active = !0,
                    this.redAchieveTip.active = !1,
                    this.achievementToggle.isChecked = !0
            },
            loadAchieveItemsNew: function() {
                var e = this.pickOutAchieveDataList();
                if (0 == e.length)
                    this.newAItemParent.active = !1;
                else if (this.newAItemParent.active = !0,
                0 == this.achList.length) {
                    var t = 0;
                    this.initAchieveItems = function() {
                        if (t >= e.length)
                            this.unschedule(this.initAchieveItems);
                        else {
                            var i = cc.instantiate(cc.Mgr.UIItemMgr.getAchieveItemPre());
                            i.parent = this.newAItemParent;
                            var a = i.getComponent("achieveItem");
                            i.active = !0;
                            var n = e[t];
                            a.setData(n),
                            this.achList.push(a),
                            t += 1
                        }
                    }
                    ,
                    this.schedule(this.initAchieveItems, .005, this.acshowList, .01)
                } else {
                    for (var i = 0; i < this.achList.length; i++)
                        this.achList[i].node.active = !1;
                    for (i = 0; i < e.length; i++) {
                        var a = e[i];
                        this.achList[i].node.active = !0,
                        this.achList[i].setData(a)
                    }
                }
            },
            closeUI: function() {
                cc.Mgr.AudioMgr.playSFX("click");
                var e = this;
                cc.Mgr.admob.hideBanner("mission"),
                cc.tween(this.blurBg).to(.15, {
                    opacity: 0
                }).start(),
                cc.tween(this.content).to(.15, {
                    opacity: 0,
                    scale: .5
                }).call(function() {
                    cc.Mgr.UIMgr.InGameUI.checkMissionAchieveTip(),
                    e.node.active = !1
                }).start(),
                cc.Mgr.UIMgr.reduceShowUICount("mission")
            }
        });
        t.exports = s,
        cc._RF.pop()
    }
    , {
        DataType: "DataType",
        MissionType: "MissionType",
        achieveItem: "achieveItem",
        missionItem: "missionItem",
        uiConfig: "uiConfig"
    }],
    newRecordUI: [function(e, t) {
        "use strict";
        cc._RF.push(t, "f89dbf0vuRC64h+Dsvg6XNr", "newRecordUI");
        var i = cc.Class({
            extends: cc.Component,
            properties: {
                recordLbl: cc.Label,
                titleLabel: cc.Label,
                newRecordLabel: cc.Label,
                content: cc.Node,
                blurBg: cc.Node,
                effect: dragonBones.ArmatureDisplay,
                btnLabel: cc.Label,
                timeLbl: cc.Label
            },
            onLoad: function() {
                this.limitClick = this.node.getComponent("LimitClick")
            },
            showUI: function() {
                this.titleLabel.string = cc.Mgr.Utils.getTranslation("newRecord-title"),
                this.newRecordLabel.string = cc.Mgr.Utils.getTranslation("newRecord-level"),
                this.recordLbl.string = cc.Mgr.game.level,
                this.btnLabel.string = cc.Mgr.Utils.getTranslation("btn-ok"),
                this.blurBg.opacity = 0,
                this.content.opacity = 0,
                this.content.setScale(.5),
                cc.tween(this.blurBg).to(.05, {
                    opacity: 255
                }).call().start(),
                cc.tween(this.content).to(.15, {
                    opacity: 255,
                    scale: 1
                }).start(),
                cc.Mgr.admob.showBanner("newRecord"),
                this.effect.playAnimation("newAnimation", 1),
                this.countDown()
            },
            countDown: function() {
                this.count = 9,
                this.timeLbl.string = "00:0" + this.count,
                this.callback = function() {
                    0 == this.count && this.closeUI(),
                    this.timeLbl.string = "00:0" + this.count,
                    this.count--
                }
                ,
                this.timeLbl.node.active = !0,
                this.schedule(this.callback, 1)
            },
            closeUI: function() {
                if (0 != this.limitClick.clickTime()) {
                    this.unschedule(this.callback),
                    cc.Mgr.AudioMgr.playSFX("click"),
                    cc.Mgr.admob.hideBanner("newRecord");
                    var e = this;
                    cc.tween(this.blurBg).to(.15, {
                        opacity: 0
                    }).start(),
                    cc.tween(this.content).to(.15, {
                        opacity: 0,
                        scale: .5
                    }).call(function() {
                        e.node.active = !1,
                        cc.Mgr.admob.showInterstitial("nextStage", null, !1)
                    }).start(),
                    cc.Mgr.UIMgr.reduceShowUICount("record")
                }
            }
        });
        t.exports = i,
        cc._RF.pop()
    }
    , {}],
    noticeUI: [function(e, t) {
        "use strict";
        cc._RF.push(t, "dbf37XZt7ZG6LLcPaPf6Go+", "noticeUI"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {},
            closeUI: function() {
                this.node.active = !1
            }
        }),
        cc._RF.pop()
    }
    , {}],
    offlineAssetUI: [function(e, t) {
        "use strict";
        cc._RF.push(t, "bc475RBPPtLk6FhQlrA7QDP", "offlineAssetUI");
        var i = cc.Class({
            extends: cc.Component,
            properties: {
                numLbl: cc.Label,
                closeNode: cc.Node,
                checkBox: cc.Toggle,
                descLabel: cc.Label,
                checkboxLabel: cc.Label,
                btnLabel: cc.Label,
                vipTip: cc.Label,
                doubleTip: cc.Label,
                content: cc.Node,
                blurBg: cc.Node,
                checkboxNode: cc.Node,
                vipNode: cc.Node,
                doubleNode: cc.Node,
                numEffect: cc.Node,
                getBtn: cc.Node,
                adsBtn: cc.Node,
                adsLabel: cc.Label,
                title: cc.Node,
                title_zh: cc.Node,
                title_ja: cc.Node,
                title_ru: cc.Node,
                noThanks: cc.Node,
                noThanksLabel: cc.Label
            },
            onLoad: function() {
                this.limitClick = this.node.getComponent("LimitClick")
            },
            start: function() {
                this.title.active = !1,
                this.title_zh.active = !1,
                this.title_ja.active = !1,
                this.title_ru.active = !1,
                "Japanese" === cc.Mgr.Config.language ? this.title_ja.active = !0 : "Simplified Chinese" === cc.Mgr.Config.language || "Traditional Chinese" === cc.Mgr.Config.language ? this.title_zh.active = !0 : "Russian" === cc.Mgr.Config.language ? this.title_ru.active = !0 : this.title.active = !0
            },
            updateReward: function() {
                var e = !0 === this.checkBox.isChecked && this.checkboxNode.active || cc.Mgr.game.isVIP ? this.num * BigInt(3) : this.num;
                this.numEffect.getComponent("NumEffect").setNumber(cc.Mgr.Utils.getNumStr2(e)),
                cc.Mgr.game.isManualSetting = cc.Mgr.game.isManualSetting_payingUser = this.checkBox.isChecked,
                this.getBtn.active = !1,
                this.adsBtn.active = !1,
                this.checkboxNode.active && this.checkBox.isChecked ? this.adsBtn.active = !0 : this.getBtn.active = !0
            },
            doTween: function() {
                this.closeNode.opacity = 0,
                this.closeNode.scale = 0,
                cc.tween(this.closeNode).to(.15, {
                    opacity: 255,
                    scale: 1
                }).start()
            },
            showUI: function(e) {
                var t, i = this;
                cc.Mgr.admob.preloadRewarded(this),
                this.descLabel.string = cc.Mgr.Utils.getTranslation("offline-des"),
                this.checkboxLabel.string = cc.Mgr.Utils.getTranslation("getReward-checkbox-treble"),
                this.btnLabel.string = cc.Mgr.Utils.getTranslation("btn-claim"),
                this.vipTip.string = cc.Mgr.Utils.getTranslation("vip-treble-tip"),
                this.doubleTip.string = cc.Mgr.Utils.getTranslation("offline-treble-tip"),
                this.adsLabel.string = cc.Mgr.Utils.getTranslation("btn-treble"),
                this.noThanksLabel.string = cc.Mgr.Utils.getTranslation("btn-no-thanks"),
                "Russian" === cc.Mgr.Config.language && (this.checkboxLabel.fontSize = 18),
                this.node.width = cc.Mgr.Config.winSize.width,
                this.node.height = cc.Mgr.Config.winSize.height,
                this.num = e,
                this.doTween(),
                this.blurBg.opacity = 0,
                this.content.opacity = 0,
                this.content.setScale(.5),
                cc.tween(this.blurBg).to(.05, {
                    opacity: 255
                }).call().start(),
                cc.tween(this.content).to(.15, {
                    opacity: 255,
                    scale: 1
                }).start(),
                cc.Mgr.admob.showBanner("offline"),
                cc.Mgr.game.plantMaxLv >= 6 && "countdown" === cc.Mgr.game.ab_countdown || "control" === cc.Mgr.game.ab_countdown || cc.Mgr.game.isVIP || cc.Mgr.game.offlineDouble ? (this.noThanks.opacity = 0,
                this.noThanks.active = !1) : (null == cc.Mgr.game.ab_countdown || "nocountdown" === cc.Mgr.game.ab_countdown || "countdown" === cc.Mgr.game.ab_countdown && cc.Mgr.game.plantMaxLv < 6) && (this.noThanks.opacity = 255,
                this.noThanks.active = !0),
                this.showBtnCounter && clearTimeout(this.showBtnCounter),
                "control" === cc.Mgr.game.ab_countdown && (cc.Mgr.game.isPayingUser ? (t = null == cc.Mgr.game.isManualSetting_payingUser ? cc.Mgr.game.checkDoubleReward : cc.Mgr.game.isManualSetting_payingUser,
                this.checkBox.isChecked != t && (this.checkBox.isChecked = t)) : (t = null == cc.Mgr.game.isManualSetting ? cc.Mgr.game.checkDoubleReward : cc.Mgr.game.isManualSetting,
                this.checkBox.isChecked != t && (this.checkBox.isChecked = t)));
                var a = cc.Mgr.admob.checkAvailableRewardedAd();
                if ("control" === cc.Mgr.game.ab_countdown)
                    if (this.checkBox.isChecked && a || cc.Mgr.game.isVIP || cc.Mgr.game.offlineDouble) {
                        var n = this.num * BigInt(3);
                        this.numEffect.getComponent("NumEffect").setNumber(cc.Mgr.Utils.getNumStr2(n), !0)
                    } else
                        this.numEffect.getComponent("NumEffect").setNumber(cc.Mgr.Utils.getNumStr2(this.num), !0);
                else if (cc.Mgr.game.isVIP || cc.Mgr.game.offlineDouble) {
                    var c = this.num * BigInt(3);
                    this.numEffect.getComponent("NumEffect").setNumber(cc.Mgr.Utils.getNumStr2(c), !0)
                } else
                    this.numEffect.getComponent("NumEffect").setNumber(cc.Mgr.Utils.getNumStr2(this.num), !0);
                this.checkboxNode.active = !cc.Mgr.game.isVIP,
                !1 === a && (this.checkboxNode.active = !1),
                this.vipNode.active = cc.Mgr.game.isVIP,
                this.doubleNode.active = !cc.Mgr.game.isVIP && cc.Mgr.game.offlineDouble,
                this.doubleNode.active && (this.checkboxNode.active = !1),
                this.getBtn.active = !1,
                this.adsBtn.active = !1,
                this.checkboxNode.active && this.checkBox.isChecked ? this.adsBtn.active = !0 : this.getBtn.active = !0,
                cc.Mgr.game.plantMaxLv >= 6 && "countdown" === cc.Mgr.game.ab_countdown && !cc.Mgr.game.isVIP && !cc.Mgr.game.offlineDouble && (this.showBtnCounter = setTimeout(function() {
                    var e = cc.fadeIn(.5);
                    i.noThanks.active = !0,
                    i.noThanks.runAction(e)
                }, 3e3)),
                "control" === cc.Mgr.game.ab_countdown ? this.adsBtn.y = -350 : (this.checkboxNode.active = !1,
                this.adsBtn.y = -315,
                cc.Mgr.game.isVIP || cc.Mgr.game.offlineDouble || (this.adsBtn.active = !0,
                this.getBtn.active = !1)),
                this.isDouble = !1
            },
            onClickReceiveAds: function() {
                if (0 != this.limitClick.clickTime()) {
                    var e = this;
                    cc.Mgr.admob.showRewardedVideoAd(function(t) {
                        t && (e.num = BigInt(3) * e.num,
                        e.isDouble = !0),
                        e.closeUI()
                    }, this.node, "offline", this)
                }
            },
            onClickReceive: function() {
                0 != this.limitClick.clickTime() && (cc.Mgr.game.isVIP ? (this.num = BigInt(3) * this.num,
                this.isDouble = !0,
                this.closeUI()) : this.closeUI())
            },
            updateAdsBtnState: function() {
                var e = cc.Mgr.admob.checkAvailableRewardedAd();
                if (this.checkBox.isChecked && e || cc.Mgr.game.isVIP || cc.Mgr.game.offlineDouble) {
                    var t = this.num * BigInt(3);
                    this.numEffect.getComponent("NumEffect").setNumber(cc.Mgr.Utils.getNumStr2(t), !0)
                } else
                    this.numEffect.getComponent("NumEffect").setNumber(cc.Mgr.Utils.getNumStr2(this.num), !0);
                this.checkboxNode.active = !cc.Mgr.game.isVIP,
                !1 === e && (this.checkboxNode.active = !1),
                this.vipNode.active = cc.Mgr.game.isVIP,
                this.doubleNode.active = !cc.Mgr.game.isVIP && cc.Mgr.game.offlineDouble,
                this.getBtn.active = !1,
                this.adsBtn.active = !1,
                this.checkboxNode.active && this.checkBox.isChecked ? this.adsBtn.active = !0 : this.getBtn.active = !0
            },
            adsDouble: function() {
                cc.Mgr.AudioMgr.playSFX("click")
            },
            closeUI: function() {
                cc.Mgr.AudioMgr.playSFX("click"),
                cc.Mgr.admob.hideBanner("offline");
                var e = this;
                cc.tween(this.blurBg).to(.15, {
                    opacity: 0
                }).start(),
                cc.tween(this.content).to(.15, {
                    opacity: 0,
                    scale: .5
                }).call(function() {
                    cc.Mgr.game.money += e.num,
                    cc.Mgr.game.coin_gained_total += e.num,
                    cc.Mgr.UIMgr.showJibEffect(),
                    cc.Mgr.UIMgr.InGameUI.RefreshAssetData(!1, "money"),
                    e.node.active = !1,
                    cc.Mgr.game.lastOfflineTime = cc.Mgr.Utils.GetSysTime(),
                    !0 !== e.isDouble && setTimeout(function() {
                        cc.Mgr.admob.showInterstitial("offline", null, !0)
                    }, 1500)
                }).start(),
                cc.Mgr.UIMgr.reduceShowUICount("offlineAssets")
            }
        });
        t.exports = i,
        cc._RF.pop()
    }
    , {}],
    plantGetUI: [function(e, t) {
        "use strict";
        cc._RF.push(t, "f1f332PHlJCAJmc1DliIYQt", "plantGetUI");
        var i = e("DataType")
          , a = e("MyEnum")
          , n = e("Event")
          , c = e("DB_plantName")
          , s = cc.Class({
            extends: cc.Component,
            properties: {
                titleLbl: cc.Label,
                lvLbl: cc.Label,
                powerLbl: cc.Label,
                cdLbl: cc.Label,
                dragonParentA: cc.Node,
                dragonParentB: cc.Node,
                dragonParentC: cc.Node,
                nextLvNode: cc.Label,
                previousLvNode: cc.Label,
                coinLbl: cc.Label,
                gemLbl: cc.Label,
                coinNumEffect: cc.Node,
                gemNumEffect: cc.Node,
                doubleGetBtn: cc.Node,
                getBtn: cc.Node,
                adsBtn: cc.Node,
                adsLabel: cc.Label,
                coinNode: cc.Node,
                gemNode: cc.Node,
                powerNode: cc.Node,
                cdNode: cc.Node,
                titleNode: cc.Node,
                toggle: cc.Toggle,
                btnLabel: cc.Label,
                checkboxLabel: cc.Label,
                content: cc.Node,
                blurBg: cc.Node,
                checkboxNode: cc.Node,
                vipNode: cc.Node,
                nameLabel: cc.Label,
                okBtnLabel: cc.Label,
                vipTip: cc.Label,
                coinGemNode: cc.Node,
                noThanks: cc.Node,
                noThanksLabel: cc.Label,
                getPlantCountLabel: cc.Label
            },
            doTween: function(e) {
                var t = this;
                this.titleNode.opacity = 0,
                this.titleNode.scale = 1,
                this.dragonParentA.opacity = 0,
                this.dragonParentB.opacity = 0,
                this.dragonParentC.opacity = 0,
                this.coinGemNode.opacity = 0,
                this.lvLbl.node.opacity = 0,
                this.nextLvNode.node.opacity = 0,
                this.cdNode.opacity = 0,
                this.powerNode.opacity = 0,
                "get" == e ? cc.tween(this.titleNode).to(.25, {
                    opacity: 255,
                    scale: 1.3
                }).to(.1, {
                    scale: 1
                }).call(function() {
                    cc.tween(t.dragonParentA).to(.25, {
                        opacity: 255,
                        scale: 1
                    }).call(function() {
                        cc.tween(t.cdNode).to(.25, {
                            opacity: 255
                        }).start(),
                        cc.tween(t.powerNode).to(.25, {
                            opacity: 255
                        }).call(function() {
                            cc.tween(t.lvLbl.node).to(.25, {
                                opacity: 255
                            }).start()
                        }).start()
                    }).start()
                }).call(function() {
                    cc.Mgr.game.curGuideStep == a.GuideType.guide3 && cc.director.GlobalEvent.emit(n.showSingleGuide, {
                        step: a.GuideType.guide4
                    })
                }).start() : cc.tween(this.titleNode).to(.25, {
                    opacity: 255,
                    scale: 1.3
                }).to(.1, {
                    scale: 1
                }).call(function() {
                    cc.tween(t.dragonParentA).to(.25, {
                        opacity: 255,
                        scale: 1
                    }).start(),
                    cc.tween(t.dragonParentC).to(.25, {
                        opacity: 255,
                        scale: 1
                    }).start(),
                    cc.tween(t.dragonParentB).to(.25, {
                        opacity: 255,
                        scale: 1
                    }).call(function() {
                        cc.tween(t.coinGemNode).to(.25, {
                            opacity: 255
                        }).call(function() {
                            cc.tween(t.lvLbl.node).to(.25, {
                                opacity: 255
                            }).start(),
                            cc.tween(t.nextLvNode.node).to(.25, {
                                opacity: 255
                            }).start()
                        }).start()
                    }).start()
                }).call(function() {
                    cc.Mgr.game.curGuideStep == a.GuideType.guide3 && cc.director.GlobalEvent.emit(n.showSingleGuide, {
                        step: a.GuideType.guide4
                    })
                }).start()
            },
            start: function() {
                cc.Mgr.UIMgr.plantGetUI = this,
                this.nextLvNode.string = cc.Mgr.Utils.getTranslation("getPlant-nextLevel"),
                this.previousLvNode.string = cc.Mgr.Utils.getTranslation("getPlant-previousLevel"),
                this.btnLabel.string = cc.Mgr.Utils.getTranslation("btn-claim"),
                this.checkboxLabel.string = cc.Mgr.Utils.getTranslation("getReward-checkbox-treble"),
                this.vipTip.string = cc.Mgr.Utils.getTranslation("vip-treble-tip"),
                this.adsLabel.string = cc.Mgr.Utils.getTranslation("btn-treble"),
                this.noThanksLabel.string = cc.Mgr.Utils.getTranslation("btn-no-thanks"),
                this.limitClick = this.node.getComponent("LimitClick")
            },
            showUI: function(e, t, n) {
                var s = this;
                void 0 === n && (n = !1),
                cc.Mgr.admob.preloadRewarded(this),
                "unlock" === e && (cc.Mgr.game.needShowInterstitial = t >= 6,
                cc.Mgr.game.needShowBanner = t >= 6,
                cc.Mgr.Utils.reportScore(t)),
                this.node.width = cc.Mgr.Config.winSize.width,
                this.node.height = cc.Mgr.Config.winSize.height,
                this.plantNodeA = null,
                this.plantNodeB = null,
                this.plantNodeC = null,
                this.getCoin = 0,
                this.getGems = 0,
                this.nextLvNode.node.active = !1,
                this.previousLvNode.node.active = !1,
                this.powerNode.active = !1,
                this.cdNode.active = !1,
                this.coinNode.active = !1,
                this.gemNode.active = !1,
                this.doubleGetBtn.active = !1,
                this.getBtn.active = !1,
                this.adsBtn.active = !1,
                this.checkboxNode.active = !1,
                this.getPlantCountLabel.node.active = !1,
                this.vipNode.active = !1;
                var o = this;
                this.plantLevel = t;
                var r = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(i.PlantData, t);
                this.nameLabel.string = c.data[t - 1][cc.Mgr.Config.language],
                this.nameLabel.node.setScale(0),
                cc.tween(this.nameLabel.node).to(1, {
                    scale: 1
                }, {
                    easing: "elasticInOut"
                }).start(),
                this.lvLbl.string = cc.Mgr.Utils.getTranslation("plant-level") + " - " + t,
                this.fromType = e;
                var l, g = cc.Mgr.admob.checkAvailableRewardedAd();
                if (cc.Mgr.game.plantMaxLv > 6 && "countdown" === cc.Mgr.game.ab_countdown || "control" === cc.Mgr.game.ab_countdown || "look" == e || cc.Mgr.game.needGuide || cc.Mgr.game.plantMaxLv >= 6 && "countdown" === cc.Mgr.game.ab_countdown && "get" == e ? (this.noThanks.opacity = 0,
                this.noThanks.active = !1) : (null == cc.Mgr.game.ab_countdown || "nocountdown" === cc.Mgr.game.ab_countdown || "countdown" === cc.Mgr.game.ab_countdown && cc.Mgr.game.plantMaxLv < 6) && (this.noThanks.opacity = 255,
                this.noThanks.active = !0),
                this.showBtnCounter && clearTimeout(this.showBtnCounter),
                "get" == e || "look" == e)
                    this.okBtnLabel.string = "get" == e ? cc.Mgr.Utils.getTranslation("btn-claim") : cc.Mgr.Utils.getTranslation("btn-ok"),
                    this.getPlantCount = 1,
                    this.titleLbl.string = "get" == e ? cc.Mgr.Utils.getTranslation("congratulation-get") : cc.Mgr.Utils.getTranslation("plantDetail-title"),
                    this.powerNode.active = !1,
                    this.cdNode.active = !1,
                    this.powerLbl.string = cc.Mgr.Utils.getNumStr2(r.power),
                    this.cdLbl.string = r.cd,
                    "get" === e ? (this.getPlantCountLabel.node.active = !0,
                    this.doubleGetBtn.active = !1,
                    this.adsBtn.active = !1,
                    this.getBtn.active = !1,
                    cc.Mgr.game.needGuide ? (this.getBtn.active = !0,
                    this.noThanks.opacity = 0,
                    this.noThanks.active = !1) : "control" === cc.Mgr.game.ab_countdown ? (this.checkboxNode.active = g,
                    this.doubleGetBtn.active = !1,
                    this.adsBtn.active = !1,
                    this.checkboxNode.active && this.toggle.isChecked ? this.adsBtn.active = !0 : this.doubleGetBtn.active = !0,
                    this.toggle.isChecked && g ? this.getPlantCountLabel.string = "x3" : this.getPlantCountLabel.string = "x1",
                    cc.Mgr.game.isPayingUser ? (l = null == cc.Mgr.game.isManualSetting_payingUser ? cc.Mgr.game.checkDoubleReward : cc.Mgr.game.isManualSetting_payingUser,
                    this.toggle.isChecked != l && (this.toggle.isChecked = l)) : (l = null == cc.Mgr.game.isManualSetting ? cc.Mgr.game.checkDoubleReward : cc.Mgr.game.isManualSetting,
                    this.toggle.isChecked != l && (this.toggle.isChecked = l)),
                    this.adsBtn.y = -405) : (cc.Mgr.game.plantMaxLv >= 6 && "countdown" === cc.Mgr.game.ab_countdown ? this.showBtnCounter = setTimeout(function() {
                        var e = cc.fadeIn(.5);
                        s.noThanks.active = !0,
                        s.noThanks.runAction(e)
                    }, 3e3) : (this.noThanks.active = !0,
                    this.noThanks.opacity = 255),
                    this.adsBtn.active = !0,
                    this.adsBtn.y = -360)) : (this.getBtn.active = !0,
                    this.noThanks.opacity = 0,
                    this.noThanks.active = !1),
                    n ? (this.powerNode.active = !1,
                    this.cdNode.active = !1,
                    cc.loader.loadRes("prefab/flowerPot/HuaPen_v3", function(e, t) {
                        e ? cc.error(e.message || e) : (o.plantNodeA = cc.instantiate(t),
                        o.plantNodeA.parent = o.dragonParentA,
                        o.plantNodeA.group = a.NodeGroup.UI,
                        o.plantNodeA.position = cc.v2(0, 0),
                        o.plantNodeA.getComponent(cc.BoxCollider).enabled = !1,
                        o.plantNodeA.active = !0,
                        o.plantNodeA.getComponent("flowerPot").setShowDetailsInUI(1.5, "#ffffff", !0))
                    })) : cc.loader.loadRes("prefab/plant/" + r.prefab, function(e, t) {
                        e ? cc.error(e.message || e) : (o.plantNodeA = cc.instantiate(t),
                        o.plantNodeA.parent = o.dragonParentA,
                        o.plantNodeA.group = a.NodeGroup.UI,
                        o.plantNodeA.position = cc.v2(0, 0),
                        o.plantNodeA.active = !0,
                        o.plantNodeA.getComponent("plant").setShowDetailsInUI(1.5, "#ffffff", !0))
                    });
                else if ("unlock" == e) {
                    this.titleLbl.string = cc.Mgr.Utils.getTranslation("newPlant-title"),
                    this.checkboxNode.active = !cc.Mgr.game.needGuide,
                    this.nextLvNode.node.active = !0,
                    this.previousLvNode.node.active = !0,
                    this.coinNode.active = !0;
                    var h = t - 2 > 0 ? t - 2 : 1
                      , d = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(i.PlantData, h)
                      , u = cc.Mgr.game.plantBuyRecord[h];
                    u = u || 0;
                    var p = d.price * BigInt(Math.round(100 * Math.pow(1.2, u))) / BigInt(100);
                    if (1 == h && (p = d.price * BigInt(Math.round(100 * Math.pow(1.1, u))) / BigInt(100)),
                    p = p * BigInt(64) / BigInt(100),
                    this.price = p,
                    "control" === cc.Mgr.game.ab_countdown)
                        if (this.toggle.isChecked && g) {
                            var m = p * BigInt(3);
                            this.coinNumEffect.getComponent("NumEffect").setNumber(cc.Mgr.Utils.getNumStr2(m), !0)
                        } else
                            this.coinNumEffect.getComponent("NumEffect").setNumber(cc.Mgr.Utils.getNumStr2(p), !0);
                    else
                        this.coinNumEffect.getComponent("NumEffect").setNumber(cc.Mgr.Utils.getNumStr2(p), !0);
                    var f = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(i.LevelGemData, t);
                    if (null != f) {
                        if (this.gems = f.gem,
                        this.gems = Math.ceil(4 * this.gems / 5),
                        "control" === cc.Mgr.game.ab_countdown)
                            if (this.toggle.isChecked && g) {
                                var M = 3 * this.gems;
                                this.gemNumEffect.getComponent("NumEffect").setNumber(cc.Mgr.Utils.getNumStr(M), !0)
                            } else
                                this.gemNumEffect.getComponent("NumEffect").setNumber(cc.Mgr.Utils.getNumStr(this.gems), !0);
                        else
                            this.gemNumEffect.getComponent("NumEffect").setNumber(cc.Mgr.Utils.getNumStr(this.gems), !0);
                        this.gemNode.active = !0,
                        this.getGems = this.gems
                    }
                    this.getCoin = p,
                    cc.loader.loadRes("prefab/plant/" + r.prefab, function(e, t) {
                        e ? cc.error(e.message || e) : (o.plantNodeA = cc.instantiate(t),
                        o.plantNodeA.parent = o.dragonParentA,
                        o.plantNodeA.group = a.NodeGroup.UI,
                        o.plantNodeA.position = cc.v2(0, 0),
                        o.plantNodeA.scale = 1,
                        o.plantNodeA.active = !0,
                        o.plantNodeA.getComponent("plant").setShowDetailsInUI(1.5, "#ffffff", !0))
                    });
                    var v, b = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(i.PlantData, t - 1);
                    if (cc.loader.loadRes("prefab/plant/" + b.prefab, function(e, t) {
                        e ? cc.error(e.message || e) : (o.plantNodeC = cc.instantiate(t),
                        o.plantNodeC.parent = o.dragonParentC,
                        o.plantNodeC.position = cc.v2(0, 0),
                        o.plantNodeC.scale = .85,
                        o.plantNodeC.group = a.NodeGroup.UI,
                        o.plantNodeC.active = !0,
                        o.plantNodeC.getComponent("plant").setShowDetailsInUI(1, "#ffffff", !0))
                    }),
                    t + 1 <= cc.Mgr.Config.allPlantCount) {
                        var y = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(i.PlantData, t + 1);
                        cc.loader.loadRes("prefab/plant/" + y.prefab, function(e, t) {
                            e ? cc.error(e.message || e) : (o.plantNodeB = cc.instantiate(t),
                            o.plantNodeB.parent = o.dragonParentB,
                            o.plantNodeB.position = cc.v2(0, 0),
                            o.plantNodeB.scale = .85,
                            o.plantNodeB.group = a.NodeGroup.UI,
                            o.plantNodeB.active = !0,
                            o.plantNodeB.getComponent("plant").setShowDetailsInUI(1, "#000000", !0))
                        })
                    }
                    cc.Mgr.game.plantMaxLv > 6 && "countdown" === cc.Mgr.game.ab_countdown && (this.showBtnCounter = setTimeout(function() {
                        var e = cc.fadeIn(.5);
                        s.noThanks.active = !0,
                        s.noThanks.runAction(e)
                    }, 3e3)),
                    cc.Mgr.game.needGuide || (this.checkboxNode.active = !0),
                    cc.Mgr.game.needGuide || (this.vipNode.active = !1),
                    !1 === g && (this.checkboxNode.active = !1),
                    this.doubleGetBtn.active = !1,
                    this.adsBtn.active = !1,
                    this.checkboxNode.active && this.toggle.isChecked ? this.adsBtn.active = !0 : this.doubleGetBtn.active = !0,
                    "control" === cc.Mgr.game.ab_countdown && (cc.Mgr.game.isPayingUser ? (v = null == cc.Mgr.game.isManualSetting_payingUser ? cc.Mgr.game.checkDoubleReward : cc.Mgr.game.isManualSetting_payingUser,
                    this.toggle.isChecked != v && (this.toggle.isChecked = v)) : (v = null == cc.Mgr.game.isManualSetting ? cc.Mgr.game.checkDoubleReward : cc.Mgr.game.isManualSetting,
                    this.toggle.isChecked != v && (this.toggle.isChecked = v))),
                    "control" === cc.Mgr.game.ab_countdown ? this.adsBtn.y = -405 : (this.checkboxNode.active = !1,
                    this.adsBtn.y = -360,
                    cc.Mgr.game.needGuide ? (this.doubleGetBtn.active = !0,
                    this.adsBtn.active = !1) : (this.adsBtn.active = !0,
                    this.doubleGetBtn.active = !1))
                }
                this.isDouble = !1,
                this.doTween(e),
                this.blurBg.opacity = 0,
                this.content.opacity = 0,
                this.content.setScale(.5),
                cc.tween(this.blurBg).to(.05, {
                    opacity: 255
                }).call().start(),
                cc.tween(this.content).to(.15, {
                    opacity: 255,
                    scale: 1
                }).start()
            },
            updateReward: function() {
                if (!cc.Mgr.game.needGuide) {
                    if ("unlock" === this.fromType) {
                        var e = !0 === this.toggle.isChecked && this.checkboxNode.active ? this.price * BigInt(3) : this.price;
                        this.coinNumEffect.getComponent("NumEffect").setNumber(cc.Mgr.Utils.getNumStr2(e)),
                        e = !0 === this.toggle.isChecked && this.checkboxNode.active ? 3 * this.gems : this.gems,
                        this.gemNumEffect.getComponent("NumEffect").setNumber(cc.Mgr.Utils.getNumStr(e))
                    } else
                        "get" === this.fromType && (this.toggle.isChecked && this.checkboxNode.active ? this.getPlantCountLabel.string = "x3" : this.getPlantCountLabel.string = "x1");
                    cc.Mgr.game.isManualSetting = cc.Mgr.game.isManualSetting_payingUser = this.toggle.isChecked,
                    this.doubleGetBtn.active = !1,
                    this.adsBtn.active = !1,
                    this.checkboxNode.active && this.toggle.isChecked ? this.adsBtn.active = !0 : this.doubleGetBtn.active = !0
                }
            },
            adsDoubleGet: function() {
                if (0 != this.limitClick.clickTime()) {
                    var e = this;
                    cc.Mgr.admob.showRewardedVideoAd(function(t) {
                        t ? ("get" === e.fromType ? e.getPlantCount = 3 : (e.getCoin = e.getCoin * BigInt(3),
                        e.getGems = 3 * e.getGems),
                        e.isDouble = !0) : e.isDouble = !1,
                        e.closeUI()
                    }, this.node, this.fromType, this)
                }
            },
            updateAdsBtnState: function() {
                if ("unlock" == this.fromType) {
                    var e = cc.Mgr.admob.checkAvailableRewardedAd();
                    if (this.toggle.isChecked && e) {
                        var t = this.price * BigInt(3);
                        this.coinNumEffect.getComponent("NumEffect").setNumber(cc.Mgr.Utils.getNumStr2(t), !0)
                    } else
                        this.coinNumEffect.getComponent("NumEffect").setNumber(cc.Mgr.Utils.getNumStr2(this.price), !0);
                    if (null != cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(i.LevelGemData, this.plantLevel)) {
                        if (this.toggle.isChecked && e) {
                            var a = 3 * this.gems;
                            this.gemNumEffect.getComponent("NumEffect").setNumber(cc.Mgr.Utils.getNumStr(a), !0)
                        } else
                            this.gemNumEffect.getComponent("NumEffect").setNumber(cc.Mgr.Utils.getNumStr(this.gems), !0);
                        this.gemNode.active = !0,
                        this.getGems = this.gems
                    }
                    !1 === e && (this.checkboxNode.active = !1),
                    "unlock" == this.fromType && (this.doubleGetBtn.active = !1,
                    this.adsBtn.active = !1,
                    this.checkboxNode.active && this.toggle.isChecked ? this.adsBtn.active = !0 : this.doubleGetBtn.active = !0)
                }
            },
            closeUI: function() {
                var e = this;
                cc.Mgr.AudioMgr.playSFX("click");
                var t = this;
                cc.tween(this.blurBg).to(.15, {
                    opacity: 0
                }).start(),
                cc.tween(this.content).to(.15, {
                    opacity: 0,
                    scale: .5
                }).call(function() {
                    if (t.unscheduleAllCallbacks(),
                    cc.Mgr.game.needGuide && cc.Mgr.game.curGuideStep == a.GuideType.guide4 && (cc.director.GlobalEvent.emit(n.singleGuideComplete, {
                        step: a.GuideType.guide4
                    }),
                    cc.director.GlobalEvent.emit(n.showSingleGuide, {
                        step: a.GuideType.guide5
                    })),
                    t.plantNodeA && t.plantNodeA.destroy(),
                    t.plantNodeB && t.plantNodeB.destroy(),
                    t.plantNodeC && t.plantNodeC.destroy(),
                    t.getGems > 0 && (cc.Mgr.game.gems += t.getGems,
                    cc.Mgr.game.gem_gained_total += t.getGems,
                    cc.Mgr.UIMgr.InGameUI.RefreshAssetData(!1, "gem"),
                    cc.Mgr.UIMgr.showGemsEffect()),
                    t.getCoin > 0 && (cc.Mgr.game.money += t.getCoin,
                    cc.Mgr.UIMgr.InGameUI.RefreshAssetData(!1, "money"),
                    cc.Mgr.UIMgr.showJibEffect()),
                    "get" === e.fromType && cc.Mgr.flowerPotMgr.addShopFlowerFot(t.plantLevel, t.getPlantCount),
                    t.node.active = !1,
                    "unlock" === e.fromType) {
                        var i = {};
                        i.elapsed = cc.Mgr.Utils.getDate9(!0),
                        i.gem = t.getGems,
                        i.coin = t.getCoin.toString(),
                        i.level = t.plantLevel,
                        i.double = t.toggle.isChecked && t.checkboxNode.active ? "True" : "False",
                        cc.Mgr.analytics.logEvent("unlock_new_guardian", JSON.stringify(i)),
                        cc.Mgr.TEA.collectEvent("unlock_new_guardian", {
                            elapsed: cc.Mgr.Utils.getDate9(!0),
                            gem: e.getGems,
                            coin: t.getCoin.toString(),
                            level: t.plantLevel,
                            double: t.toggle.isChecked && t.checkboxNode.active ? "True" : "False"
                        }),
                        cc.Mgr.Utils.downloadRanking()
                    }
                    "unlock" === e.fromType && (!1 === cc.Mgr.game.hasShowLevel8 && 6 === t.plantLevel && (cc.Mgr.game.hasShowLevel8 = !0,
                    cc.Mgr.UIMgr.openEnjoyNature()),
                    !1 === cc.Mgr.game.hasShowLevel14 && 14 === t.plantLevel && (cc.Mgr.game.hasShowLevel14 = !0,
                    cc.Mgr.UIMgr.openEnjoyNature()),
                    !1 === cc.Mgr.game.hasShowLevel28 && 19 === t.plantLevel && 2 !== cc.Mgr.game.rateState && (cc.Mgr.game.hasShowLevel28 = !0,
                    cc.Mgr.UIMgr.openEnjoyNature()),
                    !0 !== t.isDouble && !1 === cc.Mgr.game.needGuide && t.plantLevel > 6 && setTimeout(function() {
                        cc.Mgr.admob.showInterstitial(e.fromType, null, !0)
                    }, 1500))
                }).start(),
                cc.Mgr.UIMgr.reduceShowUICount("plantGet"),
                "unlock" === this.fromType && !0 !== cc.Mgr.game.isPayingUser && (cc.Mgr.game.checkDoubleReward = t.plantLevel >= 6)
            }
        });
        t.exports = s,
        cc._RF.pop()
    }
    , {
        DB_plantName: "DB_plantName",
        DataType: "DataType",
        Event: "Event",
        MyEnum: "MyEnum"
    }],
    plantManage: [function(e, t) {
        "use strict";
        var i;
        cc._RF.push(t, "70f16QMLk9Pl4Q62fGQkS+6", "plantManage");
        var a = e("EffectType")
          , n = e("DataType")
          , c = e("MyEnum")
          , s = e("Event")
          , o = e("MissionType")
          , r = cc.Class(((i = {
            extends: cc.Component,
            properties: {
                rubbishNode: cc.Node,
                frontNode: cc.Node,
                specialGridLock: cc.Node,
                specialGridUnlockEffect: dragonBones.ArmatureDisplay,
                specialGridUnlockEffect_2: cc.Node,
                specialGridUnlockEffect_3: dragonBones.ArmatureDisplay,
                unlockTipPrefab: cc.Prefab,
                vipTipNode: cc.Node,
                vipTipLabel: cc.Label,
                attackRange: cc.Node
            },
            statics: {
                instance: null
            },
            onLoad: function() {
                this.otherTipCount = 0,
                r.instance = this,
                this.checkLvNumList = [5, 20, 50, 100]
            },
            init: function(e) {
                this.grids = [],
                this.initedPlantNum = 0,
                this.plantParent = this.node,
                this.plantPos = [];
                for (var t = 0; t < 12; t++) {
                    var i = {};
                    i.x = 63 * Math.floor(t / 3) - 3 - 83 * Math.floor(t % 3),
                    i.y = -1 * Math.floor(t % 3) * 43 + 112 - 39 * Math.floor(t / 3),
                    this.plantPos.push(i)
                }
                this.plantPos.push({
                    x: -150,
                    y: 170
                }),
                this.loadedPrefabNum = 0,
                this.prefabsObjs = [],
                this.loadPrefabs(e),
                this.landBorders = [],
                this.loadLandBorder(),
                this.plantMoveInfo = {
                    isMove: !1,
                    index: -1
                },
                cc.director.GlobalEvent.on(s.BuyPlant, this.BuyPlant, this),
                cc.director.GlobalEvent.on(s.unlockGird, this.unlockGird, this),
                cc.director.GlobalEvent.on(s.AllGuideComplete, this.AllGuideComplete, this),
                cc.Mgr.game.needGuide || (this.node.on(cc.Node.EventType.TOUCH_START, function(e) {
                    this.TouchStart(e)
                }, this),
                this.scheduleOnce(this.checkMerge, cc.Mgr.game.plantMergeGuideTime)),
                this.frontNode.zIndex = 120,
                this.rubbishNode.zIndex = 121,
                this.attackRange.parent = null
            },
            TouchStart: function() {
                this.hideMergeGuide(),
                this.hideTipAttackNode(!1)
            },
            showAttackRange: function(e) {
                var t = e.getComponent("plant");
                !0 !== this.checkHasMerge(t.level, t.index) && (this.attackRange.parent = e,
                this.attackRange.setPosition(0, 30),
                this.attackRange.zIndex = -1,
                this.attackRange.setScale(12 === t.index ? 3.5 : 1))
            },
            checkHasMerge: function(e, t) {
                for (var i = 0; i < this.grids.length; i++)
                    if (this.grids[i].content.level === e && i !== t)
                        return !0;
                return !1
            },
            hideAttackRange: function() {
                this.attackRange.parent = null
            },
            loadLandBorder: function() {
                var e = this;
                cc.loader.loadRes("prefab/effect/landBorder", function(t, i) {
                    if (t)
                        cc.error(t.message || t);
                    else
                        for (var a = e.plantPos.length, n = 0; n < a; n++) {
                            var c = cc.instantiate(i);
                            c.parent = e.plantParent,
                            c.position = cc.v2(e.plantPos[n].x, e.plantPos[n].y + 30),
                            c.width = 120,
                            c.height = 80,
                            c.active = !1,
                            e.landBorders.push(c)
                        }
                })
            },
            showPickLandBorder: function(e, t, i) {
                if (void 0 === e && (e = !1),
                void 0 === i && (i = -1),
                e && cc.Mgr.game.autoTimer <= 0)
                    for (var a = 0; a < this.grids.length; a++) {
                        var n = this.grids[a];
                        n.type == c.GridState.plant && i != n.content.index && n.content.level == t && this.landBorders[n.content.index] && !n.content.isCompounded && (this.landBorders[n.content.index].active = !0)
                    }
                else
                    for (a = this.landBorders.length - 1; a >= 0; a--)
                        this.landBorders[a].active = !1
            },
            changePlantAngryState: function(e) {
                if (void 0 === e && (e = !1),
                this.allowRage !== e) {
                    this.allowRage = e;
                    for (var t = 0; t < this.grids.length; t++)
                        this.grids[t].type == c.GridState.plant && this.grids[t].content.changeAngryState(e);
                    cc.Mgr.UIMgr.InGameUI.getComponent("InGameUI").updateBuffShow()
                }
            },
            changePlantFireState: function(e) {
                if (void 0 === e && (e = !1),
                this.allowFire !== e) {
                    this.allowFire = e;
                    for (var t = 0; t < this.grids.length; t++)
                        this.grids[t].type == c.GridState.plant && this.grids[t].content.changeFireState(e);
                    cc.Mgr.UIMgr.InGameUI.getComponent("InGameUI").updateBuffShow()
                }
            },
            changePlantIceState: function(e) {
                if (void 0 === e && (e = !1),
                this.allowIce !== e) {
                    this.allowIce = e;
                    for (var t = 0; t < this.grids.length; t++)
                        this.grids[t].type == c.GridState.plant && this.grids[t].content.changeIceState(e);
                    cc.Mgr.UIMgr.InGameUI.getComponent("InGameUI").updateBuffShow()
                }
            },
            changePlantCritState: function(e) {
                if (void 0 === e && (e = !1),
                this.allowCrit !== e) {
                    this.allowCrit = e;
                    for (var t = 0; t < this.grids.length; t++)
                        this.grids[t].type == c.GridState.plant && this.grids[t].content.changeCritState(e);
                    cc.Mgr.UIMgr.InGameUI.getComponent("InGameUI").updateBuffShow()
                }
            },
            changePlantAutoState: function(e) {
                void 0 === e && (e = !1),
                this.allowAutoMerge !== e && (this.allowAutoMerge = e,
                this.autoMerge(),
                cc.Mgr.UIMgr.InGameUI.getComponent("InGameUI").updateBuffShow(),
                1 == this.allowAutoMerge && this.hideMergeGuide())
            },
            autoMerge: function() {
                var e = this;
                if (this.autoMergeData && (this.autoMergeData.startIndex = -1,
                this.autoMergeData.targetIndex = -1),
                !0 === this.allowAutoMerge) {
                    this.autoMergeResult = !1,
                    console.log("autoMerge");
                    for (var t = 0; t < this.grids.length; t++)
                        if (this.grids[t].type == c.GridState.plant)
                            for (var i = this.grids[t].content.level, a = 0; a < this.grids.length; a++)
                                if (this.grids[a].type == c.GridState.plant && this.grids[a].content.level == i && t != a && i !== cc.Mgr.Config.allPlantCount)
                                    return this.autoMergeData = {},
                                    this.autoMergeData.startIndex = t,
                                    this.autoMergeData.targetIndex = a,
                                    this.grids[t].content.node.zIndex = 999,
                                    this.grids[t].content.isMoving && this.grids[t].content.node.setPosition(this.plantPos[this.grids[t].content.index]),
                                    this.grids[a].content.isMoving && this.grids[a].content.node.setPosition(this.plantPos[this.grids[a].content.index]),
                                    this.grids[t].content.node.runAction(cc.sequence(cc.moveTo(.5, this.grids[a].content.node.getPosition()), cc.callFunc(function() {
                                        e.grids[t].content.node.zIndex = e.grids[t].content.lastZIndex,
                                        e.TouchEndDone(e.grids[t].content)
                                    }))),
                                    void (this.autoMergeResult = !0)
                }
            },
            rubbishBtn: function() {
                cc.Mgr.game.needGuide && cc.Mgr.game.curGuideStep == c.GuideType.guide8 ? cc.director.GlobalEvent.emit(s.singleGuideComplete, {
                    step: c.GuideType.guide8
                }) : cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("TrashTip"), "", cc.Mgr.UIMgr.uiRoot)
            },
            flowerPotOpen: function(e) {
                var t = e.index
                  , i = e.level;
                cc.Mgr.AudioMgr.playSFX(c.AudioType.flower_pot_tap),
                this.generateNewPlan(t, i);
                var a = cc.v2(this.plantPos[t].x + this.grids[t].content._generateEffectPos.x, this.plantPos[t].y + this.grids[t].content._generateEffectPos.y);
                this.playMergeEffect(a);
                var n = cc.v2(this.plantPos[t].x, this.plantPos[t].y)
                  , s = this;
                this.scheduleOnce(function() {
                    s.playOpenFlowerEffect(n)
                }, 1)
            },
            AllGuideComplete: function() {
                this.node.on(cc.Node.EventType.TOUCH_START, function(e) {
                    this.TouchStart(e)
                }, this),
                this.scheduleOnce(this.checkMerge, cc.Mgr.game.plantMergeGuideTime),
                this.checkSpaceGird(),
                this.generateDropFlowerFot()
            },
            hasLockGrid: function() {
                for (var e = !1, t = 0; t < 12; t++)
                    if (cc.Mgr.plantMgr.grids[t].type == c.GridState.lock) {
                        e = !0;
                        break
                    }
                return e
            },
            unlockSpecialGrid: function() {
                !0 !== this.hasLockGrid() && this.grids[12].type === c.GridState.vip && (this.grids[12].type = c.GridState.vipLock,
                this.grids[12].content = {},
                this.specialGridLock.active = !1,
                this.specialGridUnlockEffect.node.active = !0,
                this.specialGridUnlockEffect.playAnimation("Unlock", 1),
                this.specialGridUnlockEffect.on(dragonBones.EventObject.COMPLETE, this.showSpecialGridUnlockEffect, this))
            },
            updateVipGrid: function() {
                this.grids[12].type !== c.GridState.vip && this.grids[12].type !== c.GridState.vipLock || (cc.Mgr.game.isVIP || cc.Mgr.game.unlockSpecialGrid) && (this.grids[12].type = c.GridState.none,
                this.grids[12].content = {},
                this.specialGridLock.active = !1,
                this.specialGridUnlockEffect.node.active = !1,
                this.specialGridUnlockEffect_2.active = !1,
                this.specialGridUnlockEffect_3.node.active = !0,
                this.updateSpecialGridState())
            },
            activateSpecialGrid: function() {
                this.grids[12].type !== c.GridState.vip && this.grids[12].type !== c.GridState.vipLock || (!1 === this.hasLockGrid() || this.grids[12].type === c.GridState.vipLock ? (this.grids[12].type = c.GridState.none,
                this.grids[12].content = {},
                this.specialGridLock.active = !1,
                this.specialGridUnlockEffect.node.active = !1,
                this.specialGridUnlockEffect_2.active = !1,
                this.specialGridUnlockEffect_3.node.active = !0,
                this.updateSpecialGridState()) : (this.specialGridLock.active = !1,
                this.specialGridUnlockEffect.node.active = !0,
                this.specialGridUnlockEffect_3.node.active = !1,
                this.specialGridUnlockEffect.playAnimation("Unlock", 1),
                this.specialGridUnlockEffect.on(dragonBones.EventObject.COMPLETE, this.showActiveSpecialGridEffect, this)))
            },
            updateSpecialGridState: function() {
                this.specialGridUnlockEffect_3.node.active = !0,
                this.grids[12].type === c.GridState.plant ? this.specialGridUnlockEffect_3.playAnimation("Unlock3_1", -1) : this.grids[12].type === c.GridState.none || this.grids[12].type === c.GridState.flowerPot ? this.specialGridUnlockEffect_3.playAnimation("Unlock3", -1) : this.specialGridUnlockEffect_3.node.active = !1
            },
            restoreVipGrid: function() {
                cc.Mgr.game.isVIP || this.grids[12].type !== c.GridState.none || cc.Mgr.game.unlockSpecialGrid || (this.grids[12].type = c.GridState.vipLock,
                this.grids[12].content = {},
                this.specialGridUnlockEffect_3.node.active = !1,
                this.specialGridUnlockEffect_2.active = !0)
            },
            showActiveSpecialGridEffect: function() {
                this.specialGridUnlockEffect.active = !1,
                this.grids[12].type = c.GridState.none,
                this.grids[12].content = {},
                this.updateSpecialGridState()
            },
            showSpecialGridUnlockEffect: function() {
                this.specialGridUnlockEffect.node.active = !1,
                this.specialGridUnlockEffect_2.active = !0
            },
            onClickVip: function() {
                !0 === cc.Mgr.Config.isChina ? cc.Mgr.UIMgr.openSpecialGridBundle() : cc.Mgr.UIMgr.openVipUI("fort")
            },
            unlockGird: function(e) {
                var t = e.index;
                this.grids[t].content.plantDestroy(),
                this.grids[t].type = c.GridState.none,
                this.grids[t].content = {};
                var i = cc.Mgr.EffectMgr.getObFromPool(a.DieSmoke);
                i.active = !0,
                i.parent = this.node,
                i.position = cc.v2(this.plantPos[t].x, this.plantPos[t].y + 50),
                i.getComponent("dieSmoke").playAnimation(function() {}),
                this.unlockSpecialGrid(),
                this.unlockTip && this.unlockTip.active && (this.unlockTip.getComponent("UnlockTip").closeTip(),
                cc.Mgr.plantMgr.otherTipCount--),
                this.guideUnlockTip && this.guideUnlockTip.active && (this.guideUnlockTip.getComponent("UnlockTip").closeTip(),
                cc.Mgr.plantMgr.otherTipCount--)
            },
            checkHasAnySpaceGird: function(e) {
                void 0 === e && (e = !1);
                for (var t = 0, i = 0; i < this.grids.length; i++)
                    this.grids[i].type == c.GridState.none && t++;
                var a = cc.Mgr.flowerPotMgr.noneDropFlowerFotNun();
                return e ? t - a >= 2 : t > a
            },
            addPlantAtGridByLv: function(e) {
                for (var t = 0; t < this.grids.length; t++)
                    if (this.grids[t].type == c.GridState.none)
                        return void this.generateNewPlan(t, e)
            },
            BuyPlant: function(e) {
                for (var t = 0; t < this.grids.length; t++)
                    if (this.grids[t].type == c.GridState.none) {
                        var i = cc.Mgr.game.canBuyPlantId;
                        return cc.Mgr.game.plantBuyRecord[i]++,
                        this.generateNewPlan(t, i),
                        cc.Mgr.game.money -= e.money,
                        void cc.Mgr.UIMgr.InGameUI.RefreshAssetData(!1, "money")
                    }
                t == this.grids.length && cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("NoSpaceForPlant"), "", cc.Mgr.UIMgr.uiRoot)
            },
            checkTrash: function() {
                var e = !0
                  , t = cc.Mgr.Config.allPlantCount
                  , i = [];
                this.targetIdx = -1;
                for (var a = 0; a < this.grids.length; a++) {
                    var n = this.grids[a];
                    n.type === c.GridState.none && (e = !1),
                    n.type === c.GridState.plant && (n.content.level < t && (t = n.content.level,
                    this.targetIdx = a),
                    i.push(n.content.level))
                }
                if (this.refrain(i).indexOf(t) >= 0 && (e = !1),
                !0 === this.checkHasMergeItem() && (e = !1),
                !0 === e) {
                    var s = cc.v2(this.plantPos[this.targetIdx].x, this.plantPos[this.targetIdx].y)
                      , o = cc.v2(this.rubbishNode.x, this.rubbishNode.y);
                    this.showTrashGuide(s, o)
                } else
                    cc.Mgr.UIMgr.showTipToTrash(!1),
                    this.hideTrashGuide()
            },
            showTrashGuide: function(e, t) {
                this.unlockTip && this.unlockTip.active || this.grids[6].type !== c.GridState.lock && 1 != this.showGuideUnlockGrid() && (null != this.trashGuideNode && this.trashGuideNode.active || (cc.Mgr.UIMgr.showTipToTrash(!0),
                null == this.trashGuideNode && (this.trashGuideNode = cc.instantiate(this.plantTrashGuidePrefab),
                this.trashGuideNode.parent = this.node.parent),
                cc.Mgr.game.zoomIn && (e.x += 70,
                e.y += 20,
                t.x += 20,
                t.y -= 30),
                this.trashGuideNode.getComponent("PlantMergeGuide").startMove(e, t),
                this.trashGuideNode.active = !0))
            },
            hideTrashGuide: function() {
                null != this.trashGuideNode && this.trashGuideNode.active && (this.trashGuideNode.getComponent("PlantMergeGuide").stopMove(),
                this.trashGuideNode.active = !1)
            },
            refrain: function(e) {
                var t = [];
                return Array.isArray(e) && e.concat().sort().sort(function(e, i) {
                    e == i && -1 === t.indexOf(e) && t.push(e)
                }),
                t
            },
            generateNewPlan: function(e, t) {
                cc.Mgr.game.updatePlantOwnsByLv(t);
                var i = this
                  , a = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(n.PlantData, t)
                  , o = a.prefab
                  , r = cc.instantiate(i.prefabsObjs[o]);
                r.parent = i.plantParent;
                var l = r.getComponent("plant");
                l.init(e, i.plantPos[e], a),
                l.TouchEndCb = function(e) {
                    i.TouchEndDone(e)
                }
                ,
                l.TouchStartCb = function() {
                    i.TouchStartDone()
                }
                ,
                i.grids[e].type = c.GridState.plant,
                i.grids[e].content = l,
                i.grids[e].content.setIndex(e),
                cc.Mgr.game.needGuide && (cc.Mgr.AudioMgr.playSFX(c.AudioType.click),
                cc.Mgr.game.curGuideStep == c.GuideType.guide1 ? (cc.director.GlobalEvent.emit(s.singleGuideComplete, {
                    step: c.GuideType.guide1
                }),
                cc.director.GlobalEvent.emit(s.showSingleGuide, {
                    step: c.GuideType.guide2
                })) : cc.Mgr.game.curGuideStep == c.GuideType.guide2 ? (cc.director.GlobalEvent.emit(s.singleGuideComplete, {
                    step: c.GuideType.guide2
                }),
                cc.director.GlobalEvent.emit(s.showSingleGuide, {
                    step: c.GuideType.guide3
                })) : cc.Mgr.game.needGuide && cc.Mgr.game.curGuideStep == c.GuideType.guide6 ? cc.director.GlobalEvent.emit(s.singleGuideComplete, {
                    step: c.GuideType.guide6
                }) : cc.Mgr.game.needGuide && (cc.Mgr.game.curGuideStep,
                c.GuideType.guide7)),
                this.showUnlockGridTip(),
                this.updateSpecialGridState(),
                this.checkTrash(),
                0 == this.autoMergeResult && cc.Mgr.UIMgr.currentShowUICount <= 0 && this.autoMerge()
            },
            loadPrefabs: function(e) {
                for (var t = this, i = 0; i < cc.Mgr.Config.allPlantCount; i++) {
                    var a = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(n.PlantData, this.loadedPrefabNum + 1);
                    t.loadedPrefabNum++,
                    cc.loader.loadRes("prefab/plant/" + a.prefab, function(i, a) {
                        i ? cc.error(i.message || i) : (t.prefabsObjs[a.name] = a,
                        t.loadedPrefabNum--,
                        0 == t.loadedPrefabNum && e())
                    })
                }
                t.loadedPrefabNum++,
                cc.loader.loadRes("prefab/effect/rage_ske", cc.Prefab, function(i, a) {
                    i ? cc.error(i.message || i) : (t.loadedPrefabNum--,
                    t.ragePrefab = cc.instantiate(a),
                    0 == t.loadedPrefabNum && e())
                }),
                t.loadedPrefabNum++,
                cc.loader.loadRes("prefab/effect/flame_ske", cc.Prefab, function(i, a) {
                    i ? cc.error(i.message || i) : (t.loadedPrefabNum--,
                    t.flamePrefab = cc.instantiate(a),
                    0 == t.loadedPrefabNum && e())
                }),
                t.loadedPrefabNum++,
                cc.loader.loadRes("prefab/effect/ice_ske", cc.Prefab, function(i, a) {
                    i ? cc.error(i.message || i) : (t.loadedPrefabNum--,
                    t.freezePrefab = cc.instantiate(a),
                    0 == t.loadedPrefabNum && e())
                }),
                t.loadedPrefabNum++,
                cc.loader.loadRes("prefab/effect/crit_ske", cc.Prefab, function(i, a) {
                    i ? cc.error(i.message || i) : (t.loadedPrefabNum--,
                    t.critPrefab = cc.instantiate(a),
                    0 == t.loadedPrefabNum && e())
                }),
                t.loadedPrefabNum++,
                cc.loader.loadRes("prefab/plant/lockGird", function(i, a) {
                    i ? cc.error(i.message || i) : (t.lockGirdPrefab = a,
                    t.loadedPrefabNum--,
                    0 == t.loadedPrefabNum && e())
                }),
                t.loadedPrefabNum++,
                cc.loader.loadRes("prefab/uiPrefab/PlantMergeGuide", function(i, a) {
                    i ? cc.error(i.message || i) : (t.plantMergeGuidePrefab = a,
                    t.loadedPrefabNum--,
                    0 == t.loadedPrefabNum && e())
                }),
                t.loadedPrefabNum++,
                cc.loader.loadRes("prefab/uiPrefab/PlantTrashGuide", function(i, a) {
                    i ? cc.error(i.message || i) : (t.plantTrashGuidePrefab = a,
                    t.loadedPrefabNum--,
                    0 == t.loadedPrefabNum && e())
                })
            },
            showVipTip: function() {
                this.vipTipNode.active || this.otherTipCount > 0 || this.grids[12].type === c.GridState.none || this.grids[12].type === c.GridState.plant || this.grids[12].type === c.GridState.flowerPot || this.otherTipCount > 0 || this.hasLockGrid() || (this.vipTipLabel.string = cc.Mgr.Utils.getTranslation("unlock-fort-tip"),
                this.vipTipNode.active = !0,
                this.otherTipCount++)
            }
        }).hasLockGrid = function() {
            for (var e = !1, t = 0; t < 12; t++)
                if (this.grids[t].type === c.GridState.lock) {
                    e = !0;
                    break
                }
            return e
        }
        ,
        i.hideVipTip = function() {
            this.vipTipNode.active && this.otherTipCount--,
            this.vipTipNode.active = !1
        }
        ,
        i.initPlants = function() {
            for (var e = this, t = 0; t < this.plantPos.length; t++) {
                var i = {}
                  , a = cc.Mgr.game.plantsPK[t];
                if (12 == t && a.type !== c.GridState.vip && a.type !== c.GridState.vipLock && (this.specialGridLock.active = !1,
                this.specialGridUnlockEffect.node.active = !1,
                this.specialGridUnlockEffect_2.active = !1),
                a.type == c.GridState.plant || a.type == c.GridState.flowerPot) {
                    var s = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(n.PlantData, a.level)
                      , o = s.prefab;
                    (r = cc.instantiate(e.prefabsObjs[o])).parent = e.plantParent,
                    (l = r.getComponent("plant")).init(t, e.plantPos[t], s),
                    l.TouchEndCb = function(t) {
                        e.TouchEndDone(t)
                    }
                    ,
                    l.TouchStartCb = function() {
                        e.TouchStartDone()
                    }
                    ,
                    i.type = c.GridState.plant,
                    i.content = l,
                    e.grids.push(i)
                } else if (a.type == c.GridState.lock) {
                    var r, l;
                    (r = cc.instantiate(e.lockGirdPrefab)).parent = e.plantParent,
                    (l = r.getComponent("lockGird")).init(t, a.level, e.plantPos[t]),
                    l.TouchEndCb = function(t) {
                        e.TouchEndDone(t)
                    }
                    ,
                    l.TouchStartCb = function() {
                        e.TouchStartDone()
                    }
                    ,
                    i.type = c.GridState.lock,
                    i.content = l,
                    e.grids.push(i)
                } else
                    a.type == c.GridState.vip ? (this.specialGridLock.active = !0,
                    this.specialGridUnlockEffect.node.active = !1,
                    this.specialGridUnlockEffect_2.active = !1,
                    this.specialGridUnlockEffect_3.node.active = !1,
                    i.type = c.GridState.vip,
                    i.content = {},
                    e.grids.push(i)) : a.type == c.GridState.vipLock ? (this.specialGridLock.active = !1,
                    this.specialGridUnlockEffect.node.active = !1,
                    this.specialGridUnlockEffect_2.active = !0,
                    this.specialGridUnlockEffect_3.node.active = !1,
                    i.type = c.GridState.vipLock,
                    i.content = {},
                    e.grids.push(i)) : (12 == t && (this.specialGridLock.active = !1,
                    this.specialGridUnlockEffect.node.active = !1,
                    this.specialGridUnlockEffect_2.active = !1,
                    this.specialGridUnlockEffect_3.node.active = !0),
                    i.type = c.GridState.none,
                    i.content = {},
                    e.grids.push(i))
            }
            this.updateSpecialGridState(),
            this.showUnlockGridTip(),
            this.checkTrash(),
            cc.Mgr.game.needGuide || (this.checkSpaceGird(),
            this.generateDropFlowerFot()),
            this.grids[12].type !== c.GridState.vip && this.grids[12].type !== c.GridState.vipLock || !cc.Mgr.game.isVIP && !cc.Mgr.game.unlockSpecialGrid || this.updateVipGrid()
        }
        ,
        i.guideStep3Run = function() {
            var e = cc.v2(this.plantPos[7].x, this.plantPos[7].y)
              , t = cc.v2(this.plantPos[8].x, this.plantPos[8].y);
            this.showMergeGuide(e, t)
        }
        ,
        i.showMergeGuide = function(e, t) {
            1 != this.allowAutoMerge && (null != this.MergeGuideNode && this.MergeGuideNode.active || (null == this.MergeGuideNode && (this.MergeGuideNode = cc.instantiate(this.plantMergeGuidePrefab),
            this.MergeGuideNode.parent = this.node.parent),
            cc.Mgr.game.zoomIn && (e.x += 60,
            e.y += 20,
            t.x += 60,
            t.y += 20),
            this.MergeGuideNode.getComponent("PlantMergeGuide").startMove(e, t),
            this.MergeGuideNode.active = !0,
            this.otherTipCount++))
        }
        ,
        i.hideMergeGuide = function() {
            cc.Mgr.game.needGuide || (this.unschedule(this.checkMerge),
            this.unschedule(this.hideMergeGuide),
            this.scheduleOnce(this.checkMerge, cc.Mgr.game.plantMergeGuideTime)),
            null != this.MergeGuideNode && (this.MergeGuideNode.active && this.otherTipCount--,
            this.MergeGuideNode.getComponent("PlantMergeGuide").stopMove(),
            this.MergeGuideNode.active = !1)
        }
        ,
        i.checkHasMergeItem = function() {
            for (var e = new Array, t = 0; t < this.grids.length; t++)
                this.grids[t].type == c.GridState.plant && e.push(this.grids[t].content);
            for (e.sort(function(e, t) {
                return t.level - e.level
            }),
            t = 0; t < e.length; t++)
                if (t != e.length - 1 && e[t].level == e[t + 1].level)
                    return !0;
            return !1
        }
        ,
        i.checkMerge = function() {
            if (!(cc.Mgr.game.level > 5)) {
                for (var e = new Array, t = 0; t < this.grids.length; t++)
                    this.grids[t].type == c.GridState.plant && e.push(this.grids[t].content);
                for (e.sort(function(e, t) {
                    return t.level - e.level
                }),
                t = 0; t < e.length; t++)
                    if (t != e.length - 1 && e[t].level == e[t + 1].level && e[t].level < cc.Mgr.Config.allPlantCount) {
                        var i = e[t].index
                          , a = e[t + 1].index
                          , n = cc.v2(this.plantPos[i].x, this.plantPos[i].y)
                          , s = cc.v2(this.plantPos[a].x, this.plantPos[a].y);
                        this.showMergeGuide(n, s);
                        break
                    }
                this.scheduleOnce(this.hideMergeGuide, cc.Mgr.game.plantMergeGuideHideTime)
            }
        }
        ,
        i.generateDropFlowerFot = function() {
            var e = this;
            this.schedule(function() {
                var t = 0;
                for (var i in e.grids)
                    i.type == c.GridState.none && t++;
                cc.Mgr.flowerPotMgr.addDropFlowerFot(t)
            }, cc.Mgr.game.airDropTime)
        }
        ,
        i.checkSpaceGird = function() {
            var e = this;
            this.schedule(function() {
                if (cc.Mgr.flowerPotMgr.haveFlowerFot()) {
                    for (var t = new Array, i = 0; i < e.grids.length; i++)
                        e.grids[i].type == c.GridState.none && t.push(i);
                    var a = t.length;
                    if (a > 0) {
                        var n = cc.Mgr.flowerPotMgr.getFlowerFot();
                        if (null != n) {
                            var s = Math.floor(Math.random() * a)
                              , o = cc.Mgr.game.needGuide ? t[0] : t[s];
                            n.parent = e.plantParent;
                            var r = n.getComponent("flowerPot");
                            r.init(o, e.plantPos[o]),
                            e.grids[o].type = c.GridState.flowerPot,
                            e.grids[o].content = r
                        }
                    }
                }
            }, cc.Mgr.Config.CheckPotGrownInterval)
        }
        ,
        i.compoundNewPlant = function(e, t) {
            cc.Mgr.game.updatePlantOwnsByLv(t);
            var i = cc.Mgr.game.getPlantOwnsDataByLv(t)
              , a = 5 === i ? "" : "_" + i;
            this.checkLvNumList.indexOf(i) >= 0 && cc.Mgr.Utils.uploadAchievment("getGuardians_" + t + a, t, i);
            var r = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(n.PlantData, t)
              , l = this
              , g = r.prefab;
            cc.Mgr.game.updateMissionProgressById(o.MergePlant);
            var h = cc.instantiate(l.prefabsObjs[g]);
            h.parent = l.plantParent;
            var d = h.getComponent("plant");
            d.init(e, l.plantPos[e], r),
            d.TouchEndCb = function(e) {
                l.TouchEndDone(e)
            }
            ,
            d.TouchStartCb = function() {
                l.TouchStartDone()
            }
            ,
            l.grids[e].type = c.GridState.plant,
            l.grids[e].content = d,
            l.grids[e].content.setIndex(e),
            cc.tween(h).to(.2, {
                scale: 1.5
            }).to(.2, {
                scale: 1
            }).call(function() {}).start(),
            cc.Mgr.AudioMgr.playSFX(c.AudioType.merge),
            cc.Mgr.game.plantMaxLv >= 6 && cc.Mgr.game.doubleBtnIntervalTime <= 0 && cc.Mgr.UIMgr.InGameUI.showDoubleCoinBtn(!0),
            cc.Mgr.game.needGuide && cc.Mgr.game.curGuideStep == c.GuideType.guide3 && cc.director.GlobalEvent.emit(s.singleGuideComplete, {
                step: c.GuideType.guide3
            }),
            cc.Mgr.UIMgr.currentShowUICount <= 0 && this.autoMerge()
        }
        ,
        i.plantCompound = function(e, t, i) {
            var a = this;
            cc.Mgr.game.needGuide && cc.Mgr.game.curGuideStep == c.GuideType.guide3 && this.hideMergeGuide(),
            this.grids[e].content.compounded(),
            this.grids[t].content.compounded();
            var n = this.plantPos[t];
            cc.tween(this.grids[e].content.node).to(.3, {
                position: cc.v2(n.x - 40, n.y)
            }).to(.15, {
                position: cc.v2(n.x, n.y)
            }).start(),
            cc.tween(this.grids[t].content.node).to(.3, {
                position: cc.v2(n.x + 40, n.y)
            }).to(.15, {
                position: cc.v2(n.x, n.y)
            }).call(function() {
                a.grids[e].type = c.GridState.none,
                a.grids[e].content.plantDestroy(),
                a.grids[t].type = c.GridState.none,
                a.grids[t].content.plantDestroy(),
                cc.Mgr.game.plantMaxLv < i + 1 && (cc.Mgr.game.plantMaxLv = i + 1,
                cc.Mgr.UIMgr.openPlantGetUI("unlock", cc.Mgr.game.plantMaxLv),
                cc.Mgr.Utils.trackEvent_adjust("loil3r")),
                a.compoundNewPlant(t, i + 1);
                var s = cc.v2(n.x + a.grids[t].content._generateEffectPos.x, n.y + a.grids[t].content._generateEffectPos.y);
                a.playMergeEffect(s),
                cc.Mgr.UIMgr.InGameUI.RefreshBuyButtonMergeAll(),
                a.checkTrash(),
                a.restoreVipGrid()
            }).start()
        }
        ,
        i.plantPutRubbish = function(e, t) {
            if (void 0 === t && (t = !0),
            t) {
                var i = cc.Mgr.EffectMgr.getObFromPool(a.DieSmoke);
                i.active = !0,
                i.parent = this.rubbishNode,
                i.y = this.node.y,
                i.x = this.node.x,
                i.getComponent("dieSmoke").playAnimation(function() {})
            }
            var s = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(n.PlantData, this.grids[e].content.level).price / BigInt(2);
            cc.Mgr.UIMgr.playCoinFlyForRecovery(s),
            cc.tween(this.rubbishNode).to(.2, {
                scale: cc.Mgr.game.zoomIn ? 1 : 1.2
            }).to(.2, {
                scale: cc.Mgr.game.zoomIn ? .83 : 1
            }).start(),
            this.grids[e].type = c.GridState.none,
            this.grids[e].content.plantDestroy()
        }
        ,
        i.playMergeEffect = function(e) {
            var t = cc.Mgr.EffectMgr.getObFromPool(a.Merge);
            t.active = !0,
            null != t && (t.parent = this.plantParent,
            t.zIndex = 0,
            t.scale = .5,
            t.y = e.y,
            t.x = e.x,
            t.getComponent("plantMerge").playAnimation())
        }
        ,
        i.playOpenFlowerEffect = function(e) {
            var t = cc.Mgr.EffectMgr.getObFromPool(a.flowerPotOpen);
            t.active = !0,
            null != t && (t.parent = this.plantParent,
            t.zIndex = 13,
            t.scale = .7,
            t.y = e.y,
            t.x = e.x,
            t.getComponent("flowerPotOpen").playAnimation())
        }
        ,
        i.plantExchange = function(e, t) {
            var i = this.grids[e].content;
            this.grids[e].content = this.grids[t].content,
            this.grids[e].content.setPosition(this.plantPos[e]),
            this.grids[e].content.setIndex(e),
            this.grids[t].content = i,
            this.grids[t].content.setPosition(this.plantPos[t]),
            this.grids[t].content.setIndex(t)
        }
        ,
        i.plantChangePos = function(e, t) {
            cc.Mgr.game.needGuide && cc.Mgr.game.curGuideStep == c.GuideType.guide5 && (cc.director.GlobalEvent.emit(s.singleGuideComplete, {
                step: c.GuideType.guide5
            }),
            cc.director.GlobalEvent.emit(s.showSingleGuide, {
                step: c.GuideType.guide6
            }));
            var i = this.grids[e].content;
            this.grids[e].type = c.GridState.none,
            this.grids[e].content = {},
            this.grids[t].content = i,
            this.grids[t].type = c.GridState.plant,
            this.grids[t].content.setPosition(this.plantPos[t]),
            this.grids[t].content.setIndex(t)
        }
        ,
        i.TouchStartDone = function() {
            cc.tween(this.rubbishNode).to(.2, {
                scale: cc.Mgr.game.zoomIn ? 1 : 1.2
            }).start()
        }
        ,
        i.TouchEndDone = function(e) {
            for (var t = null, i = 999, a = 0; a < this.plantPos.length; a++)
                if (a != e.index && !(this.grids[a].type == c.GridState.plant && this.grids[a].content.isCompounded || cc.Mgr.game.needGuide && cc.Mgr.game.curGuideStep == c.GuideType.guide5 && 11 != a || cc.Mgr.game.needGuide && cc.Mgr.game.curGuideStep == c.GuideType.guide3 && 8 != a || cc.Mgr.game.needGuide && cc.Mgr.game.curGuideStep == c.GuideType.guide4)) {
                    var n = cc.Mgr.Utils.pDistance(e.node.position, this.plantPos[a]);
                    n < 50 && n < i && (t = a,
                    i = n)
                }
            if (null == t && !cc.Mgr.game.needGuide) {
                var s = Math.abs(e.node.position.x - this.rubbishNode.position.x)
                  , o = Math.abs(e.node.position.y - this.rubbishNode.position.y);
                s < 100 && o < 100 && (t = this.plantPos.length)
            }
            null != t ? this.touchEndHandle(t, e) : e.setPosition(this.plantPos[e.index]),
            cc.tween(this.rubbishNode).to(.2, {
                scale: cc.Mgr.game.zoomIn ? .83 : 1
            }).start(),
            this.updateSpecialGridState()
        }
        ,
        i.touchEndHandle = function(e, t) {
            if (e != this.plantPos.length) {
                var i = this.grids[e];
                !this.autoMergeData || t.index == this.autoMergeData.startIndex || i.type != c.GridState.plant || i.content.index != this.autoMergeData.startIndex && i.content.index != this.autoMergeData.targetIndex ? i.type == c.GridState.plant && t.level == i.content.level ? t.level != cc.Mgr.Config.allPlantCount ? 12 !== e || cc.Mgr.game.isVIP || cc.Mgr.game.unlockSpecialGrid ? this.plantCompound(t.index, e, t.level) : (cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("vip-tip-01"), "", cc.Mgr.UIMgr.uiRoot),
                t.setPosition(this.plantPos[t.index])) : (cc.Mgr.UIMgr.openMaxLevelUI(),
                t.setPosition(this.plantPos[t.index])) : i.type == c.GridState.plant && t.level != i.content.level ? 12 !== e && 12 !== t.index || cc.Mgr.game.isVIP || cc.Mgr.game.unlockSpecialGrid ? this.plantExchange(t.index, e) : (cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("vip-tip-01"), "", cc.Mgr.UIMgr.uiRoot),
                t.setPosition(this.plantPos[t.index])) : i.type == c.GridState.none ? (this.plantChangePos(t.index, e),
                this.restoreVipGrid()) : i.type == c.GridState.flowerPot || i.type == c.GridState.lock ? t.setPosition(this.plantPos[t.index]) : i.type == c.GridState.vipLock ? (this.onClickVip(),
                t.setPosition(this.plantPos[t.index])) : t.setPosition(this.plantPos[t.index]) : t.setPosition(this.plantPos[t.index])
            } else
                t.level == cc.Mgr.game.plantMaxLv ? (cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("max-level-cannt-recovery"), "", cc.Mgr.UIMgr.uiRoot),
                t.setPosition(this.plantPos[t.index])) : (this.plantPutRubbish(t.index),
                this.checkTrash(),
                this.restoreVipGrid())
        }
        ,
        i.checkMaxLvPlantCanAttack = function() {
            var e = {
                needShow: !1
            }
              , t = cc.Mgr.game.level > 60 ? cc.Mgr.game.level % 60 + "_" + cc.Mgr.game.curBoshu : cc.Mgr.game.level + "_" + cc.Mgr.game.curBoshu
              , i = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(n.LevelData, t);
            if (cc.Mgr.game.curBoshu != i.waveCount)
                return e;
            for (var a = 0; a < this.grids.length; a++)
                if (this.grids[a].type == c.GridState.plant && this.grids[a].content.level == cc.Mgr.game.plantMaxLv && cc.Mgr.game.plantMaxLv >= 6 && !this.grids[a].content.hasAttackObj() && !this.grids[a].content.isCompounded && this.plantMoveInfo.index != this.grids[a].content.index)
                    return e.needShow = !0,
                    e.index = this.grids[a].content.index,
                    cc.Mgr.game.pickOutMaxLvPlant = e.index,
                    e;
            return e
        }
        ,
        i.showUnlockGridTip = function() {
            this.unlockTip && this.unlockTip.active || this.grids[6].type === c.GridState.lock && !this.checkHasAnySpaceGird() && (this.unlockTip = cc.instantiate(this.unlockTipPrefab),
            this.unlockTip.parent = this.plantParent,
            this.unlockTip.zIndex = 999,
            this.unlockTip.scale = .75,
            this.unlockTip.setPosition(this.grids[6].content.node.x, this.grids[6].content.node.y + 80),
            cc.Mgr.plantMgr.otherTipCount++)
        }
        ,
        i.showGuideUnlockGrid = function() {
            if (this.unlockTip && this.unlockTip.active)
                return !1;
            if (this.guideUnlockTip && this.guideUnlockTip.active)
                return !1;
            var e = this.getMinLockGrid();
            if (null == e)
                return this.hideGuideUnlockGrid(),
                !1;
            for (var t = cc.Mgr.Config.allPlantCount, i = [], a = 0; a < this.grids.length; a++) {
                var n = this.grids[a];
                if (n.type === c.GridState.none)
                    return this.hideGuideUnlockGrid(),
                    !1;
                n.type === c.GridState.plant && (n.content.level < t && (t = n.content.level),
                i.push(n.content.level))
            }
            return this.refrain(i).indexOf(t) >= 0 ? (this.hideGuideUnlockGrid(),
            !1) : !0 === this.checkHasMergeItem() ? (this.hideGuideUnlockGrid(),
            !1) : (this.guideUnlockTip = cc.instantiate(this.unlockTipPrefab),
            this.guideUnlockTip.parent = this.plantParent,
            this.guideUnlockTip.zIndex = 999,
            this.guideUnlockTip.scale = .75,
            this.guideUnlockTip.setPosition(this.grids[e].content.node.x, this.grids[e].content.node.y + 80),
            cc.Mgr.plantMgr.otherTipCount++,
            !0)
        }
        ,
        i.hideGuideUnlockGrid = function() {
            this.guideUnlockTip && this.guideUnlockTip.active && this.guideUnlockTip.getComponent("UnlockTip").closeTip()
        }
        ,
        i.getMinLockGrid = function() {
            for (var e = null, t = this.grids.length - 1; t >= 0; t--) {
                var i = this.grids[t];
                if (i.type === c.GridState.lock && cc.Mgr.game.money >= i.content.money) {
                    e = t;
                    break
                }
            }
            return e
        }
        ,
        i.showLaterTipAttack = function() {
            this.attckShowIndex = -1;
            var e = this.checkMaxLvPlantCanAttack();
            0 != e.needShow && (this.attckShowIndex = e.index,
            this.showAttackTip())
        }
        ,
        i.showAttackTip = function() {
            if (!(this.tipMoveAttackNode && this.tipMoveAttackNode.active || this.otherTipCount > 0)) {
                var e = this.attckShowIndex;
                if (null != e && -1 != e) {
                    if (this.tipMoveAttackNode) {
                        this.tipMoveAttackNode.parent = this.plantParent,
                        this.tipMoveAttackNode.active = !0,
                        this.tipMoveAttackNode.zIndex = 999,
                        this.tipMoveAttackNode.scale = .75;
                        var t = cc.v2(this.plantPos[e].x, this.plantPos[e].y + 100);
                        this.tipMoveAttackNode.y = t.y,
                        this.tipMoveAttackNode.x = t.x,
                        this.tipMoveAttackNode.getComponent("tipMoveAttack").showtipMoveAttack()
                    } else {
                        var i = cc.Mgr.EffectMgr.getObFromPool(a.TipMoveAttack);
                        if (null == i)
                            return;
                        i.parent = this.plantParent,
                        i.active = !0,
                        i.zIndex = 999,
                        i.scale = .75,
                        t = cc.v2(this.plantPos[e].x, this.plantPos[e].y + 100),
                        i.y = t.y,
                        i.x = t.x,
                        i.getComponent("tipMoveAttack").showtipMoveAttack(),
                        this.tipMoveAttackNode = i
                    }
                    this.otherTipCount++
                }
            }
        }
        ,
        i.hideTipAttackNode = function() {
            cc.Mgr.game.pickOutMaxLvPlant = -1,
            this.tipMoveAttackNode && 1 == this.tipMoveAttackNode.active && (this.tipMoveAttackNode.getComponent("tipMoveAttack").closeTip(),
            this.otherTipCount--)
        }
        ,
        i.showtipMoveAttackNext = function() {
            if ((!this.tipMoveAttackNode || !this.tipMoveAttackNode.active) && !(this.otherTipCount > 0) && this.tipMoveAttackNode) {
                var e = this.checkMaxLvPlantCanAttack();
                if (0 == e.needShow)
                    return;
                var t = e.index;
                this.tipMoveAttackNode.active = !0;
                var i = cc.v2(this.plantPos[t].x, this.plantPos[t].y + 100);
                this.tipMoveAttackNode.y = i.y,
                this.tipMoveAttackNode.x = i.x,
                this.tipMoveAttackNode.getComponent("tipMoveAttack").showtipMoveAttack(),
                this.otherTipCount++
            }
        }
        ,
        i.start = function() {
            this.startTimer = Date.now()
        }
        ,
        i.update = function() {
            Date.now() - this.startTimer >= 1e3 && (this.startTimer = Date.now(),
            cc.Mgr.game.rageTimer > 0 && (cc.Mgr.game.rageTimer--,
            cc.Mgr.game.rageTimer <= 0 && this.changePlantAngryState(!1)),
            cc.Mgr.game.fireTimer > 0 && (cc.Mgr.game.fireTimer--,
            cc.Mgr.game.fireTimer <= 0 && this.changePlantFireState(!1)),
            cc.Mgr.game.iceTimer > 0 && (cc.Mgr.game.iceTimer--,
            cc.Mgr.game.iceTimer <= 0 && this.changePlantIceState(!1)),
            cc.Mgr.game.critTimer > 0 && (cc.Mgr.game.critTimer--,
            cc.Mgr.game.critTimer <= 0 && this.changePlantCritState(!1)),
            cc.Mgr.game.autoTimer > 0 && cc.Mgr.UIMgr.currentShowUICount <= 0 && (cc.Mgr.game.autoTimer--,
            cc.Mgr.game.autoTimer <= 0 && this.changePlantAutoState(!1)),
            cc.Mgr.UIMgr.buffUINode && cc.Mgr.UIMgr.buffUINode.active && cc.Mgr.UIMgr.buffUINode.getComponent("BuffUI").refreshUI(),
            cc.Mgr.UIMgr.InGameUI && cc.Mgr.UIMgr.InGameUI.updateBuffTimer())
        }
        ,
        i));
        t.exports = r,
        cc._RF.pop()
    }
    , {
        DataType: "DataType",
        EffectType: "EffectType",
        Event: "Event",
        MissionType: "MissionType",
        MyEnum: "MyEnum"
    }],
    plantMerge: [function(e, t) {
        "use strict";
        cc._RF.push(t, "c6a72o2O4lGHrLXJY7l5KkY", "plantMerge");
        var i = e("EffectType")
          , a = cc.Class({
            extends: cc.Component,
            properties: {
                dragon: dragonBones.ArmatureDisplay
            },
            start: function() {
                this.dragon.on(dragonBones.EventObject.COMPLETE, this.onAnimComplete, this)
            },
            onAnimComplete: function() {
                cc.Mgr.EffectMgr.ObBackToPool(this.node, i.Merge)
            },
            playAnimation: function() {
                this.dragon.playAnimation("newAnimation", 1)
            }
        });
        t.exports = a,
        cc._RF.pop()
    }
    , {
        EffectType: "EffectType"
    }],
    plant: [function(e, t) {
        "use strict";
        cc._RF.push(t, "42c15Zz38ZM17B3iVconGSi", "plant");
        var i = e("MyEnum")
          , a = (e("DataType"),
        cc.Class({
            extends: cc.Component,
            properties: {
                dragon: dragonBones.ArmatureDisplay,
                index: 0,
                level: 0,
                cd: 0,
                power: 0,
                offline: 0,
                price: 0,
                gem: 0,
                shootPos: [cc.Vec2],
                steakColor: "",
                killType: 0,
                killProbability: 0,
                pos: cc.Vec2,
                bulletType: 1,
                dragonTimeScale: 1,
                _IdleAnimName: "idle",
                _AttackAnimName: "attack",
                _generateEffectPos: cc.Vec2,
                generateEffectPosNode: cc.Node,
                isNeedMask: !0,
                isNeedTrail: !0,
                levelLabel: cc.Label,
                levelLabel_ru: cc.Label
            },
            onLoad: function() {
                this.nomalRangeY = 150,
                this.specialRangeY = 500,
                this.nomalRangeX = 220,
                this.specialRangeX = 500
            },
            init: function(e, t, a) {
                a.zoom = .75,
                19 == a.level && (a.zoom = .85),
                this.dragonTimeScale = 1,
                this.level = a.level,
                this.pos = t,
                this.node.position = this.pos,
                this.dragon.node.scaleX = -1 * a.zoom,
                this.dragon.node.scaleY = a.zoom,
                this.levelLabel.string = "Lv." + this.level,
                this.plantData = a,
                this.currentAttackNode = null,
                this.currentSpeed = 1,
                this.setIndex(e),
                this.node.on(cc.Node.EventType.TOUCH_START, function(e) {
                    (!cc.Mgr.plantMgr.autoMergeData || cc.Mgr.plantMgr.autoMergeData.startIndex != this.index && cc.Mgr.plantMgr.autoMergeData.targetIndex != this.index) && (cc.Mgr.plantMgr.hideTipAttackNode(),
                    cc.Mgr.plantMgr.showAttackRange(this.node),
                    this.TouchStart(e))
                }, this),
                this.node.on(cc.Node.EventType.TOUCH_MOVE, function(e) {
                    (!cc.Mgr.plantMgr.autoMergeData || cc.Mgr.plantMgr.autoMergeData.startIndex != this.index && cc.Mgr.plantMgr.autoMergeData.targetIndex != this.index) && this.TouchMove(e)
                }, this),
                this.node.on(cc.Node.EventType.TOUCH_CANCEL, function(e) {
                    (!cc.Mgr.plantMgr.autoMergeData || cc.Mgr.plantMgr.autoMergeData.startIndex != this.index && cc.Mgr.plantMgr.autoMergeData.targetIndex != this.index) && (cc.Mgr.plantMgr.hideTipAttackNode(),
                    cc.Mgr.plantMgr.hideAttackRange(),
                    this.TouchEnd(e))
                }, this),
                this.node.on(cc.Node.EventType.TOUCH_UP, function(e) {
                    (!cc.Mgr.plantMgr.autoMergeData || cc.Mgr.plantMgr.autoMergeData.startIndex != this.index && cc.Mgr.plantMgr.autoMergeData.targetIndex != this.index) && (cc.Mgr.plantMgr.hideAttackRange(),
                    this.TouchEnd(e))
                }, this),
                this.node.on(cc.Node.EventType.TOUCH_END, function(e) {
                    (!cc.Mgr.plantMgr.autoMergeData || cc.Mgr.plantMgr.autoMergeData.startIndex != this.index && cc.Mgr.plantMgr.autoMergeData.targetIndex != this.index) && (cc.Mgr.plantMgr.hideTipAttackNode(),
                    cc.Mgr.plantMgr.hideAttackRange(),
                    this.TouchEnd(e))
                }, this),
                this.node.zIndex = 50 + e,
                this.isCompounded = !1,
                this.setRageEffect(),
                this.setFlameEffect(),
                this.setFreezeEffect(),
                this.setCritEffect(),
                cc.Mgr.DragonMgr.create(1, this.dragon),
                this.playIdleAnim(),
                this.state = i.PlantState.idle,
                this.dragon.on(dragonBones.EventObject.FRAME_EVENT, this.onFrameEvent, this),
                this.dragon.on(dragonBones.EventObject.COMPLETE, this.attackCompleteDone, this),
                this._generateEffectPos.x = this.generateEffectPosNode.position.x,
                this._generateEffectPos.y = this.generateEffectPosNode.position.y,
                this.curShootIndex = 0,
                this.currentTimer = Date.now(),
                this.levelLabel.node.active = "Russian" != cc.Mgr.Config.language,
                this.levelLabel_ru.node.active = !1
            },
            setRageEffect: function() {
                this.rageEffectNode || (this.rageEffectNode = cc.instantiate(cc.Mgr.plantMgr.ragePrefab),
                this.rageEffectNode.parent = this.node,
                this.rageEffectNode.position = cc.v2(0, 20),
                this.rageEffectNode.active = cc.Mgr.game.rageTimer > 0,
                12 === this.index ? this.rageEffectNode.setScale(1) : this.rageEffectNode.setScale(.7))
            },
            setFlameEffect: function() {
                this.flameEffectNode || (this.flameEffectNode = cc.instantiate(cc.Mgr.plantMgr.flamePrefab),
                this.flameEffectNode.parent = this.node,
                this.flameEffectNode.position = cc.v2(0, 20),
                this.flameEffectNode.active = cc.Mgr.game.fireTimer > 0,
                12 === this.index ? this.flameEffectNode.setScale(1.3) : this.flameEffectNode.setScale(1))
            },
            setFreezeEffect: function() {
                this.freezeEffectNode || (this.freezeEffectNode = cc.instantiate(cc.Mgr.plantMgr.freezePrefab),
                this.freezeEffectNode.parent = this.node,
                this.freezeEffectNode.position = cc.v2(0, 20),
                this.freezeEffectNode.active = cc.Mgr.game.iceTimer > 0,
                this.freezeEffectNode.zIndex = -1,
                this.freezeEffectNode.setScale(.7))
            },
            setCritEffect: function() {
                this.critEffectNode || (this.critEffectNode = cc.instantiate(cc.Mgr.plantMgr.critPrefab),
                this.critEffectNode.parent = this.node,
                this.critEffectNode.position = cc.v2(0, 0),
                this.critEffectNode.active = cc.Mgr.game.critTimer > 0,
                this.critEffectNode.setScale(.7))
            },
            setShowDetailsInUI: function(e, t, i) {
                void 0 === i && (i = !0),
                this.levelLabel.node.active = this.levelLabel_ru.node.active = !1,
                this.node.getChildByName("shadow").active = !1,
                this.dragon.node.color = cc.Mgr.Utils.hexToColor(t),
                i && this.dragon.playAnimation(this._IdleAnimName, -1),
                this.dragon.node.setScale(e),
                this.node.scaleX = -1,
                this.node.scaleY = 1
            },
            changeAngryState: function(e) {
                this.enter_rage != e && (this.rageEffectNode.active = e,
                this.enter_rage = e,
                12 === this.index ? (this.dragonTimeScale = cc.Mgr.game.rageTimer > 0 ? 2.25 * this.currentSpeed : 1.5 * this.currentSpeed,
                this.dragon.timeScale = this.dragonTimeScale) : (this.dragonTimeScale = cc.Mgr.game.rageTimer > 0 ? 1.5 * this.currentSpeed : this.currentSpeed,
                this.dragon.timeScale = this.dragonTimeScale))
            },
            changeFireState: function(e) {
                this.enter_fire != e && (this.flameEffectNode.active = e,
                this.enter_fire = e,
                12 === this.index ? this.currentPower = cc.Mgr.game.fireTimer > 0 ? this.plantData.power * BigInt(6) / BigInt(5) * BigInt(9) / BigInt(6) : this.plantData.power * BigInt(6) / BigInt(5) : this.currentPower = cc.Mgr.game.fireTimer > 0 ? this.plantData.power * BigInt(9) / BigInt(6) : this.plantData.power)
            },
            changeIceState: function(e) {
                this.enter_ice = e,
                this.freezeEffectNode.active = e
            },
            changeCritState: function(e) {
                this.enter_crit = e,
                this.critEffectNode.active = e
            },
            setPosition: function(e) {
                this.node.position = e
            },
            setIndex: function(e) {
                this.index = e,
                this.node.zIndex = 50 + e,
                12 === this.index ? (this.currentPower = cc.Mgr.game.fireTimer > 0 ? this.plantData.power * BigInt(6) / BigInt(5) * BigInt(9) / BigInt(6) : this.plantData.power * BigInt(6) / BigInt(5),
                this.dragonTimeScale = cc.Mgr.game.rageTimer > 0 ? 2.25 * this.currentSpeed : 1.5 * this.currentSpeed,
                this.dragon.timeScale = this.dragonTimeScale) : (this.currentPower = cc.Mgr.game.fireTimer > 0 ? this.plantData.power * BigInt(9) / BigInt(6) : this.plantData.power,
                this.dragonTimeScale = cc.Mgr.game.rageTimer > 0 ? 1.5 * this.currentSpeed : this.currentSpeed,
                this.dragon.timeScale = this.dragonTimeScale),
                this.enter_ice = cc.Mgr.game.iceTimer > 0,
                this.enter_crit = cc.Mgr.game.critTimer > 0,
                12 === e ? (this.dragon.node.scaleX = -1 * this.plantData.zoom * 1.3,
                this.dragon.node.scaleY = 1.3 * this.plantData.zoom) : (this.dragon.node.scaleX = -1 * this.plantData.zoom,
                this.dragon.node.scaleY = this.plantData.zoom),
                this.flameEffectNode && (12 === this.index ? this.flameEffectNode.setScale(1.3) : this.flameEffectNode.setScale(1)),
                this.rageEffectNode && (12 === this.index ? this.rageEffectNode.setScale(1) : this.rageEffectNode.setScale(.7))
            },
            TouchStart: function() {
                cc.Mgr.plantMgr.plantMoveInfo.isMove || cc.Mgr.game.needGuide && cc.Mgr.game.curGuideStep == i.GuideType.guide3 && 7 != this.index || (cc.Mgr.plantMgr.plantMoveInfo.isMove = !0,
                cc.Mgr.plantMgr.plantMoveInfo.index = this.index,
                this.isCompounded || cc.Mgr.plantMgr.showPickLandBorder(!0, this.level, this.index),
                this.unscheduleAllCallbacks(),
                this.currentAttackNode = null,
                this.playIdleAnim(),
                this.lastZIndex = this.node.zIndex,
                this.node.zIndex = 999,
                this.isMoving = !0,
                this.TouchStartCb(this))
            },
            TouchMove: function(e) {
                if (cc.Mgr.plantMgr.plantMoveInfo.isMove && cc.Mgr.plantMgr.plantMoveInfo.index == this.index) {
                    var t = e.touch.getDelta();
                    this.node.x += t.x,
                    this.node.y += t.y,
                    cc.Mgr.plantMgr.attackRange.parent === this.node && (this.node.x > -190 && this.node.x < -120 && this.node.y > 120 && this.node.y < 190 && cc.Mgr.game.unlockSpecialGrid ? cc.Mgr.plantMgr.attackRange.setScale(3.5) : cc.Mgr.plantMgr.attackRange.setScale(1))
                }
            },
            TouchEnd: function() {
                cc.Mgr.plantMgr.plantMoveInfo.isMove = !1,
                cc.Mgr.plantMgr.plantMoveInfo.index = -1,
                cc.Mgr.plantMgr.showPickLandBorder(!1, this.level),
                this.isCompounded || this.updateAttackList(),
                this.node.zIndex = this.lastZIndex,
                (null == cc.Mgr.plantMgr.autoMergeData || cc.Mgr.plantMgr.autoMergeData.startIndex !== this.index && cc.Mgr.plantMgr.autoMergeData.targetIndex !== this.index) && this.TouchEndCb(this),
                this.isMoving = !1
            },
            hasAttackObj: function() {
                return null != this.currentAttackNode
            },
            playIdleAnim: function() {
                cc.Mgr.DragonMgr.playAnimation(i.DragonType.plant, this.dragon, this._IdleAnimName, !0, this.dragonTimeScale),
                this.state = i.PlantState.idle
            },
            startAttack: function() {
                if (null !== this.currentAttackNode && 0 != this.currentAttackNode.activeInHierarchy) {
                    this.node.scaleX = this.currentAttackNode.x > this.node.x ? -1 : 1,
                    this.levelLabel.node.scaleX = this.levelLabel_ru.node.scaleX = 1 == this.node.scaleX ? 1 : -1,
                    this.curShootIndex = this.curShootIndex >= this.plantData.shootPos.length ? 0 : this.curShootIndex;
                    var e = 1 === this.plantData.shootPos.length ? this._AttackAnimName : this._AttackAnimName + (this.curShootIndex + 1);
                    cc.Mgr.DragonMgr.playAnimation(i.DragonType.plant, this.dragon, e, !1, this.dragonTimeScale),
                    this.state = i.PlantState.attacking
                }
            },
            onFrameEvent: function(e) {
                "A" == e.name && this.attackFrameDone()
            },
            compounded: function() {
                this.isCompounded = !0,
                this.unscheduleAllCallbacks(),
                this.currentAttackNode = null,
                this.playIdleAnim()
            },
            attackCompleteDone: function() {
                this.updateAttackList(),
                null != this.currentAttackNode && this.startAttack()
            },
            attackFrameDone: function() {
                if (null != this.currentAttackNode && 0 != this.currentAttackNode.activeInHierarchy) {
                    var e = cc.Mgr.BulletPool.getObFromPool();
                    e.parent = this.node.parent,
                    e.zIndex = 200;
                    var t = e.getComponent("bullet")
                      , i = {};
                    i.spd = cc.Mgr.game.bulletSpeed,
                    i.power = this.currentPower,
                    i.spName = this.plantData.head,
                    i.skill = this.plantData.skill,
                    i.level = this.plantData.level,
                    i.enter_ice = this.enter_ice,
                    i.enter_crit = this.enter_crit,
                    i.isNeedMask = this.plantData.isNeedMask,
                    i.isNeedTrail = this.plantData.isNeedTrail,
                    i.bulletHeight = this.plantData.bulletHeight,
                    i.bulletNearLeftDis = this.plantData.bulletNearLeftDis,
                    i.bulletType = this.plantData.bulletType;
                    var a = this.plantData.steakColor.replace("0x", "#")
                      , n = cc.Color.BLACK;
                    n = n.fromHEX(a),
                    i.color = n,
                    this.curShootIndex >= this.plantData.shootPos.length && (this.curShootIndex = 0),
                    i.pos = cc.v2(this.node.x + this.plantData.shootPos[this.curShootIndex].x * this.node.scaleX * -1, this.node.y + this.plantData.shootPos[this.curShootIndex].y),
                    t.initData(i, this.currentAttackNode, this),
                    this.curShootIndex++
                }
            },
            plantDestroy: function() {
                this.isCompounded = !1,
                cc.Mgr.DragonMgr.deleteDragon(i.DragonType.plant, this.dragon),
                this.node.destroy()
            },
            updateAttackList: function() {
                if (cc.Mgr.ZombieMgr.zombieList) {
                    cc.Mgr.ZombieMgr.zombieList.indexOf(this.currentAttackNode) < 0 && (this.currentAttackNode = null);
                    var e = 12 === this.index ? this.specialRangeY : this.nomalRangeY
                      , t = 12 === this.index ? this.specialRangeX : this.nomalRangeX;
                    if (null != this.currentAttackNode) {
                        var a = Math.abs(this.node.position.x - this.currentAttackNode.position.x)
                          , n = Math.abs(this.node.position.y - this.currentAttackNode.position.y);
                        (a > t || n > e) && (this.currentAttackNode = null)
                    } else
                        for (var c = 0; c < cc.Mgr.ZombieMgr.zombieList.length; c++) {
                            var s = cc.Mgr.ZombieMgr.zombieList[c]
                              , o = Math.abs(this.node.position.x - s.position.x)
                              , r = Math.abs(this.node.position.y - s.position.y);
                            if (o <= t && r <= e) {
                                this.currentAttackNode = s,
                                0 == this.index && console.log("disX: " + o + " - disY: " + r);
                                break
                            }
                        }
                    null != this.currentAttackNode && this.state != i.PlantState.attacking ? this.startAttack() : null == this.currentAttackNode && this.state != i.PlantState.idle && this.playIdleAnim()
                }
            },
            update: function() {
                null != this.currentAttackNode || this.isMoving || Date.now() - this.currentTimer >= 500 && (this.updateAttackList(),
                this.currentTimer = Date.now())
            }
        }));
        t.exports = a,
        cc._RF.pop()
    }
    , {
        DataType: "DataType",
        MyEnum: "MyEnum"
    }],
    promptUI: [function(e, t) {
        "use strict";
        cc._RF.push(t, "397e3f5uUFJO5P8TyQdbRDB", "promptUI");
        var i = cc.Class({
            extends: cc.Component,
            properties: {
                desLbl: cc.Label,
                coinNode: cc.Node,
                gemNode: cc.Node
            },
            showDes: function(e, t) {
                this.desLbl.string = e,
                this.coinNode.active = !1,
                this.gemNode.active = !1,
                "coin" == t ? this.coinNode.active = !0 : "gem" == t && (this.gemNode.active = !0)
            }
        });
        t.exports = i,
        cc._RF.pop()
    }
    , {}],
    rewardBox: [function(e, t) {
        "use strict";
        cc._RF.push(t, "14f9bkPpxpNjLkfnUy/Jycl", "rewardBox");
        var i = cc.Class({
            extends: cc.Component,
            properties: {
                rType: "coin",
                num: 1,
                id: 1,
                weight: 1
            },
            setData: function(e, t, i, a) {
                void 0 === t && (t = 1),
                void 0 === i && (i = 1),
                void 0 === a && (a = 1),
                this.rType = e,
                this.num = t,
                this.id = i,
                this.weight = a
            }
        });
        t.exports = i,
        cc._RF.pop()
    }
    , {}],
    setPanel: [function(e, t) {
        "use strict";
        cc._RF.push(t, "0fb57Mqd69M/7sd52BCIfkk", "setPanel"),
        cc.Class({
            extends: cc.Component,
            properties: {
                bgmBtn: cc.Node,
                sfxBtn: cc.Node,
                notificationBtn: cc.Node,
                notificationNode: cc.Node,
                content: cc.Node,
                blurBg: cc.Node,
                versionLabel: cc.Label,
                debugLabel: cc.Label,
                debugNode: cc.Node,
                idLabel: cc.Label,
                id: cc.Label,
                recoveryBtnLabel: cc.Label,
                spriteCoin: cc.Sprite,
                nomarlM: cc.Material,
                grayM: cc.Material,
                recoveryBtn: cc.Node,
                bgmLabel: cc.Label,
                sfxLabel: cc.Label,
                languageLabel: cc.Label,
                bgmOffLabel: cc.Label,
                bgmOnLabel: cc.Label,
                sfxOffLabel: cc.Label,
                sfxOnLabel: cc.Label,
                versionStrLabel: cc.Label,
                copyLabel: cc.Label,
                languageSelector: cc.Node,
                title: cc.Node,
                title_zh: cc.Node,
                title_ja: cc.Node,
                title_ru: cc.Node,
                debugVersion: cc.Label
            },
            start: function() {
                this.bgmON = 1 === cc.Mgr.AudioMgr.bgmVolume,
                this.bgmBtn.x = this.bgmON ? -44 : 44,
                this.sfxON = 1 === cc.Mgr.AudioMgr.sfxVolume,
                this.sfxBtn.x = this.sfxON ? -44 : 44,
                this.notificationON = !0,
                this.notificationBtn.x = this.notificationON ? -44 : 44,
                this.recoveryBtnLabel.string = cc.Mgr.Utils.getTranslation("btn-recovery"),
                this.bgmLabel.string = cc.Mgr.Utils.getTranslation("bgm"),
                this.sfxLabel.string = cc.Mgr.Utils.getTranslation("sfx"),
                this.languageLabel.string = cc.Mgr.Utils.getTranslation("language"),
                this.bgmOffLabel.string = cc.Mgr.Utils.getTranslation("set-off"),
                this.bgmOnLabel.string = cc.Mgr.Utils.getTranslation("set-on"),
                this.sfxOffLabel.string = cc.Mgr.Utils.getTranslation("set-off"),
                this.sfxOnLabel.string = cc.Mgr.Utils.getTranslation("set-on"),
                this.versionStrLabel.string = cc.Mgr.Utils.getTranslation("set-version"),
                this.copyLabel.string = cc.Mgr.Utils.getTranslation("set-copy"),
                this.node.on(cc.Node.EventType.TOUCH_END, function() {
                    this.languageSelector.getComponent("LanguageSelector").hideContainer()
                }, this),
                this.title.active = !1,
                this.title_zh.active = !1,
                this.title_ja.active = !1,
                this.title_ru.active = !1,
                "Japanese" === cc.Mgr.Config.language ? this.title_ja.active = !0 : "Simplified Chinese" === cc.Mgr.Config.language || "Traditional Chinese" === cc.Mgr.Config.language ? this.title_zh.active = !0 : "Russian" === cc.Mgr.Config.language ? this.title_ru.active = !0 : this.title.active = !0
            },
            showUI: function() {
                this.blurBg.opacity = 0,
                this.content.opacity = 0,
                this.content.setScale(.5),
                cc.tween(this.blurBg).to(.05, {
                    opacity: 255
                }).call().start(),
                cc.tween(this.content).to(.15, {
                    opacity: 255,
                    scale: 1
                }).start(),
                cc.Mgr.admob.showBanner("setting"),
                this.versionLabel.string = cc.Mgr.Config.version,
                this.notificationNode.active = !1,
                this.debugLabel.string = cc.Mgr.game.isFacebook ? "Ads\nPayment" : "NoAds\nFree",
                this.debugNode.active = cc.Mgr.Config.isDebug,
                this.debugVersion.node.active = cc.Mgr.Config.isDebug,
                this.debugVersion.string = cc.Mgr.Config.debug_version,
                this.idLabel.string = cc.Mgr.game.UUID,
                cc.Mgr.iCloud.gameData && (this.id.string = cc.Mgr.iCloud.gameData.UUID),
                null == cc.Mgr.iCloud.gameData || cc.Mgr.iCloud.gameData.UUID === cc.Mgr.game.UUID ? this.spriteCoin.setMaterial(0, this.grayM) : this.spriteCoin.setMaterial(0, this.nomarlM),
                cc.Mgr.Config.isDebug ? this.recoveryBtn.y = -22 : this.recoveryBtn.y = -300,
                cc.sys.os === cc.sys.OS_IOS && !0 !== cc.Mgr.game.isFacebook || (this.recoveryBtn.active = !1)
            },
            copyID: function() {
                cc.Mgr.Utils.copyID()
            },
            closeUI: function() {
                cc.Mgr.AudioMgr.playSFX("click"),
                cc.Mgr.admob.hideBanner("setting");
                var e = this;
                cc.tween(this.blurBg).to(.15, {
                    opacity: 0
                }).start(),
                cc.tween(this.content).to(.15, {
                    opacity: 0,
                    scale: .5
                }).call(function() {
                    e.node.active = !1
                }).start(),
                cc.Mgr.UIMgr.reduceShowUICount("setting")
            },
            toggleBGM: function() {
                this.bgmON = !this.bgmON,
                this.bgmBtn.x = this.bgmON ? -44 : 44,
                cc.Mgr.AudioMgr.setBGMVolume(this.bgmON ? 1 : 0)
            },
            toggleSFX: function() {
                this.sfxON = !this.sfxON,
                this.sfxBtn.x = this.sfxON ? -44 : 44,
                cc.Mgr.AudioMgr.setSFXVolume(this.sfxON ? 1 : 0)
            },
            toggleNotification: function() {
                this.notificationON = !this.notificationON,
                this.notificationBtn.x = this.notificationON ? -44 : 44
            },
            addMoney: function() {
                cc.Mgr.game.money += BigInt(1e12),
                cc.Mgr.UIMgr.InGameUI.RefreshAssetData(!1, "money")
            },
            addGems: function() {
                cc.Mgr.game.gems += 1e6,
                cc.Mgr.UIMgr.InGameUI.RefreshAssetData(!1, "gem")
            },
            onClickDebug: function() {
                cc.Mgr.game.isFacebook = !cc.Mgr.game.isFacebook,
                this.debugLabel.string = cc.Mgr.game.isFacebook ? "Ads\nPayment" : "NoAds\nFree",
                cc.Mgr.admob.hideBanner("all")
            },
            onClickRecovery: function() {
                null != cc.Mgr.iCloud.gameData && cc.Mgr.iCloud.gameData.UUID !== cc.Mgr.game.UUID && cc.sys.os === cc.sys.OS_IOS && !0 !== cc.Mgr.game.isFacebook ? (cc.Mgr.GameCenterCtrl.unscheduleSaveData(),
                cc.Mgr.UserDataMgr.SaveUserData(cc.Mgr.iCloud.gameData),
                cc.Mgr.AudioMgr.stopAll(),
                cc.Mgr.admob.hideBanner("all"),
                cc.game.restart()) : cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("recovery-tip"), "", this.node)
            },
            reset: function() {
                cc.sys.localStorage.clear(),
                cc.Mgr.AudioMgr.stopAll(),
                cc.Mgr.admob.hideBanner("all"),
                cc.game.restart()
            }
        }),
        cc._RF.pop()
    }
    , {}],
    shopItem: [function(e, t) {
        "use strict";
        cc._RF.push(t, "f9ebbffBnRKFrSpScNAXQRK", "shopItem");
        var i = e("MySprite")
          , a = e("DataType")
          , n = e("Event")
          , c = e("AtlasType")
          , s = e("MyEnum")
          , o = cc.Class({
            extends: cc.Component,
            properties: {
                lvLbl: cc.Label,
                desLbl: cc.Label,
                btnDes: cc.Node,
                iconBgSp: cc.Sprite,
                iconSp: i,
                btn_coin: cc.Node,
                btn_gem: cc.Node,
                btn_ad: cc.Node,
                powerLbl: cc.Label,
                cdLbl: cc.Label,
                unlockNode: cc.Node,
                unlockLbl: cc.Label,
                btnType: "U",
                moneyLabel: cc.Label,
                gemLabel: cc.Label,
                freeLabel: cc.Label,
                spriteCoin2: cc.Sprite,
                spriteCoin: cc.Sprite,
                nomarlM: cc.Material,
                grayM: cc.Material,
                iconBgSpList: [cc.SpriteFrame]
            },
            start: function() {
                this.freeLabel.string = cc.Mgr.Utils.getTranslation("btn-get"),
                this.limitClick = this.node.getComponent("LimitClick"),
                this.allowShow = !0
            },
            setParent: function(e) {
                this.Parent = e
            },
            countTime: function() {
                cc.Mgr.Utils.GetSysTime() - cc.Mgr.game.lastAdsGetPlantTime >= 60 && (this.setContent({
                    lv: this.plantData.level
                }),
                this.unschedule(this.countTime))
            },
            setContent: function(e) {
                var t = e.lv
                  , i = cc.Mgr.game.plantMaxLv;
                if (this.lvLbl.string = t === cc.Mgr.Config.allPlantCount + 1 ? "??" : t,
                t !== cc.Mgr.Config.allPlantCount + 1) {
                    var n = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(a.PlantData, t.toString());
                    this.plantData = null,
                    this.plantData = n,
                    this.powerLbl.string = cc.Mgr.Utils.getNumStr2(n.power),
                    this.cdLbl.string = n.cd
                } else
                    this.plantData = {
                        level: cc.Mgr.Config.allPlantCount + 1
                    };
                if (t !== cc.Mgr.Config.allPlantCount + 1 ? this.iconSp.setSprite(c.PlantHead, n.head) : this.iconSp.setSprite(c.PlantHead, "egg_1"),
                this.iconBgSp.spriteFrame = this.iconBgSpList[t % 3],
                t > i ? (this.iconSp.node.color = cc.Mgr.Utils.hexToColor("#000000"),
                this.powerLbl.string = "?",
                this.cdLbl.string = "?") : this.iconSp.node.color = cc.Mgr.Utils.hexToColor("#ffffff"),
                t !== cc.Mgr.Config.allPlantCount + 1) {
                    var o = n.skill.split("|")
                      , r = o[1] + "%"
                      , l = parseInt(o[0])
                      , g = cc.Mgr.Utils.getTranslation("skill_des") + ": ";
                    switch (l) {
                    case s.BulletSkillType.Slow:
                        g += cc.Mgr.Utils.getTranslation("skillDescs-slowdown", [r]);
                        break;
                    case s.BulletSkillType.DouKill:
                        g += cc.Mgr.Utils.getTranslation("skillDescs-crit", [r]);
                        break;
                    case s.BulletSkillType.Vertigo:
                        g += cc.Mgr.Utils.getTranslation("skillDescs-freeze", [r])
                    }
                    this.desLbl.string = g
                } else
                    this.desLbl.string = cc.Mgr.Utils.getTranslation("shopItem-coming-soon");
                var h = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(a.ShopData, i)
                  , d = "";
                switch (i - t) {
                case 0:
                    d = h.MAX;
                    break;
                case 1:
                    d = h.MAX_1;
                    break;
                case 2:
                    d = h.MAX_2;
                    break;
                case 3:
                    d = h.MAX_3;
                    break;
                case 4:
                    d = h.MAX_4;
                    break;
                case 5:
                    d = h.MAX_5;
                    break;
                case 6:
                    d = h.MAX_6;
                    break;
                case 7:
                    d = h.MAX_7;
                    break;
                case 8:
                default:
                    d = h.MAX_8
                }
                t > i && (d = s.ShopItemType.Lock),
                this.btnType = d,
                this.setButton(d, n, t),
                this.updateAdsBtnState()
            },
            caculateMoneyPrice: function(e, t) {
                var i = cc.Mgr.game.plantBuyRecord[e];
                i = i || 0,
                this.price = t.price;
                var a = t.price * BigInt(Math.floor(Math.pow(1.2, i)));
                return e >= 1 && e <= 20 && (a = t.price * BigInt(Math.floor(Math.pow(1.1, i)))),
                this.price = a,
                a
            },
            setButton: function(e, t, i) {
                switch (this.btn_coin.active = !1,
                this.btn_gem.active = !1,
                this.btn_ad.active = !1,
                this.unlockNode.active = !1,
                this.btnDes.active = !0,
                this.unlockLbl.node.active = !1,
                e) {
                case s.ShopItemType.Lock:
                    this.unlockNode.active = !0,
                    this.unlockLbl.node.active = !0,
                    i + 2 < cc.Mgr.Config.allPlantCount ? this.unlockLbl.string = (i + 2).toString() : i !== cc.Mgr.Config.allPlantCount ? this.unlockLbl.string = cc.Mgr.Config.allPlantCount : this.unlockLbl.string = "??",
                    this.btnDes.active = !1;
                    break;
                case s.ShopItemType.Gem:
                    this.btn_gem.active = !0,
                    this.gemLabel.string = t.gem;
                    break;
                case s.ShopItemType.Ads:
                    if (cc.Mgr.Utils.GetSysTime() - cc.Mgr.game.lastAdsGetPlantTime < 60 && 0 == cc.Mgr.UIMgr.paymentUINode.getComponent("PaymentUI").checkAvailabelAds) {
                        this.btn_coin.active = !0,
                        this.btnType = s.ShopItemType.Money;
                        var a = this.caculateMoneyPrice(i, t);
                        cc.Mgr.game.money < a ? this.spriteCoin.setMaterial(0, this.grayM) : this.spriteCoin.setMaterial(0, this.nomarlM),
                        this.moneyLabel.string = cc.Mgr.Utils.getNumStr2(a)
                    } else
                        this.btnType = s.ShopItemType.Ads,
                        this.btn_ad.active = !0,
                        cc.Mgr.UIMgr.paymentUINode.getComponent("PaymentUI").checkAvailabelAds ? this.spriteCoin2.setMaterial(0, this.nomarlM) : this.spriteCoin2.setMaterial(0, this.grayM);
                    break;
                case s.ShopItemType.Money:
                    this.btnType = s.ShopItemType.Money,
                    a = this.caculateMoneyPrice(i, t),
                    cc.Mgr.game.money < a ? this.spriteCoin.setMaterial(0, this.grayM) : this.spriteCoin.setMaterial(0, this.nomarlM),
                    this.moneyLabel.string = cc.Mgr.Utils.getNumStr2(a),
                    this.btn_coin.active = !0
                }
            },
            btnClick: function() {
                switch (cc.Mgr.AudioMgr.playSFX("click"),
                this.btnType) {
                case s.ShopItemType.Lock:
                    cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("be-lock"), "", cc.Mgr.UIMgr.paymentUINode);
                    break;
                case s.ShopItemType.Gem:
                    this.buyPlantByGem();
                    break;
                case s.ShopItemType.Ads:
                    this.getPlantByAds();
                    break;
                case s.ShopItemType.Money:
                    this.buyPlantByMoney()
                }
                cc.Mgr.UIMgr.paymentUINode.getComponent("PaymentUI").updateItems()
            },
            buyPlantByGem: function() {
                var e = this;
                if (this.checkCanGrownPlantOrPot())
                    if (cc.Mgr.game.gems >= this.plantData.gem) {
                        cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("buy-success"), "", cc.Mgr.UIMgr.paymentUINode),
                        cc.Mgr.flowerPotMgr.addShopFlowerFot(this.plantData.level, 1),
                        cc.Mgr.game.gems -= this.plantData.gem,
                        cc.Mgr.UIMgr.InGameUI.RefreshAssetData(!1, "gem"),
                        this.setContent({
                            lv: this.plantData.level
                        }),
                        cc.director.GlobalEvent.emit(n.BuyPlantInShop, {});
                        var t = {};
                        t.elapsed = cc.Mgr.Utils.getDate9(!0),
                        t.costGems = this.plantData.gem,
                        t.plantID = this.plantData.level,
                        cc.Mgr.analytics.logEvent("buy_plant_by_gems", JSON.stringify(t)),
                        cc.Mgr.TEA.collectEvent("buy_plant_by_gems", {
                            elapsed: cc.Mgr.Utils.getDate9(!0),
                            cost_gems: this.plantData.gem,
                            plant_id: this.plantData.level
                        })
                    } else
                        cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("NoGems"), "gem", cc.Mgr.UIMgr.paymentUINode),
                        !0 === this.allowShow && (this.allowShow = !1,
                        setTimeout(function() {
                            cc.Mgr.UIMgr.openPaymentUI(!0),
                            e.allowShow = !0
                        }, 300))
            },
            buyPlantByMoney: function() {
                if (cc.Mgr.game.money < this.price ? this.spriteCoin.setMaterial(0, this.grayM) : this.spriteCoin.setMaterial(0, this.nomarlM),
                this.checkCanGrownPlantOrPot())
                    if (cc.Mgr.game.money >= this.price)
                        cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("buy-success"), "", cc.Mgr.UIMgr.paymentUINode),
                        cc.Mgr.game.plantBuyRecord[this.plantData.level]++,
                        cc.Mgr.flowerPotMgr.addShopFlowerFot(this.plantData.level, 1),
                        cc.Mgr.game.money -= this.price,
                        cc.Mgr.UIMgr.InGameUI.RefreshAssetData(!1, "money"),
                        this.setContent({
                            lv: this.plantData.level
                        }),
                        cc.director.GlobalEvent.emit(n.BuyPlantInShop, {});
                    else if (cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("NoCoins"), "coin", cc.Mgr.UIMgr.paymentUINode),
                    cc.Mgr.game.plantMaxLv >= cc.Mgr.game.exchangeCoinConfig.openLevel && cc.Mgr.game.needShowExchangeCoinCount++,
                    cc.Mgr.game.needShowExchangeCoinCount >= 3 && cc.Mgr.game.plantMaxLv >= cc.Mgr.game.exchangeCoinConfig.openLevel) {
                        var e = cc.Mgr.UIMgr.gemNum();
                        if (cc.Mgr.game.currentExchangeCount < cc.Mgr.game.exchangeCoinConfig.maxExchangeNum && cc.Mgr.game.gems >= e)
                            cc.Mgr.UIMgr.openExchangeCoinUI(!0);
                        else if (cc.Mgr.game.coinBundleFlag) {
                            var t = cc.Mgr.UIMgr.getCoinNumber() * BigInt(30);
                            t = t < BigInt(1e6) ? BigInt(1e6) : t,
                            t *= BigInt(2),
                            cc.Mgr.UIMgr.openCoinBundle(t, !0)
                        }
                        cc.Mgr.game.needShowExchangeCoinCount = 0
                    }
            },
            onLookPlant: function() {
                0 != this.limitClick.clickTime() && (this.plantData.level > cc.Mgr.game.plantMaxLv ? cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("be-lock"), "", cc.Mgr.UIMgr.paymentUINode) : cc.Mgr.UIMgr.openPlantGetUI("look", this.plantData.level))
            },
            getPlantByAds: function() {
                if (0 != this.limitClick.clickTime())
                    if (!1 !== cc.Mgr.UIMgr.paymentUINode.getComponent("PaymentUI").checkAvailabelAds) {
                        var e = this;
                        cc.Mgr.admob.showRewardedVideoAd(function(t) {
                            t && (cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("newItem-title"), "", cc.Mgr.UIMgr.paymentUINode),
                            cc.Mgr.game.lastAdsGetPlantTime = cc.Mgr.Utils.GetSysTime(),
                            e.schedule(e.countTime, 1),
                            cc.Mgr.UIMgr.closeShop(),
                            e.setContent({
                                lv: e.plantData.level
                            }),
                            cc.Mgr.UIMgr.openPlantGetUI("get", e.plantData.level))
                        }, cc.Mgr.UIMgr.paymentUINode, "shop", this)
                    } else
                        cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("ad-tip-3"), "", cc.Mgr.UIMgr.paymentUINode)
            },
            updateAdsBtnState: function() {
                cc.Mgr.UIMgr.paymentUINode.getComponent("PaymentUI").checkAvailabelAds = cc.Mgr.admob.checkAvailableRewardedAd(),
                cc.Mgr.UIMgr.paymentUINode.getComponent("PaymentUI").checkAvailabelAds && 0 == this.unlockNode.active ? (this.spriteCoin2.setMaterial(0, this.nomarlM),
                this.btn_ad.active = !0) : (this.spriteCoin2.setMaterial(0, this.grayM),
                this.btn_ad.active = !1)
            },
            checkCanGrownPlantOrPot: function() {
                return !!cc.Mgr.plantMgr.checkHasAnySpaceGird() || (cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("NoSpaceForPlant"), "", cc.Mgr.UIMgr.paymentUINode),
                !1)
            }
        });
        t.exports = o,
        cc._RF.pop()
    }
    , {
        AtlasType: "AtlasType",
        DataType: "DataType",
        Event: "Event",
        MyEnum: "MyEnum",
        MySprite: "MySprite"
    }],
    signItem: [function(e, t) {
        "use strict";
        cc._RF.push(t, "5966e+5SSBDxauapqaV3Qvu", "signItem");
        var i = cc.Class({
            extends: cc.Component,
            properties: {
                rewardLbl: cc.Label,
                maskNode: cc.Node,
                checkedLabel: cc.Label,
                selectedNode: cc.Node
            },
            setData: function(e) {
                this.checkedLabel.string = cc.Mgr.Utils.getTranslation("btn-get"),
                this.rewardLbl.string = "x" + cc.Mgr.Config.signDataListSub[e - 1].rewardNum,
                this.maskNode.active = !1,
                this.selectedNode.active = !1,
                cc.Mgr.game.hasSignDayNum >= e ? this.maskNode.active = !0 : cc.Mgr.game.hasSignDayNum + 1 === e && cc.Mgr.Utils.getDays(cc.Mgr.Utils.GetSysTime()) - cc.Mgr.Utils.getDays(cc.Mgr.game.lastSignDate) >= 1 && (this.selectedNode.active = !0)
            }
        });
        t.exports = i,
        cc._RF.pop()
    }
    , {}],
    signUI: [function(e, t) {
        "use strict";
        cc._RF.push(t, "af105oVOG9N+67jZ7+Mo6Qd", "signUI");
        var i = e("signItem")
          , a = cc.Class({
            extends: cc.Component,
            properties: {
                dayList: [i],
                adsDoubleSignBtn: cc.Button,
                hasSignTip: cc.Node,
                toggle: cc.Toggle,
                dayLabelList: [cc.Label],
                checkedLabel: cc.Label,
                tip: cc.Label,
                content: cc.Node,
                blurBg: cc.Node,
                btnLabel: cc.Label,
                title: cc.Node,
                title_zh: cc.Node,
                title_ja: cc.Node,
                title_ru: cc.Node
            },
            onLoad: function() {
                this.limitClick = this.node.getComponent("LimitClick")
            },
            start: function() {
                this.title.active = !1,
                this.title_zh.active = !1,
                this.title_ja.active = !1,
                this.title_ru.active = !1,
                "Japanese" === cc.Mgr.Config.language ? this.title_ja.active = !0 : "Simplified Chinese" === cc.Mgr.Config.language || "Traditional Chinese" === cc.Mgr.Config.language ? this.title_zh.active = !0 : "Russian" === cc.Mgr.Config.language ? this.title_ru.active = !0 : this.title.active = !0
            },
            showUI: function() {
                cc.Mgr.admob.preloadRewarded(this);
                for (var e = 0; e < 7; e++)
                    this.dayLabelList[e].string = cc.Mgr.Utils.getTranslation("signIn-day", [e + 1]);
                this.checkedLabel.string = cc.Mgr.Utils.getTranslation("signIn-checked"),
                this.tip.string = cc.Mgr.Utils.getTranslation("signIn-tip"),
                this.btnLabel.string = cc.Mgr.Utils.getTranslation("btn-claim"),
                this.node.width = cc.Mgr.Config.winSize.width,
                this.node.height = cc.Mgr.Config.winSize.height,
                this.refreshUI(),
                this.blurBg.opacity = 0,
                this.content.opacity = 0,
                this.content.setScale(.5),
                cc.tween(this.blurBg).to(.05, {
                    opacity: 255
                }).call().start(),
                cc.tween(this.content).to(.15, {
                    opacity: 255,
                    scale: 1
                }).start(),
                cc.Mgr.admob.showBanner("dailyBonus")
            },
            adsDoubleSign: function() {
                if (0 != this.limitClick.clickTime()) {
                    cc.Mgr.AudioMgr.playSFX("click");
                    var e = cc.Mgr.Config.signDataList[cc.Mgr.game.hasSignDayNum].rewardNum;
                    this.getRewards(e),
                    cc.Mgr.game.hasSignDayNum += 1,
                    cc.Mgr.game.hasSignDayNum >= 7 && (cc.Mgr.game.hasSignDayNum = 0),
                    cc.Mgr.game.lastSignDate = cc.Mgr.Utils.GetSysTime(),
                    this.refreshUI()
                }
            },
            refreshUI: function() {
                this.hasSignTip.active = !1,
                this.adsDoubleSignBtn.node.active = !0,
                cc.Mgr.Utils.getDays(cc.Mgr.Utils.GetSysTime()) - cc.Mgr.Utils.getDays(cc.Mgr.game.lastSignDate) < 1 ? (this.adsDoubleSignBtn.node.active = !1,
                this.hasSignTip.active = !0) : cc.Mgr.Utils.getDays(cc.Mgr.Utils.GetSysTime()) - cc.Mgr.Utils.getDays(cc.Mgr.game.lastSignDate) > 2 && (cc.Mgr.game.hasSignDayNum = 0);
                for (var e = 0; e < this.dayList.length; e++)
                    this.dayList[e].setData(e + 1)
            },
            getRewards: function(e) {
                cc.Mgr.UIMgr.openAssetGetUI("gem", e, "sign")
            },
            closeUI: function() {
                cc.Mgr.AudioMgr.playSFX("click"),
                cc.Mgr.admob.hideBanner("dailyBonus");
                var e = this;
                cc.tween(this.blurBg).to(.15, {
                    opacity: 0
                }).start(),
                cc.tween(this.content).to(.15, {
                    opacity: 0,
                    scale: .5
                }).call(function() {
                    cc.Mgr.UIMgr.InGameUI.checkSignState(),
                    e.node.active = !1
                }).start(),
                cc.Mgr.UIMgr.reduceShowUICount("sign")
            }
        });
        t.exports = a,
        cc._RF.pop()
    }
    , {
        signItem: "signItem"
    }],
    smallResult: [function(e, t) {
        "use strict";
        cc._RF.push(t, "9f145ZGhENGPJ7xjNZ2pNC0", "smallResult");
        var i = e("MyEnum")
          , a = cc.Class({
            extends: cc.Component,
            properties: {
                successNode: cc.Node,
                failedNode: cc.Node,
                failedDb: dragonBones.ArmatureDisplay,
                winDb: dragonBones.ArmatureDisplay
            },
            show: function(e) {
                void 0 === e && (e = !1),
                this.successNode.active = e,
                this.failedNode.active = !e,
                e ? (cc.Mgr.AudioMgr.playSFX(i.AudioType.success2),
                this.winDb.playAnimation("success", 1)) : (cc.Mgr.AudioMgr.playSFX(i.AudioType.fail),
                this.failedDb.playAnimation("defeat", 1)),
                this.scheduleOnce(function() {
                    this.node.active = !1
                }, 2.14)
            }
        });
        t.exports = a,
        cc._RF.pop()
    }
    , {
        MyEnum: "MyEnum"
    }],
    tipMoveAttack: [function(e, t) {
        "use strict";
        cc._RF.push(t, "4736fJykpdD56/1Jx6L5QxS", "tipMoveAttack");
        var i = cc.Class({
            extends: cc.Component,
            properties: {
                desLabel: cc.Label
            },
            closeNode: function() {
                cc.Mgr.plantMgr.hideTipAttackNode()
            },
            showtipMoveAttack: function() {
                this.desLabel.string = cc.Mgr.Utils.getTranslation("guide-move-plant"),
                this.unschedule(this.closeNode),
                this.scheduleOnce(this.closeNode, 5)
            },
            closeTip: function() {
                this.unschedule(this.closeNode),
                this.node.active = !1
            }
        });
        t.exports = i,
        cc._RF.pop()
    }
    , {}],
    turnArrow: [function(e, t) {
        "use strict";
        cc._RF.push(t, "5052c+h+V9GfaCQaXgrRqSt", "turnArrow");
        var i = ["turn_table_arrow_in", "turn_table_arrow_dur", "turn_table_arrow_out"]
          , a = cc.Class({
            extends: cc.Component,
            properties: {
                anima: cc.Animation
            },
            playIn: function() {
                this.anima.play(i[0])
            },
            InEnd: function() {
                this.anima.play(i[1]),
                this.scheduleOnce(function() {
                    this.anima.play(i[2])
                }, 2.67)
            }
        });
        t.exports = a,
        cc._RF.pop()
    }
    , {}],
    turnTableUI: [function(e, t) {
        "use strict";
        cc._RF.push(t, "f89ed89jt5HRYA9GcZTDisQ", "turnTableUI");
        var i = e("MySprite")
          , a = e("DataType")
          , n = e("TurnTableGetType")
          , c = e("AtlasType")
          , s = e("rewardBox")
          , o = cc.Class({
            extends: cc.Component,
            properties: {
                disc: cc.Node,
                spList: [cc.Sprite],
                mySpList: [i],
                freeBtn: cc.Button,
                gemBtn: cc.Button,
                closeBtn: cc.Node,
                lblList: [cc.Label],
                lblList_ru: [cc.Label],
                lblListNode: cc.Node,
                lblListNode_ru: cc.Node,
                gemLbl: cc.Label,
                freetimeLbl: cc.Label,
                timeNode: cc.Node,
                freetimeTipLbl: cc.Label,
                timeDesLbl: cc.Label,
                rotating: !1,
                lastPlantMaxLv: 0,
                gemLabel: cc.Label,
                adsIconNode: cc.Node,
                freeLabelNode: cc.Label,
                spriteFrameList: [cc.SpriteFrame],
                startLabel: cc.Label,
                content: cc.Node,
                blurBg: cc.Node,
                dbListNode: cc.Node,
                titleLabel: cc.Label,
                okLabel: cc.Label,
                okBtn: cc.Node,
                spriteCoin: cc.Sprite,
                nomarlM: cc.Material,
                grayM: cc.Material
            },
            onLoad: function() {
                this.buffMap = ["rage", "auto", "flame", "freeze", "crit"]
            },
            start: function() {
                cc.Mgr.UIMgr.turnTableUI = this,
                this.freetimeTipLbl.string = cc.Mgr.Utils.getTranslation("roulette-timeTip"),
                this.startLabel.string = cc.Mgr.Utils.getTranslation("roulette-start"),
                this.freeLabelNode.string = cc.Mgr.Utils.getTranslation("btn-free"),
                this.titleLabel.string = cc.Mgr.Utils.getTranslation("roulette-title"),
                this.okLabel.string = cc.Mgr.Utils.getTranslation("btn-ok"),
                this.limitClick = this.node.getComponent("LimitClick"),
                this.allowShow = !0
            },
            showBtns: function() {
                this.refreshBtns(),
                this.closeBtn.active = !0
            },
            hideBtns: function() {
                this.freeBtn.node.active = !1,
                this.gemBtn.node.active = !1,
                this.closeBtn.active = !1,
                this.okBtn.active = !1
            },
            showUI: function() {
                cc.Mgr.admob.preloadRewarded(this),
                cc.Mgr.game.level <= 10 ? this.costGem = 5 : cc.Mgr.game.level <= 20 ? this.costGem = 5 : cc.Mgr.game.level <= 30 ? this.costGem = 10 : cc.Mgr.game.level <= 40 ? this.costGem = 15 : cc.Mgr.game.level <= 50 ? this.costGem = 30 : this.costGem = 60,
                this.showBtns(),
                this.disc.angle = 0,
                this.startTimeCount(),
                this.node.width = cc.Mgr.Config.winSize.width,
                this.node.height = cc.Mgr.Config.winSize.height,
                cc.Mgr.game.plantMaxLv > this.lastPlantMaxLv && this.refreshPanel(),
                this.gemLabel.string = this.costGem,
                cc.Mgr.game.freeFlag.TurnTable || 0 === cc.Mgr.game.spinADResetTime ? (cc.Mgr.game.freeFlag.TurnTable = !0,
                this.adsIconNode.active = !1,
                this.freeLabelNode.node.active = !0,
                this.freetimeLbl.node.active = !1) : (this.adsIconNode.active = !0,
                this.freeLabelNode.node.active = !1,
                this.freetimeLbl.node.active = !0),
                this.blurBg.opacity = 0,
                this.content.opacity = 0,
                this.content.setScale(.5),
                cc.tween(this.blurBg).to(.05, {
                    opacity: 255
                }).call().start(),
                cc.tween(this.content).to(.15, {
                    opacity: 255,
                    scale: 1
                }).start(),
                cc.Mgr.admob.showBanner("turnTable"),
                this.updateAdsBtnState(),
                this.lblListNode.active = "Russian" != cc.Mgr.Config.language,
                this.lblListNode_ru.active = !1
            },
            playOverAnimation: function() {
                this.rotating = !1,
                this.showBtns()
            },
            playTurnAnimation: function() {
                this.dbListNode.active = !1,
                this.count = 0,
                this.callback = function() {
                    30 == this.count && (this.playOverAnimation(),
                    this.unschedule(this.callback)),
                    this.count++
                }
                ,
                this.schedule(this.callback, .1),
                this.hideBtns()
            },
            refreshPanel: function() {
                this.dbListNode.active = !0,
                this.lastPlantMaxLv = cc.Mgr.game.plantMaxLv,
                this.currentBuffList = [],
                6 - cc.Mgr.game.spinADResetTime > 0 ? (this.timeNode.active = !1,
                this.freeBtn.node.position = cc.v2(-150, -415),
                this.gemBtn.node.position = cc.v2(150, -415),
                this.freetimeLbl.string = cc.Mgr.Utils.getTranslation("btn-get") + " (" + (6 - cc.Mgr.game.spinADResetTime) + "/5)",
                this.gemLbl.string = this.costGem) : (this.freeBtn.node.active = !1,
                this.gemBtn.node.position = cc.v2(0, -415),
                this.gemLbl.string = this.costGem);
                var e = cc.Mgr.MapDataMgr.getDataListByDataType(a.TurnTableData)
                  , t = [];
                this.disc.rotate = 0,
                this.rewardList = [];
                for (var i = [], c = [], s = [], o = [], r = [], l = 1; l < e.length; l++)
                    switch ((M = e[l = l.toString()]).type) {
                    case n.coin:
                        i.push(M);
                        break;
                    case n.gem:
                        s.push(M);
                        break;
                    case n.plant:
                        c.push(M);
                        break;
                    case n.buff:
                        o.push(M);
                        break;
                    case n.drone:
                        r.push(M)
                    }
                var g = 0
                  , h = 0
                  , d = 0
                  , u = 0
                  , p = 0
                  , m = 0;
                for (m = 0; m < 6; m++) {
                    var f = Math.random();
                    if (f < .2 && g < 2 && i.length > 0) {
                        g += 1;
                        var M = cc.Mgr.Utils.getArrayItemsAndChangeArr(i, 1);
                        t.push(M[0])
                    } else if (f < .4 && h < 2 && s.length > 0)
                        h += 1,
                        M = cc.Mgr.Utils.getArrayItemsAndChangeArr(s, 1),
                        t.push(M[0]);
                    else if (f < .6 && d < 2 && c.length > 0)
                        d += 1,
                        M = cc.Mgr.Utils.getArrayItemsAndChangeArr(c, 1),
                        t.push(M[0]);
                    else if (f < .8 && u < 2 && o.length > 0)
                        u += 1,
                        M = cc.Mgr.Utils.getArrayItemsAndChangeArr(o, 1),
                        t.push(M[0]);
                    else if (p < 2 && r.length > 0)
                        p += 1,
                        M = cc.Mgr.Utils.getArrayItemsAndChangeArr(r, 1),
                        t.push(M[0]);
                    else {
                        if (6 == t.length)
                            break;
                        t.length < 6 && m > 0 && m--
                    }
                }
                for (var v = cc.Mgr.game.plantMaxLv, b = 0; b < t.length; b++)
                    this.setBlockInfo(b, t[b], v)
            },
            setBlockInfo: function(e, t, i) {
                switch (this.spList[e].node.setScale(1),
                t.type) {
                case n.coin:
                    this.spList[e].node.active = !0,
                    this.mySpList[e].node.active = !1,
                    this.spList[e].spriteFrame = this.spriteFrameList[0],
                    this.spList[e].scale = 1;
                    var o = this.pickOutSpinData(t.rarity, cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(a.SpinLevelData, i))
                      , r = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(a.PlantData, o).price;
                    r = r * BigInt(8) / BigInt(10),
                    this.lblList[e].string = "x" + cc.Mgr.Utils.getNumStr2(r),
                    (h = new s).setData(t.type, r, 1, t.weight),
                    this.rewardList[e] = h;
                    break;
                case n.gem:
                    this.spList[e].node.active = !0,
                    this.mySpList[e].node.active = !1,
                    this.spList[e].spriteFrame = this.spriteFrameList[1],
                    this.spList[e].scale = 1,
                    this.lblList[e].string = "x" + t.rewards,
                    (h = new s).setData(t.type, t.rewards, 1, t.weight),
                    this.rewardList[e] = h;
                    break;
                case n.plant:
                    this.spList[e].node.active = !1,
                    this.mySpList[e].node.active = !0,
                    o = this.pickOutSpinData(t.rarity, cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(a.SpinLevelData, i));
                    var l = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(a.PlantData, o).head;
                    this.mySpList[e].setSprite(c.PlantHead, l),
                    this.lblList[e].string = "Lv." + o,
                    (h = new s).setData(t.type, 1, o, t.weight),
                    this.rewardList[e] = h;
                    break;
                case n.buff:
                    var g = Math.floor(5 * Math.random());
                    this.currentBuffList[e] = this.buffMap[g],
                    this.spList[e].node.active = !0,
                    this.spList[e].node.setScale(.6),
                    this.mySpList[e].node.active = !1,
                    this.spList[e].spriteFrame = this.spriteFrameList[g + 2],
                    this.lblList[e].string = t.rewards + "s",
                    (h = new s).setData(t.type, t.rewards, 1, t.weight),
                    this.rewardList[e] = h;
                    break;
                case n.drone:
                    var h;
                    this.spList[e].node.active = !1,
                    this.mySpList[e].node.active = !0,
                    o = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(a.DroneData, i).Drone,
                    this.mySpList[e].setSprite(c.PlantHead, "egg_2"),
                    this.mySpList[e].scale = .6,
                    this.lblList[e].string = "x6",
                    (h = new s).setData(t.type, 6, o, t.weight),
                    this.rewardList[e] = h
                }
            },
            pickOutSpinData: function(e, t) {
                switch (e) {
                case "S":
                    return t.SpinS;
                case "A":
                    return t.SpinA;
                case "B":
                    return t.SpinB;
                case "C":
                    return t.SpinC
                }
            },
            startTimeCount: function() {
                6 - cc.Mgr.game.spinADResetTime > 0 || (cc.Mgr.game.spinADTimeCount = 0 === cc.Mgr.game.spinADTimeCount ? cc.Mgr.Utils.GetSysTime() + 7200 : cc.Mgr.game.spinADTimeCount,
                this.seconds = cc.Mgr.game.spinADTimeCount - cc.Mgr.Utils.GetSysTime(),
                this.unschedule(this.countTime),
                this.seconds > 0 && this.schedule(this.countTime, 1))
            },
            countTime: function() {
                if (this.seconds -= 1,
                this.seconds < 0)
                    return this.unschedule(this.countTime),
                    cc.Mgr.game.spinADResetTime = 0,
                    this.timeNode.active = !1,
                    cc.Mgr.game.freeFlag.TurnTable = !0,
                    cc.Mgr.game.spinADTimeCount = 0,
                    void this.refreshBtns();
                var e = cc.Mgr.Utils.FormatNumToTime(this.seconds);
                this.timeNode.active = !0,
                this.timeDesLbl.string = e
            },
            refreshBtns: function() {
                cc.Mgr.game.freeFlag.TurnTable ? (this.adsIconNode.active = !1,
                this.freeLabelNode.node.active = !0,
                this.freetimeLbl.node.active = !1) : (this.adsIconNode.active = !0,
                this.freeLabelNode.node.active = !1,
                this.freetimeLbl.node.active = !0),
                6 - cc.Mgr.game.spinADResetTime > 0 ? (this.freeBtn.node.active = !0,
                this.timeNode.active = !1,
                this.freeBtn.node.position = cc.v2(-150, -415),
                this.gemBtn.node.position = cc.v2(150, -415),
                this.freetimeLbl.string = cc.Mgr.Utils.getTranslation("btn-get") + " (" + (6 - cc.Mgr.game.spinADResetTime) + "/5)",
                this.gemLbl.string = this.costGem) : (this.freeBtn.node.active = !1,
                this.gemBtn.node.position = cc.v2(0, -415),
                this.gemLbl.string = this.costGem),
                this.gemBtn.node.active = !0,
                this.updateAdsBtnState()
            },
            adsTurnTable: function() {
                if (0 != this.limitClick.clickTime() && (cc.Mgr.AudioMgr.playSFX("click"),
                !(this.rotating || cc.Mgr.game.spinADResetTime >= 6))) {
                    var e = this;
                    if (cc.Mgr.game.freeFlag.TurnTable)
                        cc.Mgr.game.freeFlag.TurnTable = !1,
                        this.adsIconNode.active = !0,
                        this.freeLabelNode.node.active = !1,
                        this.freetimeLbl.node.active = !0,
                        cc.Mgr.game.spinADResetTime++,
                        6 - cc.Mgr.game.spinADResetTime <= 0 && e.startTimeCount(),
                        e.refreshBtns(),
                        e.startRotate(),
                        e.playTurnAnimation();
                    else {
                        if (!1 === this.checkAvailabelAds)
                            return void cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("ad-tip-3"), "", this.node);
                        cc.Mgr.admob.showRewardedVideoAd(function(t) {
                            t && (cc.Mgr.game.spinADResetTime++,
                            6 - cc.Mgr.game.spinADResetTime <= 0 && e.startTimeCount(),
                            e.refreshBtns(),
                            e.startRotate(),
                            e.playTurnAnimation())
                        }, this.node, "roulette", this)
                    }
                }
            },
            updateAdsBtnState: function() {
                this.checkAvailabelAds = cc.Mgr.admob.checkAvailableRewardedAd(),
                this.freeBtn.node.active = cc.Mgr.game.freeFlag.TurnTable || this.checkAvailabelAds,
                this.checkAvailabelAds || cc.Mgr.game.freeFlag.TurnTable ? this.spriteCoin.setMaterial(0, this.nomarlM) : this.spriteCoin.setMaterial(0, this.grayM)
            },
            gemTurnTable: function() {
                var e = this;
                if (0 != this.limitClick.clickTime() && (cc.Mgr.AudioMgr.playSFX("click"),
                !this.rotating)) {
                    if (cc.Mgr.game.gems < this.costGem)
                        return cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("NoGems"), "gem", this.node),
                        void (!0 === this.allowShow && (this.allowShow = !1,
                        setTimeout(function() {
                            cc.Mgr.UIMgr.openPaymentUI(!0),
                            e.allowShow = !0
                        }, 300)));
                    cc.Mgr.game.gems -= this.costGem,
                    cc.Mgr.UIMgr.InGameUI.RefreshAssetData(!1, "gem"),
                    cc.Mgr.game.spinUseGemTime++,
                    cc.Mgr.game.spinUseGemTime > 5 && (cc.Mgr.game.spinUseGemTime = 5),
                    this.startRotate(),
                    this.playTurnAnimation()
                }
            },
            playSFXRotation: function() {
                cc.Mgr.AudioMgr.playSFX("spin")
            },
            startRotate: function(e) {
                var t = this;
                this.rotating = !0;
                for (var i, a = 0, n = 0; n < this.rewardList.length; n++)
                    a += this.rewardList[n].weight;
                var c = parseInt(a * Math.random()) + 1;
                i = c <= this.rewardList[0].weight ? 1 : c <= this.rewardList[1].weight + this.rewardList[0].weight ? 2 : c <= this.rewardList[2].weight + this.rewardList[1].weight + this.rewardList[0].weight ? 3 : c <= this.rewardList[3].weight + this.rewardList[2].weight + this.rewardList[1].weight + this.rewardList[0].weight ? 4 : c <= this.rewardList[4].weight + this.rewardList[3].weight + this.rewardList[2].weight + this.rewardList[1].weight + this.rewardList[0].weight ? 5 : 0;
                var s = cc.rotateTo(2.5, 2160 + 60 * i);
                s.easing(cc.easeInOut(3)),
                this.disc.runAction(cc.sequence(s, cc.callFunc(function() {
                    "function" == typeof e && e(),
                    t.getRewards(i),
                    setTimeout(function() {
                        t.refreshPanel(),
                        t.disc.rotate = 60 * i
                    }, 500)
                })))
            },
            getRewards: function(e) {
                this.hideBtns();
                var t = this.rewardList[e];
                switch (t.rType) {
                case n.coin:
                    cc.Mgr.UIMgr.openAssetGetUI("money", t.num, "turnTable");
                    break;
                case n.gem:
                    cc.Mgr.UIMgr.openAssetGetUI("gem", t.num, "turnTable");
                    break;
                case n.plant:
                    cc.Mgr.UIMgr.openAssetGetUI("plant", t.id, "turnTable");
                    break;
                case n.buff:
                    cc.Mgr.UIMgr.openAssetGetUI(this.currentBuffList[e], t.num, "turnTable");
                    break;
                case n.drone:
                    cc.Mgr.UIMgr.openAssetGetUI("drone", t.id, "turnTable")
                }
            },
            closeUI: function() {
                if (cc.Mgr.AudioMgr.playSFX("click"),
                !this.rotating) {
                    cc.Mgr.admob.hideBanner("turnTable");
                    var e = this;
                    cc.tween(this.blurBg).to(.15, {
                        opacity: 0
                    }).start(),
                    cc.tween(this.content).to(.15, {
                        opacity: 0,
                        scale: .5
                    }).call(function() {
                        e.unschedule(e.countTime),
                        e.node.active = !1
                    }).start(),
                    cc.Mgr.UIMgr.reduceShowUICount("turnTable")
                }
            }
        });
        t.exports = o,
        cc._RF.pop()
    }
    , {
        AtlasType: "AtlasType",
        DataType: "DataType",
        MySprite: "MySprite",
        TurnTableGetType: "TurnTableGetType",
        rewardBox: "rewardBox"
    }],
    uavUI: [function(e, t) {
        "use strict";
        cc._RF.push(t, "8e062Uc6hlOnp8CbRFRi8QX", "uavUI");
        var i = e("DataType")
          , a = cc.Class({
            extends: cc.Component,
            properties: {
                numLbl: cc.Label,
                num: 1,
                lv: 5,
                dragonNode: cc.Node,
                closeNode: cc.Node,
                gemLabel: cc.Label,
                titleLabel: cc.Label,
                btnLabel: cc.Label,
                content: cc.Node,
                blurBg: cc.Node,
                tip: cc.Label,
                okLabel: cc.Label,
                adBtn: cc.Node,
                spriteCoin: cc.Sprite,
                nomarlM: cc.Material,
                grayM: cc.Material,
                timeNode: cc.Node,
                timeDesLbl: cc.Label,
                timeTipLabel: cc.Label
            },
            onLoad: function() {
                this.limitClick = this.node.getComponent("LimitClick"),
                this.allowShow = !0
            },
            doTween: function() {
                var e = this;
                this.dragonNode.position = cc.v2(0, 920),
                this.closeNode.opacity = 0,
                this.closeNode.scale = 0,
                this.dragonNode.active = !0,
                cc.tween(this.dragonNode).to(.25, {
                    position: cc.v2(0, 25)
                }).call(function() {
                    cc.tween(e.closeNode).to(.15, {
                        opacity: 255,
                        scale: 1
                    }).start()
                }).start()
            },
            showUI: function() {
                cc.Mgr.admob.preloadRewarded(this),
                this.titleLabel.string = cc.Mgr.Utils.getTranslation("uav-title"),
                this.btnLabel.string = cc.Mgr.Utils.getTranslation("btn-get") + "(" + cc.Mgr.game.uavAdsCount + "/5)",
                this.okLabel.string = cc.Mgr.Utils.getTranslation("btn-ok"),
                this.timeTipLabel.string = cc.Mgr.Utils.getTranslation("roulette-timeTip"),
                this.costGem = 3,
                this.dragonNode.active = !1;
                var e = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(i.DroneData, cc.Mgr.game.plantMaxLv);
                cc.Mgr.game.level <= 10 ? (this.num = 6,
                this.costGem = 3) : cc.Mgr.game.level <= 20 ? (this.num = 5,
                this.costGem = 3) : cc.Mgr.game.level <= 30 ? (this.num = 4,
                this.costGem = 5) : cc.Mgr.game.level <= 40 ? (this.num = 3,
                this.costGem = 15) : cc.Mgr.game.level <= 50 ? (this.num = 2,
                this.costGem = 25) : (this.num = 1,
                this.costGem = 35),
                this.gemLabel.string = this.costGem,
                this.lv = e.Drone,
                this.numLbl.string = "x" + this.num,
                this.tip.string = cc.Mgr.Utils.getTranslation("fairyGift-tip", [this.num]),
                this.doTween(),
                this.blurBg.opacity = 0,
                this.content.opacity = 0,
                this.content.setScale(.5),
                cc.tween(this.blurBg).to(.05, {
                    opacity: 255
                }).call().start(),
                cc.tween(this.content).to(.15, {
                    opacity: 255,
                    scale: 1
                }).start(),
                cc.Mgr.admob.showBanner("uav"),
                this.checkAvailabelAds = cc.Mgr.admob.checkAvailableRewardedAd(),
                this.adBtn.active = cc.Mgr.game.uavAdsCount > 0 && this.checkAvailabelAds,
                this.checkAvailabelAds ? this.spriteCoin.setMaterial(0, this.nomarlM) : this.spriteCoin.setMaterial(0, this.grayM),
                this.startTimeCount()
            },
            gemGetDrone: function() {
                var e = this;
                if (0 != this.limitClick.clickTime()) {
                    if (cc.Mgr.game.gems < this.costGem)
                        return cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("NoGems"), "gem", this.node),
                        void (!0 === this.allowShow && (this.allowShow = !1,
                        setTimeout(function() {
                            cc.Mgr.UIMgr.openPaymentUI(!0),
                            e.allowShow = !0
                        }, 300)));
                    cc.Mgr.game.gems -= this.costGem,
                    cc.Mgr.UIMgr.InGameUI.RefreshAssetData(!1, "gem"),
                    cc.Mgr.flowerPotMgr.addDroneFlowerFot(this.lv, this.num),
                    this.closeUI()
                }
            },
            adsGetDrone: function() {
                if (0 != this.limitClick.clickTime())
                    if (!1 !== this.checkAvailabelAds) {
                        var e = this;
                        cc.Mgr.admob.showRewardedVideoAd(function(t) {
                            t && (cc.Mgr.flowerPotMgr.addDroneFlowerFot(e.lv, e.num),
                            cc.Mgr.game.uavAdsCount--,
                            cc.Mgr.game.uavAdsCount <= 0 && (e.adBtn.active = !1),
                            e.closeUI())
                        }, this.node, "fairyGift", this)
                    } else
                        cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("ad-tip-3"), "", this.node)
            },
            startTimeCount: function() {
                if (cc.Mgr.game.uavAdsCount > 0)
                    this.timeNode.active = !1;
                else if (cc.Mgr.game.uavAdsTimeCount = cc.Mgr.game.uavAdsTimeCount <= 0 ? cc.Mgr.Utils.GetSysTime() + 7200 : cc.Mgr.game.uavAdsTimeCount,
                this.seconds = cc.Mgr.game.uavAdsTimeCount - cc.Mgr.Utils.GetSysTime(),
                this.unschedule(this.countTime),
                this.seconds > 0) {
                    this.timeNode.active = !0;
                    var e = cc.Mgr.Utils.FormatNumToTime(this.seconds);
                    this.timeDesLbl.string = e,
                    this.schedule(this.countTime, 1)
                } else
                    cc.Mgr.game.uavAdsCount = 0,
                    cc.Mgr.game.uavAdsTimeCount = 0,
                    this.btnLabel.string = cc.Mgr.Utils.getTranslation("btn-get") + "(" + cc.Mgr.game.uavAdsCount + "/5)",
                    this.timeNode.active = !1,
                    this.adBtn.active = cc.Mgr.game.uavAdsCount > 0
            },
            countTime: function() {
                if (this.seconds -= 1,
                this.seconds < 0)
                    return this.unschedule(this.countTime),
                    cc.Mgr.game.uavAdsCount = 5,
                    cc.Mgr.game.uavAdsTimeCount = 0,
                    this.btnLabel.string = cc.Mgr.Utils.getTranslation("btn-get") + "(" + cc.Mgr.game.uavAdsCount + "/5)",
                    void (this.timeNode.active = !1);
                var e = cc.Mgr.Utils.FormatNumToTime(this.seconds);
                this.timeDesLbl.string = e
            },
            updateAdsBtnState: function() {
                this.adBtn.active = !1,
                this.checkAvailabelAds = cc.Mgr.admob.checkAvailableRewardedAd(),
                this.checkAvailabelAds ? (this.spriteCoin.setMaterial(0, this.nomarlM),
                cc.Mgr.game.uavAdsCount > 0 && (this.adBtn.active = !0)) : this.spriteCoin.setMaterial(0, this.grayM)
            },
            closeUI: function() {
                cc.Mgr.AudioMgr.playSFX("click"),
                cc.Mgr.admob.hideBanner("uav");
                var e = this;
                cc.tween(this.blurBg).to(.15, {
                    opacity: 0
                }).start(),
                cc.tween(this.content).to(.15, {
                    opacity: 0,
                    scale: .5
                }).call(function() {
                    cc.Mgr.UIMgr.InGameUI.closeUav(),
                    e.node.active = !1
                }).start(),
                cc.Mgr.UIMgr.reduceShowUICount("uav")
            }
        });
        t.exports = a,
        cc._RF.pop()
    }
    , {
        DataType: "DataType"
    }],
    uav: [function(e, t) {
        "use strict";
        cc._RF.push(t, "6ffde73ZFVLn7MKUof1xOlr", "uav");
        var i = e("MyEnum")
          , a = cc.Class({
            extends: cc.Component,
            properties: {
                dragonNode: cc.Node,
                beClicked: !1,
                tip: cc.Node
            },
            onLoad: function() {},
            show: function() {
                cc.Mgr.game.needShowUavTip && cc.Mgr.game.level <= 3 ? (this.tip.active = !0,
                cc.Mgr.game.needShowUavTip = !1) : this.tip.active = !1;
                var e = 380 + cc.Mgr.game.ratioOffsetY;
                this.movePos = [cc.v2(200, e), cc.v2(-200, e), cc.v2(-400, e), cc.v2(400, e)],
                this.beClicked = !1,
                this.dragonNode.active = !1,
                this.node.position = this.movePos[3],
                this.scheduleOnce(function() {
                    this.dragonNode.active = !0,
                    this.moveLeftOrRight()
                }, .1)
            },
            moveLeftOrRight: function() {
                var e = this
                  , t = this;
                t.node.scaleX = -1,
                cc.tween(this.node).to(.5, {
                    position: this.movePos[0]
                }, {
                    easing: "sineOut"
                }).call(function() {
                    cc.Mgr.AudioMgr.playUavSFX(i.AudioType.plane),
                    t.node.scaleX = -1
                }).to(2, {
                    position: this.movePos[0]
                }).call(function() {
                    t.node.scaleX = -1
                }).to(4, {
                    position: this.movePos[1]
                }).call(function() {
                    t.node.scaleX = 1
                }).to(2, {
                    position: this.movePos[1]
                }).call(function() {
                    t.node.scaleX = 1
                }).to(4, {
                    position: this.movePos[0]
                }).call(function() {
                    t.node.scaleX = -1
                }).to(2, {
                    position: this.movePos[0]
                }).call(function() {
                    t.node.scaleX = -1
                }).to(4, {
                    position: this.movePos[1]
                }).call(function() {
                    t.node.scaleX = 1
                }).to(2, {
                    position: this.movePos[1]
                }).call(function() {
                    t.node.scaleX = 1
                }).to(4, {
                    position: this.movePos[0]
                }).call(function() {
                    t.node.scaleX = -1
                }).to(2, {
                    position: this.movePos[0]
                }).call(function() {
                    t.node.scaleX = -1
                }).to(4, {
                    position: this.movePos[1]
                }).call(function() {
                    t.node.scaleX = -1
                }).to(1, {
                    position: this.movePos[2]
                }, {
                    easing: "sineIn"
                }).call(function() {
                    cc.Mgr.AudioMgr.stopUavSFX(),
                    cc.Mgr.UIMgr.InGameUI.unscheduleShowUav(),
                    e.node.stopAllActions(),
                    cc.Mgr.UIMgr.InGameUI.showUavNextTime(30),
                    e.node.active = !1
                }).start()
            },
            click: function() {
                cc.Mgr.UIMgr.InGameUI.unscheduleShowUav(),
                this.node.stopAllActions(),
                this.beClicked = !0,
                cc.Mgr.UIMgr.openUavUI(),
                this.tip.active = !1
            },
            uavOutScreen: function() {
                var e = this;
                this.node.scaleX = -1,
                cc.Mgr.AudioMgr.stopUavSFX(),
                cc.tween(this.node).to(1, {
                    position: this.movePos[2]
                }, {
                    easing: "sineIn"
                }).call(function() {
                    e.node.stopAllActions(),
                    cc.Mgr.UIMgr.InGameUI.showUavNextTime(30),
                    e.node.active = !1
                }).start()
            }
        });
        t.exports = a,
        cc._RF.pop()
    }
    , {
        MyEnum: "MyEnum"
    }],
    uiConfig: [function(e, t) {
        "use strict";
        var i;
        cc._RF.push(t, "9a0fepKSdpOmKUpwM/qqTCo", "uiConfig");
        var a = cc.Class({
            extends: cc.Component,
            statics: (i = {
                setUI: {
                    Name: "setUI",
                    Layer: 2
                },
                turnTableUI: {
                    Name: "turnTableUI",
                    Layer: 2
                },
                uavUI: {
                    Name: "uavUI",
                    Layer: 2
                },
                buffUI: {
                    Name: "buffUI",
                    Layer: 2
                },
                missionUI: {
                    Name: "missionUI",
                    Layer: 2
                },
                promptUI: {
                    Name: "promptUI",
                    Layer: 1
                },
                smallResult: {
                    Name: "smallResult",
                    Layer: 1
                },
                bigResult: {
                    Name: "bigResult",
                    Layer: 3
                },
                bossComing: {
                    Name: "bossComing",
                    Layer: 1
                },
                plantGetUI: {
                    Name: "plantGetUI",
                    Layer: 5
                },
                assetGetUI: {
                    Name: "assetGetUI",
                    Layer: 5
                }
            },
            i.uavUI = {
                Name: "uavUI",
                Layer: 2
            },
            i.offlineAssetUI = {
                Name: "offlineAssetUI",
                Layer: 2
            },
            i.paymentUI = {
                Name: "payment",
                Layer: 4
            },
            i.doubleCoinUI = {
                Name: "doubleCoinUI",
                Layer: 2
            },
            i.signUI = {
                Name: "signUI",
                Layer: 2
            },
            i.shopItem = {
                Name: "shopItem",
                Layer: 2
            },
            i.missionItem = {
                Name: "missionItem",
                Layer: 2
            },
            i.achieveItem = {
                Name: "achieveItem",
                Layer: 2
            },
            i.gameInUI = {
                Name: "gameInUI",
                Layer: 0
            },
            i.guide = {
                Name: "guide",
                Layer: 6
            },
            i.jinbi = {
                Name: "jinbi",
                Layer: 9
            },
            i.exchangeCoinUI = {
                Name: "exchangeCoinUI",
                Layer: 3
            },
            i.newRecordUI = {
                Name: "newRecordUI",
                Layer: 1
            },
            i.vipUI = {
                Name: "VIP",
                Layer: 2
            },
            i.maxLevel = {
                Name: "maxLevel",
                Layer: 1
            },
            i.starterBundleUI = {
                Name: "starterBundle",
                Layer: 2
            },
            i.updateAvailable = {
                Name: "updateAvailable",
                Layer: 2
            },
            i.enjoyNature = {
                Name: "enjoyNature",
                Layer: 2
            },
            i.compensationUI = {
                Name: "compensationUI",
                Layer: 2
            },
            i.coinBundle = {
                Name: "coinBundle",
                Layer: 4
            },
            i.offlineBundle = {
                Name: "offlineBundle",
                Layer: 4
            },
            i.removeAdBundle = {
                Name: "removeAdBundle",
                Layer: 4
            },
            i.specialGridBundle = {
                Name: "specialGridBundle",
                Layer: 4
            },
            i.rankingUI = {
                Name: "rankingUI",
                Layer: 2
            },
            i)
        });
        t.exports = a,
        cc._RF.pop()
    }
    , {}],
    uiItemMgr: [function(e, t) {
        "use strict";
        cc._RF.push(t, "edfd0bTU9xD94G5wtyKbH9O", "uiItemMgr");
        var i = e("uiConfig")
          , a = cc.Class({
            extends: cc.Component,
            statics: {
                shopItemPre: cc.Prefab,
                missionItemPre: cc.Prefab,
                achieveItemPre: cc.Prefab,
                loadItemsPre: function() {
                    var e = this;
                    cc.loader.loadRes("prefab/uiPrefab/" + i.shopItem.Name, function(t, i) {
                        t ? cc.error(t.message || t) : e.shopItemPre = i
                    }),
                    cc.loader.loadRes("prefab/uiPrefab/" + i.missionItem.Name, function(t, i) {
                        t ? cc.error(t.message || t) : e.missionItemPre = i
                    }),
                    cc.loader.loadRes("prefab/uiPrefab/" + i.achieveItem.Name, function(t, i) {
                        t ? cc.error(t.message || t) : e.achieveItemPre = i
                    })
                },
                getShopItemPre: function() {
                    return this.shopItemPre
                },
                getMissionItemPre: function() {
                    return this.missionItemPre
                },
                getAchieveItemPre: function() {
                    return this.achieveItemPre
                }
            }
        });
        t.exports = a,
        cc._RF.pop()
    }
    , {
        uiConfig: "uiConfig"
    }],
    "use_v2.1-2.2.1_cc.Toggle_event": [function(e, t) {
        "use strict";
        cc._RF.push(t, "d57cfHciSNLo4y06If6HOJB", "use_v2.1-2.2.1_cc.Toggle_event"),
        cc.Toggle && (cc.Toggle._triggerEventInScript_isChecked = !0),
        cc._RF.pop()
    }
    , {}],
    vertigo: [function(e, t) {
        "use strict";
        cc._RF.push(t, "2be2a0JaThNBok1imTmFb0u", "vertigo"),
        e("EffectType");
        var i = cc.Class({
            extends: cc.Component,
            properties: {
                dragon: dragonBones.ArmatureDisplay
            },
            start: function() {
                this.dragon.on(dragonBones.EventObject.COMPLETE, this.onAnimComplete, this)
            },
            onAnimComplete: function() {
                this.node.active = !1
            },
            playAnimation: function() {
                this.dragon.playAnimation("newAnimation", 1)
            },
            closeEffect: function() {
                this.node.active = !1
            }
        });
        t.exports = i,
        cc._RF.pop()
    }
    , {
        EffectType: "EffectType"
    }],
    zombie_config: [function(e, t) {
        "use strict";
        cc._RF.push(t, "d9802TA5BpH77oRgpCe7ZQS", "zombie_config");
        var i = cc.Class({
            extends: cc.Component,
            statics: {
                posList: [cc.v2(-447, 115), cc.v2(-320, 30), cc.v2(-61, -192), cc.v2(57, -198), cc.v2(270, -10), cc.v2(265, 78), cc.v2(30, 180), cc.v2(-113, 247)]
            }
        });
        t.exports = i,
        cc._RF.pop()
    }
    , {}],
    zombie_state: [function(e, t) {
        "use strict";
        cc._RF.push(t, "7bc8fxfFpNFvrF4zW5bUG0Q", "zombie_state");
        var i = cc.Enum({
            WALK: 0,
            SlOW: 1,
            DIE: 2
        });
        t.exports = i,
        cc._RF.pop()
    }
    , {}],
    zombie: [function(e, t) {
        "use strict";
        var i;
        cc._RF.push(t, "59dcdBP/AFIEL6J8Hqo3kch", "zombie");
        var a = e("zombie_state")
          , n = e("zombie_config")
          , c = e("MyEnum")
          , s = e("js-big-decimal")
          , o = e("EffectType")
          , r = e("DragonType")
          , l = e("attackEffect")
          , g = e("vertigo")
          , h = cc.Class(((i = {
            extends: cc.Component,
            properties: {
                id: 1,
                hp: 100,
                money: 100,
                spd: .5,
                prefab: "",
                gender: "",
                dragon: dragonBones.ArmatureDisplay,
                dragonParent: cc.Node,
                state: {
                    default: a.WALK,
                    type: a
                },
                posIndex: 0,
                hpBar: cc.ProgressBar,
                slowState: !1,
                vertigoState: !1,
                attackEffect: l,
                vertigoEffect: g,
                hasDie: !1
            },
            start: function() {},
            showComing: function() {
                this.dragonParent.setScale(2),
                this.hpBar.node.active = !1,
                this.vertigoEffect.node.active = !1,
                this.attackEffect.node.active = !1
            },
            init: function(e, t, i) {
                void 0 === t && (t = .9),
                this.hasDie = !1,
                this.attackEffect.node.active = !1,
                this.vertigoEffect.node.active = !1,
                this.id = e.id,
                this.node.scaleX = 1,
                this.dragonParent.setScale(t),
                this.hpBar.node.y = this.dragonParent.height * t,
                this.vertigoEffect.node.y = this.dragonParent.height * t - this.vertigoEffect.node.height / 2,
                this.totalHp = e.hp,
                this.hp = e.hp,
                this.spd = e.spd,
                !this.shadow && i && (this.shadow = i,
                i.parent = this.node,
                i.zIndex = -1,
                i.y += i.height / 2),
                this.shadow.setScale(t),
                this.isSetZIndex = !1,
                this.isSetZIndex_2 = !1,
                this.isInList = !1,
                this.spd = cc.Mgr.Config.cgZombieData.spd,
                this.money = e.money * BigInt(4) / BigInt(5),
                this.prefab = e.prefab,
                this.posIndex = 0,
                this.node.position = n.posList[this.posIndex],
                this.hpBar.progress = 1,
                this.dragon.timeScale = 1,
                this.slowState = !1,
                this.vertigoState = !1,
                this.hexToColor("#ffffff"),
                this.hpBar.node.getChildByName("bar").height = 15,
                this.attackEffect.node.scaleX = 1,
                this.vertigoEffect.node.scaleX = 1,
                this.hpBar.node.scaleX = 1,
                this.spdStep_3_Ratio = 1
            },
            getHitPosition: function() {
                return cc.v2(this.node.x, this.node.y + this.attackEffect.node.y)
            }
        }).start = function() {
            cc.Mgr.DragonMgr.create(r.Zombie, this.dragon)
        }
        ,
        i.moveToNextPos = function() {
            if (this.node.stopAllActions(),
            !this.hasDie && this.posIndex == n.posList.length - 1)
                return cc.Mgr.ZombieMgr.zombieEscape(),
                this.node.stopAllActions(),
                this.unschedule(this.vertigoCallBack),
                this.unschedule(this.slowMoveCallBack),
                void cc.Mgr.ZombieMgr.backToPool(this.node, this.id);
            this.posIndex > 0 && 0 == this.isInList && (cc.Mgr.ZombieMgr.zombieList.push(this.node),
            this.isInList = !0),
            this.posIndex > 1 && !1 === this.isSetZIndex && (this.node.zIndex = cc.Mgr.ZombieMgr.moveZIndex,
            cc.Mgr.ZombieMgr.moveZIndex++,
            this.isSetZIndex = !0),
            this.posIndex > 4 && !1 === this.isSetZIndex_2 && (this.node.zIndex = cc.Mgr.ZombieMgr.moveZIndex_2,
            cc.Mgr.ZombieMgr.moveZIndex_2++,
            this.isSetZIndex_2 = !0);
            var e = 4 === this.posIndex ? .5 : 1;
            this.slowState && (e = 4 === this.posIndex ? .25 : .5),
            this.vertigoState ? e = .001 : e *= .6;
            var t = cc.Mgr.Utils.pDistance(this.node.position, n.posList[this.posIndex + 1]) / (this.spd * cc.Mgr.game.zombieSpeedCoefficient * e * this.spdStep_3_Ratio)
              , i = cc.moveTo(t, n.posList[this.posIndex + 1])
              , a = cc.sequence(i, cc.callFunc(function() {
                if (this.posIndex += 1,
                this.posIndex < n.posList.length) {
                    if (4 == this.posIndex) {
                        this.node.scaleX = -1 * this.node.scaleX,
                        this.attackEffect.node.scaleX = -1,
                        this.vertigoEffect.node.scaleX = -1,
                        this.hpBar.node.scaleX = -1;
                        var e = cc.Mgr.Utils.pDistance(this.node.position, n.posList[this.posIndex + 1])
                          , t = e / (this.spd * cc.Mgr.game.zombieSpeedCoefficient)
                          , i = 40 / (this.spd * cc.Mgr.game.zombieSpeedCoefficient);
                        this.spdStep_3_Ratio = e / (t - i) / (this.spd * cc.Mgr.game.zombieSpeedCoefficient)
                    } else
                        this.spdStep_3_Ratio = 1;
                    this.moveToNextPos()
                } else
                    this.hasDie || (cc.Mgr.ZombieMgr.zombieEscape(),
                    this.node.stopAllActions(),
                    this.unschedule(this.vertigoCallBack),
                    this.unschedule(this.slowMoveCallBack),
                    cc.Mgr.ZombieMgr.backToPool(this.node, this.id))
            }, this));
            if (this.node.runAction(a),
            6 === this.posIndex) {
                var c = cc.Mgr.ZombieMgr.zombieList.indexOf(this.node);
                c >= 0 && cc.Mgr.ZombieMgr.zombieList.splice(c, 1)
            }
        }
        ,
        i.hexToColor = function(e) {
            this.dragon.node.color = cc.Mgr.Utils.hexToColor(e)
        }
        ,
        i.slowMoveCallBack = function() {
            this.slowState = !1,
            this.dragon.timeScale = 1,
            this.moveToNextPos(),
            this.hexToColor("#ffffff")
        }
        ,
        i.slowMove = function() {
            this.slowState || this.vertigoState || (this.unschedule(this.vertigoCallBack),
            this.unschedule(this.slowMoveCallBack),
            this.slowState = !0,
            this.dragon.timeScale = .5,
            this.moveToNextPos(),
            this.hexToColor("#78C7CA"),
            this.scheduleOnce(this.slowMoveCallBack, 1))
        }
        ,
        i.vertigoCallBack = function() {
            this.vertigoEffect.closeEffect(),
            this.vertigoState = !1,
            this.dragon.timeScale = 1,
            this.moveToNextPos(),
            this.hexToColor("#ffffff")
        }
        ,
        i.vertigo = function() {
            this.slowState || this.vertigoState || (this.unschedule(this.vertigoCallBack),
            this.unschedule(this.slowMoveCallBack),
            this.vertigoState = !0,
            this.playVertigoEffect(),
            this.dragon.timeScale = .001,
            this.moveToNextPos(),
            this.hexToColor("#009EEC"),
            this.scheduleOnce(this.vertigoCallBack, 1))
        }
        ,
        i.beAttack = function(e) {
            if (this.hp -= e.power,
            this.playAttackExploreEffect(),
            cc.Mgr.AudioMgr.playSFX(c.AudioType.hit),
            this.hp > BigInt(0))
                switch (e.bulletSkill) {
                case c.BulletSkillType.Slow:
                    cc.Mgr.AudioMgr.playSFX(c.AudioType.skill_slow),
                    this.slowMove();
                    break;
                case c.BulletSkillType.DouKill:
                    cc.Mgr.AudioMgr.playSFX(c.AudioType.skill_crit),
                    this.playCrickEffect(),
                    this.hp -= e.power;
                    break;
                case c.BulletSkillType.Vertigo:
                    cc.Mgr.AudioMgr.playSFX(c.AudioType.skill_freeze),
                    this.vertigo()
                }
            if (!this.hasDie)
                if (this.hp <= BigInt(0)) {
                    this.hasDie = !0,
                    this.hpBar.progress = 0,
                    this.node.stopAllActions(),
                    this.playDieSmokeEffect(),
                    this.unschedule(this.vertigoCallBack),
                    this.unschedule(this.slowMoveCallBack),
                    cc.Mgr.ZombieMgr.backToPool(this.node, this.id, this.hp);
                    var t = cc.Mgr.ZombieMgr.zombieList.indexOf(this.node);
                    t >= 0 && cc.Mgr.ZombieMgr.zombieList.splice(t, 1)
                } else
                    this.hpBar.progress = s.divide(this.hp.toString(), this.totalHp.toString(), 2)
        }
        ,
        i.playCoinFlyEffect = function() {
            var e = cc.Mgr.EffectMgr.getObFromPool(o.CoinFly);
            if (null != e) {
                e.parent = cc.Mgr.ZombieMgr.zombiesParent,
                e.active = !0,
                e.zIndex = 999,
                e.y = this.node.y + this.node.height,
                e.x = this.node.x;
                var t = this.money;
                1 == cc.Mgr.game.doubleCoinState && (t *= BigInt(3),
                this.scheduleOnce(this.flyCoinEffect, .35)),
                this.flyMoney = t;
                var i = cc.Mgr.Utils.getNumStr2(this.flyMoney);
                e.getComponent("coinFly").setData(i),
                e.scale = 1,
                cc.Mgr.game.money += t,
                cc.Mgr.game.coin_gained_total += t,
                cc.Mgr.UIMgr.InGameUI.RefreshAssetData(!1, "money"),
                cc.tween(e).to(.1, {
                    position: cc.v2(this.node.x, this.node.y + this.node.height + 30),
                    scale: .8
                }).to(.5, {
                    position: cc.v2(this.node.x, this.node.y + this.node.height + 30 + 10)
                }).call(function() {
                    cc.Mgr.EffectMgr.ObBackToPool(e, o.CoinFly)
                }).start()
            }
        }
        ,
        i.flyCoinEffect = function() {
            var e = cc.Mgr.EffectMgr.getObFromPool(o.CoinFly);
            if (null != e) {
                e.parent = cc.Mgr.ZombieMgr.zombiesParent,
                e.active = !0,
                e.zIndex = 101,
                e.y = this.node.y + this.node.height,
                e.x = this.node.x;
                var t = this.flyMoney
                  , i = cc.Mgr.Utils.getNumStr2(t);
                e.getComponent("coinFly").setData(i),
                e.scale = 1,
                cc.tween(e).to(.1, {
                    position: cc.v2(this.node.x, this.node.y + this.node.height + 30),
                    scale: .8
                }).to(.5, {
                    position: cc.v2(this.node.x, this.node.y + this.node.height + 30 + 10)
                }).call(function() {
                    cc.Mgr.EffectMgr.ObBackToPool(e, o.CoinFly)
                }).start()
            }
        }
        ,
        i.playCrickEffect = function() {
            var e = cc.Mgr.EffectMgr.getObFromPool(o.Crick);
            e.active = !0,
            null != e && (e.parent = cc.Mgr.ZombieMgr.zombiesParent,
            e.zIndex = 101,
            e.y = this.node.y + this.node.height / 2 - 10,
            e.x = this.node.x,
            e.scale = .7,
            e.opacity = 255,
            cc.tween(e).to(.6, {
                position: cc.v2(this.node.x, this.node.y + this.node.height)
            }).call(function() {
                cc.Mgr.EffectMgr.ObBackToPool(e, o.Crick)
            }).start())
        }
        ,
        i.playAttackExploreEffect = function() {
            this.attackEffect.node.active = !0,
            this.attackEffect.playAnimation()
        }
        ,
        i.playDieSmokeEffect = function() {
            var e = cc.Mgr.EffectMgr.getObFromPool(o.DieSmoke);
            if (e.active = !0,
            null != e) {
                e.parent = cc.Mgr.ZombieMgr.zombiesParent,
                e.y = this.node.y + this.node.height / 2,
                e.x = this.node.x;
                var t = this;
                e.getComponent("dieSmoke").playAnimation(function() {
                    t.playCoinFlyEffect()
                })
            }
        }
        ,
        i.playVertigoEffect = function() {
            this.vertigoEffect.node.active = !0,
            this.vertigoEffect.playAnimation()
        }
        ,
        i));
        t.exports = h,
        cc._RF.pop()
    }
    , {
        DragonType: "DragonType",
        EffectType: "EffectType",
        MyEnum: "MyEnum",
        attackEffect: "attackEffect",
        "js-big-decimal": "js-big-decimal",
        vertigo: "vertigo",
        zombie_config: "zombie_config",
        zombie_state: "zombie_state"
    }]
}, {}, ["use_v2.1-2.2.1_cc.Toggle_event", "Admob", "BlurMask", "Cloud", "FontManager", "LanguageItem", "LanguageSelector", "LimitClick", "MySprite", "SButton", "ScrollLabel", "SwitchFont", "WaterfallFlow", "js-big-decimal", "DB_achievementAwards", "DB_airdrop", "DB_buyButton", "DB_droneRewards", "DB_i18n", "DB_invite", "DB_level", "DB_levelupGem", "DB_plant", "DB_plantName", "DB_shopSort", "DB_spinLevel", "DB_turntable", "db_zombie", "AudioMgr", "Config", "AchieveData", "AchieveMapMgr", "AirDropData", "AirDropMapMgr", "BuyButtonData", "BuyButtonMapMgr", "DroneData", "DroneMapMgr", "GoodMapDecoder", "GoodsData", "InviteData", "InviteMapMgr", "LevelData", "LevelMapMgr", "LvUpGemData", "LvUpGemMapMgr", "MapDataMgr", "PlantData", "PlantMapMgr", "ShopData", "ShopMapMgr", "SpinLvData", "SpinLvMapMgr", "TransData", "TransMapMgr", "TurnTableData", "TurnTableMapMgr", "ZombieData", "ZombieMapMgr", "DataType", "Event", "GlobalEvent", "HttpUtils", "MissionType", "MyEnum", "NoticeText", "TurnTableGetType", "UserDataMgr", "Utils", "achieveMissonData", "ABTest", "Analytics", "AtlasMgr", "AtlasType", "DragonMgr", "DragonType", "GameCenterCtrl", "ParticleMgr", "BulletPool", "BulletType", "bullet", "EffectMgr", "EffectType", "UnlockTip", "angryEffect", "attackEffect", "coinFly", "dieSmoke", "flowerPotOpen", "plantMerge", "tipMoveAttack", "vertigo", "game", "Notification", "flowerPot", "flowerPotManage", "lockGird", "plant", "plantManage", "ZomBieMgr", "zombie", "zombie_config", "zombie_state", "ICloud", "Payment", "TEA", "AppStart", "BuffUI", "CoinBundle", "Compensation", "EnjoyNature", "FirstUI", "Guides", "InGameUI", "MaxLevel", "NumEffect", "NumberCol", "OfflineBundle", "PaymentUI", "PlantMergeGuide", "RankingItem", "RankingUI", "RemoveAdBundle", "SpecialGridBundle", "StarterBundle", "UIMgr", "UpdateAvailable", "Vip", "achieveItem", "angryUI", "assetGetUI", "bigResult", "bossComing", "coinBonus", "jinbi", "jinbiCtrl", "doubleCoinUI", "exchangeCoinUI", "jinggai", "missionItem", "missionUI", "newRecordUI", "noticeUI", "offlineAssetUI", "plantGetUI", "promptUI", "rewardBox", "setPanel", "shopItem", "signItem", "signUI", "smallResult", "turnArrow", "turnTableUI", "uav", "uavUI", "uiConfig", "uiItemMgr"]);
