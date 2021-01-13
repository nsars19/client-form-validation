const form = document.querySelector("form");
const [email, country, zip, pw, pwc] = [...form.children];
const fields = [email, country, zip, pw, pwc];

// prevent submitting if any are invalid
form.addEventListener("submit", (e) => {
  fields.forEach((field) => {
    if (!field.checkValidity()) {
      field.className = "invalid invalid-wiggle";
      e.preventDefault();
    }
  });

  if (pw.checkValidity() && pwc.checkValidity()) {
    if (pw.value !== pwc.value) {
      [pw, pwc].forEach(
        (field) => (field.className = "invalid invalid-wiggle")
      );

      e.preventDefault();
    }
  }
});

fields.forEach((field) => {
  field.addEventListener("blur", () => {
    field.checkValidity()
      ? (field.className = "valid")
      : (field.className = "invalid");
  });
});
