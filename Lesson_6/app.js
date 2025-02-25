const apiPosts = "https://jsonplaceholder.typicode.com/posts"
const apiComments = "https://jsonplaceholder.typicode.com/comments"

const getData = async () => {
	const [postsResponse, commentsResponse] = await Promise.all([
		fetch(apiPosts),
		fetch(apiComments),
	])

	const posts = await postsResponse.json()
	const comments = await commentsResponse.json()
	displayPosts(posts.slice(0, 10), comments)
}

const displayPosts = (posts, comments) => {
	const postsContainer = document.getElementById("posts-container")

	postsContainer.innerHTML = ""

	posts.forEach(post => {
		const postComments = comments
			.filter(comment => comment.postId === post.id)
			.slice(0, 2)

		const postElement = document.createElement("div")
		postElement.classList.add("post")
		postElement.innerHTML = `
					<h2>${post.title}</h2>
					<p>${post.body}</p>
					<h3><u>Комментарии:</u></h3>
			`
		postComments.forEach(comment => {
			const commentElement = document.createElement("div")
			commentElement.classList.add("comment")
			commentElement.innerHTML = `
									<p><strong>${comment.name}</strong>
									<br>(${comment.email}): ${comment.body}</p>
							`
			postElement.appendChild(commentElement)
		})

		postsContainer.appendChild(postElement)
	})
}

getData()
