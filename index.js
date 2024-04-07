let noteArray = [];
function addNote() {
  let noteTitle = document.getElementById("title").value;
  let noteBody = document.getElementById("note").value;
  let noteCategory = document.getElementById("category").value;
  let noteObject = {
    title: noteTitle,
    note: noteBody,
    category: noteCategory,
    createdDate: Date.now(),
  };
  console.log(noteObject);

  noteArray.push(noteObject);
  displayNote();
  // console.log(noteArray);
  // let xxx = "a string";
}

function displayNote() {
  let d = "";
  for (let i = 0; i < noteArray.length; i++) {
    let cat = noteArray[i].category; // Assuming you have a 'category' property in your note objects

    // Set border color based on category
    let borderColor = "";
    if (cat === "Sport") {
      borderColor = "red";
    } else if (cat === "Church") {
      borderColor = "blue";
    } else if (cat === "Event") {
      borderColor = "green";
    } else if (cat === "Party") {
      borderColor = "orange";
    } else {
      borderColor = "black"; // Default border color
    }

    d += `<tr onclick='popModal(${i})' data-bs-toggle="modal" data-bs-target="#exampleModal" class="mine" style="border-left: 5px solid ${borderColor};">
              <td>${i + 1}</td>
              <td>
                  <p>${noteArray[i].title}</p>
              </td>
              <td>${new Date(noteArray[i].createdDate).toLocaleDateString()}
              </td>
              <td>
                  <button class="btn btn-danger" onclick="deleteNote(${i})">Delete</button>
              </td>
          </tr>`;
  }
  document.getElementById("display").innerHTML = d;
}

function deleteNote(i) {
  if (confirm(`Are you sure you want to delete ${noteArray[i].title}`)) {
    noteArray.splice(i, 1);
    console.log(noteArray);
    displayNote();
  }
}

function popModal(i) {
  let modalContent = `
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title fw-bold fs-2">${noteArray[i].title}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>${noteArray[i].note}</p>
        </div>
        <div class="modal-footer">
          <button onclick= editModal(${i}) type="button" class="btn btn-info">Edit</button>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  `;
  document.getElementById("exampleModal").innerHTML = modalContent;
}

function editModal(i) {
  let modalContent = `
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <input id="editTitle" value="${noteArray[i].title}" type="text" class="form-control mb-3">
        </div>
        <div class="modal-body">
        <input id="editNote" value= "${noteArray[i].note}" type="text" class="form-control mb-3">
        </div>
        <div class="modal-footer">
          <button onclick="updateModal(${i})" type="button" class="btn btn-warning">Update</button>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  `;
  document.getElementById("exampleModal").innerHTML = modalContent;
}
function updateModal(i) {
  let newTitle = document.getElementById("editTitle").value;
  let newNote = document.getElementById("editNote").value;
  noteArray[i].title = newTitle;
  noteArray[i].note = newNote;
  console.log(noteArray);
  displayNote();
  $("#exampleModal").modal("hide"); // Hide the modal after updating the note
}

// When the "Add Category" button is clicked
document.getElementById("openModalBtn").addEventListener("click", function () {
  document.getElementById("myModal").style.display = "block";
});

// When the "Close" button in the modal is clicked
document.getElementById("closeModalBtn").addEventListener("click", function () {
  document.getElementById("myModal").style.display = "none";
});

  // When the "Add Category" button in the modal is clicked
  document.getElementById("addCategoryBtn").addEventListener("click", function() {
    var categoryName = document.getElementById("categoryName").value;
    var categoryColor = document.getElementById("categoryColor").value;
    var selectElement = document.getElementById("category");
    var option = document.createElement("option");
    option.text = categoryName;
    option.style.backgroundColor = categoryColor;
    selectElement.add(option);
    document.getElementById("myModal").style.display = "none";
    document.getElementById("categoryName").value = "";
    document.getElementById("categoryColor").value = "#000000"; // Reset color to black
  });
