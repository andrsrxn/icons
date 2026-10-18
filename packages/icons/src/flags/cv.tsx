import type { FlagIcon } from './types'

export const IconFlagCV: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'CV',
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
      data-slot='icon-flag-cv'
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
            id='cv-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='cv-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='8'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#0c49ae' />
            <stop offset='1' stopColor='#063b91' />
          </linearGradient>
          <linearGradient
            id='cv-d'
            x1='10.5'
            x2='10.5'
            y1='11'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#0c49ae' />
            <stop offset='1' stopColor='#063b91' />
          </linearGradient>
          <linearGradient
            id='cv-e'
            x1='10.5'
            x2='10.5'
            y1='8'
            y2='11'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='cv-f'
            x1='10.5'
            x2='10.5'
            y1='9'
            y2='10'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#cd232e' />
            <stop offset='1' stopColor='#cd232e' />
          </linearGradient>
          <clipPath id='cv-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='cv-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#cv-clip)'>
        <g clipPath='url(#cv-a)'>
          <path fill='url(#cv-b)' d='M21 0H0v15h21z' />
          <path fill='url(#cv-c)' d='M21 0H0v8h21z' />
          <path fill='url(#cv-d)' d='M21 11H0v4h21z' />
          <path fill='url(#cv-e)' d='M21 8H0v3h21z' />
          <path fill='url(#cv-f)' d='M21 9H0v1h21z' />
          <path
            fill='#f7d035'
            d='M8 13a.5.5 0 0 1 0-1q.42 0 .82-.14a.5.5 0 0 1 .33.95Q8.6 13 8 13m2.65-1.21q.39-.46.6-1a.5.5 0 1 0-.92-.37q-.15.4-.44.71a.5.5 0 1 0 .76.65m.82-2.76q-.08-.6-.35-1.12a.5.5 0 0 0-.9.46q.2.37.26.79a.5.5 0 1 0 .99-.13m-1.61-2.5q-.5-.31-1.08-.44a.5.5 0 0 0-.22.97q.4.1.77.32a.5.5 0 1 0 .53-.85m-2.8-.4q-.58.15-1.06.5a.5.5 0 1 0 .57.82q.35-.24.76-.36a.5.5 0 0 0-.27-.96M4.85 7.97q-.26.53-.33 1.12a.5.5 0 1 0 1 .12q.04-.42.23-.8a.5.5 0 0 0-.9-.44m-.06 2.93q.24.54.64.97a.5.5 0 1 0 .73-.67 3 3 0 0 1-.45-.7.5.5 0 0 0-.92.4m2.15 1.94a.5.5 0 0 1 .3-.96q.35.12.71.12a.5.5 0 0 1-.01 1 4 4 0 0 1-1-.16'
          />
        </g>
      </g>
    </svg>
  )
}
