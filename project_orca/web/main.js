document.getElementById("login_button").addEventListener("click", () => {
  document.getElementById("login").style.display = ""
})

document.querySelector(".equation input").addEventListener("input", () => {
  if(document.querySelector(".equation input").value === 'P(B|A) x P(A)'){
    setTimeout(async () => {
      document.body.parentElement.classList.add('access')
      let response = await fetch("backup.txt")
      let archive_text = await response.text()
      document.querySelector('.goals').innerText = archive_text
    }, 500)
  }
})