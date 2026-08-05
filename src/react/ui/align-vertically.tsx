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
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
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
        fill='currentColor'
        d='M5.469 12c0 .897 0 1.345.186 1.683a1.5 1.5 0 0 0 .591.592c.338.185.786.185 1.683.185h8.142c.897 0 1.345 0 1.683-.185a1.5 1.5 0 0 0 .591-.592c.186-.338.186-.786.186-1.683s0-1.345-.185-1.683a1.5 1.5 0 0 0-.592-.592c-.338-.185-.786-.185-1.683-.185H7.929c-.897 0-1.345 0-1.683.185a1.5 1.5 0 0 0-.591.592c-.186.338-.186.786-.186 1.683Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M20.27 5.056H3.73M20.27 19.06H3.73m4.2-9.463h8.14c.898 0 1.346 0 1.684.186a1.5 1.5 0 0 1 .591.591c.186.338.186.786.186 1.683s0 1.346-.185 1.683a1.5 1.5 0 0 1-.592.592c-.338.185-.786.185-1.683.185H7.929c-.897 0-1.345 0-1.683-.185a1.5 1.5 0 0 1-.591-.592c-.186-.337-.186-.786-.186-1.683s0-1.345.186-1.683a1.5 1.5 0 0 1 .591-.591c.338-.186.786-.186 1.683-.186Z'
      />
    </svg>
  )
}
