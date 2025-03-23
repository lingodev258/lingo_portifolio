import React from "react";

const front: string[] = [
  "React",
  "Next.js",
  "TailwindCSS",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "Express",
  "GraphQL",
  "Apollo",
  "Prisma",
  "PostgreSQL",
  "Docker",
  "AWS Lambda",
  "AWS Cognito",
  "AWS API Gateway",
  "AWS DynamoDB",
  "AWS S3",
];
const Tolls = () => {
  return (
    <div className="mt-10 flex text-center w-[800px] flex-col">
      <div className="mb-5">Utilizamos ferramentas modernas como:</div>

      <div className="flex gap-2 text-center items-center flex-wrap justify-center">
        {front.map((item, index) => (
          <li
            className="list-none rounded-3xl border-2 border-green-500 p-1 px-3"
            key={index}
          >
            {item}
          </li>
        ))}
      </div>
    </div>
  );
};

export default Tolls;
