import React, { useState } from 'react';
import { Star, ShoppingCart, ChevronRight, Share2, Heart, Plus, Minus, CheckCircle, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

// Type definitions for product data
interface ProductImage {
  src: string;
  alt: string;
}

interface ProductReview {
  id: string;
  customerName: string;
  rating: number;
  comment: string;
  date: string;
}

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  discountPrice?: number;
  description: string;
  images: ProductImage[];
  features: string[];
  specifications: { [key: string]: string };
  averageRating: number;
  totalReviews: number;
  stock: number;
}

interface RelatedProduct {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  averageRating: number;
}

const products: Product[] = [
  {
    id: 'prod-001',
    name: 'Wireless Noise-Cancelling Headphones',
    category: 'Audio',
    price: 299.99,
    discountPrice: 249.99,
    description: 'Immerse yourself in pure sound with our premium wireless noise-cancelling headphones. Featuring advanced audio technology, comfortable earcups, and an extended battery life, perfect for travel or daily commutes.',
    images: [
      { src: 'https://plus.unsplash.com/premium_photo-1678099940967-73fe30680949?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2lyZWxlc3MlMjBoZWFkcGhvbmVzfGVufDB8fDB8fHww', alt: 'Headphones front view' },
      { src: 'https://plus.unsplash.com/premium_photo-1678099940967-73fe30680949?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2lyZWxlc3MlMjBoZWFkcGhvbmVzfGVufDB8fDB8fHww', alt: 'Headphones side view' },
      { src: 'https://plus.unsplash.com/premium_photo-1678099940967-73fe30680949?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2lyZWxlc3MlMjBoZWFkcGhvbmVzfGVufDB8fDB8fHww', alt: 'Headphones on desk' },
    ],
    features: [
      'Active Noise Cancellation',
      'Up to 30 hours battery life',
      'Bluetooth 5.2 connectivity',
      'Comfortable over-ear design',
      'High-fidelity audio drivers',
      'Built-in microphone for calls',
    ],
    specifications: {
      'Color': 'Midnight Black',
      'Weight': '250g',
      'Connectivity': 'Bluetooth 5.2, USB-C',
      'Driver Size': '40mm',
      'Frequency Response': '20Hz - 20kHz',
    },
    averageRating: 4.8,
    totalReviews: 128,
    stock: 50,
  },
];

const productReviews: ProductReview[] = [
  {
    id: 'rev-001',
    customerName: 'Alice W.',
    rating: 5,
    comment: 'Absolutely love these headphones! The noise cancellation is phenomenal, and the sound quality is top-notch. Battery life is also impressive.',
    date: '2023-10-26',
  },
  {
    id: 'rev-002',
    customerName: 'Bob T.',
    rating: 4,
    comment: 'Great sound and very comfortable. Only minor complaint is that the touch controls can be a bit sensitive sometimes. Otherwise, highly recommend!',
    date: '2023-10-20',
  },
  {
    id: 'rev-003',
    customerName: 'Charlie V.',
    rating: 5,
    comment: 'Best headphones I \'ve ever owned. Worth every penny for the audio experience and peace and quiet they provide.',
    date: '2023-09-15',
  },
];

const relatedProducts: RelatedProduct[] = [
  {
    id: 'rel-001',
    name: 'Smartwatch Pro X',
    imageUrl: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&h=600&fit=crop',
    price: 199.99,
    averageRating: 4.5,
  },
  {
    id: 'rel-002',
    name: 'Portable Bluetooth Speaker',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660fc09aa?w=600&h=600&fit=crop',
    price: 79.99,
    averageRating: 4.6,
  },
  {
    id: 'rel-003',
    name: '4K Ultra HD Monitor',
    imageUrl: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?w=600&h=600&fit=crop',
    price: 349.99,
    averageRating: 4.7,
  },
  {
    id: 'rel-004',
    name: 'Ergonomic Gaming Mouse',
    imageUrl: 'https://images.unsplash.com/photo-1616763355548-ee04297882e8?w=600&h=600&fit=crop',
    price: 49.99,
    averageRating: 4.3,
  },
];

const ProductPage: React.FC = () => {
  const product = products[0]; // Displaying the first product for this example
  const [quantity, setQuantity] = useState<number>(1);
  const [mainImage, setMainImage] = useState<string>(product.images[0].src);
  const [reviewForm, setReviewForm] = useState({
    customerName: '',
    rating: 0,
    comment: '',
  });
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleQuantityChange = (type: 'increase' | 'decrease') => {
    if (type === 'increase') {
      setQuantity((prev) => Math.min(prev + 1, product.stock));
    } else {
      setQuantity((prev) => Math.max(prev - 1, 1));
    }
  };

  const handleReviewInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setReviewForm((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => { const newErrors = { ...prev }; delete newErrors[name]; return newErrors; });
    }
  };

  const handleRatingChange = (rating: number) => {
    setReviewForm((prev) => ({ ...prev, rating }));
    if (formErrors.rating) {
      setFormErrors((prev) => { const newErrors = { ...prev }; delete newErrors.rating; return newErrors; });
    }
  };

  const validateReviewForm = () => {
    const errors: { [key: string]: string } = {};
    if (!reviewForm.customerName.trim()) errors.customerName = 'Name is required.';
    if (reviewForm.rating === 0) errors.rating = 'Please select a rating.';
    if (!reviewForm.comment.trim()) errors.comment = 'Comment is required.';
    else if (reviewForm.comment.trim().length < 10) errors.comment = 'Comment must be at least 10 characters.';
    return errors;
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateReviewForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setSubmissionStatus('error');
      return;
    }

    // Simulate API call
    console.log('Submitting review:', reviewForm);
    setSubmissionStatus('idle');
    setFormErrors({});
    setTimeout(() => {
      // In a real app, you'd send this to a backend and refresh reviews
      // For now, just reset form and show success.
      setSubmissionStatus('success');
      setReviewForm({ customerName: '', rating: 0, comment: '' });
      // Optionally, add the new review to productReviews state for immediate display
    }, 1000);
  };

  return (
    <div className="bg-zinc-900 text-zinc-100 min-h-screen">
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Breadcrumbs */}
        <nav className="text-sm text-zinc-400 mb-6" aria-label="Breadcrumb">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <Link to="/" className="hover:text-indigo-400">Home</Link>
              <ChevronRight className="h-4 w-4 mx-2" />
            </li>
            <li className="flex items-center">
              <Link to="#" className="hover:text-indigo-400">{product.category}</Link>
              <ChevronRight className="h-4 w-4 mx-2" />
            </li>
            <li className="text-zinc-200">
              {product.name}
            </li>
          </ol>
        </nav>

        {/* Product Details Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 bg-zinc-950 p-6 md:p-8 rounded-xl shadow-2xl border border-zinc-800">
          {/* Product Images */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-lg mb-4 bg-zinc-800 rounded-lg overflow-hidden border border-zinc-700 aspect-square flex items-center justify-center">
              <img
                src={mainImage}
                alt={product.name}
                className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setMainImage(img.src)}
                  className={`w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-lg overflow-hidden border-2 ${mainImage === img.src ? 'border-indigo-500' : 'border-zinc-700 hover:border-zinc-500'} transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-zinc-950`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-start">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2 leading-tight">
              {product.name}
            </h1>
            <p className="text-indigo-400 text-lg font-semibold mb-4">{product.category}</p>

            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.averageRating) ? 'fill-current' : ''}`} />
                ))}
              </div>
              <span className="ml-2 text-zinc-300 text-sm">{product.averageRating.toFixed(1)} ({product.totalReviews} Reviews)</span>
            </div>

            <div className="mb-6 flex items-baseline space-x-3">
              {product.discountPrice ? (
                <>
                  <p className="text-4xl font-bold text-indigo-400">${product.discountPrice.toFixed(2)}</p>
                  <p className="text-xl text-zinc-500 line-through">${product.price.toFixed(2)}</p>
                </>
              ) : (
                <p className="text-4xl font-bold text-indigo-400">${product.price.toFixed(2)}</p>
              )}
            </div>

            <p className="text-zinc-300 leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Quantity and Actions */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center border border-zinc-700 rounded-lg overflow-hidden">
                <button
                  onClick={() => handleQuantityChange('decrease')}
                  className="p-3 bg-zinc-800 hover:bg-zinc-700 transition-colors text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-2 text-lg font-medium text-white bg-zinc-800 border-x border-zinc-700">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange('increase')}
                  className="p-3 bg-zinc-800 hover:bg-zinc-700 transition-colors text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button className="flex-1 inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-semibold transition-all shadow-md transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-zinc-950">
                <ShoppingCart className="w-5 h-5" /> Add to Cart
              </button>
              <button className="p-3 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors text-zinc-100 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-zinc-950" aria-label="Add to Wishlist">
                <Heart className="w-5 h-5" />
              </button>
            </div>

            {product.stock > 0 ? (
              <p className="text-green-400 flex items-center gap-2 mb-6">
                <CheckCircle className="w-5 h-5" /> In Stock ({product.stock} available)
              </p>
            ) : (
              <p className="text-red-400 flex items-center gap-2 mb-6">
                <AlertCircle className="w-5 h-5" /> Out of Stock
              </p>
            )}

            <div className="flex items-center space-x-4 text-zinc-400">
              <button className="flex items-center gap-2 hover:text-indigo-400 transition-colors">
                <Share2 className="w-5 h-5" /> Share
              </button>
            </div>
          </div>
        </section>

        {/* Product Details, Specs, Reviews Tabs */}
        <section className="mt-12 bg-zinc-950 p-6 md:p-8 rounded-xl shadow-2xl border border-zinc-800">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Product Information</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Features */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
              <ul className="list-disc list-inside space-y-2 text-zinc-300 ml-4">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-indigo-400">•</span> {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Specifications</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left table-auto border-collapse">
                  <tbody>
                    {Object.entries(product.specifications).map(([key, value], index) => (
                      <tr key={key} className={`${index % 2 === 0 ? 'bg-zinc-900' : 'bg-zinc-800'} border-b border-zinc-700 last:border-b-0`}>
                        <th className="py-3 px-4 font-medium text-zinc-400 w-1/3 md:w-1/4 rounded-tl-lg">{key}</th>
                        <td className="py-3 px-4 text-zinc-200 rounded-tr-lg">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Reviews Section */}
        <section className="mt-12 bg-zinc-950 p-6 md:p-8 rounded-xl shadow-2xl border border-zinc-800">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Customer Reviews ({product.totalReviews})</h2>

          {/* Existing Reviews */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {productReviews.map((review) => (
              <div key={review.id} className="bg-zinc-900 p-6 rounded-lg shadow-md border border-zinc-800 hover:border-indigo-600 transition-all">
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-current' : ''}`} />
                    ))}
                  </div>
                  <span className="ml-2 text-zinc-300 text-sm font-medium">{review.rating} out of 5</span>
                </div>
                <p className="text-zinc-200 mb-3 leading-relaxed">"{review.comment}"</p>
                <p className="text-sm text-zinc-500">— {review.customerName}, {new Date(review.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </div>
            ))}
          </div>

          {/* Review Submission Form */}
          <div className="bg-zinc-900 p-6 md:p-8 rounded-lg shadow-inner border border-zinc-800">
            <h3 className="text-xl font-semibold text-white mb-5">Write a Review</h3>
            <form onSubmit={handleSubmitReview} className="space-y-5">
              <div>
                <label htmlFor="customerName" className="block text-sm font-medium text-zinc-300 mb-2">Your Name</label>
                <input
                  type="text"
                  id="customerName"
                  name="customerName"
                  value={reviewForm.customerName}
                  onChange={handleReviewInputChange}
                  className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-md text-zinc-100 placeholder-zinc-500 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  aria-invalid={formErrors.customerName ? 'true' : 'false'}
                  aria-describedby={formErrors.customerName ? 'name-error' : undefined}
                />
                {formErrors.customerName && <p id="name-error" className="mt-2 text-sm text-red-400">{formErrors.customerName}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">Your Rating</label>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => handleRatingChange(i + 1)}
                      className={`p-1 rounded-full text-yellow-400 transition-colors ${i < reviewForm.rating ? 'fill-current' : 'hover:fill-current hover:text-yellow-300'} focus:outline-none focus:ring-2 focus:ring-yellow-500`}
                      aria-label={`${i + 1} star rating`}
                    >
                      <Star className="w-6 h-6" />
                    </button>
                  ))}
                </div>
                {formErrors.rating && <p className="mt-2 text-sm text-red-400">{formErrors.rating}</p>}
              </div>

              <div>
                <label htmlFor="comment" className="block text-sm font-medium text-zinc-300 mb-2">Your Review</label>
                <textarea
                  id="comment"
                  name="comment"
                  rows={5}
                  value={reviewForm.comment}
                  onChange={handleReviewInputChange}
                  className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-md text-zinc-100 placeholder-zinc-500 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  aria-invalid={formErrors.comment ? 'true' : 'false'}
                  aria-describedby={formErrors.comment ? 'comment-error' : undefined}
                ></textarea>
                {formErrors.comment && <p id="comment-error" className="mt-2 text-sm text-red-400">{formErrors.comment}</p>}
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md font-semibold transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
              >
                Submit Review
              </button>
              {submissionStatus === 'success' && (
                <p className="mt-4 text-green-400 flex items-center gap-2"><CheckCircle className="w-5 h-5" /> Review submitted successfully!</p>
              )}
              {submissionStatus === 'error' && Object.keys(formErrors).length > 0 && (
                <p className="mt-4 text-red-400 flex items-center gap-2"><AlertCircle className="w-5 h-5" /> Please correct the errors above.</p>
              )}
            </form>
          </div>
        </section>

        {/* Related Products Section */}
        <section className="mt-12 bg-zinc-950 p-6 md:p-8 rounded-xl shadow-2xl border border-zinc-800">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((item) => (
              <Link to={`/product/${item.id}`} key={item.id} className="block bg-zinc-900 p-5 rounded-lg shadow-md border border-zinc-800 hover:border-indigo-600 transition-all transform hover:-translate-y-2 group">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-md mb-4 group-hover:scale-105 transition-transform duration-300"
                />
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors">{item.name}</h3>
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(item.averageRating) ? 'fill-current' : ''}`} />
                    ))}
                  </div>
                  <span className="ml-2 text-zinc-400 text-sm">{item.averageRating.toFixed(1)}</span>
                </div>
                <p className="text-xl font-bold text-indigo-400">${item.price.toFixed(2)}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductPage;
