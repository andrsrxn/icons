import type { Icon } from './types'

export const IconBarcode: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-barcode'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect opacity='.2' x='2.7' y='2.7' width='18.59' height='18.59' rx='2' fill='currentColor' />
      <path
        d='M15.91 21.27c2.24 0 3.36 0 4.14-.56a3 3 0 0 0 .69-.68c.56-.79.56-1.9.56-4.15'
        stroke='currentColor'
      />
      <path
        d='M15.95 2.76c2.2 0 3.3 0 4.08.55a3 3 0 0 1 .72.72c.55.78.55 1.88.55 4.09'
        stroke='currentColor'
      />
      <path
        d='M8.1 21.27c-2.25 0-3.37 0-4.16-.56a3 3 0 0 1-.67-.68c-.57-.78-.57-1.9-.57-4.15'
        stroke='currentColor'
      />
      <path
        d='M8.1 2.76c-2.25 0-3.37 0-4.16.57a3 3 0 0 0-.67.67c-.57.79-.57 1.91-.57 4.16'
        stroke='currentColor'
      />
      <path d='M7.63 7.13v9.74' stroke='currentColor' />
      <path d='M12.08 7.13v9.74' stroke='currentColor' />
      <path d='M16.53 7.13v9.74' stroke='currentColor' />
    </svg>
  )
}
