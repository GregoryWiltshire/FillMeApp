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

    chrome.storage.local.get([key], function(result) {changeInputValue(result[key])});

    // chrome.storage.local.get(key, function(result){
    //   console.log(result)
    //   changeInputValue(result)
    // });
    

    function changeInputValue(str){
      if(typeof str !== "undefined") {
        input.value =  str;
      }
    }

  }
  inputs.forEach(fill);
  
}


function saveInputs(element) {

  inputs = getInputs();

  function store(input){
    console.log('swig');
    var key = input.id;
    var val = input.value;
    var obj = {[key]: val};
    chrome.storage.local.set(obj, function() {});
    chrome.storage.local.get(input.id, function(result) {
        console.log(result);
      });
  }
  inputs.forEach(store);
};



  // window.onload = function() {
  //   populateForms();
  // };


document.addEventListener('DOMContentLoaded', populateForms);
document.getElementById("clickMe").onclick = saveInputs;