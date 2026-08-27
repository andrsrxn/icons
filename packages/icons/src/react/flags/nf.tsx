import type { FlagIcon } from './types'

export const IconFlagNF: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  title,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
  ...props
}) => {
  const isHidden = ariaHidden === true
  const titleText = title ?? 'NF'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='ui-flag-nf'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='nf-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='nf-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#219646' />
          <stop offset='100%' stopColor='#197837' />
        </linearGradient>
        <linearGradient id='nf-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#259d4b' />
          <stop offset='100%' stopColor='#197837' />
        </linearGradient>
        <clipPath id='nf-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#nf-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#nf-a)' d='M0 0h21v15H0z' />
          <path fill='url(#nf-b)' d='M10 0h11v15H10z' />
          <path fill='url(#nf-b)' d='M0 0h7v15H0z' />
          <path fill='url(#nf-a)' d='M6 0h9v15H6z' />
          <path
            fill='url(#nf-c)'
            d='m9.444 4.003.422-1.52A.705.705 0 0 1 10.5 2c.276 0 .562.222.634.484l.422 1.52L11.5 4a.5.5 0 1 0 .305.897l.31 1.116a.5.5 0 0 0-.615.487.5.5 0 0 0 .85.358l.325 1.174a.499.499 0 1 0 .217.779L13.5 11H11v2h-1v-2H7.5l.608-2.19a.5.5 0 1 0 .217-.778l.326-1.174A.498.498 0 0 0 9.5 6.5a.5.5 0 0 0-.615-.487l.31-1.116a.5.5 0 1 0 .248-.893'
          />
        </g>
      </g>
    </svg>
  )
}
