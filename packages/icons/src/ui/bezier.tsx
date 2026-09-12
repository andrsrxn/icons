import type { Icon } from './types'

export const IconBezier: Icon = ({
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
      data-slot='icon-ui-bezier'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle
        opacity='.2'
        cx='4.36'
        cy='16.52'
        r='2.61'
        transform='rotate(90 4.36 16.52)'
        fill='currentColor'
      />
      <circle
        opacity='.2'
        cx='11.95'
        cy='7.14'
        r='2.61'
        transform='rotate(90 11.95 7.14)'
        fill='currentColor'
      />
      <circle
        opacity='.2'
        cx='19.64'
        cy='16.52'
        r='2.61'
        transform='rotate(90 19.64 16.52)'
        fill='currentColor'
      />
      <circle
        cx='4.36'
        cy='16.52'
        r='2.61'
        transform='rotate(90 4.36 16.52)'
        stroke='currentColor'
      />
      <circle
        cx='11.95'
        cy='7.14'
        r='2.61'
        transform='rotate(90 11.95 7.14)'
        stroke='currentColor'
      />
      <circle
        cx='19.64'
        cy='16.52'
        r='2.61'
        transform='rotate(90 19.64 16.52)'
        stroke='currentColor'
      />
      <path d='M9.34 7.14H1.76' stroke='currentColor' />
      <path d='M22.24 7.14h-7.68' stroke='currentColor' />
      <path d='M4.32 13.68c0-2.72 1.94-5.05 4.7-6.04' stroke='currentColor' />
      <path d='M19.58 13.68c0-2.72-1.94-5.05-4.7-6.04' stroke='currentColor' />
    </svg>
  )
}
