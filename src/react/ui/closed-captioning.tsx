import type { Icon } from './types'

export const IconClosedCaptioning: Icon = ({
  size = 24,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='closed-captioning'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        fill='currentColor'
        d='M3.712 10.487c0-1.886 0-2.828.586-3.414.586-.586 1.528-.586 3.414-.586h8.576c1.885 0 2.828 0 3.414.586.586.586.586 1.528.586 3.414v3.026c0 1.886 0 2.829-.586 3.414-.586.586-1.529.586-3.414.586H7.712c-1.886 0-2.828 0-3.414-.586-.586-.585-.586-1.528-.586-3.414v-3.026Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M10.534 9.544c-1.665 0-3.434 0-3.434 2.456s1.848 2.456 3.434 2.456m5.88-4.912c-1.665 0-3.434 0-3.434 2.456s1.847 2.456 3.434 2.456m-8.702 3.057h8.576c1.885 0 2.828 0 3.414-.586.586-.585.586-1.528.586-3.414v-3.026c0-1.886 0-2.828-.586-3.414-.586-.586-1.529-.586-3.414-.586H7.712c-1.886 0-2.828 0-3.414.586-.586.586-.586 1.528-.586 3.414v3.026c0 1.886 0 2.829.586 3.414.586.586 1.528.586 3.414.586Z'
      />
    </svg>
  )
}
