var africa08: number = 1028;
var africa18: number = 1235.5;

var southAmerica08: number = 1132.6;
var southAmerica18: number = 1261.5;

var europe08: number = 4965.7;
var europe18: number = 4209.3;

var northAmerica08: number = 6600.4;
var northAmerica18: number = 6035.6;

var asia08: number = 12954.7;
var asia18: number = 16274.1;

var australia08: number = 1993;
var australia18: number = 2100.5;

var total: number = africa18 + southAmerica18 + europe18 + northAmerica18 + asia18 + australia18; 

console.log("Africa produces " + africa18 + "kg CO2")
console.log("Africa contributes relatively " + Math.round(africa18/total*100) + "% Carbon Dioxide to the world's total emission")
console.log("Africa's emission from 2018 has changed by " + Math.round(africa18/africa08*100)  + "% since 2008")
console.log("That is a growth rate of approximately  " + Math.round(africa18-africa08) + "kg CO2")

console.log("South America produces " + southAmerica18 + "kg CO2")
console.log("South America contributes relatively " + Math.round(southAmerica18/total*100) + "% Carbon Dioxide to the world's total emission")
console.log("South America's emission from 2018 has changed by " + Math.round(southAmerica18/southAmerica08*100)  + "% since 2008")
console.log("That is a growth rate of approximately  " + Math.round(southAmerica18-southAmerica08) + "kg CO2")

console.log("Europe produces " +  europe18 + "kg CO2")
console.log("Europe contributes relatively " +  Math.round(europe18/total*100) + "% Carbon Dioxide to the world's total emission")
console.log("Europe's emission from 2018 has changed by " +  Math.round(europe18/europe08*100)  + "% since 2008")
console.log("That is a growth rate of approximately  " +  Math.round(europe18-europe08) + "kg CO2")

console.log("North America produces " + northAmerica18 + "kg CO2")
console.log("North America contributes relatively " +  Math.round(northAmerica18/total*100) + "% Carbon Dioxide to the world's total emission")
console.log("North America's emission from 2018 has changed by " +  Math.round(northAmerica18/northAmerica08*100)  + "% since 2008")
console.log("That is a growth rate of approximately  " +  Math.round(northAmerica18-northAmerica08) + "kg CO2")
 
console.log("Asia produces " +  asia18 + "kg CO2")
console.log("Asia contributes relatively " +  Math.round(asia18/total*100) + "% Carbon Dioxide to the world's total emission")
console.log("Asia's emission from 2018 has changed by " +  Math.round(asia18/asia08*100)  + "% since 2008")
console.log("That is a growth rate of approximately  " +  Math.round(asia18-asia08) + "kg CO2")

console.log("Australia produces "  +  australia18 + "kg CO2")
console.log("Australia contributes relatively "  +  Math.round(australia18/total*100) + "% Carbon Dioxide to the world's total emission")
console.log("Australia's emission from 2018 has changed by "  +  Math.round(australia18/australia08*100)  + "% since 2008")
console.log("That is a growth rate of approximately "  +  Math.round(australia18-australia08) + "kg CO2")

