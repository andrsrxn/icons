import type { Icon } from './types'

export const IconLandPlot: Icon = ({
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
      data-slot='icon-ui-land-plot'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M11.13 10.16c.43-.2.64-.3.87-.3s.44.1.87.3l4.77 2.3 1.83.84c1.7.79 2.54 1.18 2.54 1.82s-.85 1.03-2.54 1.82l-1.83.84-4.77 2.3c-.43.2-.64.3-.87.3s-.44-.1-.87-.3l-4.77-2.3-1.83-.84c-1.7-.79-2.54-1.18-2.54-1.82s.85-1.03 2.54-1.81l1.83-.85z'
        fill='currentColor'
      />
      <path
        d='m8.17 11.55-1.9.85-1.96.9c-1.69.79-2.53 1.18-2.53 1.82s.84 1.03 2.53 1.81l1.95.91 3.13 1.51c1.28.62 1.92.94 2.61.94s1.33-.32 2.61-.94l3.13-1.5 1.95-.92c1.69-.78 2.53-1.17 2.53-1.81s-.84-1.03-2.53-1.81l-1.95-.91-1.77-.85'
        stroke='currentColor'
      />
      <path
        d='M12 11.55V8.66m0 0V5.08c0-.75 0-1.13.25-1.28.24-.14.57.04 1.24.4l1.69.95c.69.39 1.04.58 1.04.87s-.35.49-1.04.88z'
        stroke='currentColor'
      />
      <path d='M17.56 12.33 6.44 17.9' stroke='currentColor' />
      <path d='m6.48 12.32 11.04 5.6' stroke='currentColor' />
    </svg>
  )
}
