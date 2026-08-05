import type { Icon } from './types'

export const IconMaximize: Icon = ({
  size = 24,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='maximize'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='m14.92 3.695 1.38-.001c1.888-.002 2.832-.003 3.418.583.587.586.587 1.53.587 3.417v1.387m-5.386 11.224 1.382.001c1.887.002 2.83.003 3.417-.583.587-.586.587-1.53.587-3.417V14.92M9.08 3.695l-1.382-.001c-1.887-.002-2.83-.003-3.417.583-.587.586-.587 1.53-.587 3.417v1.387M9.08 20.305l-1.382.001c-1.887.002-2.83.003-3.417-.583-.587-.586-.587-1.53-.587-3.417V14.92'
      />
    </svg>
  )
}
