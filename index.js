var customerName = `bob`;
function upperCaseCustomerName(){
   customerName =  customerName.toUpperCase();
}
function setBestCustomer(){
 bestCustomer = `not bob`;
    return bestCustomer
}
function overwriteBestCustomer(name){
     bestCustomer = "maybe bob";
    return bestCustomer
}
const leastFavoriteCustomer = "ted";
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "rob";
    return leastFavoriteCustomer;
}
