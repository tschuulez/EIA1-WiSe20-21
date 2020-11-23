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



//function Output(name: string, oldValue: number, newValue: number) {
    //console.log(name + " produces " + newValue + "kg CO2" )
    //console.log(name + " contributes relatively " + Math.round(newValue/total*100) + "% Carbon Dioxide to the world's total emission")
    //console.log(name + "'s emission from 2018 has changed by " + Math.round(newValue/oldValue*100)  + "% since 2008")
    //console.log("That is a growth rate of approximately  " + Math.round(newValue-oldValue) + "kg CO2")
//}

//Output("Africa", africa08, africa18)
//Output("South America", southAmerica08, southAmerica18)
//Output("Europe", europe08, europe18)
//Output("North America", northAmerica08, northAmerica18)
//Output("Asia", asia08, asia18)
//Output("Australia", australia08, australia18)

function onClick(name: string, oldValue: number, newValue: number) {

  document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in " + name;
  document.querySelector(".h2_01").innerHTML = newValue.toString() ; 
  document.querySelector("p").innerHTML = "Emission absolute of " + name + " in 2018";
  document.querySelector(".h2_02").innerHTML =  Math.round(newValue/total*100) + "%";
  document.querySelector(".h2_03").innerHTML =  Math.round(newValue/oldValue*100) + "%";
  document.querySelector(".h2_04").innerHTML =  Math.round(newValue-oldValue) + "kg CO2"
}
onClick('Europe', europe08, europe18)

document.querySelector(".europe").addEventListener("click", function('Europe', europe08, europe18) {
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in " + name;
    document.querySelector(".h2_01").innerHTML = newValue.toString() ; 
    document.querySelector("p").innerHTML = "Emission absolute of " + name + " in 2018";
    document.querySelector(".h2_02").innerHTML =  Math.round(newValue/total*100) + "%";
    document.querySelector(".h2_03").innerHTML =  Math.round(newValue/oldValue*100) + "%";
    document.querySelector(".h2_04").innerHTML =  Math.round(newValue-oldValue) + "kg CO2"

})

onClick('North America', northAmerica08, northAmerica18)
document.querySelector(".europe").addEventListener("click", onClick('North America', northAmerica08, northAmerica18))

onClick('South America', southAmerica08, southAmerica18)
document.querySelector(".europe").addEventListener("click", onClick('South America', southAmerica08, southAmerica18))

onClick('Africa', africa08, africa18)
document.querySelector(".europe").addEventListener("click", onClick('Europe', europe08, europe18))

onClick('Asia', asia08, asia18)
document.querySelector(".europe").addEventListener("click", onClick('Europe', europe08, europe18))

onClick('Australia', australia08, australia18)
document.querySelector(".europe").addEventListener("click", onClick('Europe', europe08, europe18))









// console.log("Africa produces " + africa18 + "kg CO2")
//console.log("Africa contributes relatively " + Math.round(africa18/total*100) + "% Carbon Dioxide to the world's total emission")
//console.log("Africa's emission from 2018 has changed by " + Math.round(africa18/africa08*100)  + "% since 2008")
//console.log("That is a growth rate of approximately  " + Math.round(africa18-africa08) + "kg CO2")

//console.log("South America produces " + southAmerica18 + "kg CO2")
//console.log("South America contributes relatively " + Math.round(southAmerica18/total*100) + "% Carbon Dioxide to the world's total emission")
//console.log("South America's emission from 2018 has changed by " + Math.round(southAmerica18/southAmerica08*100)  + "% since 2008")
//console.log("That is a growth rate of approximately  " + Math.round(southAmerica18-southAmerica08) + "kg CO2")

//console.log("Europe produces " +  europe18 + "kg CO2")
//console.log("Europe contributes relatively " +  Math.round(europe18/total*100) + "% Carbon Dioxide to the world's total emission")
//console.log("Europe's emission from 2018 has changed by " +  Math.round(europe18/europe08*100)  + "% since 2008")
//console.log("That is a growth rate of approximately  " +  Math.round(europe18-europe08) + "kg CO2")

//console.log("North America produces " + northAmerica18 + "kg CO2")
//console.log("North America contributes relatively " +  Math.round(northAmerica18/total*100) + "% Carbon Dioxide to the world's total emission")
//console.log("North America's emission from 2018 has changed by " +  Math.round(northAmerica18/northAmerica08*100)  + "% since 2008")
//console.log("That is a growth rate of approximately  " +  Math.round(northAmerica18-northAmerica08) + "kg CO2")
 
//console.log("Asia produces " +  asia18 + "kg CO2")
//console.log("Asia contributes relatively " +  Math.round(asia18/total*100) + "% Carbon Dioxide to the world's total emission")
//console.log("Asia's emission from 2018 has changed by " +  Math.round(asia18/asia08*100)  + "% since 2008")
//console.log("That is a growth rate of approximately  " +  Math.round(asia18-asia08) + "kg CO2")

//console.log("Australia produces "  +  australia18 + "kg CO2")
//console.log("Australia contributes relatively "  +  Math.round(australia18/total*100) + "% Carbon Dioxide to the world's total emission")
//console.log("Australia's emission from 2018 has changed by "  +  Math.round(australia18/australia08*100)  + "% since 2008")
//console.log("That is a growth rate of approximately "  +  Math.round(australia18-australia08) + "kg CO2")

