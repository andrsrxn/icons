import type { Icon } from './types'

export const IconFirstAidCircle: Icon = ({
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
      data-slot='icon-ui-first-aid-circle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M12 22.31a10.31 10.31 0 1 1 0-20.62 10.31 10.31 0 0 1 0 20.62M9.8 6.36l-.2 3.45-3.4.31v3.69l3.4.7.44 3.49h4.07l.35-3.72L18 13.8l-.23-3.69-3.65-.31V6.36z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M14.21 15.05v.89c0 .94 0 1.41-.29 1.7-.3.3-.76.3-1.7.3h-.45c-.94 0-1.41 0-1.7-.3-.3-.29-.3-.76-.3-1.7v-.89c0-.47 0-.7-.15-.85s-.38-.15-.85-.15h-.7c-.94 0-1.41 0-1.7-.29-.3-.3-.3-.76-.3-1.7v-.36c0-.95 0-1.42.3-1.71.29-.3.76-.3 1.7-.3h.7c.47 0 .7 0 .85-.14s.15-.38.15-.85v-.64c0-.94 0-1.41.3-1.7.29-.3.76-.3 1.7-.3h.44c.95 0 1.42 0 1.71.3.3.29.3.76.3 1.7v.64c0 .47 0 .7.14.85s.38.15.85.15h.7c.95 0 1.42 0 1.71.29.3.3.3.76.3 1.7v.36c0 .95 0 1.42-.3 1.71s-.76.3-1.7.3h-.7c-.48 0-.71 0-.86.14s-.15.38-.15.85'
        stroke='currentColor'
      />
      <path
        d='M1.69 12a10.31 10.31 0 1 1 20.62 0 10.31 10.31 0 0 1-20.62 0'
        stroke='currentColor'
      />
    </svg>
  )
}
