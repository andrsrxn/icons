import type { Icon } from './types'

export const IconWheelchair: Icon = ({
  size = 24,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      data-slot='wheelchair'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <circle opacity='.2' cx='7.8' cy='15.94' r='4.35' fill='currentColor' />
      <circle opacity='.2' cx='18' cy='18.07' r='2.23' fill='currentColor' />
      <circle cx='7.8' cy='15.94' r='4.35' stroke='currentColor' strokeWidth='1.5' />
      <circle cx='18' cy='18.07' r='2.23' stroke='currentColor' strokeWidth='1.5' />
      <path
        d='M8.3 11.59v-6a2 2 0 0 0-1.88-1.88h-.26'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path d='M17.46 7.65H8.31' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
      <path
        d='M18 15.46v-.72a2 2 0 0 0-1.77-1.76l-.52-.01h-4.57'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path d='M15.2 7.65v5.32' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
    </svg>
  )
}
