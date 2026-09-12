import type { Icon } from './types'

export const IconShapesMinus: Icon = ({
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
      data-slot='icon-ui-shapes-minus'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M14.17 6.52h6.95' stroke='currentColor' />
      <rect opacity='.2' x='2.64' y='13.68' width='7.6' height='7.6' rx='2' fill='currentColor' />
      <rect
        opacity='.2'
        x='2'
        y='6.74'
        width='6.28'
        height='6.28'
        rx='1'
        transform='rotate(-45 2 6.74)'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M14.9 21.04c-.69-.39-1.03-.58-1.16-.9l-.07-.26c-.05-.33.15-.67.55-1.35l1.45-2.5c.78-1.34 1.16-2 1.74-2s.96.67 1.73 2l1.54 2.72c.27.46.4.69.4.93a1 1 0 0 1-.06.4c-.08.23-.28.4-.68.76-.2.18-.29.26-.4.32l-.21.08c-.13.04-.26.04-.52.04H15.8c-.22 0-.33 0-.43-.03l-.09-.02c-.1-.03-.2-.09-.38-.2'
        fill='currentColor'
      />
      <rect x='2.64' y='13.68' width='7.6' height='7.6' rx='2' stroke='currentColor' />
      <rect
        x='2'
        y='6.74'
        width='6.28'
        height='6.28'
        rx='1'
        transform='rotate(-45 2 6.74)'
        stroke='currentColor'
      />
      <path
        d='M15.86 21.29c-1.54 0-2.3 0-2.6-.5-.28-.5.1-1.17.86-2.5l1.49-2.6c.77-1.35 1.15-2.02 1.73-2.02s.97.67 1.74 2.02l1.48 2.6c.77 1.33 1.15 2 .86 2.5-.3.5-1.06.5-2.6.5z'
        stroke='currentColor'
      />
    </svg>
  )
}
