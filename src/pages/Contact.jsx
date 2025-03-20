const Contact = () => {
  return (
    <>
      <div className="bg-white min-h-screen pl-20">
        <div className="container mx-auto px-4 py-8">
          {/* Header Section */}
          <div className="flex justify-between items-start mb-12 w-full">
            <div className="w-1/2">
              <h1 className="text-7xl font-bold text-gray-800 mb-2 ">
                Let's get in touch
              </h1>
            </div>
            <div className="w-1/2 px-40 font-semibold">
              <p className="text-gray-600 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                quis sapiente optio nesciunt qui ut porro perferendis numquam
                laborum? Eius impedit ex similique officia odio.
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="flex gap-6 w-full">
            <div className="mt-4 w-2/4 gap-2 flex flex-col">
              <p className="text-black text-2xl font-bold pb-3">
                For more details
              </p>
              <p className="text-black text-xl font-semibold">
                Contact numbers
              </p>
              <p className="text-gray-700">+91 7897897890</p>
              <p className="text-black text-xl font-semibold">General</p>
              <p className="text-gray-700">info@lorem.com</p>
            </div>

            <div className="md:col-span-2 w-3/4">
              <div className="flex flex-col md:flex-row gap-6">
                <input
                  type="text"
                  placeholder="First Name *"
                  className="border p-2 rounded w-full"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border p-2 rounded w-full"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-6 mt-6">
                <input
                  type="email"
                  placeholder="Email *"
                  className="border p-2 rounded w-full"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="border p-2 rounded w-full"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-6 mt-6">
                <select className="border p-2 rounded w-full">
                  <option value="">Select Subject</option>
                  {/* Add options here */}
                </select>
                <select className="border p-2 rounded w-full">
                  <option value="">Select Location</option>
                  {/* Add options here */}
                </select>
              </div>
              <textarea
                placeholder="Messages *"
                className="border p-2 rounded w-full mt-6 h-32"
              ></textarea>
              {/* Privacy Policy Checkbox */}
              <div className="mt-6 flex items-center">
                <input type="checkbox" id="privacy" className="mr-2" />
                <label htmlFor="privacy" className="text-sm text-gray-600">
                  Your data is safe with us. Click here to know more about our{" "}
                  <a href="#" className="text-blue-500">
                    Privacy Policy
                  </a>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;


