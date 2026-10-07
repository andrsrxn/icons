import type { Icon } from './types'

export const IconSdCard: Icon = ({
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
      data-slot='icon-ui-sd-card'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M14.19 22.22c2.82 0 4.24 0 5.12-.88s.88-2.3.88-5.12V7.78c0-2.82 0-4.24-.88-5.12s-2.3-.88-5.12-.88h-2.44c-2.83 0-4.24 0-5.12.88s-.88 2.3-.88 5.12v1.23c0 .81 0 1.22-.1 1.61s-.32.74-.74 1.44l-.04.07c-.46.78-.69 1.17-.8 1.6-.1.43-.08.88-.03 1.78l.06 1.02c.14 2.7.2 4.04 1.08 4.86.87.83 2.21.83 4.9.83z'
        fill='currentColor'
      />
      <path
        d='M14.19 22.22c2.83 0 4.24 0 5.12-.88s.88-2.3.88-5.12V7.78c0-2.82 0-4.24-.88-5.12s-2.3-.88-5.12-.88h-3.3c-1.98 0-2.97 0-3.7.46a3 3 0 0 0-.97.96c-.45.73-.45 1.72-.45 3.7v2.38c0 .77 0 1.16-.1 1.53l-.08.3c-.13.35-.35.67-.8 1.3A6 6 0 0 0 4 13.72l-.1.3c-.09.36-.09.75-.09 1.52v.68c0 2.82 0 4.24.88 5.12s2.3.88 5.12.88z'
        stroke='currentColor'
      />
      <path d='M16.75 8.2V5.26' stroke='currentColor' />
      <path d='M13.13 8.2V5.26' stroke='currentColor' />
      <path d='M9.52 8.2V5.26' stroke='currentColor' />
    </svg>
  )
}
