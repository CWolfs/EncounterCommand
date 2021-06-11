(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{152:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"rightToc",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"default",(function(){return c}));var n=a(2),i=a(6),r=(a(0),a(251)),l={id:"release-1.2.0",title:"Release v1.2.0",author:"Richard 'CWolf' Griffiths",author_title:"Developer",author_url:"https://github.com/cwolfs",author_image_url:"https://avatars0.githubusercontent.com/u/7622361",tags:["changelog","release","v1.2.0"]},o=[{value:"Minor Features",id:"minor-features",children:[]},{value:"Improvements",id:"improvements",children:[]},{value:"Bug Fixes",id:"bug-fixes",children:[]},{value:"Deprecations",id:"deprecations",children:[]},{value:"Upgrade Instructions",id:"upgrade-instructions",children:[]}],s={permalink:"/blog/release-1.2.0",source:"@site/blog\\2021-06-11-release-1.2.0.md",description:"This is the first release after my break. This fixes a few issues that have been hanging over me since I was away.",date:"2021-06-11T00:00:00.000Z",tags:[{label:"changelog",permalink:"/blog/tags/changelog"},{label:"release",permalink:"/blog/tags/release"},{label:"v1.2.0",permalink:"/blog/tags/v-1-2-0"}],title:"Release v1.2.0",prevItem:{title:"I'm Back",permalink:"/blog/a-return"},nextItem:{title:"Release v1.1.3",permalink:"/blog/release-1.1.3"}},b={rightToc:o,metadata:s};function c(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This is the first release after my break. This fixes a few issues that have been hanging over me since I was away."),Object(r.b)("p",null,"This release fixes some annoying broken functionality such as MC Flashpoint support, adds MC Story support, adds improvements and fixes various bugs."),Object(r.b)("h2",{id:"minor-features"},"Minor Features"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/413"}),"Bigger Drops: Support extra player lances in Story & Restoration contracts"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"A new ",Object(r.b)("inlineCode",{parentName:"li"},"settings.json")," property called ",Object(r.b)("inlineCode",{parentName:"li"},"EnableAdditionalPlayerMechsForStory")," which controls this behaviour"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/428"}),"Story Support: Support the full set of MC features in Story & Restoration contracts"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"A new ",Object(r.b)("inlineCode",{parentName:"li"},"settings.json")," property called ",Object(r.b)("inlineCode",{parentName:"li"},"EnableStoryOverrides")," exists. When this is enabled MC will look into each ",Object(r.b)("inlineCode",{parentName:"li"},"settings.json")," feature section for the ",Object(r.b)("inlineCode",{parentName:"li"},"EnableForStory")," property to decide if a feature should be running in Story & Restoration contracts"),Object(r.b)("li",{parentName:"ul"},"Incorporated a fix by @mcb5637. Thanks."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Using these features will severly unbalance the Story and I will not provide support"))))),Object(r.b)("h2",{id:"improvements"},"Improvements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/432"}),"Blackout: Changed the 'Trap' event in Phase 1 to reduce evasion by 2 instead of 3"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Players take less of an evasion hit from the trap"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/430"}),"Better Skirmish Control"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"You can now use MC with Skirmish without the debug / quick skirmish rules (this means no longer spawning right next to each other)"),Object(r.b)("li",{parentName:"ul"},"A new ",Object(r.b)("inlineCode",{parentName:"li"},"settings.json")," property called ",Object(r.b)("inlineCode",{parentName:"li"},"EnableSkirmishMode")," which controls if this MC Skirmish ruleset is running"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"DebugSkirmishMode")," still exists and will spawn you next to the enemy for tests. It will also show the 'Quick Skirmish' button if enabled, and takes precedent over ",Object(r.b)("inlineCode",{parentName:"li"},"EnableSkirmishMode")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/434"}),"Vanilla: Support Story Flashpoints to be failable"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Previously when failing a Story Flashpoint you would see the 'Restart', 'Load Save' or 'Exit Game' menu"),Object(r.b)("li",{parentName:"ul"},"You now can safely fail the contract"),Object(r.b)("li",{parentName:"ul"},"If for whatever reason you don't want this behaviour then you can use the setting ",Object(r.b)("inlineCode",{parentName:"li"},'"NeverFailSimGameInFlashpoints": false')," in the ",Object(r.b)("inlineCode",{parentName:"li"},"settings.json"))))),Object(r.b)("h2",{id:"bug-fixes"},"Bug Fixes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/419"}),"Flashpoints: Fixed Flashpoint support not working"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Fixed ",Object(r.b)("inlineCode",{parentName:"li"},"EnableAdditionalPlayerMechsForFlashpoints")," not working at all"),Object(r.b)("li",{parentName:"ul"},"Fixed ",Object(r.b)("inlineCode",{parentName:"li"},"EnableFlashpointOverrides")," and the respective ",Object(r.b)("inlineCode",{parentName:"li"},"EnableForFlashpoints")," property not working at all"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"I'm aware of the workaround using contract-specific overrides and this is no longer needed to workaround this issue anymore")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/426"}),"Additional Lances: Fixed broken drop weight influence setting"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"The 'DropWeightInfluence` was broken and always thinking the player was dropping a lance heavier than the contract"),Object(r.b)("li",{parentName:"ul"},"This would effectively scale up the difficulty of the enemy Additional Lances dropping against you"),Object(r.b)("li",{parentName:"ul"},"Some modpacks were using a patched version of Mission Control I released to fix this issue since Sept 2020"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/435"}),"Vanilla: Fixed issue with certain contracts preventing the dropship UI appearing after failing them"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"This happened with a contract using ",Object(r.b)("inlineCode",{parentName:"li"},"Contract_IgnoreMissionResults")," in the ",Object(r.b)("inlineCode",{parentName:"li"},"OnContractFailureResults")," section"),Object(r.b)("li",{parentName:"ul"},"It would run vanilla code that was broken"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/425"}),"Infinite Loading: Fixed a rare issue where no suitable lance could be selected when loading a contract/combat"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Thanks for the fix @Haree78")))),Object(r.b)("h2",{id:"deprecations"},"Deprecations"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"EncounterRules.GetPlayerLanceChunkName()")," will be removed in the future. Use ",Object(r.b)("inlineCode",{parentName:"li"},"EncounterRules.GetPlayerLanceChunkGameObject(GameObject encounterLayerGo)")," instead"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"EncounterRules.GetPlayerLanceSpawnerName()")," will be removed in the future. Use ",Object(r.b)("inlineCode",{parentName:"li"},"EncounterRules.GetPlayerSpawnerGameObject(GameObject chunkPlayerLanceGo)")," instead")),Object(r.b)("h2",{id:"upgrade-instructions"},"Upgrade Instructions"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"If you're using MC without a modpack and none of your own changes, just delete the MC folder and move the new one into your mods folder"),Object(r.b)("li",{parentName:"ul"},"If you're using MC as part of a modpack, let the modpack authors update MC for you (using the below guide)"),Object(r.b)("li",{parentName:"ul"},"If you're using MC without a modpack but you've made some of your own changes to the configs, or you're a modpack author:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Copy into your ",Object(r.b)("inlineCode",{parentName:"li"},"Mods/MissionControl")," folder",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"MissionControl.dll")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"mod.json")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"contractTypeBuilds/Blackout/common.jsonc")),Object(r.b)("li",{parentName:"ul"},"Edit ",Object(r.b)("inlineCode",{parentName:"li"},"settings.json")," (and/or your ",Object(r.b)("inlineCode",{parentName:"li"},"settings.user.json")," / ",Object(r.b)("inlineCode",{parentName:"li"},"settings.modpack.json")," overrides) with the following:")))))),Object(r.b)("h4",{id:"add-enableskirmishmode-property-above-debugskirmishmode-and-set-to-true"},"Add ",Object(r.b)("inlineCode",{parentName:"h4"},"EnableSkirmishMode")," property above ",Object(r.b)("inlineCode",{parentName:"h4"},"DebugSkirmishMode")," and set to 'true'"),Object(r.b)("p",null,"Enables the new Skirmish encounter ruleset"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'"EnableSkirmishMode": true,\n')),Object(r.b)("h4",{id:"disable-debugskirmishmode-property"},"Disable ",Object(r.b)("inlineCode",{parentName:"h4"},"DebugSkirmishMode")," property"),Object(r.b)("p",null,"Disables the 'Quick Skirmish' button and disables the debug encounter ruleset that spawns you next to the enemy lance. Ideal use for this is for testing."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'"DebugSkirmishMode": false,\n')),Object(r.b)("h4",{id:"add-the-following-properties-after-enableadditionalplayermechsforflashpoints"},"Add the following properties after ",Object(r.b)("inlineCode",{parentName:"h4"},"EnableAdditionalPlayerMechsForFlashpoints")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'"NeverFailSimGameInFlashpoints": true,\n"EnableStoryOverrides": false,\n"EnableAdditionalPlayerMechsForStory": false,\n')),Object(r.b)("h4",{id:"add-enableforstory-in-every-feature-section-under-enableforflashpoints-property-and-set-to-false"},"Add ",Object(r.b)("inlineCode",{parentName:"h4"},"EnableForStory")," in every feature section under ",Object(r.b)("inlineCode",{parentName:"h4"},"EnableForFlashpoints")," property and set to 'false'"),Object(r.b)("p",null,"Do this for:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"RandomSpawns"),Object(r.b)("li",{parentName:"ul"},"HotDropProtection"),Object(r.b)("li",{parentName:"ul"},"AdditionalLances"),Object(r.b)("li",{parentName:"ul"},"ExtendedLances"),Object(r.b)("li",{parentName:"ul"},"ExtendedBoundaries"),Object(r.b)("li",{parentName:"ul"},"DynamicWithdraw")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'"EnableForStory": false,\n')))}c.isMDXComponent=!0},251:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return c}));var n=a(0),i=a.n(n),r=i.a.createContext({}),l=function(e){var t=i.a.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},o=function(e){var t=l(e.components);return i.a.createElement(r.Provider,{value:t},e.children)};var s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,b=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),c=l(a),u=n,p=c[o+"."+u]||c[u]||s[u]||r;return a?i.a.createElement(p,Object.assign({},{ref:t},b,{components:a})):i.a.createElement(p,Object.assign({},{ref:t},b))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<r;c++)l[c]=a[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);