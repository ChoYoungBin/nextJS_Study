import { useRouter } from 'next/router'
const AllEventPage = () => {
	const router = useRouter()
	const detailHandler = () => {
		router.push({
			pathname: '/events/[id]',
			query: { id: '조영빈' },
		})
	}
	return (
		<>
			<div>
				<h1>AllEventPage</h1>
				<button onClick={detailHandler}>영빈 detail</button>
			</div>
		</>
	)
}
export default AllEventPage
