import type { Icon } from './types'

export const IconPanelsEndFilled: Icon = ({
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
      data-slot='icon-ui-panels-end-filled'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M12 2.75h3.27c2.82 0 4.24 0 5.12.88s.88 2.3.88 5.12v6.5c0 2.83 0 4.24-.88 5.12s-2.3.88-5.12.88H12z'
        fill='currentColor'
      />
      <path
        d='M10.74 21.25h2.53c3.77 0 5.65 0 6.82-1.17 1.18-1.18 1.18-3.06 1.18-6.83v-2.5c0-3.77 0-5.65-1.18-6.83-1.17-1.17-3.05-1.17-6.82-1.17h-2.53c-3.78 0-5.66 0-6.83 1.17-1.17 1.18-1.17 3.06-1.17 6.83v2.5c0 3.77 0 5.65 1.17 6.83s3.05 1.17 6.82 1.17'
        stroke='currentColor'
      />
      <path d='M12 20.85V3.15' stroke='currentColor' />
    </svg>
  )
}
