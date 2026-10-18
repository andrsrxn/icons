import type { FlagIcon } from './types'

export const IconFlagES: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'ES',
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
      data-slot='icon-flag-es'
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
            id='es-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='es-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='4'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#dd172c' />
            <stop offset='1' stopColor='#c60b1f' />
          </linearGradient>
          <linearGradient
            id='es-d'
            x1='10.5'
            x2='10.5'
            y1='11'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#dd172c' />
            <stop offset='1' stopColor='#c60b1f' />
          </linearGradient>
          <linearGradient
            id='es-e'
            x1='10.5'
            x2='10.5'
            y1='4'
            y2='11'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffd133' />
            <stop offset='1' stopColor='#ffc500' />
          </linearGradient>
          <clipPath id='es-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='es-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#es-clip)'>
        <g clipPath='url(#es-a)'>
          <path fill='url(#es-b)' d='M21 0H0v15h21z' />
          <path fill='url(#es-c)' d='M21 0H0v4h21z' />
          <path fill='url(#es-d)' d='M21 11H0v4h21z' />
          <path fill='url(#es-e)' d='M21 4H0v7h21z' />
          <path fill='#ffedb1' fillRule='evenodd' d='M5.5 7h1v.5h-1z' clipRule='evenodd' />
          <path
            fill='#a41517'
            d='M4.92 8.46c.02.3.29.54.58.54a.6.6 0 0 0 .58-.54L6.21 7H4.79zM4.29 7a.46.46 0 0 1 .47-.5h1.48c.28 0 .5.22.47.5l-.13 1.5c-.04.55-.52 1-1.08 1a1.1 1.1 0 0 1-1.08-1z'
          />
          <path
            fill='#a41517'
            fillRule='evenodd'
            d='M4.5 7.5h2V8H6l-.5 1L5 8h-.5z'
            clipRule='evenodd'
          />
          <path fill='#a41517' d='M4 6H3v3.5h1zm4 0H7v3.5h1z' />
          <path
            fill='#a41517'
            fillRule='evenodd'
            d='M4.5 5.5c0-.28.21-.5.5-.5h1c.27 0 .5.23.5.5v.25c0 .14-.1.25-.25.25h-1.5a.25.25 0 0 1-.25-.25z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
