import type { Icon } from './types'

export const IconClosedCaptioningFilled: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-closed-captioning-filled'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M21.3 11.65c0-2.83 0-4.24-.87-5.12-.88-.88-2.3-.88-5.13-.88H8.7c-2.83 0-4.25 0-5.13.88s-.87 2.3-.87 5.12v.7c0 2.83 0 4.24.87 5.12.88.88 2.3.88 5.13.88h6.6c2.83 0 4.25 0 5.13-.88s.87-2.3.87-5.12zm-3.26-2.99a3.76 3.76 0 0 0-5.49 3.36 3.77 3.77 0 0 0 5.49 3.36.75.75 0 1 0-.68-1.33q-.47.23-1.04.24a2.27 2.27 0 1 1 1.04-4.3.75.75 0 0 0 .68-1.33m-8.71-.41q.93.01 1.7.41a.75.75 0 1 1-.67 1.34q-.47-.25-1.03-.25a2.27 2.27 0 1 0 1.03 4.3.75.75 0 0 1 .68 1.33 3.76 3.76 0 0 1-5.49-3.36 3.77 3.77 0 0 1 3.78-3.77'
        fill='currentColor'
      />
      <rect
        x='2.7'
        y='5.65'
        width='18.61'
        height='12.69'
        rx='3'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
