
	function AllEvents() {
		checkTextBoxes();
		showSlides();
		Resizemenu()
		showAlert1();
		
			 }
function checkTextBoxes()
{

	try {
		const textBoxs = document.getElementsByClassName('input-field');

		for (let i = 0; i < textBoxs.length; i++) {
			
			txtName_BlurForAllEvents(textBoxs.item(i).id);

		}
	} catch (ex) {
		alert("while checking values " + ex);
	}
}
	

function Resizemenu()
{
	try {
	
		let BodyWidth = document.body.clientWidth-95;
		var Menu = document.getElementById("menus");
		var item = document.getElementById("Menu1").children[0];
		
		let itemwidth = item.children[0].clientWidth;
		
		let itemscount = item.children.length;
	
		let perline = (BodyWidth / itemwidth);
		
		let lines = (itemscount / perline);
		if (lines <= 1) {


			Menu.classList.remove("menuDiv3line");
			Menu.classList.remove("menuDiv4line");

			Menu.classList.remove("menuDiv2line");
		}
		if (lines > 1 && lines <= 2) {
			

			Menu.classList.remove("menuDiv3line");
			Menu.classList.remove("menuDiv4line");

			Menu.classList.add("menuDiv2line");
		}
		else if (lines > 2 && lines <= 3) {
			
			Menu.classList.remove("menuDiv2line");
			Menu.classList.remove("menuDiv4line");

			Menu.classList.add("menuDiv3line");
		}
		else if (lines > 3 && lines <= 4) {
			

			Menu.classList.remove("menuDiv3line");
			Menu.classList.remove("menuDiv2line");

			Menu.classList.add("menuDiv4line");
		}
	}
	catch (ex)
	{

		alert("Error on resizing menu" + ex);
    }
}



	function txtName_Focus(txtname) {

		
				 try {


					 var label = document.getElementById("SubBody_"+txtname + "lbl");

					 var textBox = document.getElementById("SubBody_"+txtname);


	label.classList.remove("input-label-active");
	textBox.classList.remove("input-field-active");

	label.classList.add("input-label-active");
	textBox.classList.add("input-field-active");

	textBox.focus();
				 }
	catch (ex) {
		alert("Whille focusing " + ex);
				 }
			 }


	function txtName_Blur(txtname) {
				 try {
					 var label = document.getElementById("SubBody_"+txtname + "lbl");

					 var textBox = document.getElementById("SubBody_"+txtname);

	label.classList.add("input-label-active");
	textBox.classList.add("input-field-active");

	if (textBox.value == "") {
		label.classList.remove("input-label-active");

					 }

	textBox.classList.remove("input-field-active");
				 }

	catch (Exception) {
		alert("while blurring " + Exception);

				 }
			 }

function txtName_BlurForAllEvents(txtname) {
	try {
		var label = document.getElementById(  txtname + "lbl");

		var textBox = document.getElementById(  txtname);

		label.classList.add("input-label-active");
		textBox.classList.add("input-field-active");

		if (textBox.value == "") {
			label.classList.remove("input-label-active");

		}

		textBox.classList.remove("input-field-active");
	}

	catch (Exception) {
		alert("while blurring by AllEvents " + Exception);

	}
}

let slideIndex = 0;
showSlides();

function showSlides() {
	try {
		let i;
		
		let slides = document.getElementsByClassName("mySlides");
		
		let dots = document.getElementsByClassName("dot");
	
		for (i = 0; i < slides.length; i++) {
			
			slides[i].style.display = "none";
		}
		slideIndex++;
		if (slideIndex > slides.length) { slideIndex = 1 }
		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
		}
		slides[slideIndex - 1].style.display = "block";
		dots[slideIndex - 1].className += " active";
		setTimeout(showSlides, 3000); // Change image every 2 seconds
	}
	catch (EX)
	{

	}
}


function showAlert1 ()
{
	
	try {
		var alerts = document.createElement("div");
		alerts.className = "alerts";
		
		var list = document.getElementById("SubBody_ErrorList");

		if (list != null) {
			for (let i = 0; i < list.childElementCount; i++) {
				var masgitem = document.createElement("div");
				masgitem.innerHTML = list.children[i].innerText;
				let val = list.children[i].value;

				if (val == "Success") {
					masgitem.className = "alertSuccess";

				}
				else if (val == "Info") {
					masgitem.className = "alertInfo";

				}
				else if (val == "Danger") {
					masgitem.className = "alertDanger";

				}
				alerts.appendChild(masgitem);
			}

			if (alerts.childElementCount > 0) {
				var Parent = document.getElementById("messageDiv");
				Parent.appendChild(alerts);
				Parent.scrollIntoView();
			}
			setTimeout(add, 5000);
		}
	}
		catch (ex) {
			alert("Eror while showing messages" + ex);

		}
}
function add() {
	var alerts = document.getElementsByClassName("alerts");

	alerts.item(0).classList.add("fade-out");
	
	setTimeout(remove,5000);
}
function remove() {
	var alerts = document.getElementsByClassName("alerts");
	var Parent = document.getElementById("messageDiv");
	Parent.removeChild(alerts.item(0));
}

function ImagePreview() {
	try {
		var PictureBox = document.getElementById("SubBody_ui_Image");
		var event = document.getElementById("SubBody_FileUpload");
		
		PictureBox.src = URL.createObjectURL(event.files[0]);
	}
	catch (ex)
	{
		alert("Error on image preview "+ex);

    }
}
function Confirmation(msg) {

	return confirm(msg);

}