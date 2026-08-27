import type { Icon } from './types'

export const IconHardDrive: Icon = ({
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
      data-slot='ui-icon-hard-drive'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M19.6 12.9c.64 0 .95 0 1.19.13a1 1 0 0 1 .35.35c.14.24.14.56.14 1.19 0 1.9 0 2.86-.42 3.56a3 3 0 0 1-1.06 1.06c-.7.42-1.65.42-3.56.42H7.76c-1.9 0-2.86 0-3.56-.42a3 3 0 0 1-1.06-1.06c-.42-.7-.42-1.66-.42-3.56 0-.63 0-.95.14-1.19a1 1 0 0 1 .35-.35c.24-.14.55-.14 1.19-.14z'
        fill='currentColor'
      />
      <path
        d='M16.46 19.6c1.7 0 2.55 0 3.2-.33a3 3 0 0 0 1.29-1.29c.33-.64.33-1.5.33-3.2l-.01-.59-.07-.37-.17-.57-1.6-4.77c-.67-1.97-1-2.96-1.78-3.52-.79-.57-1.83-.57-3.91-.57h-3.48c-2.08 0-3.13 0-3.91.57S5.23 6.5 4.57 8.48l-1.6 4.77a6 6 0 0 0-.24.94l-.01.6c0 1.7 0 2.55.33 3.2a3 3 0 0 0 1.3 1.28c.64.34 1.5.34 3.2.34zm4.16-6.44H3.38m7.12 3H6.6'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
