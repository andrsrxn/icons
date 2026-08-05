import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagIS: FlagIcon = ({
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
      <title>IS</title>

      <defs>
        <linearGradient id='is-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='is-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#0e4cb5' />
          <stop offset='100%' stopColor='#063b95' />
        </linearGradient>
        <linearGradient id='is-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#eb363a' />
          <stop offset='100%' stopColor='#d52b2f' />
        </linearGradient>
        <clipPath id='is-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#is-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#is-a)' d='M0 0h21v15H0z' />
          <path fill='url(#is-b)' d='M0 0h21v15H0z' />
          <path fill='url(#is-a)' d='M0 9h6v6h3V9h12V6H9V0H6v6H0z' />
          <path fill='url(#is-c)' d='M0 8h7v7h1V8h13V7H8V0H7v7H0z' />
        </g>
      </g>
    </svg>
  )
}
