import type { Icon } from './types'

export const IconLightning: Icon = ({
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
      data-slot='lightning'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='m6.22 12.3 6.8-8.57c.32-.42 1-.1.87.42L12.58 9.9a.5.5 0 0 0 .49.6h4.48a.5.5 0 0 1 .4.82l-7.13 8.92c-.33.42-1 .09-.87-.43l1.48-6.07a.5.5 0 0 0-.49-.62H6.61a.5.5 0 0 1-.39-.81'
        fill='currentColor'
      />
      <path
        d='m6.22 12.3 6.8-8.57c.32-.42 1-.1.87.42L12.58 9.9a.5.5 0 0 0 .49.6h4.48a.5.5 0 0 1 .4.82l-7.13 8.92c-.33.42-1 .09-.87-.43l1.48-6.07a.5.5 0 0 0-.49-.62H6.61a.5.5 0 0 1-.39-.81Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
