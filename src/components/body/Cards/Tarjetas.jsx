import { paginas } from './Data';
import Tarjeta from './Tarjeta';
const Tarjetas = () => {
	return (
		<section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-x-20 gap-5'>
			{paginas.map(item => (
				<Tarjeta data={item} key={item.id} />
			))}
		</section>
	);
};

export default Tarjetas;
