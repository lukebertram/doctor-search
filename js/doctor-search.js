import {apiKey} from './../.env';

export function findDoctor(renderFunction, searchName, searchCondition){
  let promise = new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    const location = "location=or-portland";//hard-coded for now
    const name = (searchName ? "&name=" + searchName : "");
    const query = (searchCondition ? "&query=" + searchCondition : "");
    const key = "&skip=0&limit=50&user_key=" + apiKey;
    const url = "https://api.betterdoctor.com/2016-03-01/doctors?" + location + name + query + key;

    request.onload = function() {
      if(this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    }
    request.open('GET', url, true);
    request.sent();
  });//end of promise

  promise.then(function(response) {

  }, function(error) {
    console.log(`Bad News: ${error.message}`);
  });//end of promise.then()

}//end of findDoctor()
