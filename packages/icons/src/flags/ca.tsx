import type { FlagIcon } from './types'

export const IconFlagCA: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'CA',
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
      data-slot='icon-flag-ca'
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
            id='ca-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='ca-c'
            x1='15.5'
            x2='15.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ff3131' />
            <stop offset='1' stopColor='red' />
          </linearGradient>
          <linearGradient id='ca-d' x1='3.5' x2='3.5' y1='0' y2='15' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ff3131' />
            <stop offset='1' stopColor='red' />
          </linearGradient>
          <linearGradient
            id='ca-e'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='ca-f'
            x1='10.5'
            x2='10.5'
            y1='4'
            y2='11'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ff3131' />
            <stop offset='1' stopColor='red' />
          </linearGradient>
          <clipPath id='ca-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='ca-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#ca-clip)'>
        <g clipPath='url(#ca-a)'>
          <path fill='url(#ca-b)' d='M21 0H0v15h21z' />
          <path fill='url(#ca-c)' d='M21 0H10v15h11z' />
          <path fill='url(#ca-d)' d='M7 0H0v15h7z' />
          <path fill='url(#ca-e)' d='M15 0H6v15h9z' />
          <path
            fill='url(#ca-f)'
            fillRule='evenodd'
            d='m11.67 7.33.66-.66c.1-.1.25-.09.35.01L13 7l1-.5-.5 1 .32.32c.1.1.1.26 0 .35L12.5 9.5H11l-.25 1.5h-.5L10 9.5H8.5L7.17 8.17a.25.25 0 0 1 .01-.35l.32-.32-.5-1L8 7l.32-.32c.1-.1.26-.1.35 0l.66.65q.16.14.12-.08L9 5l1 .5.5-1.5.5 1.5 1-.5-.45 2.25q-.03.21.12.08'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
