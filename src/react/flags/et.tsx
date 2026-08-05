import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagET: FlagIcon = ({
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
      <title>ET</title>

      <defs>
        <linearGradient id='et-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='et-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#20aa46' />
          <stop offset='100%' stopColor='#168835' />
        </linearGradient>
        <linearGradient id='et-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e92f3b' />
          <stop offset='100%' stopColor='#d81824' />
        </linearGradient>
        <linearGradient id='et-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fadf50' />
          <stop offset='100%' stopColor='#fcdc34' />
        </linearGradient>
        <linearGradient id='et-e' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#205cca' />
          <stop offset='100%' stopColor='#154bad' />
        </linearGradient>
        <linearGradient id='et-f' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ffdb3d' />
          <stop offset='100%' stopColor='#fdd420' />
        </linearGradient>
        <clipPath id='et-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#et-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#et-a)' d='M0 0h21v15H0z' />
          <path fill='url(#et-b)' d='M0 0h21v5H0z' />
          <path fill='url(#et-c)' d='M0 10h21v5H0z' />
          <path fill='url(#et-d)' d='M0 5h21v5H0z' />
          <circle cx='10.5' cy='7.5' r='3.5' fill='url(#et-e)' />
          <path
            fill='url(#et-f)'
            fillRule='nonzero'
            d='M10.5 8.475 9.03 9.523 9.574 7.8l-1.45-1.074 1.804-.016L10.5 5l.573 1.711 1.805.016-1.45 1.074.541 1.722zm0-.614.544.388-.2-.637.536-.398-.668-.006-.212-.634-.212.634-.668.006.537.398-.201.637z'
          />
        </g>
      </g>
    </svg>
  )
}
