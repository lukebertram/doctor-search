import { findDoctor } from './../js/doctor-search.js';
const testArray = [];
$(document).ready(function(){
  $('#search-form').submit(function(event){
    event.preventDefault();
    //must validate presence/absence of these fields and translate to url
    //keys/values before passing to findDoctor()
    const doctorName = $('#search-name').val();
    const condition = $('#search-issue').val();
    // const zipcode = $('#search-zipcode').val();
    findDoctor(renderDoctorInfo, doctorName, condition);
  });
});

function renderDoctorInfo(doctorObj){

}
