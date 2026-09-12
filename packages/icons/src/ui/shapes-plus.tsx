import type { Icon } from './types'

export const IconShapesPlus: Icon = ({
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
      data-slot='icon-ui-shapes-plus'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M17.3 3.5v6.76' stroke='currentColor' />
      <path d='M13.91 6.87h6.76' stroke='currentColor' />
      <rect opacity='.2' x='2.55' y='13.85' width='7.63' height='7.63' rx='2' fill='currentColor' />
      <rect
        opacity='.2'
        x='1.9'
        y='6.88'
        width='6.31'
        height='6.31'
        rx='1'
        transform='rotate(-45 1.9 6.88)'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M14.9 21.08c-.66-.37-1-.56-1.13-.86a1 1 0 0 1-.08-.3c-.03-.32.16-.65.54-1.31l1.41-2.43c.78-1.33 1.16-2 1.74-2s.96.68 1.73 2.02l1.5 2.63c.25.44.38.66.4.9a1 1 0 0 1-.08.44c-.09.2-.28.38-.66.72-.19.17-.28.26-.39.31l-.23.09c-.11.03-.24.03-.5.03H15.8c-.21 0-.32 0-.42-.02l-.1-.03c-.1-.03-.19-.08-.37-.19'
        fill='currentColor'
      />
      <rect x='2.55' y='13.85' width='7.63' height='7.63' rx='2' stroke='currentColor' />
      <rect
        x='1.9'
        y='6.88'
        width='6.31'
        height='6.31'
        rx='1'
        transform='rotate(-45 1.9 6.88)'
        stroke='currentColor'
      />
      <path
        d='M15.9 21.33c-1.54 0-2.3 0-2.6-.5-.28-.5.1-1.16.86-2.5l1.42-2.47c.77-1.35 1.15-2.03 1.73-2.03s.97.68 1.74 2.03l1.42 2.48c.76 1.33 1.14 2 .85 2.5-.3.49-1.06.49-2.59.49z'
        stroke='currentColor'
      />
    </svg>
  )
}
