/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
     document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
    var elems1 = document.querySelectorAll('.autocomplete');
    var instances1 = M.Autocomplete.init(elems1, options);
  

  });
    }
      
};

// Sort function for sorting autocomplete results
  function entrada(a, b, inputString) {
    return a.indexOf(inputString) - b.indexOf(inputString);
  }

function myFunction1() {
  console.log('Boton clicado');   // The function returns the product of p1 and p2
var texto=$("#inputtext").val();
//var instance = M.Autocomplete.getInstance(elems1).val;
console.log(texto);
$.ajax({
  method: "GET",
  url: "https://musicbrainz.org/ws/2/artist?query=" + texto,
  dataType: "json",   // necessitem això pq ens retorni un objecte JSON
}).done(function (msg) {
  for(var item in msg.artists) {
    console.log(msg.artists[item]);
    // aquí caldría fer mes coses, of course...
    // ...
  };
}).fail(function () {
  alert("ERROR");
});
}



$(document).ready( function ()  {
    // initialize
    $('#button1').click(myFunction1);
});
app.initialize();