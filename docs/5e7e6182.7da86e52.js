(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{153:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"rightToc",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"default",(function(){return u}));var n=a(2),l=a(6),r=(a(0),a(251)),b={id:"extended-lances",title:"Extended Lances"},i=[{value:"Settings Breakdown",id:"settings-breakdown",children:[{value:"Lance Sizes",id:"lance-sizes",children:[]},{value:"Lance Sizes Data",id:"lance-sizes-data",children:[]}]},{value:"Faction Ids",id:"faction-ids",children:[]}],c={id:"features/extended-lances",title:"Extended Lances",description:"Increase the sizes of lances where it makes sense. For the vanilla game this does nothing. If another mod is using Mission Control, then they can set Clan stars (5 mechs) or Comstar Demi-lances / Reinforced lances (6 mechs).",source:"@site/docs\\features\\extended-lances.md",permalink:"/docs/features/extended-lances",sidebar:"docs",previous:{title:"Encounter Rulesets",permalink:"/docs/features/encounter-rulesets"},next:{title:"Extended Boundaries",permalink:"/docs/features/extended-boundaries"}},o={rightToc:i,metadata:c};function u(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Increase the sizes of lances where it makes sense. For the vanilla game this does nothing. If another mod is using Mission Control, then they can set Clan stars (5 mechs) or Comstar Demi-lances / Reinforced lances (6 mechs)."),Object(r.b)("p",null,"This works for both vanilla spawn points for contract types and spawns created by Mission Control."),Object(r.b)("p",null,"Extended lances can change the lance size of vanilla lance spawns and ones created with Mission Control's ",Object(r.b)("inlineCode",{parentName:"p"},"Additional Lances")," feature."),Object(r.b)("h2",{id:"settings-breakdown"},"Settings Breakdown"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'"ExtendedLances": {\n  "Enable": true,\n  "EnableForFlashpoints": true,\n  "EnableForStory": false,\n  "Autofill": true,\n  "ExcludeContractTypes": ["SoloDuel", "DuoDuel"],\n  "SkipWhenTaggedWithAny": ["lance_type_solo"],\n  "SkipWhenTaggedWithAll": [],\n  "SkipWhenExcludeTagsContain": ["no_extended_lance"],\n  "LanceSizes": {\n    "5": [\n      {\n        "Faction": "AuriganRestoration",\n        "DifficultyMod": -1\n      },\n      {\n        "Faction": "TaurianConcordat",\n        "DifficultyMod": -2\n      }\n    ],\n    "6": [\n      {\n        "Faction": "Comstar",\n        "DifficultyMod": -4\n      }\n    ],\n  }\n}\n')),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Path"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required?"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Details"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Enable")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Should this feature be enabled or not?")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"EnableForFlashpoints")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Enable feature for Flashpoints if ",Object(r.b)("inlineCode",{parentName:"td"},"EnableFlashpointOverrides")," is ",Object(r.b)("inlineCode",{parentName:"td"},"true"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"EnableForStory")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Enable feature for Story if ",Object(r.b)("inlineCode",{parentName:"td"},"EnableStoryOverrides")," is ",Object(r.b)("inlineCode",{parentName:"td"},"true"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Autofill")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If ",Object(r.b)("inlineCode",{parentName:"td"},"true"),", EL will attempt to autofill a lance up to the lance size set below under ",Object(r.b)("inlineCode",{parentName:"td"},"LanceSizes"),". This is currently just a copy of the unit in the first lance slot")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SkipWhenTaggedWithAny"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},'["lance_type_solo"]')),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Skip if ANY of the set tags exist under a lance ",Object(r.b)("inlineCode",{parentName:"td"},"lanceTagSet")," in the contract override JSON being used")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SkipWhenTaggedWithAll"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"[]")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Skip if ALL of the set tags exist under a lance ",Object(r.b)("inlineCode",{parentName:"td"},"lanceTagSet")," in the contract override JSON being used")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SkipWhenExcludeTagsContain"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},'["no_extended_lance"]')),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Skip if ANY of the set tags exist under a lance ",Object(r.b)("inlineCode",{parentName:"td"},"lanceExcludedTagSet")," in the contract override JSON")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"LanceSizes")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sets which faction should have higher lance sizes. By default all faction lances are 4 units like vanilla.")))),Object(r.b)("h3",{id:"lance-sizes"},"Lance Sizes"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Path"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required?"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Details"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'Any string number above 4 (e.g. "5")'),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"See Table Below"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(r.b)("h3",{id:"lance-sizes-data"},"Lance Sizes Data"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Path"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required?"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Details"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Faction")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The faction short name is used to identify which faction should have the set number of units"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"DifficultyMod")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The difficulty modifier changes the lance selection criteria so a lower, or higher, difficulty lance is selected"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(r.b)("h2",{id:"faction-ids"},"Faction Ids"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"Faction")," name you use is taken from your ",Object(r.b)("inlineCode",{parentName:"p"},"BATTLETECH/BattleTech_Data/StreamingAssets/data/enums/Faction.json")," file and the ",Object(r.b)("inlineCode",{parentName:"p"},"Name")," property. You can also refer to modded factions here too in the same way, by using their ",Object(r.b)("inlineCode",{parentName:"p"},"Name")," property."),Object(r.b)("p",null,"The vanilla factions are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Davion"),Object(r.b)("li",{parentName:"ul"},"Liao"),Object(r.b)("li",{parentName:"ul"},"Kurita"),Object(r.b)("li",{parentName:"ul"},"Marik"),Object(r.b)("li",{parentName:"ul"},"Steiner"),Object(r.b)("li",{parentName:"ul"},"TaurianConcordat"),Object(r.b)("li",{parentName:"ul"},"MagistracyOfCanopus"),Object(r.b)("li",{parentName:"ul"},"AuriganDirectorate"),Object(r.b)("li",{parentName:"ul"},"AuriganRestoration"),Object(r.b)("li",{parentName:"ul"},"ComStar"),Object(r.b)("li",{parentName:"ul"},"MercenaryReviewBoard"),Object(r.b)("li",{parentName:"ul"},"AuriganPirates"),Object(r.b)("li",{parentName:"ul"},"AuriganMercenaries"),Object(r.b)("li",{parentName:"ul"},"Locals"),Object(r.b)("li",{parentName:"ul"},"Unknown"),Object(r.b)("li",{parentName:"ul"},"MagistracyCentrella"),Object(r.b)("li",{parentName:"ul"},"MajestyMetals"),Object(r.b)("li",{parentName:"ul"},"Nautilus"),Object(r.b)("li",{parentName:"ul"},"Betrayers"),Object(r.b)("li",{parentName:"ul"},"FlakJackals"),Object(r.b)("li",{parentName:"ul"},"LocalsBrockwayRefugees"),Object(r.b)("li",{parentName:"ul"},"SelfEmployed"),Object(r.b)("li",{parentName:"ul"},"MasonsMarauders"),Object(r.b)("li",{parentName:"ul"},"SteelBeast"),Object(r.b)("li",{parentName:"ul"},"KellHounds"),Object(r.b)("li",{parentName:"ul"},"RazorbackMercs"),Object(r.b)("li",{parentName:"ul"},"HostileMercenaries"),Object(r.b)("li",{parentName:"ul"},"EmeraldDawn"),Object(r.b)("li",{parentName:"ul"},"SianTriumphant"),Object(r.b)("li",{parentName:"ul"},"ProfHorvat"),Object(r.b)("li",{parentName:"ul"},"RedHareRegiment"),Object(r.b)("li",{parentName:"ul"},"EdCorbu"),Object(r.b)("li",{parentName:"ul"},"DuchyOfAndurien"),Object(r.b)("li",{parentName:"ul"},"BlackCalderaDefense"),Object(r.b)("li",{parentName:"ul"},"GrayDeathLegion"),Object(r.b)("li",{parentName:"ul"},"HouseNakano"),Object(r.b)("li",{parentName:"ul"},"SelfEmployed_Yang"),Object(r.b)("li",{parentName:"ul"},"SecuritySolutionsInc"),Object(r.b)("li",{parentName:"ul"},"PaladinProtectionLLC"),Object(r.b)("li",{parentName:"ul"},"HouseKhulan"),Object(r.b)("li",{parentName:"ul"},"BlackWidowCompany"),Object(r.b)("li",{parentName:"ul"},"BountyHunterAssociates"),Object(r.b)("li",{parentName:"ul"},"SelfEmployed_Farah"),Object(r.b)("li",{parentName:"ul"},"SelfEmployed_Sumire"),Object(r.b)("li",{parentName:"ul"},"Moderbjorn"),Object(r.b)("li",{parentName:"ul"},"BaumannGroup")))}u.isMDXComponent=!0},251:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return u}));var n=a(0),l=a.n(n),r=l.a.createContext({}),b=function(e){var t=l.a.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},i=function(e){var t=b(e.components);return l.a.createElement(r.Provider,{value:t},e.children)};var c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},o=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,o=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),u=b(a),d=n,p=u[i+"."+d]||u[d]||c[d]||r;return a?l.a.createElement(p,Object.assign({},{ref:t},o,{components:a})):l.a.createElement(p,Object.assign({},{ref:t},o))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,b=new Array(r);b[0]=o;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,b[1]=i;for(var u=2;u<r;u++)b[u]=a[u];return l.a.createElement.apply(null,b)}return l.a.createElement.apply(null,a)}o.displayName="MDXCreateElement"}}]);