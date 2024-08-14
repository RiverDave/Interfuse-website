import { readFileSync, PathOrFileDescriptor } from "fs";
import path from "path";

const loadMarkDown = (): string | null => {
  const filePath: PathOrFileDescriptor = path.join(
    process.cwd(),
    String("public/" + "README.md"),
  );

  const text = readFileSync(filePath, {
    encoding: "utf8",
  });

  return text ? text : null;
};

export default loadMarkDown;
