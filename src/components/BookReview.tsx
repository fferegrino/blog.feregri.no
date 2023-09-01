import RatingStarBox from "./RatingStars";

interface Props {
	data: any;
	slug: string;
}

interface BookReview {
	title: string;
	description: string;
	author: string;
	rating: number;
	isbn?: string;
}

const BookReview = ({ data, slug }: Props) => {

	const { title, description, author, isbn, rating } = data;
	const coverStyle = {
		backgroundImage: isbn
			? `url('https://ik.imagekit.io/thatcsharpguy/tr:w-500/feregri_no/book-covers/${isbn}.jpeg')`
			: "",
	};
	return (
		<div className="group mb-3 w-full max-w-sm lg:flex lg:max-w-full">
			<div
				className="h-48 flex-none overflow-hidden lg:bg-right bg-center bg-no-repeat text-center bg-contain lg:h-auto lg:w-48"
				style={coverStyle}
				title={title}
			></div>
			<div className="flex flex-col justify-between bg-white p-4 leading-normal dark:bg-slate-800 lg:rounded-b-none border-1 hover:ring-2 ">
				<div className="mb-8">
					<p className="flex items-center text-sm text-gray-600">
						<RatingStarBox rating={rating} />
					</p>
					<div id={slug} className="text-lg font-bold text-gray-900 dark:text-neutral-100 [scroll-margin-top:100px]">
						{title}
					</div>
					<div className="flex items-center">
						<div className="text-sm">
							<p className="mb-2 leading-none text-gray-900 dark:text-neutral-100">
								{author}
							</p>
						</div>
					</div>
					<p className="text-sm text-gray-700 dark:text-neutral-100">
						{description}
					</p>
				</div>
			</div>
		</div>
	);
};

export default BookReview;
