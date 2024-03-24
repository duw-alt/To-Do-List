const form = document.querySelector(".new-task-form");
const listElement = document.querySelector(".tasks");

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const taskInput = form.querySelector(".new-task-input");
	const task = taskInput.value;

	if (!task) {
		alert("Please enter a task!");
		return;
	}

	const taskElement = document.createElement('div');
	taskElement.classList.add('task');
	taskElement.innerHTML = '<div class="content"><input class="text" type="text" value="' + task + '" readonly></div><div class="actions"><button class="edit">Edit</button><button class="delete">Delete</button></div>';

	const taskInputElement = taskElement.querySelector('.text');
	const taskEditElement = taskElement.querySelector('.edit');

	taskEditElement.addEventListener('click', () => {
		if (taskInputElement.readOnly) {
			taskInputElement.readOnly = false;
			taskEditElement.innerText = "Save";
			taskInputElement.focus();
		} else {
			taskInputElement.readOnly = true;
			taskEditElement.innerText = "Edit";
		}
	});

	taskElement.querySelector('.delete').addEventListener('click', () => {
		listElement.removeChild(taskElement);
	});

	listElement.appendChild(taskElement);
	form.reset();
});