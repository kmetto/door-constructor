import * as actionFunctions from './actions';

const actions = {};
const types = {};

/** Create redux actionCreators bolierplate
 * @todo that breaking autosuggestions in files.
 * need fix that in near future
 */
function createReduxActionCreator(name, action) {
  // eslint-disable-next-line func-names
  return function (value) {
    return {
      type: name,
      result: action(value),
    };
  };
}

Object.entries(actionFunctions).forEach((action) => {
  const name = action[0];
  const func = action[1];
  actions[name] = createReduxActionCreator(name, func);
  types[name] = name;
});


export {
  actions,
  types,
};
