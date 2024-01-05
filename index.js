function addingEventListener() {
    alert('I was clicked!');
    input.addEventListener('click', addingEventListener);
}

const input = document.getElementById('input');

