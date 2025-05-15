import { promises as fs } from "fs";

type Application = {
  id: number;
  company: string;
  jobTitle: string;
};

export default async function Page() {
  const file = await fs.readFile(process.cwd() + "/src/data.json", "utf8");
  const data = JSON.parse(file);
  console.log(data);

  return (
    <div>
      <h1>Overview</h1>
      {data.map((app: Application) => {
        <h2>{app.id}</h2>;
      })}
    </div>
  );
}
