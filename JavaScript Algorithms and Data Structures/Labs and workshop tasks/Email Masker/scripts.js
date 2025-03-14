let email = document.getElementById.value("email")

function maskEmail(email) {
    let atSign = email.indexOf("@");
    let toHide = email.slice(1, atSign - 1); // Middle part to mask
    let replacement = "*".repeat(toHide.length); // Mask with *
    return `${email[0]}${replacement}${email[atSign - 1]}${email.slice(atSign)}`;
  }