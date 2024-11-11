import StarRating from "./StarRating";
import ReactMarkdown from 'react-markdown';

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

	const { title, description, author, isbn, rating, recommended } = data;
	const parentClasses = ["bg-white", "rounded-lg", "shadow-md", "overflow-hidden"];
	parentClasses.push("border-2", "border-gray-100");
	if (recommended) {
		parentClasses.push("hover:border-green-500");
		parentClasses.push("hover:bg-green-50");
	}
		
	return (
		<div key={isbn} className={parentClasses.join(" ")}>
			{/* {recommended && (
              <div className="absolute top-0 right-0 -mr-14 -mt-1 w-48 h-12 bg-green-500 text-white text-center transform rotate-45 z-10">
                <span className="block mt-6 text-sm font-semibold">Recommended</span>
              </div>
            )} */}
            <div className="p-4">
              <div className="flex space-x-4">
                <div className="flex-shrink-0 w-20 h-36 relative">
					<img
						src={`https://ik.imagekit.io/thatcsharpguy/tr:w-500/feregri_no/book-covers/${isbn}.jpeg`}
						alt={`Cover of ${title}`}
						// fill
						className="object-contain"
					/>
                </div>
                <div className="flex-grow min-w-0">
                  <h2 className="text-lg font-semibold leading-tight truncate" title={title}>
                    {title}
                  </h2>
                  <p className="text-xs text-gray-600 mb-1">{author}</p>
                  <StarRating rating={rating} />
                  <p className="text-sm mt-1 line-clamp-5">{description}</p>
                </div>
              </div>
            </div>
          </div>
	);
};

export default BookReview;
