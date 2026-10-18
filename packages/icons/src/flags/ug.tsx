import type { FlagIcon } from './types'

export const IconFlagUG: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'UG',
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
      data-slot='icon-flag-ug'
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
            id='ug-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='ug-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='2'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#262626' />
            <stop offset='1' stopColor='#0d0d0d' />
          </linearGradient>
          <linearGradient
            id='ug-d'
            x1='10.5'
            x2='10.5'
            y1='8'
            y2='10'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#262626' />
            <stop offset='1' stopColor='#0d0d0d' />
          </linearGradient>
          <linearGradient
            id='ug-e'
            x1='10.5'
            x2='10.5'
            y1='5'
            y2='8'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ed1623' />
            <stop offset='1' stopColor='#d70915' />
          </linearGradient>
          <linearGradient
            id='ug-f'
            x1='10.5'
            x2='10.5'
            y1='2'
            y2='5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fee044' />
            <stop offset='1' stopColor='#fcdb32' />
          </linearGradient>
          <linearGradient
            id='ug-g'
            x1='10.5'
            x2='10.5'
            y1='13'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ed1623' />
            <stop offset='1' stopColor='#d70915' />
          </linearGradient>
          <linearGradient
            id='ug-h'
            x1='10.5'
            x2='10.5'
            y1='10'
            y2='13'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fee044' />
            <stop offset='1' stopColor='#fcdb32' />
          </linearGradient>
          <linearGradient
            id='ug-i'
            x1='10.5'
            x2='10.5'
            y1='4'
            y2='11'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='ug-j'
            x1='10.76'
            x2='10.76'
            y1='4.7'
            y2='10'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#262626' />
            <stop offset='1' stopColor='#0d0d0d' />
          </linearGradient>
          <clipPath id='ug-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='ug-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#ug-clip)'>
        <g clipPath='url(#ug-a)'>
          <path fill='url(#ug-b)' d='M21 0H0v15h21z' />
          <path fill='url(#ug-c)' d='M21 0H0v2h21z' />
          <path fill='url(#ug-d)' d='M21 8H0v2h21z' />
          <path fill='url(#ug-e)' d='M21 5H0v3h21z' />
          <path fill='url(#ug-f)' d='M21 2H0v3h21z' />
          <path fill='url(#ug-g)' d='M21 13H0v2h21z' />
          <path fill='url(#ug-h)' d='M21 10H0v3h21z' />
          <path fill='url(#ug-i)' d='M10.5 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7' />
          <path
            fill='url(#ug-j)'
            fillRule='evenodd'
            d='M9.68 5.68a.25.25 0 0 1 0-.36l.14-.14.34-.36.12-.1c.12.02.32-.04.44-.01l.12.09c.09.11.11.3.04.43l-.26.54a1 1 0 0 0-.12.48c0 .14.1.3.23.37l.54.26c.13.07.3.2.4.3l.66.65c.1.1.12.26.05.4l-.26.54c-.07.13-.2.15-.3.05l-.14-.14a.25.25 0 0 0-.36 0l-.14.14c-.1.1-.18.3-.18.43 0 .14.08.33.18.43l.14.14q.14.16-.07.18h-1q-.22-.02-.07-.18l.14-.14c.1-.1.18-.3.18-.43a.25.25 0 0 0-.25-.25.7.7 0 0 0-.43.18l-.14.14c-.1.1-.26.1-.36 0l-.14-.14a.25.25 0 0 1 0-.36l.14-.14a.7.7 0 0 1 .43-.18h.5q.21-.02.08-.17L9.17 7.17a.25.25 0 0 1 0-.34l.66-.66c.1-.1.1-.25-.01-.35z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
