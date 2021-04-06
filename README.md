# Criteria Checker

Hello, I have created my own feature criteria checker for one of my personal projects. 
It is inspired from [fflip](https://github.com/FredKSchott/fflip), but its cooler. 
Whats different here fromm fflip is that user defined actions are built as functions and the criteria values are passed to them. So you only have to invoke your named action as a function with the object whose criteria you want to check. 
For example:
```
const myCriterias = [
    {
        name: 'isStupid',
        evaluate: (userObj, val) => {
            //console.log(`userObj.stupid = ${userObj.stupid}`)
            return userObj.stupid === val
        }
    },
    {
        name: 'isGoodLooking',
        evaluate: (userObj, val) => {
            //console.log(`uerObj.goodLooking = ${userObj.goodLooking}`)
            return userObj.goodLooking === val
        }
    }
]

const myActions = [
    {
        name: 'date',
        // is smart AND is good looking
        criteria: [{isStupid: false, isGoodLooking: true}]
    },
    {
        name: 'fight',
        // is stupid OR isGoodLooking
        criteria: [{isStupid: true}, {isGoodLooking: false}]
    }
]

let self = {}

setCriterias(self, myCriterias)
//console.log(self.criterias)
setActions(self, myActions)

const myCrush = {stupid: false, goodLooking: true}

console.log(`should I date my crush: ${self.actions.date(myCrush)}`)
console.log(`should I fight with my crush: ${self.actions.fight(myCrush)}`)
```

Super easy, innit?