import type { FlagIcon } from './types'

export const IconFlagVU: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'VU',
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
      data-slot='icon-flag-vu'
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
            id='vu-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='vu-c'
            x1='10.7'
            x2='10.7'
            y1='9'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#27ab53' />
            <stop offset='1' stopColor='#219447' />
          </linearGradient>
          <linearGradient
            id='vu-d'
            x1='10.7'
            x2='10.7'
            y1='0'
            y2='6'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ec2547' />
            <stop offset='1' stopColor='#ce1a39' />
          </linearGradient>
          <linearGradient
            id='vu-e'
            x1='10.7'
            x2='10.7'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#262626' />
            <stop offset='1' stopColor='#0d0d0d' />
          </linearGradient>
          <linearGradient
            id='vu-f'
            x1='10.1'
            x2='10.1'
            y1='.8'
            y2='14.2'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffd449' />
            <stop offset='1' stopColor='#fdcd34' />
          </linearGradient>
          <linearGradient id='vu-g' x1='2.7' x2='2.7' y1='6' y2='10' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffd449' />
            <stop offset='1' stopColor='#fdcd34' />
          </linearGradient>
          <clipPath id='vu-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='vu-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#vu-clip)'>
        <g clipPath='url(#vu-a)'>
          <path fill='url(#vu-b)' d='M21 0H0v15h21z' />
          <path fill='url(#vu-c)' d='M21.2 9H.2v6h21z' />
          <path fill='url(#vu-d)' d='M21.2 0H.2v6h21z' />
          <path
            fill='url(#vu-e)'
            fillRule='evenodd'
            d='M8.2 6h13v3h-13l-8 6V0z'
            clipRule='evenodd'
          />
          <path
            fill='url(#vu-f)'
            d='M6.87 7.5-.6 1.9l-.4-.3.6-.8.4.3L7.87 7H21.2v1H7.7l.3-.1-8 6-.4.3-.6-.8.4-.3z'
          />
          <path
            fill='url(#vu-g)'
            fillRule='evenodd'
            d='M2.7 9a1.5 1.5 0 1 1 1.5-1.5c0 .73-.81 2.36-1.5 2.5-.1.02.1-1 0-1m0-.75c.28.25.5-.47.5-.75a.5.5 0 0 0-1 0c0 .28.22 1 .5.75'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
