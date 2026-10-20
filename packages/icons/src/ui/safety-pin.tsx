import type { Icon } from './types'

export const IconSafetyPin: Icon = ({
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
      data-slot='icon-ui-safety-pin'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle
        opacity='.2'
        cx='4.73'
        cy='19.31'
        r='2.77'
        transform='rotate(135.7 4.73 19.31)'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='m22.45 8.02-.43-3.34q-.02-.24-.07-.33c-.04-.08-.1-.14-.22-.26l-1.85-1.85a1 1 0 0 0-.26-.22q-.1-.04-.32-.06l-3.35-.42c-.25-.03-.37-.05-.49 0-.11.04-.2.13-.37.31l-3.34 3.6c-.3.33-.46.5-.46.7s.17.36.49.69l.73.73c.23.23.35.35.5.38s.31-.04.62-.18l2.89-1.31c.15-.07.22-.1.3-.12q.15-.02.3.06.08.04.24.2c.13.14.2.2.23.28q.07.15.04.32-.02.1-.15.32l-1.46 2.5c-.2.32-.28.48-.26.65s.15.3.41.56l.84.84c.31.31.47.47.67.47.2.01.36-.13.7-.42L22.1 8.9c.2-.17.3-.26.34-.37.05-.12.03-.25 0-.51'
        fill='currentColor'
      />
      <path
        d='m17.16 8.25-.94 1.87-.06.13a1.5 1.5 0 0 0 .22 1.59l.15.19a1.4 1.4 0 0 0 2 .22l1.93-1.63a5.07 5.07 0 1 0-7-7.3l-1.79 1.96c-.56.6-.48 1.56.17 2.08l.3.24.28.2c.4.25.88.3 1.32.14l.31-.15 1.77-.88c1.1-.56 1.67-.84 1.92-.59.26.26-.02.82-.58 1.93'
        stroke='currentColor'
      />
      <circle
        cx='4.73'
        cy='19.31'
        r='2.77'
        transform='rotate(135.7 4.73 19.31)'
        stroke='currentColor'
      />
      <path d='m16.61 12.34-9.78 8.85' stroke='currentColor' />
      <path d='m11.71 7.43-8.85 9.79' stroke='currentColor' />
    </svg>
  )
}
