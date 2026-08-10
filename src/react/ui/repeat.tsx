import type { Icon } from './types'

export const IconRepeat: Icon = ({
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
      data-slot='repeat'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='m18.39 14.63.08.09c1.02 1.1 1.53 1.66 1.53 2.36s-.51 1.25-1.53 2.35l-.08.1M20 17.1H8.16c-1.81 0-2.72 0-3.28-.64s-.56-1.66-.56-3.72M4 6.92h11.84c1.81 0 2.72 0 3.28.64s.56 1.66.56 3.71M5.61 4.47l-.08.1C4.51 5.66 4 6.21 4 6.91s.51 1.25 1.53 2.36l.08.09'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
