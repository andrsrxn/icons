import type { Icon } from './types'

export const IconUnlock: Icon = ({
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
      data-slot='icon-ui-unlock'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M3.3 15.24c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88h5.4c2.82 0 4.24 0 5.12.88s.88 2.3.88 5.12v.98c0 2.83 0 4.24-.88 5.12s-2.3.88-5.12.88H9.3c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12z'
        fill='currentColor'
      />
      <path
        d='M9.8 22.22h4.4c2.81 0 4.22 0 5.17-.76q.31-.26.57-.57c.76-.95.76-2.36.76-5.16v0c0-2.8 0-4.21-.76-5.17a4 4 0 0 0-.57-.56c-.95-.76-2.36-.76-5.16-.76H9.79c-2.8 0-4.2 0-5.16.76q-.32.24-.57.56c-.76.96-.76 2.36-.76 5.17v0c0 2.8 0 4.2.76 5.16q.25.31.57.57c.95.76 2.36.76 5.16.76'
        stroke='currentColor'
      />
      <path
        d='m7.62 9.24.42-3.62.07-.53a4 4 0 0 1 4.35-3.3l.31.02a4 4 0 0 1 3.14 1.88l.07.1'
        stroke='currentColor'
      />
      <path
        d='M13.11 15.44a1.11 1.11 0 1 1-2.22 0 1.11 1.11 0 0 1 2.22 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
