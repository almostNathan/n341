/*
    filename: moversAndShakers.js
    author: Nathan Allen
    purpose: demonstrate the use of jQuery events and animation
    created: 11/4/21
    mod history:

*/

$(document).ready(function () {
    
    $blackBox = $("#blackBox")
    $showButtons = $(".show")
    $hideButtons = $(".hide")

    $("button").on("click", function(){
        $(this).animate({
            height: "+=9px",
        }, 500,function(){
            $(this).animate({
                height: "-=9px",
            },500)
        })
    }).on("mouseover", function(){
        console.log("rotating")
        $(this).animate({
            transform: "rotate(7deg)"
        },500, function(){
            $(this).animate({
                transform: "rotate(-7deg)"
            })
        })
    })


    $hideButton = $("#hideButton").on("click", function(){
        hideElement($blackBox)
        highlightShowButtons()
    })

    $showButton = $("#showButton").on("click", function(){
        showElement($blackBox)
        highlightHideButtons()
    })
    $toggleButton = $("#toggleButton").on("click", function(){
        toggleElement($blackBox)
        if($blackBox.css("display") === "none"){
            highlightShowButtons()
        }else{
            highlightHideButtons()
        }
    })

    $slideUpButton = $("#slideUpButton").on("click", function(){
        slideUpElement($blackBox)
        highlightShowButtons()
    })

    $slideDownButton = $("#slideDownButton").on("click", function(){
        slideDownElement($blackBox)
        highlightHideButtons()
    })

    $fadeOutButon = $("#fadeOutButton").on("click", function(){
        fadeOutElement($blackBox)
        highlightShowButtons()
    })

    $fadeInButton = $("#fadeInButton").on("click", function(){
        fadeInElement($blackBox)
        highlightHideButtons()
    })

    /*  purpose: hide the passed element
        parameters: 
            HTML element: elements that is to be hidden
        return: none
    */
    function hideElement($element){
        $element.hide()
    }

    /*  purpose: show the passed element
        parameters: 
            HTML element: elements that is to be shown
        return: none
    */
    function showElement($element){
        $element.show()

    }


    /*  purpose: toggle the passed element
        parameters: 
            HTML element: elements that is to be toggled
        return: none
    */
    function toggleElement($element){
        $element.toggle()
    }

    /*  purpose: slide up and hide the passed element
        parameters: 
            HTML element: elements that is to slide up and hide
        return: none
    */
    function slideUpElement($element){
        $element.slideUp("slow")
    }

    /*  purpose: slide down and show the passed element
        parameters: 
            HTML element: elements that is to slide down and show
        return: none
    */
    function slideDownElement($element){
        $element.slideDown("slow")
    }

    /*  purpose: fade out and hide the passed element
        parameters: 
            HTML element: elements that is to fade out and hide
        return: none
    */
    function fadeOutElement($element){
        $element.fadeOut("slow")
    }

    /*  purpose: fade in and show the passed element
        parameters: 
            HTML element: elements that is to fade in and show
        return: none
    */
    function fadeInElement($element){
        $element.fadeIn("slow")
    }

    /*
        purpose: add border to buttons that will do something on screen
        parameter:
            HTML element: which elements to add the border to
        return: none
    */
    function highlightShowButtons(){
        console.log("show buttons")
        unHighlight($hideButtons)
        highlight($showButtons)
    }

    /*
        purpose: add border to buttons that will do something on screen
        parameter:
            HTML element: which elements to add the border to
        return: none
    */
    function highlightHideButtons(){
        console.log("hide buttons")
        unHighlight($showButtons)
        highlight($hideButtons)

    }
    
    /*
        purpose: add border to buttons that will do something on screen
        parameter:
            HTML element: which elements to add the border to
        return: none
    */
    function highlight($element){
        $element.css({
            "border": "2px solid green",
            "background": "lightgreen"})
    }

    /*
        purpose: remove border from buttons that will do nothing on screen
        parameter:
            HTML element: which elements to remove the border from
        return: none
    */
    function unHighlight($element){
        $element.css({
            "border": "",
            "background": "white"})
    }
});