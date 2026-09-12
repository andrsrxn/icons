import type { Icon } from './types'

export const IconLightbulb: Icon = ({
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
      data-slot='icon-ui-lightbulb'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M12 3.47v-1.9' stroke='currentColor' />
      <path d='M20.63 11.15h1.9' stroke='currentColor' />
      <path d='M1.47 11.15h1.9' stroke='currentColor' />
      <path d='m5.34 5.43-1-1.48' stroke='currentColor' />
      <path d='m18.62 5.43 1.04-1.48' stroke='currentColor' />
      <circle cx='11.86' cy='12.22' r='5.96' stroke='currentColor' />
      <path
        d='M8.94 17.83v1.55a5 5 0 0 0 .13 1.64 2 2 0 0 0 1.16 1.16c.34.13.77.13 1.63.13.87 0 1.3 0 1.64-.13a2 2 0 0 0 1.16-1.16c.13-.34.13-.78.13-1.64v-1.55'
        stroke='currentColor'
      />
      <rect opacity='.2' x='9.06' y='17.83' width='5.61' height='4.48' rx='1' fill='currentColor' />
    </svg>
  )
}
