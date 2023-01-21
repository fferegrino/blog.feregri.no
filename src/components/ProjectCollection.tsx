import { LinkIcon } from "@heroicons/react/24/solid/index.js";
import { UserCircleIcon } from "@heroicons/react/24/outline/index.js";
import projectData from "../data/projectData";
import { CollectionProps } from "./CollectionProps";

interface ProjectProps {
	name: String;
	description: string;
	repo?: string;
	link?: string;
	video?: string;
}

const ProjectCollection = ({ max }: CollectionProps) => {
	
	return (
		<div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2">
			{projectData?.slice(0, max).map((course: ProjectProps) => (
				<div className="text-[0.8125rem] leading-5">
					<div className="flex items-center">
						<img
							src="https://ik.imagekit.io/thatcsharpguy/feregri_no/blog/collab-icon.png?ik-sdk-version=javascript-1.4.3&updatedAt=1674150898863"
							alt={course?.name as string}
							className="h-10 w-10 flex-none rounded-full"
						/>
						<div className="ml-4 flex-auto">
							<div className="w-60 font-bold">
									{course?.name}
							</div>
							<div className="w-60 font-medium">
								{course?.description}
							</div>
							<div className="w-30">
								<a href={course?.link} target="_blank"><LinkIcon className="h-3 w-3 text-blue-500 inline" /> view</a>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default ProjectCollection;
