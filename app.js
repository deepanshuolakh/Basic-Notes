let notes = [];

function loadNotes() {
    const stored = localStorage.getItem('simpleNotes');
    notes = stored ? JSON.parse(stored) : [];
    displayNotes();
}

function saveNotes() {
    localStorage.setItem('simpleNotes', JSON.stringify(notes));
}

function addNote() {
    const input = document.getElementById('noteInput');
    const text = input.value.trim();
    if (text) {
        notes.push(text);
        input.value = '';
        saveNotes();
        displayNotes();
    }
}

function deleteNote(index) {
    notes.splice(index, 1);
    saveNotes();
    displayNotes();
}

function displayNotes() {
    const list = document.getElementById('notesList');
    list.innerHTML = notes.map((note, index) => 
        `<li class="note-item">
            <span>${note}</span>
            <button class="delete-btn" onclick="deleteNote(${index})">Delete</button>
        </li>`
    ).join('');
}

document.getElementById('addBtn').addEventListener('click', addNote);
document.getElementById('noteInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addNote();
});

loadNotes();