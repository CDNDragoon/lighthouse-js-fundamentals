const whichSchool =  function(age) {
  if (age < 13) {
    return "Elemantary School";
  } else if (age >= 13 && age <= 18) {
    return "Secondary School";
  } else {
    return "Lighthouse Labs";
  }
}