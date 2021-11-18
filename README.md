## T-9 Converter

### Task
Implement a number-to-word list converter as a Node backend and React/Redux frontend.
 The backend should provide a rest endpoint that converts a given numeric string into a list of corresponding words in the style of T9 [[https://en.wikipedia.org/wiki/T9_(predictive_text)](https://en.wikipedia.org/wiki/T9_(predictive_text))] or Phonewords [[https://en.wikipedia.org/wiki/Phoneword](https://en.wikipedia.org/wiki/Phoneword)]. For example, given the input 23 the output should be: ad, ae, af, bd, be, bf, cd, ce, cf_
The frontend should allow the user to enter a number, query the backend for the corresponding expansions, and display them.

### Process
#### Getting Started
Make sure you have nodejs and npm installed before continuing.

First make a copy of the repo locally:
```
git clone git@github.com:Kwasiiii/T9-Converter.git
```
Then start the server inside the t9-converter folder run:
```
$ yarn
$ node index.js
```
After you've started the server you should also start the frontend to see the app. In a new terminal window in the t9-converter do the following:
```
$ cd client
$ yarn
$ yarn start
```
It should open the app at  [http://localhost:3000/](http://localhost:3000/)

The server is available at  [http://localhost:4000/](http://localhost:4000/)
