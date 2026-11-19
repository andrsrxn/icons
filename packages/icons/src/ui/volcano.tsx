import type { Icon } from './types'

export const IconVolcano: Icon = ({
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
      data-slot='icon-ui-volcano'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='m7.66 10.88 3.17.55 2.96 2.23 2.84-1.31 1.81 4.6 2.64 5.79H2.96l2.56-5.79z'
        fill='currentColor'
      />
      <path
        d='M16.48 11.98s-.86 1.56-2.53 1.56c-1.68 0-1.93-1.56-3.53-2.22-1.35-.56-2.66-.2-2.66-.2'
        stroke='currentColor'
      />
      <path d='M12 1.5v3.06' stroke='currentColor' />
      <path d='M7.28 1.65c.33.2.9.74 1.2 1.39.26.61.3 1.26.23 1.7' stroke='currentColor' />
      <path d='M16.72 1.67c-.34.2-.92.71-1.21 1.36a3 3 0 0 0-.27 1.7' stroke='currentColor' />
      <path
        d='M21.22 22.53s-2.39-3.93-3.54-7.18a54 54 0 0 1-1.33-4.6c-.39-1.55-.58-2.32-1.12-2.75-.54-.42-1.32-.42-2.86-.42h-.77c-1.57 0-2.35 0-2.89.42s-.74 1.21-1.13 2.78c-.35 1.4-.8 3.04-1.34 4.57-1 2.86-3.34 7.18-3.34 7.18'
        stroke='currentColor'
      />
    </svg>
  )
}
