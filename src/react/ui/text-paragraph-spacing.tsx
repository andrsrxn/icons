import type { Icon } from './types'

export const IconTextParagraphSpacing: Icon = ({
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
      data-slot='text-paragraph-spacing'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M20 4H4m16 16H4M9.74 8.75l.88-.83C11.28 7.31 11.6 7 12 7s.72.3 1.37.92l.89.83M12 7.38v4.64m0 0v4.63m-2.26-1.4.88.83c.65.62.98.92 1.38.92s.72-.3 1.37-.92l.89-.83'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
