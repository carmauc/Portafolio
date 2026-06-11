import CSS from './Icons/CSS.svg'
import HTML from './Icons/HTML.svg'
import JS from './Icons/JavaScript.svg'
import REACT from './Icons/React-Dark.svg'
import FIGMA from './Icons/Figma-Dark.svg'
import MYSQL from './Icons/MySQL-Dark.svg'
import GITHUB from './Icons/Github-Dark.svg'
import TAILWIND from './Icons/TailwindCSS-Dark.svg'
import WORDPRESS from './Icons/Wordpress.svg'
import TYPESCRIPT from './Icons/TypeScript.svg'
import PYTHON from './Icons/Python-Dark.svg'
import NODE from './Icons/NodeJS-Dark.svg'
import JAVA from './Icons/Java-Dark.svg'
import MAVEN from './Icons/Maven-Dark.svg'
import DOCKER from './Icons/docker.svg'






const Skills = () => {
	const skills = [
		{
			id: 1,
			image: HTML,
			name: 'HTML',
		},
		{
			id: 2,
			image: CSS,
			name: 'CSS',
		},

		{
			id: 3,
			image: JS,
			name: 'JavaScript',
		},
		{
			id: 4,
			image: REACT,
			name: 'React',
		},

		{
			id: 5,
			image: TAILWIND,
			name: 'TailwindCSS',
		},
		{
			id: 6,
			image: MYSQL,
			name: 'MySQL',
		},
		{
			id: 7,
			image: GITHUB,
			name: 'Github',
		},
		{
			id: 8,
			image: FIGMA,
			name: 'Figma',
		},
		{
			id: 9,
			image: WORDPRESS,
			name: 'WordPress',
		},
			{
			id: 10,
			image: TYPESCRIPT,
			name: 'Typescript',
		},
		{
				id: 11,
			image: NODE,
			name: 'Node',
		},
				{
			id: 12,
			image: PYTHON,
			name: 'Python',
		},
	    		{
			id: 13,
			image: JAVA,
			name: 'Java',
		},
		    		{
				id: 14,
				image: MAVEN,
				name: 'Maven',
			},
			{
				id: 15,
				image: DOCKER,
				name: 'Docker',
			},
	]

	return (
		<div className='grid grid-cols-3 mt-8 cursor-pointer'>
			{skills.map(item => (
				<img
					className='hover:animate-rubber w-20 p-2'
					src={item.image}
					key={item.id}
					title={item.name}
				/>
			))}
		</div>
	)
}

export default Skills
