const clockEl = document.querySelector(".clock");

setInterval(generateTime, 1000);

console.log(
  "Hi,\nDo You like my page?\nI know you are a developer.\nIf You want to Contact via Whatsapp on \'https://rb.gy/61ico6\' and Follow me than go to my contact section in \'https://www.coderargha.ml\'.\n By the way Myself Arghadeep Mallick\n:) Stay Happy :)"
);
function generateTime() {
  const format = clockEl.getAttribute("data-format");
  const date = new Date();
  let hour = date.getHours();
  let timeStatus;
  const min = date.getMinutes();
  const sec = date.getSeconds();
  timeStatus = hour > 12 ? "PM" : "AM";
  if (format === "12") {
    hour = hour > 12 ? hour % 12 : hour;
  }
  clockEl.innerHTML = `<h1>${hour} : ${min} : ${sec}</h1> <p>${timeStatus}</p>`;
}
