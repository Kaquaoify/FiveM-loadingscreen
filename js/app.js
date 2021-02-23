var lib =
{
    rand: function (min, max) {
        return min + Math.floor(Math.random() * max);
    },

    fadeInOut: function (duration, elementId, min, max) {
        var halfDuration = duration / 2;

        setTimeout(function () {
            var element = document.getElementById(elementId);
            element.style.opacity = min;

            setTimeout(function () {
                element.style.opacity = max;

            }, halfDuration);

        }, halfDuration);
    },
}

// DOM elements declarations
let devlogsTriggerElt = document.getElementById('devlogs-hoverable')
let devlogsElt = document.getElementById('devlogs')
let devlogsTitleElt = document.getElementById('devlogs-title')
let devlogsContentElt = document.getElementById('devlogs-content')

let rulesTriggerElt = document.getElementById('rules-hoverable')
let rulesElt = document.getElementById('rules')
let rulesContentElt = document.getElementById('rules-content')


// Fill Devlogs content
devlogsTitleElt.innerText = config.devlogs.title;

for (let i = 0; i < config.devlogs.content.length; i++) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(config.devlogs.content[i]));
    devlogsContentElt.appendChild(li);
}


devlogsTriggerElt.addEventListener('mouseenter', function () {
    devlogsElt.style.opacity = 1
})


devlogsTriggerElt.addEventListener('mouseleave', function () {
    devlogsElt.style.opacity = 0
})

// Fill Rules content
for (let i = 0; i < config.rules.length; i++) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(config.rules[i]));
    rulesContentElt.appendChild(li);
}


rulesTriggerElt.addEventListener('mouseenter', function () {
    rulesElt.style.opacity = 1
})


rulesTriggerElt.addEventListener('mouseleave', function () {
    rulesElt.style.opacity = 0
})