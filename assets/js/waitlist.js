---
# Front matter (even empty) is what makes Jekyll run this through Liquid, so the API
# origin below comes from _config.yml rather than being hardcoded in two places.
---
// Progressive enhancement for the waitlist form (_includes/waitlist-form.html).
// Without JS the form is an inert mailto — this is a static site, so there is no
// server-side post target — and with it, the submission goes to the API's public
// POST /v1/waitlist cross-origin.
//
// The API answers 204 for every well-formed address, whether it's new, already
// queued, or already invited, so there is exactly one success message. Anything
// that distinguished those cases would be a membership oracle.
(function () {
  "use strict";

  var API_BASE = "{{ site.api_base }}";

  var MESSAGES = {
    success: "You're on the list. We'll email you when a spot opens up.",
    invalid: "That doesn't look like an email address.",
    rateLimited: "That's a few too many tries. Give it a minute and try again.",
    failed: "Something went wrong on our end. Please try again in a moment."
  };

  function setNote(form, text, isError) {
    var note = form.querySelector("[data-waitlist-note]");
    if (!note) return;
    note.textContent = text;
    note.classList.toggle("waitlist-error", !!isError);
  }

  function handle(form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var button = form.querySelector("button[type=submit]");
      var email = (form.querySelector("input[name=email]").value || "").trim();
      var name = (form.querySelector("input[name=displayName]").value || "").trim();

      // The browser's own `required` + type=email catches most of this; this is the
      // belt for anything that slips past (the API validates properly regardless).
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setNote(form, MESSAGES.invalid, true);
        return;
      }

      if (button) button.disabled = true;
      setNote(form, "Adding you…", false);

      var body = { email: email };
      if (name) body.displayName = name;

      fetch(API_BASE + "/v1/waitlist", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(body)
      })
        .then(function (response) {
          if (response.ok) {
            // Replace the fields entirely: there's nothing left to submit, and a form
            // still sitting there invites a second, pointless attempt.
            var fields = form.querySelector(".waitlist-fields");
            if (fields) fields.remove();
            setNote(form, MESSAGES.success, false);
            return;
          }
          if (button) button.disabled = false;
          if (response.status === 429) {
            setNote(form, MESSAGES.rateLimited, true);
            return;
          }
          if (response.status === 400) {
            setNote(form, MESSAGES.invalid, true);
            return;
          }
          setNote(form, MESSAGES.failed, true);
        })
        .catch(function () {
          if (button) button.disabled = false;
          setNote(form, MESSAGES.failed, true);
        });
    });
  }

  var forms = document.querySelectorAll("[data-waitlist]");
  for (var i = 0; i < forms.length; i++) handle(forms[i]);
})();
