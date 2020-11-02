const tm_link = "https://teachablemachine.withgoogle.com/models/";
const loc_key = location.search.split('key=')[1];

function getURLParameter() {
    if (typeof (loc_key) !== 'undefined' && loc_key.length > 3) {
        if (loc_key.includes(tm_link))
            return loc_key;
        else
            return tm_link + loc_key;
    } else {
        //return tm_link + 'jPLYI-Dlf/';
        return tm_link + "bSWNuNwZa/";
    }
}

