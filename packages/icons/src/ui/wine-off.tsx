import type { Icon } from './types'

export const IconWineOff: Icon = ({
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
      data-slot='icon-ui-wine-off'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M18.26 8.55H5.75l.43 1.3c.66 2 .98 2.99 1.77 3.55.79.57 1.83.57 3.92.57h.27c2.1 0 3.14 0 3.93-.57.78-.57 1.11-1.56 1.77-3.55z'
        fill='currentColor'
      />
      <path d='m2.74 2.45 18.52 18.52' stroke='currentColor' />
      <path
        d='M6 5.74A9 9 0 0 0 5.74 9 6.3 6.3 0 0 0 11 14.27c.34.04.67.04 1.34.04h2.22'
        stroke='currentColor'
      />
      <path
        d='M16.92 12.37s1.34-1.9 1.34-4.38c0-2.36-.9-4.38-1.5-5.46-.22-.39-.33-.58-.56-.72-.23-.13-.48-.13-.98-.13H8.85c-.5 0-.74 0-.98.13s-.34.33-.56.71h0l-.25.45'
        stroke='currentColor'
      />
      <path d='M5.77 9.22h12.15' stroke='currentColor' />
      <path d='M12 21.96V14.3' stroke='currentColor' />
      <path d='M15.1 21.96H8.9' stroke='currentColor' />
    </svg>
  )
}
