//URL参数值转化为json对象的工具方法
//window.location.href 
//window.location.hash
//window.location.search
function GetRequest(url) {       
    var theRequest = new Object(); 
    if (url.indexOf("?") != -1 || location.search) {  
        var url = url.slice(url.indexOf('?') + 1) || location.search.slice(1);  //获取url中"?"符后的字符串
        strs = url.split("&");  
        for (var i = 0; i < strs.length; i++) {   
            theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);  
        } 
    } 
    return theRequest;
}