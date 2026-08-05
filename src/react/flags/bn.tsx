import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagBN: FlagIcon = ({
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
      <title>BN</title>

      <defs>
        <linearGradient id='bn-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='bn-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#f7e250' />
          <stop offset='100%' stopColor='#f7df38' />
        </linearGradient>
        <linearGradient id='bn-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#262626' />
          <stop offset='100%' stopColor='#0d0d0d' />
        </linearGradient>
        <clipPath id='bn-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#bn-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#bn-a)' d='M0 0h21v15H0z' />
          <path fill='url(#bn-b)' d='M0 0h21v15H0z' />
          <path fill='url(#bn-a)' d='M-3.487 4.59h29v3h-29z' transform='rotate(20 11.013 6.09)' />
          <path fill='url(#bn-c)' d='M-4.513 7.41h29v3h-29z' transform='rotate(20 9.987 8.91)' />
        </g>
      </g>
    </svg>
  )
}
