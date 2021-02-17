/*!
 * clipboard.js v2.0.6
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ClipboardJS=e():t.ClipboardJS=e()}(this,function(){return n={134:(t,e,n)=>{"use strict";n.d(e,{default:()=>r});var e=n(817),o=n.n(e);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}const c=function(){function e(t){!function(t){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this),this.resolveOptions(t),this.initSelection()}var t,n,r;return t=e,(n=[{key:"resolveOptions",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";e=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top="".concat(e,"px"),this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=o()(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=o()(this.target),this.copyText()}},{key:"copyText",value:function(){var e;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==i(t)||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}])&&a(t.prototype,n),r&&a(t,r),e}();var e=n(279),l=n.n(e),e=n(370),u=n.n(e);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e=p(n);return t=r?(t=p(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments),e=this,!(t=t)||"object"!==s(t)&&"function"!=typeof t?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function y(t,e){t="data-clipboard-".concat(t);if(e.hasAttribute(t))return e.getAttribute(t)}const r=function(){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(o,l());var t,e,n,r=d(o);function o(t,e){var n;return function(t){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}(this),(n=r.call(this)).resolveOptions(e),n.listenClick(t),n}return t=o,n=[{key:"isSupported",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof t?[t]:t,e=!!document.queryCommandSupported;return t.forEach(function(t){e=e&&!!document.queryCommandSupported(t)}),e}}],(e=[{key:"resolveOptions",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===s(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=u()(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){t=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new c({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(t){return y("action",t)}},{key:"defaultTarget",value:function(t){t=y("target",t);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(t){return y("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}])&&f(t.prototype,e),n&&f(t,n),o}()},828:t=>{var e;"undefined"==typeof Element||Element.prototype.matches||((e=Element.prototype).matches=e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector),t.exports=function(t,e){for(;t&&9!==t.nodeType;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}},438:(t,e,n)=>{var a=n(828);function i(t,e,n,r,o){var i=function(e,n,t,r){return function(t){t.delegateTarget=a(t.target,n),t.delegateTarget&&r.call(e,t)}}.apply(this,arguments);return t.addEventListener(n,i,o),{destroy:function(){t.removeEventListener(n,i,o)}}}t.exports=function(t,e,n,r,o){return"function"==typeof t.addEventListener?i.apply(null,arguments):"function"==typeof n?i.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return i(t,e,n,r,o)}))}},879:(t,n)=>{n.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},n.nodeList=function(t){var e=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===e||"[object HTMLCollection]"===e)&&"length"in t&&(0===t.length||n.node(t[0]))},n.string=function(t){return"string"==typeof t||t instanceof String},n.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},370:(t,e,n)=>{var u=n(879),s=n(438);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!u.string(e))throw new TypeError("Second argument must be a String");if(!u.fn(n))throw new TypeError("Third argument must be a Function");if(u.node(t))return c=e,l=n,(a=t).addEventListener(c,l),{destroy:function(){a.removeEventListener(c,l)}};if(u.nodeList(t))return r=t,o=e,i=n,Array.prototype.forEach.call(r,function(t){t.addEventListener(o,i)}),{destroy:function(){Array.prototype.forEach.call(r,function(t){t.removeEventListener(o,i)})}};if(u.string(t))return t=t,e=e,n=n,s(document.body,t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var r,o,i,a,c,l}},817:t=>{t.exports=function(t){var e,n="SELECT"===t.nodeName?(t.focus(),t.value):"INPUT"===t.nodeName||"TEXTAREA"===t.nodeName?((e=t.hasAttribute("readonly"))||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),e||t.removeAttribute("readonly"),t.value):(t.hasAttribute("contenteditable")&&t.focus(),n=window.getSelection(),(e=document.createRange()).selectNodeContents(t),n.removeAllRanges(),n.addRange(e),n.toString());return n}},279:t=>{function e(){}e.prototype={on:function(t,e,n){var r=this.e||(this.e={});return(r[t]||(r[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var r=this;function o(){r.off(t,o),e.apply(n,arguments)}return o._=e,this.on(t,o,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),r=0,o=n.length;r<o;r++)n[r].fn.apply(n[r].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),r=n[t],o=[];if(r&&e)for(var i=0,a=r.length;i<a;i++)r[i].fn!==e&&r[i].fn._!==e&&o.push(r[i]);return o.length?n[t]=o:delete n[t],this}},t.exports=e,t.exports.TinyEmitter=e}},o={},r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r(134).default;function r(t){if(o[t])return o[t].exports;var e=o[t]={exports:{}};return n[t](e,e.exports,r),e.exports}var n,o});

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

// Room specific js for copy button and email link.
$(document).on('turbolinks:load', function(){
  var controller = $("body").data('controller');
  var action = $("body").data('action');

  // highlight current room
  $('.room-block').removeClass('current');
  $('a[href="' + window.location.pathname + '"] .room-block').addClass('current');

  // Only run on room pages.
  if (controller == "rooms" && action == "show"){
    // Display and update all fields related to creating a room in the createRoomModal
    $("#create-room-block").click(function(){
      showCreateRoom(this)
    })

    checkIfAutoJoin()
  }

    // Autofocus on the Room Name label when creating a room only
  $('#createRoomModal').on('shown.bs.modal', function (){
    if ($(".create-only").css("display") == "block"){
      $('#create-room-name').focus()
    }
  })

  if (controller == "rooms" && action == "show" || controller == "admins" && action == "server_rooms"){
    // Display and update all fields related to creating a room in the createRoomModal
    $(".update-room").click(function(){
      showUpdateRoom(this)
    })

    $(".delete-room").click(function() {
      showDeleteRoom(this)
    })

    $('.selectpicker').selectpicker({
      liveSearchPlaceholder: getLocalizedString('javascript.search.start')
    });
    // Fixes turbolinks issue with bootstrap select
    $(window).trigger('load.bs.select.data-api');

    $(".share-room").click(function() {
      // Update the path of save button
      $("#save-access").attr("data-path", $(this).data("path"))
      $("#room-owner-uid").val($(this).data("owner"))

      // Get list of users shared with and display them
      displaySharedUsers($(this).data("users-path"))
    })

    $("#shareRoomModal").on("show.bs.modal", function() {
      $(".selectpicker").selectpicker('val','')
    })

    $(".bootstrap-select").on("click", function() {
      $(".bs-searchbox").siblings().hide()
    })

    $("#share-room-select ~ button").on("click", function() {
      $(".bs-searchbox").siblings().hide()
    })

    $(".bs-searchbox input").on("input", function() {
      if ($(".bs-searchbox input").val() == '' || $(".bs-searchbox input").val().length < 3) {
        $(".select-options").remove()
        $(".bs-searchbox").siblings().hide()
      } else {
        // Manually populate the dropdown
        $.get($("#share-room-select").data("path"), { search: $(".bs-searchbox input").val(), owner_uid: $("#room-owner-uid").val() }, function(users) {
          $(".select-options").remove()
          if (users.length > 0) {
            users.forEach(function(user) {
              let opt = document.createElement("option")
              $(opt).val(user.uid)
              $(opt).text(user.name)
              $(opt).addClass("select-options")
              $(opt).attr("data-subtext", user.uid)
              $("#share-room-select").append(opt)
            })
            // Only refresh the select dropdown if there are results to show
            $('#share-room-select').selectpicker('refresh');
          }
          $(".bs-searchbox").siblings().show()
        })
      }
    })

    $(".remove-share-room").click(function() {
      $("#remove-shared-confirm").parent().attr("action", $(this).data("path"))
    })

    // User selects an option from the Room Access dropdown
    $(".bootstrap-select").on("changed.bs.select", function(){
      // Get the uid of the selected user
      let uid = $(".selectpicker").selectpicker('val')

      // If the value was changed to blank, ignore it
      if (uid == "") return

      let currentListItems = $("#user-list li").toArray().map(user => $(user).data("uid"))

      // Check to make sure that the user is not already there
      if (!currentListItems.includes(uid)) {
        // Create the faded list item and display it
        let option = $("option[value='" + uid + "']")

        let listItem = document.createElement("li")
        listItem.setAttribute('class', 'list-group-item text-left not-saved add-access');
        listItem.setAttribute("data-uid", uid)

        let spanItemAvatar = document.createElement("span"),
            spanItemName = document.createElement("span"),
            spanItemUser = document.createElement("span");
        spanItemAvatar.setAttribute('class', 'avatar float-left mr-2');
        spanItemAvatar.innerText = option.text().charAt(0);
        spanItemName.setAttribute('class', 'shared-user');
        spanItemName.innerText = option.text();
        spanItemUser.setAttribute('class', 'text-muted');
        spanItemUser.innerText = option.data('subtext');
        spanItemName.append(spanItemUser);

        listItem.innerHTML = "<span class='text-primary float-right shared-user cursor-pointer' onclick='removeSharedUser(this)'><i class='fas fa-times'></i></span>"
        listItem.prepend(spanItemName);
        listItem.prepend(spanItemAvatar);

        $("#user-list").append(listItem)
      }
    })

    $("#presentation-upload").change(function(data) {
      var file = data.target.files[0]

      // Check file type and size to make sure they aren't over the limit
      if (validFileUpload(file)) {
        $("#presentation-upload-label").text(file.name)
      } else {
        $("#invalid-file-type").show()
        $("#presentation-upload").val("")
        $("#presentation-upload-label").text($("#presentation-upload-label").data("placeholder"))
      }
    })

    $(".preupload-room").click(function() {
      updatePreuploadPresentationModal(this)
    })

    $("#remove-presentation").click(function(data) {
      removePreuploadPresentation($(this).data("remove"))
    })

    // trigger initial room filter
    filterRooms();
  }
});

function copyInvite() {
  $('#invite-url').select()
  if (document.execCommand("copy")) {
    $('#invite-url').blur();
    copy = $("#copy-invite")
    copy.addClass('btn-success');
    copy.html("<i class='fas fa-check mr-1'></i>" + getLocalizedString("copied"))
    setTimeout(function(){
      copy.removeClass('btn-success');
      copy.html("<i class='fas fa-copy mr-1'></i>" + getLocalizedString("copy"))
    }, 1000)
  }
}

function copyAccess() {
  $('#copy-code').attr("type", "text")
  $('#copy-code').select()
  if (document.execCommand("copy")) {
    $('#copy-code').attr("type", "hidden")
    copy = $("#copy-access")
    copy.addClass('btn-success');
    copy.html("<i class='fas fa-check mr-1'></i>" + getLocalizedString("copied"))
    setTimeout(function(){
      copy.removeClass('btn-success');
      copy.html("<i class='fas fa-copy mr-1'></i>" + getLocalizedString("room.copy_access"))
    }, 1000)
  }
}

new Clipboard('.clipboard');

function shareAccess() {
  if (navigator.share) {
  navigator.share({
    title: 'BigBlueButton Share',
    text: 'Ihr Zugang zur nächsten Konferenz:',
    url: new Clipboard('#invite-url');,
  });
  }
}
function shareSuccess() {

}

function showCreateRoom(target) {
  $("#create-room-name").val("")
  $("#create-room-access-code").text(getLocalizedString("modal.create_room.access_code_placeholder"))
  $("#room_access_code").val(null)

  $("#createRoomModal form").attr("action", $("body").data('relative-root'))
  $("#room_mute_on_join").prop("checked", $("#room_mute_on_join").data("default"))
  $("#room_require_moderator_approval").prop("checked", $("#room_require_moderator_approval").data("default"))
  $("#room_anyone_can_start").prop("checked", $("#room_anyone_can_start").data("default"))
  $("#room_all_join_moderator").prop("checked", $("#room_all_join_moderator").data("default"))
  $("#room_recording").prop("checked", $("#room_recording").data("default"))
  $("#room_locksettings_disable_microphone").prop("checked", $("#room_locksettings_disable_microphone").data("default"))
  $("#room_locksettings_disable_webcam").prop("checked", $("#room_locksettings_disable_webcam").data("default"))
  $("#room_locksettings_disable_note").prop("checked", $("#room_locksettings_disable_note").data("default"))
  $("#room_webcams_for_moderator_only").prop("checked", $("#room_webcams_for_moderator_only").data("default"))
  $("#room_openroom").prop("checked", $("#room_openroom").data("default"))

  //show all elements & their children with a create-only class
  $(".create-only").each(function() {
    $(this).show()
    if($(this).children().length > 0) { $(this).children().show() }
  })

  //hide all elements & their children with a update-only class
  $(".update-only").each(function() {
    $(this).attr('style',"display:none !important")
    if($(this).children().length > 0) { $(this).children().attr('style',"display:none !important") }
  })
}

function showUpdateRoom(target) {
  var modal = $(target)
  var update_path = modal.closest(".room-block").data("path")
  var settings_path = modal.data("settings-path")
  $("#create-room-name").val(modal.closest(".room-block").find(".room-name-text").text().trim())
  $("#createRoomModal form").attr("action", update_path)

  //show all elements & their children with a update-only class
  $(".update-only").each(function() {
    $(this).show()
    if($(this).children().length > 0) { $(this).children().show() }
  })

  //hide all elements & their children with a create-only class
  $(".create-only").each(function() {
    $(this).attr('style',"display:none !important")
    if($(this).children().length > 0) { $(this).children().attr('style',"display:none !important") }
  })

  updateCurrentSettings(settings_path)

  var accessCode = modal.closest(".room-block").data("room-access-code")

  if(accessCode){
    $("#create-room-access-code").text(getLocalizedString("modal.create_room.access_code") + ": " + accessCode)
    $("#room_access_code").val(accessCode)
  } else {
    $("#create-room-access-code").text(getLocalizedString("modal.create_room.access_code_placeholder"))
    $("#room_access_code").val(null)
  }
}

function showDeleteRoom(target) {
  $("#delete-header").text(getLocalizedString("modal.delete_room.confirm").replace("%{room}", $(target).data("name")))
  $("#delete-confirm").parent().attr("action", $(target).data("path"))
}

//Update the createRoomModal to show the correct current settings
function updateCurrentSettings(settings_path){
  // Get current room settings and set checkbox
  $.get(settings_path, function(settings) {
    $("#room_mute_on_join").prop("checked", $("#room_mute_on_join").data("default") || settings.muteOnStart)
    $("#room_require_moderator_approval").prop("checked", $("#room_require_moderator_approval").data("default") || settings.requireModeratorApproval)
    $("#room_anyone_can_start").prop("checked", $("#room_anyone_can_start").data("default") || settings.anyoneCanStart)
    $("#room_all_join_moderator").prop("checked", $("#room_all_join_moderator").data("default") || settings.joinModerator)
    $("#room_recording").prop("checked", $("#room_recording").data("default") || Boolean(settings.recording))
    $("#room_locksettings_disable_microphone").prop("checked", $("#room_locksettings_disable_microphone").data("default") || settings.lockSettingsDisableMic)
    $("#room_locksettings_disable_webcam").prop("checked", $("#room_locksettings_disable_webcam").data("default") || settings.lockSettingsDisableCam)
    $("#room_locksettings_disable_note").prop("checked", $("#room_locksettings_disable_note").data("default") || settings.lockSettingsDisableNote)
    $("#room_webcams_for_moderator_only").prop("checked", $("#room_webcams_for_moderator_only").data("default") || settings.webcamsOnlyForModerator)
    $("#room_openroom").prop("checked", $("#room_openroom").data("default") || Boolean(settings.openroom))
  })
}

function generateAccessCode(){
  const accessCodeLength = 6
  var validCharacters = "0123456789"
  var accessCode = ""

  for( var i = 0; i < accessCodeLength; i++){
    accessCode += validCharacters.charAt(Math.floor(Math.random() * validCharacters.length));
  }

  $("#create-room-access-code").text(getLocalizedString("modal.create_room.access_code") + ": " + accessCode)
  $("#room_access_code").val(accessCode)
}

function ResetAccessCode(){
  $("#create-room-access-code").text(getLocalizedString("modal.create_room.access_code_placeholder"))
  $("#room_access_code").val(null)
}

function saveAccessChanges() {
  let listItemsToAdd = $("#user-list li:not(.remove-shared)").toArray().map(user => $(user).data("uid"))

  $.post($("#save-access").data("path"), {add: listItemsToAdd})
}

// Get list of users shared with and display them
function displaySharedUsers(path) {
  $.get(path, function(users) {
    // Create list element and add to user list
    var user_list_html = ""

    users.forEach(function(user) {
      user_list_html += "<li class='list-group-item text-left' data-uid='" + user.uid + "'>"

      if (user.image) {
        user_list_html += "<img id='user-image' class='avatar float-left mr-2' src='" + user.image + "'></img>"
      } else {
        user_list_html += "<span class='avatar float-left mr-2'>" + user.name.charAt(0) + "</span>"
      }
      user_list_html += "<span class='shared-user'>" + user.name + "<span class='text-muted ml-1'>" + user.uid + "</span></span>"
      user_list_html += "<span class='text-primary float-right shared-user cursor-pointer' onclick='removeSharedUser(this)'><i class='fas fa-times'></i></span>"
      user_list_html += "</li>"
    })

    $("#user-list").html(user_list_html)
  });
}

// Removes the user from the list of shared users
function removeSharedUser(target) {
  let parentLI = target.closest("li")

  if (parentLI.classList.contains("not-saved")) {
    parentLI.parentNode.removeChild(parentLI)
  } else {
    parentLI.removeChild(target)
    parentLI.classList.add("remove-shared")
  }
}

function updatePreuploadPresentationModal(target) {
  $.get($(target).data("settings-path"), function(presentation) {
    if(presentation.attached) {
      $("#current-presentation").show()
      $("#presentation-name").text(presentation.name)
      $("#change-pres").show()
      $("#use-pres").hide()
    } else {
      $("#current-presentation").hide()
      $("#change-pres").hide()
      $("#use-pres").show()
    }
  });

  $("#preuploadPresentationModal form").attr("action", $(target).data("path"))
  $("#remove-presentation").data("remove",  $(target).data("remove"))

  // Reset values to original to prevent confusion
  $("#presentation-upload").val("")
  $("#presentation-upload-label").text($("#presentation-upload-label").data("placeholder"))
  $("#invalid-file-type").hide()
}

function removePreuploadPresentation(path) {
  $.post(path, {})
}

function validFileUpload(file) {
  return file.size/1024/1024 <= 30
}

// Automatically click the join button if this is an action cable reload
function checkIfAutoJoin() {
  var url = new URL(window.location.href)

  if (url.searchParams.get("reload") == "true") {
    $("#joiner-consent").click()
    $("#room-join").click()
  }
}

function filterRooms() {
  let search = $('#room-search').val()

  if (search == undefined) { return }

  let search_term = search.toLowerCase(),
        rooms = $('#room_block_container > div:not(:last-child)');
        clear_room_search = $('#clear-room-search');

  if (search_term) {
    clear_room_search.show();
  } else {
    clear_room_search.hide();
  }

  rooms.each(function(i, room) {
    let text = $(this).find('h4').text();
    room.style.display = (text.toLowerCase().indexOf(search_term) < 0) ? 'none' : 'block';
  })
}

function clearRoomSearch() {
  $('#room-search').val('');
  filterRooms()
}
