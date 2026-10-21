import type { Icon } from './types'

export const IconSoapBar: Icon = ({
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
      data-slot='icon-ui-soap-bar'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M20.12 15.17c0-1.89 0-2.83-.59-3.42-.58-.58-1.53-.58-3.41-.58H7.88c-1.88 0-2.83 0-3.41.58-.59.59-.59 1.53-.59 3.42v3.06c0 1.89 0 2.83.59 3.41.58.59 1.53.59 3.41.59h8.24c1.88 0 2.83 0 3.41-.59.59-.58.59-1.52.59-3.41zm-6.27-.61h.06a2 2 0 0 1 1.97 1.97v.12a2 2 0 0 1-2.03 1.98h-3.76a2 2 0 0 1-1.97-1.98v-.12a2 2 0 0 1 1.97-1.97z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <rect x='3.88' y='11.17' width='16.24' height='11.06' rx='4' stroke='currentColor' />
      <rect x='7.93' y='14.5' width='8.13' height='4.4' rx='1.5' stroke='currentColor' />
      <path
        d='M14.24 7.79a.52.52 0 1 1-.93.45.52.52 0 0 1 .93-.45'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M16.93 3.43a.74.74 0 1 1-1.34.65.74.74 0 0 1 1.34-.65'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M7.85 4.47A2.03 2.03 0 1 0 11.5 2.7a2.03 2.03 0 0 0-3.65 1.77'
        fill='currentColor'
      />
      <path
        d='M7.85 4.47a2.03 2.03 0 1 1 3.65-1.78 2.03 2.03 0 0 1-3.65 1.78'
        stroke='currentColor'
      />
    </svg>
  )
}
