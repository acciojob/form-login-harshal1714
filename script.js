function getFormvalue() {
    //Write your code here
 // Retrieve the form element
  var form = document.getElementById('form1');

  // Retrieve the values of the first and last name fields
  var firstName = form.elements['fname'].value;
  var lastName = form.elements['lname'].value;

  // Display the values using alert()
  alert(firstName + ' ' + lastName);

}
