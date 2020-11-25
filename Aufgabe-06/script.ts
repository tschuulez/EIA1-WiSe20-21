var Africa08: number = 1028;
var Africa18: number = 1235.5;
var AfricaRel: number = Math.round(Africa18/total*100);
var AfricaChange: number = Math.round(((Africa18/Africa08)-1) *100);
var AfricaGrowth: number = Math.round(Africa18-Africa08);

var SouthAmerica08: number = 1132.6;
var SouthAmerica18: number = 1261.5;
var SouthAmericaRel: number = Math.round(SouthAmerica18/total*100);
var SouthAmericaChange: number = Math.round(((SouthAmerica18/SouthAmerica08)-1) *100);
var SouthAmericaGrowth: number = Math.round(SouthAmerica18-SouthAmerica08);

var Europe08: number = 4965.7;
var Europe18: number = 4209.3;
var EuropeRel: number = Math.round(Europe18/total*100);
var EuropeChange: number = Math.round(((Europe18/Europe08)-1) *100);
var EuropeGrowth: number = Math.round(Europe18-Europe08);

var NorthAmerica08: number = 6600.4;
var NorthAmerica18: number = 6035.6;
var NorthAmericaRel: number = Math.round(NorthAmerica18/total*100);
var NorthAmericaChange: number = Math.round(((NorthAmerica18/NorthAmerica08)-1) *100);
var NorthAmericaGrowth: number = Math.round(NorthAmerica18-NorthAmerica08);

var Asia08: number = 12954.7;
var Asia18: number = 16274.1;
var AsiaRel: number = Math.round(Asia18/total*100);
var AsiaChange: number = Math.round(((Asia18/Asia08)-1) *100);
var AsiaGrowth: number = Math.round(Asia18-Asia08);

var Australia08: number = 1993;
var Australia18: number = 2100.5;
var AustraliaRel: number = Math.round(Australia18/total*100);
var AustraliaChange: number = Math.round(((Australia18/Australia08)-1) *100);
var AustraliaGrowth: number = Math.round(Australia18-Australia08);

var total: number = Africa18 + SouthAmerica18 + Europe18 + NorthAmerica18 + Asia18 + Australia18; 




function myFunction(name: string, value18: number, valueRel: number, valueChange: number, valueGrowth: number ){

    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in" + name;
    document.querySelector(".h2_01").innerHTML = value18.toString() ; 
    document.querySelector("p").innerHTML = "Emission absolute of " + name + " in 2018";
    document.querySelector(".h2_02").innerHTML =  valueRel + "%";
    document.querySelector(".h2_03").innerHTML =  valueChange + "%";
    document.querySelector(".h2_04").innerHTML =  valueGrowth + "kg CO2"

    document.querySelector(".chart").setAttribute( 'style', 'height:' + valueRel + "%")
}

document.querySelector(".europe").addEventListener("click", myFunction.bind( null,"Europe", Europe18, EuropeRel, EuropeChange, EuropeGrowth));


document.querySelector(".northamerica").addEventListener("click", myFunction.bind(null, "North America", NorthAmerica18, NorthAmericaRel, NorthAmericaChange, NorthAmericaGrowth));

document.querySelector(".southamerica").addEventListener("click", myFunction.bind(null, "South America", SouthAmerica18, SouthAmericaRel, SouthAmericaChange, SouthAmericaGrowth));

document.querySelector(".africa").addEventListener("click", myFunction.bind(null, "Africa", Africa18, AfricaRel, AfricaChange, AfricaGrowth));

document.querySelector(".asia").addEventListener("click", myFunction.bind(null, "Asia", Asia18, AsiaRel, AsiaChange, AsiaGrowth));

document.querySelector(".australia").addEventListener("click", myFunction.bind(null, "Australia", Australia18, AustraliaRel, AustraliaChange, AustraliaGrowth));



