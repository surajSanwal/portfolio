// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import projects from "../../json/projects.json";
export default (_req: any, res: any) => {
  try {
    res.status(200).json({ data: projects || [], status: "success" });
  } catch (e: any) {
    res.status(500).json({ status: "error", message: e?.message });
  }
};
export const getProjectByName = (name: string) => {
  return projects.find(project => project.name === name);
};