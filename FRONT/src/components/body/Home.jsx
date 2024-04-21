import Box from './Box.jsx';
import Mousetraill from './Mousetraill.jsx';

const Home = () => {
	return (
		<section
			id='home'
			className='relative bg-zinc-900 min-h-screen h-auto w-auto flex justify-center items-center md:justify-start'>
			<div className='absolute z-20'>
				<Box />
			</div>
			<Mousetraill />
		</section>
	);
};

export default Home;
