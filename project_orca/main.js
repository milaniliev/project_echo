document.getElementById("login_button").addEventListener("click", () => {
  document.getElementById("login").style.display = ""
})

document.querySelector(".equation input").addEventListener("input", () => {
  if(document.querySelector(".equation input").value === 'P(B|A) x P(A)'){
    setTimeout(() => {
      document.body.parentElement.classList.add('access')
    }, 500)
  }
})