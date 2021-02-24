import React from 'react'

// import '../src/styles/global.css'

const colors = [
  ['--primary', 'var(--magenta)', '#e20074'],
  ['--secondary', 'var(--gray-200)', '#ededed'],
  ['--success', 'var(--green)', '#558f1c'],
  ['--info', 'var(--cyan)', '#00a0de'],
  ['--warning', 'var(--yellow)', '#ff9a1e'],
  ['--danger', 'var(--red)', '#d90000'],
  ['--light', 'var(--gray-100)', '#fafafa'],
  ['--dark', 'var(--gray-700)', '#4B4B4B'],
  ['--blue', ' #00739f'],
  ['--light_blue', ' #80dcff'],
  ['--indigo', ' #6610f2'],
  ['--purple', ' #6f42c1'],
  ['--pink', ' #e83e8c'],
  ['--light_red', ' #ed8b8b'],
  ['--red', ' #d90000'],
  ['--orange', ' #fd7e14'],
  ['--yellow', ' #ff9a1e'],
  ['--light_green', ' #bbdc9b'],
  ['--green', ' #558f1c'],
  ['--teal', ' #20c997'],
  ['--cyan', ' #00a0de'],
  ['--magenta_light', ' #f7bedb'],
  ['--magenta**', ' #e20074'],
  ['--magenta_dark', ' #bd0460'],
  ['--magenta_darker', ' #a30051'],
  ['--white', ' #ffffff'],
  ['--gray-100', ' #fafafa'],
  ['--gray-200', ' #ededed'],
  ['--gray-230', ' #e6e6e6'],
  ['--gray-250', ' #dcdcdc'],
  ['--gray-300', ' #d0d0d0'],
  ['--gray-350', ' #b2b2b2'],
  ['--gray-400', ' #a4a4a4'],
  ['--gray-500', ' #7c7c7c'],
  ['--gray-600', ' #6c6c6c'],
  ['--gray-700', ' #4b4b4b'],
  ['--gray-800', ' #383838'],
  ['--gray-900', ' #262626'],
  ['--black', ' #000']
]

function Colors ({ from = 0, to = 100 }) {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexFlow: 'row wrap',
          margin: 0,
          padding: 0,
          textAlign: 'center',
          fontFamily: 'Nunito Sans, -apple-system, Arial'
        }}
      >
        {colors.slice(from, to).map(([name, hex, ref]) => (
          <div style={{
            minWidth: 120,
            marginBottom: 40
          }}
          >
            <div
              style={{
                backgroundColor: ref || hex,
                margin: '0 auto',
                display: 'block',
                height: '80px',
                width: '80px',
                borderRadius: 40,
                border: '1px solid #DDD'
              }}
            />
            <span style={{ display: 'block' }}>{name}</span>
            <code
              style={{
                display: 'inline-block',
                padding: 3,
                borderRadius: 4,
                marginTop: '.6em',
                backgroundColor: '#dcdcdc'
              }}
            >
              {ref ? hex : hex.toUpperCase()}
            </code>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Colors
