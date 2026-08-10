import type { Icon } from './types'

export const IconTeeth: Icon = ({
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
      data-slot='teeth'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M15.1 3.88c-1.23.22-2.64 1.81-2.64 1.81s-1.92-1.81-3.93-1.81c-1.92 0-3.25.98-4.13 2.72-1.24 2.47-.67 5.2.13 7.84.9 2.97 1.86 5.95 3.88 5.95.95 0 1.7-.76 1.89-1.7.12-.6.3-1.24.58-1.62.47-.63 1.6-.6 2.1 0 .25.3.45.82.6 1.37.28 1.02.93 1.94 1.99 1.93 1.6-.02 2.75-2.69 3.63-5.47.8-2.54 1.6-5.58.28-8.3-.89-1.83-2.4-3.07-4.38-2.72'
        fill='currentColor'
      />
      <path
        d='M9.71 7.5c1.47-.44 2.75-1.8 2.75-1.8m0 0s1.41-1.6 2.64-1.82c1.97-.35 3.5.9 4.38 2.72 1.32 2.72.52 5.76-.28 8.3-.88 2.78-2.02 5.45-3.63 5.47-1.06 0-1.7-.91-1.99-1.93a4 4 0 0 0-.6-1.37c-.5-.6-1.63-.63-2.1 0a4 4 0 0 0-.58 1.63c-.18.93-.94 1.69-1.9 1.69-2.01 0-2.98-2.98-3.87-5.95-.8-2.64-1.37-5.37-.13-7.84.88-1.74 2.2-2.72 4.13-2.72 2 0 3.93 1.81 3.93 1.81Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
