// =========================
// ACATECH JavaScript Project
// =========================

// --------- PART 1: ELIGIBILITY CHECK ----------
document.getElementById("checkAgeBtn").addEventListener("click", function () {
  const age = document.getElementById("ageInput").value;
  const result = document.getElementById("ageResult");

  if (age >= 18) {
    result.textContent = "🎉 You are eligible for our free coding bootcamp!";
    result.style.color = "green";
  } else if (age > 0) {
    result.textContent = "😢 Sorry, you must be at least 18 years old to join.";
    result.style.color = "red";
  } else {
    result.textContent = "⚠️ Please enter a valid age.";
    result.style.color = "orange";
  }
});

// --------- PART 2: COURSE FEE CALCULATOR ----------
function calculateDiscount(fee) {
  const discountRate = 0.2; // 20% discount
  return fee - fee * discountRate;
}

document.getElementById("calcDiscountBtn").addEventListener("click", function () {
  const fee = document.getElementById("courseFee").value;
  const result = document.getElementById("discountResult");

  if (fee > 0) {
    const finalFee = calculateDiscount(fee);
    result.textContent = `Your discounted fee is ₦${finalFee}`;
    result.style.color = "green";
  } else {
    result.textContent = "⚠️ Please enter a valid course fee.";
    result.style.color = "red";
  }
});

// --------- PART 3: LOOPS (COURSE LIST + COUNTDOWN) ----------

// List of courses
const courses = ["Data Science", "Software Engineering", "Web Development", "AI & Machine Learning"];
const courseList = document.getElementById("courseList");

courses.forEach((course) => {
  const li = document.createElement("li");
  li.textContent = course;
  courseList.appendChild(li);
});

// Countdown (using for loop)
const countdownList = document.getElementById("countdownList");
for (let i = 5; i >= 1; i--) {
  const li = document.createElement("li");
  li.textContent = `${i} weeks remaining`;
  countdownList.appendChild(li);
}

// --------- PART 4: DOM INTERACTIVITY ----------

// Theme Toggle
document.getElementById("toggleThemeBtn").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  const text = document.getElementById("toggleText");
  if (document.body.classList.contains("dark-mode")) {
    text.textContent = "🌙 Dark Mode Activated";
  } else {
    text.textContent = "☀️ Light Mode Activated";
  }
});

// Add New Course
document.getElementById("addCourseBtn").addEventListener("click", function () {
  const newCourse = prompt("Enter the name of a new course:");
  if (newCourse) {
    const li = document.createElement("li");
    li.textContent = newCourse;
    document.getElementById("dynamicCourseList").appendChild(li);
  }
});
