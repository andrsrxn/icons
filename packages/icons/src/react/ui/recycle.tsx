import type { Icon } from './types'

export const IconRecycle: Icon = ({
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
      data-slot='icon-ui-recycle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='m7.74 7.67 1.31-2.03c1.5-2.31 2.24-3.47 3.32-3.48s1.84 1.14 3.37 3.42L17.34 8'
        stroke='currentColor'
      />
      <path
        d='m19.3 11.82.98 1.87c1.36 2.59 2.03 3.88 1.46 4.84-.58.97-2.04.98-4.96 1l-2.47.03'
        stroke='currentColor'
      />
      <path
        d='m5.29 11.62-1.05 2.01c-1.35 2.62-2.03 3.92-1.44 4.88s2.05.96 5 .96h2'
        stroke='currentColor'
      />
      <path
        d='m13.45 7.67 2.36.64c.92.24 1.37.37 1.73.16s.48-.66.73-1.58l.63-2.37'
        stroke='currentColor'
      />
      <path
        d='m16.28 16.36-1.74 1.73c-.66.67-1 1-1 1.42s.33.75 1 1.41l1.74 1.74'
        stroke='currentColor'
      />
      <path
        d='m7.15 14.82-.63-2.37c-.25-.91-.37-1.37-.73-1.57-.36-.21-.81-.09-1.72.15l-2.38.64'
        stroke='currentColor'
      />
    </svg>
  )
}
