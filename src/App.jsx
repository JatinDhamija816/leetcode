import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [leetcode, setLeetcode] = useState([])

  useEffect(() => {
    axios.get('https://leetcodestats.cyclic.app/JatinDhamija816/')
      .then((res) => {
        setLeetcode(res.data)
      }).catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <>
      <p>Ranking: {leetcode.ranking}</p>
      <p>Total Solved Question: {leetcode.totalSolved}</p>
      <p>Contribution Points: {leetcode.contributionPoints}</p>
    </>
  )
}
export default App
