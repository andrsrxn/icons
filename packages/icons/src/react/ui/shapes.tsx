import type { Icon } from './types'

export const IconShapes: Icon = ({
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
      data-slot='icon-ui-shapes'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect opacity='.2' x='2.48' y='13.81' width='7.65' height='7.65' rx='2' fill='currentColor' />
      <rect
        opacity='.2'
        x='1.84'
        y='6.83'
        width='6.32'
        height='6.32'
        rx='1'
        transform='rotate(-45 1.84 6.83)'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M14.86 21.07c-.66-.38-1-.57-1.13-.87a1 1 0 0 1-.08-.3c-.04-.32.15-.65.54-1.31l1.42-2.44c.77-1.34 1.16-2 1.74-2 .57 0 .96.67 1.72 2.01l1.5 2.64c.26.45.39.67.4.9a1 1 0 0 1-.07.44c-.08.22-.27.39-.66.73-.19.17-.28.26-.4.31l-.21.1c-.12.02-.25.02-.5.02h-3.38c-.21 0-.32 0-.42-.02l-.1-.03c-.1-.03-.19-.08-.37-.18'
        fill='currentColor'
      />
      <rect x='2.48' y='13.81' width='7.65' height='7.65' rx='2' stroke='currentColor' />
      <rect
        x='1.84'
        y='6.83'
        width='6.32'
        height='6.32'
        rx='1'
        transform='rotate(-45 1.84 6.83)'
        stroke='currentColor'
      />
      <path
        d='M15.85 21.31c-1.53 0-2.3 0-2.59-.5s.1-1.16.85-2.5l1.43-2.49c.77-1.35 1.16-2.02 1.74-2.02s.96.67 1.73 2.02l1.43 2.5c.76 1.33 1.14 2 .85 2.5-.29.49-1.05.49-2.59.49z'
        stroke='currentColor'
      />
      <circle
        opacity='.2'
        cx='17.26'
        cy='6.8'
        r='4.11'
        transform='rotate(90 17.26 6.8)'
        fill='currentColor'
      />
      <circle cx='17.26' cy='6.8' r='4.11' transform='rotate(90 17.26 6.8)' stroke='currentColor' />
    </svg>
  )
}
