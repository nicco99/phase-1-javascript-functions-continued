// code your solution here

const mondayWork = function(string="go to the office") {
    return `This Monday, I will ${string}.`
}


const saturdayFun = function(string='roller-skate') {
return `This Saturday, I want to ${string}!`
    }


saturdayFun()("bathe my dog")



function wrapAdjective(value="*") {
    return function(string="special") {
        return `You are ${value}${string}${value}!`
    }
}

wrapAdjective("%")("a dedicated programmer");
