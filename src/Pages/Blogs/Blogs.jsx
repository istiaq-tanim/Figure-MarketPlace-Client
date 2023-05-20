import useTitle from "../../Hooks/useTitle";

const Blogs = () => {
    useTitle("Blogs")
    return (
        <div >
            <h3 className='font-display text-center my-10 text-5xl font-bold text-sky-500'>My Blog Page</h3>
            <div className='md:flex'>
                <div className="my-5 card w-full lg:w-1/3 bg-base-100 p-2">
                    <div className="card-body items-center text-center bg-green-400 rounded-lg">
                        <h2 className="card-title text-xl">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                        <p className='text-lg'>Access tokens and refresh tokens play integral roles in authentication and authorization systems.When a user successfully authenticates, an access token—a short-lived credential—is generated.Its included with each request to the server.On the other hand, a refresh token is a long-lived token securely stored on the client-side, used to obtain a new access token when the current one expires.
                        </p>
                    </div>
                </div>
                <div className="my-5 card w-full lg:w-1/3 bg-base-100 p-2">
                    <div className="card-body items-center text-center bg-rose-400 rounded-lg">
                        <h2 className="card-title text-xl">Compare SQL and NoSQL databases?</h2>
                        <p className='text-lg'>SQL and NoSQL databases differ in their fundamental approaches to storing and retrieving data. SQL databases, also known as relational databases, organize data into structured tables with predefined schemas example:MySQL.On the other hand, NoSQL databases, including document, key-value, columnar, and graph databases, employ a schema-less or flexible schema model example: MongoDB</p>
                    </div>
                </div>
                <div className="my-5 card w-full lg:w-1/3 bg-base-100 p-2">
                    <div className="card-body items-center text-center bg-amber-200 rounded-lg">
                        <h2 className="card-title text-xl">What is express js? What is Nest JS?
                        </h2>
                        <p className='text-lg'>Express.js is a lightweight and flexible web application framework for Node.js that offers developers a high level of control over their application structure and components, providing features such as routing, middleware support, and an extensive ecosystem of third-party packages, NestJS, a progressive Node.js framework inspired by Angular, harnesses the power of TypeScript and incorporates concepts from Angular, like decorators, dependency injection, and modules, to provide a scalable and maintainable solution for building server-side applications</p>
                    </div>
                </div>
                <div className="my-5 card w-full lg:w-1/3 bg-base-100 p-2">
                    <div className="card-body items-center text-center bg-indigo-400 rounded-lg">
                        <h2 className="card-title text-xl">What is MongoDB aggregate and how does it work?</h2>
                        <p className='text-lg'>MongoDB aggregate is a feature that empowers users to perform sophisticated data aggregation operations on collections within the database. It operates through a pipeline concept, where a sequence of stages defines the processing steps for data manipulation and computation of aggregated results. Each stage in the pipeline executes a specific operation, such as filtering, grouping, projecting, or sorting, on the input data and passes the transformed data to the subsequent stage.
                        </p>

                    </div>
                </div>
                
            </div>

        </div>

    );

};


export default Blogs;