import type { FlagIcon } from './types'

export const IconFlagRS: FlagIcon = ({
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
  const titleText = title ?? 'RS'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='ui-flag-rs'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='rs-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='rs-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#17508f' />
          <stop offset='100%' stopColor='#114175' />
        </linearGradient>
        <linearGradient id='rs-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e1444d' />
          <stop offset='100%' stopColor='#c53840' />
        </linearGradient>
        <path
          id='rs-d'
          d='M.5 2.5C.5 1.826.874.485.874.485A.67.67 0 0 1 1.495 0h2.01c.273 0 .552.214.621.481 0 0 .374 1.33.374 2.019 0 .645-.376 2.02-.376 2.02-.069.265-.269.654-.457.852 0 0-.417.628-1.167.628s-1.167-.628-1.167-.628a2.4 2.4 0 0 1-.46-.86S.5 3.162.5 2.5'
        />
        <clipPath id='rs-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#rs-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#rs-a)' d='M0 0h21v15H0z' />
          <path fill='url(#rs-b)' d='M0 5h21v5H0z' />
          <path fill='url(#rs-c)' d='M0 0h21v5H0z' />
          <path fill='url(#rs-a)' d='M0 10h21v5H0z' />
          <g transform='translate(4 5)'>
            <mask id='rs-e' fill='#fff'>
              <use xlinkHref='#rs-d' />
            </mask>
            <use xlinkHref='#rs-d' fill='url(#rs-a)' />
            <path
              fill='#c43840'
              fillRule='nonzero'
              d='M4.422-.203-.203 5.578l.781.625L5.203.422z'
              mask='url(#rs-e)'
            />
            <path
              fill='#c43840'
              fillRule='nonzero'
              d='m-.203.422 4.625 5.78.78-.624L.579-.202z'
              mask='url(#rs-e)'
            />
          </g>
          <ellipse cx='6.5' cy='7.5' fill='#fff' rx='1' ry='1.5' />
          <path
            fill='#d1a43a'
            d='m5 4-.5-1 1 .5 1-.5 1 .5 1-.5L8 4v.5c0 .276-.216.5-.495.5h-2.01A.503.503 0 0 1 5 4.5z'
          />
        </g>
      </g>
    </svg>
  )
}
