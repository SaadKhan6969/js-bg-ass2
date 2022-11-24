// var a="Karachi"
// a=a.toUpperCase()
// console.log(a)

// var a="karachi"
// var firstletter=a.slice(0,1)
// var otherletter=a.slice(1)
// a=firstletter.toUpperCase() + otherletter.toLowerCase()
// console.log(a)

// var a=prompt("Enter Your Fav Phone Model")
// document.write("Length Of String is  "+ a.length)

// var input=prompt("Enter A Word")
// var lastchar =input.charAt(input.length-1)
// console.log(lastchar)

// var a="Pakistan"
//  var b="n"
// var i=a.indexOf("n")
// for(i=0;i< a.length;i++){
//     var word=a.slice(i,i+1)
//     if(b==word){
//         console.log(word)
//         console.log(i)
//     }


// // }


// var username =prompt("Enter Your User Name")
// if( username.includes("@")|| username.includes(".")|| username.includes(",")|| username.includes("!")){
//     alert("Enter A Valid USerName")
// }else(
//     console.log(username)
// )

// var a="The quick brown fox the jumps over the lazy dog"
// var b="the"
// var i=a.indexOf("the")
// for(i=0;i<a.length;i++){
//     var word =a.slice(i,i+3)
//    if(b==word){
//     console.log(word)
//     console.log(i)
//    }
// }

// var a="Paksitani"
// var b="s"
// var i=a.indexOf(3)
// for(i=0;i<a.length;i++){
//     var word=a.slice(i,i+1)
//     if(b==word){
//         console.log(i)
//     }
      
// }

// var a="Hyderabad"
// var a=a.replace(/Hyder/,"Islam")
// console.log(a)



// var message ="Ali and Sami are best friends. They play cricket and football together"
// var message=message.replace(/and/g,"&")
// document.write(message)


// var a=prompt("Enter Positive Number")
// if(a<0){
    // alert("Enter Positive Num")
// }
// var b=Math.round(a)
// var b=Math.floor(a)
// var b=Math.ceil(a)
// console.log(b)

// var a=prompt("Enter Negative Num")
// if(a>0){
//     alert("Enter A Negative Number")
// }
// var b=Math.round(a)
// var b=Math.floor(a)
// var b=Math.ceil(a)
// console.log(b)

// var a=Math.random()
// var b=Math.ceil(a*6)
// console.log(b)

// var a=Math.random()
// var b=Math.ceil(a*2)
// console.log(b)
// if(b==2){
//     alert("Heads")
// }else{
//     alert("tails")
// }


// var a="472"
// a=+a
// a=Number(a)
// // a= parseInt(a)
// // a= parseFloat(a)
// var type=typeof a
// console.log(a)
// console.log(type)

// var a="472"
// a=+a
// a=Number(a)
// var b=typeof a
// console.log(a)
// console.log(b)


// var a=35.36
// var a=a.toString()
// var b =typeof a
// console.log(a)
// console.log(b)

// var percentage=30/45*100
// console.log(percentage)
// var b=percentage.toFixed(2)
// console.log(b)

// var weight = prompt("What is your weight?", "50");

// if (weight.includes("kg")) {
//   console.log("Your weight is " + weight);
// } else {
//   console.log("Your weight is " + weight + " kg");
// }

// var a=prompt("Enter Your Weight ","50")
// if(a.includes("kg")){
//     console.log("Your Weight Is "+ a)
// }else{
//     console.log("Your Weight is"+a+"Kg")
// }

// var dt=new Date()
// document.write(dt)

// var a=dt.getDay()
// var a=dt.getDate()
// var a=dt.getMonth()
// var a=dt.getFullYear()
// var a=dt.getHours()
// var a=dt.getMinutes()
// var a=dt.getSeconds()

// var months=["jan","feb","mar","Apr",'may',"Jun","Jul","Aug","Sept","oct","nov","Dec"]
// var dt=new Date()
// var a=dt.getMonth()
// console.log("Current Month Is : "+months[a])

// var days=["","mon","tue","Wed","Thur","fri","sat","sun"]
// var dt=new Date()
// var a=dt.getDay()
// console.log(a)
// console.log(days[a])



// var dt=new Date()
// var a=dt.getDate()
// if(new Date().getDate()<16){
//     alert("First Fifteen Days Of Month")
// }else{
//     alert("Last 15 Days Of The Month")
// }

// var dt=new Date("31-dec-2020")
// document.write(dt)

// var dt=new Date("18-jun-2020")
// var dt2=new Date()
// var a=dt.getTime()
// var b=dt2.getTime()
// var c=b-a
// var d=(c/(1000*60*60*24))
// document.write(Math.round(d )+" Days Have Passed Since 1st Ramzan 2020")


// function abc(){
//     var a=new Date()
//     console.log(a)
// }
// abc()

// function abc(){
//     var a=prompt(" Enter YOur First Name ")
//     var b=prompt(" Enter Your last Name ")
//     document.write("Hello Mr/Mrs " + a + b )
// }
// abc()


// function abc(){
//     var a=prompt("Enter Ur First Num")
//     a=+a
//     a=Number(a)
//     var b=prompt("Enter Ur Second Num")
//     b=+b
//     b=Number(b)
//     console.log(a+b)
// }
// abc()

