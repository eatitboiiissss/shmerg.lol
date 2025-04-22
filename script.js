function toggleMembers() {
  const list = document.getElementById('memberList');
  list.style.display = list.style.display === 'block' ? 'none' : 'block';
}

function clickMember(name) {
  alert(`You clicked on: ${name}`);
}
