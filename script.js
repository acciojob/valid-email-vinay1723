function validEmail(str) {
  //your JS code here.
	let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Do not change the code below.
// const str = prompt("Enter an email address.");
// alert(validEmail(str));

