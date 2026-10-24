import type { FlagIcon } from './types'

export const IconFlagHT: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'HT',
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
      data-slot='icon-flag-ht'
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
            id='ht-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='ht-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='7'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#112ebc' />
            <stop offset='1' stopColor='#0620a0' />
          </linearGradient>
          <linearGradient
            id='ht-d'
            x1='10.5'
            x2='10.5'
            y1='7'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e3264a' />
            <stop offset='1' stopColor='#d20f34' />
          </linearGradient>
          <linearGradient
            id='ht-e'
            x1='10.5'
            x2='10.5'
            y1='5'
            y2='11'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <clipPath id='ht-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='ht-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#ht-clip)'>
        <g clipPath='url(#ht-a)'>
          <path fill='url(#ht-b)' d='M21 0H0v15h21z' />
          <path fill='url(#ht-c)' d='M21 0H0v7h21z' />
          <path fill='url(#ht-d)' d='M21 7H0v8h21z' />
          <path
            fill='url(#ht-e)'
            d='M13.5 5h-6a.5.5 0 0 0-.5.5v5c0 .28.22.5.5.5h6a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5'
          />
          <mask id='ht-f' width='7' height='6' x='7' y='5' maskUnits='userSpaceOnUse'>
            <path
              fill='#fff'
              d='M13.5 5h-6a.5.5 0 0 0-.5.5v5c0 .28.22.5.5.5h6a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5'
            />
          </mask>
          <g mask='url(#ht-f)'>
            <path fill='#aabcae' d='m7 10 1.1-.55A5 5 0 0 1 10 9h1c.55 0 1.4.2 1.9.45L14 10v1H7z' />
            <path
              stroke='#366c14'
              strokeWidth='.5'
              d='M7.25 10.15v.6h6.5v-.6l-.97-.48A5 5 0 0 0 11 9.25h-1c-.52 0-1.32.2-1.78.42z'
            />
          </g>
          <mask id='ht-g' width='7' height='6' x='7' y='5' maskUnits='userSpaceOnUse'>
            <path
              fill='#fff'
              d='M13.5 5h-6a.5.5 0 0 0-.5.5v5c0 .28.22.5.5.5h6a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5'
            />
          </mask>
          <g mask='url(#ht-g)'>
            <path fill='#d4b872' d='M10.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3' />
          </g>
          <mask id='ht-h' width='7' height='6' x='7' y='5' maskUnits='userSpaceOnUse'>
            <path
              fill='#fff'
              d='M13.5 5h-6a.5.5 0 0 0-.5.5v5c0 .28.22.5.5.5h6a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5'
            />
          </mask>
          <g mask='url(#ht-h)'>
            <path
              fill='#c28321'
              d='M8 8c0-.27.18-.36.4-.19l1.7 1.38a.7.7 0 0 0 .8 0l1.7-1.38c.23-.17.4-.08.4.2v1.48a.5.5 0 0 1-.5.51h-4a.5.5 0 0 1-.5-.5z'
            />
            <path
              stroke='#0d3488'
              strokeWidth='.5'
              d='M8.25 8.02v1.47c0 .14.11.26.25.26h4q.23-.02.25-.26V8.02l-1.7 1.36a.9.9 0 0 1-1.1 0z'
            />
          </g>
          <mask id='ht-i' width='7' height='6' x='7' y='5' maskUnits='userSpaceOnUse'>
            <path
              fill='#fff'
              d='M13.5 5h-6a.5.5 0 0 0-.5.5v5c0 .28.22.5.5.5h6a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5'
            />
          </mask>
          <g mask='url(#ht-i)'>
            <path
              fill='#216c30'
              fillRule='evenodd'
              d='M9.17 6.17q-.14-.16.09-.17h2.48q.23.02.09.17l-1.16 1.16c-.1.1-.25.09-.34 0z'
              clipRule='evenodd'
            />
          </g>
        </g>
      </g>
    </svg>
  )
}
