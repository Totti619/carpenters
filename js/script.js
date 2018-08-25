window.onload = function () {
    let
        $initialCarpenters = document.querySelector('#initialCarpenters'),
        $initialCrates = document.querySelector('#initialCrates'),
        $initialHours = document.querySelector('#initialHours'),
        $neededCarpenters = document.querySelector('#neededCarpenters'),
        $neededCrates = document.querySelector('#neededCrates'),
        $neededHours = document.querySelector('#neededHours'),
        solve = function solve() {
            let
                initialCarpenters = parseInt($initialCarpenters.value),
                initialCrates = parseInt($initialCrates.value),
                initialHours = parseInt($initialHours.value),
                neededCrates = parseInt($neededCrates.value),
                neededHours = parseInt($neededHours.value),
                neededCarpenters = 0
            ;

            neededCarpenters = (initialCarpenters * neededCrates * initialHours) / (initialHours * neededHours);

            $neededCarpenters.innerText = neededCarpenters;
        },
        bindEvents = function bindEvents() {
            $initialCarpenters.onkeyup = solve;
            $initialCrates.onkeyup = solve;
            $initialHours.onkeyup = solve;
            $neededHours.onkeyup = solve;
            $neededCrates.onkeyup = solve;

            $initialCarpenters.onchange = solve;
            $initialCrates.onchange = solve;
            $initialHours.onchange = solve;
            $neededHours.onchange = solve;
            $neededCrates.onchange = solve;
        }
    ;

    bindEvents();
    solve();
};