import type { Icon } from './types'

export const IconCube: Icon = ({
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
      data-slot='icon-ui-cube'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M2.45 13.9v-3.8c0-1.7 0-2.54.4-3.24S4 5.74 5.46 4.9L9 2.85c1.46-.84 2.2-1.27 3-1.27s1.54.43 3 1.27l3.55 2.05c1.46.84 2.2 1.27 2.6 1.96.4.7.4 1.54.4 3.23v3.82c0 1.69 0 2.53-.4 3.23s-1.14 1.12-2.6 1.96L15 21.15c-1.46.84-2.2 1.27-3 1.27s-1.54-.43-3-1.27L5.45 19.1c-1.46-.84-2.2-1.27-2.6-1.96-.4-.7-.4-1.54-.4-3.23'
        stroke='currentColor'
      />
      <path d='m3 7.47 9 4.95' stroke='currentColor' />
      <path d='M12 12.42v9.65' stroke='currentColor' />
      <path d='m21 7.47-9 4.95' stroke='currentColor' />
      <path
        opacity='.2'
        d='m21.13 17.26-7.98 4.73a.5.5 0 0 1-.75-.43v-9.04q.01-.29.26-.44l7.98-4.26a.5.5 0 0 1 .74.45v8.56a.5.5 0 0 1-.25.43'
        fill='currentColor'
      />
    </svg>
  )
}
