function displayInformation(){
  document.getElementById("salonInformation").innerHTML=`
    <p> Welcome to '${salon.name}' pet salon</p>
    <p> You can find us at ${salon.address.street}, ${salon.address.number} </p>
    <p> Open from ${salon.hours.open} to ${salon.hours.close}, Mon - Sat</p>
  `;
}
displayInformation();

