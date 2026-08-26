import type { Icon } from './types'

export const IconGraduationHat: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-graduation-hat'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='m11 19.3-5.2-1.52a1 1 0 0 1-.71-1l.2-5.24a1 1 0 0 1 1.31-.9l4.4 1.48a3 3 0 0 0 1.95 0l4.23-1.49a1 1 0 0 1 1.33.87l.35 4.55a1 1 0 0 1-.62 1l-5.27 2.15a3 3 0 0 1-1.98.1'
        fill='currentColor'
      />
      <path
        d='m6 6.62 4.17-1.32c.9-.28 1.34-.42 1.8-.42.47 0 .91.14 1.8.42l4.2 1.32c2.42.76 3.63 1.14 3.64 1.87 0 .72-1.2 1.13-3.6 1.93l-4.12 1.39c-.95.32-1.42.48-1.92.48-.49 0-.96-.16-1.91-.48l-4.1-1.39c-2.4-.8-3.59-1.2-3.58-1.93S3.59 7.39 6 6.62'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M4.89 10.5v3.4c0 1.67 0 2.5.57 3.29.58.79 1.2.99 2.46 1.39 1.2.38 2.62.68 4.06.68s2.85-.3 4.06-.68c1.25-.4 1.88-.6 2.46-1.4.57-.78.57-1.61.57-3.27v-3.4'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
