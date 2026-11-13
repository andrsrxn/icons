import type { Icon } from './types'

export const IconLungs: Icon = ({
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
      data-slot='icon-ui-lungs'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M6.6 19.06c3.17-1.28 2.56-6.27 2.56-6.27L8.6 7.94c-.18-1.54-.27-2.32-.96-2.47s-1.19.45-2.2 1.66A18 18 0 0 0 2.3 12.4C.62 17 3.43 20.34 6.6 19.06'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M17.4 19.06c-3.17-1.28-2.56-6.27-2.56-6.27l.56-4.85c.18-1.54.27-2.32.96-2.47s1.19.45 2.2 1.66a18 18 0 0 1 3.15 5.27c1.67 4.6-1.14 7.94-4.31 6.66'
        fill='currentColor'
      />
      <path
        d='M6.6 19.06C3.43 20.34.62 17 2.3 12.4c.74-2.05 2-3.88 3.16-5.27 1-1.2 1.5-1.8 2.2-1.66.68.15.77.93.95 2.47l.56 4.85s.61 5-2.56 6.27'
        stroke='currentColor'
      />
      <path
        d='M17.4 19.06c3.17 1.28 5.98-2.06 4.31-6.66a18 18 0 0 0-3.16-5.27c-1-1.2-1.5-1.8-2.2-1.66-.68.15-.77.93-.95 2.47l-.56 4.85s-.61 5 2.56 6.27'
        stroke='currentColor'
      />
      <path d='m12 9.7-6.04 3.98M12 9.69V3.2m0 6.5 6.07 3.98' stroke='currentColor' />
    </svg>
  )
}
