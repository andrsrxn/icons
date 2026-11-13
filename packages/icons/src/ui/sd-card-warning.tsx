import type { Icon } from './types'

export const IconSdCardWarning: Icon = ({
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
      data-slot='icon-ui-sd-card-warning'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M14.19 22.22c2.82 0 4.24 0 5.12-.88s.88-2.3.88-5.12V7.78c0-2.82 0-4.24-.88-5.12s-2.3-.88-5.12-.88h-2.44c-2.83 0-4.24 0-5.12.88s-.88 2.3-.88 5.12v1.23c0 .81 0 1.22-.1 1.61s-.32.74-.74 1.44l-.04.07c-.46.78-.69 1.17-.8 1.6-.1.43-.08.88-.03 1.78l.06 1.02c.14 2.7.2 4.04 1.08 4.86.87.83 2.21.83 4.9.83z'
        fill='currentColor'
      />
      <path
        d='M20.19 11.42V9.78c0-3.77 0-5.65-1.18-6.82-1.17-1.18-3.05-1.18-6.82-1.18h-1.3c-1.04 0-1.56 0-1.99.1a4 4 0 0 0-3.03 3.03c-.1.43-.1.95-.1 2h0v2.37c0 .46 0 .7-.02.92a4 4 0 0 1-.45 1.44c-.11.2-.24.4-.5.77-.27.38-.4.57-.51.77a4 4 0 0 0-.45 1.44c-.03.23-.03.46-.03.92v.28c0 2.24 0 3.35.44 4.2A4 4 0 0 0 6 21.79c.86.44 1.97.44 4.2.44h2.68'
        stroke='currentColor'
      />
      <path d='M16.75 8.2V5.26' stroke='currentColor' />
      <path d='M13.13 8.2V5.26' stroke='currentColor' />
      <path d='M9.52 8.2V5.26' stroke='currentColor' />
      <path d='M17.61 18.64v-4.1' stroke='currentColor' />
      <path
        d='M18.1 22.13a.5.5 0 1 1-.98 0 .5.5 0 0 1 .98 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
