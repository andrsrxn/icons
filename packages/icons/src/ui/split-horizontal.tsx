import type { Icon } from './types'

export const IconSplitHorizontal: Icon = ({
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
      data-slot='icon-ui-split-horizontal'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.73 11.54c0-3.3 0-4.95 1.03-5.98 1.02-1.02 2.67-1.02 5.97-1.02h6.54c3.3 0 4.95 0 5.97 1.02 1.03 1.03 1.03 2.68 1.03 5.98v.92c0 3.3 0 4.95-1.03 5.98-1.02 1.02-2.67 1.02-5.97 1.02H8.73c-3.3 0-4.95 0-5.97-1.02-1.03-1.03-1.03-2.68-1.03-5.98z'
        fill='currentColor'
      />
      <path
        d='M8.73 19.46h6.54c3.3 0 4.95 0 5.97-1.02 1.03-1.03 1.03-2.68 1.03-5.98v-.92c0-3.3 0-4.95-1.03-5.98-1.02-1.02-2.67-1.02-5.97-1.02H8.73c-3.3 0-4.95 0-5.97 1.02-1.03 1.03-1.03 2.68-1.03 5.98v.92c0 3.3 0 4.95 1.03 5.98 1.02 1.02 2.67 1.02 5.97 1.02'
        stroke='currentColor'
      />
      <path d='M12 2.05v19.9' stroke='currentColor' />
    </svg>
  )
}
