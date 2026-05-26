const skills = [
  "Python",
  "JavaScript",
  "SQL",
  "Excel",
  "Machine Learning",
  "Communication",
  "HTML",
  "CSS",
  "Data Analytics"
];

function analyzeResume() {
  const fileInput = document.getElementById("resumeInput");
  const file = fileInput.files[0];

  if (!file) {
    alert("Please upload a resume file.");
    return;
  }

  const reader = new FileReader();

  reader.onload = function(event) {
    const text = event.target.result.toLowerCase();

    let matched = [];
    let missing = [];

    skills.forEach(skill => {
      if (text.includes(skill.toLowerCase())) {
        matched.push(skill);
      } else {
        missing.push(skill);
      }
    });

    const score = Math.round((matched.length / skills.length) * 100);

    document.getElementById("score").innerHTML =
      `<strong>Resume Score:</strong> ${score}/100`;

    document.getElementById("matchedSkills").innerHTML =
      matched.map(skill => `<li>✅ ${skill}</li>`).join("");

    document.getElementById("missingSkills").innerHTML =
      missing.map(skill => `<li>❌ ${skill}</li>`).join("");

    let suggestion = "";

    if(score >= 80){
      suggestion = "Excellent resume! Your skills are well optimized.";
    } else if(score >= 60){
      suggestion = "Good resume. Add a few more technical skills.";
    } else {
      suggestion = "Your resume needs improvement. Add more relevant skills and projects.";
    }

    document.getElementById("suggestions").innerText = suggestion;

    document.getElementById("resultBox").style.display = "block";
  };

  reader.readAsText(file);
}
