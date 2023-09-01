
interface Project {
	post: any;
}

const imgClasses = ['object-cover w-20 m-5 rounded-t-lg  md:rounded-none md:rounded-l-lg'];



const darkImgClasses =  imgClasses.concat(['hidden', 'dark:block']);
const lightImgClasses =  imgClasses.concat(['block','dark:hidden']);

const ProjectEntry = ({post}: Project) => {

	const url = post.data.websiteUrl || post.data.repoUrl || '#';

	return  (<div className={`xl:w-1/2 md:w-1/2 h-42 p-3 group ${post.data.active ? 'opacity-100': 'opacity-80'} hover:opacity-100`}>
			<a href={url} target={url == "#" ? "" : "_blank"} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
				<img className={lightImgClasses.join(' ')} src={post.data.iconUrl} alt="" />
				<img className={darkImgClasses.join(' ')} src={post.data.darkIconUrl} alt="" />
				<div className="flex flex-col justify-between p-4 leading-normal">
					<h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{post.data.title}</h5>
					<p className="mb-3 text-sm text-gray-700 dark:text-gray-400">{post.data.description}</p>
				</div>
			</a>
		</div>);
};

export default ProjectEntry;
