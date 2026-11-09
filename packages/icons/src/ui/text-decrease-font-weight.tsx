import type { Icon } from './types'

export const IconTextDecreaseFontWeight: Icon = ({
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
      data-slot='icon-ui-text-decrease-font-weight'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='m21.35 16.05-.7.7c-1.33 1.34-2 2-2.83 2s-1.5-.66-2.83-2l-.7-.7'
        stroke='currentColor'
      />
      <path d='M17.82 18.35V10' stroke='currentColor' />
      <path
        d='M4.95 5.81h2.04a3 3 0 0 1 2.99 3c0 1.65-1.01 3-3.7 3H7.4a3.5 3.5 0 0 1 0 6.98H5.11m.04 0c-.96 0-1.45 0-1.8-.25q-.18-.14-.32-.32c-.24-.35-.24-.83-.24-1.8V8.18c0-.97 0-1.46.24-1.8q.14-.2.33-.32c.34-.25.83-.25 1.8-.25'
        stroke='currentColor'
      />
    </svg>
  )
}
