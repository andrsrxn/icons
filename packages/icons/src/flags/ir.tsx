import type { FlagIcon } from './types'

export const IconFlagIR: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'IR',
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
      data-slot='icon-flag-ir'
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
            id='ir-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='ir-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#38bb56' />
            <stop offset='1' stopColor='#2b9f45' />
          </linearGradient>
          <linearGradient
            id='ir-d'
            x1='10.5'
            x2='10.5'
            y1='10'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#de1b27' />
            <stop offset='1' stopColor='#d80915' />
          </linearGradient>
          <linearGradient
            id='ir-e'
            x1='10.5'
            x2='10.5'
            y1='5'
            y2='10'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <clipPath id='ir-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='ir-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#ir-clip)'>
        <g clipPath='url(#ir-a)'>
          <path fill='url(#ir-b)' d='M21 0H0v15h21z' />
          <path fill='url(#ir-c)' d='M21 0H0v5h21z' />
          <path fill='url(#ir-d)' d='M21 10H0v5h21z' />
          <path fill='url(#ir-e)' d='M21 5H0v5h21z' />
          <path
            fill='#fff'
            fillOpacity='.5'
            fillRule='evenodd'
            d='M1 4.25c0-.14.1-.25.25-.25h.5c.14 0 .25.1.25.25v.5c0 .14-.1.25-.25.25h-.5A.25.25 0 0 1 1 4.75zm2 0c0-.14.1-.25.25-.25h.5c.14 0 .25.1.25.25v.5c0 .14-.1.25-.25.25h-.5A.25.25 0 0 1 3 4.75zm2 0c0-.14.1-.25.25-.25h.5c.14 0 .25.1.25.25v.5c0 .14-.1.25-.25.25h-.5A.25.25 0 0 1 5 4.75zm2 0c0-.14.1-.25.25-.25h.5c.14 0 .25.1.25.25v.5c0 .14-.1.25-.25.25h-.5A.25.25 0 0 1 7 4.75zm2 0c0-.14.1-.25.25-.25h.5q.23.01.25.25v.5c0 .14-.1.25-.25.25h-.5A.25.25 0 0 1 9 4.75zm2 0c0-.14.1-.25.25-.25h.5q.23.01.25.25v.5c0 .14-.1.25-.25.25h-.5a.25.25 0 0 1-.25-.25zm2 0c0-.14.1-.25.25-.25h.5q.23.01.25.25v.5c0 .14-.1.25-.25.25h-.5a.25.25 0 0 1-.25-.25zm2 0c0-.14.1-.25.25-.25h.5q.23.01.25.25v.5c0 .14-.1.25-.25.25h-.5a.25.25 0 0 1-.25-.25zm2 0c0-.14.1-.25.25-.25h.5q.23.01.25.25v.5c0 .14-.1.25-.25.25h-.5a.25.25 0 0 1-.25-.25zm2 0c0-.14.1-.25.25-.25h.5q.23.01.25.25v.5c0 .14-.1.25-.25.25h-.5a.25.25 0 0 1-.25-.25zm-18 6q.01-.23.25-.25h.5c.14 0 .25.1.25.25v.5q-.01.23-.25.25h-.5a.25.25 0 0 1-.25-.25zm2 0q.01-.23.25-.25h.5c.14 0 .25.1.25.25v.5q-.01.23-.25.25h-.5a.25.25 0 0 1-.25-.25zm2 0q.01-.23.25-.25h.5c.14 0 .25.1.25.25v.5q-.01.23-.25.25h-.5a.25.25 0 0 1-.25-.25zm2 0q.01-.23.25-.25h.5c.14 0 .25.1.25.25v.5q-.01.23-.25.25h-.5a.25.25 0 0 1-.25-.25zm2 0q.01-.23.25-.25h.5q.23.01.25.25v.5q-.01.23-.25.25h-.5a.25.25 0 0 1-.25-.25zm2 0q.01-.23.25-.25h.5q.23.01.25.25v.5q-.01.23-.25.25h-.5a.25.25 0 0 1-.25-.25zm2 0q.01-.23.25-.25h.5q.23.01.25.25v.5q-.01.23-.25.25h-.5a.25.25 0 0 1-.25-.25zm2 0q.01-.23.25-.25h.5q.23.01.25.25v.5q-.01.23-.25.25h-.5a.25.25 0 0 1-.25-.25zm2 0q.01-.23.25-.25h.5q.23.01.25.25v.5q-.01.23-.25.25h-.5a.25.25 0 0 1-.25-.25zm2 0q.01-.23.25-.25h.5q.23.01.25.25v.5q-.01.23-.25.25h-.5a.25.25 0 0 1-.25-.25z'
            clipRule='evenodd'
          />
          <path
            stroke='#d80915'
            strokeWidth='.5'
            d='M9.6 6.64q-.35.36-.35.86a1.25 1.25 0 1 0 2.17-.84z'
          />
          <path fill='#d80915' d='M11 7.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0z' />
        </g>
      </g>
    </svg>
  )
}
