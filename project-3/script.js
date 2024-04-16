let input = document.querySelector('input');
let addbtn = document.querySelector('button');

let recordslist = document.querySelector('.showlists');
let error = document.getElementById('error');

let data = [];
let id = null;

let objstr = localStorage.getItem('lists');
if (objstr != null) {
	data = JSON.parse(objstr);
}

addbtn.addEventListener('click', () => {
	if (id != null) {
		if (input.value != '') {
			data.splice(id, 1, { 'content': input.value });
		}
		else {
			error.innerHTML = "Input Field Is empty Changes Can't make";
			error.style.color = "red";
			setTimeout(() => {
				error.innerHTML = "";
			}, 2000);
		}
		id = null;
	}
	else if (input.value != '') {
		let check = true;
		data.forEach((e) => {
			if (e.content.toLowerCase() == input.value.toLowerCase()) {
				
				check = false;
			}
		});
		if (check) {
			data.unshift({ 'content': input.value })
		}
		else {
			error.innerHTML = "Value Already Exist";
			error.style.color = "red";
			setTimeout(() => {
				error.innerHTML = "";
			}, 2000);
		}
	}
	else {
		error.innerHTML = "Input Feild Is Empty";
		error.style.color = "red";
		setTimeout(() => {
			error.innerHTML = "";
		}, 2000);
	}
	addbtn.innerHTML = "Submit";
	saveinfo(data);
	input.value = "";
	display();
	console.log(data);
})

function saveinfo(data) {
	localStorage.setItem('lists', JSON.stringify(data))
}

function display() {
	let showdata = '';
	data.forEach((info, index) => {
		showdata += `<div id="list">
				<span class="content">${info.content}</span>
				<span id="list-button">
				<img onclick=editinfo(${index}) width="23px" alt="edit" src="./img/edit.png" />
					<img onclick=deleteinfo(${index}) width="23px" alt="Delete" src="./img/cancel.png" />
				</span>
			</div>`;
	})
	recordslist.innerHTML = showdata;
} display();


function deleteinfo(index) {
	data.splice(index, 1);
	saveinfo(data);
	display();
}


function editinfo(index) {
	id = index;
	addbtn.innerHTML = "Save Changes";
	input.value = data[id].content;
}


data.forEach((e) => {
	console.log(e.content);
});
