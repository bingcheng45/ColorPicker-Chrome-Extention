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
		{
			code: 'document.body.style.backgroundColor="LIGHTSALMON"'
		});
};


//Copy text to clipboard from textbox TAColor
var copyButtonObj = document.getElementById("copyButton");
copyButtonObj.onclick = function() {
	copyText()
};

function copyText() {
	/* Get the text field */
	let copyText = document.getElementById('TAColor');

	/* Select the text field */
	copyText.select();

	/* Copy the text inside the text field */
	document.execCommand("Copy");

	var tooltip = document.getElementById("myTooltip");
	tooltip.innerHTML = "Copied: " + copyText.value;
}

//test maxlength put here for chrome extension to work but not for website
$(document).ready(function()
{
	$("#TAColor").attr('maxlength', '7');
});

//add # char when user have typed 6 alphanumeric values
//function textArea_keyUp(e) {
//	if (document.getElementById("TAColor").value.length == 6) {
//		document.getElementById("TAColor").value = '#' + document.getElementById("TAColor").value;
//	}
//}

//document.addEventListener('DOMContentLoaded', function() {
///	var link = document.getElementById('TAColor');
//	// onClick's logic below:
//	document.addEventListener('keyup', textArea_keyUp, false);
//	document.addEventListener('keydown', textArea_keyUp, false);
//});


// prevent user from entering more than 6 alphanumberic characters
var validationLength = 7;
$('#TAColor').on('keyup keydown change', function() {

	
	var userInput = document.getElementById("TAColor").value;
	console.log(userInput);

	//check if # exist at first char, else append to first 6 char
	//if '#' is not inside the text and userInput length is more than 0, append # in front
	if(userInput.indexOf("#") < 0 && userInput.length > 0){
		userInput = "#" + userInput;
	}

	//Ensure text would not exceed 7 characteres, either from typing or pasted
	if (userInput.length > validationLength) {
		userInput = userInput.substr(0, validationLength);
	}

	//Set textbox value to modified values
	document.getElementById("TAColor").value = userInput;
});



//prevent pasting more than 7
//var textbox = document.getElementById("TAColor");
//textbox.onpaste = function(e) {
//	e.clipboardData.getData('text/plain').slice(0, 3);
//};



//function validateKey(e){
//   here can be whatever keys
//   if (e.keyCode >= 65 && e.keyCode <= 90 || e.keyCode >= 97 && e.keyCode <= 122) return false;
//}