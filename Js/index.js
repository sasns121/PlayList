function result(){
	var Email;
	

	Email = document.querySelector('input:checked').value;
	document.getElementById('result2').innerHTML=Email;
	document.getElementById('input_1').style.display='none';
	document.getElementById('button1').style.display='none';
}