import type { FlagIcon } from './types'

export const IconFlagME: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'ME',
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
      data-slot='icon-flag-me'
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
            id='me-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='me-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e6be53' />
            <stop offset='1' stopColor='#d3ad46' />
          </linearGradient>
          <linearGradient
            id='me-d'
            x1='10.5'
            x2='10.5'
            y1='1'
            y2='14'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e01826' />
            <stop offset='1' stopColor='#c30a17' />
          </linearGradient>
          <linearGradient
            id='me-e'
            x1='10.5'
            x2='10.5'
            y1='2.59'
            y2='12.84'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e6be53' />
            <stop offset='1' stopColor='#d3ad46' />
          </linearGradient>
          <clipPath id='me-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='me-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#me-clip)'>
        <g clipPath='url(#me-a)'>
          <path fill='url(#me-b)' d='M21 0H0v15h21z' />
          <path fill='url(#me-c)' d='M21 0H0v15h21z' />
          <path
            fill='url(#me-d)'
            d='M19.25 1H1.75a.75.75 0 0 0-.75.75v11.5c0 .41.34.75.75.75h17.5c.41 0 .75-.34.75-.75V1.75a.75.75 0 0 0-.75-.75'
          />
          <path
            fill='url(#me-e)'
            fillRule='evenodd'
            d='M10.15 5.15c.2.2.5.2.7 0l-.2.2 1-1c.2-.2.54-.25.8-.12l.1.04c.25.13.3.39.1.58l.2-.2-1 1c-.2.2-.25.54-.12.8l.04.1c.13.25.23.68.23.95V7c0 .28.2.4.45.27l.1-.04c.25-.13.3-.39.1-.58l.2.2a.5.5 0 0 1 0-.7l-.2.2c.2-.2.45-.54.58-.8l.04-.1c.13-.25.28-.66.35-.93l.26-1.04c.07-.26.26-.3.42-.08l.9 1.2c.16.22.3.61.3.9v1c0 .27-.1.7-.23.95l-.04.1c-.13.25-.39.6-.58.8l-.3.3c-.2.2-.54.45-.8.58l-.1.04c-.25.13-.68.23-.95.23q-.42.02-.05.23l.1.04c.25.13.6.39.8.58l-.2-.2c.2.2.5.2.7 0l-.2.2c.2-.2.5-.2.7 0l-.2-.2c.2.2.25.54.12.8l-.04.1a.9.9 0 0 1-.73.45c-.28 0-.7-.1-.95-.23l-.1-.04a2 2 0 0 1-.68-.68l-.04-.1c-.13-.25-.39-.3-.58-.1l.2-.2c-.2.2-.23.53-.08.76l.46.68a.5.5 0 0 1-.14.68l-.68.46a.8.8 0 0 1-.82 0l-.68-.46a.5.5 0 0 1-.14-.68l.46-.68a.6.6 0 0 0-.08-.76l.2.2c-.2-.2-.45-.16-.58.1l-.04.1c-.13.25-.42.55-.68.68l-.1.04c-.25.13-.68.23-.95.23a.9.9 0 0 1-.73-.45l-.04-.1a.7.7 0 0 1 .12-.8l-.2.2c.2-.2.5-.2.7 0l-.2-.2c.2.2.5.2.7 0l-.2.2c.2-.2.54-.45.8-.58l.1-.04q.37-.21-.05-.23c-.28 0-.7-.1-.95-.23l-.1-.04a4 4 0 0 1-.8-.58l-.3-.3c-.2-.2-.45-.54-.58-.8l-.04-.1a3 3 0 0 1-.23-.95v-1c0-.27.14-.68.3-.9l.9-1.2c.16-.22.35-.19.42.08l.26 1.04c.07.26.22.67.35.93l.04.1c.13.25.39.6.58.8l-.2-.2c.2.2.2.5 0 .7l.2-.2c-.2.2-.16.45.1.58l.1.04C8.8 7.4 9 7.27 9 7v.5c0-.28.1-.7.23-.95l.04-.1a.7.7 0 0 0-.12-.8l-1-1 .2.2c-.2-.2-.16-.45.1-.58l.1-.04c.25-.13.6-.07.8.12l1 1zm-.8-1.8c-.2-.2-.14-.42.12-.5l.56-.2c.26-.08.68-.08.94 0l.56.2c.26.08.31.3.12.5l-.3.3c-.2.2-.58.35-.85.35-.28 0-.66-.16-.85-.35z'
            clipRule='evenodd'
          />
          <path
            fill='#215f90'
            fillRule='evenodd'
            d='M9.5 9q.02.43.18.03S10 8 10.5 8s.82 1.04.82 1.04q.17.38.18-.05V8.5c0-.83-.45-1.5-1-1.5s-1 .67-1 1.5z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
