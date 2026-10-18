import type { FlagIcon } from './types'

export const IconFlagGQ: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'GQ',
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
      data-slot='icon-flag-gq'
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
            id='gq-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='gq-c'
            x1='10.5'
            x2='10.5'
            y1='10'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ec3938' />
            <stop offset='1' stopColor='#e12524' />
          </linearGradient>
          <linearGradient
            id='gq-d'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#51b422' />
            <stop offset='1' stopColor='#429919' />
          </linearGradient>
          <linearGradient
            id='gq-e'
            x1='10.5'
            x2='10.5'
            y1='5'
            y2='10'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient id='gq-f' x1='3.5' x2='3.5' y1='0' y2='15' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#258de7' />
            <stop offset='1' stopColor='#1276cc' />
          </linearGradient>
          <clipPath id='gq-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='gq-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#gq-clip)'>
        <g clipPath='url(#gq-a)'>
          <path fill='url(#gq-b)' d='M21 0H0v15h21z' />
          <path fill='url(#gq-c)' d='M21 10H0v5h21z' />
          <path fill='url(#gq-d)' d='M21 0H0v5h21z' />
          <path fill='url(#gq-e)' d='M21 5H0v5h21z' />
          <path
            fill='#159940'
            fillRule='evenodd'
            d='M10.07 8.93c.1-.1.17-.3.17-.42V7.24A.25.25 0 0 0 10 7h-.25q-.21-.02-.08-.17l.66-.66c.1-.1.25-.1.34 0l.66.66q.13.16-.08.17H11a.25.25 0 0 0-.25.24v1.27c0 .13.08.32.17.41l-.1-.1q.14.16-.07.18h-.5q-.21-.02-.08-.18z'
            clipRule='evenodd'
          />
          <path fill='url(#gq-f)' fillRule='evenodd' d='m0 0 7 7.5L0 15z' clipRule='evenodd' />
        </g>
      </g>
    </svg>
  )
}
