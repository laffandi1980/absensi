(this["webpackJsonpgrocery-crud-3-frontend"]=this["webpackJsonpgrocery-crud-3-frontend"]||[]).push([[73],{1068:function(e,t,a){"use strict";var n=a(202).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(1069)),r=n(a(1070)),o=n(a(1071)),d=n(a(1072)),u=n(a(1073)),s={code:"pt-BR",formatDistance:i.default,formatLong:r.default,formatRelative:o.default,localize:d.default,match:u.default,options:{weekStartsOn:0,firstWeekContainsDate:1}};t.default=s,e.exports=t.default},1069:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={lessThanXSeconds:{one:"menos de um segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"meio minuto",lessThanXMinutes:{one:"menos de um minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"cerca de 1 hora",other:"cerca de {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 dia",other:"{{count}} dias"},aboutXWeeks:{one:"cerca de 1 semana",other:"cerca de {{count}} semanas"},xWeeks:{one:"1 semana",other:"{{count}} semanas"},aboutXMonths:{one:"cerca de 1 m\xeas",other:"cerca de {{count}} meses"},xMonths:{one:"1 m\xeas",other:"{{count}} meses"},aboutXYears:{one:"cerca de 1 ano",other:"cerca de {{count}} anos"},xYears:{one:"1 ano",other:"{{count}} anos"},overXYears:{one:"mais de 1 ano",other:"mais de {{count}} anos"},almostXYears:{one:"quase 1 ano",other:"quase {{count}} anos"}},i=function(e,t,a){var i,r=n[e];return i="string"===typeof r?r:1===t?r.one:r.other.replace("{{count}}",String(t)),null!==a&&void 0!==a&&a.addSuffix?a.comparison&&a.comparison>0?"em "+i:"h\xe1 "+i:i};t.default=i,e.exports=t.default},1070:function(e,t,a){"use strict";var n=a(202).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(204)),r={date:(0,i.default)({formats:{full:"EEEE, d 'de' MMMM 'de' y",long:"d 'de' MMMM 'de' y",medium:"d MMM y",short:"dd/MM/yyyy"},defaultWidth:"full"}),time:(0,i.default)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,i.default)({formats:{full:"{{date}} '\xe0s' {{time}}",long:"{{date}} '\xe0s' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};t.default=r,e.exports=t.default},1071:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={lastWeek:function(e){var t=e.getUTCDay();return"'"+(0===t||6===t?"\xfaltimo":"\xfaltima")+"' eeee '\xe0s' p"},yesterday:"'ontem \xe0s' p",today:"'hoje \xe0s' p",tomorrow:"'amanh\xe3 \xe0s' p",nextWeek:"eeee '\xe0s' p",other:"P"},i=function(e,t,a,i){var r=n[e];return"function"===typeof r?r(t):r};t.default=i,e.exports=t.default},1072:function(e,t,a){"use strict";var n=a(202).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(205)),r={ordinalNumber:function(e,t){var a=Number(e);return"week"===(null===t||void 0===t?void 0:t.unit)?a+"\xaa":a+"\xba"},era:(0,i.default)({values:{narrow:["AC","DC"],abbreviated:["AC","DC"],wide:["antes de cristo","depois de cristo"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1\xba trimestre","2\xba trimestre","3\xba trimestre","4\xba trimestre"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,i.default)({values:{narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],wide:["janeiro","fevereiro","mar\xe7o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["D","S","T","Q","Q","S","S"],short:["dom","seg","ter","qua","qui","sex","sab"],abbreviated:["domingo","segunda","ter\xe7a","quarta","quinta","sexta","s\xe1bado"],wide:["domingo","segunda-feira","ter\xe7a-feira","quarta-feira","quinta-feira","sexta-feira","s\xe1bado"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"manh\xe3",afternoon:"tarde",evening:"tarde",night:"noite"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"manh\xe3",afternoon:"tarde",evening:"tarde",night:"noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"meia-noite",noon:"meio-dia",morning:"manh\xe3",afternoon:"tarde",evening:"tarde",night:"noite"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"da manh\xe3",afternoon:"da tarde",evening:"da tarde",night:"da noite"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"da manh\xe3",afternoon:"da tarde",evening:"da tarde",night:"da noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"meia-noite",noon:"meio-dia",morning:"da manh\xe3",afternoon:"da tarde",evening:"da tarde",night:"da noite"}},defaultFormattingWidth:"wide"})};t.default=r,e.exports=t.default},1073:function(e,t,a){"use strict";var n=a(202).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(206)),r={ordinalNumber:(0,n(a(207)).default)({matchPattern:/^(\d+)[\xba\xaao]?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,i.default)({matchPatterns:{narrow:/^(ac|dc|a|d)/i,abbreviated:/^(a\.?\s?c\.?|d\.?\s?c\.?)/i,wide:/^(antes de cristo|depois de cristo)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^ac/i,/^dc/i],wide:[/^antes de cristo/i,/^depois de cristo/i]},defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](\xba)? trimestre/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,i.default)({matchPatterns:{narrow:/^[jfmajsond]/i,abbreviated:/^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,wide:/^(janeiro|fevereiro|mar\xe7o|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^fev/i,/^mar/i,/^abr/i,/^mai/i,/^jun/i,/^jul/i,/^ago/i,/^set/i,/^out/i,/^nov/i,/^dez/i]},defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:{narrow:/^(dom|[23456]\xaa?|s[a\xe1]b)/i,short:/^(dom|[23456]\xaa?|s[a\xe1]b)/i,abbreviated:/^(dom|seg|ter|qua|qui|sex|s[a\xe1]b)/i,wide:/^(domingo|(segunda|ter[c\xe7]a|quarta|quinta|sexta)([- ]feira)?|s[a\xe1]bado)/i},defaultMatchWidth:"wide",parsePatterns:{short:[/^d/i,/^2/i,/^3/i,/^4/i,/^5/i,/^6/i,/^s[a\xe1]/i],narrow:[/^d/i,/^2/i,/^3/i,/^4/i,/^5/i,/^6/i,/^s[a\xe1]/i],any:[/^d/i,/^seg/i,/^t/i,/^qua/i,/^qui/i,/^sex/i,/^s[a\xe1]b/i]},defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:{narrow:/^(a|p|mn|md|(da) (manh\xe3|tarde|noite))/i,any:/^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manh\xe3|tarde|noite))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mn|^meia[-\s]noite/i,noon:/^md|^meio[-\s]dia/i,morning:/manh\xe3/i,afternoon:/tarde/i,evening:/tarde/i,night:/noite/i}},defaultParseWidth:"any"})};t.default=r,e.exports=t.default},202:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},204:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.width?String(t.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}},e.exports=t.default},205:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var n;if("formatting"===(null!==a&&void 0!==a&&a.context?String(a.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,r=null!==a&&void 0!==a&&a.width?String(a.width):i;n=e.formattingValues[r]||e.formattingValues[i]}else{var o=e.defaultWidth,d=null!==a&&void 0!==a&&a.width?String(a.width):e.defaultWidth;n=e.values[d]||e.values[o]}return n[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},206:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=a.width,i=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],r=t.match(i);if(!r)return null;var o,d=r[0],u=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],s=Array.isArray(u)?function(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a;return}(u,(function(e){return e.test(d)})):function(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a;return}(u,(function(e){return e.test(d)}));return o=e.valueCallback?e.valueCallback(s):s,{value:o=a.valueCallback?a.valueCallback(o):o,rest:t.slice(d.length)}}},e.exports=t.default},207:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(e.matchPattern);if(!n)return null;var i=n[0],r=t.match(e.parsePattern);if(!r)return null;var o=e.valueCallback?e.valueCallback(r[0]):r[0];return{value:o=a.valueCallback?a.valueCallback(o):o,rest:t.slice(i.length)}}},e.exports=t.default}}]);