import type { FlagIcon } from './types'

export const IconFlagRS: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'RS',
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
      data-slot='icon-flag-rs'
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
            id='rs-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='rs-c'
            x1='10.5'
            x2='10.5'
            y1='5'
            y2='10'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#17508f' />
            <stop offset='1' stopColor='#114175' />
          </linearGradient>
          <linearGradient
            id='rs-d'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e1444d' />
            <stop offset='1' stopColor='#c53840' />
          </linearGradient>
          <linearGradient
            id='rs-e'
            x1='10.5'
            x2='10.5'
            y1='10'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient id='rs-f' x1='6.5' x2='6.5' y1='5' y2='11' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <clipPath id='rs-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='rs-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#rs-clip)'>
        <g clipPath='url(#rs-a)'>
          <path fill='url(#rs-b)' d='M21 0H0v15h21z' />
          <path fill='url(#rs-c)' d='M21 5H0v5h21z' />
          <path fill='url(#rs-d)' d='M21 0H0v5h21z' />
          <path fill='url(#rs-e)' d='M21 10H0v5h21z' />
          <path
            fill='url(#rs-f)'
            d='M4.5 7.5c0-.67.37-2.02.37-2.02A.7.7 0 0 1 5.5 5h2c.28 0 .56.21.63.48 0 0 .37 1.33.37 2.02 0 .64-.38 2.02-.38 2.02a2 2 0 0 1-.45.85S7.25 11 6.5 11s-1.17-.63-1.17-.63c-.18-.2-.39-.59-.46-.86 0 0-.37-1.35-.37-2.01'
          />
          <mask
            id='rs-g'
            width='5'
            height='6'
            x='4'
            y='5'
            maskUnits='userSpaceOnUse'
            style={{ maskType: 'luminance' }}>
            <path
              fill='#fff'
              d='M4.5 7.5c0-.67.37-2.02.37-2.02A.7.7 0 0 1 5.5 5h2c.28 0 .56.21.63.48 0 0 .37 1.33.37 2.02 0 .64-.38 2.02-.38 2.02a2 2 0 0 1-.45.85S7.25 11 6.5 11s-1.17-.63-1.17-.63c-.18-.2-.39-.59-.46-.86 0 0-.37-1.35-.37-2.01'
            />
          </mask>
          <g mask='url(#rs-g)'>
            <path fill='#c43840' d='M8.42 4.8 3.8 10.58l.78.62L9.2 5.42z' />
          </g>
          <mask
            id='rs-h'
            width='5'
            height='6'
            x='4'
            y='5'
            maskUnits='userSpaceOnUse'
            style={{ maskType: 'luminance' }}>
            <path
              fill='#fff'
              d='M4.5 7.5c0-.67.37-2.02.37-2.02A.7.7 0 0 1 5.5 5h2c.28 0 .56.21.63.48 0 0 .37 1.33.37 2.02 0 .64-.38 2.02-.38 2.02a2 2 0 0 1-.45.85S7.25 11 6.5 11s-1.17-.63-1.17-.63c-.18-.2-.39-.59-.46-.86 0 0-.37-1.35-.37-2.01'
            />
          </mask>
          <g mask='url(#rs-h)'>
            <path fill='#c43840' d='m3.8 5.42 4.62 5.78.78-.62L4.58 4.8z' />
          </g>
          <path fill='#fff' d='M6.5 9c.55 0 1-.67 1-1.5S7.05 6 6.5 6s-1 .67-1 1.5.45 1.5 1 1.5' />
          <path
            fill='#d1a43a'
            fillRule='evenodd'
            d='m5 4-.5-1 1 .5 1-.5 1 .5 1-.5L8 4v.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
