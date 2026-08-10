import type { Icon } from './types'

export const IconAlignVertically: Icon = ({
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
      data-slot='align-vertically'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M5.47 12c0 .9 0 1.35.18 1.68q.22.38.6.6c.33.18.78.18 1.68.18h8.14c.9 0 1.35 0 1.68-.19q.38-.2.6-.59c.18-.33.18-.78.18-1.68s0-1.35-.18-1.68a1.5 1.5 0 0 0-.6-.6c-.33-.18-.78-.18-1.68-.18H7.93c-.9 0-1.35 0-1.68.19a1.5 1.5 0 0 0-.6.59c-.18.33-.18.78-.18 1.68'
        fill='currentColor'
      />
      <path
        d='M20.27 5.06H3.73m16.54 14H3.73m4.2-9.46h8.14c.9 0 1.35 0 1.68.18q.38.22.6.6c.18.33.18.78.18 1.68s0 1.34-.18 1.68a1.5 1.5 0 0 1-.6.6c-.33.18-.78.18-1.68.18H7.93c-.9 0-1.35 0-1.68-.19a1.5 1.5 0 0 1-.6-.59c-.18-.34-.18-.78-.18-1.68s0-1.35.18-1.68q.22-.38.6-.6c.33-.18.78-.18 1.68-.18Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
