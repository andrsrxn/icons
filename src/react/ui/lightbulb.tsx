import type { Icon } from './types'

export const IconLightbulb: Icon = ({
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
      data-slot='lightbulb'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        fill='currentColor'
        d='M17.585 11.351a5.583 5.583 0 1 1-11.166 0 5.583 5.583 0 0 1 11.166 0Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M10.172 16.492h3.66a5.576 5.576 0 1 0-3.66 0Zm3.66 0 .338-.13v1.66c0 .143 0 .216-.004.277a2.015 2.015 0 0 1-1.89 1.889c-.06.003-.132.003-.276.003-.145 0-.217 0-.278-.003a2.015 2.015 0 0 1-1.889-1.89c-.004-.06-.004-.133-.004-.277V16.36l.343.132M4.43 11.34h-.96m17.17 0h-.96m-7.678-8.695v.96M4.836 4.849l.679.679m12.86.075.679-.678'
      />
    </svg>
  )
}
