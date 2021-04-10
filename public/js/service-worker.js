if (localStorage.getItem('username') != null) {
    if (location.pathname == '/')
        location.href = '/chat'
}

const save = () => {
    username = document.getElementById('username').value
    localStorage.setItem('username',username)
    localStorage.setItem('room','2624')
  };

