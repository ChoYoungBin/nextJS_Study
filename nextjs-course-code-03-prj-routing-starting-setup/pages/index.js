import Link from 'next/link'
const HomePage = () => {
	return (
		<>
			<div>
				<h1>The Home Page</h1>
				<ul>
					<li>
						<Link href='/'>목록</Link>
					</li>
					<li>
						<Link href='/events'>events상세</Link>
					</li>
				</ul>
			</div>
		</>
	)
}
export default HomePage
