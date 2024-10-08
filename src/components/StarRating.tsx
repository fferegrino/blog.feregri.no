const StarRating = ({ rating }: { rating: number }) => {
	const fullStars = Math.floor(rating)
	const hasHalfStar = rating % 1 !== 0
  
	return (
	  <div className="flex items-center" aria-label={`Rating: ${rating} out of 5 stars`}>
		{[...Array(fullStars)].map((_, i) => (
		  <svg key={`full-${i}`} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
			<path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
		  </svg>
		))}
		{hasHalfStar && (
		  <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
			<path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fillOpacity="0.5" />
		  </svg>
		)}
		{[...Array(5 - Math.ceil(rating))].map((_, i) => (
		  <svg key={`empty-${i}`} className="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 24 24">
			<path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
		  </svg>
		))}
	  </div>
	)
  }

export default StarRating;