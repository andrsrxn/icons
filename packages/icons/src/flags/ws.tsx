import type { FlagIcon } from './types'

export const IconFlagWS: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'WS',
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
      data-slot='icon-flag-ws'
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
            id='ws-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='ws-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e31f37' />
            <stop offset='1' stopColor='#cc162c' />
          </linearGradient>
          <linearGradient id='ws-d' x1='5.5' x2='5.5' y1='0' y2='8' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#083b9a' />
            <stop offset='1' stopColor='#042e7d' />
          </linearGradient>
          <linearGradient
            id='ws-e'
            x1='5.25'
            x2='5.25'
            y1='.79'
            y2='7.21'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <clipPath id='ws-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='ws-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#ws-clip)'>
        <g clipPath='url(#ws-a)'>
          <path fill='url(#ws-b)' d='M21 0H0v15h21z' />
          <path fill='url(#ws-c)' d='M21 0H0v15h21z' />
          <path fill='url(#ws-d)' fillRule='evenodd' d='M0 8h11V0H0z' clipRule='evenodd' />
          <path
            fill='url(#ws-e)'
            fillRule='evenodd'
            d='m5 7-.7.2.2-.7-.2-.7.7.2.7-.2-.2.7.2.7zm0-5-.7.2.2-.7-.2-.7.7.2.7-.2-.2.7.2.7zM3 4.5l-.7.2.2-.7-.2-.7.7.2.7-.2-.2.7.2.7zM7.5 4l-.7.2.2-.7-.2-.7.7.2.7-.2-.2.7.2.7zM6.25 5.5a.25.25 0 1 1 0-.5.25.25 0 0 1 0 .5'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
