// // function test(){
// // var a=8;
// // for (var a=0;a<7;a++)
// // {
// //  console.log(a);
// // }
// // console.log(a);
// // }
// //  test();

// function add(a,b,c)  {
//     console.log(a+b+c)
//  }
//  add(1,2,3);

// function sub(a,b,v){
//     console.log(100-(a+b+v));
//  }
// sub(1,3,3);


// let testing=function multiple(a,b,c)
// {
//     console.log(a*b*c)
// }
// testing(1,1,1);


// let testing1=() =>{


//     console.log(a*b*c)
// }
// testing(1,1,3);

// let a="jakaka";
// let b="hello"
// console.log(a.concat(b))
// //test

// function getBrowserChrome(){

//     if (browser==='chrome'){
//         return "130.43"
//     } else
//     return "130.49"
// }
// let browser='chrome';
// getBrowserChrome();
// console.log(getBrowserChrome());


function getBrowserdetails() {

    if (browser === "chrome") {
        return "chrome";

    } else if (browser === "firefox") {

        return "firefox";
    }
    else {

        return "unsupported";
    }
}
let browser = "firefox"
console.log(getBrowserdetails());


function getnameIndex() {

    switch (browser1) {
        case "chrome":
            return 'chromeversion';
        case "firefox":
            return 'firefoxversion';
        case "safari":
            return 'safariversion';
        case 'default':
            return 'unsupported';
    }
}
let browser1 = "safari"
console.log(getnameIndex());
