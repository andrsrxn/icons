import type { Icon } from './types'

export const IconDiceSix: Icon = ({
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
      data-slot='dice-six'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M3.76 7.64c0-1.83 0-2.75.57-3.31s1.48-.57 3.3-.57h8.73c1.83 0 2.75 0 3.31.57s.57 1.48.57 3.3v8.73c0 1.83 0 2.75-.57 3.31s-1.48.57-3.3.57H7.63c-1.83 0-2.75 0-3.31-.57s-.57-1.48-.57-3.3z'
        fill='currentColor'
      />
      <path
        d='M16.73 11.95a.65.65 0 1 1-1.3 0 .65.65 0 0 1 1.3 0m0 4.3a.65.65 0 1 1-1.3 0 .65.65 0 0 1 1.3 0m-8.09-4.37a.65.65 0 1 1-1.3 0 .65.65 0 0 1 1.3 0m0-4.23a.65.65 0 1 1-1.3 0 .65.65 0 0 1 1.3 0m0 8.45a.65.65 0 1 1-1.3 0 .65.65 0 0 1 1.3 0m8.09-8.45a.65.65 0 1 1-1.3 0 .65.65 0 0 1 1.3 0'
        fill='currentColor'
      />
      <path
        d='M3.76 7.76c0-1.89 0-2.83.58-3.42.59-.58 1.53-.58 3.42-.58h8.48c1.89 0 2.83 0 3.42.58.58.59.58 1.53.58 3.42v8.48c0 1.89 0 2.83-.58 3.42-.59.58-1.53.58-3.42.58H7.76c-1.89 0-2.83 0-3.42-.58-.58-.59-.58-1.53-.58-3.42z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path
        d='M16.73 11.95a.65.65 0 1 1-1.3 0 .65.65 0 0 1 1.3 0Zm0 4.3a.65.65 0 1 1-1.3 0 .65.65 0 0 1 1.3 0Zm-8.09-4.37a.65.65 0 1 1-1.3 0 .65.65 0 0 1 1.3 0Zm0-4.23a.65.65 0 1 1-1.3 0 .65.65 0 0 1 1.3 0Zm0 8.45a.65.65 0 1 1-1.3 0 .65.65 0 0 1 1.3 0Zm8.09-8.45a.65.65 0 1 1-1.3 0 .65.65 0 0 1 1.3 0Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
