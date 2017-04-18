class Validate {
  static link(link) {
    var patt = new RegExp("^http://");
    var hasHTTP = patt.test(link);

    if(hasHTTP) {
      return link
    }
    else {
      return 'http://'.concat(link)
    }
  }
}

module.exports = Validate;
