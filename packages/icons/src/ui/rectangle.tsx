import type { Icon } from './types'

export const IconRectangle: Icon = ({
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
      data-slot='icon-ui-rectangle'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M14.95 19.25c3.05 0 4.57 0 5.64-.79a4 4 0 0 0 .82-.82c.8-1.07.8-2.59.8-5.64s0-4.57-.8-5.64a4 4 0 0 0-.82-.82c-1.07-.8-2.6-.8-5.64-.8h-5.9c-3.05 0-4.57 0-5.64.8a4 4 0 0 0-.82.82c-.8 1.07-.8 2.59-.8 5.64s0 4.57.8 5.64a4 4 0 0 0 .82.82c1.07.8 2.6.8 5.64.8z'
        fill='currentColor'
      />
      <path
        d='M1.8 12c0-3.05 0-4.57.79-5.64a4 4 0 0 1 .82-.82c1.07-.8 2.6-.8 5.64-.8h5.9c3.05 0 4.57 0 5.64.8a4 4 0 0 1 .82.82c.8 1.07.8 2.59.8 5.64v0c0 3.05 0 4.57-.8 5.64a4 4 0 0 1-.82.82c-1.07.8-2.6.8-5.64.8h-5.9c-3.05 0-4.57 0-5.64-.8a4 4 0 0 1-.82-.82c-.8-1.07-.8-2.59-.8-5.64'
        stroke='currentColor'
      />
    </svg>
  )
}
