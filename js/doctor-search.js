import {apiKey} from './../.env';

export function findDoctor(renderSuccess, renderEmpty, searchName, searchCondition){
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
    };
    request.open('GET', url, true);
    request.send();
  });//end of promise

  promise.then(function(response) {
    //render each doctor in search results to the page
    const results = JSON.parse(response);
    console.log(`TOTAL RESULTS: ${results.meta.total}`);
    if (results.meta.total > 0) {
      const practices = results.data;
      practices.forEach((doctor)=>{
        renderSuccess(doctor);
      });
    } else {
      renderEmpty("No doctors matched your search criteria");
    }
  }, function(error) {
    //render appropriate error message to page
    console.log(`Bad News: ${error.message}`);
    renderEmpty(`An error has occured: <br> ${error.message}`);
  });//end of promise.then()

}//end of findDoctor()
