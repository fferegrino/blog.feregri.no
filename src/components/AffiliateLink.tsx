interface Link {
	name: string;
	description: string;
	us?: string;
	uk?: string;
	mx?: string;
}
const AffiliateLink = ({ name, description, us, uk, mx }: Link) => {
	// Create a map with flags as keys and country codes as values
	const countryCodes = new Map([
		["🇺🇸", us],
		["🇬🇧", uk],
		["🇲🇽", mx],
	]);

	// Create a new map with filtered values
	const filtered = new Map(
		[...countryCodes].filter(([_, v]) => v != undefined)
	);

	// Iterate over the filtered map and create a link for each country
	const links = Array.from(filtered, ([k, v]) => (
		<a className="m-1" href={v} target="_blank">
			{k}
		</a>
	));

	return (
		<li>
			{description}:{" "}
			<b className="underline decoration-dotted" title={description}>
				{name}
			</b>{" "}
			– Compra: {links}
		</li>
	);
};

export default AffiliateLink;
