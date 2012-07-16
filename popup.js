// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

chrome.tabs.getSelected(null, function(tab) {
    myFunction(tab.url);
});

function myFunction(tablink) {
  // do stuff here
  var div = document.createElement("div");
  div.innerHTML = tablink.match(/:\/\/(.[^/]+)/)[1].replace('www.','');
  document.body.appendChild(div);
  
  chrome.tabs.create({url: "https://mail.google.com/mail/u/0/#search/from%3A" + tablink.match(/:\/\/(.[^/]+)/)[1].replace('www.','')});
     
}