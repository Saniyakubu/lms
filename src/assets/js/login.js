//localStorage.setItem('url', 'http://192.168.1.101/lms/');
const url = localStorage.getItem('url');
const username = document.getElementById('InputUsername');
const password = document.getElementById('InputPassword');
const select = document.getElementById('select');
const form = document.querySelector('.loginForm');
console.log(url);
function handleSubmit(e) {
  e.preventDefault();

  const loginValues = { username: username.value, password: password.value };

  async function studentLogin() {
    try {
      const response = await fetch(`${url}student/login.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginValues),
      });
      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.description);
        return;
      }
      if (resData.status == 0) {
        sessionStorage.setItem('user', JSON.stringify(resData.user));
        console.log(resData.user);
        swal('Success', resData.message, 'success');

        window.location.replace('../html/student/dashboard.html');
      } else {
        swal('Oops', resData.message, 'error');
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function teacherLogin() {
    try {
      const response = await fetch(`${url}teacher/login.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginValues),
      });
      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.description);
        return;
      }
      if (resData.status == 0) {
        sessionStorage.setItem('user', JSON.stringify(resData.user));
        console.log(resData.user);
        alert(resData.message);
        window.location.replace('../teacher/dashboard.html');
      } else {
        alert(resData.message);
      }
    } catch (error) {
      console.log(error);
    }
  }
  select.value == 'Teacher' ? teacherLogin() : studentLogin();
}

form.addEventListener('submit', handleSubmit);
