function getURLParameter() {
    if(location.search.split('key=')[1].length > 1) {
       return location.search.split('key=')[1];
    } else {
       return 'https://teachablemachine.withgoogle.com/models/jPLYI-Dlf/';
    }
}

