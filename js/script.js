const apiLink = 'https://api.adviceslip.com/advice'

const generatorButton = document.querySelector('#generator-button')

getApiData()

generatorButton.addEventListener('click', () => {
  getApiData()
})

async function getApiData() {
  try {
    const apiResponse = await fetch(apiLink);
      if (!apiResponse.ok){
        throw new Error("Ocorreu um erro ao tentar buscar as informações da API");
      }

    const data = await apiResponse.json()
    hideLoadingMessage()

    const adviceIdElement = document.querySelector('#advice-id')
    const adviceTextElement = document.querySelector('#advice-text')

    adviceIdElement.innerText = `Advice #${data.slip.id}`
    adviceTextElement.innerText = `"${data.slip.advice}"`
  } catch (error) {
    console.error("Erro ao tentar buscar as informações da API", error);
  }

}

function hideLoadingMessage() {
  const loadingMessage = document.querySelector('.loading')

  loadingMessage.classList.add('hidden')
}
