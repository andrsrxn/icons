import type { Icon } from './types'

export const IconDislikeFilled: Icon = ({
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
      data-slot='dislike-filled'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M21.07 11.82c0 .75 0 1.12-.14 1.41q-.24.51-.75.76c-.3.13-.67.13-1.42.13s-1.12 0-1.41-.13a1.5 1.5 0 0 1-.76-.76c-.13-.29-.13-.66-.13-1.41V6.18c0-.75 0-1.12.13-1.42q.24-.51.76-.75c.29-.13.66-.13 1.41-.13s1.13 0 1.42.13q.51.24.75.75c.14.3.14.67.14 1.42zm-7.13 4.82c.09-1.1.75-1.78 1.21-2.33a1 1 0 0 0 .2-.58V4.88a1 1 0 0 0-1-1H6.9a2 2 0 0 0-1.87 1.3L2.9 10.82a2 2 0 0 0 1.87 2.7h4.49c.44 0 .76.62.58 1.03a7 7 0 0 0-.44 2.89c.1 2.18 1.94 2.59 3.46 2.67.58.03 1.04-.48 1.03-1.05-.02-.73-.02-1.63.04-2.42'
        fill='currentColor'
      />
    </svg>
  )
}
