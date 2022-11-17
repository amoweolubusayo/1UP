import { gql, useQuery, client } from "@apollo/client";
import Link from "next/link";
import Header from "../../components/Header";
import { useAccount } from "wagmi";

const INSTRUCTOR_COURSES = gql`
query InstructorCourses($id: String) {
  courses(where: { instructor: $id }) {
    courseID
    courseTitle
    coursePrice
    courseDescription
    instructor
    instructorName
  }
}
`;

const MyCourse = ({ id = useAccount().address }) => {
 
  console.log("hey", INSTRUCTOR_COURSES);
  const { loading, error, data } = useQuery(INSTRUCTOR_COURSES, {variables: {id}});
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <>
      <Header />
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Your Courses
            </h2>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 clickable-card">
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
                      <Link href={`/course/${course.id}`}>
                        <a className="clickable-card__link">
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {course.courseTitle}
                        </a>
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      By {course.instructorName}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900 pr-3">
                    {course.coursePrice} ETH
                  </p>
                </div>
                <div className="mt-4 flex pl-4">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    beginner
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    solidity
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCourse;

// export async function getServerSideProps(context) {
//   console.log("id");
//   const { id } = context.params;
//   console.log(id);

//   const INSTRUCTOR_COURSES = gql`
//       query InstructorCourses($id: String) {
//         courses(where: { instructor: $id}){
//           courseID
//           courseTitle
//           coursePrice
//           courseDescription
//           instructor
//           instructorName
//         }
//       }
//     `;

// //   const data = await gql`
// //     query InstructorCourses($instructor: String!) {
// //       courses {
// //         id
// //         courseID
// //         instructor
// //         instructorName
// //         courseTitle
// //         courseDescription
// //         coursePrice
// //       }
// //     }
// //   `;

// //   return {
// //     props: {
// //       courses: data.courses,
// //     },
// //   };
// }
