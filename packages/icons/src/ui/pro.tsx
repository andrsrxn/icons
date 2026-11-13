import type { Icon } from './types'

export const IconPro: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-pro'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M22.4 12c0-3.14 0-4.71-.84-5.8a4 4 0 0 0-.73-.71c-1.08-.84-2.65-.84-5.79-.84H8.96c-3.14 0-4.71 0-5.8.84a4 4 0 0 0-.72.72c-.83 1.08-.83 2.65-.83 5.79s0 4.71.83 5.8a4 4 0 0 0 .73.71c1.08.84 2.65.84 5.79.84h6.08c3.14 0 4.71 0 5.8-.84a4 4 0 0 0 .72-.72c.83-1.08.83-2.65.83-5.79'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M8.96 19.35h6.08c3.14 0 4.71 0 5.8-.84a4 4 0 0 0 .72-.72c.83-1.08.83-2.65.83-5.79v0c0-3.14 0-4.71-.83-5.8a4 4 0 0 0-.73-.71c-1.08-.84-2.65-.84-5.79-.84H8.96c-3.14 0-4.71 0-5.8.84a4 4 0 0 0-.72.72c-.83 1.08-.83 2.65-.83 5.79v0c0 3.14 0 4.71.83 5.8a4 4 0 0 0 .73.71c1.08.84 2.65.84 5.79.84'
        stroke='currentColor'
      />
      <path
        d='M15.66 12c0-1.48.92-2.69 2.06-2.69 1.13 0 2.05 1.2 2.05 2.69 0 1.48-.92 2.69-2.05 2.69-.58 0-1.1-.31-1.47-.81a3 3 0 0 1-.6-1.88'
        stroke='currentColor'
      />
      <path d='m11.47 12.48 1.94 2.2' stroke='currentColor' />
      <path
        d='M10.25 14.69V10.3c0-.47 0-.7.14-.85s.39-.15.86-.15h.94c.8 0 1.45.7 1.45 1.54a1.5 1.5 0 0 1-1.45 1.54h-1.92'
        stroke='currentColor'
      />
      <path
        d='M4.65 14.69V10.3c0-.47 0-.7.14-.85s.39-.15.86-.15h.94c.8 0 1.45.7 1.45 1.54A1.5 1.5 0 0 1 6.6 12.4H4.67'
        stroke='currentColor'
      />
    </svg>
  )
}
