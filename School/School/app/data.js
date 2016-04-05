function database() {
    this.students = [
        student("nilesh1", "patil1", "kolhapur"),
        student("nilesh2", "patil2", "kolhapur"),
        student("nilesh3", "patil3", "kolhapur")
    ];
}
function student(firstName, lastName, address) {
    return {
        firstName: firstName,
        lastName: lastName,
        address: address
    }
}