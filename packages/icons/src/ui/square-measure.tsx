import type { Icon } from './types'

export const IconSquareMeasure: Icon = ({
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
      data-slot='icon-ui-square-measure'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.7 15.07c0-3.3 0-4.95 1.03-5.98 1.03-1.02 2.68-1.02 5.98-1.02h.28c3.3 0 4.95 0 5.97 1.02C16 10.12 16 11.77 16 15.07v.28c0 3.3 0 4.95-1.03 5.97-1.02 1.03-2.67 1.03-5.97 1.03h-.28c-3.3 0-4.95 0-5.98-1.03-1.02-1.02-1.02-2.67-1.02-5.97z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M8.99 22.35h-.28c-3.3 0-4.95 0-5.98-1.03-1.02-1.02-1.02-2.67-1.02-5.97v-.28c0-3.3 0-4.95 1.02-5.98 1.03-1.02 2.68-1.02 5.98-1.02h.28c3.3 0 4.95 0 5.97 1.02C16 10.12 16 11.77 16 15.07v.28c0 3.3 0 4.95-1.03 5.97-1.02 1.03-2.67 1.03-5.97 1.03'
        stroke='currentColor'
      />
      <path d='M1.93 3.48h13.84' stroke='currentColor' />
      <path d='M20.67 8.3v13.83' stroke='currentColor' />
      <path d='M1.93 5.38V1.69' stroke='currentColor' />
      <path d='M18.77 8.3h3.7' stroke='currentColor' />
      <path d='M15.77 5.38V1.69' stroke='currentColor' />
      <path d='M18.77 22.13h3.7' stroke='currentColor' />
    </svg>
  )
}
