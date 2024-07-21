// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Education from "../../json/education.json";
export default (_req: any, res: any) => {
  try {
    res.status(200).json({ data: Education || [], status: "success" });
  } catch (e: any) {
    res.status(500).json({ status: "error", message: e?.message });
  }
};
