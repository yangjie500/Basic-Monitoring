import React, { useEffect } from "react";
import { LoaderFunctionArgs, useRevalidator } from "react-router-dom";
import Header from "../components/Header";
import TaskBody from "../components/TaskBody";


export async function loader({request, params}: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const queryStatus = url.searchParams.get("status")
  const queryVersion = url.searchParams.get("version")
  const backendApiUrl = `http://localhost:3000/${queryVersion}/retrieve/${queryStatus}`
  console.log(backendApiUrl)
  const data: ITask[] = await fetch('http://localhost:3000/data')
                        .then((response) => response.json())
  return {data}
}


export default function Home() {
  let revalidator = useRevalidator();
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (revalidator.state === 'idle') {
        revalidator.revalidate();
      }
    }, 5000)
    return () => {
      clearInterval(intervalId)
    }
  })

  return (
    <>
      <Header />
      <TaskBody />
    </>
  )
}

export type ITask = {
  uuid: string
  status: 'Success' | 'Failure' | 'Pending'
  date_completed: string
  time_taken: string
  ip_address: string
}
