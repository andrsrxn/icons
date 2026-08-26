import type { Icon } from './types'

export const IconTextWholeWord: Icon = ({
  size = 24,
  strokeWidth = 1.5,
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
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-text-whole-word'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M21.36 14.24c0 1.65 0 2.48-.46 3.04l-.26.26c-.55.46-1.38.46-3.04.46H6.4c-1.66 0-2.49 0-3.04-.46l-.26-.26c-.46-.56-.46-1.39-.46-3.04'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        opacity='.2'
        d='M16.21 14.5a2.15 2.15 0 0 1-2.12-2.18c0-1.21.95-1.58 2.12-1.58s2.12.37 2.12 1.58c0 1.2-.95 2.18-2.12 2.18M6.89 8.88l.83-2.83c.28-.95 1.64-.95 1.92 0l.84 2.83a1 1 0 0 1-.96 1.29H7.85a1 1 0 0 1-.96-1.29'
        fill='currentColor'
      />
      <path
        d='m5.19 14.6 1.54-5.42c.79-2.74 1.18-4.12 1.94-4.12.75 0 1.14 1.38 1.91 4.13l1.53 5.42m4.1-.11c-1.17 0-2.12-.82-2.12-1.84 0-1.35.95-1.85 2.12-1.85h2.12v1.85c0 1.02-.95 1.84-2.12 1.84'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M18.33 14.6v-4.34c0-1.4-.32-2.22-1.66-2.46-.86-.15-1.53.21-2.04.84m-3.78 1.86h-4.4'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
