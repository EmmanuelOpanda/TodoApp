function onAddTodo() {
    const input = document.querySelector(".input");
    const todosContainer = document.querySelector(".todos-container");

    if (input.value === "") return;

    const li = document.createElement("li");


    const textSpan = document.createElement("span");
    textSpan.textContent = input.value;

    if (textSpan === "hello") {
        li.textContent = 'you added one to-do to your dailey routine'

    }



    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✖";
    deleteBtn.style.backgroundColor = 'tomato'


    const editBtn = document.createElement("button");
    editBtn.textContent = `✎ ` + "";
    editBtn.style.backgroundColor = "#ffcc00"

    editBtn.style.border = 'none'

    // --- EDIT FUNCTIONALITY ---
    editBtn.addEventListener("click", () => {
        // If already editing, do nothing
        if (li.classList.contains("editing")) return;


        li.classList.add("editing");

        // Create input field with current value
        const editInput = document.createElement("input");
        editInput.type = "text";
        editInput.value = textSpan.textContent;

        // Create confirm button
        const confirmBtn = document.createElement("button");
        confirmBtn.textContent = "✔";
        confirmBtn.style.backgroundColor = "green"

        // Replace span with input
        li.replaceChild(editInput, textSpan);
        li.replaceChild(confirmBtn, editBtn);

        // When confirm clicked:
        confirmBtn.addEventListener("click", () => {
            textSpan.textContent = editInput.value; // update text

            // Restore original UI
            li.replaceChild(textSpan, editInput);
            li.replaceChild(editBtn, confirmBtn);

            li.classList.remove("editing");





        });
    });

    // DELETE BUTTON
    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(textSpan);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    todosContainer.appendChild(li);

    input.value = "";
}


