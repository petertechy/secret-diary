let noteArray = [];
function addNote() {
  let noteTitle = document.getElementById("title").value;
  let noteBody = document.getElementById("note").value;
  let noteObject = {
    title: noteTitle,
    note: noteBody,
    createdDate: Date.now(),
  };
  // console.log(noteObject);

  noteArray.push(noteObject);
  displayNote();
  // console.log(noteArray);
  // let xxx = "a string";
}

function displayNote() {
  let d = "";
  for (let i = 0; i < noteArray.length; i++) {
    d += `<tr>
              <td>${i + 1}</td>
              <td>
                  <p>${noteArray[i].title}</p>
              </td>
              <td>${new Date(
                noteArray[i].createdDate
              ).toLocaleDateString()}
              </td>
              <td>
                  <button class = "btn btn-danger" onclick="deleteNote(${i})">Delete</button>
              </td>
          </tr>`;
  }
  document.getElementById("display").innerHTML = d;
}

function deleteNote() {
  noteArray.splice(i, 1);
  console.log(noteArray);
  displayNote()
}