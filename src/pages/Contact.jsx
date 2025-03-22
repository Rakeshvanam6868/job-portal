const Contact = () => {
  return (
    <>
      <div className="bg-white min-h-screen px-4 sm:px-8 md:px-16 lg:px-20 py-8">
        <div className="container mx-auto">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-8 w-full gap-4">
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-800 mb-2">
                Let's get in touch
              </h1>
            </div>
            <div className="w-full md:w-1/2 text-sm sm:text-base lg:text-lg font-semibold text-gray-600">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                quis sapiente optio nesciunt qui ut porro perferendis numquam
                laborum? Eius impedit ex similique officia odio.
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="flex flex-col md:flex-row gap-6 w-full">
            {/* Contact Details */}
            <div className="mt-4 w-full md:w-1/3 gap-2 flex flex-col">
              <p className="text-black text-xl sm:text-2xl font-bold pb-3">
                For more details
              </p>
              <p className="text-black text-lg sm:text-xl font-semibold">
                Contact numbers
              </p>
              <p className="text-gray-700 text-sm sm:text-base">+91 9999999999</p>
              <p className="text-black text-lg sm:text-xl font-semibold">General</p>
              <p className="text-gray-700 text-sm sm:text-base">info@lorem.com</p>
            </div>

            {/* Form Fields */}
            <div className="w-full md:w-2/3">
              <div className="flex flex-col md:flex-row gap-4">
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
              <div className="flex flex-col md:flex-row gap-4 mt-4">
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
              <div className="flex flex-col md:flex-row gap-4 mt-4">
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
                className="border p-2 rounded w-full mt-4 h-32"
              ></textarea>
              {/* Privacy Policy Checkbox */}
              <div className="mt-4 flex items-center">
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