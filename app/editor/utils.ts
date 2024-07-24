//TODO: Dump output to a file with .fuse extension

export function dumpOutputToFile(content: string): string | undefined {
  //TODO: Specify path to dump file
  fs.writeFile('output.fuse', content, (err) => {
    if (err) {
      console.error(err)
      return err
    }

    //append \n to file, fixes weird invalid token
    fs.appendFile('output.fuse', '\n', (err) => {
        console.error(err)
        return err
    })

  })

  //verify file exists
  return 'output.fuse'
}
