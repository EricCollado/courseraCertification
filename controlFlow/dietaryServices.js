let role = "Subscriber";
let auth;

switch(role){
    case "Employee":
        auth = "Access to Dietary Services";
        break;
    case "Enrolled Member":
        auth = "Access to Dietary Services and one-on-one interaction with a dietician"
        break;
    case "Subscriber":
        auth = "Partial access to Dietary Services"
        break;
    case "Non-Subscriber":
        auth = "Enroll, or at least subscribe first to avail this facility"
        break;
}

console.log("You have:",auth);