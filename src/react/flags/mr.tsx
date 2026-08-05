import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagMR: FlagIcon = ({
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
      <title>MR</title>

      <defs>
        <linearGradient id='mr-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='mr-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#108b4d' />
          <stop offset='100%' stopColor='#0a6135' />
        </linearGradient>
        <linearGradient id='mr-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ffc941' />
          <stop offset='100%' stopColor='#ffc42e' />
        </linearGradient>
        <clipPath id='mr-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#mr-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#mr-a)' d='M0 0h21v15H0z' />
          <path fill='url(#mr-b)' d='M0 0h21v15H0z' />
          <path
            fill='url(#mr-c)'
            d='M14.86 5.8q.056.346.056.708A4.5 4.5 0 1 1 5.97 5.8a4.501 4.501 0 0 0 8.89 0m-4.36.623-1.236.881.456-1.448-1.22-.903 1.518-.014L10.5 3.5l.482 1.44 1.518.013-1.22.903.456 1.448z'
          />
        </g>
      </g>
    </svg>
  )
}
