import { useState, useRef } from 'react'

const HomePage = () => {
	const emailInput = useRef()
	const feedbackInput = useRef()

	const [feedbackItems, setFeedbackItems] = useState([])

	const submitFormHandler = (event) => {
		event.preventDefault()

		const enteredEmail = emailInput.current.value
		const enteredFeebback = feedbackInput.current.value

		const requestBody = { email: enteredEmail, text: enteredFeebback }

		fetch('/api/feedback', {
			method: 'POST',
			body: JSON.stringify(requestBody),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => {
				response.json()
			})
			.then((data) => console.log(data))
		//{email : 'test@mail.com', text:'some feedback'}
		//handler();
	}

	const loadFeedbackHandler = () => {
		fetch('/api/feedback')
			.then((response) => response.json())
			.then((data) => setFeedbackItems(data.feedback))
	}
	return (
		<>
			<div>
				<h1>The Home Page</h1>
				<form onSubmit={submitFormHandler}>
					<div>
						<label htmlFor='email'>Your Email Address</label>
						<input type='email' id='email' ref={emailInput} />
					</div>

					<div>
						<label htmlFor='feedback'>Your FeedBack</label>
						<textarea id='feedback' rows='5' ref={feedbackInput} />
					</div>
					<button>Send Button </button>
				</form>
				<hr />
				<button onClick={loadFeedbackHandler}>Load FeedBack</button>
				<ul>
					{feedbackItems.map((item) => {
						return (
							<>
								<li key={item.id}>{item.text}</li>
							</>
						)
					})}
				</ul>
			</div>
		</>
	)
}

export default HomePage
