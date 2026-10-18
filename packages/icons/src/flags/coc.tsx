import type { FlagIcon } from './types'

export const IconFlagCOC: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'COC',
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
      data-slot='icon-flag-coc'
      role={isHidden || !isLabelled ? undefined : 'img'}
      aria-hidden={isHidden || !isLabelled ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      focusable={isHidden || !isLabelled ? false : undefined}
      preserveAspectRatio={cover ? 'xMidYMid slice' : preserveAspectRatio}
      className={`icon-flag ${className ?? ''}`.trim()}
      {...props}>
      <defs>
        <defs>
          <clipPath id='coc-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='coc-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#coc-clip)'>
        <g clipPath='url(#coc-a)'>
          <mask
            id='coc-b'
            width='21'
            height='15'
            x='0'
            y='0'
            maskUnits='userSpaceOnUse'
            style={{ maskType: 'luminance' }}>
            <path fill='#fff' d='M21 0H0v15h21z' />
          </mask>
          <g mask='url(#coc-b)'>
            <path fill='#19bfbf' d='M21 0H0v15h21z' />
            <path
              fill='#fff'
              fillRule='evenodd'
              d='M10.56 2.56q-.07 0-.15.05L8.52 4.03l-.09.04-1.92.49-.05.01-1.9.96a.3.3 0 0 0-.12.1l-.9 1.8a.3.3 0 0 0 .02.25L4.44 9q.04.06.04.14v1.32q0 .1.07.18l.8.8a.25.25 0 0 0 .3.04l2.78-1.4.11-.02h1.85q.1 0 .16.06l2.86 2.38q.07.06.16.06h1.78a.3.3 0 0 0 .2-.1l1.89-2.83.04-.14V7.64q0-.08-.04-.14l-1.96-2.94-1.43-2.38a.3.3 0 0 0-.21-.12h-.31a.22.22 0 0 0-.16.39.2.2 0 0 1 .04.26l-.36.71a.3.3 0 0 1-.22.14h-1.2a.3.3 0 0 1-.22-.14l-.36-.72a.3.3 0 0 0-.22-.14zm4.42 10.5h-1l.32.33c.1.1.26.1.36 0z'
              clipRule='evenodd'
            />
          </g>
        </g>
      </g>
    </svg>
  )
}
