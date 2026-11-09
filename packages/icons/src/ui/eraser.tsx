import type { Icon } from './types'

export const IconEraser: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-eraser'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M21.59 22.05H8.69' stroke='currentColor' />
      <path
        opacity='.2'
        d='M18.3 3.89c-.96-.97-1.45-1.46-2-1.69a3 3 0 0 0-2.32 0c-.54.23-1.03.72-2 1.69a3 3 0 0 0-.56.67 1 1 0 0 0 0 .77c.07.18.23.35.56.67L18 12.02c.32.32.49.49.67.56.24.1.53.1.77 0 .18-.07.35-.24.67-.56.97-.97 1.46-1.46 1.69-2a3 3 0 0 0 0-2.33c-.23-.54-.72-1.03-1.69-2z'
        fill='currentColor'
      />
      <path
        d='m4.63 11.1 6.47-6.47c1.55-1.55 2.33-2.32 3.24-2.56a3.5 3.5 0 0 1 1.79 0c.91.24 1.69 1.01 3.24 2.56v0c1.55 1.55 2.32 2.33 2.56 3.24q.24.9 0 1.8c-.24.9-1.01 1.68-2.56 3.23l-6.47 6.47c-1.55 1.55-2.33 2.32-3.24 2.56a3.5 3.5 0 0 1-1.79 0c-.91-.24-1.69-1.01-3.24-2.56v0c-1.55-1.55-2.32-2.33-2.56-3.24a3.5 3.5 0 0 1 0-1.8c.24-.9 1.01-1.68 2.56-3.23'
        stroke='currentColor'
      />
      <path d='m10.93 4.94 8.13 8.13' stroke='currentColor' />
    </svg>
  )
}
