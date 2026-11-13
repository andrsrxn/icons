import type { Icon } from './types'

export const IconToiletPaper: Icon = ({
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
      data-slot='icon-ui-toilet-paper'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <ellipse opacity='.2' cx='17.54' cy='9.67' rx='4.15' ry='6.89' fill='currentColor' />
      <ellipse cx='17.54' cy='9.67' rx='4.15' ry='6.89' stroke='currentColor' />
      <path d='M17.54 7.66v4.03' stroke='currentColor' />
      <path
        d='M17.58 2.78H12.3c-4.71 0-7.07 0-8.53 1.46C2.3 5.71 2.3 8.07 2.3 12.78v4.44c0 1.89 0 2.83.59 3.41.58.6 1.53.6 3.41.6h3.07c1.89 0 2.83 0 3.42-.6.58-.58.58-1.52.58-3.4V9.9'
        stroke='currentColor'
      />
    </svg>
  )
}
