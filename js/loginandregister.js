document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("register-form");
  const usernameInput = document.getElementsByName("username")[0];
  const passwordInput = document.getElementsByName("password")[0];
  const confirmPasswordInput = document.getElementsByName("confirm_password")[0];
  const usernamePattern = /^.{6,30}$/;
  const emailInput = document.getElementsByName("email")[0];
  const phoneInput = document.getElementsByName("phone")[0];
  const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const phonePattern = /^\d{10,}$/;
  
// Xử lý sự kiện input để kiểm tra tính hợp lệ của username
usernameInput.addEventListener("input", function () {
  if (usernamePattern.test(usernameInput.value)) {
    showStatus(usernameInput, true);
  } else {
    showStatus(usernameInput, false);
  }
});

  // Xử lý sự kiện input để kiểm tra tính hợp lệ của email
  emailInput.addEventListener("input", function () {
    if (emailPattern.test(emailInput.value)) {
      showStatus(emailInput, true);
    } else {
      showStatus(emailInput, false);
    }
  });
  
  // Xử lý sự kiện input để kiểm tra tính hợp lệ của số điện thoại
  phoneInput.addEventListener("input", function () {
    if (phonePattern.test(phoneInput.value)) {
      showStatus(phoneInput, true);
    } else {
      showStatus(phoneInput, false);
    }
  });
  

  // Xử lý sự kiện input để kiểm tra tính hợp lệ của mật khẩu và nhập lại mật khẩu
  passwordInput.addEventListener("input", function () {
    checkPasswordMatch();
    if (passwordInput.value) {
      showStatus(passwordInput, true);
    } else {
      showStatus(passwordInput, false);
    }
  });

  confirmPasswordInput.addEventListener("input", function () {
    checkPasswordMatch();
  });

  // Hàm kiểm tra tính hợp lệ của toàn bộ form
  function validateForm() {
    let valid = true;
    const inputs = form.querySelectorAll("input, select");
    inputs.forEach(function (input) {
      if (!input.checkValidity()) {
        showStatus(input, false);
        valid = false;
      } else {
        showStatus(input, true);
      }
    });
    return valid;
  }

  // Hàm hiển thị hoặc ẩn thông báo lỗi và thông báo đúng
function showStatus(input, valid) {
  const errorSpan = input.nextElementSibling;
  if (valid) {
    errorSpan.classList.add("success");
    errorSpan.classList.remove("error");
    errorSpan.textContent = "✔"; // Hiển thị dấu tích khi input đúng
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    errorSpan.classList.add("error");
    errorSpan.classList.remove("success");
    errorSpan.textContent = "Vui lòng nhập lại"; // Hiển thị dòng chữ "Vui lòng nhập lại" khi input sai
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}

  function checkPasswordMatch() {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    const match = password === confirmPassword;
  
    if (confirmPasswordInput.value === '') {
      showStatus(confirmPasswordInput, false); // Ẩn thông báo khi chưa nhập
    } else if (match) {
      showStatus(confirmPasswordInput, true);
      showPasswordMatchMessage(true);
    } else {
      showStatus(confirmPasswordInput, false);
      showPasswordMatchMessage(false);
    }
  }
  
  // Hàm hiển thị thông báo trùng khớp của mật khẩu và nhập lại mật khẩu
  function showPasswordMatchMessage(match) {
    const passwordMatchMessage = confirmPasswordInput.nextElementSibling;
    if (match) {
      passwordMatchMessage.classList.add("success");
      passwordMatchMessage.classList.remove("error");
      passwordMatchMessage.textContent = "✔"; // Hiển thị thông báo mật khẩu trùng khớp
      confirmPasswordInput.classList.add("valid"); // Hiển thị tích xanh khi mật khẩu trùng khớp
      confirmPasswordInput.classList.remove("invalid");
    } else {
      passwordMatchMessage.classList.add("error");
      passwordMatchMessage.classList.remove("success");
      passwordMatchMessage.textContent = "Mật khẩu không trùng khớp"; // Hiển thị thông báo mật khẩu không trùng khớp
      confirmPasswordInput.classList.add("invalid");
      confirmPasswordInput.classList.remove("valid");
    }
  }
});
