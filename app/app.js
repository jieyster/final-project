import { loadPage } from "./model.js";



function changeRoute() {
    
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");
    console.log(hashTag + " " + pageID);
    loadPage(pageID);
    if (pageID === "") {
        pageID = "home";
    }
    loadPage(pageID);
    
    if(pageID !== "home") {
        $("nav").addClass("nav2", true);
    } else {
        $("nav").toggleClass("nav2", false)
    }

    window.onscroll = function () { 
        if (window.pageYOffset >= 500 & pageID== "home") {
            $("nav").addClass("nav2", true);
        } else if (window.pageYOffset < 500 & pageID== "home") {
            $("nav").removeClass("nav2", true);
        } else {
            $("nav").addClass("nav2", true);
        }
    };
    // loadPage("page you are working on")
}




function initListeners() {
    $(window).on("hashchange", changeRoute);
    changeRoute();

}

$(document).ready(function () {
    initListeners();
});