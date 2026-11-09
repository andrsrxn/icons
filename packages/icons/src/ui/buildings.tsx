import type { Icon } from './types'

export const IconBuildings: Icon = ({
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
      data-slot='icon-ui-buildings'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M14.31 22.22v-14h2.34c1.89 0 2.83 0 3.41.59.59.58.59 1.53.59 3.41v10z'
        fill='currentColor'
      />
      <path
        d='M3.76 22.22V6.85c0-1.94 0-2.9.43-3.62A3 3 0 0 1 5.21 2.2c.71-.43 1.68-.43 3.62-.43s2.91 0 3.63.43a3 3 0 0 1 1.01 1.02c.44.71.44 1.68.44 3.62v15.37'
        stroke='currentColor'
      />
      <path d='M13.9 7.92h.75c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12v8.3' stroke='currentColor' />
      <path d='M22.33 22.22H1.67' stroke='currentColor' />
      <path d='M10.6 7.44H7.07' stroke='currentColor' />
      <path d='M10.6 12H7.07' stroke='currentColor' />
      <path d='M10.6 16.56H7.07' stroke='currentColor' />
      <path
        d='M17.64 12a.46.46 0 1 1-.92 0 .46.46 0 0 1 .92 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
