function isNaN(val){
	If(val === "" || val == null || val == []){
		return false;
	} else if(!isNaN(val)){
		return true;
	}else{
		return false;
	}
}  
