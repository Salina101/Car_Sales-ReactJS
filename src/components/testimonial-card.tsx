interface TestimonialProps {
  author: string;
  location: string;
  text: string;
  rating: number;
  image: string;
}

export function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-7 h-7 ${
            index < rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialCard({
  author,
  location,
  text,
  rating,
}: TestimonialProps) {
  return (
    <div className="bg-white rounded-lg p-8 shadow-lg max-w-2xl mx-auto">
      <p className="text-gray-700 text-center mb-6 italic">{text}</p>
      <div className="flex justify-center relative top-6">
        <StarRating rating={rating} />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-10 relative left-48">
          <h3 className="font-semibold text-lg">{author}</h3>
          <p className="text-gray-500">{location}</p>
        </div>
        <img
          src="/resorces/car4 (1).png"
          alt="Customer's vehicle"
          className="w-52 h-auto object-cover relative top-20 left-20"
        />
      </div>
    </div>
  );
}