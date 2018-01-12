# Doctor Search

#### A web app to search for Portland-area doctors, January 12th, 2018

#### By **Luke Bertram**

## Description

This application utilizes the [BetterDoctor API](https://developer.betterdoctor.com/) to allow the user to search for Portland-area doctors by submitting either a doctor's name or a  medical issue.

## Setup/Installation Requirements

For greatest ease of use, simply visit [this website](http://lukebertram.github.io/doctor-search) in your web browser of choice. However, if you're feeling frisky, you can also use the following steps to clone the project from [GitHub](http://github.com) and run it locally on your own computer:

 * Visit the github page for [this project](http://github.com/lukebertram/doctor-search)
 * Click the "Clone or Download" button and copy the address found there. Alternatively, just copy this address to your clipboard: https://github.com/lukebertram/doctor-search.git
 * Access your system's command line interface (_ie Terminal, for MacOS Users_) and navigate to your home directory by entering the following magical spell into your command line (note: do not enter the '$' character):
 >`$cd ~`

 * Next, cast the following, more advanced spell:  
 >`$git clone https://github.com/lukebertram/doctor-search.git`

 * If you don't already have npm installed on your machine, visit the [npm website](https://docs.npmjs.com/getting-started/installing-node) for instructions on how to get it.

 * Move into the project directory with `$cd doctor-search`

 * Install npm dependencies with `$npm install`

 * Install bower dependencies with `$bower install`

 * Build the project with `$gulp build`

 * Finally, open the project in your system's default web browser with the following final incantation:
 >`$open doctor-search/index.html`


### Specified Behaviors
The requested behaviors of this project are listed below.

<!-- Each behavior was written as a Jasmine unit test before being implemented in actual JavaScript code in the class description files. -->

1. A user should be able to enter a medical issue to receive a list of doctors in the Portland area that fit the search query.

2. A user should be able to to enter a name to receive a list of doctors in the Portland area that fit the search query.

3. If the query response includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients (the API provides this data).

4. If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is.

5. If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. (This is not an error so it should be handled separately from any errors.)




## Known Bugs


## Support and Contact Details

Flag me down in class, or send me a tweetbook on facestagram if you have any troubles.


## Technologies Used

This app relies on queries to the [BetterDoctor API](https://developer.betterdoctor.com/) to search for doctors by name or by medical issue in need of treament.

Dev environment built with npm, gulp, jasmine, karma, babel and more. For a complete list of modules used in this project, check the package.json and bower.json manifest files.

### License

MIT License

Copyright (c) 2018 **Luke Bertram**
