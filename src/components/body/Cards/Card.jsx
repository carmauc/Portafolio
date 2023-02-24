import './Card.css';
const Card = ({ data, open }) => {
	const { address, description, imageUrl } = data;
	return (
		<div className='card' onClick={open}>
			<div className='face face1'>
				<div className='content'>
					<div className='icon overflow-hidden cursor-pointer'>
						<img className='w-full' alt='captura pagina web' src={imageUrl} />
					</div>
				</div>
			</div>
			<div className='face face2'>
				<div className='content'>
					<p>{description}</p>
					<h3>
						<a
							href={address}
							target='_blank'
							className='hover:underline'
							rel='noreferrer'>
							{address}{' '}
						</a>
					</h3>
				</div>
			</div>
		</div>
	);
};

export default Card;
