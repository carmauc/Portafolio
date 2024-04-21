import { paginas } from './Data'
import Tarjeta from './Tarjeta'
const Tarjetas = () => {
	// md:gap-x-20 gap-5
	const paginasOrdenadas = paginas.sort((a, b) => b.id - a.id);

	return (
		<section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-x-8 justify-center'>
			{paginasOrdenadas.map(item => (
				<Tarjeta data={item} key={item.id} />
			))}
		</section>
	)
}

export default Tarjetas
