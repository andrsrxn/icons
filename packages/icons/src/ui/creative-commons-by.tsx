import type { Icon } from './types'

export const IconCreativeCommonsBy: Icon = ({
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
      data-slot='icon-ui-creative-commons-by'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.72 12a10.28 10.28 0 1 0 20.56 0 10.28 10.28 0 0 0-20.56 0m7.65-4.57c0 1.08.64 2 1.57 2.41l-2.4 2-.15 2.81 1.49.46v2.13l1.2 1.97h1.75l1.15-1.77.2-2.33 1.56-.46-.48-2.82-2.07-2.05a2.63 2.63 0 1 0-3.82-2.35'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M1.72 12a10.28 10.28 0 1 1 20.56 0 10.28 10.28 0 0 1-20.56 0'
        stroke='currentColor'
      />
      <path d='M14.67 7.56a2.68 2.68 0 1 0-5.35 0 2.68 2.68 0 0 0 5.35 0' stroke='currentColor' />
      <path
        d='M8.23 13.72c0-1.92 1.69-3.48 3.77-3.48 2.07 0 3.76 1.56 3.76 3.48 0 .4 0 .59-.05.74a1 1 0 0 1-.63.63c-.15.05-.35.05-.74.05h-.1s.2 4.36-2.24 4.36-2.18-4.36-2.18-4.36h-.17c-.39 0-.58 0-.74-.05a1 1 0 0 1-.62-.63c-.06-.15-.06-.35-.06-.74'
        stroke='currentColor'
      />
    </svg>
  )
}
