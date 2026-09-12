import type { Icon } from './types'

export const IconBoundingBox: Icon = ({
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
      data-slot='icon-ui-bounding-box'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle
        opacity='.2'
        cx='4.84'
        cy='19.08'
        r='2.39'
        transform='rotate(90 4.84 19.08)'
        fill='currentColor'
      />
      <circle
        opacity='.2'
        cx='4.84'
        cy='4.97'
        r='2.39'
        transform='rotate(90 4.84 4.97)'
        fill='currentColor'
      />
      <circle
        opacity='.2'
        cx='19.16'
        cy='19.08'
        r='2.39'
        transform='rotate(90 19.16 19.08)'
        fill='currentColor'
      />
      <circle
        opacity='.2'
        cx='19.16'
        cy='4.97'
        r='2.39'
        transform='rotate(90 19.16 4.97)'
        fill='currentColor'
      />
      <circle
        cx='4.84'
        cy='19.08'
        r='2.39'
        transform='rotate(90 4.84 19.08)'
        stroke='currentColor'
      />
      <circle cx='4.84' cy='4.97' r='2.39' transform='rotate(90 4.84 4.97)' stroke='currentColor' />
      <circle
        cx='19.16'
        cy='19.08'
        r='2.39'
        transform='rotate(90 19.16 19.08)'
        stroke='currentColor'
      />
      <circle
        cx='19.16'
        cy='4.97'
        r='2.39'
        transform='rotate(90 19.16 4.97)'
        stroke='currentColor'
      />
      <path d='M16.77 4.97H7.23' stroke='currentColor' />
      <path d='M5.05 7.36v9.33' stroke='currentColor' />
      <path d='M16.77 19.09H7.23' stroke='currentColor' />
      <path d='M19.16 7.36v9.33' stroke='currentColor' />
    </svg>
  )
}
