import type { Icon } from './types'

export const IconTextToSpeech: Icon = ({
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
      data-slot='text-to-speech'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M13.64 14.58V9.43m6.54 6V8.58m-3.27 9.44V6'
        stroke='#000'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path
        d='M10.5 8.57v-.12a1 1 0 0 0-.95-.95h-5.1a1 1 0 0 0-.95.95v.12M7 7.5v9.01m0 0H5.87m1.13 0h1.11'
        stroke='#000'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
