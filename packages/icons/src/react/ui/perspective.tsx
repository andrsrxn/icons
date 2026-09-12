import type { Icon } from './types'

export const IconPerspective: Icon = ({
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
      data-slot='icon-ui-perspective'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M1.65 11.4c0-2.63 0-3.94.8-4.8.79-.87 2.1-.97 4.72-1.18l8.7-.7c3.04-.23 4.55-.35 5.52.54s.96 2.4.96 5.45v2.6c0 3.03 0 4.54-.96 5.43-.96.9-2.47.78-5.5.54l-8.7-.67c-2.63-.2-3.94-.3-4.74-1.16s-.8-2.18-.8-4.82z'
        fill='currentColor'
      />
      <path
        d='M1.65 11.63c0-2.49 0-3.73.73-4.58.74-.84 1.97-1.02 4.44-1.36l8.7-1.22c3.18-.45 4.77-.67 5.8.23s1.03 2.5 1.03 5.71v3.14c0 3.22 0 4.84-1.03 5.73-1.04.9-2.64.67-5.83.2l-8.7-1.26c-2.45-.35-3.68-.53-4.41-1.37s-.73-2.09-.73-4.56z'
        stroke='currentColor'
      />
    </svg>
  )
}
