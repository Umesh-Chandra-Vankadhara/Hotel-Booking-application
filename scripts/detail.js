function billing(){
  const pricePerAdult =1000;
  var numberOfAdults=document.getElementById("Adults");
  var checkInDate=document.getElementById("fromDate");
  var checkOutDate=document.getElementById("toDate");
  var numberOfDays=(checkOutDate  -  checkInDate)/(24*60*60*1000);
  var totalPrice=pricePerAdult*numberOfDays*numberOfAdults;
  console.log(totalPrice);
  return totalPrice;
  

}