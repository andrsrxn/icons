import type { Icon } from './types'

export const IconHanger: Icon = ({
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
      data-slot='icon-ui-hanger'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='m1.8 14.94 10.23-3.95 10.1 4.28-1.08 3.97-17.67.25z'
        fill='currentColor'
      />
      <path
        d='M12 19.24h7.11c.5 0 .74 0 .96-.05a2 2 0 0 0 1.2-.82c.13-.19.22-.42.4-.88a5 5 0 0 0 .41-1.27 2 2 0 0 0-.75-1.73 5 5 0 0 0-1.21-.56l-6.94-2.74c-.54-.2-.81-.31-1.1-.31-.28 0-.55.1-1.09.3l-7.13 2.77a5 5 0 0 0-1.18.55 2 2 0 0 0-.78 1.73c.03.3.15.61.39 1.25.17.45.26.68.38.86a2 2 0 0 0 1.23.85c.22.05.46.05.95.05z'
        stroke='currentColor'
      />
      <path
        d='M11.96 10.77c0-2.17 2.3-3.27 2.3-5.27a2.27 2.27 0 0 0-4.53 0'
        stroke='currentColor'
      />
    </svg>
  )
}
