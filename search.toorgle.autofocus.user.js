// ==UserScript==
// @name        auto focus search bar - toorgle.com
// @namespace   Violentmonkey Scripts
// @match       http://www.toorgle.com/
// @grant       none
// @version     0.04
// @author      Michael Troester
// @description 4/10/2021, 5:48:47 AM
// ==/UserScript==
(function(){
  'use strict';
  
  //alert('Toorgle auto focus v0.04 !');
  //document.querySelector("#element_id").    //No element id for search bar?
  //document.search.q.remove();              //Test DOM traversal by removing our target 'q' observed from viewing the page source of toorgle.com
  document.search.q.focus();                //This should do what we want.  UPDATE: It seems to work fine... makes you wonder why the toorgle ppl didn't do this themselves. Maybe they're backend devs?
})();
