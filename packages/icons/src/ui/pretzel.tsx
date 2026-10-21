import type { Icon } from './types'

export const IconPretzel: Icon = ({
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
      data-slot='icon-ui-pretzel'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M1.8 9.22c.05 3.06 2.14 10.17 10.1 10.17 7.98 0 10.2-7.02 10.32-10.03'
        stroke='currentColor'
      />
      <path
        d='M21.94 20.62c-.24-.04-9.52-4.87-9.91-11.26-.2-3.37 1.67-5.56 4.53-5.84 3.11-.3 5.66 2.05 5.66 5.64'
        stroke='currentColor'
      />
      <path
        d='M2.06 20.62c.24-.04 9.52-4.87 9.91-11.26.2-3.37-1.67-5.56-4.53-5.84-3.11-.3-5.66 2.05-5.66 5.64'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M21.65 11.99c-1.16 4.12-3.83 5.97-6.95 6.82l-2.71.7-2.72-.47c-3.13-.84-5.8-2.7-6.96-6.82-1.23-4.38.28-7.58 3.4-8.41 2.91-.78 5.04.94 6.28 3.13 1.23-2.3 3.25-4.18 6.27-3.37 3.11.84 4.63 4.04 3.4 8.42'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
    </svg>
  )
}
