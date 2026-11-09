import type { Icon } from './types'

export const IconTransmission: Icon = ({
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
      data-slot='icon-ui-transmission'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M3.74 12h12.44c1.89 0 2.83 0 3.42-.59.58-.58.58-1.52.58-3.41V6.67'
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
      <path d='m19.61 19 2.05 2.34' stroke='currentColor' />
      <path
        d='M18.39 21.34v-4.69c0-.47 0-.7.15-.85s.38-.15.85-.15h1.05c.85 0 1.54.73 1.54 1.63s-.7 1.63-1.54 1.63H18.4'
        stroke='currentColor'
      />
    </svg>
  )
}
