import type { FlagIcon } from './types'

export const IconFlagCY: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'CY',
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
      data-slot='icon-flag-cy'
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
            id='cy-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='cy-c'
            x1='10.65'
            x2='10.65'
            y1='2.17'
            y2='8.83'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e7832c' />
            <stop offset='1' stopColor='#d7751f' />
          </linearGradient>
          <clipPath id='cy-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='cy-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#cy-clip)'>
        <g clipPath='url(#cy-a)'>
          <path fill='url(#cy-b)' d='M21 0H0v15h21z' />
          <path
            fill='url(#cy-c)'
            fillRule='evenodd'
            d='M15.55 2.23q.39-.18.18.18l-.46.68c-.15.23-.45.53-.68.68l-.68.46a6 6 0 0 0-.76.62l.2-.2c-.2.2-.2.5 0 .7l.3.3c.2.2.2.5 0 .7l-.3.3c-.2.2-.54.25-.8.12l-.1-.04a.5.5 0 0 0-.68.22l-.04.1c-.13.25-.44.52-.7.6l-.56.2A4 4 0 0 1 9.5 8a.9.9 0 0 0-.73.45l-.04.1a.5.5 0 0 1-.67.23l-1.12-.56a4 4 0 0 1-.79-.57l-.3-.3a1.4 1.4 0 0 1-.35-.85c0-.28.23-.5.5-.5h-.5c.28 0 .66-.16.85-.35l.3-.3c.2-.2.58-.35.85-.35.28 0 .57-.2.66-.47l.18-.56a.6.6 0 0 1 .64-.37l1.54.3c.26.06.7.05.96-.02l1.04-.26c.26-.07.67-.22.93-.35l.1-.04.9-.46.1-.04.9-.46z'
            clipRule='evenodd'
          />
          <path fill='#445128' d='M10.5 12.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2' />
          <path
            fill='#445128'
            d='M12.16 11.47a.5.5 0 0 1-.32-.94l.3-.12q.34-.15.66-.37.55-.36.75-.76a.5.5 0 1 1 .9.44q-.35.67-1.1 1.16a6 6 0 0 1-1.2.6m-3-.94a.5.5 0 1 1-.32.94l-.38-.15a6 6 0 0 1-.82-.44q-.73-.48-1.09-1.16a.5.5 0 1 1 .9-.44q.21.41.75.76a5 5 0 0 0 .96.49'
            opacity='.75'
          />
        </g>
      </g>
    </svg>
  )
}
