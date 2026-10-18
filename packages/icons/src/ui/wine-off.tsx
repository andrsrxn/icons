import type { Icon } from './types'

export const IconWineOff: Icon = ({
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
      data-slot='icon-ui-wine-off'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M18.26 8.55H5.75l.43 1.3c.66 2 .98 2.99 1.77 3.55.79.57 1.83.57 3.92.57h.27c2.1 0 3.14 0 3.93-.57.78-.57 1.11-1.56 1.77-3.55z'
        fill='currentColor'
      />
      <path d='m2.74 2.45 18.52 18.52' stroke='currentColor' />
      <path
        d='m18.26 8-.02.8a6.3 6.3 0 0 1-5.59 5.5l-.66.01-.7-.01A6.24 6.24 0 0 1 5.7 8c0-2.3.98-4.37 1.62-5.48.22-.38.33-.58.56-.71s.49-.13.98-.13h6.37c.5 0 .75 0 .98.13.23.14.34.33.56.72.6 1.08 1.5 3.1 1.5 5.46'
        stroke='currentColor'
      />
      <path d='M5.77 9.22h12.15' stroke='currentColor' />
      <path d='M12 21.96V14.3' stroke='currentColor' />
      <path d='M15.1 21.96H8.9' stroke='currentColor' />
    </svg>
  )
}
