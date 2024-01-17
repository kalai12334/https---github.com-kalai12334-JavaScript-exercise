// function reverseString(str) {

//     let newString = "";
//     for (let  i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//        console.log(newString);
//     }

// }
// reverseString("hello");

// function reverse(str1) {
//     let newString = '';
//     for (let i = str1.length - 1; i >= 0; i--) {
//         newString += str1[i]
//         console.log(newString);
//     }

// }
// reverse("kalai");


function swtichtest() {

    switch (testType) {
        case 1:
          testType="smoke"
            break;

        case 2:
            testType= "sanity"
            break;

        case 3:
            testType="regression"
            break;

        default:
            testType="not found"
            break;
    }
  
    console.log(`The value is ${testType}`);
}
let testType = "dd "
swtichtest();