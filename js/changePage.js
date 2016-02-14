function changePage(language) {
    var currentPage = getCurrentPageName();
    if (language === "en")
    {
        switch(currentPage){
            case 'accueil':
                window.open("home.html", "_self");
            break;
            case 'devenirmembre':
                window.open("joinus.html", "_self");
            break;
            case 'evenements':
                window.open("events.html", "_self");
            break;
            case 'nousjoindre':
                window.open("contactus.html", "_self");
            break;
        }
    }
    if (language === "fr")
    {
        switch(currentPage){
            case 'home':
                window.open("accueil.html", "_self");
            break;
            case 'joinus':
                window.open("devenirmembre.html", "_self");
            break;
            case 'events':
                window.open("evenements.html", "_self");
            break;
            case 'contactus':
                window.open("nousjoindre.html", "_self");
            break;
        }
    }
}