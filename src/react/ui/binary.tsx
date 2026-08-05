import type { Icon } from './types'

export const IconBinary: Icon = ({
  size = 24,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='binary'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        fill='currentColor'
        d='M3.737 5.69a1.975 1.975 0 1 1 3.95 0v2.994a1.975 1.975 0 0 1-3.95 0V5.69Zm12.575 0a1.975 1.975 0 1 1 3.95 0v2.994a1.975 1.975 0 1 1-3.95 0V5.69Zm-6.287 9.604a1.975 1.975 0 0 1 3.95 0v2.994a1.975 1.975 0 1 1-3.95 0v-2.994Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M12.658 10.396V3.714l-2.633 2.634M6.37 20v-6.68l-2.634 2.633M19.447 20v-6.68l-2.633 2.633M5.712 10.66a1.975 1.975 0 0 1-1.975-1.975V5.69a1.975 1.975 0 1 1 3.95 0v2.994c0 1.09-.884 1.975-1.975 1.975Zm12.576 0a1.975 1.975 0 0 1-1.976-1.975V5.69a1.975 1.975 0 1 1 3.95 0v2.994c0 1.09-.884 1.975-1.974 1.975ZM12 20.263a1.975 1.975 0 0 1-1.975-1.975v-2.994a1.975 1.975 0 0 1 3.95 0v2.994c0 1.09-.884 1.975-1.975 1.975Z'
      />
    </svg>
  )
}
