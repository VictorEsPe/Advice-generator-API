const apiLink = 'https://api.adviceslip.com/advice'

const generatorButton = document.querySelector('#generator-button')

getApiData()

generatorButton.addEventListener('click', () => {
  getApiData()
})

function getApiData() {
  fetch(apiLink)
    .then(response => response.json())
    .then(data => {
      hideLoadingMessage()

      const adviceIdElement = document.querySelector('#advice-id')
      const adviceTextElement = document.querySelector('#advice-text')

      adviceIdElement.innerText = `Advice #${data.slip.id}`
      adviceTextElement.innerText = `"${data.slip.advice}"`
    })
}

function hideLoadingMessage() {
  const loadingMessage = document.querySelector('.loading')

  loadingMessage.classList.add('hidden')
}
