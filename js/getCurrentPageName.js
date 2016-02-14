function getCurrentPageName(){    
    
    var lastSlash = window.location.pathname.lastIndexOf("/");
    var lastDot = window.location.pathname.lastIndexOf(".");
    var pageName = window.location.pathname.substring(lastSlash + 1, lastDot);
    
    return pageName;
}