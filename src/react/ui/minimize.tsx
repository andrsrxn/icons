import type { Icon } from './types'

export const IconMinimize: Icon = ({
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
      data-slot='minimize'
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
        d='m20.633 8.788-1.416.001c-1.888.002-2.832.003-3.418-.583-.587-.586-.587-1.53-.587-3.417V3.367m5.421 11.845-1.416-.001c-1.888-.002-2.832-.003-3.418.583-.587.586-.587 1.53-.587 3.417v1.422M3.367 8.788l1.417.001c1.887.002 2.83.003 3.417-.583.587-.586.587-1.53.587-3.417V3.367M3.367 15.212l1.417-.001c1.887-.002 2.83-.003 3.417.583.587.586.587 1.53.587 3.417v1.422'
      />
    </svg>
  )
}
