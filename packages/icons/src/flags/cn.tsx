import type { FlagIcon } from './types'

export const IconFlagCN: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'CN',
  'aria-hidden': ariaHidden,
  preserveAspectRatio,
  cover,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)
  const isHidden = ariaHidden === true

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='icon-flag-cn'
      role={isHidden || !isLabelled ? undefined : 'img'}
      aria-hidden={isHidden || !isLabelled ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      focusable={isHidden || !isLabelled ? false : undefined}
      preserveAspectRatio={cover ? 'xMidYMid slice' : preserveAspectRatio}
      className={`icon-flag ${className ?? ''}`.trim()}
      {...props}>
      <defs>
        <defs>
          <linearGradient
            id='cn-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='cn-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#f1361d' />
            <stop offset='1' stopColor='#df2910' />
          </linearGradient>
          <linearGradient
            id='cn-d'
            x1='8.78'
            x2='12.78'
            y1='1.2'
            y2='7.13'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffdc42' />
            <stop offset='1' stopColor='#fdd217' />
          </linearGradient>
          <linearGradient id='cn-e' x1='5' x2='5' y1='2' y2='7.43' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffdc42' />
            <stop offset='1' stopColor='#fdd217' />
          </linearGradient>
          <clipPath id='cn-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='cn-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#cn-clip)'>
        <g clipPath='url(#cn-a)'>
          <path fill='url(#cn-b)' d='M21 0H0v15h21z' />
          <path fill='url(#cn-c)' d='M21 0H0v15h21z' />
          <path
            fill='url(#cn-d)'
            fillRule='evenodd'
            d='m10.13 4.48-.63.39.02-.74-.39-.63.74.02.63-.39-.02.74.39.63zM8.28 2.45l-.73-.12.5-.55.12-.73.55.5.73.12-.5.55-.12.73zm.37 6.53-.62.4v-.73l-.41-.62h.73l.62-.41v.73l.41.62zM9.9 6.99l-.73.08.33-.66-.08-.73.66.33.73-.08-.33.66.08.73z'
            clipRule='evenodd'
          />
          <path
            fill='url(#cn-e)'
            fillRule='evenodd'
            d='M5 6.17 3.24 7.43l.65-2.07-1.74-1.29 2.16-.02L5 2l.69 2.05 2.16.02-1.74 1.3.65 2.06z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
