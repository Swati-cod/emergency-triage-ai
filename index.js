function checkEmergency(text) {
  text = text.toLowerCase();

  if (text.includes("unconscious") || text.includes("bleeding") || text.includes("heart attack")) {
    return "🔴 Critical - Immediate medical attention required";
  } else if (text.includes("fever") || text.includes("fracture")) {
    return "🟡 Moderate - Needs medical attention soon";
  } else {
    return "🟢 Low - Minor issue";
  }
}

// Example test
console.log(checkEmergency("person is unconscious"));
