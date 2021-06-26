function clicked(siteName) {
    var URL = '';
    if (siteName == 'fb') {
        URL = 'https://www.facebook.com/'
    }
    if (siteName == 'ig') {
        URL = 'https://www.instagram.com/'
    }
    if (siteName == 'gh') {
        URL = 'https://github.com/imvydehi'
    }
    if (siteName == 'tw') {
        URL = 'https://twitter.com/'
    }
    window.open(URL, '_blank');
}