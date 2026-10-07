import type { Icon } from './types'

export const IconShieldCheck: Icon = ({
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
      data-slot='icon-ui-shield-check'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m16.3 4.25-3.28-1.9c-.5-.3-.75-.44-1.02-.44-.28 0-.52.15-1.02.45L6.9 4.8 4 6.26c-.72.36-1.09.54-1.23.88s-.02.72.22 1.5l2.47 7.94c.09.28.13.42.2.54.09.12.2.22.43.4l4.66 3.9c.6.49.9.74 1.25.74s.66-.23 1.27-.71l4.95-3.9c.25-.2.38-.3.47-.43.09-.14.13-.3.22-.6l2.19-7.96c.2-.74.3-1.11.17-1.43-.14-.33-.48-.5-1.16-.87z'
        fill='currentColor'
      />
      <path
        d='m8.7 12.28.77.94c.71.88 1.07 1.32 1.55 1.32s.83-.44 1.55-1.32l3.35-4.15'
        stroke='currentColor'
      />
      <path
        d='M5.69 5.04a25 25 0 0 0 3.4-1.86c1.54-1 2.32-1.5 2.9-1.5.6 0 1.37.5 2.91 1.5 1 .65 2.17 1.3 3.4 1.86 1.58.7 2.37 1.06 2.7 1.64.32.58.23 1.23.06 2.52v0c-.61 4.58-2.68 9.3-7.29 12.4-.77.52-1.16.78-1.77.78s-1-.26-1.77-.79c-4.61-3.1-6.68-7.8-7.3-12.39-.16-1.3-.25-1.94.07-2.52.33-.58 1.11-.93 2.69-1.64'
        stroke='currentColor'
      />
    </svg>
  )
}
