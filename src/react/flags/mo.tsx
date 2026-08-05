import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagMO: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  ...props
}: FlagIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      role='img'
      className={`ui-icon-flag ${className ?? ''}`}
      {...props}>
      <title>MO</title>

      <defs>
        <linearGradient id='mo-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='mo-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#079d7b' />
          <stop offset='100%' stopColor='#01795e' />
        </linearGradient>
        <clipPath id='mo-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#mo-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#mo-a)' d='M0 0h21v15H0z' />
          <path fill='url(#mo-b)' d='M0 0h21v15H0z' />
          <path
            fill='url(#mo-a)'
            d='M2.452 6.902q.215.057.423.098H.5q.18.535.473 1h7.054q.293-.465.473-1H6.093q.215-.04.437-.097C6.076 6.918 5.336 7 4.5 7c-.847 0-1.596-.084-2.048-.098m-.417-.125C.915 6.398.146 5.792.267 5.34c.134-.503 1.325-.62 2.659-.263q.105.027.206.059a4.3 4.3 0 0 1-.046-.637C3.086 3.12 3.72 2 4.5 2s1.414 1.12 1.414 2.5q0 .329-.046.634.115-.036.234-.068c1.334-.357 2.524-.24 2.659.264.122.454-.66 1.067-1.797 1.445C6.764 6.18 5.737 6 4.5 6c-1.238 0-2.266.18-2.465.777M7.166 9c-.728.625-1.656 1-2.666 1a4.08 4.08 0 0 1-2.666-1z'
            transform='translate(6 2)'
          />
          <path
            fill='#fcd117'
            d='M10.5 3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-4 2.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m8 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1M13 4a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1M8 4a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1'
          />
        </g>
      </g>
    </svg>
  )
}
