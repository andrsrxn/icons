import type { FlagIcon } from './types'

export const IconFlagNP: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'NP',
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
      data-slot='icon-flag-np'
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
            id='np-b'
            x1='6.75'
            x2='6.75'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='np-d'
            x1='6.75'
            x2='6.75'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ee1b44' />
            <stop offset='1' stopColor='#dd153c' />
          </linearGradient>
          <linearGradient
            id='np-e'
            x1='6.58'
            x2='6.58'
            y1='.5'
            y2='14.5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#0543a8' />
            <stop offset='1' stopColor='#003893' />
          </linearGradient>
          <linearGradient
            id='np-g'
            x1='4'
            x2='4'
            y1='4.11'
            y2='12.85'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <clipPath id='np-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='np-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#np-clip)'>
        <g clipPath='url(#np-a)'>
          <path
            fill='url(#np-b)'
            d='M0 0h1.5c.27 0 .69.13.91.28l10.77 7.17c.45.3.37.55-.18.55H6l7.25 6.34c.41.37.3.66-.26.66H0z'
          />
          <mask
            id='np-c'
            width='14'
            height='15'
            x='0'
            y='0'
            maskUnits='userSpaceOnUse'
            style={{ maskType: 'luminance' }}>
            <path
              fill='#fff'
              d='M0 0h1.5c.27 0 .69.13.91.28l10.77 7.17c.45.3.37.55-.18.55H6l7.25 6.34c.41.37.3.66-.26.66H0z'
            />
          </mask>
          <g mask='url(#np-c)'>
            <path
              fill='url(#np-d)'
              d='M0 0h1.5c.27 0 .69.13.91.28l10.77 7.17c.45.3.37.55-.18.55H6l7.25 6.34c.41.37.3.66-.26.66H0z'
            />
            <path stroke='url(#np-e)' d='M.5.5v14h12.17l-8-7h7.68L2.14.7A2 2 0 0 0 1.5.5z' />
          </g>
          <mask
            id='np-f'
            width='14'
            height='15'
            x='0'
            y='0'
            maskUnits='userSpaceOnUse'
            style={{ maskType: 'luminance' }}>
            <path
              fill='#fff'
              d='M0 0h1.5c.27 0 .69.13.91.28l10.77 7.17c.45.3.37.55-.18.55H6l7.25 6.34c.41.37.3.66-.26.66H0z'
            />
          </mask>
          <g mask='url(#np-f)'>
            <path
              fill='url(#np-g)'
              fillRule='evenodd'
              d='M5.14 5.85q.43-.12.79-.32a2 2 0 0 1-3.86 0q.36.2.8.32l.38-.35-.64-.57.86.04-.04-.86.57.64.57-.64-.04.86.86-.04-.64.57zM4 12l-.77.85.06-1.14-1.14.06L3 11l-.85-.77 1.14.06-.06-1.14L4 10l.77-.85-.06 1.14 1.14-.06L5 11l.85.77-1.14-.06.06 1.14z'
              clipRule='evenodd'
            />
          </g>
        </g>
      </g>
    </svg>
  )
}
