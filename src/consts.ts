// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'feregri.no';
export const SITE_CANONICAL = 'https://blog.feregri.no';
export const BIOGRAPHY = 'MLOps engineer, once a data scientist but always a software developer – Edutuber – Interested in the future of work, education, and technology. I love to learn and teach.'
export const SITE_DESCRIPTION = BIOGRAPHY;


export type SocialNetwork = {
    name: string,
    url: string,
    icon: string
}

export const SOCIALS = [
    {
        name: "Bluesky",
        url: "https://bsky.app/profile/feregri.no",
        icon: "bluesky"
    },
    {
        name: "Threads",
        url: "https://www.threads.net/@feregri_no",
        icon: "threads"
    },
    {
        name: "GitHub",
        url: "https://github.com/fferegrino",
        icon: "github"
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/antonioferegrino/",
        icon: "linkedin"
    },
    {
        name: "YouTube",
        url: "https://www.youtube.com/@feregri_no",
        icon: "youtube"
    }
];


export type Credits = {
    text: string,
    url: string
};

export const CREDITS = [
{
    "text": "Base theme by Tailus Blocks",
    "url": "https://preview.tailus.io/astrolus-free/"
},
{
    "text": "Some icons by Freepik",
    "url": "https://www.flaticon.com/authors/special/lineal-color?author_id=1&type=standard"    
}
];


