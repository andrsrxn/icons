import type { Icon } from './types'

export const IconPlay: Icon = ({
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
      data-slot='ui-icon-play'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M4.44 11.08c0-4.74 0-7.11 1.53-7.97 1.54-.86 3.56.38 7.6 2.85l1.5.92c3.75 2.3 5.62 3.44 5.62 5.12s-1.87 2.83-5.61 5.12l-1.5.92c-4.05 2.47-6.07 3.71-7.6 2.85-1.54-.86-1.54-3.23-1.54-7.97z'
        fill='currentColor'
      />
      <path
        d='M4.44 11.08c0-4.74 0-7.11 1.53-7.97 1.54-.86 3.56.38 7.6 2.85l1.5.92c3.75 2.3 5.62 3.44 5.62 5.12s-1.87 2.83-5.61 5.12l-1.5.92c-4.05 2.47-6.07 3.71-7.6 2.85-1.54-.86-1.54-3.23-1.54-7.97z'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
