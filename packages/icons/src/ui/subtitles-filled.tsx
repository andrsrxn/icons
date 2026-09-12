import type { Icon } from './types'

export const IconSubtitlesFilled: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-subtitles-filled'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M1.78 10.7c0-2.82 0-4.23.88-5.11s2.3-.88 5.12-.88h8.44c2.83 0 4.24 0 5.12.88s.88 2.29.88 5.12v2.58c0 2.83 0 4.24-.88 5.12s-2.3.88-5.12.88H7.78c-2.83 0-4.24 0-5.12-.88s-.88-2.29-.88-5.12zm18.16 1.42a.83.83 0 0 0-.82-.84H12a.83.83 0 0 0-.82.84c0 .46.37.84.82.84h7.12c.45 0 .82-.38.82-.84m-11.7-.84c.46 0 .83.38.83.84s-.37.84-.82.84H4.88a.83.83 0 0 1-.82-.84c0-.46.37-.84.82-.84zm5.73 4.46a.83.83 0 0 0-.82-.84H4.88a.83.83 0 0 0-.82.84c0 .47.37.84.82.84h8.27c.46 0 .82-.37.82-.84m5.15-.84c.45 0 .82.38.82.84 0 .47-.37.84-.82.84h-2.66a.83.83 0 0 1-.82-.84c0-.46.37-.84.82-.84z'
        fill='currentColor'
      />
      <rect x='1.78' y='4.71' width='20.44' height='14.58' rx='3' stroke='currentColor' />
    </svg>
  )
}
