import type { Icon } from './types'

export const IconSigma: Icon = ({
  size = 24,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      data-slot='sigma'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M17.35 6.82v-1.1c0-.94 0-1.42-.3-1.7-.29-.3-.76-.3-1.7-.3H9.6c-1.67 0-2.5 0-2.78.53s.19 1.22 1.12 2.6l2.75 4.02c.37.55.56.82.56 1.13s-.19.58-.56 1.13l-2.75 4.02c-.93 1.38-1.4 2.07-1.12 2.6s1.11.53 2.78.53h5.74c.94 0 1.41 0 1.7-.3.3-.28.3-.76.3-1.7v-1.1'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
