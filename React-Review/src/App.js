import { Route, Routes } from 'react-router-dom'
import AllMeetups from './pages/AllMeetups'
import Favorites from './pages/Favorites'
import NewMeetups from './pages/NewMeetups'

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<AllMeetups />} />
				<Route path='/new-meetup' element={<NewMeetups />} />
				<Route path='/favorites' element={<Favorites />} />
			</Routes>
		</>
	)
}

export default App
