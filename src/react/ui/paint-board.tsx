import type { Icon } from './types'

export const IconPaintBoard: Icon = ({
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
      data-slot='paint-board'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M3.5 12c0 4.7 3.8 8.5 8.5 8.5 1.7 0 1.4-1.77 1.1-3.58-.22-1.4-.46-2.84.21-3.5s2.12-.47 3.54-.26c1.85.26 3.65.52 3.65-1.16a8.5 8.5 0 0 0-17 0m11.73-4.27a1.27 1.27 0 1 1-2.54 0 1.27 1.27 0 0 1 2.54 0M9.93 9A1.27 1.27 0 1 1 7.4 9a1.27 1.27 0 0 1 2.54 0m-.65 5.03a1.27 1.27 0 1 1-2.53 0 1.27 1.27 0 0 1 2.53 0'
        fill='currentColor'
      />
      <path
        d='M20.5 12c0 2.97-4.91-.19-6.89 1.78C11.44 15.94 15 20.5 12 20.5a8.5 8.5 0 1 1 8.5-8.5Z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <circle cx='13.96' cy='7.73' r='1.27' stroke='currentColor' strokeWidth='1.5' />
      <circle cx='8.73' cy='8.96' r='1.27' stroke='currentColor' strokeWidth='1.5' />
      <circle cx='8.05' cy='14.08' r='1.27' stroke='currentColor' strokeWidth='1.5' />
    </svg>
  )
}
