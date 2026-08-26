import type { Icon } from './types'

export const IconBowArrow: Icon = ({
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
      data-slot='ui-icon-bow-arrow'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M5.17 14.71h3.9l.29 3.97-3.02 2.5-.58-3.33-3.16-.48z'
        fill='currentColor'
      />
      <path
        d='M15.94 2.75h1.44c1.88 0 2.83 0 3.41.58s.59 1.53.59 3.42v1.44M3.52 16.4l.43-.42c.51-.52.77-.77 1.09-.92s.68-.18 1.4-.24l1.71-.15c.51-.04.77-.06.93.09s.16.4.16.9v1.51c0 .9 0 1.36-.18 1.76-.19.4-.53.7-1.22 1.28l-.37.32c-.71.6-1.07.91-1.36.78-.3-.14-.3-.6-.3-1.54v-.66c0-.47 0-.7-.14-.85s-.38-.15-.85-.15h-.6c-1.02 0-1.54 0-1.66-.3-.13-.31.23-.68.96-1.4m5.66-1.47L20.24 3.9m-1.51 14.73c-.2 1-.3 1.5-.64 1.56s-.62-.4-1.2-1.34a36 36 0 0 0-5.14-6.58 35 35 0 0 0-6.4-5.01c-.97-.59-1.45-.88-1.4-1.22.07-.34.59-.44 1.62-.65 3.73-.74 7.55-.3 10.51 2.65 2.96 2.96 3.38 6.93 2.65 10.59'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
