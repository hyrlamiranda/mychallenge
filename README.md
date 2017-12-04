# My Challenge

## Introduction
This challenge was done with the idea to show my knowledge using Protractor, the Jasmine framework and also JavaScript. It covers some tests on the Otodom website as I am also improving my experience with this tools.

## Prerequisites

To run, you will need to have Node.js installed.
Protractor uses the Jasmine test framework for its testing interface.
This test is using a local standalone Selenium Server to control browsers. You will need to have the Java Development Kit (JDK) installed to run the standalone Selenium Server.

## Setup

Install node.js with:
- npm install

The webdriver-manager is a helper tool to easily get an instance of a Selenium Server running.
- webdriver-manager update

Now start up a server with:
- webdriver-manager start

To run the tests with:
- protractor config.js

## Description

login_spec.js:
Fill in the field to login to the account and the next spec disconnects the account. Getting elements of the page on loginandlogout.po.js.

loginandlogout.po.js:
Contains the login and logout elements the spec page looks for the elements.

noadvertpublic_spec:
The fields are filled in and the elements searched on advert.po.js

advert.po.js:
Contains the advert elements page.
