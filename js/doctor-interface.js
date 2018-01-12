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
  const phones = doctorObj.practices[0].phones;

  //store a website object for the first practice listed
  const website = doctorObj.practices[0].website; //optional

  //store a boolean : true if practice is accepting new patients, else false
  const acceptingNewPatients = doctorObj.practices[0].accepts_new_patients; //optional
  const newPatients = ( acceptingNewPatients ? "Yes" : "No")

  const field = `<div class="provider-attribute"><span class="label">`;

  //doctorBlock holds the markup that will be added to the DOM
  let doctorBlock = `<div class="provider-info">`;
  doctorBlock += `${field}Name: </span>${name}</div>`;
  doctorBlock += `${field}Address: </span>${address.street} / ${address.city}, ${address.state} ${address.zip}</div>`;

  phones.forEach((phone)=>{
    doctorBlock += `${field}${phone.type}: </span>${phone.number}</div>`;
  })

  doctorBlock += ( website ? `${field}Website: </span>`+
                  `<a href="${website}">${website}</a></div>` : "");

  doctorBlock += `${field}Accepting New Patients: </span>${newPatients}</div>`;
  doctorBlock += `</div>`;
  $('.provider-list').append(doctorBlock);
}

//callback function used to render a successful API query that returns 0 results
function renderEmpty(string){
  $('.provider-list').append(`<div class="failed-search">${string}</div>`);
}
