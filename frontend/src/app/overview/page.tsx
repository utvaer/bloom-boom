type Application = {
  id: number;
  company: string;
  jobTitle: string;
};

export default async function Page() {
  const data = await fetch("https://localhost:3000/data");
  const apps = await data.json();
  return (
    <div>
      <h1>Overview</h1>
      {apps.map((app: Application) => {
        <div>{app.jobTitle}</div>;
      })}
    </div>
  );
}
