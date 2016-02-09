


var sec_total = 0; //Default clock starts at 0:00


window.setInterval(addTime, 1000); //Add and calculate time every sec

//Toggles the visibility of the edit_time_div and the text on the button.
function toggleEditTime(){
	var div = document.getElementById('edit_time_div');
    if (div.hidden !== true) {
        div.hidden = true;
    }
    else {
        div.hidden = false;
    }
} 
function changeTime() {
  document.getElementById("edit_time_tgl_btn").hidden = false;
  document.getElementById('edit_time_div').hidden = true;
	
	var h, m, s
 
	h = document.getElementById("input_hours").value;
	m = document.getElementById("input_minutes").value;
	s = document.getElementById("input_seconds").value;
 
	sec_total = s*1 +m*60+h*60*60; //Turn time user entered into total seconds
 
}
 

 
function addTime() {
	h_remainder = sec_total%(60*60); //remainder seconds after dividing to get hours from sec_total
	m_remainder = h_remainder%(60); //remainder seconds after dividing to get mins
 
	var hour = (sec_total - h_remainder)/(60*60); //Get whole number of hours
	var min = (h_remainder-m_remainder)/60; //Get whole number of minutes
	var sec = m_remainder; //Get seconds
	document.getElementById("time").innerHTML = checkNumber(hour) + ":" + checkNumber(min) + ":" + checkNumber(sec); //Create time to display

	sec_total += 1; //Increase time by 1 sec
}

function checkNumber(number_to_check) {
	if( number_to_check < 10)
	number_to_check = "0" + number_to_check;
	
	return number_to_check
	
}
function clearInputFields() {}