import type { Icon } from './types'

export const IconDoorUser: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-door-user'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M5.11 2.68H18.9v10.29l-2.32-1.07-2.4 1.07-.3 2.78 1.74 1.62-2.06 1-.79 3.02H5.11z'
        fill='currentColor'
      />
      <path
        d='M18.89 9.23v-.55c0-2.83 0-4.24-.88-5.12s-2.3-.88-5.12-.88H11.1c-2.83 0-4.24 0-5.12.88s-.88 2.3-.88 5.12v12.44'
        stroke='currentColor'
      />
      <path d='M21.18 21.39H2.82' stroke='currentColor' />
      <path d='M19.28 14.65a2.69 2.69 0 1 0-5.38 0 2.69 2.69 0 0 0 5.38 0' stroke='currentColor' />
      <path d='M12.8 21.12a3.78 3.78 0 0 1 7.56 0' stroke='currentColor' />
    </svg>
  )
}
