import path from "path";

//hard coded set of files to be used in the internal compiling process
export const INTEFUSE_TARGET_NAME = "output.fuse";
export const OUTPUT_DIR = "app/output_files";
export const FUSE_EXECUTABLE_DIR = path.join(
  process.cwd(),
  "compiler/interfuse",
);
// export const GENERATED_BINARY_NAME = "llvmas";

//See compiler for more details on flags
//This specific flag dumps the .ll file and runs the binary to the stdout
export const FUSE_EXECUTABLE_ARGS = String(
  "-d " + path.join(OUTPUT_DIR, INTEFUSE_TARGET_NAME.replace(".fuse", "")),
);

export const EDITOR_VALUE_PLACEHOLDER = `
\`\`\`
Welcome to Interfuse, to explore the syntax rules of the language
please refer to the docs
\`\`\`

fn @hello_world(@a : int ) -> void {

  @puts("Hello world")
  @printf(@a)
}

@hello_world(10)
`;

export const OUTPUT_VALUE_PLACEHOLDER = `INTEFUSE: READY\n`;
export const OUTPUT_LLVM_IR_INITIAL_PLACEHOLDER = `Awaiting Compiler...\n`;
export const OUTPUT_LLVM_IR_ERROR_PLACEHOLDER = `Error in generating IR, please check Output to address any issues\n`;
