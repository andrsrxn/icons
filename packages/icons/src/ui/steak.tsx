import type { Icon } from './types'

export const IconSteak: Icon = ({
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
      data-slot='icon-ui-steak'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M21.72 16.28c-.07.25-.1.38-.16.48a1 1 0 0 1-.3.33c-.1.07-.23.12-.48.2l-2.8 1.04c-.25.1-.38.15-.52.16s-.28-.02-.55-.07l-5.34-1.05c-.2-.04-.3-.06-.41-.06s-.2.03-.4.07l-3.56.78c-.27.06-.4.1-.53.08a2 2 0 0 1-.52-.13l-3.02-.97a2 2 0 0 1-.67-.27 1 1 0 0 1-.28-.35c-.08-.16-.1-.34-.15-.7-.1-.88-.16-1.32 0-1.6a1 1 0 0 1 .63-.5c.31-.07.72.09 1.54.41l.76.3c.26.1.39.15.52.17.14.01.27-.01.54-.06l5-.82c.2-.04.3-.05.39-.05s.18.02.37.07l4.96 1.08c.2.04.3.06.4.06s.2-.01.4-.05l2.43-.46c.73-.14 1.1-.21 1.36-.12a1 1 0 0 1 .63.68c.07.27-.03.63-.24 1.35'
        fill='currentColor'
      />
      <ellipse
        opacity='.2'
        cx='1.53'
        cy='2.02'
        rx='1.53'
        ry='2.02'
        transform='rotate(113.9 6.5 11.17)skewX(-.13)'
        fill='currentColor'
      />
      <path
        d='M11.38 5.25c4.47-.1 10.46.85 10.88 6.18.23 2.96-4.13 4.17-7.23 3.04-3.33-1.2-6.11-.66-8.16-.19s-4.8-.15-5.02-2.75c-.2-2.6 3.49-6.14 9.53-6.28'
        stroke='currentColor'
      />
      <path
        d='m1.86 11.37-.09 3.76c.26 2.65 2.96 3.23 5.02 2.76s4.83-1.02 8.15.19c3.1 1.12 6.94.16 7.24-3.04l.06-2.9'
        stroke='currentColor'
      />
      <ellipse
        cx='1.55'
        cy='2.04'
        rx='1.55'
        ry='2.04'
        transform='rotate(104.88 6.04 12.17)skewX(-.08)'
        stroke='currentColor'
      />
    </svg>
  )
}
