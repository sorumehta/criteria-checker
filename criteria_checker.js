

const setActions = (self, actionArr) => {
    let actions = {}
    actionArr.forEach(action => {
        actions[action.name] = (userObj) => {
            let final_result = false
            action.criteria.forEach(criteriaSet => {
                //console.log("evaluating criteria set:")
                //console.log(criteriaSet)
                //console.log(Object.keys(criteriaSet))
                let criteriaSetResult =  Object.keys(criteriaSet).reduce((currResult, criteriaName) => {
                    //console.log(`now evaluating ${criteriaName}, which is: ${criteriaSet[criteriaName]}`)
                    //console.log(`currResult = ${currResult}`)
                    return self.criterias[criteriaName].evaluate(userObj, criteriaSet[criteriaName]) && currResult
                }, true)
                //console.log(`criteriaSetResult= ${criteriaSetResult}`)
                final_result = criteriaSetResult || final_result
                //console.log(`final result = ${final_result}`)
            })
            return final_result
        }
    })
    self.actions = actions
}

const setCriterias = (self,criteriaArr) => {
    let criterias = {}
    criteriaArr.forEach(criteria => {
        criterias[criteria.name] = criteria
    })
    
    self.criterias = criterias
}

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

let self = {}

setCriterias(self, myCriterias)
//console.log(self.criterias)
setActions(self, myActions)

const myCrush = {stupid: false, goodLooking: true}

console.log(`should I date my crush: ${self.actions.date(myCrush)}`)
console.log(`should I fight with my crush: ${self.actions.fight(myCrush)}`)