import type { Icon } from './types'

export const IconSignalEmpty: Icon = ({
  size = 24,
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
      data-slot='signal-empty'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='m7.7 12.89-1.4 1.03c-1.7 1.25-2.55 1.88-2.67 2.43-.12.53.06 1.1.48 1.45.42.37 1.48.37 3.6.37m0-5.28v5.28m8.2-11.32-4.1 3.02-4.1 3.02m0 5.28h4.1m0 0v-8.3m0 8.3h4.1m0 0H17c1.41 0 2.12 0 2.56-.44s.44-1.14.44-2.56V8.92c0-1.83 0-2.75-.44-3.19a1.5 1.5 0 0 0-.83-.42c-.62-.1-1.35.45-2.83 1.54m0 11.32V6.85'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
