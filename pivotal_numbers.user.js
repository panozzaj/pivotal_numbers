// ==UserScript==
// @name           Pivotal Numbers
// @description    Replaces the fibonacci stacks with clearer numbers.
// @namespace      http://userscripts.org/users/125465
// @include        https://www.pivotaltracker.com/*
// @include        http://www.pivotaltracker.com/*
// ==/UserScript==

setInterval(loadNumbers, 5000)

function loadNumbers()
{
    var pvtl_images = document.getElementsByClassName("estimateButton");
    var pvtl_images2 = document.getElementsByClassName("estimateIcon");

    for (var i = 0; i < pvtl_images.length; i++)
    {   
        for (var n = 0; n < 9; n++)
        {
            if (pvtl_images[i].getAttribute("alt").slice(0, 17) == "Estimate: " + n + " point")
            {
                pvtl_images[i].setAttribute("src", "")
                pvtl_images[i].setAttribute("alt", n)
                pvtl_images[i].setAttribute("style", "padding-left:4px;padding-right:4px;padding-top:1px;padding-bottom:0px;font-weight:bold;color:white;background-color:black;font-size:1.2em;font-style:normal;-moz-border-radius: 5px;")
            }
        }
    }

    //Left hand side icons
    for (var i = 0; i < pvtl_images2.length; i++)
    {
        if (pvtl_images2[i].getAttribute("alt") == "Unestimated")
        {
            pvtl_images2[i].setAttribute("src", "")
            pvtl_images2[i].setAttribute("alt", "?")
            pvtl_images2[i].setAttribute("style", "font-weight:bold")
        }
        for (var n = 0; n < 9; n++)
        {
            if (pvtl_images2[i].hasAttribute("alt"))
            {
                if (pvtl_images2[i].getAttribute("alt").slice(0, 17) == "Estimate: " + n + " point")
                {
                    pvtl_images2[i].setAttribute("src", "")
                    pvtl_images2[i].setAttribute("alt", n)
                    pvtl_images2[i].setAttribute("style", "font-weight:bold;color:red;font-size:1.2em")
                }
            }
        }
    }
}
