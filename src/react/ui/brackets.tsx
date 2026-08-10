import type { Icon } from './types'

export const IconBrackets: Icon = ({
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
      data-slot='brackets'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M8.9 20.22c-1 0-1.51 0-1.9-.18a2 2 0 0 1-1-1c-.18-.39-.18-.9-.18-1.9v-2.76a2 2 0 0 0-1.42-1.9l-.04-.02a.5.5 0 0 1 0-.96h.04a2 2 0 0 0 1.42-1.91V6.87c0-1.02 0-1.52.18-1.91a2 2 0 0 1 1-1c.39-.18.9-.18 1.9-.18m6.2 16.44c1 0 1.51 0 1.9-.18a2 2 0 0 0 1-1c.18-.39.18-.9.18-1.9v-2.76a2 2 0 0 1 1.42-1.9l.04-.02a.5.5 0 0 0 0-.96h-.04a2 2 0 0 1-1.42-1.91V6.87c0-1.02 0-1.52-.18-1.91a2 2 0 0 0-1-1c-.39-.18-.9-.18-1.9-.18'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
