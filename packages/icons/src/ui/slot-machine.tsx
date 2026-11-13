import type { Icon } from './types'

export const IconSlotMachine: Icon = ({
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
      data-slot='icon-ui-slot-machine'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M10.81 19.63c3.42 0 5.13 0 6.26-.97a4 4 0 0 0 .4-.4c.98-1.14.98-2.84.98-6.26s0-5.12-.98-6.25a4 4 0 0 0-.4-.4c-1.13-.98-2.84-.98-6.26-.98H9.32c-3.41 0-5.12 0-6.25.97a4 4 0 0 0-.4.4c-.98 1.14-.98 2.84-.98 6.26s0 5.12.97 6.25a4 4 0 0 0 .41.4c1.13.98 2.84.98 6.25.98z'
        fill='currentColor'
      />
      <path
        d='M1.69 12c0-3.42 0-5.12.97-6.25a4 4 0 0 1 .41-.4c1.13-.98 2.84-.98 6.25-.98h1.5c3.41 0 5.12 0 6.25.97a4 4 0 0 1 .4.4c.98 1.14.98 2.84.98 6.26v0c0 3.42 0 5.12-.98 6.25a4 4 0 0 1-.4.4c-1.13.98-2.84.98-6.26.98H9.32c-3.41 0-5.12 0-6.25-.97a4 4 0 0 1-.4-.4c-.98-1.14-.98-2.84-.98-6.26'
        stroke='currentColor'
      />
      <path
        d='M21.74 7.84v3.33c0 1.2 0 1.81-.25 2.26a2 2 0 0 1-.78.78c-.45.25-1.06.25-2.26.25'
        stroke='currentColor'
      />
      <path
        d='M4.34 9.54h1.2c.64 0 .96 0 1.11.2.15.22.04.52-.17 1.13h0l-1.27 3.6'
        stroke='currentColor'
      />
      <path
        d='M8.77 9.54h1.19c.64 0 .96 0 1.11.2.15.22.05.52-.17 1.13h0l-1.27 3.6'
        stroke='currentColor'
      />
      <path
        d='M13.19 9.54h1.2c.63 0 .96 0 1.1.2.15.22.05.52-.17 1.13h0l-1.26 3.6'
        stroke='currentColor'
      />
      <path
        d='M22.5 7.4a.75.75 0 1 1-1.51 0 .75.75 0 0 1 1.5 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
