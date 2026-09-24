import type { Icon } from './types'

export const IconFoldHorizontal: Icon = ({
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
      data-slot='icon-ui-fold-horizontal'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M22.24 12h-5.97' stroke='currentColor' />
      <path
        d='m18.21 15.2-.38-.37c-1.33-1.33-2-2-2-2.83s.67-1.5 2-2.83l.38-.38'
        stroke='currentColor'
      />
      <path d='M1.76 12h5.97' stroke='currentColor' />
      <path
        d='m5.79 15.2.38-.37c1.33-1.33 2-2 2-2.83s-.67-1.5-2-2.83l-.38-.38'
        stroke='currentColor'
      />
      <path d='M12 4.36V1.6' stroke='currentColor' />
      <path d='M12 10.32V7.56' stroke='currentColor' />
      <path d='M12 16.33v-2.76' stroke='currentColor' />
      <path d='M12 22.26V19.5' stroke='currentColor' />
    </svg>
  )
}
