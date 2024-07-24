"use client";



export interface BtnProps {
  content: string,
  //setState
  setOutputBox: React.Dispatch<React.SetStateAction<string>> | undefined;
}

export default function RunBtn({ content, setOutputBox }: BtnProps) {


  const handleRun = async () => {

    try {

      //Text is being sent as formdata since sending plain text
      //strips \n characters from stream
      const formData = new FormData();
      formData.append('file', content);


      const response = await fetch('/api/runsrc/upload', {
        method: 'POST',
        body: formData
      })

      if (response.ok) {
        const data = await response.json()

        if (setOutputBox)
          setOutputBox(data.message)
      } else {
        //FIXME: Sent proper error messages upon failure
        throw Error("Response error")
      }


    } catch (error) {
      console.error(error)
    }

  }

  return (
    <input type="submit" onClick={handleRun} value="Run" className="mt-4 mb-4 cursor-pointer justify-center align-middle bg-gray-100" />
  )

}

