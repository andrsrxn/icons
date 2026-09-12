import type { Icon } from './types'

export const IconAxe: Icon = ({
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
      data-slot='icon-ui-axe'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m9.1 9.56 3.4 2.47-6.61 9.06c-.56.77-.84 1.15-1.25 1.21-.4.07-.79-.21-1.55-.77l-.16-.11c-.76-.56-1.14-.84-1.2-1.25-.07-.4.21-.79.77-1.55z'
        fill='currentColor'
      />
      <path
        d='m9.1 9.56-6.6 9.06c-.56.76-.84 1.14-.77 1.55s.44.7 1.2 1.25l.18.12c.76.56 1.14.83 1.55.77.4-.06.68-.44 1.24-1.2l6.6-9.07'
        stroke='currentColor'
      />
      <path
        d='m16.33 5.76-3.57-2.6C11.62 2.33 11.05 1.9 10.43 2c-.61.1-1.03.67-1.86 1.82l-.46.62C7.28 5.6 6.86 6.16 6.96 6.77s.66 1.03 1.8 1.87l3.57 2.6c.5.36.75.54.9.8.16.25.2.55.3 1.16l.2 1.28c.13.8.2 1.2.5 1.45.32.25.7.2 1.46.13 1.8-.2 4.58-.75 5.83-2.35 1.29-1.66 1.04-4.47.7-6.26-.14-.75-.21-1.12-.54-1.35-.33-.24-.74-.17-1.56-.05l-1.56.25c-.6.1-.9.14-1.2.07s-.54-.25-1.03-.61'
        stroke='currentColor'
      />
    </svg>
  )
}
