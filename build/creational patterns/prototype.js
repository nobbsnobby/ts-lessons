"use strict";
class UserHistory {
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
    clone() {
        console.log(this);
        let target = new UserHistory(this.email, this.name);
        return target;
    }
}
const a = new UserHistory('111', '111');
a.clone();
