import type { Icon } from './types'

export const IconSignalFull: Icon = ({
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
      data-slot='ui-icon-signal-full'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M3.3 17.98c-.6-.8-.42-1.93.4-2.5L15 7.47c2.77-1.96 4.15-2.94 5.23-2.38s1.08 2.25 1.08 5.64v3.96c0 1.88 0 2.82-.58 3.41-.59.59-1.53.59-3.42.59H4.71c-.55 0-1.08-.27-1.41-.71'
        fill='currentColor'
      />
      <path
        d='m15.07 7.22-6.25 4.22c-4.42 3-6.63 4.49-6.2 5.9.44 1.42 3.1 1.42 8.44 1.42h6.25c1.89 0 2.83 0 3.42-.59.58-.58.58-1.53.58-3.41v-4.23c0-3.3 0-4.97-1.06-5.53s-2.43.36-5.18 2.22M7.3 12.53v6.23m4.7-9v9m4.7-12.58v12.58'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
