import { useEditorContext } from "./EditorContext";




export default function RunBtn() {

  const { textData, setOutputData } = useEditorContext()


  const handleRun = async () => {

    try {

      if (!textData || !setOutputData) {
        return
      }

      //Text is being sent as formdata since sending plain text
      //strips \n characters from stream
      const formData = new FormData();
      formData.append('file', textData);


      const response = await fetch('/api/runsrc/upload', {
        method: 'POST',
        body: formData
      })

      if (response.ok) {
        const data = await response.json()
        setOutputData(data.message)
      }

    } catch (error) {
      console.error(error)
    }

  }
  //TODO: Implement options alongside the run btn, these parameters could be stored in the context
  return (
    <input type="submit" onClick={handleRun} value="Run" className="mt-4 mb-4 cursor-pointer justify-center align-middle bg-gray-100" />
  )

}

