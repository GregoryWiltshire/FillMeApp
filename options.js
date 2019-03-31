// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
let page = document.getElementById('buttonDiv');


function populateForms(){
  //get fields and populate from memory
  inputs = getInputs();
  
  function fill(input){
    input.value =  '';
    var key = input.id;
    chrome.storage.local.get(key, function(result) {changeInputValue(result[input.id])});

    
    function changeInputValue(str){
      if(typeof str !== "undefined") {
        input.value =  str;
      }
    }

  }
  inputs.forEach(fill);
  
}




// function storeKeyValue(key, value) {

//   chrome.storage.local.set({key: value}, function() {});
// }



// function constructOptions(kButtonColors) {
//   for (let item of kButtonColors) {
//     let button = document.createElement('button');
//     button.style.backgroundColor = item;
//     button.addEventListener('click', function() {
//       chrome.storage.sync.set({color: item}, function() {
//         console.log('color is ' + item);
//       })
//     });
//     page.appendChild(button);
//   }
// }
// constructOptions(kButtonColors);



function saveInputs(element) {

  inputs = getInputs();

  function store(input){
    var val = input.value;
    var key = input.id;
    var obj = {[key]: val};
    chrome.storage.local.set(obj);
  }
  inputs.forEach(store);
  
};



  window.onload = function() {
    populateForms();
  };
