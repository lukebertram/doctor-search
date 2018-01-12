import {apiKey} from './../.env';

export function findDoctor(renderFunction, searchName, searchCondition){
  let promise = new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    const url = "https://api.betterdoctor.com/2016-03-01/doctors?";
    const location = "location=or-portland";
    const name = "&name=" + searchName;
    const query = "&query=" + searchCondition;
    const key = "&skip=0&limit=50&user_key=" + apiKey;

  });//end of promise

  promise.then(function(response) {

  }, function(error) {
    console.log(`Bad News: ${error.message}`);
  });//end of promise.then()

}//end of findDoctor()
