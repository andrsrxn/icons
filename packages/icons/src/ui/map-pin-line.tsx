import type { Icon } from './types'

export const IconMapPinLine: Icon = ({
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
      data-slot='icon-ui-map-pin-line'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M12 22.39v-10.4' stroke='currentColor' />
      <circle
        opacity='.2'
        cx='12'
        cy='6.87'
        r='5.13'
        transform='rotate(90 12 6.87)'
        fill='currentColor'
      />
      <circle cx='12' cy='6.87' r='5.13' transform='rotate(90 12 6.87)' stroke='currentColor' />
    </svg>
  )
}
