// BigBlueButton open source conferencing system - http://www.bigbluebutton.org/.
//
// Copyright (c) 2018 BigBlueButton Inc. and by respective authors (see below).
//
// This program is free software; you can redistribute it and/or modify it under the
// terms of the GNU Lesser General Public License as published by the Free Software
// Foundation; either version 3.0 of the License, or (at your option) any later
// version.
//
// BigBlueButton is distributed in the hope that it will be useful, but WITHOUT ANY
// WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
// PARTICULAR PURPOSE. See the GNU Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public License along
// with BigBlueButton; if not, see <http://www.gnu.org/licenses/>.

// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require turbolinks
//= require jquery
//= require tabler
//= require tabler.plugins
//= require jquery_ujs
//= require jquery-ui/widget
//= require jquery-ui/widgets/sortable
//= require pickr.min.js
//= require bootstrap-select.min.js
//= require_tree .
$('.nav-link').click(function(){
		$(".nav-link.active").removeClass("active");
		$(this).addClass("active");
		$($(this).data('col2')).hide();
		$($(this).data('col')).show();
});

var m = document.getElementsByClassName("m");
var p = document.getElementsByClassName("p");
var z = document.getElementsByClassName("z");
document.getElementById("1").onclick = function() {
    p.style.display = "none";
    z.style.display = "none";
    for(var i = 0; i < m.length; i++) {
        m[i].style.display = "block";
    }
}
document.getElementById("2").onclick = function() {
    p.style.display = "none";
    m.style.display = "none";
    for(var i = 0; i < z.length; i++) {
        z[i].style.display = "block";
    }
}
document.getElementById("3").onclick = function() {
    m.style.display = "none";
    z.style.display = "none";
    for(var i = 0; i < p.length; i++) {
        p[i].style.display = "block";
    }
}
