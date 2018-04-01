import * as actionFunctions from './actions';

let actions = {};
let types = {};

Object.entries(actionFunctions).forEach((action) => {
    let name = action[0];
    let func = action[1];
    actions[name] = createReduxActionCreator(name, func);
    types[name] = name;
});

function createReduxActionCreator(name, action) {
    return function(value) {
        return {
            type: name,
            result: action(value)
        }
    }
}

export {
    actions,
    types
};