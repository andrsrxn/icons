import type { Icon } from './types'

export const IconLightbulbOn: Icon = ({
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
      data-slot='icon-ui-lightbulb-on'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect opacity='.2' x='9.43' y='17.27' width='4.87' height='5.04' rx='1' fill='currentColor' />
      <path d='M12 2.73v-1.1' stroke='currentColor' />
      <path d='M21.2 10.4h1' stroke='currentColor' />
      <path d='M1.9 10.4h1' stroke='currentColor' />
      <path d='m5.34 4.69-.67-.67' stroke='currentColor' />
      <path d='m18.62 4.69.65-.65' stroke='currentColor' />
      <path
        d='M14.79 17.88c0-.62.37-1.17.86-1.55a5.8 5.8 0 0 0 2.06-4.71 5.84 5.84 0 1 0-11.69 0c0 1.93.7 3.66 2.06 4.72.49.38.86.93.86 1.55'
        stroke='currentColor'
      />
      <path
        d='M8.94 17.8v1.58a5 5 0 0 0 .13 1.64 2 2 0 0 0 1.16 1.16 5 5 0 0 0 1.63.13c.87 0 1.3 0 1.64-.13a2 2 0 0 0 1.16-1.16c.13-.34.13-.78.13-1.64V17.8'
        stroke='currentColor'
      />
      <path d='M14.79 17.8H9.16' stroke='currentColor' />
      <path d='M12 12.84v4.96' stroke='currentColor' />
    </svg>
  )
}
