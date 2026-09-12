import type { Icon } from './types'

export const IconAnchor: Icon = ({
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
      data-slot='icon-ui-anchor'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle opacity='.2' cx='12' cy='4.56' r='2.81' fill='currentColor' />
      <path d='M12 22.34V7.37' stroke='currentColor' />
      <circle cx='12' cy='4.56' r='2.81' stroke='currentColor' />
      <path d='M20.38 15.1c0 3.32-3.75 7.24-8.38 7.24s-8.38-3.92-8.38-7.23' stroke='currentColor' />
      <path d='M15.83 12H8.17' stroke='currentColor' />
      <path
        d='m5.68 15.7-.72-.48c-.7-.46-1.04-.69-1.4-.64-.38.05-.65.36-1.2.98l-.58.65'
        stroke='currentColor'
      />
      <path
        d='m18.32 15.7.72-.48c.7-.46 1.04-.68 1.4-.64.38.05.65.36 1.2.98l.58.65'
        stroke='currentColor'
      />
    </svg>
  )
}
