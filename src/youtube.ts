import axios from 'axios';
import parseString from 'xml2js';

export type VideoInfo = {
  videoId: string;
  title: string;
  url: string;
  thumbnail: string;
  description: string;
  published: string;
  // Add more properties as needed
};

async function fetchRSSFeed(url: string): Promise<any> {
  const response = await axios.get(url);
  return response.data;
}


export async function getVideoInfoFromRSS(channelId: string): Promise<VideoInfo[]> {
  const videoRssFeed = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`
  const rssFeed = await fetchRSSFeed(videoRssFeed);
  const parsedFeed = await parseString.parseStringPromise(rssFeed);
  const videos = parsedFeed.feed.entry;

  const videoInfo: VideoInfo[] = [];

  for (let i = 0; i < videos.length; i++) {
    const video = videos[i];
    const videoTitle = video.title[0];
    const videoPublishDate = video.published[0];
    const videoLink = video.link[0].$.href;
    const videoId = video['yt:videoId'][0];
    const videoThumbnail = video['media:group'][0]['media:thumbnail'][0]['$']['url'];
    const videoDescription = video['media:group'][0]['media:description'][0];

    videoInfo.push({
      videoId: videoId,
      title: videoTitle,
      url: videoLink,
      thumbnail: videoThumbnail,
      description: videoDescription,
      published: videoPublishDate,
    });

  }
  return Promise.all(videoInfo);
}
