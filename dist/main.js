(() => {
  "use strict";
  function t(t, e) {
    const i = e;
    t.validity.typeMismatch ||
    t.validity.patternMismatch ||
    t.validity.valueMissing
      ? (i.textContent = "You must enter an email address.")
      : t.validity.tooLong
        ? (i.textContent = "Entered email is too long.")
        : t.validity.tooShort &&
          (i.textContent = "Entered email is too short.");
  }
  function e(t, e) {
    const i = e;
    t.validity.valueMissing
      ? (i.textContent = "You must enter a zip code.")
      : t.validity.tooLong
        ? (i.textContent = "Entered zip code is too long.")
        : t.validity.patternMismatch &&
          (i.textContent = "Numbers and symbols only");
  }
  function i(t, e) {
    const i = e;
    t.validity.valueMissing
      ? (i.textContent = "You must enter a password.")
      : (i.textContent = "");
  }
  function n(t, e) {
    const i = e,
      n = t.parentNode.parentNode.querySelector("#pwd");
    t.validity.valueMissing
      ? (i.textContent = "You must confirm your password.")
      : t.value !== n.value
        ? ((i.textContent = "Passwords do not match."),
          t.classList.add("invalid"),
          n.classList.add("invalid"))
        : t.value === n.value &&
          ((i.textContent = ""),
          t.classList.remove("invalid"),
          n.classList.remove("invalid"));
  }
  const o = document.querySelectorAll("input, select"),
    a = document.querySelectorAll(".submit");
  o.forEach((o) => {
    o.addEventListener("input", (a) => {
      const s = a.target.parentNode.querySelector(".error");
      o.validity.valid
        ? "pwd" === o.id
          ? i(o, s)
          : "confirm-pwd" === o.id
            ? n(o, s)
            : ((s.textContent = ""), o.classList.remove("invalid"))
        : "mail" === o.id
          ? t(o, s)
          : "zipcode" === o.id && e(o, s);
    });
  }),
    a.forEach((a) => {
      a.addEventListener("click", (a) => {
        o.forEach((o) => {
          if (!o.validity.valid) {
            const s = o.parentNode.querySelector(".error");
            "mail" === o.id
              ? t(o, s)
              : "country" === o.id
                ? (function (t, e) {
                    const i = e;
                    t.validity.valueMissing &&
                      (i.textContent = "You must select a country.");
                  })(o, s)
                : "zipcode" === o.id
                  ? e(o, s)
                  : "pwd" === o.id
                    ? i(o, s)
                    : "confirm-pwd" === o.id && n(o, s),
              o.classList.add("invalid"),
              a.preventDefault();
          }
        });
      });
    });
})();
