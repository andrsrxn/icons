import type { Icon } from './types'

export const IconRobot: Icon = ({
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
      data-slot='icon-ui-robot'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M4.68 14.93c0-3.11 0-4.67.82-5.74a4 4 0 0 1 .76-.76c1.07-.82 2.63-.82 5.74-.82s4.67 0 5.74.82a4 4 0 0 1 .76.76c.82 1.07.82 2.63.82 5.74s0 4.67-.82 5.74a4 4 0 0 1-.76.76c-1.07.82-2.63.82-5.74.82s-4.67 0-5.74-.82a4 4 0 0 1-.76-.76c-.82-1.07-.82-2.63-.82-5.74'
        fill='currentColor'
      />
      <path
        d='M15.16 17.34a4.4 4.4 0 0 1-3.16 1.1c-1.4 0-2.44-.49-3.17-1.1'
        stroke='currentColor'
      />
      <path d='M9.59 11.85v1.68' stroke='currentColor' />
      <path d='M14.64 11.85v1.68' stroke='currentColor' />
      <path d='M1.86 12.23v5.4' stroke='currentColor' />
      <path d='M22.14 12.23v5.4' stroke='currentColor' />
      <path d='M12 5.44V7.6' stroke='currentColor' />
      <path
        d='M12 22.25c3.11 0 4.67 0 5.74-.82a4 4 0 0 0 .76-.76c.82-1.07.82-2.63.82-5.74v0c0-3.11 0-4.67-.82-5.74a4 4 0 0 0-.76-.76c-1.07-.82-2.63-.82-5.74-.82v0c-3.11 0-4.67 0-5.74.82a4 4 0 0 0-.76.76c-.82 1.07-.82 2.63-.82 5.74v0c0 3.11 0 4.67.82 5.74a4 4 0 0 0 .76.76c1.07.82 2.63.82 5.74.82'
        stroke='currentColor'
      />
      <path d='M10.27 3.48a1.73 1.73 0 1 1 3.46 0 1.73 1.73 0 0 1-3.46 0' stroke='currentColor' />
      <path
        opacity='.2'
        d='M10.23 3.7a1.73 1.73 0 1 0 3.47 0 1.73 1.73 0 0 0-3.47 0'
        fill='currentColor'
      />
    </svg>
  )
}
