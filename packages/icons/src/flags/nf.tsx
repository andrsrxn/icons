import type { FlagIcon } from './types'

export const IconFlagNF: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'NF',
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
      data-slot='icon-flag-nf'
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
            id='nf-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='nf-c'
            x1='15.5'
            x2='15.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#219646' />
            <stop offset='1' stopColor='#197837' />
          </linearGradient>
          <linearGradient id='nf-d' x1='3.5' x2='3.5' y1='0' y2='15' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#219646' />
            <stop offset='1' stopColor='#197837' />
          </linearGradient>
          <linearGradient
            id='nf-e'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='nf-f'
            x1='10.5'
            x2='10.5'
            y1='2'
            y2='13'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#259d4b' />
            <stop offset='1' stopColor='#197837' />
          </linearGradient>
          <clipPath id='nf-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='nf-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#nf-clip)'>
        <g clipPath='url(#nf-a)'>
          <path fill='url(#nf-b)' d='M21 0H0v15h21z' />
          <path fill='url(#nf-c)' d='M21 0H10v15h11z' />
          <path fill='url(#nf-d)' d='M7 0H0v15h7z' />
          <path fill='url(#nf-e)' d='M15 0H6v15h9z' />
          <path
            fill='url(#nf-f)'
            fillRule='evenodd'
            d='m9.44 4 .43-1.52A.7.7 0 0 1 10.5 2a.7.7 0 0 1 .63.48L11.56 4h-.06a.5.5 0 1 0 .3.9l.31 1.1a.5.5 0 0 0-.61.49.5.5 0 0 0 .85.36l.33 1.17a.5.5 0 1 0 .21.78l.61 2.2H11v2h-1v-2H7.5l.6-2.19a.5.5 0 1 0 .22-.78l.33-1.17a.5.5 0 0 0 .85-.36.5.5 0 0 0-.61-.49l.3-1.11q.14.1.31.1a.5.5 0 1 0-.06-1'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
