import type { Icon } from './types'

export const IconSun: Icon = ({
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
      data-slot='icon-ui-sun'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle
        opacity='.2'
        cx='11.97'
        cy='11.99'
        r='4.73'
        transform='rotate(90 11.97 11.99)'
        fill='currentColor'
      />
      <circle
        cx='11.97'
        cy='11.99'
        r='4.73'
        transform='rotate(90 11.97 11.99)'
        stroke='currentColor'
      />
      <path d='M1.56 11.99H4.3' stroke='currentColor' />
      <path d='M19.75 12h2.7' stroke='currentColor' />
      <path d='M11.95 22.34v-2.62' stroke='currentColor' />
      <path d='M11.95 4.34V1.66' stroke='currentColor' />
      <path d='m18 5.87 2.02-2.02' stroke='currentColor' />
      <path d='m4 19.87 1.75-1.75' stroke='currentColor' />
      <path d='M5.82 5.78 3.9 3.85' stroke='currentColor' />
      <path d='m20.01 19.97-1.86-1.86' stroke='currentColor' />
    </svg>
  )
}
