import type { FlagIcon } from './types'

export const IconFlagAG: FlagIcon = ({
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
  const titleText = title ?? 'AG'

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
        <linearGradient id='ag-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='ag-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e2243b' />
          <stop offset='100%' stopColor='#cc162c' />
        </linearGradient>
        <linearGradient id='ag-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#262626' />
          <stop offset='100%' stopColor='#0d0d0d' />
        </linearGradient>
        <linearGradient id='ag-e' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ffcf3c' />
          <stop offset='100%' stopColor='#fecb2f' />
        </linearGradient>
        <linearGradient id='ag-g' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#1984d8' />
          <stop offset='100%' stopColor='#1175c4' />
        </linearGradient>
        <path id='ag-c' d='M0 0h21L10.5 15z' />
        <clipPath id='ag-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#ag-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#ag-a)' d='M0 0h21v15H0z' />
          <path
            d='M8.5 7a2 2 0 0 0 .998 1.731m2.078-.045c.556-.355.924-.978.924-1.686'
            opacity='.75'
          />
          <ellipse cx='10.5' cy='6.5' fill='#fff' fillOpacity='.5' rx='1' ry='1.5' />
          <path fill='url(#ag-b)' d='M0 0h21v15H0z' />
          <mask id='ag-f' fill='#fff'>
            <use xlinkHref='#ag-c' />
          </mask>
          <use xlinkHref='#ag-c' fill='url(#ag-d)' />
          <path
            fill='url(#ag-e)'
            d='m10.5 8.25-1.722 1.907.131-2.566-2.566.131L8.25 6 6 4l2.909.5-.409-3 2 2.5 2-2.5-.409 3L15 4l-2.25 2 1.907 1.722-2.566-.131.131 2.566z'
            mask='url(#ag-f)'
          />
          <path fill='url(#ag-g)' d='M0 6h21v4H0z' mask='url(#ag-f)' />
          <path fill='url(#ag-a)' d='M0 10h21v5H0z' mask='url(#ag-f)' />
        </g>
      </g>
    </svg>
  )
}
