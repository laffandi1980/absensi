(this["webpackJsonpgrocery-crud-3-frontend"]=this["webpackJsonpgrocery-crud-3-frontend"]||[]).push([[53],{202:function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}},t.exports.__esModule=!0,t.exports.default=t.exports},204:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.width?String(e.width):t.defaultWidth;return t.formats[a]||t.formats[t.defaultWidth]}},t.exports=e.default},205:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(e,a){var n;if("formatting"===(null!==a&&void 0!==a&&a.context?String(a.context):"standalone")&&t.formattingValues){var u=t.defaultFormattingWidth||t.defaultWidth,r=null!==a&&void 0!==a&&a.width?String(a.width):u;n=t.formattingValues[r]||t.formattingValues[u]}else{var i=t.defaultWidth,o=null!==a&&void 0!==a&&a.width?String(a.width):t.defaultWidth;n=t.values[o]||t.values[i]}return n[t.argumentCallback?t.argumentCallback(e):e]}},t.exports=e.default},206:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=a.width,u=n&&t.matchPatterns[n]||t.matchPatterns[t.defaultMatchWidth],r=e.match(u);if(!r)return null;var i,o=r[0],d=n&&t.parsePatterns[n]||t.parsePatterns[t.defaultParseWidth],l=Array.isArray(d)?function(t,e){for(var a=0;a<t.length;a++)if(e(t[a]))return a;return}(d,(function(t){return t.test(o)})):function(t,e){for(var a in t)if(t.hasOwnProperty(a)&&e(t[a]))return a;return}(d,(function(t){return t.test(o)}));return i=t.valueCallback?t.valueCallback(l):l,{value:i=a.valueCallback?a.valueCallback(i):i,rest:e.slice(o.length)}}},t.exports=e.default},207:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(t.matchPattern);if(!n)return null;var u=n[0],r=e.match(t.parsePattern);if(!r)return null;var i=t.valueCallback?t.valueCallback(r[0]):r[0];return{value:i=a.valueCallback?a.valueCallback(i):i,rest:e.slice(u.length)}}},t.exports=e.default},954:function(t,e,a){"use strict";var n=a(202).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=n(a(955)),r=n(a(956)),i=n(a(957)),o=n(a(958)),d=n(a(959)),l={code:"ka",formatDistance:u.default,formatLong:r.default,formatRelative:i.default,localize:o.default,match:d.default,options:{weekStartsOn:1,firstWeekContainsDate:1}};e.default=l,t.exports=e.default},955:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={lessThanXSeconds:{past:"{{count}} \u10ec\u10d0\u10db\u10d6\u10d4 \u10dc\u10d0\u10d9\u10da\u10d4\u10d1\u10d8 \u10ee\u10dc\u10d8\u10e1 \u10ec\u10d8\u10dc",present:"{{count}} \u10ec\u10d0\u10db\u10d6\u10d4 \u10dc\u10d0\u10d9\u10da\u10d4\u10d1\u10d8",future:"{{count}} \u10ec\u10d0\u10db\u10d6\u10d4 \u10dc\u10d0\u10d9\u10da\u10d4\u10d1\u10e8\u10d8"},xSeconds:{past:"{{count}} \u10ec\u10d0\u10db\u10d8\u10e1 \u10ec\u10d8\u10dc",present:"{{count}} \u10ec\u10d0\u10db\u10d8",future:"{{count}} \u10ec\u10d0\u10db\u10e8\u10d8"},halfAMinute:{past:"\u10dc\u10d0\u10ee\u10d4\u10d5\u10d0\u10e0\u10d8 \u10ec\u10e3\u10d7\u10d8\u10e1 \u10ec\u10d8\u10dc",present:"\u10dc\u10d0\u10ee\u10d4\u10d5\u10d0\u10e0\u10d8 \u10ec\u10e3\u10d7\u10d8",future:"\u10dc\u10d0\u10ee\u10d4\u10d5\u10d0\u10e0\u10d8 \u10ec\u10e3\u10d7\u10e8\u10d8"},lessThanXMinutes:{past:"{{count}} \u10ec\u10e3\u10d7\u10d6\u10d4 \u10dc\u10d0\u10d9\u10da\u10d4\u10d1\u10d8 \u10ee\u10dc\u10d8\u10e1 \u10ec\u10d8\u10dc",present:"{{count}} \u10ec\u10e3\u10d7\u10d6\u10d4 \u10dc\u10d0\u10d9\u10da\u10d4\u10d1\u10d8",future:"{{count}} \u10ec\u10e3\u10d7\u10d6\u10d4 \u10dc\u10d0\u10d9\u10da\u10d4\u10d1\u10e8\u10d8"},xMinutes:{past:"{{count}} \u10ec\u10e3\u10d7\u10d8\u10e1 \u10ec\u10d8\u10dc",present:"{{count}} \u10ec\u10e3\u10d7\u10d8",future:"{{count}} \u10ec\u10e3\u10d7\u10e8\u10d8"},aboutXHours:{past:"\u10d3\u10d0\u10d0\u10ee\u10da\u10dd\u10d4\u10d1\u10d8\u10d7 {{count}} \u10e1\u10d0\u10d0\u10d7\u10d8\u10e1 \u10ec\u10d8\u10dc",present:"\u10d3\u10d0\u10d0\u10ee\u10da\u10dd\u10d4\u10d1\u10d8\u10d7 {{count}} \u10e1\u10d0\u10d0\u10d7\u10d8",future:"\u10d3\u10d0\u10d0\u10ee\u10da\u10dd\u10d4\u10d1\u10d8\u10d7 {{count}} \u10e1\u10d0\u10d0\u10d7\u10e8\u10d8"},xHours:{past:"{{count}} \u10e1\u10d0\u10d0\u10d7\u10d8\u10e1 \u10ec\u10d8\u10dc",present:"{{count}} \u10e1\u10d0\u10d0\u10d7\u10d8",future:"{{count}} \u10e1\u10d0\u10d0\u10d7\u10e8\u10d8"},xDays:{past:"{{count}} \u10d3\u10e6\u10d8\u10e1 \u10ec\u10d8\u10dc",present:"{{count}} \u10d3\u10e6\u10d4",future:"{{count}} \u10d3\u10e6\u10d4\u10e8\u10d8"},aboutXWeeks:{past:"\u10d3\u10d0\u10d0\u10ee\u10da\u10dd\u10d4\u10d1\u10d8\u10d7 {{count}} \u10d9\u10d5\u10d8\u10e0\u10d0\u10e1 \u10ec\u10d8\u10dc",present:"\u10d3\u10d0\u10d0\u10ee\u10da\u10dd\u10d4\u10d1\u10d8\u10d7 {{count}} \u10d9\u10d5\u10d8\u10e0\u10d0",future:"\u10d3\u10d0\u10d0\u10ee\u10da\u10dd\u10d4\u10d1\u10d8\u10d7 {{count}} \u10d9\u10d5\u10d8\u10e0\u10d0\u10e8\u10d8"},xWeeks:{past:"{{count}} \u10d9\u10d5\u10d8\u10e0\u10d0\u10e1 \u10d9\u10d5\u10d8\u10e0\u10d0",present:"{{count}} \u10d9\u10d5\u10d8\u10e0\u10d0",future:"{{count}} \u10d9\u10d5\u10d8\u10e0\u10d0\u10e8\u10d8"},aboutXMonths:{past:"\u10d3\u10d0\u10d0\u10ee\u10da\u10dd\u10d4\u10d1\u10d8\u10d7 {{count}} \u10d7\u10d5\u10d8\u10e1 \u10ec\u10d8\u10dc",present:"\u10d3\u10d0\u10d0\u10ee\u10da\u10dd\u10d4\u10d1\u10d8\u10d7 {{count}} \u10d7\u10d5\u10d4",future:"\u10d3\u10d0\u10d0\u10ee\u10da\u10dd\u10d4\u10d1\u10d8\u10d7 {{count}} \u10d7\u10d5\u10d4\u10e8\u10d8"},xMonths:{past:"{{count}} \u10d7\u10d5\u10d8\u10e1 \u10ec\u10d8\u10dc",present:"{{count}} \u10d7\u10d5\u10d4",future:"{{count}} \u10d7\u10d5\u10d4\u10e8\u10d8"},aboutXYears:{past:"\u10d3\u10d0\u10d0\u10ee\u10da\u10dd\u10d4\u10d1\u10d8\u10d7 {{count}} \u10ec\u10da\u10d8\u10e1 \u10ec\u10d8\u10dc",present:"\u10d3\u10d0\u10d0\u10ee\u10da\u10dd\u10d4\u10d1\u10d8\u10d7 {{count}} \u10ec\u10d4\u10da\u10d8",future:"\u10d3\u10d0\u10d0\u10ee\u10da\u10dd\u10d4\u10d1\u10d8\u10d7 {{count}} \u10ec\u10d4\u10da\u10e8\u10d8"},xYears:{past:"{{count}} \u10ec\u10da\u10d8\u10e1 \u10ec\u10d8\u10dc",present:"{{count}} \u10ec\u10d4\u10da\u10d8",future:"{{count}} \u10ec\u10d4\u10da\u10e8\u10d8"},overXYears:{past:"{{count}} \u10ec\u10d4\u10da\u10d6\u10d4 \u10db\u10d4\u10e2\u10d8 \u10ee\u10dc\u10d8\u10e1 \u10ec\u10d8\u10dc",present:"{{count}} \u10ec\u10d4\u10da\u10d6\u10d4 \u10db\u10d4\u10e2\u10d8",future:"{{count}} \u10ec\u10d4\u10da\u10d6\u10d4 \u10db\u10d4\u10e2\u10d8 \u10ee\u10dc\u10d8\u10e1 \u10e8\u10d4\u10db\u10d3\u10d4\u10d2"},almostXYears:{past:"\u10d7\u10d8\u10d7\u10e5\u10db\u10d8\u10e1 {{count}} \u10ec\u10da\u10d8\u10e1 \u10ec\u10d8\u10dc",present:"\u10d7\u10d8\u10d7\u10e5\u10db\u10d8\u10e1 {{count}} \u10ec\u10d4\u10da\u10d8",future:"\u10d7\u10d8\u10d7\u10e5\u10db\u10d8\u10e1 {{count}} \u10ec\u10d4\u10da\u10e8\u10d8"}},u=function(t,e,a){var u=n[t];return"string"===typeof u?u:null!==a&&void 0!==a&&a.addSuffix&&a.comparison&&a.comparison>0?u.future.replace("{{count}}",String(e)):null!==a&&void 0!==a&&a.addSuffix?u.past.replace("{{count}}",String(e)):u.present.replace("{{count}}",String(e))};e.default=u,t.exports=e.default},956:function(t,e,a){"use strict";var n=a(202).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=n(a(204)),r={date:(0,u.default)({formats:{full:"EEEE, do MMMM, y",long:"do, MMMM, y",medium:"d, MMM, y",short:"dd/MM/yyyy"},defaultWidth:"full"}),time:(0,u.default)({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:(0,u.default)({formats:{full:"{{date}} {{time}}'-\u10d6\u10d4'",long:"{{date}} {{time}}'-\u10d6\u10d4'",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};e.default=r,t.exports=e.default},957:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={lastWeek:"'\u10ec\u10d8\u10dc\u10d0' eeee p'-\u10d6\u10d4'",yesterday:"'\u10d2\u10e3\u10e8\u10d8\u10dc' p'-\u10d6\u10d4'",today:"'\u10d3\u10e6\u10d4\u10e1' p'-\u10d6\u10d4'",tomorrow:"'\u10ee\u10d5\u10d0\u10da' p'-\u10d6\u10d4'",nextWeek:"'\u10e8\u10d4\u10db\u10d3\u10d4\u10d2\u10d8' eeee p'-\u10d6\u10d4'",other:"P"},u=function(t,e,a,u){return n[t]};e.default=u,t.exports=e.default},958:function(t,e,a){"use strict";var n=a(202).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=n(a(205)),r={ordinalNumber:function(t){var e=Number(t);return 1===e?e+"-\u10da\u10d8":e+"-\u10d4"},era:(0,u.default)({values:{narrow:["\u10e9.\u10ec-\u10db\u10d3\u10d4","\u10e9.\u10ec"],abbreviated:["\u10e9\u10d5.\u10ec-\u10db\u10d3\u10d4","\u10e9\u10d5.\u10ec"],wide:["\u10e9\u10d5\u10d4\u10dc\u10e1 \u10ec\u10d4\u10da\u10d7\u10d0\u10e6\u10e0\u10d8\u10ea\u10ee\u10d5\u10d0\u10db\u10d3\u10d4","\u10e9\u10d5\u10d4\u10dc\u10d8 \u10ec\u10d4\u10da\u10d7\u10d0\u10e6\u10e0\u10d8\u10ea\u10ee\u10d5\u10d8\u10d7"]},defaultWidth:"wide"}),quarter:(0,u.default)({values:{narrow:["1","2","3","4"],abbreviated:["1-\u10da\u10d8 \u10d9\u10d5","2-\u10d4 \u10d9\u10d5","3-\u10d4 \u10d9\u10d5","4-\u10d4 \u10d9\u10d5"],wide:["1-\u10da\u10d8 \u10d9\u10d5\u10d0\u10e0\u10e2\u10d0\u10da\u10d8","2-\u10d4 \u10d9\u10d5\u10d0\u10e0\u10e2\u10d0\u10da\u10d8","3-\u10d4 \u10d9\u10d5\u10d0\u10e0\u10e2\u10d0\u10da\u10d8","4-\u10d4 \u10d9\u10d5\u10d0\u10e0\u10e2\u10d0\u10da\u10d8"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:(0,u.default)({values:{narrow:["\u10d8\u10d0","\u10d7\u10d4","\u10db\u10d0","\u10d0\u10de","\u10db\u10e1","\u10d5\u10dc","\u10d5\u10da","\u10d0\u10d2","\u10e1\u10d4","\u10dd\u10e5","\u10dc\u10dd","\u10d3\u10d4"],abbreviated:["\u10d8\u10d0\u10dc","\u10d7\u10d4\u10d1","\u10db\u10d0\u10e0","\u10d0\u10de\u10e0","\u10db\u10d0\u10d8","\u10d8\u10d5\u10dc","\u10d8\u10d5\u10da","\u10d0\u10d2\u10d5","\u10e1\u10d4\u10e5","\u10dd\u10e5\u10e2","\u10dc\u10dd\u10d4","\u10d3\u10d4\u10d9"],wide:["\u10d8\u10d0\u10dc\u10d5\u10d0\u10e0\u10d8","\u10d7\u10d4\u10d1\u10d4\u10e0\u10d5\u10d0\u10da\u10d8","\u10db\u10d0\u10e0\u10e2\u10d8","\u10d0\u10de\u10e0\u10d8\u10da\u10d8","\u10db\u10d0\u10d8\u10e1\u10d8","\u10d8\u10d5\u10dc\u10d8\u10e1\u10d8","\u10d8\u10d5\u10da\u10d8\u10e1\u10d8","\u10d0\u10d2\u10d5\u10d8\u10e1\u10e2\u10dd","\u10e1\u10d4\u10e5\u10e2\u10d4\u10db\u10d1\u10d4\u10e0\u10d8","\u10dd\u10e5\u10e2\u10dd\u10db\u10d1\u10d4\u10e0\u10d8","\u10dc\u10dd\u10d4\u10db\u10d1\u10d4\u10e0\u10d8","\u10d3\u10d4\u10d9\u10d4\u10db\u10d1\u10d4\u10e0\u10d8"]},defaultWidth:"wide"}),day:(0,u.default)({values:{narrow:["\u10d9\u10d5","\u10dd\u10e0","\u10e1\u10d0","\u10dd\u10d7","\u10ee\u10e3","\u10de\u10d0","\u10e8\u10d0"],short:["\u10d9\u10d5\u10d8","\u10dd\u10e0\u10e8","\u10e1\u10d0\u10db","\u10dd\u10d7\u10ee","\u10ee\u10e3\u10d7","\u10de\u10d0\u10e0","\u10e8\u10d0\u10d1"],abbreviated:["\u10d9\u10d5\u10d8","\u10dd\u10e0\u10e8","\u10e1\u10d0\u10db","\u10dd\u10d7\u10ee","\u10ee\u10e3\u10d7","\u10de\u10d0\u10e0","\u10e8\u10d0\u10d1"],wide:["\u10d9\u10d5\u10d8\u10e0\u10d0","\u10dd\u10e0\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8","\u10e1\u10d0\u10db\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8","\u10dd\u10d7\u10ee\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8","\u10ee\u10e3\u10d7\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8","\u10de\u10d0\u10e0\u10d0\u10e1\u10d9\u10d4\u10d5\u10d8","\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8"]},defaultWidth:"wide"}),dayPeriod:(0,u.default)({values:{narrow:{am:"a",pm:"p",midnight:"\u10e8\u10e3\u10d0\u10e6\u10d0\u10db\u10d4",noon:"\u10e8\u10e3\u10d0\u10d3\u10e6\u10d4",morning:"\u10d3\u10d8\u10da\u10d0",afternoon:"\u10e1\u10d0\u10e6\u10d0\u10db\u10dd",evening:"\u10e1\u10d0\u10e6\u10d0\u10db\u10dd",night:"\u10e6\u10d0\u10db\u10d4"},abbreviated:{am:"AM",pm:"PM",midnight:"\u10e8\u10e3\u10d0\u10e6\u10d0\u10db\u10d4",noon:"\u10e8\u10e3\u10d0\u10d3\u10e6\u10d4",morning:"\u10d3\u10d8\u10da\u10d0",afternoon:"\u10e1\u10d0\u10e6\u10d0\u10db\u10dd",evening:"\u10e1\u10d0\u10e6\u10d0\u10db\u10dd",night:"\u10e6\u10d0\u10db\u10d4"},wide:{am:"a.m.",pm:"p.m.",midnight:"\u10e8\u10e3\u10d0\u10e6\u10d0\u10db\u10d4",noon:"\u10e8\u10e3\u10d0\u10d3\u10e6\u10d4",morning:"\u10d3\u10d8\u10da\u10d0",afternoon:"\u10e1\u10d0\u10e6\u10d0\u10db\u10dd",evening:"\u10e1\u10d0\u10e6\u10d0\u10db\u10dd",night:"\u10e6\u10d0\u10db\u10d4"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"\u10e8\u10e3\u10d0\u10e6\u10d0\u10db\u10d8\u10d7",noon:"\u10e8\u10e3\u10d0\u10d3\u10e6\u10d8\u10e1\u10d0\u10e1",morning:"\u10d3\u10d8\u10da\u10d8\u10d7",afternoon:"\u10dc\u10d0\u10e8\u10e3\u10d0\u10d3\u10e6\u10d4\u10d5\u10e1",evening:"\u10e1\u10d0\u10e6\u10d0\u10db\u10dd\u10e1",night:"\u10e6\u10d0\u10db\u10d8\u10d7"},abbreviated:{am:"AM",pm:"PM",midnight:"\u10e8\u10e3\u10d0\u10e6\u10d0\u10db\u10d8\u10d7",noon:"\u10e8\u10e3\u10d0\u10d3\u10e6\u10d8\u10e1\u10d0\u10e1",morning:"\u10d3\u10d8\u10da\u10d8\u10d7",afternoon:"\u10dc\u10d0\u10e8\u10e3\u10d0\u10d3\u10e6\u10d4\u10d5\u10e1",evening:"\u10e1\u10d0\u10e6\u10d0\u10db\u10dd\u10e1",night:"\u10e6\u10d0\u10db\u10d8\u10d7"},wide:{am:"a.m.",pm:"p.m.",midnight:"\u10e8\u10e3\u10d0\u10e6\u10d0\u10db\u10d8\u10d7",noon:"\u10e8\u10e3\u10d0\u10d3\u10e6\u10d8\u10e1\u10d0\u10e1",morning:"\u10d3\u10d8\u10da\u10d8\u10d7",afternoon:"\u10dc\u10d0\u10e8\u10e3\u10d0\u10d3\u10e6\u10d4\u10d5\u10e1",evening:"\u10e1\u10d0\u10e6\u10d0\u10db\u10dd\u10e1",night:"\u10e6\u10d0\u10db\u10d8\u10d7"}},defaultFormattingWidth:"wide"})};e.default=r,t.exports=e.default},959:function(t,e,a){"use strict";var n=a(202).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=n(a(206)),r={ordinalNumber:(0,n(a(207)).default)({matchPattern:/^(\d+)(-\u10da\u10d8|-\u10d4)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}}),era:(0,u.default)({matchPatterns:{narrow:/^(\u10e9\u10d5?\.\u10ec)/i,abbreviated:/^(\u10e9\u10d5?\.\u10ec)/i,wide:/^(\u10e9\u10d5\u10d4\u10dc\u10e1 \u10ec\u10d4\u10da\u10d7\u10d0\u10e6\u10e0\u10d8\u10ea\u10ee\u10d5\u10d0\u10db\u10d3\u10d4|\u10e5\u10e0\u10d8\u10e1\u10e2\u10d4\u10e8\u10dd\u10d1\u10d0\u10db\u10d3\u10d4|\u10e9\u10d5\u10d4\u10dc\u10d8 \u10ec\u10d4\u10da\u10d7\u10d0\u10e6\u10e0\u10d8\u10ea\u10ee\u10d5\u10d8\u10d7|\u10e5\u10e0\u10d8\u10e1\u10e2\u10d4\u10e8\u10dd\u10d1\u10d8\u10d3\u10d0\u10dc)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^(\u10e9\u10d5\u10d4\u10dc\u10e1 \u10ec\u10d4\u10da\u10d7\u10d0\u10e6\u10e0\u10d8\u10ea\u10ee\u10d5\u10d0\u10db\u10d3\u10d4|\u10e5\u10e0\u10d8\u10e1\u10e2\u10d4\u10e8\u10dd\u10d1\u10d0\u10db\u10d3\u10d4)/i,/^(\u10e9\u10d5\u10d4\u10dc\u10d8 \u10ec\u10d4\u10da\u10d7\u10d0\u10e6\u10e0\u10d8\u10ea\u10ee\u10d5\u10d8\u10d7|\u10e5\u10e0\u10d8\u10e1\u10e2\u10d4\u10e8\u10dd\u10d1\u10d8\u10d3\u10d0\u10dc)/i]},defaultParseWidth:"any"}),quarter:(0,u.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234]-(\u10da\u10d8|\u10d4)? \u10d9\u10d5/i,wide:/^[1234]-(\u10da\u10d8|\u10d4)? \u10d9\u10d5\u10d0\u10e0\u10e2\u10d0\u10da\u10d8/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:(0,u.default)({matchPatterns:{any:/^(\u10d8\u10d0|\u10d7\u10d4|\u10db\u10d0|\u10d0\u10de|\u10db\u10e1|\u10d5\u10dc|\u10d5\u10da|\u10d0\u10d2|\u10e1\u10d4|\u10dd\u10e5|\u10dc\u10dd|\u10d3\u10d4)/i},defaultMatchWidth:"any",parsePatterns:{any:[/^\u10d8\u10d0/i,/^\u10d7/i,/^\u10db\u10d0\u10e0/i,/^\u10d0\u10de/i,/^\u10db\u10d0\u10d8/i,/^\u10d8?\u10d5\u10dc/i,/^\u10d8?\u10d5\u10da/i,/^\u10d0\u10d2/i,/^\u10e1/i,/^\u10dd/i,/^\u10dc/i,/^\u10d3/i]},defaultParseWidth:"any"}),day:(0,u.default)({matchPatterns:{narrow:/^(\u10d9\u10d5|\u10dd\u10e0|\u10e1\u10d0|\u10dd\u10d7|\u10ee\u10e3|\u10de\u10d0|\u10e8\u10d0)/i,short:/^(\u10d9\u10d5\u10d8|\u10dd\u10e0\u10e8|\u10e1\u10d0\u10db|\u10dd\u10d7\u10ee|\u10ee\u10e3\u10d7|\u10de\u10d0\u10e0|\u10e8\u10d0\u10d1)/i,wide:/^(\u10d9\u10d5\u10d8\u10e0\u10d0|\u10dd\u10e0\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8|\u10e1\u10d0\u10db\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8|\u10dd\u10d7\u10ee\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8|\u10ee\u10e3\u10d7\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8|\u10de\u10d0\u10e0\u10d0\u10e1\u10d9\u10d4\u10d5\u10d8|\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^\u10d9\u10d5/i,/^\u10dd\u10e0/i,/^\u10e1\u10d0/i,/^\u10dd\u10d7/i,/^\u10ee\u10e3/i,/^\u10de\u10d0/i,/^\u10e8\u10d0/i]},defaultParseWidth:"any"}),dayPeriod:(0,u.default)({matchPatterns:{any:/^([ap]\.?\s?m\.?|\u10e8\u10e3\u10d0\u10e6|\u10d3\u10d8\u10da)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^\u10e8\u10e3\u10d0\u10e6/i,noon:/^\u10e8\u10e3\u10d0\u10d3\u10e6/i,morning:/^\u10d3\u10d8\u10da/i,afternoon:/\u10dc\u10d0\u10e8\u10e3\u10d0\u10d3\u10e6\u10d4\u10d5\u10e1/i,evening:/\u10e1\u10d0\u10e6\u10d0\u10db\u10dd/i,night:/\u10e6\u10d0\u10db/i}},defaultParseWidth:"any"})};e.default=r,t.exports=e.default}}]);