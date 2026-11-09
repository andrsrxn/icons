import type { Icon } from './types'

export const IconDevicePcShare: Icon = ({
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
      data-slot='icon-ui-device-pc-share'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.74 11c0-2.21 0-3.32.42-4.16a4 4 0 0 1 1.79-1.79c.84-.42 1.95-.42 4.15-.42h6.28c2.2 0 3.31 0 4.16.42a4 4 0 0 1 1.78 1.79c.43.84.43 1.95.43 4.16s0 3.31-.43 4.16a4 4 0 0 1-1.78 1.78c-.85.42-1.95.42-4.16.42H8.1c-2.2 0-3.3 0-4.15-.42a4 4 0 0 1-1.79-1.78c-.42-.85-.42-1.95-.42-4.16'
        fill='currentColor'
      />
      <path
        d='M12.77 4.63H8.1c-2.2 0-3.3 0-4.15.42a4 4 0 0 0-1.79 1.79c-.42.84-.42 1.95-.42 4.16s0 3.31.42 4.16a4 4 0 0 0 1.79 1.78c.84.42 1.95.42 4.15.42h7.7c.88 0 1.32 0 1.68-.07a4 4 0 0 0 3.2-3.19c.07-.36.07-.8.07-1.68'
        stroke='currentColor'
      />
      <path d='M7.2 21.18h8.06' stroke='currentColor' />
      <path d='M11.24 21.18v-3.7' stroke='currentColor' />
      <path
        d='M17.23 2.92h1.07c1.88 0 2.83 0 3.41.58s.59 1.53.59 3.42v1.07'
        stroke='currentColor'
      />
      <path d='m16.13 9.08 5.5-5.49' stroke='currentColor' />
    </svg>
  )
}
