const container = document.querySelector(".container");
const input = document.querySelector(".input-search")
const resultsPage = document.querySelector(".result-wrap-search")
const bodyAdjust = document.querySelector("body")
const randomArticle = document.querySelector(".random-articule")
container.addEventListener("keyup", (e) => {
    let inputValue = input.value.trim()
    if (e.key == "Enter" && inputValue) {
        fetchApi()
        input.value = ""
    }
})

const fetchApi = async () => {
    try {
        let url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=${input.value}`;
        let resp = await fetch(url)
        let data = await resp.json()
        displayResults(data)
        bodyAdjust.style.height = "100%"
        randomArticle.style.display = "none"
    }
    catch {
        console.log("Error")
    }
}

const displayResults = (data) => {

    data.query.search.forEach(item => {
        const url = `https://en.wikipedia.org/?curid=${item.pageid}`;
        resultsPage.insertAdjacentHTML(
            'beforeend',
            `<div class="results-searching">
                <h3 class="h3-title">
                <a href="${url}" target="_blank">${item.title}</a>
                </h3>
                <p class="text-content">${item.snippet}</p>
            </div>`
        )
    });
}