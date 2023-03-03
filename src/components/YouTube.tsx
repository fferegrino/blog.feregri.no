import xml2js from "xml2js";

const rssFeed =
	"https://www.youtube.com/feeds/videos.xml?channel_id=UC8KCb358oioQMcJ5pUfs8UQ";

interface Video {
	id: string;
	published: string;
	url: string;
	title: string;
	description: string;
	thumbnail: string;
}

async function fetchVideos(): Promise<Video[]> {
	const response = await fetch(rssFeed);
	const xml = await response.text();
	const result = await xml2js.parseStringPromise(xml);
	const entries = result.feed.entry;

	const videos: Video[] = [];
	for (const entry of entries) {
		const mediaGroup = entry["media:group"][0];
		const video: Video = {
			id: entry.id[0],
			published: entry.published[0],
			url: entry.link[0].$.href,
			title: mediaGroup["media:title"][0],
			description: mediaGroup["media:description"][0].split("\n")[0],
			thumbnail: mediaGroup["media:thumbnail"][0].$.url,
		};
		videos.push(video);
	}

	return videos;
}

const youtubeData = await fetchVideos();

const YouTube = () => {
	return youtubeData.slice(0, 2).map((v) => (
		<article>
			<a
				href={v.url}
				target={"_blank"}
				className="relative top-0 block overflow-hidden rounded-2xl"
			>
				<img
					alt={v.title}
					src={v.thumbnail}
					className="h-44 w-full object-cover"
				/>
				<div className="bg-gray-900 p-4">
					<p className="mb-1 text-sm text-gray-400">Video</p>
					<h5 className="text-sm text-white">{v.title}</h5>
					<p className="mt-1 text-xs text-gray-400">{v.description}</p>
				</div>
			</a>
		</article>
	));
};

export default YouTube;
