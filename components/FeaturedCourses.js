import { gql, useQuery } from "@apollo/client";
const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://taiwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Introduction to Solidity.",
    price: "$35",
    color: "Black",
  },
  // More products...
];

const FEATURED_COURSES = gql`
  query FeaturedCourses {
    courses {
      id
      courseID
      instructor
      instructorName
      courseTitle
      courseDescription
      coursePrice
    }
  }
`;

const FeaturedCourses = () => {
  const { loading, error, data } = useQuery(FEATURED_COURSES);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          All Courses
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.courses.map((course) => (
            <div
              key={course.id}
              className="group relative max-w-sm rounded overflow-hidden shadow-lg"
            >
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src="https://www.forbes.com/advisor/wp-content/uploads/2021/03/ethereum-1.jpeg"
                  //   alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between pl-4">
                <div>
                  <h3 className="text-bg font-weight-bold text-gray-900">
                    <a href="">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {course.courseTitle}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    By {course.instructorName}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900 pr-3">
                  {course.coursePrice} ETH
                </p>
              </div>
              <div class="mt-4 flex pl-4">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  beginner
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  solidity
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCourses;
