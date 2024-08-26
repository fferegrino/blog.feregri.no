import StarRating from "./StarRating";

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
	return (
		<div key={isbn} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4">
              <div className="flex space-x-4">
                <div className="flex-shrink-0 w-24 h-36 relative">
					<img
						src={`https://ik.imagekit.io/thatcsharpguy/tr:w-500/feregri_no/book-covers/${isbn}.jpeg`}
						alt={`Cover of ${title}`}
						// fill
						className="object-contain"
					/>
                </div>
                <div className="flex-grow min-w-0">
                  <h2 className="text-lg font-semibold leading-tight mb-1 truncate" title={title}>
                    {title}
                  </h2>
                  <p className="text-sm text-gray-600 mb-1">{author}</p>
                  <StarRating rating={rating} />
                  <p className="text-sm mt-2 line-clamp-3">{description}</p>
                </div>
              </div>
            </div>
          </div>
	);
};

export default BookReview;
