import React from 'react'
import styled from 'styled-components'
import { GithubContext } from '../context/context'
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts'

const Repos = () => {
  const { repos } = React.useContext(GithubContext)

  const languageMap = repos.reduce((map, { language }) => {
    if (language) map.set(language, (map.get(language) ?? 0) + 1)
    return map
  }, new Map())

  const languageData = [...languageMap.entries()]
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5)
    .map((item) => ({ label: item[0], value: item[1] }))

  console.log(languageData)

  const chartData = [
    {
      label: 'HTML',
      value: '13',
    },
    {
      label: 'CSS',
      value: '160',
    },
    {
      label: 'Javascript',
      value: '80',
    },
  ]

  return (
    <section className="section">
      <Wrapper className="section-center">
        <Pie3D data={languageData} />
        {/* <ExampleChart data={chartData} /> */}
      </Wrapper>
    </section>
  )
}

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`

export default Repos
