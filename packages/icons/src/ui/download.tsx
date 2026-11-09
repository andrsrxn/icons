import type { Icon } from './types'

export const IconDownload: Icon = ({
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
      data-slot='icon-ui-download'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M2.69 14.2H21.3c0 2.59 0 3.89-.58 4.85a4 4 0 0 1-1.34 1.34c-.96.58-2.26.58-4.86.58H9.47c-2.6 0-3.9 0-4.85-.58a4 4 0 0 1-1.34-1.34c-.58-.96-.58-2.26-.58-4.86'
        fill='currentColor'
      />
      <path
        d='M2.69 14.5c0 2.3 0 3.46.46 4.34a4 4 0 0 0 1.67 1.67c.88.46 2.03.46 4.34.46h5.68c2.3 0 3.46 0 4.34-.46a4 4 0 0 0 1.67-1.68c.46-.87.46-2.02.46-4.33'
        stroke='currentColor'
      />
      <path
        d='m17.37 10.6-2.55 2.57c-1.34 1.33-2 2-2.83 2s-1.5-.67-2.83-2L6.59 10.6'
        stroke='currentColor'
      />
      <path d='M11.98 2v12.82' stroke='currentColor' />
    </svg>
  )
}
