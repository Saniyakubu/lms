const formControl = document.querySelector('.inputForms');
const inputs = document.querySelectorAll('.form-control');
const url = localStorage.getItem('url');
/* const selectMenu = document.querySelectorAll('.form-control'); */
console.log(inputs);

/* inputs.forEach((input) => {
  console.log(input.value);
}); */

// function inputControl() {
//   inputs.forEach((input) => {
//     if (input.name === 'selectMenu') {
//       const selectMenu = document.getElementById('select').value;
//       console.log(selectMenu);
//       if (selectMenu === 'Student') {
//         console.log('Student Page');
//       } else {
//         console.log('Teachers page');
//       }
//     }

//     const inputValues = { [input.name]: input.value };
//     console.log(inputValues);
//     const values = input.value;
//     const selectMenu = input[5].value;
//     console.log(selectMenu);
//   });
// }

function formSubmit(e) {
  const name = document.getElementById('Inputtext1');
  const InputEmail = document.getElementById('InputEmail1');
  const username = document.getElementById('username');
  const InputNumber = document.getElementById('InputNumber');
  const InputPassword = document.getElementById('InputPassword1');
  const select = document.getElementById('select');

  const values = {
    fullname: name.value,
    email: InputEmail.value,
    username: username.value,
    cellphone: InputNumber.value,
    password: InputPassword.value,
  };

  if (select.value === 'Student') {
    console.log('student page');
    /* const url = 'http://192.168.1.100/lms/student/register.php'; */

    async function postData(url = `${url}student/register.php`, data = values) {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      console.log(response);
      return response.json();
    }
    postData();
  } else {
    console.log('teachers page');
  }

  console.log(values);
  e.preventDefault();
  //   inputControl();
  //   console.log(selectMenu);
}

formControl.addEventListener('submit', formSubmit);
