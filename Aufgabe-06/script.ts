var oldValueAfrica08: number = 1028;
var newValueAfrica18: number = 1235.5;

var oldValueSouthAmerica08: number = 1132.6;
var newValueSouthAmerica18: number = 1261.5;

var oldValueEurope08: number = 4965.7;
var newValueEurope18: number = 4209.3;

var oldValueNorthAmerica08: number = 6600.4;
var newValueNorthAmerica18: number = 6035.6;
4
var oldValueAsia08: number = 12954.7;
var newValueAsia18: number = 16274.1;

var oldValueAustralia08: number = 1993;
var newValueAustralia18: number = 2100.5;

var total: number = newValueAfrica18 + newValueSouthAmerica18 + newValueEurope18 + newValueNorthAmerica18 + newValueAsia18 + newValueAustralia18; 

// ...Array:number[]= [0, 1, 2, 3, 4, 5, 6]
//var newValueArray: number[] = [ 4209.3, 6035.6, 1261.5, 1235.5, 16274.1, 2100.5 ];
//var oldValueArray: number[] = [ 4965.7, 6600.4, 1132.6, 1028, 12954.7, 1993   ]; 

function Function1(){
document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in Europe";
document.querySelector(".h2_01").innerHTML = newValueEurope18.toString() ; 
document.querySelector("p").innerHTML = "Emission absolute of Europe in 2018";
document.querySelector(".h2_02").innerHTML =  Math.round(newValueEurope18/total*100) + "%";
document.querySelector(".h2_03").innerHTML =  Math.round(((newValueEurope18/oldValueEurope08)-1)*100) + "%";
document.querySelector(".h2_04").innerHTML =  Math.round(newValueEurope18-oldValueEurope08) + "kg CO2"

document.querySelector(".chart").setAttribute( 'style', 'height:' + Math.round(newValueEurope18/total*100) + "%")
}

document.querySelector(".europe").addEventListener("click", Function1); 

function Function2(){
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in North America";
    document.querySelector(".h2_01").innerHTML = newValueNorthAmerica18.toString() ; 
    document.querySelector("p").innerHTML = "Emission absolute of North America in 2018";
    document.querySelector(".h2_02").innerHTML =  Math.round(newValueNorthAmerica18/total*100) + "%";
    document.querySelector(".h2_03").innerHTML =  Math.round(((newValueNorthAmerica18/oldValueNorthAmerica08)-1)*100) + "%";
    document.querySelector(".h2_04").innerHTML =  Math.round(newValueNorthAmerica18-oldValueNorthAmerica08) + "kg CO2"

    document.querySelector(".chart").setAttribute( 'style', 'height:' + Math.round(newValueNorthAmerica18/total*100) + "%")
    }

document.querySelector(".northamerica").addEventListener("click", Function2);

function Function3(){
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in South America";
    document.querySelector(".h2_01").innerHTML = newValueSouthAmerica18.toString() ; 
    document.querySelector("p").innerHTML = "Emission absolute of South America in 2018";
    document.querySelector(".h2_02").innerHTML =  Math.round(newValueSouthAmerica18/total*100) + "%";
    document.querySelector(".h2_03").innerHTML =  Math.round(((newValueSouthAmerica18/oldValueSouthAmerica08)-1)*100) + "%";
    document.querySelector(".h2_04").innerHTML =  Math.round(newValueSouthAmerica18-oldValueSouthAmerica08) + "kg CO2"

    document.querySelector(".chart").setAttribute( 'style', 'height:' + Math.round(newValueSouthAmerica18/total*100) + "%")
    }

document.querySelector(".southamerica").addEventListener("click", Function3);

function Function4(){
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in Africa";
    document.querySelector(".h2_01").innerHTML = newValueAfrica18.toString() ; 
    document.querySelector("p").innerHTML = "Emission absolute of Africa in 2018";
    document.querySelector(".h2_02").innerHTML =  Math.round(newValueAfrica18/total*100) + "%";
    document.querySelector(".h2_03").innerHTML =  Math.round(((newValueAfrica18/oldValueAfrica08)-1)*100) + "%";
    document.querySelector(".h2_04").innerHTML =  Math.round(newValueAfrica18-oldValueAfrica08) + "kg CO2"

    document.querySelector(".chart").setAttribute( 'style', 'height:' + Math.round(newValueAfrica18/total*100) + "%")
    }

document.querySelector(".africa").addEventListener("click", Function4);

function Function5(){
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in Asia";
    document.querySelector(".h2_01").innerHTML = newValueAsia18.toString() ; 
    document.querySelector("p").innerHTML = "Emission absolute of Asia in 2018";
    document.querySelector(".h2_02").innerHTML =  Math.round(newValueAsia18/total*100) + "%";
    document.querySelector(".h2_03").innerHTML =  Math.round(((newValueAsia18/oldValueAsia08)-1)*100) + "%";
    document.querySelector(".h2_04").innerHTML =  Math.round(newValueAsia18-oldValueAsia08) + "kg CO2"

    document.querySelector(".chart").setAttribute( 'style', 'height:' + Math.round(newValueAsia18/total*100) + "%")
    }

document.querySelector(".asia").addEventListener("click", Function5);

function Function6(){
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in Australia";
    document.querySelector(".h2_01").innerHTML = newValueAustralia18.toString() ; 
    document.querySelector("p").innerHTML = "Emission absolute of Australia in 2018";
    document.querySelector(".h2_02").innerHTML =  Math.round(newValueAustralia18/total*100) + "%";
    document.querySelector(".h2_03").innerHTML =  Math.round(((newValueAustralia18/oldValueAustralia08)-1)*100) + "%";
    document.querySelector(".h2_04").innerHTML =  Math.round(newValueAustralia18-oldValueAustralia08) + "kg CO2"

    document.querySelector(".chart").setAttribute( 'style', 'height:' + Math.round(newValueAustralia18/total*100) + "%")
    }

document.querySelector(".australia").addEventListener("click", Function6);













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

