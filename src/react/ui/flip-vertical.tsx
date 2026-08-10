import type { Icon } from './types'

export const IconFlipVertical: Icon = ({
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
      data-slot='flip-vertical'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M13.42 13.28c4.08 0 6.12 0 6.28.82.15.81-1.75 1.56-5.54 3.04l-6.38 2.5c-1.24.5-1.86.73-2.3.44-.43-.3-.43-.97-.43-2.3v-2.5c0-.94 0-1.41.3-1.7.29-.3.76-.3 1.7-.3zm0-2.56c4.08 0 6.12 0 6.28-.82.15-.81-1.75-1.56-5.54-3.04l-6.38-2.5c-1.24-.5-1.86-.73-2.3-.44-.43.3-.43.97-.43 2.3v2.5c0 .94 0 1.41.3 1.7.29.3.76.3 1.7.3z'
        fill='currentColor'
      />
      <path
        d='M13.42 13.28c4.08 0 6.12 0 6.28.82.15.81-1.75 1.56-5.54 3.04l-6.38 2.5c-1.24.5-1.86.73-2.3.44-.43-.3-.43-.97-.43-2.3v-2.5c0-.94 0-1.41.3-1.7.29-.3.76-.3 1.7-.3zm0-2.56c4.08 0 6.12 0 6.28-.82.15-.81-1.75-1.56-5.54-3.04l-6.38-2.5c-1.24-.5-1.86-.73-2.3-.44-.43.3-.43.97-.43 2.3v2.5c0 .94 0 1.41.3 1.7.29.3.76.3 1.7.3z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
    </svg>
  )
}
