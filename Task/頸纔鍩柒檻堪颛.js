/*
安卓：晶彩天气看看赚


不需要捉看看赚body，只需要用到jctqCookie
目前只能在青龙上使用，需要依赖crypto-js，报错找不到依赖的自行安装
docker exec -it qinglong bash -c "npm install -g crypto-js"
本脚本没有设置重写，请自己复制jctqCookie到青龙环境下使用，多账号用@隔开
例子： export jctqCookie='uid=xxx&zqkey=yyy&zqkey_id=zzz@uid=aaa&zqkey=bbb&zqkey_id=ccc@uid=qqq&zqkey=sss&zqkey_id=ttt'
*/

const _0x3bb297=_0x4bcb;(function(_0x5aa0e0,_0x3a0030){const _0x425fd8=_0x4bcb,_0x2cff1d=_0x5aa0e0();while(!![]){try{const _0x46b34b=parseInt(_0x425fd8(0xbf))/0x1*(-parseInt(_0x425fd8(0xd9))/0x2)+-parseInt(_0x425fd8(0x17a))/0x3+parseInt(_0x425fd8(0xe6))/0x4*(parseInt(_0x425fd8(0xad))/0x5)+parseInt(_0x425fd8(0x163))/0x6*(parseInt(_0x425fd8(0x124))/0x7)+parseInt(_0x425fd8(0x143))/0x8*(parseInt(_0x425fd8(0x159))/0x9)+parseInt(_0x425fd8(0xd8))/0xa+-parseInt(_0x425fd8(0x144))/0xb*(parseInt(_0x425fd8(0xe5))/0xc);if(_0x46b34b===_0x3a0030)break;else _0x2cff1d['push'](_0x2cff1d['shift']());}catch(_0x454bc5){_0x2cff1d['push'](_0x2cff1d['shift']());}}}(_0x5a87,0x9200a));const jsname=_0x3bb297(0xde),$=Env(jsname),notifyFlag=0x1,logDebug=0x0;let notifyStr='',rndtime='',httpResult,CryptoJS=require(_0x3bb297(0x123)),jctqCookie=($[_0x3bb297(0x173)]()?process[_0x3bb297(0xcc)][_0x3bb297(0xb4)]:$[_0x3bb297(0xc9)](_0x3bb297(0xb4)))||'',jctqCookieArr=[uid=55747365&version_code=839&zqkey=MDAwMDAwMDAwMJCMpN-w09Wtg5-Bb36eh6CPqHualIejl6-Fx2Kx3YFrhYyp4LDPyGl9onqkj3ZqYJa8Y898najWsJupZLDdm2qEjI6Xr6mmapqGcXY&zqkey_id=fa7555c42dafe45070d31db40848fbae],kkzBodyArr=[],userIdx=0x0,allCompFlag=0x0,validCount=0x0,restNum=0x0,preBody=_0x3bb297(0x14c),bodyTemplate=_0x3bb297(0xe7),fakeSign=_0x3bb297(0x100),a=_0x3bb297(0x118),b=_0x3bb297(0xe1),c='v6',key=a+b+c;function _0x5a87(){const _0x10d60d=['writedata','--用户','reduce','write','共找到',':\x20服务器访问数据为空，请检查自身设备网络情况','cktough','https://tq.xunsl.com/v5/nameless/adlickstart.json','match','1837880zdgxlg','11fCGoIV','mode','所有用户开始一起做看看赚任务[id:','/v1/scripting/evaluate','map','tq.xunsl.com','encrypt','https://tq.xunsl.com/v5/nameless/bannerstatus.json','p=D9XQc_gCBVVg=','box.dat','CookieJar','Function\x20','VOG-AL10','body','send','本次运行共查询到','getSeconds','trim','@chavy_boxjs_userCfgs.httpapi_timeout','substr','keep-alive','9CyAULi','&zqkey_id=','logs','url','未完成看看赚[id:','msg','Pkcs7','runScript','isLoon','http','47628wMutdO','toObj','decrypt','getTime','undefined','done','got','setjson','message','==============📣系统通知📣==============','lodash_set','getMonth','read_num','stringify','cookie=','exec','isNode','ckjar','运行通知\x0a\x0a','&uid=','existsSync','media-url','null','2068545WBYRiO','getScript','isNeedRewrite','open-url','setval','logErr','Cookie','startTime','isSurge','getFullYear','255XkxQAD','status','time','writeFileSync','轮阅读，随机等待','未找到有效的jctqCookie',',\x20结束!\x20🕛\x20','jctqCookie','set-cookie',':\x20get请求失败','setValueForKey','getHours','test','path','--完成第','zqkey=','Content-Type','未找到jctqCookie','270587rqCTqr','slice','setdata','concat','cookie_id=','assign','Content-Length','cron','&task_id=','stack','getdata','charAt',']，还需阅读','env','dataFile','application/x-www-form-urlencoded','getMilliseconds','abs','个用户','已完成看看赚[id:','cwd',']任务，获得','logSeparator','replace','post','9235080tWrzer','8OLmBwK','完成看看赚[id:','ciphertext','isQuanX','parse','晶彩天气看看赚','CBC','@chavy_boxjs_userCfgs.httpapi','EMj','toString','.$1',']，阅读','9743484zdSFjG','70076QAPFdK','app_name=jckd_app&app_version=8.3.7&carrier=%E4%B8%AD%E5%9B%BD%E7%94%B5%E4%BF%A1&channel=c6005&device_brand=HUAWEI&device_id=52278379&device_model=TAS-AN00&device_platform=android&device_type=android&dpi=480&inner_version=202111012030&language=zh-CN&memory=7&mi=0&mobile_type=1&net_type=1&network_type=WIFI&oaid=9bdf7bff-f3fe-2b18-5fff-3b3f3fd6873d&openudid=d3a7920a332a158c&os_api=29&os_version=TAS-AN00+10.0.0.133%28C00E132R5P1%29&request_time=1636635425&resolution=1080x2340&rom_version=TAS-AN00+10.0.0.133%28C00E132R5P1%29&s_ad=BpnoxxlgBSPY%3DPjY34bnR9d2j4inaXj5lxigNHQqSQA1G&sm_device_id=2020031618154539f1a2741679d27a72c6745d9ed13e6801c4b79111353999&storage=109.35&','data','length','qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM','mediaUrl','loaddata','join','Hex','object','DES','uid=','POST','setCookieSync','android','call','非法请求，请检查body','banner_id','opts','getMinutes','https://tq.xunsl.com/v5/nameless/adlickend.json','items','random','indexOf','error_code','then','&sign=807b702a1b3332d150936ede33d7c0fe','Base64','阅读看看赚文章失败：','see_num','enc',',\x20错误!','http://','statusCode','success',',\x20开始!','resolve','catch','getjson','tough-cookie','valueForKey','cookieJar','--完成最后一轮阅读','read','push','个有效的看看赚任务','pad','openUrl','floor',':\x20post请求失败','od8','score','完成看看赚任务失败：','zqkey_id=','getval','exports','fetch','log','readFileSync','wait','GET','crypto-js','1001tMCHlA','method','toStr','redirect','jcweather','isMute','finally','split','Utf8','string','name','headers','timeout','comtele_state','get','lodash_get','getDate','*/*','initGotEnv','isArray',':\x20此脚本不做重写，请检查重写设置',':\x20未知错误'];_0x5a87=function(){return _0x10d60d;};return _0x5a87();}!(async()=>{const _0xa5b2a2=_0x3bb297;if(typeof $request!==_0xa5b2a2(0x167))$[_0xa5b2a2(0x15e)](jsname+_0xa5b2a2(0x138));else{if(!await checkEnv())return;await runLookStart(),console[_0xa5b2a2(0x11f)](_0xa5b2a2(0x153)+validCount+_0xa5b2a2(0x113));}})()[_0x3bb297(0x10b)](_0x294354=>$[_0x3bb297(0x17f)](_0x294354))[_0x3bb297(0x12a)](()=>$[_0x3bb297(0x168)]());async function showmsg(){const _0x3e29f0=_0x3bb297;notifyBody=jsname+_0x3e29f0(0x175)+notifyStr,notifyFlag!=0x1&&console[_0x3e29f0(0x11f)](notifyBody),notifyFlag==0x1&&$[_0x3e29f0(0x15e)](notifyBody);}async function checkEnv(){const _0x5c1687=_0x3bb297;if(jctqCookie){if(jctqCookie[_0x5c1687(0xfd)]('@')>-0x1){let _0x2d3140=jctqCookie[_0x5c1687(0x12b)]('@');for(let _0x54cd14=0x0;_0x54cd14<_0x2d3140[_0x5c1687(0xe9)];_0x54cd14++){jctqCookieArr[_0x5c1687(0x112)](replaceCookie(_0x2d3140[_0x54cd14]));}}else jctqCookieArr[_0x5c1687(0x112)](replaceCookie(jctqCookie));}else return console[_0x5c1687(0x11f)](_0x5c1687(0xbe)),![];if(jctqCookieArr[_0x5c1687(0xe9)]==0x0)return console[_0x5c1687(0x11f)](_0x5c1687(0xb2)),![];return console[_0x5c1687(0x11f)](_0x5c1687(0x13e)+jctqCookieArr[_0x5c1687(0xe9)]+_0x5c1687(0xd1)),!![];}function replaceCookie(_0x39ee9c){const _0x8efa5e=_0x3bb297;let _0x41da88='',_0x5a92ce='',_0x169c9a='';if(_0x39ee9c[_0x8efa5e(0xfd)](_0x8efa5e(0xbc))>-0x1)_0x5a92ce=_0x39ee9c[_0x8efa5e(0x142)](/zqkey=([\w-]+)/)[0x1];else _0x39ee9c[_0x8efa5e(0xfd)](_0x8efa5e(0x171))>-0x1&&(_0x5a92ce=_0x39ee9c[_0x8efa5e(0x142)](/cookie=([\w-]+)/)[0x1]);if(_0x39ee9c[_0x8efa5e(0xfd)](_0x8efa5e(0x11b))>-0x1)_0x169c9a=_0x39ee9c[_0x8efa5e(0x142)](/zqkey_id=([\w-]+)/)[0x1];else _0x39ee9c[_0x8efa5e(0xfd)](_0x8efa5e(0xc3))>-0x1&&(_0x169c9a=_0x39ee9c[_0x8efa5e(0x142)](/cookie_id=([\w-]+)/)[0x1]);return _0x39ee9c[_0x8efa5e(0xfd)](_0x8efa5e(0xf1))>-0x1&&(uid=_0x39ee9c[_0x8efa5e(0x142)](/uid=([\w-]+)/)[0x1]),_0x41da88=_0x8efa5e(0xbc)+_0x5a92ce+_0x8efa5e(0x15a)+_0x169c9a+_0x8efa5e(0x176)+uid,_0x41da88;}async function encodeUserBody(_0x26fe5c,_0x5f3a9b){const _0x4590a6=_0x3bb297;return replacedStr=bodyTemplate+(_0x4590a6(0xc7)+_0x5f3a9b+'&')+jctqCookieArr[_0x26fe5c]+fakeSign,encodeBody=myFuncB(replacedStr),hexBody=CryptoJS[_0x4590a6(0x104)][_0x4590a6(0xee)][_0x4590a6(0xdd)](encodeBody),base64Body=CryptoJS[_0x4590a6(0x104)][_0x4590a6(0x101)][_0x4590a6(0x170)](hexBody),replaceBody3=base64Body[_0x4590a6(0xd6)](/\+/g,'-'),replaceBody4=replaceBody3[_0x4590a6(0xd6)](/\//g,'_'),finalBody=preBody+replaceBody4+randomString(0x0),finalBody;}async function runLookStart(){const _0x18fae0=_0x3bb297;for(let _0x5d5aee=0x2710;_0x5d5aee<0x27d8;_0x5d5aee++){allCompFlag=0x1,restNum=0x0,kkzBodyArr=[],kkzCompArr=[];for(userIdx=0x0;userIdx<jctqCookieArr[_0x18fae0(0xe9)];userIdx++){let _0x3f2255=await encodeUserBody(userIdx,_0x5d5aee),_0x220534=await adlickstart(_0x3f2255,_0x5d5aee);if(userIdx==0x0){if(_0x220534==!![])validCount++;else break;}kkzBodyArr[_0x18fae0(0x112)](_0x3f2255);}if(allCompFlag==0x1)continue;console[_0x18fae0(0x11f)](_0x18fae0(0x146)+_0x5d5aee+_0x18fae0(0xe4)+restNum+'次');for(let _0x2d3993=0x0;_0x2d3993<restNum;_0x2d3993++){for(userIdx=0x0;userIdx<jctqCookieArr[_0x18fae0(0xe9)];userIdx++){await readLookStartArt(kkzBodyArr[userIdx],_0x2d3993);}if(_0x2d3993==restNum-0x1)console[_0x18fae0(0x11f)](_0x18fae0(0x110));else{let _0x2fdbc2=Math[_0x18fae0(0x116)](Math[_0x18fae0(0xfc)]()*0x7d0)+0x1770;console[_0x18fae0(0x11f)](_0x18fae0(0xbb)+(_0x2d3993+0x1)+_0x18fae0(0xb1)+_0x2fdbc2+'ms'),await $[_0x18fae0(0x121)](_0x2fdbc2);}}for(userIdx=0x0;userIdx<jctqCookieArr[_0x18fae0(0xe9)];userIdx++){if(kkzCompArr[userIdx]==0x1)await adlickend(kkzBodyArr[userIdx]);}}}function _0x4bcb(_0x528835,_0x313f9c){const _0x5a8740=_0x5a87();return _0x4bcb=function(_0x4bcb55,_0x34cf37){_0x4bcb55=_0x4bcb55-0xad;let _0x31ce05=_0x5a8740[_0x4bcb55];return _0x31ce05;},_0x4bcb(_0x528835,_0x313f9c);}async function adlickstart(_0x154063,_0x8cf970){const _0x5f3e6e=_0x3bb297;let _0x39e94e=printCaller(),_0x39f65d=_0x5f3e6e(0x141),_0x4b908d=populatePostUrl(_0x39f65d,_0x154063);await httpPost(_0x4b908d,_0x39e94e);let _0x7b2ac3=httpResult;if(!_0x7b2ac3)return![];if(_0x7b2ac3[_0x5f3e6e(0x108)]==!![]){if(_0x7b2ac3[_0x5f3e6e(0xfb)][_0x5f3e6e(0x131)]==0x0){allCompFlag=0x0,kkzCompArr[_0x5f3e6e(0x112)](0x1);let _0x4cc91d=_0x7b2ac3[_0x5f3e6e(0xfb)][_0x5f3e6e(0x103)]-_0x7b2ac3[_0x5f3e6e(0xfb)][_0x5f3e6e(0x16f)];if(_0x4cc91d==0x0)_0x4cc91d=0x1;restNum=_0x4cc91d>restNum?_0x4cc91d:restNum,console[_0x5f3e6e(0x11f)]('用户'+(userIdx+0x1)+_0x5f3e6e(0x15d)+_0x8cf970+_0x5f3e6e(0xcb)+_0x4cc91d+'次');}else kkzCompArr[_0x5f3e6e(0x112)](0x0),console[_0x5f3e6e(0x11f)]('用户'+(userIdx+0x1)+_0x5f3e6e(0xd2)+_0x8cf970+']');}else{if(_0x7b2ac3[_0x5f3e6e(0xfe)]==0x30d41)console[_0x5f3e6e(0x11f)](_0x5f3e6e(0xf6));return![];}return!![];}async function readLookStartArt(_0x4d63f3){const _0x58cd80=_0x3bb297;let _0x39c0eb=printCaller(),_0x5626fc=_0x58cd80(0x14b),_0x317b25=populatePostUrl(_0x5626fc,_0x4d63f3);await httpPost(_0x317b25,_0x39c0eb);let _0x2df4e4=httpResult;if(!_0x2df4e4)return;_0x2df4e4[_0x58cd80(0x108)]!=!![]&&console[_0x58cd80(0x11f)](_0x58cd80(0x13b)+(userIdx+0x1)+_0x58cd80(0x102)+_0x2df4e4[_0x58cd80(0x16b)]);}async function adlickend(_0x27ef16){const _0x5a6f0e=_0x3bb297;let _0xc58cef=printCaller(),_0x7492af=_0x5a6f0e(0xfa),_0x510ab9=populatePostUrl(_0x7492af,_0x27ef16);await httpPost(_0x510ab9,_0xc58cef);let _0x22b14b=httpResult;if(!_0x22b14b)return;_0x22b14b[_0x5a6f0e(0x108)]==!![]?console[_0x5a6f0e(0x11f)]('用户'+(userIdx+0x1)+_0x5a6f0e(0xda)+_0x22b14b[_0x5a6f0e(0xfb)][_0x5a6f0e(0xf7)]+_0x5a6f0e(0xd4)+_0x22b14b[_0x5a6f0e(0xfb)][_0x5a6f0e(0x119)]+'金币'):console[_0x5a6f0e(0x11f)]('用户'+(userIdx+0x1)+_0x5a6f0e(0x11a)+_0x22b14b[_0x5a6f0e(0x16b)]);}function populatePostUrl(_0xd2e0e6,_0x51dfe1){const _0x4197cf=_0x3bb297;let _0x853c6e=Math[_0x4197cf(0x116)](new Date()[_0x4197cf(0x166)]()/0x3e8),_0x564d77={'url':_0xd2e0e6,'headers':{'request_time':_0x853c6e,'Host':_0x4197cf(0x149),'device-model':_0x4197cf(0x150),'device-platform':_0x4197cf(0xf4),'Connection':_0x4197cf(0x158),'app-type':_0x4197cf(0x128)},'body':_0x51dfe1};return _0x564d77;}function populateGetUrl(_0x12eca0){const _0x57c225=_0x3bb297;let _0x4e6d12=Math[_0x57c225(0x116)](new Date()[_0x57c225(0x166)]()/0x3e8),_0x223a70={'url':_0x12eca0,'headers':{'request_time':_0x4e6d12,'Host':_0x57c225(0x149),'device-model':_0x57c225(0x150),'device-platform':_0x57c225(0xf4),'Connection':_0x57c225(0x158),'app-type':_0x57c225(0x128)}};return _0x223a70;}async function httpPost(_0x14c90c,_0x38613c){return httpResult=null,new Promise(_0x4ccc16=>{const _0x367499=_0x4bcb;$[_0x367499(0xd7)](_0x14c90c,async(_0x1f11a9,_0x368fd0,_0x5ab05d)=>{const _0x519ce5=_0x367499;try{if(_0x1f11a9)console[_0x519ce5(0x11f)](_0x38613c+_0x519ce5(0x117)),console[_0x519ce5(0x11f)](JSON[_0x519ce5(0x170)](_0x1f11a9)),$[_0x519ce5(0x17f)](_0x1f11a9);else{if(safeGet(_0x5ab05d)){httpResult=JSON[_0x519ce5(0xdd)](_0x5ab05d,_0x38613c);if(logDebug)console[_0x519ce5(0x11f)](httpResult);}}}catch(_0x4d29e7){$[_0x519ce5(0x17f)](_0x4d29e7,_0x368fd0);}finally{_0x4ccc16();}});});}async function httpGet(_0x19328,_0x5742b8){return httpResult=null,new Promise(_0x535004=>{const _0x37dc24=_0x4bcb;$[_0x37dc24(0x132)](_0x19328,async(_0x304183,_0x387da6,_0x109255)=>{const _0x43b56d=_0x37dc24;try{if(_0x304183)console[_0x43b56d(0x11f)](_0x5742b8+_0x43b56d(0xb6)),console[_0x43b56d(0x11f)](JSON[_0x43b56d(0x170)](_0x304183)),$[_0x43b56d(0x17f)](_0x304183);else{if(safeGet(_0x109255,_0x5742b8)){httpResult=JSON[_0x43b56d(0xdd)](_0x109255);if(logDebug)console[_0x43b56d(0x11f)](httpResult);}}}catch(_0x36a331){$[_0x43b56d(0x17f)](_0x36a331,_0x387da6);}finally{_0x535004();}});});}function safeGet(_0x551b2f,_0x4ac4ed){const _0x175eb9=_0x3bb297;try{if(typeof JSON[_0x175eb9(0xdd)](_0x551b2f)==_0x175eb9(0xef))return!![];else console[_0x175eb9(0x11f)](_0x175eb9(0x14f)+_0x4ac4ed+_0x175eb9(0x139)),console[_0x175eb9(0x11f)](_0x551b2f);}catch(_0x16de63){return console[_0x175eb9(0x11f)](_0x16de63),console[_0x175eb9(0x11f)](_0x175eb9(0x14f)+_0x4ac4ed+_0x175eb9(0x13f)),![];}}function printCaller(){const _0x3fab14=_0x3bb297;return new Error()[_0x3fab14(0xc8)][_0x3fab14(0x12b)]('\x0a')[0x2][_0x3fab14(0x155)]()[_0x3fab14(0x12b)]('\x20')[0x1];}function myFuncB(_0xd0e5e9){const _0x1c263f=_0x3bb297;var _0x44d49c=CryptoJS[_0x1c263f(0x104)][_0x1c263f(0x12c)][_0x1c263f(0xdd)](key),_0x546fbe=CryptoJS[_0x1c263f(0x104)][_0x1c263f(0x12c)][_0x1c263f(0xdd)](key),_0x4024c2=CryptoJS[_0x1c263f(0x104)][_0x1c263f(0x12c)][_0x1c263f(0xdd)](_0xd0e5e9);return encrypted=CryptoJS[_0x1c263f(0xf0)][_0x1c263f(0x14a)](_0x4024c2,_0x44d49c,{'iv':_0x546fbe,'mode':CryptoJS[_0x1c263f(0x145)][_0x1c263f(0xdf)],'padding':CryptoJS[_0x1c263f(0x114)][_0x1c263f(0x15f)]}),encrypted[_0x1c263f(0xdb)][_0x1c263f(0xe2)]();}function myFuncA(_0x46eedc){const _0x1bf9b4=_0x3bb297;var _0x57fc24=CryptoJS[_0x1bf9b4(0x104)][_0x1bf9b4(0x12c)][_0x1bf9b4(0xdd)](key),_0x47c01f=CryptoJS[_0x1bf9b4(0x104)][_0x1bf9b4(0x12c)][_0x1bf9b4(0xdd)](key),_0x4c2dbd=CryptoJS[_0x1bf9b4(0xf0)][_0x1bf9b4(0x165)]({'ciphertext':CryptoJS[_0x1bf9b4(0x104)][_0x1bf9b4(0x101)][_0x1bf9b4(0xdd)](_0x46eedc)},_0x57fc24,{'iv':_0x47c01f,'mode':CryptoJS[_0x1bf9b4(0x145)][_0x1bf9b4(0xdf)],'padding':CryptoJS[_0x1bf9b4(0x114)][_0x1bf9b4(0x15f)]});return _0x4c2dbd[_0x1bf9b4(0xe2)](CryptoJS[_0x1bf9b4(0x104)][_0x1bf9b4(0x12c)]);}function randomString(_0x3dda67=0xc){const _0x8a6d6b=_0x3bb297;let _0x443678=_0x8a6d6b(0xea),_0x3d90f5=_0x443678[_0x8a6d6b(0xe9)],_0x1bdfe3='';for(i=0x0;i<_0x3dda67;i++){_0x1bdfe3+=_0x443678[_0x8a6d6b(0xca)](Math[_0x8a6d6b(0x116)](Math[_0x8a6d6b(0xfc)]()*_0x3d90f5));}return _0x1bdfe3;}function Env(_0x5428ce,_0xc6ef39){const _0x4a25b6=_0x3bb297;class _0x5e3355{constructor(_0x1e9b6f){const _0x28145e=_0x4bcb;this[_0x28145e(0xcc)]=_0x1e9b6f;}[_0x4a25b6(0x152)](_0x493d74,_0x25f7db=_0x4a25b6(0x122)){const _0x133df8=_0x4a25b6;_0x493d74=_0x133df8(0x12d)==typeof _0x493d74?{'url':_0x493d74}:_0x493d74;let _0x5738c6=this[_0x133df8(0x132)];return _0x133df8(0xf2)===_0x25f7db&&(_0x5738c6=this[_0x133df8(0xd7)]),new Promise((_0x40dd0c,_0x356bdd)=>{const _0x1d7fd2=_0x133df8;_0x5738c6[_0x1d7fd2(0xf5)](this,_0x493d74,(_0x471cc5,_0x108195,_0x7c853e)=>{_0x471cc5?_0x356bdd(_0x471cc5):_0x40dd0c(_0x108195);});});}[_0x4a25b6(0x132)](_0x242f25){const _0xef83e5=_0x4a25b6;return this[_0xef83e5(0x152)][_0xef83e5(0xf5)](this[_0xef83e5(0xcc)],_0x242f25);}[_0x4a25b6(0xd7)](_0x257092){const _0x567fa4=_0x4a25b6;return this[_0x567fa4(0x152)][_0x567fa4(0xf5)](this[_0x567fa4(0xcc)],_0x257092,_0x567fa4(0xf2));}}return new class{constructor(_0x597ea6,_0x70ae4e){const _0x4fe54c=_0x4a25b6;this[_0x4fe54c(0x12e)]=_0x597ea6,this[_0x4fe54c(0x162)]=new _0x5e3355(this),this[_0x4fe54c(0xe8)]=null,this[_0x4fe54c(0xcd)]=_0x4fe54c(0x14d),this[_0x4fe54c(0x15b)]=[],this[_0x4fe54c(0x129)]=!0x1,this[_0x4fe54c(0x17c)]=!0x1,this[_0x4fe54c(0xd5)]='\x0a',this[_0x4fe54c(0x181)]=new Date()[_0x4fe54c(0x166)](),Object[_0x4fe54c(0xc4)](this,_0x70ae4e),this[_0x4fe54c(0x11f)]('','🔔'+this[_0x4fe54c(0x12e)]+_0x4fe54c(0x109));}[_0x4a25b6(0x173)](){const _0x25faf8=_0x4a25b6;return _0x25faf8(0x167)!=typeof module&&!!module[_0x25faf8(0x11d)];}[_0x4a25b6(0xdc)](){const _0x2d6087=_0x4a25b6;return _0x2d6087(0x167)!=typeof $task;}[_0x4a25b6(0x182)](){const _0x44b0d7=_0x4a25b6;return _0x44b0d7(0x167)!=typeof $httpClient&&_0x44b0d7(0x167)==typeof $loon;}[_0x4a25b6(0x161)](){const _0x91d7c9=_0x4a25b6;return _0x91d7c9(0x167)!=typeof $loon;}[_0x4a25b6(0x164)](_0x5c7fe1,_0x44c78a=null){const _0x392d17=_0x4a25b6;try{return JSON[_0x392d17(0xdd)](_0x5c7fe1);}catch{return _0x44c78a;}}[_0x4a25b6(0x126)](_0x1048b9,_0x2bf842=null){const _0x3f13d5=_0x4a25b6;try{return JSON[_0x3f13d5(0x170)](_0x1048b9);}catch{return _0x2bf842;}}[_0x4a25b6(0x10c)](_0x2b96c5,_0x55981d){const _0x2a15ae=_0x4a25b6;let _0x4ba0b5=_0x55981d;const _0x499e7f=this[_0x2a15ae(0xc9)](_0x2b96c5);if(_0x499e7f)try{_0x4ba0b5=JSON[_0x2a15ae(0xdd)](this[_0x2a15ae(0xc9)](_0x2b96c5));}catch{}return _0x4ba0b5;}[_0x4a25b6(0x16a)](_0x5c6c75,_0x2fbd28){const _0x219ea5=_0x4a25b6;try{return this[_0x219ea5(0xc1)](JSON[_0x219ea5(0x170)](_0x5c6c75),_0x2fbd28);}catch{return!0x1;}}[_0x4a25b6(0x17b)](_0x5cc939){return new Promise(_0x117900=>{const _0x2b438d=_0x4bcb;this[_0x2b438d(0x132)]({'url':_0x5cc939},(_0x4eaef5,_0x8d818b,_0x1e1133)=>_0x117900(_0x1e1133));});}[_0x4a25b6(0x160)](_0x48bad3,_0x52fae5){const _0x196801=_0x4a25b6;return new Promise(_0x303993=>{const _0x554481=_0x4bcb;let _0x945646=this[_0x554481(0xc9)](_0x554481(0xe0));_0x945646=_0x945646?_0x945646[_0x554481(0xd6)](/\n/g,'')[_0x554481(0x155)]():_0x945646;let _0x89623=this[_0x554481(0xc9)](_0x554481(0x156));_0x89623=_0x89623?0x1*_0x89623:0x14,_0x89623=_0x52fae5&&_0x52fae5[_0x554481(0x130)]?_0x52fae5[_0x554481(0x130)]:_0x89623;const [_0x54a198,_0x1284e4]=_0x945646[_0x554481(0x12b)]('@'),_0x1caaff={'url':_0x554481(0x106)+_0x1284e4+_0x554481(0x147),'body':{'script_text':_0x48bad3,'mock_type':_0x554481(0xc6),'timeout':_0x89623},'headers':{'X-Key':_0x54a198,'Accept':_0x554481(0x135)}};this[_0x554481(0xd7)](_0x1caaff,(_0xbac6d6,_0x54e013,_0x30c597)=>_0x303993(_0x30c597));})[_0x196801(0x10b)](_0x751e61=>this[_0x196801(0x17f)](_0x751e61));}[_0x4a25b6(0xec)](){const _0x52bc2c=_0x4a25b6;if(!this[_0x52bc2c(0x173)]())return{};{this['fs']=this['fs']?this['fs']:require('fs'),this[_0x52bc2c(0xba)]=this[_0x52bc2c(0xba)]?this[_0x52bc2c(0xba)]:require(_0x52bc2c(0xba));const _0x2d0ed8=this[_0x52bc2c(0xba)][_0x52bc2c(0x10a)](this[_0x52bc2c(0xcd)]),_0x533a59=this[_0x52bc2c(0xba)][_0x52bc2c(0x10a)](process[_0x52bc2c(0xd3)](),this[_0x52bc2c(0xcd)]),_0x182ba6=this['fs'][_0x52bc2c(0x177)](_0x2d0ed8),_0x455380=!_0x182ba6&&this['fs'][_0x52bc2c(0x177)](_0x533a59);if(!_0x182ba6&&!_0x455380)return{};{const _0x5c3632=_0x182ba6?_0x2d0ed8:_0x533a59;try{return JSON[_0x52bc2c(0xdd)](this['fs'][_0x52bc2c(0x120)](_0x5c3632));}catch(_0x1623f4){return{};}}}}[_0x4a25b6(0x13a)](){const _0x3fa449=_0x4a25b6;if(this[_0x3fa449(0x173)]()){this['fs']=this['fs']?this['fs']:require('fs'),this[_0x3fa449(0xba)]=this[_0x3fa449(0xba)]?this[_0x3fa449(0xba)]:require(_0x3fa449(0xba));const _0x227e05=this[_0x3fa449(0xba)][_0x3fa449(0x10a)](this[_0x3fa449(0xcd)]),_0x32b75b=this[_0x3fa449(0xba)][_0x3fa449(0x10a)](process[_0x3fa449(0xd3)](),this[_0x3fa449(0xcd)]),_0x7e6193=this['fs'][_0x3fa449(0x177)](_0x227e05),_0x134602=!_0x7e6193&&this['fs'][_0x3fa449(0x177)](_0x32b75b),_0x2fdd31=JSON[_0x3fa449(0x170)](this[_0x3fa449(0xe8)]);_0x7e6193?this['fs'][_0x3fa449(0xb0)](_0x227e05,_0x2fdd31):_0x134602?this['fs'][_0x3fa449(0xb0)](_0x32b75b,_0x2fdd31):this['fs'][_0x3fa449(0xb0)](_0x227e05,_0x2fdd31);}}[_0x4a25b6(0x133)](_0x598e56,_0x351162,_0x4218ea){const _0x4a8e98=_0x4a25b6,_0x5f1f84=_0x351162[_0x4a8e98(0xd6)](/\[(\d+)\]/g,_0x4a8e98(0xe3))[_0x4a8e98(0x12b)]('.');let _0x2c6361=_0x598e56;for(const _0x4d0834 of _0x5f1f84)if(_0x2c6361=Object(_0x2c6361)[_0x4d0834],void 0x0===_0x2c6361)return _0x4218ea;return _0x2c6361;}[_0x4a25b6(0x16d)](_0x1eb8ff,_0x3ce9e5,_0xfca90e){const _0x40e4a6=_0x4a25b6;return Object(_0x1eb8ff)!==_0x1eb8ff?_0x1eb8ff:(Array[_0x40e4a6(0x137)](_0x3ce9e5)||(_0x3ce9e5=_0x3ce9e5[_0x40e4a6(0xe2)]()[_0x40e4a6(0x142)](/[^.[\]]+/g)||[]),_0x3ce9e5[_0x40e4a6(0xc0)](0x0,-0x1)[_0x40e4a6(0x13c)]((_0x469336,_0x3c70de,_0x375877)=>Object(_0x469336[_0x3c70de])===_0x469336[_0x3c70de]?_0x469336[_0x3c70de]:_0x469336[_0x3c70de]=Math[_0x40e4a6(0xd0)](_0x3ce9e5[_0x375877+0x1])>>0x0==+_0x3ce9e5[_0x375877+0x1]?[]:{},_0x1eb8ff)[_0x3ce9e5[_0x3ce9e5[_0x40e4a6(0xe9)]-0x1]]=_0xfca90e,_0x1eb8ff);}[_0x4a25b6(0xc9)](_0x187e70){const _0x2873fb=_0x4a25b6;let _0x5a1cd4=this[_0x2873fb(0x11c)](_0x187e70);if(/^@/[_0x2873fb(0xb9)](_0x187e70)){const [,_0x35856a,_0x3ea7be]=/^@(.*?)\.(.*?)$/[_0x2873fb(0x172)](_0x187e70),_0x3e1b0a=_0x35856a?this[_0x2873fb(0x11c)](_0x35856a):'';if(_0x3e1b0a)try{const _0x2f2138=JSON[_0x2873fb(0xdd)](_0x3e1b0a);_0x5a1cd4=_0x2f2138?this[_0x2873fb(0x133)](_0x2f2138,_0x3ea7be,''):_0x5a1cd4;}catch(_0x40985b){_0x5a1cd4='';}}return _0x5a1cd4;}[_0x4a25b6(0xc1)](_0xd568dc,_0x370a20){const _0x2e21c9=_0x4a25b6;let _0x569aba=!0x1;if(/^@/[_0x2e21c9(0xb9)](_0x370a20)){const [,_0x21d0e9,_0x5d20e4]=/^@(.*?)\.(.*?)$/[_0x2e21c9(0x172)](_0x370a20),_0x2a9537=this[_0x2e21c9(0x11c)](_0x21d0e9),_0x1e9def=_0x21d0e9?_0x2e21c9(0x179)===_0x2a9537?null:_0x2a9537||'{}':'{}';try{const _0xe756d8=JSON[_0x2e21c9(0xdd)](_0x1e9def);this[_0x2e21c9(0x16d)](_0xe756d8,_0x5d20e4,_0xd568dc),_0x569aba=this[_0x2e21c9(0x17e)](JSON[_0x2e21c9(0x170)](_0xe756d8),_0x21d0e9);}catch(_0x185b4a){const _0x3972={};this[_0x2e21c9(0x16d)](_0x3972,_0x5d20e4,_0xd568dc),_0x569aba=this[_0x2e21c9(0x17e)](JSON[_0x2e21c9(0x170)](_0x3972),_0x21d0e9);}}else _0x569aba=this[_0x2e21c9(0x17e)](_0xd568dc,_0x370a20);return _0x569aba;}[_0x4a25b6(0x11c)](_0x2dd754){const _0x1fb827=_0x4a25b6;return this[_0x1fb827(0x182)]()||this[_0x1fb827(0x161)]()?$persistentStore[_0x1fb827(0x111)](_0x2dd754):this[_0x1fb827(0xdc)]()?$prefs[_0x1fb827(0x10e)](_0x2dd754):this[_0x1fb827(0x173)]()?(this[_0x1fb827(0xe8)]=this[_0x1fb827(0xec)](),this[_0x1fb827(0xe8)][_0x2dd754]):this[_0x1fb827(0xe8)]&&this[_0x1fb827(0xe8)][_0x2dd754]||null;}[_0x4a25b6(0x17e)](_0xd600aa,_0x2dc734){const _0x29215a=_0x4a25b6;return this[_0x29215a(0x182)]()||this[_0x29215a(0x161)]()?$persistentStore[_0x29215a(0x13d)](_0xd600aa,_0x2dc734):this[_0x29215a(0xdc)]()?$prefs[_0x29215a(0xb7)](_0xd600aa,_0x2dc734):this[_0x29215a(0x173)]()?(this[_0x29215a(0xe8)]=this[_0x29215a(0xec)](),this[_0x29215a(0xe8)][_0x2dc734]=_0xd600aa,this[_0x29215a(0x13a)](),!0x0):this[_0x29215a(0xe8)]&&this[_0x29215a(0xe8)][_0x2dc734]||null;}[_0x4a25b6(0x136)](_0x18c76a){const _0x5ac83f=_0x4a25b6;this[_0x5ac83f(0x169)]=this[_0x5ac83f(0x169)]?this[_0x5ac83f(0x169)]:require(_0x5ac83f(0x169)),this[_0x5ac83f(0x140)]=this[_0x5ac83f(0x140)]?this[_0x5ac83f(0x140)]:require(_0x5ac83f(0x10d)),this[_0x5ac83f(0x174)]=this[_0x5ac83f(0x174)]?this[_0x5ac83f(0x174)]:new this[(_0x5ac83f(0x140))][(_0x5ac83f(0x14e))](),_0x18c76a&&(_0x18c76a[_0x5ac83f(0x12f)]=_0x18c76a[_0x5ac83f(0x12f)]?_0x18c76a[_0x5ac83f(0x12f)]:{},void 0x0===_0x18c76a[_0x5ac83f(0x12f)][_0x5ac83f(0x180)]&&void 0x0===_0x18c76a[_0x5ac83f(0x10f)]&&(_0x18c76a[_0x5ac83f(0x10f)]=this[_0x5ac83f(0x174)]));}[_0x4a25b6(0x132)](_0x501eec,_0x36c90b=()=>{}){const _0x24f97f=_0x4a25b6;_0x501eec[_0x24f97f(0x12f)]&&(delete _0x501eec[_0x24f97f(0x12f)][_0x24f97f(0xbd)],delete _0x501eec[_0x24f97f(0x12f)][_0x24f97f(0xc5)]),this[_0x24f97f(0x182)]()||this[_0x24f97f(0x161)]()?(this[_0x24f97f(0x182)]()&&this[_0x24f97f(0x17c)]&&(_0x501eec[_0x24f97f(0x12f)]=_0x501eec[_0x24f97f(0x12f)]||{},Object[_0x24f97f(0xc4)](_0x501eec[_0x24f97f(0x12f)],{'X-Surge-Skip-Scripting':!0x1})),$httpClient[_0x24f97f(0x132)](_0x501eec,(_0x5980df,_0x3ece6b,_0x399074)=>{const _0x5090c9=_0x24f97f;!_0x5980df&&_0x3ece6b&&(_0x3ece6b[_0x5090c9(0x151)]=_0x399074,_0x3ece6b[_0x5090c9(0x107)]=_0x3ece6b[_0x5090c9(0xae)]),_0x36c90b(_0x5980df,_0x3ece6b,_0x399074);})):this[_0x24f97f(0xdc)]()?(this[_0x24f97f(0x17c)]&&(_0x501eec[_0x24f97f(0xf8)]=_0x501eec[_0x24f97f(0xf8)]||{},Object[_0x24f97f(0xc4)](_0x501eec[_0x24f97f(0xf8)],{'hints':!0x1})),$task[_0x24f97f(0x11e)](_0x501eec)[_0x24f97f(0xff)](_0x2d709d=>{const {statusCode:_0x180d15,statusCode:_0x16342c,headers:_0x2f02be,body:_0x3c53c1}=_0x2d709d;_0x36c90b(null,{'status':_0x180d15,'statusCode':_0x16342c,'headers':_0x2f02be,'body':_0x3c53c1},_0x3c53c1);},_0x211c5d=>_0x36c90b(_0x211c5d))):this[_0x24f97f(0x173)]()&&(this[_0x24f97f(0x136)](_0x501eec),this[_0x24f97f(0x169)](_0x501eec)['on'](_0x24f97f(0x127),(_0x42d606,_0x46fde9)=>{const _0x11ae55=_0x24f97f;try{if(_0x42d606[_0x11ae55(0x12f)][_0x11ae55(0xb5)]){const _0x15253f=_0x42d606[_0x11ae55(0x12f)][_0x11ae55(0xb5)][_0x11ae55(0x148)](this[_0x11ae55(0x140)][_0x11ae55(0x180)][_0x11ae55(0xdd)])[_0x11ae55(0xe2)]();this[_0x11ae55(0x174)][_0x11ae55(0xf3)](_0x15253f,null),_0x46fde9[_0x11ae55(0x10f)]=this[_0x11ae55(0x174)];}}catch(_0x4d6964){this[_0x11ae55(0x17f)](_0x4d6964);}})[_0x24f97f(0xff)](_0x4455c0=>{const {statusCode:_0x1540de,statusCode:_0x2255ac,headers:_0x3615a3,body:_0x5a36ed}=_0x4455c0;_0x36c90b(null,{'status':_0x1540de,'statusCode':_0x2255ac,'headers':_0x3615a3,'body':_0x5a36ed},_0x5a36ed);},_0x5ea631=>{const _0x3d93bf=_0x24f97f,{message:_0x2661fa,response:_0x94b287}=_0x5ea631;_0x36c90b(_0x2661fa,_0x94b287,_0x94b287&&_0x94b287[_0x3d93bf(0x151)]);}));}[_0x4a25b6(0xd7)](_0x492f99,_0xc97b92=()=>{}){const _0x2aa55d=_0x4a25b6;if(_0x492f99[_0x2aa55d(0x151)]&&_0x492f99[_0x2aa55d(0x12f)]&&!_0x492f99[_0x2aa55d(0x12f)][_0x2aa55d(0xbd)]&&(_0x492f99[_0x2aa55d(0x12f)][_0x2aa55d(0xbd)]=_0x2aa55d(0xce)),_0x492f99[_0x2aa55d(0x12f)]&&delete _0x492f99[_0x2aa55d(0x12f)][_0x2aa55d(0xc5)],this[_0x2aa55d(0x182)]()||this[_0x2aa55d(0x161)]())this[_0x2aa55d(0x182)]()&&this[_0x2aa55d(0x17c)]&&(_0x492f99[_0x2aa55d(0x12f)]=_0x492f99[_0x2aa55d(0x12f)]||{},Object[_0x2aa55d(0xc4)](_0x492f99[_0x2aa55d(0x12f)],{'X-Surge-Skip-Scripting':!0x1})),$httpClient[_0x2aa55d(0xd7)](_0x492f99,(_0x95bfa5,_0x3b5d39,_0x96ffef)=>{const _0x2cf8d5=_0x2aa55d;!_0x95bfa5&&_0x3b5d39&&(_0x3b5d39[_0x2cf8d5(0x151)]=_0x96ffef,_0x3b5d39[_0x2cf8d5(0x107)]=_0x3b5d39[_0x2cf8d5(0xae)]),_0xc97b92(_0x95bfa5,_0x3b5d39,_0x96ffef);});else{if(this[_0x2aa55d(0xdc)]())_0x492f99[_0x2aa55d(0x125)]=_0x2aa55d(0xf2),this[_0x2aa55d(0x17c)]&&(_0x492f99[_0x2aa55d(0xf8)]=_0x492f99[_0x2aa55d(0xf8)]||{},Object[_0x2aa55d(0xc4)](_0x492f99[_0x2aa55d(0xf8)],{'hints':!0x1})),$task[_0x2aa55d(0x11e)](_0x492f99)[_0x2aa55d(0xff)](_0x34b8ac=>{const {statusCode:_0x274d4e,statusCode:_0x35d638,headers:_0x3e4041,body:_0x501505}=_0x34b8ac;_0xc97b92(null,{'status':_0x274d4e,'statusCode':_0x35d638,'headers':_0x3e4041,'body':_0x501505},_0x501505);},_0x12af12=>_0xc97b92(_0x12af12));else{if(this[_0x2aa55d(0x173)]()){this[_0x2aa55d(0x136)](_0x492f99);const {url:_0x271905,..._0x204be7}=_0x492f99;this[_0x2aa55d(0x169)][_0x2aa55d(0xd7)](_0x271905,_0x204be7)[_0x2aa55d(0xff)](_0x4a45b7=>{const {statusCode:_0x32d033,statusCode:_0x41aaf8,headers:_0x198f58,body:_0x56dcad}=_0x4a45b7;_0xc97b92(null,{'status':_0x32d033,'statusCode':_0x41aaf8,'headers':_0x198f58,'body':_0x56dcad},_0x56dcad);},_0x54e6e0=>{const _0x5888b1=_0x2aa55d,{message:_0x46f65a,response:_0xe0770e}=_0x54e6e0;_0xc97b92(_0x46f65a,_0xe0770e,_0xe0770e&&_0xe0770e[_0x5888b1(0x151)]);});}}}}[_0x4a25b6(0xaf)](_0x36c818){const _0x126070=_0x4a25b6;let _0x8f4f35={'M+':new Date()[_0x126070(0x16e)]()+0x1,'d+':new Date()[_0x126070(0x134)](),'H+':new Date()[_0x126070(0xb8)](),'m+':new Date()[_0x126070(0xf9)](),'s+':new Date()[_0x126070(0x154)](),'q+':Math[_0x126070(0x116)]((new Date()[_0x126070(0x16e)]()+0x3)/0x3),'S':new Date()[_0x126070(0xcf)]()};/(y+)/[_0x126070(0xb9)](_0x36c818)&&(_0x36c818=_0x36c818[_0x126070(0xd6)](RegExp['$1'],(new Date()[_0x126070(0x183)]()+'')[_0x126070(0x157)](0x4-RegExp['$1'][_0x126070(0xe9)])));for(let _0x1b6565 in _0x8f4f35)new RegExp('('+_0x1b6565+')')[_0x126070(0xb9)](_0x36c818)&&(_0x36c818=_0x36c818[_0x126070(0xd6)](RegExp['$1'],0x1==RegExp['$1'][_0x126070(0xe9)]?_0x8f4f35[_0x1b6565]:('00'+_0x8f4f35[_0x1b6565])[_0x126070(0x157)]((''+_0x8f4f35[_0x1b6565])[_0x126070(0xe9)])));return _0x36c818;}[_0x4a25b6(0x15e)](_0x3eb96b=_0x5428ce,_0x29a546='',_0x5d76ab='',_0x372744){const _0x42316a=_0x4a25b6,_0x15b1b6=_0x31eb2b=>{const _0x4e2e73=_0x4bcb;if(!_0x31eb2b)return _0x31eb2b;if(_0x4e2e73(0x12d)==typeof _0x31eb2b)return this[_0x4e2e73(0x161)]()?_0x31eb2b:this[_0x4e2e73(0xdc)]()?{'open-url':_0x31eb2b}:this[_0x4e2e73(0x182)]()?{'url':_0x31eb2b}:void 0x0;if(_0x4e2e73(0xef)==typeof _0x31eb2b){if(this[_0x4e2e73(0x161)]()){let _0x57cd14=_0x31eb2b[_0x4e2e73(0x115)]||_0x31eb2b[_0x4e2e73(0x15c)]||_0x31eb2b[_0x4e2e73(0x17d)],_0x41fcc7=_0x31eb2b[_0x4e2e73(0xeb)]||_0x31eb2b[_0x4e2e73(0x178)];return{'openUrl':_0x57cd14,'mediaUrl':_0x41fcc7};}if(this[_0x4e2e73(0xdc)]()){let _0x3e874a=_0x31eb2b[_0x4e2e73(0x17d)]||_0x31eb2b[_0x4e2e73(0x15c)]||_0x31eb2b[_0x4e2e73(0x115)],_0x37b72e=_0x31eb2b[_0x4e2e73(0x178)]||_0x31eb2b[_0x4e2e73(0xeb)];return{'open-url':_0x3e874a,'media-url':_0x37b72e};}if(this[_0x4e2e73(0x182)]()){let _0x5ee7c3=_0x31eb2b[_0x4e2e73(0x15c)]||_0x31eb2b[_0x4e2e73(0x115)]||_0x31eb2b[_0x4e2e73(0x17d)];return{'url':_0x5ee7c3};}}};this[_0x42316a(0x129)]||(this[_0x42316a(0x182)]()||this[_0x42316a(0x161)]()?$notification[_0x42316a(0xd7)](_0x3eb96b,_0x29a546,_0x5d76ab,_0x15b1b6(_0x372744)):this[_0x42316a(0xdc)]()&&$notify(_0x3eb96b,_0x29a546,_0x5d76ab,_0x15b1b6(_0x372744)));let _0x14c0dc=['',_0x42316a(0x16c)];_0x14c0dc[_0x42316a(0x112)](_0x3eb96b),_0x29a546&&_0x14c0dc[_0x42316a(0x112)](_0x29a546),_0x5d76ab&&_0x14c0dc[_0x42316a(0x112)](_0x5d76ab),console[_0x42316a(0x11f)](_0x14c0dc[_0x42316a(0xed)]('\x0a')),this[_0x42316a(0x15b)]=this[_0x42316a(0x15b)][_0x42316a(0xc2)](_0x14c0dc);}[_0x4a25b6(0x11f)](..._0x541191){const _0x737707=_0x4a25b6;_0x541191[_0x737707(0xe9)]>0x0&&(this[_0x737707(0x15b)]=[...this[_0x737707(0x15b)],..._0x541191]),console[_0x737707(0x11f)](_0x541191[_0x737707(0xed)](this[_0x737707(0xd5)]));}[_0x4a25b6(0x17f)](_0x8aca1,_0xcffa5a){const _0xb7a115=_0x4a25b6,_0x399903=!this[_0xb7a115(0x182)]()&&!this[_0xb7a115(0xdc)]()&&!this[_0xb7a115(0x161)]();_0x399903?this[_0xb7a115(0x11f)]('','❗️'+this[_0xb7a115(0x12e)]+_0xb7a115(0x105),_0x8aca1[_0xb7a115(0xc8)]):this[_0xb7a115(0x11f)]('','❗️'+this[_0xb7a115(0x12e)]+_0xb7a115(0x105),_0x8aca1);}[_0x4a25b6(0x121)](_0x113a2e){return new Promise(_0x561c59=>setTimeout(_0x561c59,_0x113a2e));}[_0x4a25b6(0x168)](_0x40c7d6={}){const _0xb9b89d=_0x4a25b6,_0x4539d1=new Date()[_0xb9b89d(0x166)](),_0x5261cd=(_0x4539d1-this[_0xb9b89d(0x181)])/0x3e8;this[_0xb9b89d(0x11f)]('','🔔'+this[_0xb9b89d(0x12e)]+_0xb9b89d(0xb3)+_0x5261cd+'\x20秒'),this[_0xb9b89d(0x11f)](),(this[_0xb9b89d(0x182)]()||this[_0xb9b89d(0xdc)]()||this[_0xb9b89d(0x161)]())&&$done(_0x40c7d6);}}(_0x5428ce,_0xc6ef39);}
