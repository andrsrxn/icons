import type { Icon } from './types'

export const IconCardholder: Icon = ({
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
      data-slot='icon-ui-cardholder'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M15.58 2.42c2.83 0 4.25 0 5.12.88.88.87.88 2.29.88 5.12v7.16c0 2.83 0 4.25-.88 5.12-.87.88-2.29.88-5.12.88H8.42c-2.83 0-4.25 0-5.12-.88-.88-.87-.88-2.29-.88-5.12V8.42c0-2.83 0-4.25.88-5.12.87-.88 2.29-.88 5.12-.88zm.96 10.11V9.85a3 3 0 0 0-.76-1.9l-.15-.15-.15-.16a3 3 0 0 0-1.99-.85h-3.02a3 3 0 0 0-2 .86l-.15.15-.13.15a3 3 0 0 0-.76 1.9v2.69z'
        fill='currentColor'
      />
      <rect
        width='19.17'
        height='19.17'
        rx='3'
        transform='scale(1 -1)rotate(90 21.58 0)'
        stroke='currentColor'
      />
      <path
        d='M16.49 12.58v-1.33c0-1.39 0-2.08-.23-2.63a3 3 0 0 0-1.63-1.64c-.55-.22-1.24-.22-2.63-.22s-2.08 0-2.63.22a3 3 0 0 0-1.63 1.64c-.23.55-.23 1.24-.23 2.63v1.33'
        stroke='currentColor'
      />
      <path d='M18.34 12.58H5.66' stroke='currentColor' />
      <path d='M16.71 16.41H7.29' stroke='currentColor' />
    </svg>
  )
}
