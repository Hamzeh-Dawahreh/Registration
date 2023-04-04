let array = JSON.parse(localStorage.getItem("info")) || [];
render();

let form = document.getElementById("studentsForm");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let fullName = event.target.fname.value;
  let birth = event.target.birth.value;
  let gender = event.target.gender.value;
  let phone = event.target.phone.value;
  let grade = event.target.grade.value;
  let userimage = event.target.userimage.value;

  let newStudent = new Student(
    fullName,
    birth,
    gender,
    phone,
    grade,
    userimage
  );
  array.push(newStudent);
  let JSONarray = JSON.stringify(array);
  localStorage.setItem("info", JSONarray);

  form.reset();
});

function Student(name, dateOfBirth, gender, phone, grade, userimage) {
  this.fullName = name;
  this.dateOfBirth = dateOfBirth;
  this.gender = gender;
  this.phone = phone;
  this.grade = grade;
  this.userimage = userimage;
}
