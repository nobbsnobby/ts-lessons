"use strict";
class Lead {
    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
    }
}
class NewLead {
    constructor() {
        this.observers = [];
    }
    attach(observer) {
        if (!this.observers.includes(observer)) {
            this.observers.push(observer);
        }
        return this;
    }
    detach(observer) {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return;
        }
        this.observers.splice(observerIndex, 1);
    }
    notify() {
        for (const observer of this.observers) {
            observer.update(this);
        }
    }
}
class NotificationService {
    update(subject) {
        console.log("get notification");
        console.log(subject);
    }
}
class LeadService {
    update(subject) {
        console.log("get lead");
        console.log(subject);
    }
}
const subject = new NewLead();
subject.state = new Lead("Art", "123");
const s1 = new NotificationService();
const s2 = new LeadService();
subject.attach(s1).attach(s2);
subject.notify();
subject.detach(s1);
subject.notify();
