import type { Icon } from './types'

export const IconTowel: Icon = ({
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
      data-slot='icon-ui-towel'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M9.72 5.12a2.8 2.8 0 0 0-5.6 0v7.28c0 2.44 0 3.66.67 4.49a3 3 0 0 0 .44.44c.83.67 2.05.67 4.5.67z'
        fill='currentColor'
      />
      <path d='M19.5 8.57h2.95' stroke='currentColor' />
      <path d='M1.56 8.57h8.16' stroke='currentColor' />
      <path
        d='M7 2.76h6.5c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12v7.63c0 1.73 0 2.59-.34 3.25a3 3 0 0 1-1.27 1.26c-.65.34-1.51.34-3.24.34-1.72 0-2.58 0-3.24-.34a3 3 0 0 1-1.26-1.26c-.34-.66-.34-1.52-.34-3.25V7.38c0-2.06 0-4.62-2.81-4.62'
        stroke='currentColor'
      />
      <path d='M6.98 2.76c-.83.03-2.48.74-2.48 3.6v9.28c0 1.1.9 2 2 2h3.22' stroke='currentColor' />
    </svg>
  )
}
