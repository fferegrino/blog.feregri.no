import { getCollection } from "astro:content";
const defaultIconCount = 3;
let iconCount = 0;

const projects = (await getCollection('project')).map((project)=> {
	let iconUrl = project.data.iconUrl;
	let darkIconUrl = project.data.darkIconUrl;
	iconCount++;
	iconCount = (iconCount % defaultIconCount) + 1;
	if (!project.data.iconUrl) {
		iconUrl = `https://ik.imagekit.io/thatcsharpguy/feregri_no/site/project/sharp-${iconCount}.png`;
		darkIconUrl = `https://ik.imagekit.io/thatcsharpguy/feregri_no/site/project/sharp-${iconCount}-dark.png`
	}

	const url =  project.data.websiteUrl || project.data.repoUrl;

	if (!darkIconUrl) {
		darkIconUrl = iconUrl;
	}
	return {
		...project,
		data: {
			...project.data,
			url,
			darkIconUrl,
			iconUrl
		}
	}
});

// Note: Sorting is now handled by the Features component via sortFunction prop

export default projects;