function getURLParameter() {
    if(typeof(location.search.split('key=')[1]) !== 'undefined') {
       return location.search.split('key=')[1];
    } else {
       //return 'https://teachablemachine.withgoogle.com/models/jPLYI-Dlf/';
       return 'https://teachablemachine.withgoogle.com/models/Fwlc_aMD-/';
    }
}

