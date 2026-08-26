import type { Icon } from './types'

export const IconStethoscope: Icon = ({
  size = 24,
  strokeWidth = 1.5,
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
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-stethoscope'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <circle opacity='.2' cx='18.68' cy='11.8' r='2.7' fill='currentColor' />
      <path
        d='M4.96 2.8c-.3 0-.46 0-.59.02a2 2 0 0 0-1.72 1.73c-.02.13-.02.28-.02.58v3.18c0 1.89 0 2.83.58 3.42.6.58 1.53.58 3.42.58h1.5c1.9 0 2.83 0 3.42-.58.59-.59.59-1.53.59-3.42V4.77a2 2 0 0 0-1.97-1.96h-.08m-2.71 9.5v3.24a5.65 5.65 0 0 0 11.3 0v-.95'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <circle cx='18.68' cy='11.8' r='2.7' stroke='currentColor' strokeWidth={strokeWidth} />
    </svg>
  )
}
