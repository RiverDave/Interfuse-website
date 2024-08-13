import path from "path";

//hard coded set of files to be used in the internal compiling process
export const INTEFUSE_TARGET_NAME = "output.fuse";
export const OUTPUT_DIR = "app/output_files";
// export const GENERATED_BINARY_NAME = "llvmas";

//See compiler for more details on flags
//This specific flag dumps the .ll file and runs the binary to the stdout
export const FUSE_EXECUTABLE_ARGS = String(
  "-d " + path.join(OUTPUT_DIR, INTEFUSE_TARGET_NAME.replace(".fuse", "")),
);

export const EDITOR_VALUE_PLACEHOLDER = `@puts("hello world!")\n`;
export const OUTPUT_VALUE_PLACEHOLDER = `INTEFUSE: READY\n`;
