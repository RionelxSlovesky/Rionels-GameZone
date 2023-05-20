const Blog = () => {
  return (
    <>
      <h1 className="text-center text-5xl my-12">Blog Page</h1>
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Q1) What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
          <p className="text-lg">A: Access token and refresh token are authentication mechanisms used in token-based authentication systems. Access token represents the user's identity and is typically used to authorize access to protected resources or perform specific actions on behalf of the user; whereas, the primary purpose of refresh token is to obtain a new access token without requiring the user to reauthenticate with their credentials.</p>
          <p className="text-lg">In the client-side, we can store them either in the localStorage or in cookies.</p>
        </div>
      </div>
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Q2) Compare SQL and NoSQL databases?</h2>
          <p className="text-lg">A: Differences between SQL and NoSQL databases:</p>
          <ol className="list-decimal list-inside">
            <li className="text-lg">SQL databases follow a tabular structure, where data is organized into tables with predefined schemas; whereas, NoSQL databases employ various data models, such as key-value, document, columnar, or graph.</li>
            <li className="text-lg">SQL databases traditionally scale vertically, meaning they require more powerful hardware to handle increased workloads. On the other hand, NoSQL databases are designed for horizontal scalability, allowing them to handle large amounts of data and high traffic by distributing the workload across multiple nodes or servers.</li>
          </ol>
        </div>
      </div>
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Q3) What is express js? What is Nest JS?</h2>
          <p className="text-lg">A: ExpresJS is a web application framework for NodeJS. It is designed specifically to simplify the process of building web applications by providing a straightforward and unopinionated approach.</p>
          <p className="text-lg">NextJS is a React framework for building server-side rendered and statically generated web applications. It further enhances the development experiences and optimizes performance.</p>
        </div>
      </div>
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Q4) What is MongoDB aggregate and how does it work?</h2>
          <p className="text-lg">A: MongoDB aggregates are operations to perform data processing and transformation tasks on a collection of documents.</p>
          <p className="text-lg">The aggregate operation in MongoDB works by taking a collection of documents as input and applying a sequence of stages to process and transform the data. Each stage performs a specific operation on the documents and passes the result to the next stage in the pipeline.</p>
        </div>
      </div>
    </>
  );
};

export default Blog;
