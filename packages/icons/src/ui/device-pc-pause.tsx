import type { Icon } from './types'

export const IconDevicePcPause: Icon = ({
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
      data-slot='icon-ui-device-pc-pause'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M22.26 9.94c0-3.18 0-4.77-.95-5.78l-.14-.14c-1.02-.95-2.6-.95-5.78-.95H8.6c-3.18 0-4.76 0-5.78.95l-.14.14c-.95 1.01-.95 2.6-.95 5.78s0 4.77.95 5.78l.14.14c1.02.96 2.6.96 5.78.96h6.78c3.18 0 4.76 0 5.78-.96l.14-.14c.95-1.01.95-2.6.95-5.78'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M8.61 16.82h6.78c3.18 0 4.76 0 5.78-.96l.14-.14c.95-1.01.95-2.6.95-5.78v0c0-3.18 0-4.77-.95-5.78l-.14-.14c-1.02-.95-2.6-.95-5.78-.95H8.6c-3.18 0-4.76 0-5.78.95l-.14.14c-.95 1.01-.95 2.6-.95 5.78v0c0 3.18 0 4.77.95 5.78l.14.14c1.02.96 2.6.96 5.78.96'
        stroke='currentColor'
      />
      <path d='M7.64 20.93h8.7' stroke='currentColor' />
      <path d='M12 20.93v-3.99' stroke='currentColor' />
      <path d='M9.69 7v5.88' stroke='currentColor' />
      <path d='M14.31 7v5.88' stroke='currentColor' />
    </svg>
  )
}
