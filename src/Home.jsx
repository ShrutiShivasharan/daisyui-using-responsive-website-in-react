const Home = () => {
  return (
    <>
      {/* section1 */}
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-l">
            <h1 className="text-3xl mt-5 md:text-6xl font-bold">Hello there</h1>
            <p className="py-6 text-xl md:text-3xl">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-l md:btn-xl">Explore now</button>
          </div>
        </div>
      </div>
      {/* section2 */}
      <div>
        <h1 className="text-center text-4xl mb-10">Our Categories</h1>
        <div className="p-5 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
          <div className="card image-full shadow-sm">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Category</h2>
              <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View products</button>
              </div>
            </div>
          </div>
          <div className="card image-full shadow-sm">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Category</h2>
              <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View products</button>
              </div>
            </div>
          </div>
          <div className="card image-full shadow-sm">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Category</h2>
              <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View products</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section2 */}
      <div>
        <h1 className="text-center text-4xl my-16">Our Latest Products</h1>
        <div className="p-5 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="card shadow-sm">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Card Title
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
              <p className="text-xl font-bold text-right">Rs. 2000</p>
              <div className="card-actions flex justify-between md:justify-end">
                <button className="btn btn-outline btn-sm md:btn-l">View product</button>
                <button className="btn btn-outline btn-sm md:btn-l">Add To Cart</button>
              </div>
            </div>
          </div>
          <div className="card shadow-sm">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Card Title
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
              <p className="text-xl font-bold text-right">Rs. 2000</p>
              <div className="card-actions flex justify-between md:justify-end">
                <button className="btn btn-outline btn-sm md:btn-l">View product</button>
                <button className="btn btn-outline btn-sm md:btn-l">Add To Cart</button>
              </div>
            </div>
          </div>
          <div className="card shadow-sm">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Card Title
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
              <p className="text-xl font-bold text-right">Rs. 2000</p>
              <div className="card-actions flex justify-between md:justify-end">
                <button className="btn btn-outline btn-sm md:btn-l">View product</button>
                <button className="btn btn-outline btn-sm md:btn-l">Add To Cart</button>
              </div>
            </div>
          </div>
          <div className="card shadow-sm">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Card Title
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
              <p className="text-xl font-bold text-right">Rs. 2000</p>
              <div className="card-actions flex justify-between md:justify-end">
                <button className="btn btn-outline btn-sm md:btn-l">View product</button>
                <button className="btn btn-outline btn-sm md:btn-l">Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
