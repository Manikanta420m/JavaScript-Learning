const form = document.getElementById("form");

function validateForm() {
  const fullName = document.getElementById("full-name");
  const email = document.getElementById("email");
  const orderNo = document.getElementById("order-no");
  const productCode = document.getElementById("product-code");
  const quantity = document.getElementById("quantity");
  const complaintDescription = document.getElementById("complaint-description");
  const solutionDescription = document.getElementById("solution-description");

  const complaintsFieldset = document.getElementById("complaints-group");
  const solutionsFieldset = document.getElementById("solutions-group");

  const complaintChecks = complaintsFieldset.querySelectorAll(
    'input[type="checkbox"]'
  );
  const solutionRadios = solutionsFieldset.querySelectorAll(
    'input[type="radio"]'
  );

  const result = {};

  result["full-name"] = fullName.value.trim() !== "";

  result["email"] =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());

  result["order-no"] =
    /^2024\d{6}$/.test(orderNo.value.trim());

  result["product-code"] =
    /^[A-Za-z]{2}\d{2}-[A-Za-z]\d{3}-[A-Za-z]{2}\d$/.test(
      productCode.value.trim()
    );

  result["quantity"] =
    /^\d+$/.test(quantity.value.trim()) &&
    Number(quantity.value) > 0;

  result["complaints-group"] = [...complaintChecks].some(
    (checkbox) => checkbox.checked
  );

  const otherComplaint = document.getElementById("other-complaint");

  if (otherComplaint && otherComplaint.checked) {
    result["complaint-description"] =
      complaintDescription.value.trim().length >= 20;
  } else {
    result["complaint-description"] = true;
  }

  result["solutions-group"] = [...solutionRadios].some(
    (radio) => radio.checked
  );

  const otherSolution = document.getElementById("other-solution");

  if (otherSolution && otherSolution.checked) {
    result["solution-description"] =
      solutionDescription.value.trim().length >= 20;
  } else {
    result["solution-description"] = true;
  }

  return result;
}

function isValid(validationResult) {
  return Object.values(validationResult).every(Boolean);
}

function updateBorders() {
  const validation = validateForm();

  Object.keys(validation).forEach((key) => {
    const element = document.getElementById(key);

    if (element) {
      element.style.borderColor = validation[key] ? "green" : "red";
    }
  });

  document.getElementById("complaints-group").style.borderColor =
    validation["complaints-group"] ? "green" : "red";

  document.getElementById("solutions-group").style.borderColor =
    validation["solutions-group"] ? "green" : "red";
}

document
  .querySelectorAll("input, textarea")
  .forEach((element) => {
    element.addEventListener("change", updateBorders);
  });

form.addEventListener("submit", (e) => {
  const validationResult = validateForm();

  if (!isValid(validationResult)) {
    e.preventDefault();

    Object.keys(validationResult).forEach((key) => {
      if (!validationResult[key]) {
        const element = document.getElementById(key);

        if (element) {
          element.style.borderColor = "red";
        }
      }
    });

    document.getElementById("complaints-group").style.borderColor =
      validationResult["complaints-group"] ? "green" : "red";

    document.getElementById("solutions-group").style.borderColor =
      validationResult["solutions-group"] ? "green" : "red";
  }
});