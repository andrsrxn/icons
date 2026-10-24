import type { FlagIcon } from './types'

export const IconFlagKR: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'KR',
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
      data-slot='icon-flag-kr'
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
            id='kr-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='kr-c'
            x1='10.5'
            x2='10.5'
            y1='4'
            y2='11'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e01b41' />
            <stop offset='1' stopColor='#c51335' />
          </linearGradient>
          <linearGradient
            id='kr-e'
            x1='10.39'
            x2='10.39'
            y1='6.88'
            y2='11'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#0e4b9c' />
            <stop offset='1' stopColor='#053677' />
          </linearGradient>
          <linearGradient
            id='kr-f'
            x1='10.5'
            x2='10.5'
            y1='2.54'
            y2='12.46'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#262626' />
            <stop offset='1' stopColor='#0d0d0d' />
          </linearGradient>
          <clipPath id='kr-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='kr-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#kr-clip)'>
        <g clipPath='url(#kr-a)'>
          <path fill='url(#kr-b)' d='M21 0H0v15h21z' />
          <path fill='url(#kr-c)' d='M10.5 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7' />
          <mask id='kr-d' width='7' height='7' x='7' y='4' maskUnits='userSpaceOnUse'>
            <path fill='#fff' d='M10.5 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7' />
          </mask>
          <g mask='url(#kr-d)'>
            <path
              fill='url(#kr-e)'
              fillRule='evenodd'
              d='M7 8c1 .94 2.5 1.5 3.5 0s3-1.5 3.5 0 0 3 0 3H7S6 7.06 7 8'
              clipRule='evenodd'
            />
          </g>
          <path
            fill='url(#kr-f)'
            fillRule='evenodd'
            d='M14.2 3.92a.25.25 0 0 1 .1-.35l.43-.24a.25.25 0 0 1 .34.1l1.25 2.15c.07.12.03.27-.1.35l-.42.24a.25.25 0 0 1-.35-.1zm1.3-.75a.25.25 0 0 1 .1-.35l.43-.24a.25.25 0 0 1 .34.1l1.25 2.15c.07.12.03.27-.1.35l-.42.24a.25.25 0 0 1-.35-.1zm-12.12 7a.25.25 0 0 1 .1-.35l.42-.24a.25.25 0 0 1 .35.1l1.24 2.15c.07.12.04.27-.09.35l-.43.24a.25.25 0 0 1-.34-.1zm1.3-.75a.25.25 0 0 1 .1-.35l.42-.24a.25.25 0 0 1 .35.1l1.24 2.15c.07.12.04.27-.09.35l-.43.24a.25.25 0 0 1-.34-.1zm10.77-.5a.25.25 0 0 1 .35-.1l.43.25c.12.07.16.23.09.35l-1.25 2.16a.25.25 0 0 1-.34.1l-.43-.25a.25.25 0 0 1-.1-.35zm1.3.75a.25.25 0 0 1 .35-.1l.43.25c.12.07.16.23.09.35l-1.25 2.16a.25.25 0 0 1-.34.1l-.43-.25a.25.25 0 0 1-.1-.35zm-12.12-7a.25.25 0 0 1 .34-.1l.43.25c.12.07.16.23.1.35L4.24 5.33a.25.25 0 0 1-.35.1l-.43-.25a.25.25 0 0 1-.09-.35zm1.3.75a.25.25 0 0 1 .34-.1l.43.25c.12.07.16.23.1.35L5.54 6.08a.25.25 0 0 1-.35.1l-.43-.25a.25.25 0 0 1-.09-.35z'
            clipRule='evenodd'
            opacity='.75'
          />
        </g>
      </g>
    </svg>
  )
}
