import StarRating from "./StarRating";
import ReactMarkdown from 'react-markdown';
import { useState } from 'react';

interface Props {
	data: {
		title: string;
		description: string;
		author: string;
		rating: number;
		isbn?: string;
		recommended?: boolean;
		category: string;
		links?: Array<{ url: string; text: string }>;
	};
	slug: string;
}

const BookReview = ({ data, slug }: Props) => {
	const { title, description, author, isbn, rating, recommended } = data;
	const [imageError, setImageError] = useState(false);
	
	// Base classes with dark theme support
	const baseClasses = [
		"bg-white dark:bg-gray-800",
		"rounded-lg",
		"shadow-md dark:shadow-gray-900/20",
		"overflow-hidden",
		"border-2 border-gray-100 dark:border-gray-700",
		"transition-all duration-300",
		"hover:shadow-lg dark:hover:shadow-gray-900/30",
		"hover:scale-105",
		"cursor-pointer"
	];
	
	// Add recommended styling
	if (recommended) {
		baseClasses.push(
			"hover:border-green-500 dark:hover:border-green-400",
			"hover:bg-green-50 dark:hover:bg-green-900/20",
			"ring-1 ring-green-200 dark:ring-green-800"
		);
	}
		
	return (
		<a href={`/bookshelf/${slug}`} className="block">
			<article 
				key={isbn} 
				className={baseClasses.join(" ")}
				aria-labelledby={`book-title-${isbn}`}
			>
			{recommended && (
				<div className="absolute top-2 right-2 z-10">
					<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
						⭐ Recommended
					</span>
				</div>
			)}
            <div className="p-4">
              <div className="flex space-x-4">
                <div className="flex-shrink-0 w-20 h-36 relative">
					<img
						src={imageError ? '/blog-placeholder-1.jpg' : `https://ik.imagekit.io/thatcsharpguy/tr:w-500,f-webp,q-80/feregri_no/book-covers/${isbn}.jpeg`}
						alt={`Cover of ${title} by ${author}`}
						loading="lazy"
						decoding="async"
						className="object-contain transition-opacity duration-300 hover:opacity-90"
						onError={() => {
							setImageError(true);
						}}
					/>
                </div>
                <div className="flex-grow min-w-0">
                  <h2 
					id={`book-title-${isbn}`}
					className="text-lg font-semibold leading-tight text-gray-900 dark:text-white truncate" 
					title={title}
				  >
                    {title}
                  </h2>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">{author}</p>
                  <StarRating rating={rating} />
                  <p className="text-sm mt-2 text-gray-700 dark:text-gray-300 line-clamp-4 leading-relaxed">
					{description}
				  </p>
                </div>
              </div>
            </div>
          </article>
		</a>
	);
};

export default BookReview;
