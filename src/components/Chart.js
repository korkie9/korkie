import React from 'react'
import { HorizontalBar } from 'react-chartjs-2'
import './Chart.css'

const Chart = () => {
  return (
    <div className="chart-con">
      <div className="bar-con">
        <HorizontalBar
          data={{
            labels: ['Node', '.Net Core'],
            datasets: [
              {
                label: 'Back End',
                data: [6.5, 5.5],
                backgroundColor: ['lightgreen', 'purple'],
              },
            ],
          }}
          width={50}
          height={160}
          options={{
            maintainAspectRatio: false,
            scales: {
              xAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    suggestedMax: 10,
                  },
                },
              ],
            },
          }}
        />
      </div>
      <div className="bar-con">
        <HorizontalBar
          data={{
            labels: ['Angular', 'React'],
            datasets: [
              {
                label: 'Front End',
                data: [7.5, 6.3],
                backgroundColor: ['red', 'skyblue'],
              },
            ],
          }}
          width={50}
          height={160}
          options={{
            maintainAspectRatio: false,
            scales: {
              xAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    suggestedMax: 10,
                  },
                },
              ],
            },
          }}
        />
      </div>
    </div>
  )
}

export default Chart

export const Languages = () => {
  return (
    <div className="bar-con">
      <HorizontalBar
        data={{
          labels: ['Typescript', 'JavaScript', 'HTML', 'CSS', 'C#', 'Java'],
          datasets: [
            {
              label: 'Languages and Scripts',
              data: [8, 8, 7, 6, 5.5, 5.5],
              backgroundColor: [
                'skyblue',
                'yellow',
                'orange',
                'darkblue',
                'purple',
                'blue',
              ],
            },
          ],
        }}
        width={50}
        height={160}
        options={{
          maintainAspectRatio: false,
          scales: {
            xAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  suggestedMax: 10,
                },
              },
            ],
          },
        }}
      />
    </div>
  )
}
export const Hosting = () => {
  return (
    <div className="bar-con">
      <HorizontalBar
        data={{
          labels: ['Heroku', 'Firebase'],
          datasets: [
            {
              label: 'Hosting',
              data: [6.5, 7],
              backgroundColor: [
                'purple',
                'yellow',
              ],
            },
          ],
        }}
        width={50}
        height={160}
        options={{
          maintainAspectRatio: false,
          scales: {
            xAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  suggestedMax: 10,
                },
              },
            ],
          },
        }}
      />
    </div>
  )
}


export const Database = () => {
  return (
    <div className="bar-con">
      <HorizontalBar
        data={{
          labels: ['MongoDB', 'Firebase'],
          datasets: [
            {
              label: 'Database',
              data: [6, 7],
              backgroundColor: [
                'green',
                'yellow',
              ],
            },
          ],
        }}
        width={50}
        height={160}
        options={{
          maintainAspectRatio: false,
          scales: {
            xAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  suggestedMax: 10,
                },
              },
            ],
          },
        }}
      />
    </div>
  )
}
