async function fetchNews() {
	const apiKey = "5c05f645b2ad46cc94434e60de2f1f0e"
	const proxyUrl = "https://cors-anywhere.herokuapp.com/" // Прокси для обхода CORS
	const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`

	try {
		const response = await fetch(proxyUrl + apiUrl, {
			headers: {
				'Origin': 'https://33hostage.github.io/JS_HomeWork/Auth'
			},
		})
		const data = await response.json()
		console.log("Данные от API:", data)

		if (data.articles && Array.isArray(data.articles)) {
			displayNews(data.articles)
		} else {
			console.error(
				"Новости не найдены или неправильная структура данных:",
				data
			)
		}
	} catch (error) {
		console.error("Ошибка при загрузке новостей:", error)
	}
}

function displayNews(news) {
	const newsContainer = document.getElementById("news-container")

	if (!Array.isArray(news)) {
		console.error("Ожидался массив новостей, но получено:", news)
		return
	}

	news.forEach(item => {
		const newsItem = document.createElement("div")
		newsItem.classList.add("news-item")
		newsItem.style.marginBottom = "50px"

		const title = document.createElement("h3")
		title.textContent = item.title

		const content = document.createElement("p")
		content.textContent = item.description || "Нет описания"

		const link = document.createElement("a")
		link.href = item.url
		link.textContent = "Читать далее"
		link.target = "_blank"

		const image = document.createElement("img")
		image.src = item.urlToImage || "https://via.placeholder.com/150"
		image.alt = item.title
		image.style.maxWidth = "100%"

		newsItem.appendChild(image)
		newsItem.appendChild(title)
		newsItem.appendChild(content)
		newsItem.appendChild(link)

		newsContainer.appendChild(newsItem)
	})
}

window.onload = fetchNews
