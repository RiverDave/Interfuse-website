"use client";

export interface BtnProps {
  content : string,
  setOutputBox: React.Dispatch<React.SetStateAction<string>> | undefined; //setState
}

export default function RunBtn( { content, setOutputBox } :BtnProps) {

  const handleRun = async () => {

    try {


      const response = await fetch('/api/runsrc/' + content, {
        method: 'GET',
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Transfer-Encoding': 'chunked',
        }

      })
      const data = await response.json()

      if(setOutputBox)
        setOutputBox(data.message)

    } catch (error) {
      console.error(error)
    }

  }

  return (
    <input type="submit" onClick={handleRun} value="Run" className="mt-4 mb-4 cursor-pointer justify-center align-middle bg-gray-100" />
  )

}

