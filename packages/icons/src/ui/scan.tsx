import type { Icon } from './types'

export const IconScan: Icon = ({
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
      data-slot='icon-ui-scan'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M14.48 21.48c3.3 0 4.95 0 5.98-1.02 1.02-1.03 1.02-2.68 1.02-5.98V9.52c0-3.3 0-4.95-1.02-5.98-1.03-1.02-2.68-1.02-5.98-1.02H9.52c-3.3 0-4.95 0-5.98 1.02-1.02 1.03-1.02 2.68-1.02 5.98v4.96c0 3.3 0 4.95 1.02 5.98 1.03 1.02 2.68 1.02 5.98 1.02z'
        fill='currentColor'
      />
      <path
        d='M16 21.47c1.86 0 2.8 0 3.51-.34a3.5 3.5 0 0 0 1.64-1.64c.35-.72.35-1.66.35-3.53h0'
        stroke='currentColor'
      />
      <path
        d='M16.03 2.57c1.83 0 2.75 0 3.46.33a3.5 3.5 0 0 1 1.67 1.67c.34.71.34 1.63.34 3.47h0'
        stroke='currentColor'
      />
      <path
        d='M8 21.47c-1.86 0-2.8 0-3.52-.35a3.5 3.5 0 0 1-1.63-1.63c-.35-.72-.35-1.66-.35-3.53'
        stroke='currentColor'
      />
      <path
        d='M8 2.57c-1.86 0-2.8 0-3.52.34a3.5 3.5 0 0 0-1.63 1.63c-.35.72-.35 1.66-.35 3.53'
        stroke='currentColor'
      />
      <path d='M6.7 12h10.6' stroke='currentColor' />
    </svg>
  )
}
