import type { Icon } from './types'

export const IconFaceDead: Icon = ({
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
      data-slot='icon-ui-face-dead'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle
        opacity='.2'
        cx='12'
        cy='12'
        r='10.26'
        transform='rotate(90 12 12)'
        fill='currentColor'
      />
      <circle cx='12' cy='12' r='10.26' transform='rotate(90 12 12)' stroke='currentColor' />
      <path d='m7.13 11.2 2.97-2.97' stroke='currentColor' />
      <path d='m13.9 11.2 2.97-2.97' stroke='currentColor' />
      <path d='M10.1 11.2 7.13 8.24' stroke='currentColor' />
      <path d='M16.87 11.2 13.9 8.24' stroke='currentColor' />
      <path d='M15.71 16.02H8.3' stroke='currentColor' />
    </svg>
  )
}
