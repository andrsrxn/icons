import type { Icon } from './types'

export const IconBox: Icon = ({
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
      data-slot='icon-ui-box'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m21.01 17.2-7.86 4.65a.5.5 0 0 1-.76-.43v-8.9q0-.29.27-.44l7.86-4.2a.5.5 0 0 1 .74.45v8.43a.5.5 0 0 1-.25.43'
        fill='currentColor'
      />
      <path
        d='M2.58 13.83v-3.66c0-1.7 0-2.54.4-3.24s1.14-1.12 2.6-1.96L9 2.99c1.46-.84 2.2-1.26 3-1.26s1.54.42 3 1.26l3.42 1.98c1.46.84 2.2 1.27 2.6 1.96.4.7.4 1.54.4 3.24v3.66c0 1.7 0 2.54-.4 3.24s-1.14 1.12-2.6 1.96L15 21.01c-1.46.84-2.2 1.26-3 1.26s-1.54-.42-3-1.26l-3.42-1.98c-1.46-.84-2.2-1.27-2.6-1.96-.4-.7-.4-1.54-.4-3.24'
        stroke='currentColor'
      />
      <path d='M3.12 7.53 12 12.42' stroke='currentColor' />
      <path d='M12 12.42v9.52' stroke='currentColor' />
      <path d='M7.3 9.57v4.61' stroke='currentColor' />
      <path d='M20.88 7.53 12 12.42' stroke='currentColor' />
      <path d='m7.3 9.57 9.14-5.42' stroke='currentColor' />
    </svg>
  )
}
