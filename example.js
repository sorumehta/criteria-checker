const { setCriterias, setActions } = require('./criteria_checker')

// Define the interface first
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

let checker = {}

setCriterias(checker, myCriterias)
//console.log(self.criterias)
setActions(checker, myActions)

const myCrush = {stupid: false, goodLooking: true}

console.log(`should I date my crush: ${checker.actions.date(myCrush)}`)
console.log(`should I fight with my crush: ${checker.actions.fight(myCrush)}`)