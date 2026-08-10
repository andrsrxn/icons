import type { Icon } from './types'

export const IconCreativeCommons: Icon = ({
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
      data-slot='creative-commons'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <circle opacity='.2' cx='12' cy='12' r='8.43' fill='currentColor' />
      <circle cx='12' cy='12' r='8.43' stroke='currentColor' strokeWidth='1.5' />
      <path
        d='M10.77 9.41c-.44-.3-1.09-.3-1.09-.3-1.41 0-2.56 1.3-2.56 2.89 0 1.6 1.15 2.88 2.56 2.88 0 0 .72 0 1.09-.24m6.11-5.23c-.43-.3-1.08-.3-1.08-.3-1.42 0-2.57 1.3-2.57 2.89 0 1.6 1.15 2.88 2.57 2.88 0 0 .72 0 1.08-.24'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
