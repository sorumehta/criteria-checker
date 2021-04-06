

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

module.exports = {
    setCriterias,
    setActions
}