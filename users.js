const users = {
  "user1": "password1",
  "user2": "password2",
  "user3": "password3"
};

// تابعی برای اضافه کردن کاربر جدید
function addUser(username, password) {
  users[username] = password;
}