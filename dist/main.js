(()=>{"use strict";const t=document.querySelectorAll("input"),e=document.querySelectorAll("select");t.forEach((t=>{t.addEventListener("input",(e=>{const o=e.target.parentNode.querySelector(".error");t.validity.valid?o.textContent="":"mail"===t.id?function(t,e){const o=e;t.validity.typeMismatch||t.validity.patternMismatch||t.validity.valueMissing?o.textContent="You must enter an email address.":t.validity.tooLong?o.textContent="Entered email is too long.":t.validity.tooShort&&(o.textContent="Entered email is too short.")}(t,o):"zipcode"===t.id&&function(t,e){const o=e;t.validity.valueMissing?o.textContent="You must enter a zip code.":t.validity.tooLong&&(o.textContent="Entered zip code is too long.")}(t,o)}))})),e.forEach((()=>{}))})();