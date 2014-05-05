var changeProp = function(name, value) {
    var oldParam = window.location.search;
    var newParam = "";
    var reg = new RegExp("(^|)" + name + "=([^&]*)(|$)", "gi");
    var prop = name + "=" + value;

    if (oldParam) {
        if (oldParam.match(reg)) {
            if (oldParam.match(reg)[0] === prop) {
                return false;
            }
            newParam = oldParam.replace(oldParam.match(reg)[0], prop);
        } else {
            newParam = oldParam + "&" + prop;
        }
    } else {
        newParam = "?" + prop;
    }

    window.location.search = newParam;
};

changeProp("safe", "off");
