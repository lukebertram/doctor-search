import { findDoctor } from './../js/doctor-search.js';
const testArray = [];
$(document).ready(function(){
  $('#search-form').submit(function(event){
    event.preventDefault();

    //remove previous search results from page
    $('.provider-list').empty();

    const doctorName = $('#search-name').val();
    const condition = $('#search-issue').val();
    // const zipcode = $('#search-zipcode').val();

    //query BetterDoctor API and render results to the page
    findDoctor(renderDoctorInfo, renderEmpty, doctorName, condition);
  });
});

//callback used to render each doctor from a successful API query
function renderDoctorInfo(doctorObj){

  //construct a string containing markup and available doctor info
  const name = `${doctorObj.profile.first_name} ${doctorObj.profile.last_name}`;

  //store an address object for the first practice listed
  const address = doctorObj.practices[0].visit_address;

  //store a  array of phone numbers for the first practice listed
  const phone = doctorObj.practices[0].phones;
  const website = '';
  const newPatients = '';
  let doctorBlock = `<div class="provider-info">`;
  doctorBlock += name;
  doctorBlock += (doctorObj.visit_address ? doctorObj.visit_address : "");
  doctorBlock += (doctorObj.name ? doctorObj.name : "");
  doctorBlock += (doctorObj.name ? doctorObj.name : "");
  doctorBlock += (doctorObj.name ? doctorObj.name : "");
  doctorBlock += `</div>`
  $('.provider-list').append(doctorBlock);
}

//callback function used to render a successful API query that returns 0 results
function renderEmpty(string){
  $('.provider-list').append(`<div class="failed-search">${string}</div>`);
}
