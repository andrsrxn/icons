import type { Icon } from './types'

export const IconTransmission: Icon = ({
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
      data-slot='icon-ui-transmission'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M20.18 6.67V8c0 1.89 0 2.83-.58 3.41-.59.59-1.53.59-3.42.59H3.74'
        stroke='currentColor'
      />
      <circle opacity='.2' cx='3.74' cy='4.67' r='2.01' fill='currentColor' />
      <circle opacity='.2' cx='11.99' cy='4.67' r='2.01' fill='currentColor' />
      <circle opacity='.2' cx='20.25' cy='4.67' r='2.01' fill='currentColor' />
      <circle opacity='.2' cx='3.74' cy='19.33' r='2.01' fill='currentColor' />
      <circle opacity='.2' cx='11.99' cy='19.33' r='2.01' fill='currentColor' />
      <circle cx='3.74' cy='4.67' r='2.01' stroke='currentColor' />
      <circle cx='11.99' cy='4.67' r='2.01' stroke='currentColor' />
      <circle cx='20.25' cy='4.67' r='2.01' stroke='currentColor' />
      <circle cx='3.74' cy='19.33' r='2.01' stroke='currentColor' />
      <circle cx='11.99' cy='19.33' r='2.01' stroke='currentColor' />
      <path d='M3.74 6.67v10.66' stroke='currentColor' />
      <path d='M12 6.67v10.66' stroke='currentColor' />
      <path d='m19.58 18.8 1.85 2.54' stroke='currentColor' />
      <path d='M18 15.38v5.96' stroke='currentColor' />
      <path
        d='M18.02 15.38h2.13c.89 0 1.6.77 1.6 1.7 0 .95-.71 1.71-1.6 1.71h-2.13'
        stroke='currentColor'
      />
    </svg>
  )
}
