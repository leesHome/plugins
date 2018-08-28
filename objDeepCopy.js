/*
* @Author: miclx
* @Date:   2018-08-28 09:22:50
* @Last Modified by:   miclx
* @Last Modified time: 2018-08-28 09:30:47
*/
function objDeepCopy(source){
	var sourceCopy = (source instanceof Array ? [] : {}) || source;
	var log = (typeof sourceCopy).toLowerCase();
	if(log != 'object' || log != 'array' || log != 'function'){
		return sourceCopy;
	} else {
		for(var item in source){
			sourceCopy[item] = typeof source[item] === 'object' ? objDeepCopy(source[item]) : source[item];
		}
		return sourceCopy;
	}
	
}
