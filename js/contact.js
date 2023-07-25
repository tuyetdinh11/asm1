function sendMessage() {
    var name = document.getElementById("name-input").value;
    var email = document.getElementById("email-input").value;
    var phone = document.getElementById("phone-input").value;
    var message = document.getElementById("message-input").value;

    // Gửi thông tin lên server hoặc xử lý theo logic của bạn ở đây

    // Ví dụ: In ra thông tin trong console
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Message:", message);

    // Xóa nội dung form sau khi gửi
    document.getElementById("name-input").value = '';
    document.getElementById("email-input").value = '';
    document.getElementById("phone-input").value = '';
    document.getElementById("message-input").value = '';
}