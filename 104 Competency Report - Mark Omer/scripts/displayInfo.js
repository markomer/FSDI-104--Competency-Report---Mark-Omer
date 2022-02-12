function displayInformation(){
  document.getElementById("salonInformation").innerHTML=`
    <p> ~ '${salon.name}' pet salon ~</p>
    <p> at ${salon.address.street}, ${salon.address.number} </p>
    <p> ${salon.hours.open} to ${salon.hours.close}, Mon - Sat</p>
  `;
}
displayInformation();

