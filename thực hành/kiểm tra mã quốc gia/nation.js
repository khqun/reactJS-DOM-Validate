function nationalCheck(zipcode) {
    regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;
    if (regexp.test(zipcode)) {
        return true
    }
    else
    {
        return false
    }
}
