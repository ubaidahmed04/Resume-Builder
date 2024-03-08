function validateName(name) {
    // Check if name is empty
    if (!name.trim()) {
      return {
        state: false,
        message: "Please enter your name",
      };
    }
    if (!/^[a-zA-Z\s]+$/.test(name)) {
      return {
        state: false,
        message: "Name can only contain letters and spaces.",
      };
    }
    if (name.length < 4) {
      return {
        state: false,
        message: "Name should be at least 4 characters long.",
      };
    }
    if (name.length > 50) {
      return {
        state: false,
        message: "Name should be at most 50 characters long.",
      };
    }
    return {
      state: true,
      message: "",
    };
  }
  
  function isContainSpecialCharacter(str) {
    var specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    return specialChars.test(str);
  }

  function validatePhoneNumber(phoneNumber) {
    const cleanedPhoneNumber = phoneNumber.replace(/\D/g, "");
  
    if (cleanedPhoneNumber.length !== 11) {
      return {
        state: false,
        message: "Phone number must contain 11 number",
      };
    }
    if (cleanedPhoneNumber.substring(0, 2) !== "03") {
      return {
        state: false,
        message: "Phone number start with 03",
      };
    }
    if (/[a-zA-Z]/.test(phoneNumber)) {
      return {
        state: false,
        message: "Phone number should not contain alphabetic characters",
      };
    }
    return {
      state: true,
      message: "",
    };
  }
  
  function validateEmail(email) {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  
    if (emailRegex.test(email)) {
      return {
        state: true,
        message: "",
      };
    } else {
      return {
        state: false,
        message: "please enter correct email",
      };
    }
  }
  
  export {  validateName, validatePhoneNumber, validateEmail };
  