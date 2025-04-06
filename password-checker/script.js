const passwordInput = document.getElementById("password");
const strengthBar = document.getElementById("strength-bar");
const feedback = document.getElementById("feedback");

passwordInput.addEventListener("input", () => {
  const pwd = passwordInput.value;
  const strength = evaluatePassword(pwd);
  updateUI(strength);
});

function evaluatePassword(password) {
  let score = 0;

  if (password.length >= 8) score += 1;
  if (/[a-z]/.test(password)) score += 1;
  if (/[A-Z]/.test(password)) score += 1;
  if (/\d/.test(password)) score += 1;
  if (/[\W_]/.test(password)) score += 1;

  return score;
}

function updateUI(score) {
  const colors = ["#ef4444", "#f59e0b", "#fbbf24", "#10b981", "#22c55e"];
  const messages = [
    "Very weak – Add more characters and variety.",
    "Weak – Include uppercase, numbers & symbols.",
    "Fair – Try to make it longer and more complex.",
    "Strong – Good job! Add more if you want extra security.",
    "Very strong – Your password is highly secure."
  ];

  strengthBar.style.backgroundColor = colors[score - 1] || "#e5e7eb";
  feedback.innerText = messages[score - 1] || "Too short – Use at least 8 characters.";
}
