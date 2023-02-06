import { StarIcon } from "@heroicons/react/24/solid/index.js";
import { UserCircleIcon } from "@heroicons/react/24/outline/index.js";
import booksData from "../data/booksData";
import slugify from "@sindresorhus/slugify";
import { CollectionProps } from "./CollectionProps";

interface Book {
	title: string;
	description: string;
	rating: number;
	author?: string;
	isbn?: string;
}

interface BookCollection {
	name: string;
	books: Array<Book>;
}

const Books = ({ max, random }: CollectionProps) => {
	const courses = booksData;

	function showRating(rating: number) {
		const array = [];

		if (rating === undefined) {
			for (let i = 1; i <= 5; i++) {
				array.push(
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="h-5 w-5 text-gray-300 dark:text-gray-500"
					>
						<path
							fill-rule="evenodd"
							d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z"
							clip-rule="evenodd"
						/>
					</svg>
				);
			}
		} else {
			for (let i = 1; i <= 5; i++) {
				const className =
					i <= rating ? "text-yellow-400" : "text-gray-300 dark:text-gray-500";
				array.push(
					<svg
						aria-hidden="true"
						className={"h-5 w-5 " + className}
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
				);
			}

			if (rating == 5) {
				array.push(
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="h-6 w-6 text-green-800"
					>
						<path
							fill-rule="evenodd"
							d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
							clip-rule="evenodd"
						/>
					</svg>
				);
			} else if (rating == 1) {
				array.push(
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="h-6 w-6 text-red-700"
					>
						<path
							fill-rule="evenodd"
							d="M6.72 5.66l11.62 11.62A8.25 8.25 0 006.72 5.66zm10.56 12.68L5.66 6.72a8.25 8.25 0 0011.62 11.62zM5.105 5.106c3.807-3.808 9.98-3.808 13.788 0 3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788z"
							clip-rule="evenodd"
						/>
					</svg>
				);
			}
		}
		return <div className="flex items-center">{array}</div>;
	}
	return (
		<div>
			{courses?.slice(0, max).map((course: BookCollection) => (
				<div>
					<h2 id={slugify(course.name)} className="mb-2 py-2 text-2xl">
						<a href={"#" + slugify(course.name)}>{course.name}</a>
					</h2>
					{course.books.map((book: Book) => {
						const starRating = showRating(book.rating);

						const coverStyle = {
							backgroundImage: book?.isbn
								? `url('https://ik.imagekit.io/thatcsharpguy/tr:w-500/feregri_no/book-covers/${book?.isbn}.jpeg')`
								: "",
						};

						return (
							<div className="border-1 group mb-3 w-full max-w-sm hover:ring-2 lg:flex lg:max-w-full">
								<div
									className="h-48 flex-none overflow-hidden bg-cover bg-center bg-no-repeat text-center hover:bg-contain group-hover:bg-contain lg:h-auto lg:w-48"
									style={coverStyle}
									title={book.title}
								></div>
								<div className="flex flex-col justify-between bg-white p-4 leading-normal dark:bg-slate-600 lg:rounded-b-none ">
									<div className="mb-8">
										<p className="flex items-center text-sm text-gray-600">
											{starRating}
										</p>
										<div className="text-lg font-bold text-gray-900 dark:text-neutral-100">
											{book.title}
										</div>
										<div className="flex items-center">
											<div className="text-sm">
												<p className="mb-2 leading-none text-gray-900 dark:text-neutral-100">
													{book?.author}
												</p>
											</div>
										</div>
										<p className="text-sm text-gray-700 dark:text-neutral-100">
											{book.description}
										</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			))}
		</div>
	);
};

export default Books;
