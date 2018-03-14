var recipes = { Oxtail: 'gravy'};
function updateObjectWithKeyAndValue(object, key, value){
  var newObj = Object.assign({}, object, {[key]:value})
  return newObj 
}
<<<<<<< HEAD
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){ 
  Object.assign(object, {[key]:value})
  return object
}  
function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({}, object)
  delete newObj.key
  return key
}
function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
=======
function destructivelyUpda
>>>>>>> b0754f99edf05a0aaa2cef1e0862850252cbc7ef
