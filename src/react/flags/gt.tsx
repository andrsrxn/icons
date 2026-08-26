import type { FlagIcon } from './types'

export const IconFlagGT: FlagIcon = ({
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
  const titleText = title ?? 'GT'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='ui-flag-gt'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='gt-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='gt-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#63aee3' />
          <stop offset='100%' stopColor='#4998d0' />
        </linearGradient>
        <clipPath id='gt-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#gt-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#gt-a)' d='M0 0h21v15H0z' />
          <path fill='url(#gt-b)' d='M10 0h11v15H10z' />
          <path fill='url(#gt-b)' d='M0 0h7v15H0z' />
          <path fill='url(#gt-a)' d='M7 0h7v15H7z' />
          <path
            fill='#628a40'
            fillRule='nonzero'
            d='M8 7c0 .901.482 1.72 1.247 2.164a.5.5 0 0 0 .502-.865A1.5 1.5 0 0 1 9 7a.5.5 0 0 0-1 0m3.846 2.107A2.5 2.5 0 0 0 13 7a.5.5 0 1 0-1 0c0 .518-.264.99-.693 1.265a.5.5 0 1 0 .539.842'
          />
          <circle cx='10.5' cy='7' r='1' fill='#dcc26d' />
        </g>
      </g>
    </svg>
  )
}
