import type { Icon } from './types'

export const IconDevicePcCloud: Icon = ({
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
      data-slot='icon-ui-device-pc-cloud'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M22.26 9.94c0-3.18 0-4.77-.95-5.78l-.14-.14c-1.02-.95-2.6-.95-5.78-.95H8.6c-3.18 0-4.76 0-5.78.95l-.14.14c-.95 1.01-.95 2.6-.95 5.78s0 4.77.95 5.78l.14.14c1.02.96 2.6.96 5.78.96h6.78c3.18 0 4.76 0 5.78-.96l.14-.14c.95-1.01.95-2.6.95-5.78m-8.1-2.3a2.3 2.3 0 0 0-1.72-1.3l-.38-.06c-.85-.13-1.72.1-2.39.64l-1.13.92-.54.38-.1.05-.6.32a2.9 2.9 0 0 0-1.54 2.58v.1a2.74 2.74 0 0 0 2.74 2.75h6.44c.94 0 1.83-.45 2.38-1.22l.27-.37a2.2 2.2 0 0 0-1.6-3.49 2.2 2.2 0 0 1-1.8-1.25z'
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
      <path
        d='M8.14 13.83c-.7 0-1.39-.32-1.86-.83a2.8 2.8 0 0 1-.74-1.92 2.7 2.7 0 0 1 2.6-2.75c.85 0 1.6.43 2.08 1.1'
        stroke='currentColor'
      />
      <path d='M16 13.83H8.04' stroke='currentColor' />
      <path d='M8.45 8.33a3.14 3.14 0 0 1 5.76-.73c.51.9.5 1.8.38 2.4' stroke='currentColor' />
      <path
        d='M14.67 8.87a2.2 2.2 0 0 1 2.09.07c1.26.72 1.7 2.34.96 3.6-.43.75-1.02 1.2-1.62 1.28'
        stroke='currentColor'
      />
    </svg>
  )
}
