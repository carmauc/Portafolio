import Section2 from './body/Section2'
import Home from './body/Home'
import Section3 from './body/Section3'
import Footer from './footer/Footer'
import Contact from './body/Contact'
import Header from './navBar/Header'
import ButtonTop from './navBar/ButtonTop'
const Dashboard = () => {
	document.body.style = 'background-color: black'
	return (
		<div className='overflow-x-hidden'>
			<Header />
			<Home />
			<Section2 />
			<Section3 />
			<Contact />
			<Footer />
			<ButtonTop />
		</div>
	)
}

export default Dashboard
