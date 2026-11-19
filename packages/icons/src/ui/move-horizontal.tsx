import type { Icon } from './types'

export const IconMoveHorizontal: Icon = ({
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
      data-slot='icon-ui-move-horizontal'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='m19.97 15.06.25-.26c1.34-1.33 2-2 2-2.83s-.66-1.5-2-2.83l-.25-.26'
        stroke='currentColor'
      />
      <path
        d='m4 8.92-.22.22c-1.34 1.33-2 2-2 2.83s.66 1.5 2 2.83h0l.22.22'
        stroke='currentColor'
      />
      <path d='M10.25 4.56v14.82' stroke='currentColor' />
      <path d='M13.8 4.56v14.82' stroke='currentColor' />
      <path d='M7 11.97H1.96' stroke='currentColor' />
      <path d='M22.07 11.97H17.1' stroke='currentColor' />
    </svg>
  )
}
