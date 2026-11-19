import type { Icon } from './types'

export const IconMoveVertical: Icon = ({
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
      data-slot='icon-ui-move-vertical'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='m8.91 19.94.26.25c1.33 1.34 2 2 2.83 2s1.5-.66 2.83-2l.26-.25'
        stroke='currentColor'
      />
      <path
        d='m15.05 3.97-.22-.22c-1.33-1.34-2-2-2.83-2s-1.5.66-2.83 2h0l-.22.22'
        stroke='currentColor'
      />
      <path d='M19.41 10.22H4.6' stroke='currentColor' />
      <path d='M19.41 13.78H4.6' stroke='currentColor' />
      <path d='M12 6.98V1.92' stroke='currentColor' />
      <path d='M12 22.04v-4.97' stroke='currentColor' />
    </svg>
  )
}
