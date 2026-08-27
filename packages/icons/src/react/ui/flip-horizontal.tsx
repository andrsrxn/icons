import type { Icon } from './types'

export const IconFlipHorizontal: Icon = ({
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
      data-slot='ui-icon-flip-horizontal'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M13.5 9.02c0-4.08 0-6.12.81-6.27s1.56 1.74 3.05 5.54l3.76 9.59c.49 1.23.73 1.85.43 2.29s-.96.44-2.29.44H15.5c-.94 0-1.41 0-1.7-.3-.3-.29-.3-.76-.3-1.7zm-3 0c0-4.08 0-6.12-.81-6.27S8.13 4.49 6.64 8.29l-3.76 9.59c-.49 1.23-.73 1.85-.43 2.29s.96.44 2.29.44H8.5c.94 0 1.41 0 1.7-.3.3-.29.3-.76.3-1.7z'
        fill='currentColor'
      />
      <path
        d='M13.5 9.02c0-4.08 0-6.12.81-6.27s1.56 1.74 3.05 5.54l3.76 9.59c.49 1.23.73 1.85.43 2.29s-.96.44-2.29.44H15.5c-.94 0-1.41 0-1.7-.3-.3-.29-.3-.76-.3-1.7zm-3 0c0-4.08 0-6.12-.81-6.27S8.13 4.49 6.64 8.29l-3.76 9.59c-.49 1.23-.73 1.85-.43 2.29s.96.44 2.29.44H8.5c.94 0 1.41 0 1.7-.3.3-.29.3-.76.3-1.7z'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
