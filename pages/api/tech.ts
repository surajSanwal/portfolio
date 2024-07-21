// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Tech from "../../json/tech.json";
export default (_req: any, res: any) => {
  try {
    res.status(200).json({ data: Tech || [], status: "success" });
  } catch (e: any) {
    res.status(500).json({ status: "error", message: e?.message });
  }
};
