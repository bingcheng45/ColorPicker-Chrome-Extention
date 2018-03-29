// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let changeColor = document.getElementById('changeColor');
chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});


changeColor.onclick = function(element) {
    let color = element.target.value;
      chrome.tabs.executeScript(
          //tabs[0].id,
          {code: 'document.body.style.backgroundColor="LIGHTSALMON"'});
};

var copyButtonObj = document.getElementById("copyButton");

copyButtonObj.onclick = function() {copyText()};
copyButtonObj.onmouseout = function(){outFunc()};


function copyText() {
    	  /* Get the text field */
    	  let copyText = document.getElementById('myInput');
    
    	  /* Select the text field */
    	  copyText.select();
    
    	  /* Copy the text inside the text field */
    	  document.execCommand("Copy");
    
	  var tooltip = document.getElementById("myTooltip");
	  tooltip.innerHTML = "Copied: " + copyText.value;

}


function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}
