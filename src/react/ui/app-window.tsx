import type { Icon } from './types'

export const IconAppWindow: Icon = ({
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
      data-slot='app-window'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M3.56 8.77c0-1.89 0-2.83.58-3.42.59-.58 1.53-.58 3.42-.58h8.88c1.89 0 2.83 0 3.42.58.58.59.58 1.53.58 3.42v6.46c0 1.89 0 2.83-.58 3.42-.59.58-1.53.58-3.42.58H7.56c-1.89 0-2.83 0-3.42-.58-.58-.59-.58-1.53-.58-3.42z'
        fill='currentColor'
      />
      <path
        d='M14 8.29a.4.4 0 1 1-.82 0 .4.4 0 0 1 .81 0m-3.49 0a.4.4 0 1 1-.81 0 .4.4 0 0 1 .81 0m-3.49 0a.4.4 0 1 1-.81 0 .4.4 0 0 1 .81 0'
        fill='currentColor'
      />
      <path
        d='M3.56 8.77c0-1.89 0-2.83.58-3.42.59-.58 1.53-.58 3.42-.58h8.88c1.89 0 2.83 0 3.42.58.58.59.58 1.53.58 3.42v6.46c0 1.89 0 2.83-.58 3.42-.59.58-1.53.58-3.42.58H7.56c-1.89 0-2.83 0-3.42-.58-.58-.59-.58-1.53-.58-3.42z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path
        d='M14 8.29a.4.4 0 1 1-.82 0 .4.4 0 0 1 .81 0Zm-3.5 0a.4.4 0 1 1-.81 0 .4.4 0 0 1 .81 0Zm-3.49 0a.4.4 0 1 1-.81 0 .4.4 0 0 1 .81 0Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
