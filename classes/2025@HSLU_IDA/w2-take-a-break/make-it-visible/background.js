// background-script.js
"use strict";


browser.cookies.onChanged.addListener(
  (cookie_info) => {
    const data = {
      cookie: cookie_info.cookie,
      cause: cookie_info.cause
    }
    send_message_to_tab("cookie", data)
  });


browser.webRequest.onBeforeRequest.addListener(
  (network) => {
    console.log(network);
    const data = network
    send_message_to_tab("network", data)
  },
  { urls: ["<all_urls>"] },
  ["blocking", "requestBody"]
);

/**
 * this method passes a message from background script to the active tab
 * @param {String} type cookie or network as a string
 * @param {Object} data an object containing the data
 */
function send_message_to_tab(type, data) {
  browser.tabs
    .query({
      currentWindow: true,
      active: true,
    })
    .then((tabs) => {
      let current_tab = tabs[0];
      let active = tabs[0].id
      post_message(active, type, data, current_tab)
    })
    .catch(onError);
}

/**
 * This is the final part of passing the message to the correct tab
 * @param {Number} id The number associated withh the current active tab
 * @param {String} type cookie or network as a string
 * @param {Object} data an object containing the data
 * @param {*} tab the current tab passed as an object
 */
function post_message(id, type, data, tab) {
  browser.tabs
    .sendMessage(id, { type: type, data: data, tab: tab })
    .then((response) => {
      console.log("Message from the content script:");
      console.log(response.response);
    })
    .catch(on_error);
}


function on_error(error) {
  console.error(`Error: ${error}`);
}










