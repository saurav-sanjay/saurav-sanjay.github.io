import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import {
  PAGE_METADATA,
  renderMetadataTags,
} from "../assets/helpers/utils/page-metadata.mjs";

const HEAD_MARKER_START = "<!-- PAGE_METADATA:START -->";
const HEAD_MARKER_END = "<!-- PAGE_METADATA:END -->";
const repoRoot = process.cwd();
const REQUIRED_FIELDS = ["file", "path", "title", "description"];

const validatePageMetadata = (pageKey, metadata) => {
  const missingFields = REQUIRED_FIELDS.filter((field) => !metadata[field]);

  if (missingFields.length > 0) {
    throw new Error(
      `Page "${pageKey}" is missing required metadata fields: ${missingFields.join(", ")}`
    );
  }
};

const replaceMetadataBlock = (html, pageKey) => {
  const metadataBlock = [
    HEAD_MARKER_START,
    renderMetadataTags(pageKey)
      .split("\n")
      .map((line) => `    ${line}`)
      .join("\n"),
    `    ${HEAD_MARKER_END}`,
  ].join("\n");

  const markerPattern = new RegExp(
    `${HEAD_MARKER_START}[\\s\\S]*?${HEAD_MARKER_END}`
  );

  if (!markerPattern.test(html)) {
    throw new Error(`Missing metadata markers for page "${pageKey}".`);
  }

  return html.replace(markerPattern, metadataBlock);
};

for (const [pageKey, metadata] of Object.entries(PAGE_METADATA)) {
  validatePageMetadata(pageKey, metadata);

  const filePath = path.join(repoRoot, metadata.file);
  const fileContents = await readFile(filePath, "utf8");
  const updatedContents = replaceMetadataBlock(fileContents, pageKey);

  if (updatedContents !== fileContents) {
    await writeFile(filePath, updatedContents);
    console.log(`Updated ${metadata.file}`);
  } else {
    console.log(`No changes for ${metadata.file}`);
  }
}
