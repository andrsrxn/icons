import type { FlagIcon } from './types'

export const IconFlagIQ: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'IQ',
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
      data-slot='icon-flag-iq'
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
            id='iq-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='iq-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#df1e35' />
            <stop offset='1' stopColor='#cc162c' />
          </linearGradient>
          <linearGradient
            id='iq-d'
            x1='10.5'
            x2='10.5'
            y1='10'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#262626' />
            <stop offset='1' stopColor='#0d0d0d' />
          </linearGradient>
          <linearGradient
            id='iq-e'
            x1='10.5'
            x2='10.5'
            y1='5'
            y2='10'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <clipPath id='iq-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='iq-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#iq-clip)'>
        <g clipPath='url(#iq-a)'>
          <path fill='url(#iq-b)' d='M21 0H0v15h21z' />
          <path fill='url(#iq-c)' d='M21 0H0v5h21z' />
          <path fill='url(#iq-d)' d='M21 10H0v5h21z' />
          <path fill='url(#iq-e)' d='M21 5H0v5h21z' />
          <path
            fill='#0f7a40'
            fillRule='evenodd'
            d='M14 6.26q.02-.23.23-.14l.54.26c.13.07.23.23.23.37v2q-.01.23-.25.25h-.5a.25.25 0 0 1-.25-.26zm-6 0q.02-.23.23-.14l.54.26c.13.07.23.23.23.37v2q-.01.23-.25.25h-.5A.25.25 0 0 1 8 8.74zm4 .49c0-.14.1-.3.23-.37l.54-.26q.21-.09.23.14v2.48q-.01.24-.25.26h-.5a.25.25 0 0 1-.25-.25z'
            clipRule='evenodd'
          />
          <path
            fill='#0f7a40'
            fillRule='evenodd'
            d='M10 7.75c0-.14.1-.3.23-.37l.54-.26c.13-.07.23 0 .23.12v.8h1.5V9h-2.25a.25.25 0 0 1-.25-.25zm-4 0c0-.14.1-.3.23-.37l.54-.26c.13-.07.23 0 .23.12v.8h1.5V9H6.25A.25.25 0 0 1 6 8.75z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
