import { useRouter } from 'next/router'

const ClientIndexPage = () => {
	const router = useRouter()

	console.log(router.query)
	const loadProjectHandler = () => {
		//load data...
		//router.push('/clients/max/prjecta')
		router.push({
			pathname: '/clients/[id]/[clientprojectid]',
			query: { id: 'max', clientprojectid: 'projecta' },
		})
	}

	return (
		<>
			<div>
				<h1>The Projects of a Given Client</h1>
				<button onClick={loadProjectHandler}>Load Project A</button>
			</div>
		</>
	)
}
export default ClientIndexPage
