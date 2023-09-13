"use strict"
/*** Reigon 1 Global Variables  */
/*** Reigon 2 Exect Event Click
/*** Reigon 3 Event handler function  */
// Object have properties 
//Demo1 :  Define and select a property object 
function simpleObject() {
    console.log("Select a property object")
    var CarObject = {
        name: "Flat",
        model: "500",
        weight: "850kg",
        color: "white"
    }
    //write object to console
    // Write each properties 
    console.log("object information")
    console.log(CarObject)
    console.log(CarObject.name)
    console.log(CarObject.model)
    console.log(CarObject.weight)
    console.log(CarObject.color)
}
//Demo 2 Object has Method 
function FullNameCarByMethod() {
    console.log("use method to know car's full name")
    var CarObject = {
        name: "Flat",
        model: "500",
        weight: "850kg",
        color: "white",
        FullCarName: function () {
            return this.name + " " + this.model
        }
    }
    //write to conosle
    CarObject.model = "800"
    //change method fullname into uppercase 
    CarObject.FullCarName = fullNameUpperCase;
    //conosle
    console.log("Car object")
    console.log(CarObject)
    console.log("Method fullName " + CarObject.FullCarName())
}
function array() {
    console.log("Select a property object")
    var CarObject = {
        name: "Flat",
        model: "500",
        weight: "850kg",
        color: "white",
        wheel: [
            { type: "front", quantity: 2 },
            { type: "rear", quantity: 2 },
            { type: "spare", quantity: 1 },
        ],
        radio: [
            { name: "philips", model: "wave 200", bluetooth: "yes" }
        ]
    }
    console.log("Car object " + CarObject)
    //write properities 
    console.log(CarObject.wheel[0])
    console.log(CarObject.wheel[1])
    console.log(CarObject.wheel[2])
    console.log(CarObject.radio[0])
}
function TransfromObj() {
    debugger;
    var vMeserdesObject = getObj("Mescerdes-S-Class", "Exclusive-S-Class", "2 tons", "black")
    console.log("Mescerdes car :")
    console.log(vMeserdesObject)
}
function getNewColor() { 
    var CarObject = {
        name: "Flat",
        model: "500",
        weight: "850kg",
        color: "white"
    }
    getRandomCodeColor(CarObject)
    console.log(CarObject.color)
    changeColor(CarObject)
    console.log(CarObject.color)
}
/*** Reigon 4 Common Function   */
function fullNameUpperCase() {
    return (this.name + " " + this.model).toUpperCase(); // chuyen doi uppcase
}
function getObj(paramName, paramModel, paramWeight, paramColor) {
    var vGetobject = {
        name: paramName,
        model: paramModel,
        weight: paramWeight,
        color: paramColor
    }
    return vGetobject
}
//Lấy mã màu dựa trên mã code màu
function getRandomCodeColor(paramCarObject) { //usage var newColor = getRandomCodeColor(CarObject)
    let colorCode = "123456789ABCDEFG"
    paramCarObject.color = "#"
    for (var i = 0; i < 6; i++) {
        paramCarObject.color += colorCode[Math.floor(Math.random() * 16)]
    }
    return paramCarObject.color
}
//lấy mà màu dựa trên mảng 
//cách hoạt động changeColor(vGetobject)
function changeColor (paramCarObject){ debugger
   let color = ["pink","green","brown","red","cyan","black"]
    var randomColorIndexInArray = Math.floor(Math.random()*color.length)
    var randomColor = color[randomColorIndexInArray]
   return  paramCarObject.color = randomColor
}