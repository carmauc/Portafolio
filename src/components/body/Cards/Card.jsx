import './Card.css'
const Card = ({ data, open }) => {
	const { address, title, description, description2, imageUrl } = data
	return (
		<div className='card' >
			<div className='face face1' onClick={open}>
				<div className='content'>
					<div className='icon overflow-hidden cursor-pointer'>
						<img className='w-full' alt='captura pagina web' src={imageUrl} />
					</div>
				</div>
			</div>
			<div className='face face2'>
				<div className='content'>
					<h2>{title}</h2>
					<p>{description}</p>
					
					<h3>
						<a
							href={address}
							target='_blank'
							className='hover:underline, hover:text-sky-600'
							rel='noreferrer'>
							{address}{' '}
						</a>
					</h3>
					<p className=' text-xs'>{description2}</p>
					
				</div>
			</div>
		</div>
	)
}

export default Card
