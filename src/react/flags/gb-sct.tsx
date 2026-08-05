import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagGBSCT: FlagIcon = ({
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
      <title>GB-SCT</title>

      <defs>
        <linearGradient id='gb-sct-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='gb-sct-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#1479d0' />
          <stop offset='100%' stopColor='#0a68ba' />
        </linearGradient>
        <clipPath id='gb-sct-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#gb-sct-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#gb-sct-a)' d='M0 0h21v15H0z' />
          <path fill='url(#gb-sct-b)' d='M0-.003h21v15H0z' />
          <path
            fill='url(#gb-sct-a)'
            d='M10.5 6.291-.962-1.44-2.08.218l10.792 7.28-10.792 7.279 1.118 1.658L10.5 8.704l11.462 7.73 1.118-1.657-10.791-7.28L23.08.218 21.962-1.44z'
          />
        </g>
      </g>
    </svg>
  )
}
