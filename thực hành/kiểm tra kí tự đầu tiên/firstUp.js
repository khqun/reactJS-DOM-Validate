function isFirstUp(string) {
    regexp = /^[A-Z]/;
    if (regexp.test(string)) {
        console.log("first letter of the string is uppercase");
    }
    else{
        console.log("first letter of the string is not uppercase");
    }
}
isFirstUp("Abc")