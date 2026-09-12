import type { Icon } from './types'

export const IconAirConditioner: Icon = ({
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
      data-slot='icon-ui-air-conditioner'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M17.95 2.7c1.23 0 1.85 0 2.3.27a2 2 0 0 1 .76.75c.26.46.26 1.07.26 2.3s0 1.85-.26 2.3a2 2 0 0 1-.75.76c-.46.26-1.08.26-2.3.26H6.04c-1.23 0-1.85 0-2.3-.26a2 2 0 0 1-.76-.76c-.26-.45-.26-1.07-.26-2.3s0-1.84.26-2.3a2 2 0 0 1 .75-.75c.46-.26 1.08-.26 2.3-.26z'
        fill='currentColor'
      />
      <path
        d='M17.76 2.7c1.41 0 2.12 0 2.63.35a2 2 0 0 1 .54.54c.34.5.34 1.21.34 2.62s0 2.12-.34 2.63a2 2 0 0 1-.54.54c-.51.34-1.22.34-2.63.34H6.24c-1.41 0-2.12 0-2.63-.34a2 2 0 0 1-.54-.54c-.34-.5-.34-1.21-.34-2.63 0-1.4 0-2.11.34-2.62a2 2 0 0 1 .54-.54c.51-.34 1.22-.34 2.63-.34z'
        stroke='currentColor'
      />
      <path
        d='m16.78 13.1 1.01 1.08.26.3a2 2 0 0 1-.16 2.65l-.3.26q-.24.2-.31.28a2 2 0 0 0-.01 2.81q.07.09.32.28l.87.74'
        stroke='currentColor'
      />
      <path
        d='m11.29 13.1 1.01 1.08c.14.15.21.22.26.3a2 2 0 0 1-.16 2.65l-.3.26-.31.28a2 2 0 0 0-.01 2.81q.08.09.32.28l.87.74'
        stroke='currentColor'
      />
      <path
        d='m5.8 13.1 1.02 1.08.26.3a2 2 0 0 1-.17 2.65q-.07.08-.29.26l-.32.28a2 2 0 0 0 0 2.81q.06.09.31.28l.87.74'
        stroke='currentColor'
      />
    </svg>
  )
}
