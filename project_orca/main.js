document.getElementById("login_button").addEventListener("click", () => {
  document.getElementById("login").style.display = ""
})

document.querySelector(".equation input").addEventListener("input", () => {
  if(document.querySelector(".equation input").value === 'P(B|A) x P(A)'){
    setTimeout(() => {
      document.getElementById("login").style.display = ""
      document.getElementById("login").querySelector("[name=username]").value = "gpackard"
      document.getElementById("login").querySelector("[name=password]").value = "fasdagsad"
    }, 500)
  }
})