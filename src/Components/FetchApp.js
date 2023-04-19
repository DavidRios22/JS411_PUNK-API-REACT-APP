import React, { useState, useEffect, setData } from "react"
import axios from "axios"
import ListData from "./ListData"

export default function FetchApp() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.log("ERROR", error)
      })
  }, [])

  return (
    <div>
      {data.map((beer) => {
        return <ListData data={beer} />
      })}
    </div>
  )
}
