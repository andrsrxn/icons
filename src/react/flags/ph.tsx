import type { FlagIcon } from './types'

export const IconFlagPH: FlagIcon = ({
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
  const titleText = title ?? 'PH'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-icon-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='ph-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='ph-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#dd1c34' />
          <stop offset='100%' stopColor='#cc162c' />
        </linearGradient>
        <linearGradient id='ph-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#0d4bc3' />
          <stop offset='100%' stopColor='#073da6' />
        </linearGradient>
        <linearGradient id='ph-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fdd64d' />
          <stop offset='100%' stopColor='#fcd036' />
        </linearGradient>
        <clipPath id='ph-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#ph-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#ph-a)' d='M0 0h21v15H0z' />
          <path fill='url(#ph-b)' d='M0 7h21v8H0z' />
          <path fill='url(#ph-c)' d='M0 0h21v7H0z' />
          <path fill='url(#ph-a)' d='m0 0 10 7.5L0 15z' />
          <path
            fill='url(#ph-d)'
            d='M3.4 8.495 2.542 9.81l.325-1.535q-.078-.064-.143-.143l-1.535.325L2.505 7.6a1 1 0 0 1 0-.202L1.19 6.543l1.535.325q.064-.078.143-.143L2.543 5.19 3.4 6.505a1 1 0 0 1 .202 0l.856-1.315-.325 1.535q.078.064.143.143l1.535-.325-1.315.856a1 1 0 0 1 0 .202l1.315.856-1.535-.325q-.064.078-.143.143l.325 1.535L3.6 8.495a1 1 0 0 1-.202 0M7.5 8a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-6-5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0 10a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1'
          />
        </g>
      </g>
    </svg>
  )
}
